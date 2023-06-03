#TPO Grupo 8 -- Codo a Codo
![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20CORRECCION-green) ![Badge en Desarollo](https://img.shields.io/badge/LICENSE-MIT-green)

## :book:Descripción general
Este README proporciona una descripción detallada de las funcionalidades y características del sitio web desarrollado como parte del proyecto "Proyecto web: HTML, CSS y Javascript" del curso Full Stack Python del programa Codo a Codo en el año 2023.
El sitio web fue construido siguendo el estilo "one page" y esta compuesto por 4 secciones. Tiene capacidad de adaptacion para diferentes tamaños de dispositivos. Fue diseñado utilizando HTML, CSS y Javascript.

##:hammer: Estructura proyecto
El proyecto se organiza de la siguiente manera:

- `index.html`: El archivo principal que contiene la estructura del sitio web en lenguaje HTML utilizando etiquetas semánticas adecuadas.
- `index.css`: El archivo de hojas de estilo CSS que se encarga de la apariencia y el diseño de cada seccion del sitio web.
- `btns.css`: Archivo de hojas de estilo que se encarga de la apariencia de los botones.
- `waves.css`: Archivo de hojas de estilo que da formato a las ondas utilizadas como estilo de fondo en el diseño del sitio.

##:rocket:Funcionalidades
Las funcionalidades se proporcionan mediante los siguentes archivos JavaScript:
- `events.js`: gestiona las interacciones del usuario, que incluye las siguentes funciones: 
    - cambiarTexto(nuevoTexto): modifica el texto dentro de un boton cuando el usuario pasa el mouse sobre el mimso.
    - window.addEventListener("scroll", function (): agrega un event listener al objeto window para detectar el evento de desplazamiento (scroll). Cada vez que el usuario desplaza la página, se ejecuta la función especificada como el segundo parámetro del addEventListener. Dentro de la función, se realizan varias operaciones para verificar si se ha alcanzado una determinada posición de desplazamiento en la página y, en consecuencia, se añade una clase CSS a un elemento.
    - link.addEventListener("click", function (event): permite realizar un desplazamiento suave hacia diferentes secciones del sitio web al hacer clic en los enlaces del menú de navegación. Al hacer clic en un enlace, se obtiene el destino al que se debe desplazar, se selecciona el elemento de destino y se realiza el desplazamiento suave utilizando scrollIntoView.
- `cuestionario.js`: El archivo JavaScript que contiene la lógica para desplegar y evaluar un cuestionario de tres preguntas de tipo booleanas extraidas de la API de `https://opentdb.com/`, ademas utiliza la API de traducción `api.mymemory.translated.net` para mostrar las preguntas traducidas al español. El proceso se realiza llamando a las siguentes funciones:
    - function iniciarCuestionario() : despliega el cuestionario en el sitio web al obtener las preguntas del API, traducirlas y mostrar el cuestionario mientras oculta el resultado previo del mismo.
    - function traducirTexto(texto): la función traduce el texto proporcionado del inglés al español utilizando la API de MyMemory Translation, maneja posibles errores y devuelve el texto traducido o un mensaje de advertencia en caso de límite de uso de la API.
    - function mostrarMensajeLimite(warningMessage): analiza un mensaje de advertencia y muestra el tiempo restante hasta la próxima pregunta disponible si el formato es válido, o devuelve un mensaje de error si el formato es incorrecto.
    - function traducirPreguntas(preguntas): la función traduce un array de preguntas utilizando la función traducirTexto, agrega una propiedad "traducida" a cada pregunta y luego muestra las preguntas traducidas utilizando la función mostrarPreguntas. Si hay errores en el proceso, se manejan adecuadamente y se muestra un mensaje de error en la consola.
    - function mostrarPreguntas(preguntas): esta función genera y muestra en el documento HTML el conjunto de preguntas, cada una con su enunciado traducido, campo de respuesta y atributo que almacena la respuesta correcta.
    - function calificarRespuestas(): la función verifica y cuenta las respuestas correctas ingresadas por el usuario en un cuestionario, y luego muestra un resultado dependiendo de si todas las respuestas son correctas o no.
    - function mostrarResultado(correcto): configura y muestra el resultado del cuestionario al usuario, modificando elementos del documento HTML y mostrando una imagen, mensaje y código de descuento dependiendo de si todas las respuestas son correctas o no.
    - function generarCodigoDescuento(): genera un código de descuento aleatorio de 5 dígitos y lo devuelve.
- `showElements.js`: se encarga de leer un archivo JSON de la carta de pizzas y crear elementos en el DOM para mostrar los productos en la sección "carta".
- `sendEmail.js`:  valida y envía los mensajes del formulario de contacto mediante el esquema de URL "mailto".
- `cuestionario_2.js`: utiliza el framework Vue.js para reemplazar las preguntas del cuestionario por otras mas específicas de programación traidas de las API de https://quizapi.io. A diferencia de las anteriores, estas preguntas son de tipo multriple choice. Ademas hemos modificado el codigo del HTML para pode rincorporar este tipo de preguntas. Actualmente, el diseño de esta sección aún está en proceso de adaptación.

##:heavy_check_mark: Recursos adicionales
- Animaciones de https://michalsnik.github.io/aos/
- iframe de https://www.maps.ie/create-google-map/
- Tipografías de https://fonts.google.com/

## :woman::man::man::man:Integrantes del grupo:
- Yanina Tiribelli
- Miguel Angel Estrada Rivera 
- Franco Bernedo
- Luciano Anselmino
