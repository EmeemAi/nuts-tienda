# 🌿 FRUTOS SECOS MI TIENDA • Tienda Online & Catálogo WebApp

Tienda webapp interactiva desarrollada a medida para **FRUTOS SECOS MI TIENDA**, con el catálogo completo extraído de sus listas oficiales de precios (+190 productos), condiciones comerciales y estética visual personalizada (Terracota, Salmón y Verde Oliva).

---

## ✨ Características Principales

- **🎨 Identidad de Marca Propia**:
  - Paleta terracota (`#cb6d51`), salmón tostado, arena cálida y verde oliva.
  - Logotipo oficial vectorial SVG con motivo botánico.
  - Diseño responsive Mobile-First adaptable a celulares, tablets y computadoras.

- **📦 Catálogo Completo (+190 Productos)**:
  - Frutos Secos (Nueces Mariposa XL, Almendras Guara y Non Pareil, Castañas de Cajú, Pistachos con cáscara y pelados, Avellanas, Maníes).
  - Frutos Deshidratados (Ciruelas D'Agen bombón, Arándanos, Tomates secos 2026, Higos negros, Peras, Chips de banana).
  - Nuestros Mixs (Mix 4 Semillas, Económico, Desayuno, Pan Dulce, Antioxidante, Salado, Tropical, Sin Pasas, Clásico, Energy, Premium).
  - Confituras & Chocolates (Confituras Argenfrut y Colonial, Coberturas, Cacao amargo, Chips de chocolate, Tabletas orgánicas 80% y 70%, opciones Sin Azúcar y Stevia).
  - Cereales & Almohaditas (Copos de maíz, Quínoa pop, Almohaditas rellenas de frutilla, avellana, limón y doble chocolate).
  - Harinas & Féculas (Harina de almendras con y sin piel, coco, pistacho, garbanzo, avena).
  - Semillas Seleccionadas (Chía primera calidad, zapallo, girasol pelado, sésamo integral/blanco/negro, lino).
  - Legumbres & Granos (Garbanzos 8mm, lentejas n°5, porotos alubia y negro, soja texturizada, arroz yamaní).
  - Condimentos & Hierbas (Infusiones digestivas, sen, amargón, cola de caballo, cedrón, boldo, hibiscus, manzanilla flor premium, pimentones, ajo, orégano).
  - Congelados IQF & Alimentos Mundo Vegetal Sin TACC (Frutillas, arándanos, mix frutos rojos, medallones vegetales, milanesas, falafels, prepizzas, bastoncitos de mung).
  - Untables, Miel & Pastas (Mieles Bioway Kosher, Elena multifloral, Entrenuts, pastas de maní variadas, mermeladas Fito Plus).
  - Aceites & Envasados (Aceites de coco neutro y virgen, aceites de oliva extra virgen D'Olivo, El Federal, Sujena, Finca Cruz del Eje, bidón 2L Jáchal).
  - Suplementos Naturales (Maca blanca y negra peruana, colágeno hidrolizado, graviola, moringa, harina de coca, cartílago de tiburón).
  - Yerbas Orgánicas & Sin TACC (Kalena tradicional y despalada en 500g y 2Kg, Roapipó orgánica).

- **⚖️ Selector Dinámico de Presentaciones y Pesos**:
  - Escala 1 Kg / 1/2 Kg (500g) / 1/4 Kg (250g) para frutos secos, deshidratados, harinas, semillas, legumbres, etc.
  - Escala 1/2 Kg / 1/4 Kg / 100g / 50g para condimentos y hierbas.
  - Escala 1 Kg / 1/2 Kg / 1/4 Kg / 100g para confituras.
  - Unidades y packs para aceites, mieles, chocolates y congelados Mundo Vegetal.

- **🚚 Condiciones Comerciales Automatizadas**:
  - **Envío Gratis en CABA:** Desde **$50.000** con barra de progreso dinámica.
  - **5% de Descuento en Efectivo:** Automático superando los **$60.000**.
  - **Envíos a GBA:** Selector de zona con advertencia para cotización de flete según localidad.

- **💬 Checkout a WhatsApp & Comprobante Imprimible**:
  - Generación de mensaje ordenado con viñetas, cantidades, subtotal, descuento en efectivo, datos del cliente y cálculo de vuelto.
  - Modal de ticket térmico / comprobante con opción de impresión directa o guardado en PDF.

---

## 🚀 Cómo Ejecutar Localmente

### Opción 1: En Windows
Hacé doble clic sobre `iniciar_tienda.bat`. Se abrirá automáticamente en tu navegador en [http://localhost:8081](http://localhost:8081).

### Opción 2: Con Python
```bash
python -m http.server 8081
```
Luego abrí `http://localhost:8081` en tu navegador.

### Opción 3: Directo
Abrir el archivo `index.html` en Google Chrome, Edge o Firefox.

---

## 📁 Estructura del Proyecto

```
frutos-secos-mi-tienda/
├── index.html                  # Estructura principal y componentes UI
├── iniciar_tienda.bat          # Acceso directo para ejecutar en Windows
├── README.md                   # Documentación técnica y manual de uso
├── css/
│   └── styles.css              # Variables de color terracota/oliva y estilos
├── js/
│   ├── data.js                 # Catálogo oficial (+190 productos) y configuración
│   └── app.js                  # Lógica reactiva de catálogo, carrito y WhatsApp
└── assets/
    ├── logo.svg                # Logotipo vectorial oficial
    ├── favicon.svg             # Favicon para el navegador
    └── listas-originales/      # Las 7 imágenes originales de lista de precios
```

---

© 2026 FRUTOS SECOS MI TIENDA • Catálogo WebApp Oficial.
