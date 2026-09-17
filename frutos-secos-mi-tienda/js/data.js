/**
 * Catálogo Maestro Oficial - FRUTOS SECOS MI TIENDA
 * Extraído íntegramente de las listas de precios vigentes
 * Condiciones comerciales:
 * - Envío gratis en CABA a partir de $50.000
 * - 5% de descuento en efectivo a partir de $60.000
 * - Consultar costos de envío a GBA
 */

const TIENDA_CONFIG = {
    storeName: "FRUTOS SECOS MI TIENDA",
    tagline: "Frutos Secos • Almacén Natural • Calidad Directa",
    whatsapp: "5491100000000", // Teléfono configurable para recepción de pedidos
    whatsappDisplay: "Consultas & Pedidos",
    instagram: "frutossecosmitienda",
    cabaFreeShippingThreshold: 50000, // Envío gratis en CABA desde $50.000
    cashDiscountThreshold: 60000,    // 5% de descuento en efectivo desde $60.000
    cashDiscountPercent: 5,
    gbaShippingNotice: "Consultar por costos de envío a GBA",
    currencySymbol: "$",
    adminPin: "1234"
};

const CATEGORIES = [
    { id: "all", name: "Todos los Productos", icon: "✨", count: 0 },
    { id: "frutos-secos", name: "Frutos Secos", icon: "🥜", count: 17 },
    { id: "deshidratados", name: "Deshidratados", icon: "🍇", count: 13 },
    { id: "mixs", name: "Nuestros Mixs", icon: "🥣", count: 14 },
    { id: "confituras-chocolates", name: "Chocolates & Confituras", icon: "🍫", count: 20 },
    { id: "cereales", name: "Cereales & Almohaditas", icon: "🌾", count: 13 },
    { id: "harinas", name: "Harinas & Féculas", icon: "🥖", count: 7 },
    { id: "semillas", name: "Semillas Seleccionadas", icon: "🌱", count: 9 },
    { id: "legumbres-soja", name: "Legumbres & Granos", icon: "🍲", count: 6 },
    { id: "condimentos-hierbas", name: "Condimentos & Hierbas", icon: "🌿", count: 18 },
    { id: "congelados", name: "Congelados & Mundo Vegetal", icon: "❄️", count: 13 },
    { id: "untables-mieles", name: "Untables, Miel & Mermeladas", icon: "🍯", count: 15 },
    { id: "envasados-aceites", name: "Aceites & Envasados", icon: "🫒", count: 18 },
    { id: "suplementos", name: "Suplementos Naturales", icon: "⚡", count: 10 },
    { id: "granolas-almacen", name: "Granolas & Almacén", icon: "🥫", count: 18 },
    { id: "yerbas", name: "Yerbas Orgánicas & Sin TACC", icon: "🧉", count: 5 }
];

const PRODUCTS_DATA = [
    {
        "id": "fs-nuez-mariposa-xl",
        "name": "Nuez Mariposa XL",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Nueces mariposa extra grandes, seleccionadas, tiernas y con alto contenido de omega 3.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 24890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 13610
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7870
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-nuez-cuartos-xl",
        "name": "Nuez en Cuartos XL",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "description": "Cuartos de nuez blanca extra grandes, ideales para repostería, ensaladas y consumo diario.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 23890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 13410
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7690
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-nuez-cascara",
        "name": "Nuez con Cáscara",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "description": "Nuez de cosecha reciente en cáscara protectora natural que conserva al máximo su frescura.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9960
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3650
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-almendra-guara",
        "name": "Almendra Guara Entera",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Almendra Guara de sabor dulce, textura crujiente y tamaño parejo.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 25990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 14280
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7990
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-almendra-non-pareil",
        "name": "Almendra Non Pareil 27/30 Chile",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "description": "Almendra importada chilena de calibre premium 27/30, piel suave y excelente crocancia.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 28590
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 15130
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 8690
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-almendra-tostada-non-pareil",
        "name": "Almendra Tostada Non Pareil Chile",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "description": "Tostado artesanal en su punto justo, resaltando notas aromáticas y textura crocante.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 29110
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 15330
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 8890
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-castana-caju-natural",
        "name": "Castañas de Cajú Natural",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "description": "Castañas de cajú enteras naturales W4, cremosas, sin sal y sin tostar.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 20890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 11680
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7050
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-castana-caju-tostada",
        "name": "Castañas de Cajú Tostadas (Con y Sin Sal)",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "options": [
            "Sin Sal",
            "Con Sal"
        ],
        "description": "Castañas de cajú tostadas a fuego suave. Disponibles con o sin sal.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 21490
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 11880
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7190
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-castana-para",
        "name": "Castañas de Pará Entera (Nueces de Brasil)",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "description": "Fuente natural #1 de selenio orgánico, de textura mantecosa y gran tamaño.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 35980
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 20090
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 12130
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-pistacho-cascara-salado",
        "name": "Pistacho con Cáscara Tostado y Salado",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "description": "Pistachos abiertos naturalmente, tostados al punto justo con un toque de sal marina.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 44890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 25970
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 15130
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-pistacho-pelado-natural",
        "name": "Pistacho Pelado Entero Natural Sin Sal",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Pistacho puro sin cáscara ni sal, calidad premium de color verde intenso para cocina gourmet y repostería.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 86930
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 44780
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 26320
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-avellanas-sin-cascara",
        "name": "Avellanas Grandes Sin Cáscara",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "description": "Avellanas enteras peladas, sabor avellanado profundo ideal para pastas, granolas o consumo directo.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 40750
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 23550
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 13970
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-mani-tostado",
        "name": "Maní Tostado (Con y Sin Sal)",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "options": [
            "Sin Sal",
            "Con Sal"
        ],
        "description": "Maní argentino tostado de primera selección, crocante y sabroso.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 4890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2890
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1690
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-mani-vaina",
        "name": "Maní en Vaina",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": true,
        "description": "Maní tradicional en su vaina natural, ideal para picadas y reuniones.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 5570
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3280
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1850
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-mani-japones",
        "name": "Maní Japonés Sabor Original",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": false,
        "description": "Maní recubierto con cobertura crocante sazonada al estilo oriental.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 6990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3990
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2490
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-mani-crocante-jamon",
        "name": "Maní Crocante Sabor Jamón",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": false,
        "description": "Snack de maní crocante con intenso sabor a jamón ahumado.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 8490
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 4690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2980
            }
        ],
        "inStock": true
    },
    {
        "id": "fs-mani-crocante-crema-cebolla",
        "name": "Maní Crocante Sabor Crema y Cebolla",
        "category": "frutos-secos",
        "categoryName": "Frutos Secos",
        "isSinTacc": false,
        "description": "Snack crocante de maní con el clásico sabor cremoso y aromático a cebolla.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 8490
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 4690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2980
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-fruta-escurrida",
        "name": "Fruta Escurrida",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Cubos de fruta natural confitada y escurrida, clásica para budines y pan dulce.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 6990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3990
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2490
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-fruta-glaseada",
        "name": "Fruta Glaseada",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Frutas seleccionadas con glaseado brillante para repostería fina.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 12890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 7390
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4510
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-pasas-flame",
        "name": "Pasas Flamé / Sultaninas",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Pasas de uva sin semilla de textura suave, dulces y energéticas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 6990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3990
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2490
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-pasas-negras-jumbo",
        "name": "Pasas Negras Jumbo Mediana",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Pasas de uva negras carnosas y de gran tamaño, sin semilla.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 8490
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 4690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2980
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-pasas-rubias",
        "name": "Pasas Rubias",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Pasas de uva rubias doradas, tiernas, aromáticas y de dulzor equilibrado.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 10850
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6290
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3990
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-ciruela-dagen",
        "name": "Ciruela D'Agen Bombón Sin Carozo",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Ciruelas D'Agen tipo bombón, tiernas, carnosas, sin carozo y de calidad de exportación.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 11790
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6860
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4170
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-ciruela-presidente",
        "name": "Ciruela Presidente Mediana",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Ciruela tiernizada variedad Presidente, dulce y con abundante pulpa.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 19980
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 11390
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6960
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-chips-banana",
        "name": "Chips de Banana Deshidratada",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Rodajas crocantes de banana natural, snack dulce y saludable.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 13890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 7790
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4740
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-higos-negros",
        "name": "Higos Negros Secos",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Higos negros desecados naturalmente al sol, ricos en fibra y minerales.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 16550
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 9130
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 5890
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-peras",
        "name": "Peras Deshidratadas",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Mitades de peras tiernizadas de Río Negro, dulces y jugosas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 20890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 11680
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7050
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-arandanos",
        "name": "Arándanos Deshidratados",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Arándanos rojos/azules deshidratados, potente antioxidante natural.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 19980
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 11390
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6960
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-tomates-secos-2026",
        "name": "Tomates Secos Premium 2026",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Tomates deshidratados al sol de nueva temporada 2026, carnosos e intensos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 19980
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 11390
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6960
            }
        ],
        "inStock": true
    },
    {
        "id": "desh-durazno-medallon",
        "name": "Durazno Medallón Grande",
        "category": "deshidratados",
        "categoryName": "Frutos Deshidratados",
        "isSinTacc": true,
        "description": "Orejones de durazno medallón gigante, carnosos y de exquisito aroma frutal.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 18950
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-4-semillas",
        "name": "Mix 4 Semillas (Chía, Lino, Sésamo, Girasol)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "description": "El mix equilibrado perfecto para sumar fibra, calcio y omegas a tus comidas diarias.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 5570
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3280
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1850
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-economico",
        "name": "Mix Económico (Maní, Pasas, Nuez Partida, Guara, Cajú)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "description": "Excelente relación precio/calidad con maní, pasas, trozos de nuez, almendra guara y cajú.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9960
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3650
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-desayuno",
        "name": "Mix Desayuno (Granola, Ananá, Banana, Pasas)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": false,
        "description": "Combinación energética de granola crocante con fruta deshidratada tropical.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9960
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3650
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-pan-dulce",
        "name": "Mix Pan Dulce (Pasas, Fruta Escurrida, Nuez, Almendra)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "description": "Mezcla tradicional lista para budines, panes dulces o repostería artesanal.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 10850
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6290
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3990
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-antioxidante",
        "name": "Mix Antioxidante (Zapallo, Arándanos, Pasas, Maní)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Cargado de nutrientes protectores: semillas de zapallo, arándanos secos, pasas y maní.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 11790
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6850
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4170
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-mani",
        "name": "Mix Maní (Maní, Pasas, Almendras, Nuez, Cajú)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "description": "Base de maní seleccionado combinado con frutos secos nobles y pasas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 12390
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6990
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4290
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-salado",
        "name": "Mix Salado (Almendra Tostada, Maíz Frito, Maní, Cajú Tostado)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": false,
        "description": "El mix ideal para picadas y aperitivos con frutos secos tostados y maíz crocante salado.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 13890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 7790
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4740
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-tropical",
        "name": "Mix Tropical (Pasas, Ananá, Banana, Nuez, Almendra)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "description": "Fresco, exótico y dulce: ananá deshidratado, chips de banana y frutos secos selectos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 13890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 7790
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4740
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-sin-pasas",
        "name": "Mix Sin Pasas (Maní, Nuez, Almendras, Cajú)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Para quienes no desean pasas de uva: 100% frutos secos puros y crocantes.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 15850
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 8790
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 5590
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-clasico",
        "name": "Mix Clásico (Pasas, Nuez, Almendra, Cajú)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "description": "La combinación tradicional más pedida de frutos secos y pasas de uva sin semillas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 16550
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 9130
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 5890
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-energy",
        "name": "Mix Energy (Arándanos, Nuez, Almendras, Cajú)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "description": "Super mix energético sin maní: arándanos deshidratados, nueces mariposa, almendras y cajú.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 21490
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 11880
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7190
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-premium",
        "name": "Mix Premium (Nuez, Almendras, Cajú, Avellanas)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "El mix más distinguido: sólo frutos secos nobles seleccionados, sin maní ni pasas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 25990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 14280
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7990
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-hierbas-1",
        "name": "Mix de Hierbas #1 (Sen, Cedrón, Manzanilla, Boldo)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "description": "Infusión digestiva natural con propiedades depurativas y relajantes.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3300
            }
        ],
        "inStock": true
    },
    {
        "id": "mix-hierbas-2",
        "name": "Mix de Hierbas #2 (Manzanilla, C. Caballo, Amargón, Cedrón)",
        "category": "mixs",
        "categoryName": "Nuestros Mixs",
        "isSinTacc": true,
        "description": "Mezcla herbal desintoxicante, diurética y tonificante.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3300
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-botoncitos-ddl",
        "name": "Botoncitos Rellenos de Dulce de Leche - A'Granel",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": false,
        "description": "Bocaditos de chocolate con centro cremoso de auténtico dulce de leche.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 15850
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 8790
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 5590
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 2700
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-marrok",
        "name": "Chocolate Marrok 2x2 - A'Granel",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": false,
        "description": "Clásico bocadito bicapa de praliné y pasta de maní con chocolate.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 18950
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3300
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-chocolate-shot",
        "name": "Chocolate con Maní (Shot) - A'Granel",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": false,
        "description": "Deliciosas tabletitas de chocolate con leche y maní tostado partido.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 18950
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3300
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-mani-choc-argenfrut",
        "name": "Maní con Chocolate Semiamargo - Argenfrut",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": false,
        "description": "Maní tostado cubierto con baño de chocolate semiamargo fino.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 18950
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3300
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-pasas-choc-argenfrut",
        "name": "Pasas de Uva con Chocolate con Leche - Argenfrut",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": false,
        "description": "Pasas de uva sin semilla bañadas en cremoso chocolate con leche.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 22590
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 12980
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7380
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3700
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-lentejas-choc-argenfrut",
        "name": "Lentejas de Chocolate con Leche - Argenfrut",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": false,
        "description": "Lentejitas de chocolate con cubierta crocante azucarada tipo confite.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 23890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 13410
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7690
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3900
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-bananita-choc-argenfrut",
        "name": "Bananita de Cereal con Chocolate - Argenfrut",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": false,
        "description": "Bocaditos crocantes de cereal con esencia de banana y baño de chocolate.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 33980
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 19240
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 11810
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 5000
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-almendra-choc-argenfrut",
        "name": "Almendra con Chocolate con Leche - Argenfrut (Sin TACC)",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Almendras enteras tostadas bañadas en chocolate con leche libre de gluten.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 33980
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 19240
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 11810
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 5000
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-pasas-choc-colonial",
        "name": "Pasas de Uva con Chocolate - Colonial (Sin TACC)",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "description": "Pasas de uva bañadas por Colonial, certificadas libres de gluten.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 22590
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 12980
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7380
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3700
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-mani-choc-colonial",
        "name": "Maní con Chocolate Semiamargo - Colonial (Sin TACC)",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "description": "Maní tostado con baño semiamargo Colonial, libre de gluten.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 23890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 13410
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7690
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3900
            }
        ],
        "inStock": true
    },
    {
        "id": "conf-almendra-choc-colonial",
        "name": "Almendra con Chocolate - Colonial (Sin TACC)",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "description": "Almendras seleccionadas con chocolate con leche Colonial Sin TACC.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 33980
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 19240
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 11810
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 5000
            }
        ],
        "inStock": true
    },
    {
        "id": "choc-cobertura-80-colonial",
        "name": "Cobertura de Chocolate 80% Colonial (Sin TACC)",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "description": "Chocolate puro cobertura al 80% de cacao para moldear, bañar o repostería de alta gama.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 48890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 27710
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 15330
            }
        ],
        "inStock": true
    },
    {
        "id": "choc-cacao-alcalino-colonial",
        "name": "Cacao Alcalino Amargo - Colonial (Sin TACC)",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "description": "Cacao amargo en polvo de alta solubilidad, color oscuro intenso y aroma tostado.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 42750
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 24550
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 14970
            }
        ],
        "inStock": true
    },
    {
        "id": "choc-cacao-mayana",
        "name": "Cacao Amargo Mayana (Sin TACC)",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "description": "Cacao amargo en polvo libre de gluten marca Mayana, ideal para postres y desayunos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 18950
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            }
        ],
        "inStock": true
    },
    {
        "id": "choc-chips-semiamargo-chi",
        "name": "Chips de Chocolate Semiamargo - Chi Chocolates",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": false,
        "description": "Gotitas de chocolate semiamargo resistentes al horneado para galletitas y muffins.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 11790
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6850
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4170
            }
        ],
        "inStock": true
    },
    {
        "id": "choc-chips-leche-aguila",
        "name": "Chips de Chocolate con Leche - Baño Repostería Águila",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": false,
        "description": "Gotitas de chocolate con leche Águila para repostería y decoración de tortas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 11790
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6850
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4170
            }
        ],
        "inStock": true
    },
    {
        "id": "choc-tab-80-organico",
        "name": "Chocolate Orgánico 80% Cacao Colonial - 100g",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Tableta orgánica premium 80% cacao, apto kosher y libre de gluten.",
        "presentations": [
            {
                "key": "unit",
                "label": "Tableta 100g",
                "price": 5900
            }
        ],
        "inStock": true
    },
    {
        "id": "choc-tab-70-organico",
        "name": "Chocolate Orgánico 70% Cacao Colonial - 100g",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "description": "Tableta orgánica artesanal 70% cacao, balance sublime de notas florales y amargor.",
        "presentations": [
            {
                "key": "unit",
                "label": "Tableta 100g",
                "price": 5700
            }
        ],
        "inStock": true
    },
    {
        "id": "choc-tab-70-stevia",
        "name": "Chocolate 70% Cacao con Stevia Colonial - 100g",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "description": "Tableta 70% cacao endulzada naturalmente con stevia, 0% azúcares agregados.",
        "presentations": [
            {
                "key": "unit",
                "label": "Tableta 100g",
                "price": 4900
            }
        ],
        "inStock": true
    },
    {
        "id": "choc-tab-55-sin-azucar",
        "name": "Chocolate 55% Cacao Sin Azúcar Colonial - 100g",
        "category": "confituras-chocolates",
        "categoryName": "Chocolates & Confituras",
        "isSinTacc": true,
        "description": "Chocolate suave 55% cacao sin azúcar añadida, apto celíacos y dietas bajas en carbohidratos.",
        "presentations": [
            {
                "key": "unit",
                "label": "Tableta 100g",
                "price": 4900
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-copos-con-azucar",
        "name": "Copos de Maíz con Azúcar - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "description": "Hojuelas de maíz tostado glaseadas con azúcar, crujientes para leche y yogur.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 5890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3370
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1950
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-copos-sin-azucar",
        "name": "Copos de Maíz Sin Azúcar - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "description": "Hojuelas de maíz tostadas naturales sin azúcar agregada.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 5890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3370
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1950
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-quinoa-pop",
        "name": "Quínoa Pop - Yinyan (Sin TACC)",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Quínoa inflada crocante sin gluten, liviana y rica en aminoácidos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 7890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3370
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2780
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-aritos-avena-miel",
        "name": "Aritos de Avena y Miel - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "description": "Aritos crocantes a base de avena con toque dulce de miel pura.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 7890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3370
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2780
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-aritos-frutales",
        "name": "Aritos Frutales - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "description": "Aritos coloridos con mix de sabores frutales para desayunos y meriendas divertidas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 7890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3370
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2780
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-bolitas-chocolate",
        "name": "Bolitas de Chocolate - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "description": "Esferas crocantes de cereal con intenso sabor a chocolate.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 7890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3370
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2780
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-fibras-salvado",
        "name": "Fibras de Salvado - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "description": "Bastones crocantes con alto aporte de fibra vegetal insoluble para regular el tránsito intestinal.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 7890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3370
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2780
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-almohaditas-salvado",
        "name": "Almohaditas de Salvado - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "description": "Almohaditas horneadas de salvado integrales, ligeras y nutritivas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 7890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3370
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2780
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-tutuca-burbuja",
        "name": "Maíz Inflado (Tutuca) - Burbuja",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": true,
        "description": "Tutucas dulces infladas naturalmente, clásicas y crocantes.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9370
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5290
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3380
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-almohaditas-frutilla",
        "name": "Almohaditas Rellenas de Frutilla - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "description": "Almohaditas de cereal crocante con relleno cremoso sabor frutilla.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 8990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5190
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3180
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-almohaditas-avellana",
        "name": "Almohaditas Rellenas de Avellana - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "description": "Almohaditas crocantes con suave crema de pasta de avellanas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 8990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5190
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3180
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-almohaditas-limon",
        "name": "Almohaditas Rellenas de Limón - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "description": "Almohaditas crocantes rellenas de crema cítrica refrescante de limón.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 8990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5190
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3180
            }
        ],
        "inStock": true
    },
    {
        "id": "cer-almohaditas-chocolate",
        "name": "Almohaditas Rellenas de Doble Chocolate - Lasfor",
        "category": "cereales",
        "categoryName": "Cereales & Almohaditas",
        "isSinTacc": false,
        "isFeatured": true,
        "description": "Almohaditas rellenas con abundante crema de chocolate con leche.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9960
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3650
            }
        ],
        "inStock": true
    },
    {
        "id": "har-almendra-con-piel",
        "name": "Harina de Almendras Con Piel A'Granel",
        "category": "harinas",
        "categoryName": "Harinas & Féculas",
        "isSinTacc": true,
        "description": "Almendras molidas finamente con su piel, aportando fibra extra para recetas cetogénicas o sin gluten.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 7890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 4390
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2780
            }
        ],
        "inStock": true
    },
    {
        "id": "har-almendra-sin-piel",
        "name": "Harina de Almendras Sin Piel A'Granel",
        "category": "harinas",
        "categoryName": "Harinas & Féculas",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Harina blanca refinada de almendras peladas, insumo estrella para macarons, tortas y panificados keto.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 8490
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 4690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2980
            }
        ],
        "inStock": true
    },
    {
        "id": "har-coco",
        "name": "Harina de Coco A'Granel",
        "category": "harinas",
        "categoryName": "Harinas & Féculas",
        "isSinTacc": true,
        "description": "Harina aromática obtenida de pulpa de coco desgrasada, rica en fibra y baja en carbohidratos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 8990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5190
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3180
            }
        ],
        "inStock": true
    },
    {
        "id": "har-pistacho",
        "name": "Harina de Pistacho A'Granel",
        "category": "harinas",
        "categoryName": "Harinas & Féculas",
        "isSinTacc": true,
        "description": "Harina gourmet de pistacho puro, de color verdoso y sabor distintivo para cocina de autor.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 12390
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6990
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4290
            }
        ],
        "inStock": true
    },
    {
        "id": "har-garbanzo",
        "name": "Harina de Garbanzo A'Granel",
        "category": "harinas",
        "categoryName": "Harinas & Féculas",
        "isSinTacc": true,
        "description": "Harina base para fainá tradicional, tortillas veganas y rebozados proteicos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 2990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 1690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1090
            }
        ],
        "inStock": true
    },
    {
        "id": "har-integral-fina",
        "name": "Harina Integral Fina A'Granel",
        "category": "harinas",
        "categoryName": "Harinas & Féculas",
        "isSinTacc": false,
        "description": "Harina de trigo con germen y salvado molido fino para panes integrales esponjosos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 2990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 1690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1090
            }
        ],
        "inStock": true
    },
    {
        "id": "har-avena",
        "name": "Harina de Avena A'Granel",
        "category": "harinas",
        "categoryName": "Harinas & Féculas",
        "isSinTacc": false,
        "description": "Harina suave obtenida de copos de avena integrales, perfecta para pancakes y waffles.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 3990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2330
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1450
            }
        ],
        "inStock": true
    },
    {
        "id": "sem-mix-4",
        "name": "Mix 4 Semillas (Chía, Lino, Sésamo, Girasol)",
        "category": "semillas",
        "categoryName": "Semillas Seleccionadas",
        "isSinTacc": true,
        "description": "Mezcla energética lista para activar en agua o espolvorear sobre tostadas y ensaladas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 5570
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3280
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1850
            }
        ],
        "inStock": true
    },
    {
        "id": "sem-lino-marron",
        "name": "Lino Marrón",
        "category": "semillas",
        "categoryName": "Semillas Seleccionadas",
        "isSinTacc": true,
        "description": "Semillas enteras de lino marrón, fuente rica de lignanos y mucílagos prebióticos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 4890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2890
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1690
            }
        ],
        "inStock": true
    },
    {
        "id": "sem-sesamo-integral",
        "name": "Sésamo Integral",
        "category": "semillas",
        "categoryName": "Semillas Seleccionadas",
        "isSinTacc": true,
        "description": "Semillas de sésamo enteras sin pelar con la máxima concentración natural de calcio.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 5570
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3280
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1850
            }
        ],
        "inStock": true
    },
    {
        "id": "sem-girasol-pelado",
        "name": "Girasol Pelado",
        "category": "semillas",
        "categoryName": "Semillas Seleccionadas",
        "isSinTacc": true,
        "description": "Pipas de girasol peladas limpias, listas para consumir o tostar ligeramente.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 5890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3370
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1950
            }
        ],
        "inStock": true
    },
    {
        "id": "sem-chia-primera",
        "name": "Chía Primera Calidad",
        "category": "semillas",
        "categoryName": "Semillas Seleccionadas",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Semillas de chía negra seleccionadas primera cosecha, alto poder espesante para pudines.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9370
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5290
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3380
            }
        ],
        "inStock": true
    },
    {
        "id": "sem-sesamo-blanco",
        "name": "Sésamo Blanco Pelado",
        "category": "semillas",
        "categoryName": "Semillas Seleccionadas",
        "isSinTacc": true,
        "description": "Semillas de ajonjolí blanco perlado para panadería, sushi y salteados.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9960
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3650
            }
        ],
        "inStock": true
    },
    {
        "id": "sem-sesamo-negro",
        "name": "Sésamo Negro",
        "category": "semillas",
        "categoryName": "Semillas Seleccionadas",
        "isSinTacc": true,
        "description": "Sésamo negro intenso con gran aroma para platos asiáticos y terminación estética.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 12390
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6990
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4290
            }
        ],
        "inStock": true
    },
    {
        "id": "sem-quinoa-blanca",
        "name": "Quínoa Blanca Lavada",
        "category": "semillas",
        "categoryName": "Semillas Seleccionadas",
        "isSinTacc": true,
        "description": "Grano andino lavado sin saponina, listo para hervir en 15 minutos como base proteica.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 11790
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6850
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4170
            }
        ],
        "inStock": true
    },
    {
        "id": "sem-zapallo",
        "name": "Semillas de Zapallo Peladas",
        "category": "semillas",
        "categoryName": "Semillas Seleccionadas",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Pipas de calabaza verdes, ricas en zinc, magnesio y triptófano.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 19980
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 11390
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6960
            }
        ],
        "inStock": true
    },
    {
        "id": "leg-garbanzos-8mm",
        "name": "Garbanzos 8 mm A'Granel",
        "category": "legumbres-soja",
        "categoryName": "Legumbres & Granos",
        "isSinTacc": true,
        "description": "Garbanzo calibre grande 8mm, cocción tierna ideal para hummus cremoso y guisados.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 2990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 1690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1090
            }
        ],
        "inStock": true
    },
    {
        "id": "leg-lentejas-n5",
        "name": "Lentejas N°5 A'Granel",
        "category": "legumbres-soja",
        "categoryName": "Legumbres & Granos",
        "isSinTacc": true,
        "description": "Lentejas seleccionadas de piel fina que no se desarman en la cocción.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 4890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2890
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1690
            }
        ],
        "inStock": true
    },
    {
        "id": "leg-poroto-alubia",
        "name": "Poroto Alubia A'Granel",
        "category": "legumbres-soja",
        "categoryName": "Legumbres & Granos",
        "isSinTacc": true,
        "description": "Poroto blanco alubia mantecoso, ideal para ensaladas frescas y platos tradicionales.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 2990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 1690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1090
            }
        ],
        "inStock": true
    },
    {
        "id": "leg-poroto-negro",
        "name": "Poroto Negro A'Granel",
        "category": "legumbres-soja",
        "categoryName": "Legumbres & Granos",
        "isSinTacc": true,
        "description": "Porotos negros seleccionados, base tradicional para feijoada, burritos y sopas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 3990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2330
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1450
            }
        ],
        "inStock": true
    },
    {
        "id": "leg-soja-texturizada",
        "name": "Soja Texturizada Mediana A'Granel",
        "category": "legumbres-soja",
        "categoryName": "Legumbres & Granos",
        "isSinTacc": true,
        "description": "Carne de soja texturizada desgrasada mediana para empanadas, salsas boloñesas y rellenos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 3990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2330
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1450
            }
        ],
        "inStock": true
    },
    {
        "id": "leg-arroz-yamani",
        "name": "Arroz Yamaní Integral A'Granel",
        "category": "legumbres-soja",
        "categoryName": "Legumbres & Granos",
        "isSinTacc": true,
        "description": "Arroz integral yamaní agroecológico, grano entero que conserva su cutícula y nutrientes.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 3990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2330
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1450
            }
        ],
        "inStock": true
    },
    {
        "id": "con-mix-hierbas-1",
        "name": "Mix de Hierbas #1 (Sen, Cedrón, Manzanilla, Boldo)",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Blend herbal digestivo en hojas enteras seleccionadas.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3300
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 2250
            }
        ],
        "inStock": true
    },
    {
        "id": "con-mix-hierbas-2",
        "name": "Mix de Hierbas #2 (Manzanilla, C. Caballo, Amargón, Cedrón)",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Blend natural depurativo y diurético.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3300
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 2250
            }
        ],
        "inStock": true
    },
    {
        "id": "con-sen",
        "name": "Sen en Hojas A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Hojas de sen para infusiones facilitadoras del tránsito intestinal.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3990
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2490
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1200
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 700
            }
        ],
        "inStock": true
    },
    {
        "id": "con-amargon",
        "name": "Amargón / Diente de León A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Hierba medicinal amarga, excelente protector hepático y digestivo.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5290
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3380
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1500
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 950
            }
        ],
        "inStock": true
    },
    {
        "id": "con-cola-caballo",
        "name": "Cola de Caballo A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Planta rica en silicio orgánico, fortalecedora de uñas, cabello y depuración renal.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5290
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3380
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1500
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 950
            }
        ],
        "inStock": true
    },
    {
        "id": "con-cedron",
        "name": "Cedrón A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Hojas fragantes de cedrón con aroma alimonado calmante.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3300
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 2250
            }
        ],
        "inStock": true
    },
    {
        "id": "con-boldo",
        "name": "Boldo A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Hojas puras de boldo para infusiones posprandiales alivio de pesadez.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3300
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 2250
            }
        ],
        "inStock": true
    },
    {
        "id": "con-hibiscus",
        "name": "Hibiscus (Flor de Jamaica) A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Cálices secos de flor de jamaica, color rubí vibrante y sabor frutal refrescante.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 10490
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6680
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3300
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 2250
            }
        ],
        "inStock": true
    },
    {
        "id": "con-stevia-hojas",
        "name": "Stevia en Hojas A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Hojas verdes de stevia pura para endulzar infusiones y mate sin calorías.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 13410
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7690
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 3900
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 2800
            }
        ],
        "inStock": true
    },
    {
        "id": "con-manzanilla-flor",
        "name": "Manzanilla Flor Premium A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Flores enteras de manzanilla seleccionadas de aroma dulce y relajante.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 19240
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 11810
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 5000
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 3500
            }
        ],
        "inStock": true
    },
    {
        "id": "con-adobo-pizza",
        "name": "Adobo para Pizza A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Mix sazonador de orégano, ají molido y especias para pizzas y tucos.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3890
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2410
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1090
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 590
            }
        ],
        "inStock": true
    },
    {
        "id": "con-pimenton-dulce",
        "name": "Pimentón Rojo Extra Dulce 100% Puro",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Pimentón dulce seleccionado, rojo profundo de alta pigmentación y aroma intenso.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3890
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2410
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1090
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 590
            }
        ],
        "inStock": true
    },
    {
        "id": "con-provenzal",
        "name": "Provenzal A'Granel (Ajo y Perejil)",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Mezcla tradicional de ajo granulado y perejil deshidratado para milanesas y carnes.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3890
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2410
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1090
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 590
            }
        ],
        "inStock": true
    },
    {
        "id": "con-mostaza-grano",
        "name": "Mostaza Amarilla en Grano A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Granos enteros de mostaza para vinagretas, conservas y salsas caseras.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5190
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3180
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1390
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 850
            }
        ],
        "inStock": true
    },
    {
        "id": "con-oregano",
        "name": "Orégano Seleccionado A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Hojas de orégano de aroma potente, ideal para salsas, tartas y empanadas.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5190
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3180
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1390
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 850
            }
        ],
        "inStock": true
    },
    {
        "id": "con-ajo-polvo",
        "name": "Ajo en Polvo A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Ajo deshidratado molido fino para condimentar sin tropezones.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5970
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3890
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1700
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 1090
            }
        ],
        "inStock": true
    },
    {
        "id": "con-ajo-granulado",
        "name": "Ajo Granulado A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "description": "Ajo deshidratado en granos que se hidratan en cocciones lentas.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5970
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3890
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1700
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 1090
            }
        ],
        "inStock": true
    },
    {
        "id": "con-pimenton-ahumado",
        "name": "Pimentón Ahumado A'Granel",
        "category": "condimentos-hierbas",
        "categoryName": "Condimentos & Hierbas",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Sabor a humo de leña de encina tradicional para guisos, patatas y carnes.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5970
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3890
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 1700
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 1090
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-frutillas",
        "name": "Frutillas Congeladas IQF",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Frutillas enteras congeladas individualmente por método IQF, ideales para smoothies y postres.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9370
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5290
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3380
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-arandanos",
        "name": "Arándanos Congelados IQF",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "description": "Arándanos frescos congelados en su punto óptimo de maduración.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 17950
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 9680
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 6090
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-mix-frutos-rojos-1",
        "name": "Mix Frutos Rojos #1 (Arándanos, Moras, Frambuesa)",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Trilogía clásica de frutos del bosque congelados para licuados y repostería.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 22590
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 12980
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7380
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-espinaca",
        "name": "Espinaca Congelada en Porciones",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "description": "Hojas de espinaca lavadas y blanqueadas, listas para saltear o rellenar tartas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9370
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5290
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3380
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-brocoli",
        "name": "Brócoli Congelado IQF",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "description": "Flores tiernas de brócoli seleccionadas, listas para hervir o cocinar al vapor.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9960
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3650
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-mv-medallon-quinoa-zanahoria",
        "name": "Medallones Quínoa, Zanahoria y Cebolla Caramelizada (4u) - Mundo Vegetal Sin TACC",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "description": "Pack de 4 medallones vegetales caseros 100% libres de gluten.",
        "presentations": [
            {
                "key": "pack4",
                "label": "Pack x 4 u",
                "price": 5790
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-mv-medallon-garbanzo-champignon",
        "name": "Medallones Garbanzo, Champiñones, Zanahoria y Zapallo (4u) - Mundo Vegetal Sin TACC",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "description": "Pack de 4 medallones proteicos a base de garbanzos y champiñones frescos.",
        "presentations": [
            {
                "key": "pack4",
                "label": "Pack x 4 u",
                "price": 5790
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-mv-medallon-quinoa-espinaca",
        "name": "Medallones Quínoa, Espinaca y Zucchini (4u) - Mundo Vegetal Sin TACC",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "description": "Pack de 4 medallones verdes livianos y nutritivos Sin TACC.",
        "presentations": [
            {
                "key": "pack4",
                "label": "Pack x 4 u",
                "price": 5790
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-mv-milanesas-arvejas",
        "name": "Milanesas de Arvejas y Espinaca / Calabaza (4u) - Mundo Vegetal Sin TACC",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "options": [
            "Arvejas y Espinaca",
            "Arvejas y Calabaza"
        ],
        "description": "Pack de 4 milanesas crocantes vegetales libres de gluten.",
        "presentations": [
            {
                "key": "pack4",
                "label": "Pack x 4 u",
                "price": 5790
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-mv-falafel",
        "name": "Falafel de Garbanzos (9 unidades) - Mundo Vegetal Sin TACC",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "9 albóndigas especiadas de garbanzo al estilo de Medio Oriente, para dorar al horno o sartén.",
        "presentations": [
            {
                "key": "pack9",
                "label": "Pack x 9 u",
                "price": 5790
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-mv-prepizza-quinoa",
        "name": "Prepizza de Quínoa y Zanahoria (2 unidades) - Mundo Vegetal Sin TACC",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "description": "2 bases para pizza crocantes a base de vegetales y quínoa sin gluten.",
        "presentations": [
            {
                "key": "pack2",
                "label": "Pack x 2 u",
                "price": 5790
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-mv-bastoncitos-brocoli",
        "name": "Bastoncitos de Mung, Cebolla Caramelizada y Brócoli (10u) - Mundo Vegetal Sin TACC",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "description": "10 bastoncitos crujientes ideales para finger food saludable.",
        "presentations": [
            {
                "key": "pack10",
                "label": "Pack x 10 u",
                "price": 5790
            }
        ],
        "inStock": true
    },
    {
        "id": "cong-mv-bastoncitos-champignon",
        "name": "Bastoncitos de Mung, Cebolla Caramelizada y Champiñones (10u) - Mundo Vegetal Sin TACC",
        "category": "congelados",
        "categoryName": "Congelados & Mundo Vegetal",
        "isSinTacc": true,
        "description": "10 bastoncitos sabrosos con trozos de champiñón y poroto mung.",
        "presentations": [
            {
                "key": "pack10",
                "label": "Pack x 10 u",
                "price": 5790
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-miel-liquida-bioway",
        "name": "Miel Líquida Bioway (Apto Kosher) - 450g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Miel de pradera pura filtrada, textura fluida certificada Kosher.",
        "presentations": [
            {
                "key": "frasco450g",
                "label": "Frasco 450g",
                "price": 5300
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-miel-solida-bioway",
        "name": "Miel Sólida Bioway (Apto Kosher) - 450g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Miel cristalizada naturalmente de textura untable y sabor suave.",
        "presentations": [
            {
                "key": "frasco450g",
                "label": "Frasco 450g",
                "price": 5300
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-miel-cremosa-elena",
        "name": "Miel Cremosa Elena Multifloral (Sin TACC) - 500g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Miel batida cremosa multifloral de monte, fácil de untar en tostadas.",
        "presentations": [
            {
                "key": "pote500g",
                "label": "Pote 500g",
                "price": 6500
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-miel-entrenuts",
        "name": "Miel Cremosa / Líquida Entrenuts (Sin TACC Kosher) - 500g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "options": [
            "Cremosa",
            "Líquida"
        ],
        "description": "Miel pura de máxima pureza producida por Entrenuts.",
        "presentations": [
            {
                "key": "pote500g",
                "label": "Pote 500g",
                "price": 6500
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-pasta-mani-natural-entrenuts",
        "name": "Pasta de Maní Natural Entrenuts (Sin TACC Kosher) - 370g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "100% maní tostado seleccionado sin azúcar ni sal añadida.",
        "presentations": [
            {
                "key": "pote370g",
                "label": "Frasco 370g",
                "price": 3700
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-pasta-mani-stevia-entrenuts",
        "name": "Pasta de Maní con Stevia Entrenuts (Sin TACC Kosher) - 370g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Pasta de maní pura endulzada naturalmente con stevia.",
        "presentations": [
            {
                "key": "pote370g",
                "label": "Frasco 370g",
                "price": 3700
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-pasta-mani-coco-entrenuts",
        "name": "Pasta de Maní con Coco Entrenuts (Sin TACC Kosher) - 370g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Combinación exquisita de maní tostado y coco rallado natural.",
        "presentations": [
            {
                "key": "pote370g",
                "label": "Frasco 370g",
                "price": 3700
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-pasta-mani-cacao-entrenuts",
        "name": "Pasta de Maní con Cacao Entrenuts (Sin TACC Kosher) - 370g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Sabor chocolatoso natural con cacao amargo y maní tostado.",
        "presentations": [
            {
                "key": "pote370g",
                "label": "Frasco 370g",
                "price": 3700
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-pasta-mani-protein-caramel",
        "name": "Pasta de Maní Protein Caramel Entrenuts (Sin TACC) - 370g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Edición proteica fortificada con proteína de suero y sabor caramelo.",
        "presentations": [
            {
                "key": "pote370g",
                "label": "Frasco 370g",
                "price": 4500
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-pasta-mani-protein-cookies",
        "name": "Pasta de Maní Protein Cookies & Cream Entrenuts (Sin TACC) - 370g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Edición fitness con trozos crocantes sabor cookies and cream.",
        "presentations": [
            {
                "key": "pote370g",
                "label": "Frasco 370g",
                "price": 4500
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-pasta-mani-oddisnuts",
        "name": "Pasta de Maní Oddisnuts (Vegano Keto Sin TACC) - 350g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Pasta de textura ultra cremosa y sedosa apta dieta Keto y vegana.",
        "presentations": [
            {
                "key": "pote350g",
                "label": "Frasco 350g",
                "price": 3700
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-mantequilla-mani-ninas",
        "name": "Mantequilla de Maní Ninas (Sin TACC) - 380g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Mantequilla de maní estilo artesanal tradicional.",
        "presentations": [
            {
                "key": "pote380g",
                "label": "Frasco 380g",
                "price": 3900
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-mermelada-arandanos-fito",
        "name": "Mermelada de Arándanos Fito Plus - 410g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Dulce artesanal con frutos enteros de arándanos de primera selección.",
        "presentations": [
            {
                "key": "frasco410g",
                "label": "Frasco 410g",
                "price": 3900
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-mermelada-frutilla-fito",
        "name": "Mermelada de Frutilla Fito Plus - 410g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Mermelada con trozos de frutilla fresca de dulzor balanceado.",
        "presentations": [
            {
                "key": "frasco410g",
                "label": "Frasco 410g",
                "price": 3900
            }
        ],
        "inStock": true
    },
    {
        "id": "unt-mermelada-frutos-bosque-fito",
        "name": "Mermelada Frutos del Bosque Fito Plus - 410g",
        "category": "untables-mieles",
        "categoryName": "Untables, Miel & Mermeladas",
        "isSinTacc": true,
        "description": "Mix de moras, frambuesas y arándanos en confitura natural.",
        "presentations": [
            {
                "key": "frasco410g",
                "label": "Frasco 410g",
                "price": 3900
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-almendras-sol-natural-20cc",
        "name": "Aceite de Almendras (Sol Natural) 20cc Apto Vegano",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Aceite cosmético y alimentario puro de almendras dulces para hidratación.",
        "presentations": [
            {
                "key": "20cc",
                "label": "Frasco 20cc",
                "price": 1490
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-ricino-virgin-20cc",
        "name": "Aceite de Ricino (Virgin Oil) 20cc",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Aceite de ricino virgen prensado en frío para pestañas, cejas y cabello.",
        "presentations": [
            {
                "key": "20cc",
                "label": "Frasco 20cc",
                "price": 1490
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-endulzante-jual-stevia",
        "name": "Endulzante Jual Stevia Líquida 250cc Apto Vegano",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Extracto líquido concentrado de hojas de stevia sin regusto amargo.",
        "presentations": [
            {
                "key": "250cc",
                "label": "Botella 250cc",
                "price": 3200
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-coco-neutro-entrenuts-360cc",
        "name": "Aceite de Coco Neutro (Entrenuts) 360cc - Sin TACC",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Aceite de coco sin aroma ni sabor a coco, ideal para cocinar a altas temperaturas.",
        "presentations": [
            {
                "key": "360cc",
                "label": "Frasco 360cc",
                "price": 6900
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-coco-virgen-entrenuts-360cc",
        "name": "Aceite de Coco Virgen Premium (Entrenuts) 360cc - Sin TACC",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Prensado en frío de primera extracción con exquisito aroma y sabor tropical.",
        "presentations": [
            {
                "key": "360cc",
                "label": "Frasco 360cc",
                "price": 14600
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-coco-neutro-vorganico-250cc",
        "name": "Aceite Coco Neutro (V. Orgánico) 250cc Vegano Sin TACC",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Aceite orgánico neutro certificado, excelente para salteados y frituras saludables.",
        "presentations": [
            {
                "key": "250cc",
                "label": "Frasco 250cc",
                "price": 6900
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-coco-neutro-vorganico-360cc",
        "name": "Aceite Coco Neutro (V. Orgánico) 360cc Vegano Sin TACC",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Presentación mediana de aceite de coco neutro orgánico.",
        "presentations": [
            {
                "key": "360cc",
                "label": "Frasco 360cc",
                "price": 8900
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-coco-neutro-vorganico-1000cc",
        "name": "Aceite Coco Neutro (V. Orgánico) 1000cc Vegano Sin TACC",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Envase económico de 1 Litro para repostería y cocina familiar.",
        "presentations": [
            {
                "key": "1000cc",
                "label": "Frasco 1000cc",
                "price": 17990
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-oliva-dolivo-500ml",
        "name": "Aceite de Oliva Extra Virgen (D'Olivo) 500ml - Vidrio",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Oliva extra virgen mendocino de acidez menor a 0.5% en botella de vidrio oscuro.",
        "presentations": [
            {
                "key": "500ml",
                "label": "Botella Vidrio 500ml",
                "price": 15900
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-oliva-el-federal-250cc",
        "name": "Aceite de Oliva 250cc \"El Federal\" - Vidrio",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Aceite de oliva clásico El Federal en práctica botella de vidrio.",
        "presentations": [
            {
                "key": "250cc",
                "label": "Botella Vidrio 250cc",
                "price": 8500
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-oliva-el-federal-500cc",
        "name": "Aceite de Oliva 500cc \"El Federal\" - Vidrio",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "El Federal botella de vidrio de 500cc, sabor suave y equilibrado.",
        "presentations": [
            {
                "key": "500cc",
                "label": "Botella Vidrio 500cc",
                "price": 14500
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-oliva-el-federal-1000cc",
        "name": "Aceite de Oliva 1000cc \"El Federal\" - Plástico",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "1 Litro de aceite de oliva en botella pet económica.",
        "presentations": [
            {
                "key": "1000cc",
                "label": "Botella 1000cc",
                "price": 24500
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-oliva-sujena-500ml",
        "name": "Aceite de Oliva Extra Virgen (Sujena) 500ml - Vidrio",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Oliva extra virgen Sujena de primera prensada en frío.",
        "presentations": [
            {
                "key": "500ml",
                "label": "Botella Vidrio 500ml",
                "price": 11000
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-oliva-sujena-1000ml",
        "name": "Aceite de Oliva Extra Virgen (Sujena) 1000ml - Vidrio",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "1 Litro en botella de vidrio de aceite de oliva extra virgen Sujena.",
        "presentations": [
            {
                "key": "1000ml",
                "label": "Botella Vidrio 1000ml",
                "price": 17500
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-oliva-cruz-eje-250cc",
        "name": "Aceite Oliva Extra Virgen \"Finca Cruz del Eje\" 250cc - Vidrio",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Oliva cordobés de Cruz del Eje, frutado medio con notas herbáceas.",
        "presentations": [
            {
                "key": "250cc",
                "label": "Botella Vidrio 250cc",
                "price": 9000
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-oliva-cruz-eje-500cc",
        "name": "Aceite Oliva Extra Virgen \"Finca Cruz del Eje\" 500cc - Vidrio",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "Finca Cruz del Eje 500cc en botella de vidrio.",
        "presentations": [
            {
                "key": "500cc",
                "label": "Botella Vidrio 500cc",
                "price": 15500
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-oliva-cruz-eje-1000cc",
        "name": "Aceite Oliva Extra Virgen \"Finca Cruz del Eje\" 1000cc - Plástico",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "description": "1 Litro pet de aceite de oliva extra virgen Finca Cruz del Eje.",
        "presentations": [
            {
                "key": "1000cc",
                "label": "Botella 1000cc",
                "price": 25900
            }
        ],
        "inStock": true
    },
    {
        "id": "ace-oliva-jachal-2l",
        "name": "Aceite Oliva Extra Virgen (Olivares del Río Jáchal) 2 Litros",
        "category": "envasados-aceites",
        "categoryName": "Aceites & Envasados",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Bidón familiar de 2 Litros de oliva sanjuanino extra virgen, excelente rendimiento.",
        "presentations": [
            {
                "key": "2L",
                "label": "Bidón 2 Litros",
                "price": 16590
            }
        ],
        "inStock": true
    },
    {
        "id": "sup-maca-blanca-kallpa",
        "name": "Maca Blanca Kallpa Origen Peruano - 500g",
        "category": "suplementos",
        "categoryName": "Suplementos Naturales",
        "isSinTacc": true,
        "description": "Raíz andina peruana en polvo, energizante y adaptógeno milenario.",
        "presentations": [
            {
                "key": "500g",
                "label": "Envase 500g",
                "price": 2700
            }
        ],
        "inStock": true
    },
    {
        "id": "sup-maca-negra-kallpa",
        "name": "Maca Negra Origen Peruano - 150g",
        "category": "suplementos",
        "categoryName": "Suplementos Naturales",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Maca negra seleccionada, potente vigorizante físico, mental y hormonal.",
        "presentations": [
            {
                "key": "150g",
                "label": "Envase 150g",
                "price": 2400
            }
        ],
        "inStock": true
    },
    {
        "id": "sup-maca-roja",
        "name": "Maca Roja en Polvo - 90g",
        "category": "suplementos",
        "categoryName": "Suplementos Naturales",
        "isSinTacc": true,
        "description": "Maca roja andina, ideal para la salud ósea y bienestar hormonal femenino y masculino.",
        "presentations": [
            {
                "key": "90g",
                "label": "Pote 90g",
                "price": 990
            }
        ],
        "inStock": true
    },
    {
        "id": "sup-flor-jamaica",
        "name": "Flor de Jamaica en Polvo - 120g",
        "category": "suplementos",
        "categoryName": "Suplementos Naturales",
        "isSinTacc": true,
        "description": "Polvo puro de cálices de hibiscus, listo para disolver en agua fría o batidos.",
        "presentations": [
            {
                "key": "120g",
                "label": "Pote 120g",
                "price": 990
            }
        ],
        "inStock": true
    },
    {
        "id": "sup-colageno",
        "name": "Colágeno Hidrolizado Puro en Polvo - 90g",
        "category": "suplementos",
        "categoryName": "Suplementos Naturales",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Péptidos de colágeno bioactivo para articulaciones, elasticidad de piel y cabello.",
        "presentations": [
            {
                "key": "90g",
                "label": "Pote 90g",
                "price": 990
            }
        ],
        "inStock": true
    },
    {
        "id": "sup-graviola",
        "name": "Graviola en Polvo - 90g",
        "category": "suplementos",
        "categoryName": "Suplementos Naturales",
        "isSinTacc": true,
        "description": "Hojas de guanábana micronizadas con reconocidas propiedades antioxidantes.",
        "presentations": [
            {
                "key": "90g",
                "label": "Pote 90g",
                "price": 990
            }
        ],
        "inStock": true
    },
    {
        "id": "sup-cartilago-tiburon",
        "name": "Cartílago de Tiburón en Polvo - 90g",
        "category": "suplementos",
        "categoryName": "Suplementos Naturales",
        "isSinTacc": true,
        "description": "Fuente natural de sulfato de condroitina y glucosamina para flexibilidad articular.",
        "presentations": [
            {
                "key": "90g",
                "label": "Pote 90g",
                "price": 990
            }
        ],
        "inStock": true
    },
    {
        "id": "sup-calcio",
        "name": "Calcio Orgánico en Polvo - 90g",
        "category": "suplementos",
        "categoryName": "Suplementos Naturales",
        "isSinTacc": true,
        "description": "Suplemento mineral de fácil asimilación para densidad ósea y dental.",
        "presentations": [
            {
                "key": "90g",
                "label": "Pote 90g",
                "price": 990
            }
        ],
        "inStock": true
    },
    {
        "id": "sup-harina-coca",
        "name": "Harina de Coca - 90g",
        "category": "suplementos",
        "categoryName": "Suplementos Naturales",
        "isSinTacc": true,
        "description": "Harina ceremonial andina de hoja de coca, energizante y oxigenante natural.",
        "presentations": [
            {
                "key": "90g",
                "label": "Pote 90g",
                "price": 990
            }
        ],
        "inStock": true
    },
    {
        "id": "sup-moringa",
        "name": "Moringa Oleífera en Polvo - 90g",
        "category": "suplementos",
        "categoryName": "Suplementos Naturales",
        "isSinTacc": true,
        "description": "El árbol de la vida: superalimento con vitaminas, hierro y aminoácidos esenciales.",
        "presentations": [
            {
                "key": "90g",
                "label": "Pote 90g",
                "price": 990
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-granola-miel",
        "name": "Granola Tradicional con Miel",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": false,
        "isFeatured": true,
        "description": "Avena arrollada horneada con miel pura, semillas de girasol y frutos secos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 4890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2890
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1690
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-granola-orann",
        "name": "Granola Orann Mix Energético - 1 Kg",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": false,
        "description": "Granola gourmet Orann con mix de frutos secos y semillas crocantes.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9960
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-barritas-orann",
        "name": "Barritas Orann de Mix Energético",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": false,
        "description": "Pack de barritas nutritivas de cereal y frutos secos para llevar en la mochila.",
        "presentations": [
            {
                "key": "1kg",
                "label": "Pack / 1 Kg",
                "price": 12890
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-azucar-impalpable",
        "name": "Azúcar Impalpable",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "Azúcar glas refinada para glaseados, cremas y decoración en repostería.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 4590
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2630
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1590
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-azucar-mascabo",
        "name": "Azúcar Mascabo Pura",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "Azúcar integral no refinada de caña, con melaza natural y minerales.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 6690
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3890
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2410
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-avena-opciones",
        "name": "Avena (Instantánea / Arrollada Gruesa / Tradicional)",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": false,
        "options": [
            "Instantánea",
            "Arrollada Gruesa",
            "Tradicional"
        ],
        "description": "Copos de avena seleccionada en sus tres versiones para gachas, porridge o panes.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 3990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2330
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1450
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-sal-himalaya",
        "name": "Sal Rosa del Himalaya (Fina / Gruesa)",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "options": [
            "Fina",
            "Gruesa"
        ],
        "description": "Sal fósil cristalina no refinada con más de 84 oligoelementos naturales.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 4590
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2630
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1590
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-sal-marina-sintacc",
        "name": "Sal Marina Fina / Gruesa - Sin TACC",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "options": [
            "Fina",
            "Gruesa"
        ],
        "description": "Sal obtenida por evaporación solar natural de agua de mar, libre de gluten.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 2630
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 1590
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-bicarbonato-sodio-mayana",
        "name": "Bicarbonato de Sodio Mayana - Sin TACC",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "Bicarbonato grado alimentario puro para leudado de masas y cocina.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 6990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 3990
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 2490
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-polvo-hornear-mayana",
        "name": "Polvo para Hornear Mayana - Sin TACC",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "Leudante químico certificado sin gluten para bizcochuelos y budines perfectos.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 9960
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5690
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3650
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-coco-rallado-premium",
        "name": "Coco Rallado Premium",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "Coco rallado aromático y fresco de alto tenor graso natural.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 12890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 7390
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4510
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-coco-escamas",
        "name": "Coco en Escamas Grandes",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "Láminas crocantes de coco seco para toppings de bowls, yogures y granolas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 21490
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 11880
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 7190
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-datil-egipto",
        "name": "Dátil Egipto Premium Con Carozo",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "Dátiles egipcios dulces y carnosos para endulzar postres naturales.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 8990
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 5190
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 3180
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-datil-deglet",
        "name": "Dátil Deglet Nour de Argelia Con Carozo",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "La reina de los dátiles: color ámbar translúcido y suave sabor a miel.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 11790
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6850
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4170
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-datil-medjool",
        "name": "Dátil Medjool de Israel Gigante Con Carozo",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "El dátil rey: calibre gigante, textura tierna parecida al toffee y dulzura suprema.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 28590
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 15130
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 8690
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-papaya-cubos",
        "name": "Papaya en Cubos Confitada",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "Trozos dulces de papaya desecada tropical.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 12390
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 6990
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4290
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-maiz-frito-espana",
        "name": "Maíz Frito Original España (Quicos)",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": false,
        "description": "Granos gigantes de maíz tostado frito salado ultra crujientes.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 13890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 7790
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4740
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-maiz-frito-miel-mostaza",
        "name": "Maíz Frito Sabor Miel y Mostaza",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": false,
        "description": "Quicos crujientes saborizados con irresistible miel y mostaza suave.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 13890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 7790
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4740
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-maiz-frito-barbacoa",
        "name": "Maíz Frito Sabor Barbacoa",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": false,
        "description": "Quicos españoles sazonados con auténtico condimento barbacoa ahumado.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 13890
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 7790
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 4740
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-hongos-pino",
        "name": "Hongos de Pino Deshidratados",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "Setas secas de pino patagónico de intenso sabor umami para risottos y pastas.",
        "presentations": [
            {
                "key": "1kg",
                "label": "1 Kg",
                "price": 40750
            },
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 23550
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 13970
            }
        ],
        "inStock": true
    },
    {
        "id": "alm-gelatina-sin-sabor-mayana",
        "name": "Gelatina Sin Sabor Mayana (Sin TACC / Sin Gluten)",
        "category": "granolas-almacen",
        "categoryName": "Granolas & Almacén",
        "isSinTacc": true,
        "description": "Gelatina pura sin sabor libre de gluten para postres, mousses y gomitas caseras.",
        "presentations": [
            {
                "key": "500g",
                "label": "1/2 Kg",
                "price": 19240
            },
            {
                "key": "250g",
                "label": "1/4 Kg",
                "price": 11810
            },
            {
                "key": "100g",
                "label": "100 g",
                "price": 5000
            },
            {
                "key": "50g",
                "label": "50 g",
                "price": 3500
            }
        ],
        "inStock": true
    },
    {
        "id": "yer-roapipo-500g",
        "name": "Yerba Roapipó Suave / Tradicional Orgánica - 500g",
        "category": "yerbas",
        "categoryName": "Yerbas Orgánicas & Sin TACC",
        "isSinTacc": true,
        "options": [
            "Suave",
            "Tradicional"
        ],
        "description": "Yerba mate misionera agroecológica certificada con estacionamiento natural.",
        "presentations": [
            {
                "key": "500g",
                "label": "Paquete 500g",
                "price": 5900
            }
        ],
        "inStock": true
    },
    {
        "id": "yer-kalena-con-palo-500g",
        "name": "Yerba Kalena Libre de Gluten Con Palo (Sin TACC) - 500g",
        "category": "yerbas",
        "categoryName": "Yerbas Orgánicas & Sin TACC",
        "isSinTacc": true,
        "isFeatured": true,
        "description": "Yerba mate secada a barbacuá artesanal, libre de gluten con palo.",
        "presentations": [
            {
                "key": "500g",
                "label": "Paquete 500g",
                "price": 5900
            }
        ],
        "inStock": true
    },
    {
        "id": "yer-kalena-despalada-500g",
        "name": "Yerba Kalena Libre de Gluten Despalada (Sin TACC) - 500g",
        "category": "yerbas",
        "categoryName": "Yerbas Orgánicas & Sin TACC",
        "isSinTacc": true,
        "description": "Yerba mate pura hoja despalada barbacuá, mayor intensidad de mate.",
        "presentations": [
            {
                "key": "500g",
                "label": "Paquete 500g",
                "price": 6700
            }
        ],
        "inStock": true
    },
    {
        "id": "yer-kalena-con-palo-2kilos",
        "name": "Yerba Kalena Libre de Gluten Con Palo (Sin TACC) - 2 Kilos",
        "category": "yerbas",
        "categoryName": "Yerbas Orgánicas & Sin TACC",
        "isSinTacc": true,
        "description": "Bolsa económica familiar de 2 Kilos de yerba barbacuá con palo.",
        "presentations": [
            {
                "key": "2kg",
                "label": "Bolsa 2 Kilos",
                "price": 18600
            }
        ],
        "inStock": true
    },
    {
        "id": "yer-kalena-despalada-2kilos",
        "name": "Yerba Kalena Libre de Gluten Despalada (Sin TACC) - 2 Kilos",
        "category": "yerbas",
        "categoryName": "Yerbas Orgánicas & Sin TACC",
        "isSinTacc": true,
        "description": "Bolsa económica de 2 Kilos de yerba pura hoja despalada sin gluten.",
        "presentations": [
            {
                "key": "2kg",
                "label": "Bolsa 2 Kilos",
                "price": 20900
            }
        ],
        "inStock": true
    }
];
