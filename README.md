# 🥜 NUTS • Tienda Online & Catálogo WebApp

Tienda webapp interactiva desarrollada a medida para **Dietética NUTS (@nuts.food.ba)**. Permite a los clientes explorar el catálogo completo de productos, seleccionar pesos o variantes, armar su carrito y enviar el pedido automáticamente formateado por WhatsApp a la tienda.

---

## ✨ Características Principales

- **📱 Diseño Mobile-First & PWA**: Carga ultrarrápida en cualquier celular, optimizada para compartir por WhatsApp e historias de Instagram.
- **🥜 Catálogo Completo (+80 productos)**:
  - Combos Especiales del Mes con desglose de ítems.
  - Frutos secos seleccionados.
  - Harinas, féculas y semillas.
  - Legumbres, granos y cereales.
  - Granolas caseras (Homemade) y snacks saludables.
  - Suplementos y despensa natural.
- **⚖️ Selector Dinámico de Peso (1 Kg vs 500 g)**: Actualización de precio en tiempo real con un solo toque.
- **🌾 Filtro Rápido Sin TACC**: Acceso directo para clientes celíacos o que buscan productos libres de gluten.
- **🛒 Carrito Reactivo**: Cálculo automático de subtotales, totales y aviso de entrega sin cargo.
- **💬 Checkout a WhatsApp**: Genera un mensaje detallado con viñetas, cantidades, dirección y método de pago (con cálculo de vuelto para efectivo) directo al WhatsApp oficial de la tienda (`11 5131-5757`).
- **⚙️ Panel de Administración Local**: Acceso con PIN para modificar precios, pausar stock o cambiar datos de contacto sin editar código.

---

## 🚀 Cómo Ejecutar Localmente

### Opción 1: Con Python (Recomendado)
1. Clonar o descargar el repositorio.
2. Hacer doble clic en `iniciar_tienda.bat` (en Windows) o ejecutar:
   ```bash
   python -m http.server 8080
   ```
3. Abrir en el navegador: [http://localhost:8080](http://localhost:8080)

### Opción 2: Directo en el navegador
Abrir el archivo `index.html` en cualquier navegador web moderno.

---

## 📄 Estructura del Proyecto

```
├── index.html              # Estructura principal de la aplicación
├── css/
│   └── styles.css          # Estilos y variables de diseño de marca NUTS
├── js/
│   ├── data.js             # Base de datos con los +80 productos de los flyers
│   ├── app.js              # Lógica reactiva del carrito, buscador y WhatsApp
│   └── admin.js            # Panel de control de precios y stock
├── assets/
│   ├── logo.svg            # Logotipo oficial vectorial de NUTS
│   ├── favicon.svg         # Icono para navegador y móviles
│   └── flyers/             # Menús y flyers originales en alta resolución
├── manifest.json           # Manifiesto PWA para instalación móvil
└── sw.js                   # Service Worker para funcionamiento offline
```

---

© 2026 NUTS • Desarrollado para potenciar las ventas y autogestión de Dietética NUTS.
