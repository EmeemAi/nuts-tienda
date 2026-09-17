/**
 * FRUTOS SECOS MI TIENDA - Aplicación Principal WebApp
 * Lógica reactiva: Catálogo dinámico, selector de presentaciones/pesos,
 * carrito de compras, cálculo de envío gratis CABA ($50k),
 * 5% descuento en efectivo (>$60k) y checkout a WhatsApp.
 */

const App = (function () {
    // Estado de la aplicación
    let products = [];
    let activeCategory = 'all';
    let searchQuery = '';
    let filterSinTacc = false;
    
    // Estado local de tarjetas de productos: productId -> { presentationKey, option, qty }
    const cardState = {};

    // Carrito de compras
    let cart = [];
    let deliveryZone = 'caba'; // 'caba' | 'gba'
    let paymentMethod = 'efectivo'; // 'efectivo' | 'transferencia'
    let cashChangeFor = '';

    const STORAGE_CART_KEY = 'frutos_secos_mi_tienda_cart';
    const STORAGE_CONFIG_KEY = 'frutos_secos_mi_tienda_config';

    function init() {
        loadConfig();
        loadCatalog();
        loadCart();
        updateCategoryCounts();
        renderCategories();
        renderProducts();
        updateCartUI();
        setupEvents();
        console.log("Frutos Secos Mi Tienda WebApp inicializada con éxito.");
    }

    function loadConfig() {
        if (typeof AdminModule !== 'undefined') {
            Object.assign(TIENDA_CONFIG, AdminModule.getEffectiveConfig());
        }
    }

    function loadCatalog() {
        products = (typeof AdminModule !== 'undefined') 
            ? AdminModule.getEffectiveProducts() 
            : (Array.isArray(PRODUCTS_DATA) ? [...PRODUCTS_DATA] : []);
        
        // Inicializar estado por tarjeta
        products.forEach(p => {
            if (!cardState[p.id]) {
                const firstPres = p.presentations && p.presentations.length > 0 ? p.presentations[0].key : 'default';
                const firstOpt = p.options && p.options.length > 0 ? p.options[0] : null;
                cardState[p.id] = {
                    presentationKey: firstPres,
                    option: firstOpt,
                    qty: 1
                };
            }
        });
    }

    function updateCategoryCounts() {
        CATEGORIES.forEach(cat => {
            if (cat.id === 'all') {
                cat.count = products.length;
            } else {
                cat.count = products.filter(p => p.category === cat.id).length;
            }
        });
    }

    function loadCart() {
        try {
            const saved = localStorage.getItem(STORAGE_CART_KEY);
            if (saved) {
                cart = JSON.parse(saved);
            }
        } catch (e) {
            cart = [];
        }
    }

    function saveCart() {
        try {
            localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cart));
        } catch (e) {
            console.error("Error guardando carrito:", e);
        }
    }

    function formatMoney(amount) {
        return `$${Number(amount || 0).toLocaleString('es-AR')}`;
    }

    // ==========================================
    // RENDERIZADO DE CATEGORÍAS
    // ==========================================
    function renderCategories() {
        const container = document.getElementById('categories-pills');
        if (!container) return;

        let html = '';
        CATEGORIES.forEach(cat => {
            const isActive = activeCategory === cat.id;
            html += `
                <button type="button" 
                        class="category-btn flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border ${
                            isActive 
                            ? 'bg-[#cb6d51] text-white border-[#cb6d51] shadow-md shadow-[#cb6d51]/25 scale-[1.02]' 
                            : 'bg-white text-stone-700 border-stone-200/90 hover:border-[#cb6d51]/50 hover:bg-[#fbf4f0]'
                        }"
                        data-category="${cat.id}">
                    <span>${cat.icon}</span>
                    <span>${cat.name}</span>
                    <span class="text-[11px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white font-extrabold' : 'bg-stone-100 text-stone-500'}">
                        ${cat.count}
                    </span>
                </button>
            `;
        });

        container.innerHTML = html;

        container.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activeCategory = btn.dataset.category;
                renderCategories();
                renderProducts();
            });
        });
    }

    // ==========================================
    // RENDERIZADO DE PRODUCTOS
    // ==========================================
    function renderProducts() {
        const grid = document.getElementById('products-grid');
        const emptyState = document.getElementById('empty-state');
        const countLabel = document.getElementById('results-count');
        if (!grid) return;

        const filtered = products.filter(p => {
            if (activeCategory !== 'all' && p.category !== activeCategory) {
                return false;
            }
            if (filterSinTacc && !p.isSinTacc) {
                return false;
            }
            if (searchQuery.trim() !== '') {
                const q = searchQuery.toLowerCase().trim();
                const matchName = p.name.toLowerCase().includes(q);
                const matchDesc = p.description && p.description.toLowerCase().includes(q);
                const matchCat = p.categoryName && p.categoryName.toLowerCase().includes(q);
                if (!matchName && !matchDesc && !matchCat) {
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
            const state = cardState[p.id];
            const currentPres = p.presentations.find(pr => pr.key === state.presentationKey) || p.presentations[0];
            const unitPrice = currentPres ? currentPres.price : 0;

            html += `
            <div class="product-card bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-[#cb6d51]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group p-5" 
                 data-product-id="${p.id}">
                
                <div>
                    <!-- Badges superiores -->
                    <div class="flex items-start justify-between gap-2 mb-3">
                        <span class="text-[10px] uppercase font-extrabold tracking-wider text-[#b2583f] bg-[#fbebe6] px-2.5 py-1 rounded-lg">
                            ${p.categoryName}
                        </span>
                        
                        <div class="flex items-center gap-1.5 flex-wrap justify-end">
                            ${p.isSinTacc ? `
                                <span class="badge-sintacc text-[10px] font-black px-2 py-0.5 rounded-lg flex items-center gap-1">
                                    <svg class="w-3 h-3 text-[#2b6e3b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    Sin TACC
                                </span>
                            ` : ''}
                            ${p.isFeatured ? `
                                <span class="text-[10px] font-black px-2 py-0.5 rounded-lg bg-amber-100 text-amber-800 border border-amber-200">
                                    Destacado
                                </span>
                            ` : ''}
                        </div>
                    </div>

                    <!-- Título -->
                    <h3 class="font-extrabold text-base sm:text-lg text-stone-900 leading-tight mb-2 group-hover:text-[#cb6d51] transition-colors">
                        ${p.name}
                    </h3>

                    <!-- Descripción breve -->
                    <p class="text-xs text-stone-500 mb-4 line-clamp-2 leading-relaxed">
                        ${p.description || ''}
                    </p>

                    <!-- Selector de Opciones (si tiene, ej. Con Sal / Sin Sal) -->
                    ${p.options && p.options.length > 0 ? `
                        <div class="mb-3">
                            <label class="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1">Variante:</label>
                            <select class="option-select w-full text-xs font-semibold bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-[#cb6d51]" data-product-id="${p.id}">
                                ${p.options.map(opt => `
                                    <option value="${opt}" ${state.option === opt ? 'selected' : ''}>${opt}</option>
                                `).join('')}
                            </select>
                        </div>
                    ` : ''}

                    <!-- Selector de Presentación / Peso -->
                    ${p.presentations && p.presentations.length > 1 ? `
                        <div class="mb-4">
                            <label class="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1.5">Presentación:</label>
                            <div class="grid grid-cols-${p.presentations.length > 3 ? '4' : p.presentations.length} gap-1.5">
                                ${p.presentations.map(pr => `
                                    <button type="button" 
                                            class="weight-btn text-[11px] font-bold py-1.5 px-2 rounded-xl border text-center transition-all ${
                                                state.presentationKey === pr.key 
                                                ? 'active bg-[#cb6d51] text-white border-[#cb6d51] shadow-sm' 
                                                : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                                            }"
                                            data-product-id="${p.id}"
                                            data-pres-key="${pr.key}">
                                        ${pr.label}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                    ` : `
                        <div class="mb-4">
                            <span class="inline-block text-xs font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-lg">
                                ${p.presentations && p.presentations[0] ? p.presentations[0].label : 'x unidad'}
                            </span>
                        </div>
                    `}
                </div>

                <!-- Footer de Tarjeta: Precio y Botón Agregar -->
                <div class="pt-3 border-t border-stone-100 flex items-center justify-between gap-3 mt-2">
                    <div>
                        <span class="text-[10px] text-stone-400 font-bold uppercase tracking-wider block">Precio</span>
                        <div class="text-xl sm:text-2xl font-black text-stone-900 leading-none price-display">
                            ${formatMoney(unitPrice)}
                        </div>
                    </div>

                    <button type="button" 
                            class="add-to-cart-btn flex items-center justify-center gap-1.5 bg-[#cb6d51] hover:bg-[#b2583f] active:scale-95 text-white font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-2xl shadow-md shadow-[#cb6d51]/20 transition-all"
                            data-product-id="${p.id}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path>
                        </svg>
                        <span>Agregar</span>
                    </button>
                </div>

            </div>
            `;
        });

        grid.innerHTML = html;

        // Escuchadores en las tarjetas
        grid.querySelectorAll('.weight-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const pid = btn.dataset.productId;
                const presKey = btn.dataset.presKey;
                cardState[pid].presentationKey = presKey;
                
                // Actualizar estilo de botones del mismo producto
                const card = btn.closest('.product-card');
                card.querySelectorAll('.weight-btn').forEach(b => {
                    b.classList.remove('active', 'bg-[#cb6d51]', 'text-white', 'border-[#cb6d51]', 'shadow-sm');
                    b.classList.add('bg-stone-50', 'text-stone-700', 'border-stone-200');
                });
                btn.classList.add('active', 'bg-[#cb6d51]', 'text-white', 'border-[#cb6d51]', 'shadow-sm');
                btn.classList.remove('bg-stone-50', 'text-stone-700', 'border-stone-200');

                // Actualizar precio en vivo
                const prod = products.find(p => p.id === pid);
                const selectedPres = prod.presentations.find(pr => pr.key === presKey);
                if (selectedPres) {
                    const priceElem = card.querySelector('.price-display');
                    if (priceElem) priceElem.textContent = formatMoney(selectedPres.price);
                }
            });
        });

        grid.querySelectorAll('.option-select').forEach(sel => {
            sel.addEventListener('change', () => {
                const pid = sel.dataset.productId;
                cardState[pid].option = sel.value;
            });
        });

        grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pid = btn.dataset.productId;
                addToCart(pid);
                
                // Efecto visual en el botón
                btn.classList.add('animate-added', 'bg-[#588157]');
                const originalHtml = btn.innerHTML;
                btn.innerHTML = `
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>¡Listo!</span>
                `;
                setTimeout(() => {
                    btn.classList.remove('animate-added', 'bg-[#588157]');
                    btn.innerHTML = originalHtml;
                }, 900);
            });
        });
    }

    // ==========================================
    // GESTIÓN DEL CARRITO
    // ==========================================
    function addToCart(productId) {
        const prod = products.find(p => p.id === productId);
        if (!prod) return;

        const state = cardState[productId];
        const pres = prod.presentations.find(pr => pr.key === state.presentationKey) || prod.presentations[0];
        const optionVal = state.option || null;

        const cartKey = `${productId}_${pres.key}_${optionVal || 'std'}`;
        const existing = cart.find(i => i.key === cartKey);

        if (existing) {
            existing.qty += 1;
            existing.subtotal = existing.qty * existing.unitPrice;
        } else {
            cart.push({
                key: cartKey,
                id: prod.id,
                name: prod.name,
                category: prod.category,
                categoryName: prod.categoryName,
                isSinTacc: prod.isSinTacc,
                presentationKey: pres.key,
                presentationLabel: pres.label,
                option: optionVal,
                unitPrice: pres.price,
                qty: 1,
                subtotal: pres.price
            });
        }

        saveCart();
        updateCartUI();
        showFloatingNotice(`Agregaste ${prod.name} (${pres.label})`);
    }

    function updateCartItemQty(cartKey, delta) {
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
    }

    function clearCart() {
        if (cart.length === 0) return;
        if (confirm("¿Estás seguro de que querés vaciar tu carrito?")) {
            cart = [];
            saveCart();
            updateCartUI();
        }
    }

    // ==========================================
    // CÁLCULOS Y ACTUALIZACIÓN UI DEL CARRITO
    // ==========================================
    function calculateCartTotals() {
        const subtotal = cart.reduce((acc, item) => acc + item.subtotal, 0);
        const totalItemsCount = cart.reduce((acc, item) => acc + item.qty, 0);

        // Envío CABA gratis desde $50.000
        const isCabaFreeShipping = (deliveryZone === 'caba' && subtotal >= TIENDA_CONFIG.cabaFreeShippingThreshold);
        const cabaRemaining = Math.max(0, TIENDA_CONFIG.cabaFreeShippingThreshold - subtotal);

        // Descuento efectivo 5% desde $60.000
        let discountPercent = 0;
        let discountAmount = 0;
        const qualifiesCashDiscount = (paymentMethod === 'efectivo' && subtotal >= TIENDA_CONFIG.cashDiscountThreshold);
        const cashDiscountRemaining = Math.max(0, TIENDA_CONFIG.cashDiscountThreshold - subtotal);

        if (qualifiesCashDiscount) {
            discountPercent = TIENDA_CONFIG.cashDiscountPercent;
            discountAmount = Math.round(subtotal * (discountPercent / 100));
        }

        const total = Math.max(0, subtotal - discountAmount);

        return {
            subtotal,
            totalItemsCount,
            isCabaFreeShipping,
            cabaRemaining,
            qualifiesCashDiscount,
            cashDiscountRemaining,
            discountPercent,
            discountAmount,
            total
        };
    }

    function updateCartUI() {
        const {
            subtotal,
            totalItemsCount,
            isCabaFreeShipping,
            cabaRemaining,
            qualifiesCashDiscount,
            cashDiscountRemaining,
            discountPercent,
            discountAmount,
            total
        } = calculateCartTotals();

        // 1. Badges superiores y flotantes
        document.querySelectorAll('.cart-count-badge').forEach(badge => {
            badge.textContent = totalItemsCount;
            if (totalItemsCount > 0) {
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        });

        const headerTotal = document.getElementById('header-cart-total');
        if (headerTotal) {
            headerTotal.textContent = formatMoney(total);
        }

        // 2. Elementos del Drawer
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartEmptyState = document.getElementById('cart-empty-state');
        const cartFooter = document.getElementById('cart-footer');

        if (cart.length === 0) {
            if (cartItemsContainer) cartItemsContainer.innerHTML = '';
            if (cartEmptyState) cartEmptyState.classList.remove('hidden');
            if (cartFooter) cartFooter.classList.add('hidden');
            return;
        }

        if (cartEmptyState) cartEmptyState.classList.add('hidden');
        if (cartFooter) cartFooter.classList.remove('hidden');

        // Renderizar lista de items
        if (cartItemsContainer) {
            let itemsHtml = '';
            cart.forEach(item => {
                itemsHtml += `
                <div class="cart-item-row flex items-center justify-between gap-3 p-3.5 bg-stone-50/80 rounded-2xl border border-stone-200/80">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-1.5 flex-wrap">
                            <h4 class="text-xs sm:text-sm font-bold text-stone-900 truncate">${item.name}</h4>
                            ${item.isSinTacc ? `
                                <span class="text-[9px] font-black text-[#2b6e3b] bg-[#eaf5eb] px-1.5 py-0.2 rounded">Sin TACC</span>
                            ` : ''}
                        </div>
                        <div class="text-[11px] text-stone-500 flex items-center gap-2 mt-0.5">
                            <span class="font-semibold text-[#b2583f] bg-[#fbebe6] px-1.5 py-0.5 rounded">${item.presentationLabel}</span>
                            ${item.option ? `<span class="text-stone-600 font-medium">(${item.option})</span>` : ''}
                            <span>•</span>
                            <span class="font-bold text-stone-800">${formatMoney(item.unitPrice)}</span>
                        </div>
                    </div>

                    <!-- Cantidad y Subtotal -->
                    <div class="flex items-center gap-2">
                        <div class="flex items-center bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
                            <button type="button" class="cart-qty-btn px-2 py-1 text-xs font-bold text-stone-600 hover:bg-stone-100" data-cart-key="${item.key}" data-delta="-1">-</button>
                            <span class="px-2 text-xs font-black text-stone-900">${item.qty}</span>
                            <button type="button" class="cart-qty-btn px-2 py-1 text-xs font-bold text-stone-600 hover:bg-stone-100" data-cart-key="${item.key}" data-delta="1">+</button>
                        </div>

                        <div class="text-right min-w-[65px]">
                            <div class="text-xs sm:text-sm font-black text-stone-900">${formatMoney(item.subtotal)}</div>
                        </div>

                        <button type="button" class="cart-remove-btn text-stone-400 hover:text-rose-500 p-1 transition-colors" data-cart-key="${item.key}" title="Eliminar ítem">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                `;
            });
            cartItemsContainer.innerHTML = itemsHtml;

            // Listeners de cantidad y eliminar
            cartItemsContainer.querySelectorAll('.cart-qty-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const key = btn.dataset.cartKey;
                    const delta = parseInt(btn.dataset.delta, 10);
                    updateCartItemQty(key, delta);
                });
            });

            cartItemsContainer.querySelectorAll('.cart-remove-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const key = btn.dataset.cartKey;
                    removeCartItem(key);
                });
            });
        }

        // 3. Barra de progreso Envío Gratis CABA ($50.000)
        const shippingProgressContainer = document.getElementById('shipping-progress-container');
        if (shippingProgressContainer) {
            if (deliveryZone === 'caba') {
                const percent = Math.min(100, (subtotal / TIENDA_CONFIG.cabaFreeShippingThreshold) * 100);
                shippingProgressContainer.innerHTML = `
                    <div class="bg-[#fcf5ef] p-3 rounded-2xl border border-[#cb6d51]/25 text-xs">
                        <div class="flex items-center justify-between mb-1.5 font-bold">
                            ${isCabaFreeShipping ? `
                                <span class="text-[#588157] flex items-center gap-1">
                                    <span>🎉</span> ¡Tenés ENVÍO GRATIS en CABA!
                                </span>
                                <span class="text-[#588157]">100%</span>
                            ` : `
                                <span class="text-stone-700">
                                    Te faltan <strong class="text-[#cb6d51]">${formatMoney(cabaRemaining)}</strong> para ENVÍO GRATIS en CABA
                                </span>
                                <span class="text-[#cb6d51] font-extrabold">${Math.round(percent)}%</span>
                            `}
                        </div>
                        <div class="w-full bg-stone-200/80 rounded-full h-2 overflow-hidden">
                            <div class="h-2 rounded-full transition-all duration-500 ${isCabaFreeShipping ? 'bg-[#588157]' : 'bg-[#cb6d51]'}" style="width: ${percent}%"></div>
                        </div>
                    </div>
                `;
            } else {
                shippingProgressContainer.innerHTML = `
                    <div class="bg-amber-50 p-3 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                        <span>🛵</span>
                        <span><strong>Zona Gran Buenos Aires (GBA):</strong> Costo de envío a coordinar según localidad.</span>
                    </div>
                `;
            }
        }

        // 4. Beneficio Descuento en Efectivo (5% desde $60.000)
        const cashDiscountNotice = document.getElementById('cash-discount-notice');
        if (cashDiscountNotice) {
            if (paymentMethod === 'efectivo') {
                if (qualifiesCashDiscount) {
                    cashDiscountNotice.innerHTML = `
                        <div class="bg-emerald-50 border border-emerald-300 text-emerald-800 px-3 py-2 rounded-xl text-xs flex items-center justify-between font-bold">
                            <span class="flex items-center gap-1.5">
                                <span>🏷️</span> ¡5% OFF aplicado por pago en efectivo!
                            </span>
                            <span class="text-emerald-700">-${formatMoney(discountAmount)}</span>
                        </div>
                    `;
                    cashDiscountNotice.classList.remove('hidden');
                } else {
                    cashDiscountNotice.innerHTML = `
                        <div class="bg-stone-50 border border-stone-200 text-stone-600 px-3 py-1.5 rounded-xl text-[11px] flex items-center justify-between">
                            <span>💡 Sumá <strong>${formatMoney(cashDiscountRemaining)}</strong> para obtener <strong>5% OFF</strong> en efectivo.</span>
                        </div>
                    `;
                    cashDiscountNotice.classList.remove('hidden');
                }
            } else {
                cashDiscountNotice.classList.add('hidden');
            }
        }

        // 5. Resumen numérico en el Drawer
        const subtotalElem = document.getElementById('cart-subtotal-val');
        if (subtotalElem) subtotalElem.textContent = formatMoney(subtotal);

        const discountRow = document.getElementById('cart-discount-row');
        const discountElem = document.getElementById('cart-discount-val');
        if (discountRow && discountElem) {
            if (qualifiesCashDiscount && discountAmount > 0) {
                discountRow.classList.remove('hidden');
                discountElem.textContent = `-${formatMoney(discountAmount)}`;
            } else {
                discountRow.classList.add('hidden');
            }
        }

        const shippingElem = document.getElementById('cart-shipping-val');
        if (shippingElem) {
            if (deliveryZone === 'caba') {
                shippingElem.innerHTML = isCabaFreeShipping 
                    ? `<span class="text-emerald-600 font-black">¡GRATIS!</span>` 
                    : `<span class="text-stone-500 font-semibold">A calcular</span>`;
            } else {
                shippingElem.innerHTML = `<span class="text-amber-700 font-semibold">A convenir GBA</span>`;
            }
        }

        const totalElem = document.getElementById('cart-total-val');
        if (totalElem) totalElem.textContent = formatMoney(total);
    }

    // ==========================================
    // NOTIFICACIÓN FLOTANTE (TOAST)
    // ==========================================
    function showFloatingNotice(text) {
        let toast = document.getElementById('floating-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'floating-toast';
            toast.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-2xl shadow-2xl transition-all duration-300 pointer-events-none opacity-0 translate-y-3';
            document.body.appendChild(toast);
        }

        toast.textContent = text;
        toast.classList.remove('opacity-0', 'translate-y-3');
        toast.classList.add('opacity-100', 'translate-y-0');

        setTimeout(() => {
            toast.classList.remove('opacity-100', 'translate-y-0');
            toast.classList.add('opacity-0', 'translate-y-3');
        }, 1800);
    }

    // ==========================================
    // ENVÍO DE PEDIDO A WHATSAPP
    // ==========================================
    function buildWhatsAppMessage(customerData) {
        const {
            subtotal,
            qualifiesCashDiscount,
            discountAmount,
            isCabaFreeShipping,
            total
        } = calculateCartTotals();

        let msg = `🛒 *NUEVO PEDIDO - ${TIENDA_CONFIG.storeName}*\n`;
        msg += `═══════════════════════════\n\n`;

        msg += `👤 *DATOS DEL CLIENTE:*\n`;
        msg += `• *Nombre:* ${customerData.name}\n`;
        msg += `• *Teléfono:* ${customerData.phone}\n`;
        msg += `• *Zona de Envío:* ${deliveryZone === 'caba' ? 'CABA (Ciudad de Buenos Aires)' : 'Gran Buenos Aires (GBA)'}\n`;
        msg += `• *Dirección:* ${customerData.address}\n`;
        if (customerData.notes && customerData.notes.trim() !== '') {
            msg += `• *Observaciones:* ${customerData.notes.trim()}\n`;
        }
        msg += `\n📦 *DETALLE DE PRODUCTOS:*\n`;

        cart.forEach((item, idx) => {
            const opt = item.option ? ` (${item.option})` : '';
            msg += `${idx + 1}. *${item.name}* [${item.presentationLabel}]${opt}\n`;
            msg += `   └ Cantidad: ${item.qty} un. x ${formatMoney(item.unitPrice)} = *${formatMoney(item.subtotal)}*\n`;
        });

        msg += `\n═══════════════════════════\n`;
        msg += `💵 *Subtotal:* ${formatMoney(subtotal)}\n`;

        if (qualifiesCashDiscount && discountAmount > 0) {
            msg += `🏷️ *Descuento 5% Efectivo:* -${formatMoney(discountAmount)}\n`;
        }

        if (deliveryZone === 'caba') {
            msg += `🛵 *Envío CABA:* ${isCabaFreeShipping ? '¡SIN CARGO! (Supera $50.000)' : 'A coordinar'}\n`;
        } else {
            msg += `🛵 *Envío GBA:* A coordinar según localidad\n`;
        }

        msg += `💰 *TOTAL A PAGAR:* ${formatMoney(total)}\n`;
        msg += `💳 *Forma de Pago:* ${paymentMethod === 'efectivo' ? 'Efectivo contra entrega' : 'Transferencia Bancaria'}\n`;

        if (paymentMethod === 'efectivo' && cashChangeFor && Number(cashChangeFor) > total) {
            const changeNeeded = Number(cashChangeFor) - total;
            msg += `💵 *Abona con:* ${formatMoney(cashChangeFor)} (Vuelto requerido: ${formatMoney(changeNeeded)})\n`;
        }

        msg += `\nMuchas gracias por elegirnos. ¡Aguardamos confirmación! ✨`;

        return encodeURIComponent(msg);
    }

    function handleCheckoutSubmit(e) {
        e.preventDefault();

        if (cart.length === 0) {
            alert("Tu carrito está vacío. Agregá productos antes de finalizar.");
            return;
        }

        const nameInput = document.getElementById('checkout-name');
        const phoneInput = document.getElementById('checkout-phone');
        const addressInput = document.getElementById('checkout-address');
        const notesInput = document.getElementById('checkout-notes');

        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const address = addressInput ? addressInput.value.trim() : '';
        const notes = notesInput ? notesInput.value.trim() : '';

        if (!name || !address) {
            alert("Por favor completá tu nombre y dirección de entrega.");
            return;
        }

        const encodedMsg = buildWhatsAppMessage({ name, phone, address, notes });
        const whatsappNumber = TIENDA_CONFIG.whatsapp || '5491100000000';
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;

        // Abrir WhatsApp en nueva pestaña
        window.open(url, '_blank');
    }

    // ==========================================
    // TICKET IMPRIMIBLE
    // ==========================================
    function showPrintTicket() {
        const {
            subtotal,
            qualifiesCashDiscount,
            discountAmount,
            isCabaFreeShipping,
            total
        } = calculateCartTotals();

        const ticketContent = document.getElementById('ticket-content');
        const ticketModal = document.getElementById('ticket-modal');
        if (!ticketContent || !ticketModal) return;

        const name = (document.getElementById('checkout-name') || {}).value || 'Cliente';
        const address = (document.getElementById('checkout-address') || {}).value || 'A convenir';

        let html = `
            <div class="text-center pb-4 border-b border-dashed border-stone-300">
                <h2 class="text-lg font-black text-stone-900">${TIENDA_CONFIG.storeName}</h2>
                <p class="text-xs text-stone-500">${TIENDA_CONFIG.tagline}</p>
                <p class="text-[11px] text-stone-400 mt-1">${new Date().toLocaleString('es-AR')}</p>
            </div>

            <div class="py-3 border-b border-dashed border-stone-300 text-xs">
                <p><strong>Cliente:</strong> ${name}</p>
                <p><strong>Dirección:</strong> ${address}</p>
                <p><strong>Zona:</strong> ${deliveryZone === 'caba' ? 'CABA' : 'GBA'}</p>
                <p><strong>Pago:</strong> ${paymentMethod === 'efectivo' ? 'Efectivo' : 'Transferencia'}</p>
            </div>

            <div class="py-3 border-b border-dashed border-stone-300 text-xs">
                <table class="w-full">
                    <thead>
                        <tr class="text-left text-stone-400 text-[10px] uppercase">
                            <th>Cant</th>
                            <th>Prod</th>
                            <th class="text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cart.map(item => `
                            <tr class="border-b border-stone-100">
                                <td class="py-1 font-bold">${item.qty}x</td>
                                <td class="py-1">${item.name} <span class="text-[10px] text-stone-500">(${item.presentationLabel})</span></td>
                                <td class="py-1 text-right font-bold">${formatMoney(item.subtotal)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <div class="pt-3 text-xs space-y-1">
                <div class="flex justify-between">
                    <span>Subtotal:</span>
                    <span class="font-bold">${formatMoney(subtotal)}</span>
                </div>
                ${qualifiesCashDiscount ? `
                    <div class="flex justify-between text-emerald-600 font-bold">
                        <span>Descuento 5% Efectivo:</span>
                        <span>-${formatMoney(discountAmount)}</span>
                    </div>
                ` : ''}
                <div class="flex justify-between text-stone-600">
                    <span>Envío:</span>
                    <span>${deliveryZone === 'caba' ? (isCabaFreeShipping ? 'Gratis' : 'A coordinar') : 'A coordinar GBA'}</span>
                </div>
                <div class="flex justify-between text-base font-black text-stone-900 pt-2 border-t border-stone-800">
                    <span>TOTAL:</span>
                    <span>${formatMoney(total)}</span>
                </div>
            </div>
        `;

        ticketContent.innerHTML = html;
        ticketModal.classList.remove('hidden');
    }

    // ==========================================
    // LISTENERS Y EVENTOS GLOBALES
    // ==========================================
    function setupEvents() {
        // Buscador reactivo
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value;
                renderProducts();
            });
        }

        // Filtro Sin TACC
        const sinTaccBtn = document.getElementById('filter-sintacc-btn');
        if (sinTaccBtn) {
            sinTaccBtn.addEventListener('click', () => {
                filterSinTacc = !filterSinTacc;
                if (filterSinTacc) {
                    sinTaccBtn.classList.add('bg-[#588157]', 'text-white', 'border-[#588157]');
                    sinTaccBtn.classList.remove('bg-white', 'text-stone-700', 'border-stone-200');
                } else {
                    sinTaccBtn.classList.remove('bg-[#588157]', 'text-white', 'border-[#588157]');
                    sinTaccBtn.classList.add('bg-white', 'text-stone-700', 'border-stone-200');
                }
                renderProducts();
            });
        }

        // Abrir y Cerrar Carrito Drawer
        const cartDrawer = document.getElementById('cart-drawer');
        const cartBackdrop = document.getElementById('cart-backdrop');
        const openCartBtns = document.querySelectorAll('.open-cart-btn');
        const closeCartBtn = document.getElementById('close-cart-btn');

        function openDrawer() {
            if (cartDrawer && cartBackdrop) {
                cartDrawer.classList.remove('translate-x-full');
                cartBackdrop.classList.remove('opacity-0', 'pointer-events-none');
            }
        }

        function closeDrawer() {
            if (cartDrawer && cartBackdrop) {
                cartDrawer.classList.add('translate-x-full');
                cartBackdrop.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        openCartBtns.forEach(btn => btn.addEventListener('click', openDrawer));
        if (closeCartBtn) closeCartBtn.addEventListener('click', closeDrawer);
        if (cartBackdrop) cartBackdrop.addEventListener('click', closeDrawer);

        // Vaciar carrito
        const clearCartBtn = document.getElementById('clear-cart-btn');
        if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

        // Zona de envío (CABA / GBA)
        const zoneRadios = document.querySelectorAll('input[name="delivery_zone"]');
        zoneRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                deliveryZone = e.target.value;
                updateCartUI();
            });
        });

        // Forma de pago (Efectivo / Transferencia)
        const paymentRadios = document.querySelectorAll('input[name="payment_method"]');
        const cashDetailsContainer = document.getElementById('cash-details-container');
        paymentRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                paymentMethod = e.target.value;
                if (cashDetailsContainer) {
                    if (paymentMethod === 'efectivo') {
                        cashDetailsContainer.classList.remove('hidden');
                    } else {
                        cashDetailsContainer.classList.add('hidden');
                    }
                }
                updateCartUI();
            });
        });

        // Input de vuelto en efectivo
        const cashChangeInput = document.getElementById('cash-change-input');
        if (cashChangeInput) {
            cashChangeInput.addEventListener('input', (e) => {
                cashChangeFor = e.target.value;
            });
        }

        // Formulario de Checkout
        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', handleCheckoutSubmit);
        }

        // Ticket Imprimible
        const printTicketBtn = document.getElementById('btn-print-ticket');
        if (printTicketBtn) printTicketBtn.addEventListener('click', showPrintTicket);

        const closeTicketBtn = document.getElementById('close-ticket-btn');
        const ticketModal = document.getElementById('ticket-modal');
        if (closeTicketBtn && ticketModal) {
            closeTicketBtn.addEventListener('click', () => {
                ticketModal.classList.add('hidden');
            });
        }

        const triggerPrintActionBtn = document.getElementById('trigger-print-action');
        if (triggerPrintActionBtn) {
            triggerPrintActionBtn.addEventListener('click', () => {
                window.print();
            });
        }
    }

    return {
        init,
        addToCart,
        updateCartItemQty,
        removeCartItem,
        clearCart
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
