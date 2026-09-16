/**
 * Panel de Administración - Dietética NUTS
 * Permite a los dueños modificar precios, pausar stock y actualizar datos de contacto
 * de forma local e inmediata sin tocar código.
 */

const AdminModule = (function () {
    const STORAGE_KEY = 'nuts_store_overrides';
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
            console.error("Error al cargar configuración de administrador:", e);
        }
    }

    function saveOverrides() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
        } catch (e) {
            console.error("Error al guardar configuración de administrador:", e);
        }
    }

    function getEffectiveProducts() {
        loadOverrides();
        return PRODUCTS_DATA.map(product => {
            const copy = { ...product };
            
            // Override stock
            if (overrides.stock && overrides.stock[product.id] !== undefined) {
                copy.inStock = overrides.stock[product.id];
            }

            // Override prices
            if (overrides.prices && overrides.prices[product.id]) {
                const p = overrides.prices[product.id];
                if (p.price !== undefined) copy.price = p.price;
                if (p.price1kg !== undefined) copy.price1kg = p.price1kg;
                if (p.price500g !== undefined) copy.price500g = p.price500g;
                if (p.priceUnit !== undefined) copy.priceUnit = p.priceUnit;
            }

            return copy;
        });
    }

    function getEffectiveConfig() {
        loadOverrides();
        return {
            ...NUTS_CONFIG,
            ...(overrides.config || {})
        };
    }

    function openAdminModal() {
        const modal = document.getElementById('admin-modal');
        if (!modal) return;
        
        // Solicitar PIN simple si no se ingresó en esta sesión
        const authenticated = sessionStorage.getItem('nuts_admin_auth');
        if (!authenticated) {
            const pin = prompt("Ingrese el PIN de administración de la tienda NUTS (por defecto: 1234):");
            if (pin !== NUTS_CONFIG.adminPin) {
                alert("PIN incorrecto");
                return;
            }
            sessionStorage.setItem('nuts_admin_auth', 'true');
        }

        const effectiveCfg = getEffectiveConfig();
        const waInput = document.getElementById('admin-cfg-whatsapp');
        if (waInput) waInput.value = effectiveCfg.whatsapp || "5491151315757";

        const minOrderInput = document.getElementById('admin-cfg-min-order');
        if (minOrderInput) minOrderInput.value = effectiveCfg.minOrderAmount || 20000;

        const freeShipInput = document.getElementById('admin-cfg-free-shipping');
        if (freeShipInput) freeShipInput.value = effectiveCfg.freeShippingThreshold || 40000;

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

        loadOverrides();
        const effectiveList = getEffectiveProducts();

        let html = '';
        effectiveList.forEach(p => {
            html += `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-200 gap-3">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-stone-800 text-sm">${p.name}</span>
                        ${p.isSinTacc ? '<span class="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">Sin TACC</span>' : ''}
                    </div>
                    <span class="text-xs text-stone-500">${p.categoryName}</span>
                </div>

                <div class="flex flex-wrap items-center gap-2">
                    ${p.priceType === 'weight' ? `
                        <div class="flex items-center gap-1">
                            <span class="text-xs text-stone-600">500g: $</span>
                            <input type="number" step="100" class="w-24 px-2 py-1 text-xs border rounded bg-white" 
                                   id="admin-price-500g-${p.id}" value="${p.price500g}">
                        </div>
                        <div class="flex items-center gap-1">
                            <span class="text-xs text-stone-600">1kg: $</span>
                            <input type="number" step="100" class="w-24 px-2 py-1 text-xs border rounded bg-white" 
                                   id="admin-price-1kg-${p.id}" value="${p.price1kg}">
                        </div>
                    ` : `
                        <div class="flex items-center gap-1">
                            <span class="text-xs text-stone-600">${p.unitLabel || 'Precio'}: $</span>
                            <input type="number" step="100" class="w-28 px-2 py-1 text-xs border rounded bg-white" 
                                   id="admin-price-unit-${p.id}" value="${p.priceUnit || p.price || 0}">
                        </div>
                    `}

                    <label class="flex items-center gap-1.5 text-xs text-stone-700 ml-2 cursor-pointer">
                        <input type="checkbox" id="admin-stock-${p.id}" ${p.inStock ? 'checked' : ''} class="rounded text-amber-600 focus:ring-amber-500">
                        <span>En stock</span>
                    </label>
                </div>
            </div>
            `;
        });

        container.innerHTML = html;
    }

    function saveAllAdminChanges() {
        const effectiveList = getEffectiveProducts();
        effectiveList.forEach(p => {
            const stockCheck = document.getElementById(`admin-stock-${p.id}`);
            if (stockCheck) {
                overrides.stock[p.id] = stockCheck.checked;
            }

            if (p.priceType === 'weight') {
                const p500 = document.getElementById(`admin-price-500g-${p.id}`);
                const p1k = document.getElementById(`admin-price-1kg-${p.id}`);
                if (p500 && p1k) {
                    overrides.prices[p.id] = {
                        price500g: parseFloat(p500.value) || p.price500g,
                        price1kg: parseFloat(p1k.value) || p.price1kg
                    };
                }
            } else {
                const pUnit = document.getElementById(`admin-price-unit-${p.id}`);
                if (pUnit) {
                    overrides.prices[p.id] = {
                        priceUnit: parseFloat(pUnit.value) || p.priceUnit || p.price,
                        price: parseFloat(pUnit.value) || p.price || p.priceUnit
                    };
                }
            }
        });

        // Configuración de WhatsApp y montos
        if (!overrides.config) overrides.config = {};
        const waInput = document.getElementById('admin-cfg-whatsapp');
        if (waInput && waInput.value) {
            overrides.config.whatsapp = waInput.value.replace(/[^0-9]/g, '');
        }

        const minOrderInput = document.getElementById('admin-cfg-min-order');
        if (minOrderInput && minOrderInput.value) {
            overrides.config.minOrderAmount = parseFloat(minOrderInput.value) || 20000;
        }

        const freeShipInput = document.getElementById('admin-cfg-free-shipping');
        if (freeShipInput && freeShipInput.value) {
            overrides.config.freeShippingThreshold = parseFloat(freeShipInput.value) || 40000;
        }

        saveOverrides();
        alert("¡Precios, montos y disponibilidad actualizados exitosamente!");
        closeAdminModal();

        // Re-render catálogo en AppModule
        if (window.AppModule && window.AppModule.refreshCatalog) {
            window.AppModule.refreshCatalog();
        }
    }

    function resetToFlyerDefaults() {
        if (confirm("¿Estás seguro de restablecer todos los precios al valor original de los flyers de NUTS?")) {
            localStorage.removeItem(STORAGE_KEY);
            overrides = { prices: {}, stock: {}, config: {} };
            renderAdminProductsList();
            if (window.AppModule && window.AppModule.refreshCatalog) {
                window.AppModule.refreshCatalog();
            }
            alert("Precios restaurados a los valores originales.");
        }
    }

    function exportCatalogJSON() {
        loadOverrides();
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(overrides, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `nuts_precios_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    }

    return {
        getEffectiveProducts,
        getEffectiveConfig,
        openAdminModal,
        closeAdminModal,
        saveAllAdminChanges,
        resetToFlyerDefaults,
        exportCatalogJSON
    };
})();
