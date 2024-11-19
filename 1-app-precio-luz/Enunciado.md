## Precio de la Luz

**Título: Aplicación Web de Visualización de Precios de la Luz**

**Objetivo**: Desarrollar una aplicación web que permita consultar, filtrar y visualizar los precios de la luz en España. Se deben cargar los precios desde una API pública y mostrar los datos de manera interactiva a través de un selector de franja horaria, una tabla de precios y un gráfico.

#### Instrucciones Detalladas:

1. **Estructura del Proyecto**:
   - Utiliza Vite para gestionar y servir la aplicación.
   - Divide el código en componentes modulares, cada uno con su propia funcionalidad y estilo (HTML, CSS, y JavaScript).

2. **Requisitos Funcionales**:
   - **Carga de Precios de la Luz**:
     - Al cargar la página, el usuario debe ver un botón para **"Cargar Precios de la Luz"**.
     - Al hacer clic en el botón, la aplicación debe llamar a la **API de Red Eléctrica Española (REE)** para obtener los precios de la luz del mes de enero de 2024.
   - **Filtrado por Franja Horaria**:
     - Debe existir un desplegable (selector) con franjas horarias que se leerán de una variable `.env` del proyecto.
     - Las opciones de franjas horarias se deben cargar dinámicamente al iniciar la aplicación.
     - El usuario debe poder seleccionar una franja horaria y la aplicación debe filtrar los precios correspondientes a la selección.
   - **Visualización de Precios**:
     - Los precios filtrados deben mostrarse en una serie de tarjetas, cada una con la hora y el precio.
     - Debe existir un gráfico que represente los precios según la franja horaria seleccionada.
   - **Spinner de Carga**:
     - Al realizar una petición a la API, debe mostrarse un spinner que indique que los datos están cargando.

3. **Componentes**:
   - **Botón de Carga** (`LoadButton`): Un botón que permite al usuario cargar los precios de la luz.
   - **Selector de Franja Horaria** (`HourRangeSelect`): Un desplegable que permite seleccionar la franja horaria deseada.
   - **Spinner** (`Spinner`): Un elemento que se muestra mientras se cargan los datos de la API.
   - **Tarjeta de Precio** (`PriceCard`): Un componente que muestra la hora y el precio de la luz.

4. **Requisitos Técnicos**:
   - Utiliza **JavaScript ES Modules** para crear los componentes.
   - Asegúrate de seguir buenas prácticas como la separación de responsabilidades.
   - Utiliza **Chart.js** para representar gráficamente los datos de los precios.
   - Los estilos de cada componente deben mantenerse en archivos CSS independientes.

5. **Estilos**:
   - Estiliza las tarjetas de precios (`PriceCard`) para que tengan un borde y un sombreado suave.
   - El spinner debe estar centrado y ser visible mientras se carga la información.

6. **Configuración del Proyecto**:
   - Define las franjas horarias en un archivo `.env` usando la clave `VITE_HOUR_RANGES`:
     ```env
     VITE_HOUR_RANGES=0-6,6-12,12-18,18-24
     ```
   - Usa `import.meta.env` de Vite para leer la variable de entorno y cargar las opciones de franjas horarias.

7. **Entrega**:
   - El alumno debe entregar todo el código, incluidos los componentes y sus respectivos archivos de estilo.
   - La entrega debe incluir instrucciones sobre cómo ejecutar el proyecto usando Vite y cómo instalar las dependencias necesarias (`npm install`).

8. **Evaluación**:
   - Se evaluará la correcta **división en componentes**.
   - Se valorará la **correcta lectura de la API** y el **funcionamiento del filtro de franjas horarias**.
   - Se verificará la **usabilidad** y **funcionamiento del spinner**.
   - Se revisará la calidad del **código y los estilos** aplicados.

