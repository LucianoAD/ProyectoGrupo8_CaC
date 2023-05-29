# ProyectoGrupo8_CaC

El siguiente código fue desarrollado como respuesta a la consigna del TPO "Proyecto web: HTML, CSS y Javascript" del curso Full Stack Python del programa Codo a Codo en el año 2023.

Se trata de un sitio web estilo one page compuesto por 4 secciones, todas ellas adaptadas para diferentes tamaños de dispositivos. El contenido está estructurado en lenguaje HTML utilizando etiquetas semánticas adecuadas en el archivo "index.html".

En el encabezado (header) se encuentran los enlaces que se utilizan para cargar recursos externos en la página web, como iconos y fuentes tipográficas.

A continuación, al comienzo de la sección principal (body), se encuentra el menú de navegación, el cual ha sido vinculado con un archivo JavaScript llamado "events.js" para permitir que el/la usuario/a pueda desplazarse automáticamente a diferentes secciones al hacer clic en los elementos del menú.

La sección principal (main) comienza con la sección "banner", que presenta la introducción del negocio e incluye un contenedor que contiene una imagen y un texto animado mediante el uso de keyframes en CSS.

La siguiente sección, denominada "about", proporciona una descripción del objetivo del negocio, acompañada de una imagen. Esta sección se ha dividido en columnas utilizando Bootstrap. Además, se ha incluido un botón que despliega un cuestionario mediante un evento de clic, el cual está conectado a la API del sitio web https://opentdb.com/. Las funciones relacionadas con el cuestionario están escritas en JavaScript y se encuentran en el archivo "cuestionario.js". El cuestionario consta de 3 preguntas de opción verdadero/falso sobre la temática  "computadoras". Para mostrar las preguntas traducidas al español, se utiliza la API de "api.mymemory.translated.net". Además, dado que la cantidad de traducciones por día es limitada,  se ha aprovechado el código de error proporcionado por la API de mymemory para informar al usuario/a cuándo estará disponible un nuevo conjunto de preguntas para obtener descuentos.

Cuando el/la usuario/a ha respondido, un segundo botón, que aparece al desplegar el cuestionario, llama a una función que evalúa si las respuestas suministradas son correctas comparando el valor ingresado con el detallado en el archivo JSON de la API de opentdb. Si el/la usuario/a respondió incorrectamente se despliega una imagen y un mensaje,  si todas las respuestas son correctas además, se genera y muestra  un código de descuento aleatorio de cinco dígitos.

Adicionalmente hemos incluido un segundo código escrito en Vue.js que pretende reemplazar las preguntas del cuestionario por otras más específicas de programación, traídas de la API de la página https://quizapi.io. Estas preguntas son de tipo multiple choice. Hemos logrado traer las preguntas con sus opciones y adaptar el código HTML del cuestionario para mostrarlas, sin embargo, aún resta adaptar el diseño de la sección. 

En la sección "carta", se ha creado un archivo JSON que se lee a través del archivo JavaScript "showElements.js" y se utilizan para crear elementos en el DOM que muestran los productos a los/as usuarios/as.

Por último, se ha creado un formulario de contacto que permite a las personas usuarias enviar mensajes al negocio. Mediante el archivo "sendEmail.js", se valida que la dirección de correo electrónico ingresada sea correcta y, en caso de ser incorrecta, se muestra un mensaje de alerta. Además, el formulario envía un correo electrónico utilizando el esquema de URL "mailto". Al inicio del mismo se incorporó un iframe que incrusta un mapa en el formato de Google Map y permite localizar espacialmente el negocio.

