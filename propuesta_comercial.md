# 🥜 Propuesta Comercial: Tienda WebApp para Dietética NUTS (@nuts.food.ba)

Este documento fue diseñado para que tengas **todos los argumentos de venta, guiones de mensajes de WhatsApp y opciones de comercialización** para ofrecerle esta tienda web a los dueños de NUTS y cerrar el trato rápidamente.

---

## 1. El Diagnóstico: El dolor actual de NUTS

Actualmente NUTS trabaja con **flyers de imagen (JPEGs) por WhatsApp e Instagram**:
- ❌ **Fricción para el cliente**: El cliente tiene que hacer zoom en la imagen del celular, buscar los precios pequeños, anotar en un papel o tipear ítem por ítem en el chat.
- ❌ **Pérdida de tiempo para el dueño**: Responder una y otra vez *"¿Cuánto sale el 1/2 kg de almendras?"*, *"¿Tenés stock de nueces?"*, *"¿Qué trae el Combo 2?"*. Esto consume entre **2 y 3 horas diarias** solo atendiendo mensajes repetitivos.
- ❌ **Errores de pedidos**: Mensajes confusos como *"Mandame medio de cajú y una de chía"* donde después no queda claro si era tostado, natural, la dirección exacta o con cuánto abonaban.
- ❌ **Dificultad para actualizar precios**: Si aumenta el precio de 3 productos, tienen que rediseñar un flyer entero o enviar listas desactualizadas con tachaduras.

---

## 2. La Solución: La Tienda WebApp NUTS

La WebApp que hemos desarrollado resuelve el 100% de estos problemas desde el primer día:

1. **Catálogo interactivo con su propia identidad de marca**:
   - Mismo logo, colores, tipografía y estilo orgánico de sus flyers.
   - Más de 80 productos cargados y clasificados por categoría.
2. **Selector dinámico de peso (1 Kg / 500 g)**:
   - El cliente toca `[ 500 g ]` o `[ 1 Kg ]` y ve el precio cambiar al instante.
3. **Filtro rápido "🌾 Solo Sin TACC"**:
   - Ideal para su clientela celíaca o intolerante al gluten, destacando uno de sus mayores fuertes comerciales.
4. **Combos visuales con desglose completo**:
   - El cliente ve exactamente qué contiene el Combo 1, 2, 3 y 4, incentivando la compra de mayor volumen.
5. **Checkout directo a su WhatsApp (`11 5131-5757`)**:
   - El pedido le llega al dueño **perfectamente redactado**, con viñetas, nombres, cantidades, dirección de entrega, método de pago y si necesita vuelto.
6. **Panel de control para el dueño (sin tocar código)**:
   - Presionando `Shift + Alt + A` o desde el pie de página, el dueño puede cambiar cualquier precio o pausar productos sin stock en 5 segundos desde su celular o PC.
7. **PWA (Instalable como App)**:
   - Los clientes frecuentes pueden agregar el icono de NUTS a la pantalla de su celular.

---

## 3. Guiones de Contacto para Ofrecerles el Servicio

### Opción A: Mensaje por WhatsApp (Directo y con Demo)
> "¡Hola chicos de NUTS! 👋 ¿Cómo están?
> Soy seguidor de la dietética y me encanta la calidad de productos que tienen.
>
> Noté que comparten sus listas de precios en flyers por WhatsApp e historias de Instagram. Como trabajo desarrollando herramientas para comercios, me tomé la libertad de armarles una **Tienda WebApp interactiva** exclusiva con su logo, sus combos y todos sus productos para que vean cómo podrían vender el doble y ahorrarse horas respondiendo listas de precios.
>
> Miren la demo acá: 👉 [ENLACE_DE_LA_WEB]
>
> El cliente entra desde el celular, elige si quiere 500g o 1kg, arma su carrito y les manda el pedido armado por WhatsApp con un solo clic. Además tienen un panel para cambiar precios cuando quieran.
>
> ¿Tienen 5 minutos hoy o mañana para que les muestre cómo activarla para sus clientes? ¡Un abrazo!"

---

### Opción B: Mensaje para Instagram DM (@nuts.food.ba)
> "¡Buenas! 🥜 Vi las historias con los combos del mes y la verdad están increíbles.
>
> Les armé una sorpresa: una **webapp de compras interactiva** para que sus clientes elijan los productos (con selector de 500g/1kg y filtro Sin TACC) y les hagan el pedido directo por WhatsApp sin que ustedes tengan que pasar listas a mano.
>
> Les dejo la demo para que la prueben desde el celu: [ENLACE_DE_LA_WEB]
> Si les gusta, se las dejo configurada y funcionando esta misma semana. ¡Abrazo!"

---

## 4. Modelos de Precios Sugeridos para Cobrarles

Podés ofrecerles dos alternativas según el perfil de los dueños:

### Modelo 1: Configuración Inicial + Abono Mensual (Recomendado)
- **Implementación y Puesta en Marcha**: **$80.000 a $120.000 ARS** (pago único inicial por entrega, dominio y configuración).
- **Mantenimiento, Hosting y Soporte mensual**: **$20.000 a $30.000 ARS / mes** (incluye hosting en la nube, cambios de precios cuando te los pidan si no quieren usar el panel, y soporte técnico).
- *Argumento*: "Con solo 2 pedidos que sumen al mes gracias a la web, el costo mensual ya se pagó solo".

### Modelo 2: Venta Llave en Mano (Pago Único)
- **Precio llave en mano**: **$150.000 a $220.000 ARS**.
- Les entregás el enlace funcionando alojado en Vercel/Netlify (que tiene plan gratuito de por vida) y les enseñás a usar el botón de Administración.

---

## 5. Cómo Desplegar la WebApp en 2 Minutos (Opciones Gratuitas)

Para enviarles el enlace por WhatsApp, necesitás subir estos archivos a la web. Tenés opciones 100% gratuitas y de alta velocidad:

### Método A: Netlify Drop (El más rápido - 60 segundos)
1. Entrá a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastrá toda la carpeta `Nuts` de tu escritorio a la pantalla del navegador.
3. ¡Listo! Te va a dar un enlace público inmediato tipo `https://nuts-dietetica.netlify.app` que podés compartir en WhatsApp.

### Método B: Vercel CLI o Drag & Drop
1. Creás cuenta gratuita en [vercel.com](https://vercel.com).
2. Arrastrás la carpeta o la vinculás con GitHub.
3. Obtenés un dominio gratuito `nuts.vercel.app` con certificado SSL (candadito verde).

### Método C: GitHub Pages
1. Subir los archivos a un repositorio en GitHub.
2. En Settings -> Pages, seleccionar la rama `main`.
3. Tu web queda en `https://tuusuario.github.io/nuts`.
