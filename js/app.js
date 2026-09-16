/**
 * Aplicación Principal - Dietética NUTS WebApp
 * Gestión de catálogo, carrito reactivo, selector de pesos, filtros y checkout a WhatsApp.
 */

const AppModule = (function () {
    // Estado de la aplicación
    let products = [];
    let config = {};
    let activeCategory = 'all';
    let searchQuery = '';
    let filterSinTacc = false;
    let filterCombosOnly = false;
    
    // Almacena la selección actual de peso y variante para cada tarjeta de producto
    // Map: productId -> { weight: '1kg' | '500g', variant: string, qty: number }
    const productCardState = {};

    // Carrito de compras: Array de { key, id, name, category, weight, variant, unitPrice, qty, isSinTacc, subtotal }
    let cart = [];

    function init() {
        loadData();
        loadCart();
        renderCategories();
        renderProducts();
        updateCartUI();
        setupEventListeners();
        console.log("NUTS WebApp inicializada con éxito.");
    }

    function loadData() {
        products = AdminModule.getEffectiveProducts();
        config = AdminModule.getEffectiveConfig();

        // Inicializar estado de las tarjetas
        products.forEach(p => {
            if (!productCardState[p.id]) {
                productCardState[p.id] = {
                    weight: p.priceType === 'weight' ? '1kg' : null,
                    variant: p.options && p.options.length > 0 ? p.options[0] : null,
                    qty: 1
                };
            }
        });
    }

    function refreshCatalog() {
        loadData();
        renderProducts();
        updateCartPricesFromCatalog();
        updateCartUI();
    }

    function loadCart() {
        try {
            const savedCart = localStorage.getItem('nuts_shopping_cart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
            }
        } catch (e) {
            cart = [];
        }
    }

    function saveCart() {
        try {
            localStorage.setItem('nuts_shopping_cart', JSON.stringify(cart));
        } catch (e) {
            console.error("Error al guardar carrito:", e);
        }
    }

    function formatCurrency(amount) {
        return `$${Number(amount).toLocaleString('es-AR')}`;
    }

    // ==========================================
    // RENDERIZADO DE CATEGORÍAS
    // ==========================================
    function renderCategories() {
        const container = document.getElementById('categories-container');
        if (!container) return;

        let html = '';
        CATEGORIES.forEach(cat => {
            const isActive = activeCategory === cat.id;
            html += `
                <button type="button" 
                        class="category-pill flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                            isActive 
                            ? 'bg-stone-900 text-white border-stone-900 shadow-sm' 
                            : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400 hover:bg-amber-50/50'
                        }"
                        data-category="${cat.id}">
                    <span>${getCategoryEmoji(cat.id)}</span>
                    <span>${cat.name}</span>
                    <span class="text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-stone-700 text-stone-200' : 'bg-stone-100 text-stone-500'}">
                        ${cat.count}
                    </span>
                </button>
            `;
        });

        container.innerHTML = html;

        // Listeners de categorías
        container.querySelectorAll('.category-pill').forEach(btn => {
            btn.addEventListener('click', () => {
                activeCategory = btn.dataset.category;
                filterCombosOnly = (activeCategory === 'combos');
                renderCategories();
                renderProducts();
            });
        });
    }

    function getCategoryEmoji(catId) {
        const map = {
            'all': '✨',
            'combos': '🎁',
            'frutos-secos': '🥜',
            'mixes': '🥣',
            'granolas-snacks': '🍪',
            'deshidratados': '🍇',
            'harinas': '🌾',
            'semillas': '🌱',
            'legumbres': '🍲',
            'cereales': '🥣',
            'almacen': '🥫',
            'suplementos': '⚡',
            'varios': '🍫'
        };
        return map[catId] || '📦';
    }

    // ==========================================
    // RENDERIZADO DE PRODUCTOS
    // ==========================================
    function renderProducts() {
        const grid = document.getElementById('products-grid');
        const emptyState = document.getElementById('empty-state');
        const countLabel = document.getElementById('results-count');
        if (!grid) return;

        // Filtrado
        const filtered = products.filter(p => {
            // Filtro por categoría
            if (activeCategory !== 'all' && p.category !== activeCategory) {
                return false;
            }

            // Filtro solo Sin TACC
            if (filterSinTacc && !p.isSinTacc) {
                return false;
            }

            // Filtro solo Combos
            if (filterCombosOnly && p.category !== 'combos') {
                return false;
            }

            // Filtro de búsqueda por texto
            if (searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase().trim();
                const matchName = p.name.toLowerCase().includes(query);
                const matchDesc = p.description && p.description.toLowerCase().includes(query);
                const matchTags = p.tags && p.tags.some(t => t.toLowerCase().includes(query));
                const matchItems = p.itemsIncluded && p.itemsIncluded.some(i => i.toLowerCase().includes(query));
                if (!matchName && !matchDesc && !matchTags && !matchItems) {
                    return false;
                }
            }

            return true;
        });

        if (countLabel) {
            countLabel.textContent = `${filtered.length} producto${filtered.length === 1 ? '' : 's'}`;
        }

        if (filtered.length === 0) {
            grid.innerHTML = '';
            if (emptyState) emptyState.classList.remove('hidden');
            return;
        }

        if (emptyState) emptyState.classList.add('hidden');

        let html = '';
        filtered.forEach(p => {
            const state = productCardState[p.id];
            
            // Determinar precio actual según el selector
            let currentPrice = 0;
            let presentationLabel = '';

            if (p.priceType === 'weight') {
                if (state.weight === '500g') {
                    currentPrice = p.price500g;
                    presentationLabel = '500 g';
                } else {
                    currentPrice = p.price1kg;
                    presentationLabel = '1 Kg';
                }
            } else if (p.priceType === 'combo') {
                currentPrice = p.price;
                presentationLabel = 'Combo Completo';
            } else {
                currentPrice = p.priceUnit || p.price;
                presentationLabel = p.unitLabel || 'x unidad';
            }

            html += `
            <div class="product-card bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden flex flex-col justify-between card-hover transition-all duration-200 ${!p.inStock ? 'opacity-70 bg-stone-50' : ''}" data-product-id="${p.id}">
                
                <!-- Encabezado de Tarjeta y Badges -->
                <div class="p-5 flex-1 flex flex-col">
                    <div class="flex items-start justify-between gap-2 mb-2">
                        <div class="flex flex-wrap gap-1.5 items-center">
                            <span class="text-[10px] uppercase font-bold tracking-wider text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded-md">
                                ${p.categoryName}
                            </span>
                            ${p.isSinTacc ? `
                                <span class="badge-sintacc text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                                    <svg class="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Sin TACC
                                </span>
                            ` : ''}
                            ${p.isNew ? `
                                <span class="badge-new text-[10px] font-bold px-2 py-0.5 rounded-md">
                                    Nuevo
                                </span>
                            ` : ''}
                        </div>

                        ${!p.inStock ? `
                            <span class="text-[10px] font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md">
                                Sin Stock
                            </span>
                        ` : ''}
                    </div>

                    <!-- Nombre del Producto -->
                    <h3 class="font-bold text-base sm:text-lg text-stone-900 leading-tight mb-2">
                        ${p.name}
                    </h3>

                    <!-- Descripción -->
                    <p class="text-xs text-stone-600 leading-relaxed mb-4 flex-1">
                        ${p.description}
                    </p>

                    <!-- Detalle de Combos Especiales -->
                    ${p.priceType === 'combo' && p.itemsIncluded ? `
                        <div class="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3 mb-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                                    <span>📦</span> Incluye en este combo:
                                </span>
                                <span class="text-[11px] font-semibold text-amber-800 bg-amber-200/70 px-1.5 py-0.5 rounded">
                                    ${p.itemsIncluded.length} ítems
                                </span>
                            </div>
                            <ul class="text-[11px] text-stone-700 space-y-1">
                                ${p.itemsIncluded.slice(0, 4).map(item => `
                                    <li class="flex items-start gap-1.5">
                                        <span class="text-amber-600 mt-0.5">✔</span>
                                        <span>${item}</span>
                                    </li>
                                `).join('')}
                                ${p.itemsIncluded.length > 4 ? `
                                    <li class="text-[10px] text-amber-800 font-semibold pl-4">
                                        + y ${p.itemsIncluded.length - 4} productos más...
                                    </li>
                                ` : ''}
                            </ul>
                            <button type="button" class="view-combo-btn mt-2.5 text-xs font-bold text-amber-900 hover:text-amber-700 underline flex items-center gap-1" data-combo-id="${p.id}">
                                Ver lista completa del combo
                            </button>
                        </div>
                    ` : ''}

                    <!-- Selector de Variantes (ej. Sabores) -->
                    ${p.options && p.options.length > 0 ? `
                        <div class="mb-3">
                            <label class="block text-[11px] font-bold text-stone-600 mb-1">Elegí la opción:</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${p.options.map(opt => `
                                    <button type="button" 
                                            class="variant-btn px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                                                state.variant === opt 
                                                ? 'bg-stone-900 text-white border-stone-900' 
                                                : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                                            }"
                                            data-product-id="${p.id}" 
                                            data-variant="${opt}">
                                        ${opt}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}

                    <!-- Selector Dinámico de Peso (500g vs 1kg) -->
                    ${p.priceType === 'weight' ? `
                        <div class="mb-3">
                            <label class="block text-[11px] font-bold text-stone-600 mb-1">Elegí el peso:</label>
                            <div class="grid grid-cols-2 gap-1.5 p-1 bg-stone-100 rounded-xl">
                                <button type="button" 
                                        class="segment-btn py-1.5 px-2 rounded-lg text-xs font-semibold text-center ${state.weight === '500g' ? 'active' : ''}"
                                        data-product-id="${p.id}" 
                                        data-weight="500g">
                                    500 g <span class="block text-[10px] opacity-80">${formatCurrency(p.price500g)}</span>
                                </button>
                                <button type="button" 
                                        class="segment-btn py-1.5 px-2 rounded-lg text-xs font-semibold text-center ${state.weight === '1kg' ? 'active' : ''}"
                                        data-product-id="${p.id}" 
                                        data-weight="1kg">
                                    1 Kg <span class="block text-[10px] opacity-80">${formatCurrency(p.price1kg)}</span>
                                </button>
                            </div>
                        </div>
                    ` : ''}
                </div>

                <!-- Footer de la Tarjeta con Precio y Botón Agregar -->
                <div class="p-5 pt-3 border-t border-stone-100 bg-stone-50/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div>
                        <span class="text-[10px] uppercase font-bold text-stone-500 block">
                            ${p.priceType === 'weight' ? `Precio x ${state.weight === '500g' ? '500 gramos' : '1 kilo'}` : presentationLabel}
                        </span>
                        <div class="text-xl font-extrabold text-stone-900 tracking-tight">
                            ${formatCurrency(currentPrice)}
                        </div>
                    </div>

                    ${p.inStock ? `
                        <div class="flex items-center gap-2">
                            <!-- Stepper de Cantidad -->
                            <div class="flex items-center bg-white border border-stone-200 rounded-lg p-0.5 shadow-2xs">
                                <button type="button" class="qty-btn-minus w-7 h-7 text-stone-600 hover:text-stone-900 flex items-center justify-center font-bold text-sm" data-product-id="${p.id}">-</button>
                                <span class="w-6 text-center text-xs font-bold text-stone-900" id="card-qty-${p.id}">${state.qty}</span>
                                <button type="button" class="qty-btn-plus w-7 h-7 text-stone-600 hover:text-stone-900 flex items-center justify-center font-bold text-sm" data-product-id="${p.id}">+</button>
                            </div>

                            <!-- Botón Agregar -->
                            <button type="button" 
                                    class="add-to-cart-btn flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-stone-950 font-bold text-xs rounded-xl shadow-sm transition-all"
                                    data-product-id="${p.id}">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                                <span>Agregar</span>
                            </button>
                        </div>
                    ` : `
                        <button disabled class="w-full sm:w-auto px-4 py-2 bg-stone-200 text-stone-500 font-bold text-xs rounded-xl cursor-not-allowed">
                            Agotado
                        </button>
                    `}
                </div>
            </div>
            `;
        });

        grid.innerHTML = html;
        attachProductCardListeners();
    }

    function attachProductCardListeners() {
        // Listener de selector de peso
        document.querySelectorAll('.segment-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pid = btn.dataset.productId;
                const weight = btn.dataset.weight;
                productCardState[pid].weight = weight;
                renderProducts();
            });
        });

        // Listener de selector de variantes (sabores)
        document.querySelectorAll('.variant-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pid = btn.dataset.productId;
                const variant = btn.dataset.variant;
                productCardState[pid].variant = variant;
                renderProducts();
            });
        });

        // Stepper Menos
        document.querySelectorAll('.qty-btn-minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const pid = btn.dataset.productId;
                if (productCardState[pid].qty > 1) {
                    productCardState[pid].qty -= 1;
                    const el = document.getElementById(`card-qty-${pid}`);
                    if (el) el.textContent = productCardState[pid].qty;
                }
            });
        });

        // Stepper Más
        document.querySelectorAll('.qty-btn-plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const pid = btn.dataset.productId;
                productCardState[pid].qty += 1;
                const el = document.getElementById(`card-qty-${pid}`);
                if (el) el.textContent = productCardState[pid].qty;
            });
        });

        // Botón Agregar al Carrito
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pid = btn.dataset.productId;
                addToCart(pid);
            });
        });

        // Ver detalle de Combo Modal
        document.querySelectorAll('.view-combo-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const comboId = btn.dataset.comboId;
                openComboModal(comboId);
            });
        });
    }

    // ==========================================
    // LÓGICA DEL CARRITO DE COMPRAS
    // ==========================================
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product || !product.inStock) return;

        const state = productCardState[productId];
        const qty = state.qty || 1;
        const weight = state.weight;
        const variant = state.variant;

        // Calcular precio unitario
        let unitPrice = 0;
        let presentationLabel = '';

        if (product.priceType === 'weight') {
            unitPrice = weight === '500g' ? product.price500g : product.price1kg;
            presentationLabel = weight === '500g' ? '500 g' : '1 Kg';
        } else if (product.priceType === 'combo') {
            unitPrice = product.price;
            presentationLabel = 'Combo';
        } else {
            unitPrice = product.priceUnit || product.price;
            presentationLabel = product.unitLabel || 'Unidad';
        }

        // Generar clave única para el ítem considerando peso y variante
        const cartKey = `${product.id}_${weight || ''}_${variant || ''}`;

        const existingItem = cart.find(item => item.key === cartKey);
        if (existingItem) {
            existingItem.qty += qty;
            existingItem.subtotal = existingItem.qty * existingItem.unitPrice;
        } else {
            cart.push({
                key: cartKey,
                id: product.id,
                name: product.name,
                category: product.category,
                categoryName: product.categoryName,
                isSinTacc: product.isSinTacc,
                weight: weight,
                variant: variant,
                presentationLabel: presentationLabel,
                unitPrice: unitPrice,
                qty: qty,
                subtotal: unitPrice * qty
            });
        }

        // Resetear cantidad en tarjeta
        state.qty = 1;
        const el = document.getElementById(`card-qty-${productId}`);
        if (el) el.textContent = 1;

        saveCart();
        updateCartUI();
        triggerCartAnimation();
        showToast(`✔ ${product.name} agregado al carrito`);
    }

    function updateCartPricesFromCatalog() {
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (product) {
                if (product.priceType === 'weight') {
                    item.unitPrice = item.weight === '500g' ? product.price500g : product.price1kg;
                } else if (product.priceType === 'combo') {
                    item.unitPrice = product.price;
                } else {
                    item.unitPrice = product.priceUnit || product.price;
                }
                item.subtotal = item.unitPrice * item.qty;
            }
        });
        saveCart();
    }

    function changeCartItemQty(cartKey, delta) {
        const item = cart.find(i => i.key === cartKey);
        if (!item) return;

        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.key !== cartKey);
        } else {
            item.subtotal = item.qty * item.unitPrice;
        }

        saveCart();
        updateCartUI();
    }

    function removeCartItem(cartKey) {
        cart = cart.filter(i => i.key !== cartKey);
        saveCart();
        updateCartUI();
        showToast("Producto eliminado del carrito");
    }

    function clearCart() {
        if (cart.length === 0) return;
        if (confirm("¿Estás seguro de que querés vaciar todo el carrito?")) {
            cart = [];
            saveCart();
            updateCartUI();
            showToast("Carrito vaciado");
        }
    }

    function getCartTotals() {
        const totalCount = cart.reduce((acc, i) => acc + i.qty, 0);
        const totalPrice = cart.reduce((acc, i) => acc + i.subtotal, 0);
        return { totalCount, totalPrice };
    }

    function updateCartUI() {
        const { totalCount, totalPrice } = getCartTotals();

        // Badges del contador
        const badges = document.querySelectorAll('.cart-count-badge');
        badges.forEach(b => {
            b.textContent = totalCount;
            if (totalCount > 0) {
                b.classList.remove('hidden');
            } else {
                b.classList.add('hidden');
            }
        });

        // Totales en barra inferior y modal
        const bottomBar = document.getElementById('mobile-cart-bar');
        const bottomTotal = document.getElementById('mobile-cart-total');
        const bottomCount = document.getElementById('mobile-cart-items-count');
        
        if (bottomBar) {
            if (totalCount > 0) {
                bottomBar.classList.remove('translate-y-full');
            } else {
                bottomBar.classList.add('translate-y-full');
            }
        }
        if (bottomTotal) bottomTotal.textContent = formatCurrency(totalPrice);
        if (bottomCount) bottomCount.textContent = `${totalCount} producto${totalCount === 1 ? '' : 's'}`;

        // Totales en Header Desktop
        const headerTotal = document.getElementById('header-cart-total');
        if (headerTotal) headerTotal.textContent = formatCurrency(totalPrice);

        // Barra dinámica de progreso de Envío Gratis ($40.000)
        const freeThreshold = config.freeShippingThreshold || 40000;
        const minOrder = config.minOrderAmount || 20000;
        const shippingBanner = document.getElementById('cart-shipping-banner');
        const shippingText = document.getElementById('shipping-progress-text');
        const shippingPercent = document.getElementById('shipping-progress-percent');
        const shippingBar = document.getElementById('shipping-progress-bar');

        if (shippingBar && shippingText && shippingPercent) {
            if (cart.length === 0 || totalPrice === 0) {
                shippingText.innerHTML = `<span>🚲</span> Envíos SIN CARGO a partir de $40.000`;
                shippingPercent.textContent = `0%`;
                shippingBar.style.width = `0%`;
                shippingBar.className = "bg-amber-500 h-2 rounded-full transition-all duration-300";
                if (shippingBanner) {
                    shippingBanner.className = "bg-amber-50/90 border-b border-amber-200 px-4 py-2.5 transition-all text-amber-900";
                }
            } else if (totalPrice >= freeThreshold) {
                shippingText.innerHTML = `<span>🎉</span> ¡Tenés <strong>Envío a Domicilio SIN CARGO</strong>!`;
                shippingPercent.textContent = `100%`;
                shippingBar.style.width = `100%`;
                shippingBar.className = "bg-emerald-500 h-2 rounded-full transition-all duration-300";
                if (shippingBanner) {
                    shippingBanner.className = "bg-emerald-50 border-b border-emerald-200 px-4 py-2.5 transition-all text-emerald-900";
                }
            } else {
                const percent = Math.min(100, Math.round((totalPrice / freeThreshold) * 100));
                const remaining = freeThreshold - totalPrice;
                shippingBar.style.width = `${percent}%`;
                shippingPercent.textContent = `${percent}%`;
                shippingText.innerHTML = `<span>🚲</span> Agregá <strong>${formatCurrency(remaining)}</strong> más para <strong>Envío Gratis</strong>`;
                shippingBar.className = "bg-amber-500 h-2 rounded-full transition-all duration-300";
                if (shippingBanner) {
                    shippingBanner.className = "bg-amber-50/90 border-b border-amber-200 px-4 py-2.5 transition-all text-amber-900";
                }
            }
        }

        // Alerta y control de Compra Mínima ($20.000)
        const minOrderAlert = document.getElementById('min-order-alert');
        const minOrderAlertText = document.getElementById('min-order-alert-text');
        const checkoutWaBtn = document.getElementById('checkout-whatsapp-btn');

        if (minOrderAlert && minOrderAlertText && checkoutWaBtn) {
            if (cart.length === 0 || totalPrice === 0) {
                minOrderAlert.classList.add('hidden');
                checkoutWaBtn.disabled = true;
            } else if (totalPrice < minOrder) {
                const remainingMin = minOrder - totalPrice;
                minOrderAlert.classList.remove('hidden');
                minOrderAlertText.innerHTML = `Te faltan <strong>${formatCurrency(remainingMin)}</strong> para alcanzar el mínimo de compra.`;
                
                checkoutWaBtn.disabled = true;
                checkoutWaBtn.className = "w-full py-3 bg-stone-200 text-stone-500 font-extrabold text-xs rounded-xl cursor-not-allowed transition-all flex items-center justify-center gap-2";
                checkoutWaBtn.innerHTML = `<span>⚠️ Mínimo $20.000 (faltan ${formatCurrency(remainingMin)})</span>`;
            } else {
                minOrderAlert.classList.add('hidden');
                checkoutWaBtn.disabled = false;
                checkoutWaBtn.className = "w-full py-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-extrabold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer";
                checkoutWaBtn.innerHTML = `
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span>Confirmar Pedido por WhatsApp</span>
                `;
            }
        }

        // Renderizado de lista dentro del Drawer / Modal
        renderCartDrawerItems(totalPrice);
    }

    function renderCartDrawerItems(totalPrice) {
        const container = document.getElementById('cart-items-container');
        const emptyView = document.getElementById('cart-empty-view');
        const filledView = document.getElementById('cart-filled-view');
        const totalElement = document.getElementById('cart-total-price');
        const drawerFooter = document.getElementById('cart-drawer-footer');

        if (!container) return;

        if (cart.length === 0) {
            if (emptyView) emptyView.classList.remove('hidden');
            if (filledView) filledView.classList.add('hidden');
            if (drawerFooter) drawerFooter.classList.add('hidden');
            if (totalElement) totalElement.textContent = formatCurrency(0);
            return;
        }

        if (emptyView) emptyView.classList.add('hidden');
        if (filledView) filledView.classList.remove('hidden');
        if (drawerFooter) drawerFooter.classList.remove('hidden');
        if (totalElement) totalElement.textContent = formatCurrency(totalPrice);

        let html = '';
        cart.forEach(item => {
            html += `
            <div class="flex items-center justify-between p-3.5 bg-stone-50 rounded-2xl border border-stone-200/80 gap-3">
                <div class="flex-1">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="font-bold text-stone-900 text-sm">${item.name}</span>
                        ${item.isSinTacc ? '<span class="text-[9px] font-bold bg-emerald-100 text-emerald-800 px-1 py-0.2 rounded">Sin TACC</span>' : ''}
                    </div>
                    <div class="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                        <span class="font-semibold text-amber-800 bg-amber-100/70 px-1.5 py-0.2 rounded">${item.presentationLabel}</span>
                        ${item.variant ? `<span class="bg-stone-200 text-stone-700 px-1.5 py-0.2 rounded">Opción: ${item.variant}</span>` : ''}
                        <span>•</span>
                        <span>${formatCurrency(item.unitPrice)} c/u</span>
                    </div>
                    <div class="text-xs font-extrabold text-stone-900 mt-1">
                        Subtotal: ${formatCurrency(item.subtotal)}
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <div class="flex items-center bg-white border border-stone-300 rounded-lg p-0.5 shadow-2xs">
                        <button type="button" class="cart-minus-btn w-6 h-6 flex items-center justify-center font-bold text-stone-600 hover:text-stone-900" data-key="${item.key}">-</button>
                        <span class="w-6 text-center text-xs font-bold text-stone-900">${item.qty}</span>
                        <button type="button" class="cart-plus-btn w-6 h-6 flex items-center justify-center font-bold text-stone-600 hover:text-stone-900" data-key="${item.key}">+</button>
                    </div>

                    <button type="button" class="cart-remove-btn text-stone-400 hover:text-rose-600 p-1.5 transition-colors" data-key="${item.key}" title="Eliminar">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            `;
        });

        container.innerHTML = html;

        // Listeners dentro del drawer del carrito
        container.querySelectorAll('.cart-minus-btn').forEach(b => {
            b.addEventListener('click', () => changeCartItemQty(b.dataset.key, -1));
        });
        container.querySelectorAll('.cart-plus-btn').forEach(b => {
            b.addEventListener('click', () => changeCartItemQty(b.dataset.key, 1));
        });
        container.querySelectorAll('.cart-remove-btn').forEach(b => {
            b.addEventListener('click', () => removeCartItem(b.dataset.key));
        });
    }

    function triggerCartAnimation() {
        const btns = document.querySelectorAll('.cart-trigger-btn');
        btns.forEach(btn => {
            btn.classList.add('cart-bounce');
            setTimeout(() => btn.classList.remove('cart-bounce'), 400);
        });
    }

    // ==========================================
    // CHECKOUT Y CONEXIÓN CON WHATSAPP
    // ==========================================
    function generateOrderMessage(customerData) {
        const { totalPrice } = getCartTotals();
        let msg = `🛒 *NUEVO PEDIDO - NUTS* 🥜\n`;
        msg += `_Dietética & Almacén Saludable_\n`;
        msg += `-------------------------------------------\n`;
        msg += `👤 *Cliente:* ${customerData.name}\n`;
        msg += `📱 *Teléfono:* ${customerData.phone}\n`;
        msg += `📍 *Dirección de Entrega:* ${customerData.address}\n`;
        if (customerData.notes) {
            msg += `📝 *Aclaraciones / Timbre:* ${customerData.notes}\n`;
        }
        msg += `💳 *Método de Pago:* ${customerData.paymentMethod}\n`;
        if (customerData.paymentMethod.includes('Efectivo') && customerData.cashAmount) {
            msg += `💵 *Abona con:* $${customerData.cashAmount} (solicita vuelto)\n`;
        }
        msg += `-------------------------------------------\n`;
        msg += `📦 *PRODUCTOS SOLICITADOS:*\n`;

        cart.forEach((item, index) => {
            let line = `${index + 1}. *${item.qty}x ${item.name}*`;
            if (item.presentationLabel) line += ` (${item.presentationLabel})`;
            if (item.variant) line += ` [Opción: ${item.variant}]`;
            if (item.isSinTacc) line += ` 🌾 Sin TACC`;
            line += ` — ${formatCurrency(item.subtotal)}`;
            msg += `${line}\n`;
        });

        const freeThreshold = config.freeShippingThreshold || 40000;
        const shippingStatus = totalPrice >= freeThreshold
            ? "🚲 *Envío:* A domicilio SIN CARGO (superó $40.000)"
            : "🚲 *Envío:* A coordinar con la tienda (no alcanza monto para envío gratis de $40.000)";

        msg += `-------------------------------------------\n`;
        msg += `💰 *TOTAL A PAGAR: ${formatCurrency(totalPrice)}*\n`;
        msg += `${shippingStatus}\n`;
        msg += `-------------------------------------------\n`;
        msg += `_Pedido enviado desde la Tienda WebApp NUTS_`;

        return msg;
    }

    function handleWhatsAppCheckout() {
        if (cart.length === 0) {
            alert("Tu carrito está vacío. Agregá productos antes de confirmar.");
            return;
        }

        const { totalPrice } = getCartTotals();
        const minOrder = config.minOrderAmount || 20000;
        if (totalPrice < minOrder) {
            alert(`El monto mínimo de compra es de ${formatCurrency(minOrder)}. Te faltan ${formatCurrency(minOrder - totalPrice)} para poder enviar tu pedido.`);
            return;
        }

        const nameInput = document.getElementById('checkout-name');
        const phoneInput = document.getElementById('checkout-phone');
        const addressInput = document.getElementById('checkout-address');
        const notesInput = document.getElementById('checkout-notes');
        const paymentSelect = document.getElementById('checkout-payment');
        const cashAmountInput = document.getElementById('checkout-cash-amount');

        if (!nameInput || !nameInput.value.trim()) {
            alert("Por favor ingresá tu Nombre y Apellido.");
            nameInput.focus();
            return;
        }

        if (!addressInput || !addressInput.value.trim()) {
            alert("Por favor ingresá tu Dirección de entrega (calle, número y barrio).");
            addressInput.focus();
            return;
        }

        const customerData = {
            name: nameInput.value.trim(),
            phone: phoneInput ? phoneInput.value.trim() : '',
            address: addressInput.value.trim(),
            notes: notesInput ? notesInput.value.trim() : '',
            paymentMethod: paymentSelect ? paymentSelect.value : 'Efectivo',
            cashAmount: cashAmountInput ? cashAmountInput.value.trim() : ''
        };

        const messageText = generateOrderMessage(customerData);
        const encoded = encodeURIComponent(messageText);
        const waNumber = config.whatsapp || "5491151315757";
        const whatsappUrl = `https://wa.me/${waNumber}?text=${encoded}`;

        // Abrir WhatsApp en nueva pestaña
        window.open(whatsappUrl, '_blank');
        showToast("¡Redirigiendo a WhatsApp!");
    }

    function copyOrderSummary() {
        if (cart.length === 0) {
            alert("El carrito está vacío");
            return;
        }

        const nameInput = document.getElementById('checkout-name');
        const addressInput = document.getElementById('checkout-address');
        const paymentSelect = document.getElementById('checkout-payment');

        const customerData = {
            name: (nameInput && nameInput.value.trim()) || "A confirmar",
            phone: "",
            address: (addressInput && addressInput.value.trim()) || "A coordinar",
            notes: "",
            paymentMethod: (paymentSelect && paymentSelect.value) || "Efectivo",
            cashAmount: ""
        };

        const text = generateOrderMessage(customerData);
        navigator.clipboard.writeText(text).then(() => {
            showToast("✔ Resumen de pedido copiado al portapapeles");
        }).catch(() => {
            prompt("Copiá tu pedido aquí:", text);
        });
    }

    function printOrderReceipt() {
        if (cart.length === 0) {
            alert("El carrito está vacío");
            return;
        }

        const { totalPrice, totalCount } = getCartTotals();
        const name = document.getElementById('checkout-name')?.value || 'Cliente NUTS';
        const address = document.getElementById('checkout-address')?.value || 'Entrega a coordinar';
        const payment = document.getElementById('checkout-payment')?.value || 'Efectivo';

        let ticketArea = document.getElementById('print-ticket-area');
        if (!ticketArea) {
            ticketArea = document.createElement('div');
            ticketArea.id = 'print-ticket-area';
            document.body.appendChild(ticketArea);
        }

        ticketArea.innerHTML = `
            <div style="font-family: sans-serif; max-width: 400px; margin: 0 auto; padding: 20px; border: 1px dashed #333;">
                <div style="text-align: center; margin-bottom: 15px;">
                    <h2 style="margin: 0; font-size: 22px;">NUTS DIETÉTICA</h2>
                    <p style="margin: 5px 0; font-size: 13px;">WhatsApp: ${config.whatsappDisplay} | @${config.instagram}</p>
                    <p style="margin: 0; font-size: 12px; color: #555;">${config.shippingBenefit}</p>
                </div>
                <hr style="border: 0; border-top: 1px dashed #888; margin: 10px 0;">
                <p style="font-size: 13px; margin: 4px 0;"><strong>Cliente:</strong> ${name}</p>
                <p style="font-size: 13px; margin: 4px 0;"><strong>Dirección:</strong> ${address}</p>
                <p style="font-size: 13px; margin: 4px 0;"><strong>Pago:</strong> ${payment}</p>
                <p style="font-size: 13px; margin: 4px 0;"><strong>Fecha:</strong> ${new Date().toLocaleDateString('es-AR')} ${new Date().toLocaleTimeString('es-AR')}</p>
                <hr style="border: 0; border-top: 1px dashed #888; margin: 10px 0;">
                <table style="width: 100%; font-size: 12px; border-collapse: collapse;">
                    <thead>
                        <tr style="text-align: left; border-bottom: 1px solid #ddd;">
                            <th style="padding: 4px 0;">Cant.</th>
                            <th style="padding: 4px 0;">Detalle</th>
                            <th style="padding: 4px 0; text-align: right;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cart.map(item => `
                            <tr>
                                <td style="padding: 4px 0; vertical-align: top;">${item.qty}x</td>
                                <td style="padding: 4px 0;">${item.name} (${item.presentationLabel})</td>
                                <td style="padding: 4px 0; text-align: right;">${formatCurrency(item.subtotal)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <hr style="border: 0; border-top: 1px dashed #888; margin: 10px 0;">
                <div style="font-size: 16px; font-weight: bold; text-align: right; margin: 10px 0;">
                    TOTAL: ${formatCurrency(totalPrice)}
                </div>
                <div style="text-align: center; font-size: 11px; margin-top: 15px; color: #666;">
                    ¡Gracias por elegir una vida más saludable con NUTS!
                </div>
            </div>
        `;

        const cleanupTicket = () => {
            const el = document.getElementById('print-ticket-area');
            if (el) el.remove();
        };

        window.addEventListener('afterprint', cleanupTicket, { once: true });
        window.print();
        setTimeout(cleanupTicket, 1000);
    }

    // ==========================================
    // MODAL DE DETALLE DE COMBOS
    // ==========================================
    function openComboModal(comboId) {
        const combo = products.find(p => p.id === comboId);
        if (!combo) return;

        const modal = document.getElementById('combo-modal');
        const title = document.getElementById('combo-modal-title');
        const price = document.getElementById('combo-modal-price');
        const desc = document.getElementById('combo-modal-desc');
        const list = document.getElementById('combo-modal-list');
        const addBtn = document.getElementById('combo-modal-add-btn');

        if (!modal) return;

        title.textContent = combo.name;
        price.textContent = formatCurrency(combo.price);
        desc.textContent = combo.description;

        list.innerHTML = (combo.itemsIncluded || []).map(item => `
            <li class="flex items-center gap-2 p-2 bg-stone-50 rounded-lg border border-stone-200/70 text-xs font-medium text-stone-800">
                <span class="w-5 h-5 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-[10px]">✔</span>
                <span>${item}</span>
            </li>
        `).join('');

        addBtn.onclick = () => {
            addToCart(combo.id);
            closeComboModal();
        };

        modal.classList.remove('hidden');
    }

    function closeComboModal() {
        const modal = document.getElementById('combo-modal');
        if (modal) modal.classList.add('hidden');
    }

    // ==========================================
    // TOAST NOTIFICATIONS
    // ==========================================
    function showToast(message) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast bg-stone-900/95 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-2 border border-stone-700/50 backdrop-blur';
        toast.innerHTML = `<span>✨</span><span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 2200);
    }

    // ==========================================
    // EVENT LISTENERS GENERALES
    // ==========================================
    function setupEventListeners() {
        // Buscador en tiempo real
        const searchInput = document.getElementById('search-input');
        const clearSearchBtn = document.getElementById('clear-search-btn');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                if (clearSearchBtn) {
                    if (searchQuery) clearSearchBtn.classList.remove('hidden');
                    else clearSearchBtn.classList.add('hidden');
                }
                renderProducts();
            });
        }

        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                if (searchInput) searchInput.value = '';
                searchQuery = '';
                clearSearchBtn.classList.add('hidden');
                renderProducts();
            });
        }

        // Filtro rápido Sin TACC
        const sinTaccToggle = document.getElementById('filter-sintacc-btn');
        if (sinTaccToggle) {
            sinTaccToggle.addEventListener('click', () => {
                filterSinTacc = !filterSinTacc;
                sinTaccToggle.classList.toggle('bg-emerald-600', filterSinTacc);
                sinTaccToggle.classList.toggle('text-white', filterSinTacc);
                sinTaccToggle.classList.toggle('border-emerald-700', filterSinTacc);
                renderProducts();
            });
        }

        // Filtro rápido Combos
        const combosToggle = document.getElementById('filter-combos-btn');
        if (combosToggle) {
            combosToggle.addEventListener('click', () => {
                filterCombosOnly = !filterCombosOnly;
                combosToggle.classList.toggle('bg-amber-500', filterCombosOnly);
                combosToggle.classList.toggle('text-stone-950', filterCombosOnly);
                renderProducts();
            });
        }

        // Drawer del Carrito (Abrir / Cerrar)
        const cartDrawer = document.getElementById('cart-drawer');
        const cartBackdrop = document.getElementById('cart-backdrop');
        const openCartBtns = document.querySelectorAll('.open-cart-btn');
        const closeCartBtn = document.getElementById('close-cart-btn');

        function openDrawer() {
            if (cartDrawer && cartBackdrop) {
                cartBackdrop.classList.remove('hidden');
                setTimeout(() => {
                    cartDrawer.classList.remove('hidden-drawer');
                }, 10);
            }
        }

        function closeDrawer() {
            if (cartDrawer && cartBackdrop) {
                cartDrawer.classList.add('hidden-drawer');
                setTimeout(() => {
                    cartBackdrop.classList.add('hidden');
                }, 350);
            }
        }

        openCartBtns.forEach(btn => btn.addEventListener('click', openDrawer));
        if (closeCartBtn) closeCartBtn.addEventListener('click', closeDrawer);
        if (cartBackdrop) cartBackdrop.addEventListener('click', closeDrawer);

        const emptyShopBtn = document.getElementById('cart-empty-shop-btn');
        if (emptyShopBtn) emptyShopBtn.addEventListener('click', closeDrawer);

        // Botones de Checkout dentro del Carrito
        const checkoutWaBtn = document.getElementById('checkout-whatsapp-btn');
        if (checkoutWaBtn) checkoutWaBtn.addEventListener('click', handleWhatsAppCheckout);

        const copyBtn = document.getElementById('copy-order-btn');
        if (copyBtn) copyBtn.addEventListener('click', copyOrderSummary);

        const printBtn = document.getElementById('print-order-btn');
        if (printBtn) printBtn.addEventListener('click', printOrderReceipt);

        const clearBtn = document.getElementById('clear-cart-btn');
        if (clearBtn) clearBtn.addEventListener('click', clearCart);

        // Selector de Pago en Carrito (muestra/oculta campo vuelto)
        const paymentSelect = document.getElementById('checkout-payment');
        const cashWrapper = document.getElementById('cash-amount-wrapper');
        if (paymentSelect && cashWrapper) {
            paymentSelect.addEventListener('change', () => {
                if (paymentSelect.value.includes('Efectivo')) {
                    cashWrapper.classList.remove('hidden');
                } else {
                    cashWrapper.classList.add('hidden');
                }
            });
        }

        // Cerrar Modal de Combos
        const closeComboBtn = document.getElementById('close-combo-modal-btn');
        if (closeComboBtn) closeComboBtn.addEventListener('click', closeComboModal);



        // Modal de Administración del Dueño
        const openAdminBtn = document.getElementById('open-admin-btn');
        const closeAdminBtn = document.getElementById('close-admin-modal-btn');
        const saveAdminBtn = document.getElementById('save-admin-btn');
        const resetAdminBtn = document.getElementById('reset-admin-btn');
        const exportAdminBtn = document.getElementById('export-admin-btn');

        if (openAdminBtn) openAdminBtn.addEventListener('click', AdminModule.openAdminModal);
        if (closeAdminBtn) closeAdminBtn.addEventListener('click', AdminModule.closeAdminModal);
        if (saveAdminBtn) saveAdminBtn.addEventListener('click', AdminModule.saveAllAdminChanges);
        if (resetAdminBtn) resetAdminBtn.addEventListener('click', AdminModule.resetToFlyerDefaults);
        if (exportAdminBtn) exportAdminBtn.addEventListener('click', AdminModule.exportCatalogJSON);

        // Atajo de teclado para modo admin: Shift + Alt + A
        window.addEventListener('keydown', (e) => {
            if (e.shiftKey && e.altKey && e.key.toLowerCase() === 'a') {
                AdminModule.openAdminModal();
            }
        });
    }

    return {
        init,
        refreshCatalog,
        addToCart
    };
})();

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', AppModule.init);
