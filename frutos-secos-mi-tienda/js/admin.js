/**
 * Panel de Administración - Frutos Secos Mi Tienda
 * Permite a los dueños modificar precios, pausar stock y actualizar datos de contacto/promociones
 * de forma directa sin editar código.
 */

const AdminModule = (function () {
    const STORAGE_KEY = 'frutos_secos_store_overrides';
    let overrides = {
        prices: {},
        stock: {},
        config: {}
    };

    function loadOverrides() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                overrides = JSON.parse(saved);
            }
        } catch (e) {
            console.error("Error cargando overrides de admin:", e);
        }
    }

    function saveOverrides() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
        } catch (e) {
            console.error("Error guardando overrides de admin:", e);
        }
    }

    function getEffectiveProducts() {
        loadOverrides();
        return PRODUCTS_DATA.map(prod => {
            const copy = JSON.parse(JSON.stringify(prod));
            
            // Stock override
            if (overrides.stock && overrides.stock[prod.id] !== undefined) {
                copy.inStock = overrides.stock[prod.id];
            }

            // Price override
            if (overrides.prices && overrides.prices[prod.id]) {
                const pOv = overrides.prices[prod.id];
                copy.presentations.forEach(pr => {
                    if (pOv[pr.key] !== undefined) {
                        pr.price = Number(pOv[pr.key]);
                    }
                });
            }

            return copy;
        });
    }

    function getEffectiveConfig() {
        loadOverrides();
        return {
            ...TIENDA_CONFIG,
            ...(overrides.config || {})
        };
    }

    function openAdminModal() {
        const modal = document.getElementById('admin-modal');
        if (!modal) return;

        // Solicitar PIN de seguridad
        const authenticated = sessionStorage.getItem('frutos_secos_admin_auth');
        if (!authenticated) {
            const pin = prompt("Ingrese el PIN de administración de la tienda (por defecto: 1234):");
            if (pin !== (TIENDA_CONFIG.adminPin || "1234")) {
                alert("PIN incorrecto");
                return;
            }
            sessionStorage.setItem('frutos_secos_admin_auth', 'true');
        }

        const effectiveCfg = getEffectiveConfig();
        const waInput = document.getElementById('admin-cfg-whatsapp');
        if (waInput) waInput.value = effectiveCfg.whatsapp || "5491100000000";

        const freeShipInput = document.getElementById('admin-cfg-free-shipping');
        if (freeShipInput) freeShipInput.value = effectiveCfg.cabaFreeShippingThreshold || 50000;

        const cashDiscInput = document.getElementById('admin-cfg-cash-discount');
        if (cashDiscInput) cashDiscInput.value = effectiveCfg.cashDiscountThreshold || 60000;

        renderAdminProductsList();
        modal.classList.remove('hidden');
    }

    function closeAdminModal() {
        const modal = document.getElementById('admin-modal');
        if (modal) modal.classList.add('hidden');
    }

    function renderAdminProductsList() {
        const container = document.getElementById('admin-products-list');
        if (!container) return;

        const effectiveProds = getEffectiveProducts();
        let html = '';

        effectiveProds.forEach(p => {
            html += `
            <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-stone-900">${p.name}</span>
                        <span class="text-[10px] text-stone-500 bg-stone-200 px-1.5 py-0.5 rounded">${p.categoryName}</span>
                    </div>
                    <div class="flex items-center gap-2 mt-2 flex-wrap">
                        ${p.presentations.map(pr => `
                            <div class="flex items-center gap-1 bg-white px-2 py-1 rounded border border-stone-200">
                                <span class="text-stone-500 font-semibold">${pr.label}:</span>
                                <span>$</span>
                                <input type="number" 
                                       class="admin-price-input w-20 font-bold text-stone-900 border-b border-stone-300 focus:outline-none focus:border-[#cb6d51]" 
                                       value="${pr.price}" 
                                       data-product-id="${p.id}" 
                                       data-pres-key="${pr.key}" />
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <button type="button" 
                            class="admin-stock-toggle px-3 py-1.5 rounded-lg font-bold text-xs ${p.inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}"
                            data-product-id="${p.id}" 
                            data-in-stock="${p.inStock}">
                        ${p.inStock ? 'En Stock' : 'Sin Stock'}
                    </button>
                </div>
            </div>
            `;
        });

        container.innerHTML = html;

        // Listeners de cambio de precio
        container.querySelectorAll('.admin-price-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const pid = e.target.dataset.productId;
                const presKey = e.target.dataset.presKey;
                const newPrice = Number(e.target.value);

                if (!overrides.prices[pid]) overrides.prices[pid] = {};
                overrides.prices[pid][presKey] = newPrice;
                saveOverrides();
            });
        });

        // Listeners de toggle stock
        container.querySelectorAll('.admin-stock-toggle').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const pid = btn.dataset.productId;
                const current = btn.dataset.inStock === 'true';
                const next = !current;

                overrides.stock[pid] = next;
                saveOverrides();
                renderAdminProductsList();
            });
        });
    }

    function saveConfig() {
        const wa = document.getElementById('admin-cfg-whatsapp').value.trim();
        const freeShip = Number(document.getElementById('admin-cfg-free-shipping').value);
        const cashDisc = Number(document.getElementById('admin-cfg-cash-discount').value);

        overrides.config = {
            whatsapp: wa,
            cabaFreeShippingThreshold: freeShip,
            cashDiscountThreshold: cashDisc
        };

        saveOverrides();
        alert("¡Configuración guardada exitosamente!");
        closeAdminModal();
        location.reload();
    }

    function resetToFactory() {
        if (confirm("¿Desea restablecer todos los precios y configuración a los valores originales de la lista?")) {
            localStorage.removeItem(STORAGE_KEY);
            overrides = { prices: {}, stock: {}, config: {} };
            alert("Restablecido con éxito.");
            location.reload();
        }
    }

    // Atajo de teclado: Shift + Alt + A
    document.addEventListener('keydown', (e) => {
        if (e.shiftKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
            e.preventDefault();
            openAdminModal();
        }
    });

    return {
        getEffectiveProducts,
        getEffectiveConfig,
        openAdminModal,
        closeAdminModal,
        saveConfig,
        resetToFactory
    };
})();
