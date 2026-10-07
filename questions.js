// ==========================================================================
// BANCO EXHAUSTIVO OFICIAL DE PREGUNTAS - DWES UNIDAD 1: ARQUITECTURAS WEB
// Ciclos Formativos: DAW & DAM | 90 Preguntas Extraídas Línea por Línea
// Basado 100% en el documento oficial (20 páginas)
// ==========================================================================

const QUESTIONS_DATA = [
  // ==========================================================================
  // BLOQUE 1: PÁGINAS ESTÁTICAS, DINÁMICAS, SEO, APLICACIONES WEB Y SPA (Pág. 1-8)
  // ==========================================================================
  {
    id: 1,
    level: "basico",
    topic: 1,
    topicName: "Páginas Estáticas vs. Dinámicas",
    page: "Pág. 1-2",
    question: "¿Qué ocurre en el servidor web cuando un cliente solicita una página web estática (.html o .htm)?",
    options: [
      { id: "A", text: "El servidor compila el código HTML a código binario y lo almacena en caché antes de enviarlo.", isCorrect: false },
      { id: "B", text: "El servidor busca la página en su almacén de páginas (habitualmente un archivo), la recupera tal cual está almacenada y la envía al navegador.", isCorrect: true },
      { id: "C", text: "El servidor contacta necesariamente con una base de datos para verificar la integridad del contenido estático.", isCorrect: false },
      { id: "D", text: "El servidor delega la petición a un módulo ejecutor como mod_php para interpretar las etiquetas de estilo.", isCorrect: false }
    ],
    explanation: "En las páginas estáticas, el servidor simplemente busca el archivo en su almacén de archivos (paso 2 del ciclo), lo recupera (paso 3) y lo envía tal cual al navegador (paso 4). No hay procesamiento ni ejecución de código en el servidor.",
    distractors: {
      A: "El HTML no se compila en el servidor; es un lenguaje de marcas interpretado por el navegador.",
      C: "Las páginas estáticas no requieren base de datos en absoluto.",
      D: "mod_php solo interviene con scripts PHP, no con páginas estáticas HTML/CSS."
    },
    trapNote: "Recuerda el esquema de 4 pasos de la página 2: el contenido almacenado en el servidor coincide al 100% con el enviado al cliente."
  },
  {
    id: 2,
    level: "basico",
    topic: 1,
    topicName: "Estructura Web: HTML y CSS",
    page: "Pág. 1",
    question: "En una página web bien estructurada, ¿cuál es la función diferenciada del lenguaje de marcado (HTML/XHTML) y de las hojas de estilo (CSS)?",
    options: [
      { id: "A", text: "HTML ejecuta la lógica de base de datos en el cliente y CSS compila el código a JavaScript.", isCorrect: false },
      { id: "B", text: "HTML/XHTML define el contenido y el objetivo de cada una de sus partes mediante etiquetas; CSS almacena en otro fichero el estilo con que el navegador debe mostrar cada parte.", isCorrect: true },
      { id: "C", text: "HTML se utiliza únicamente para conexiones HTTPS seguras y CSS para peticiones HTTP no cifradas.", isCorrect: false },
      { id: "D", text: "No existe ninguna separación: los estilos CSS deben escribirse obligatoriamente en el servidor Apache dentro de httpd.conf.", isCorrect: false }
    ],
    explanation: "Página 1: 'Este contenido está programado en un lenguaje de marcado, formado por etiquetas, que puede ser HTML o XHTML. Las etiquetas indican el objetivo de cada una de las partes... Además, si la página está bien estructurada, la información que indica el estilo estará almacenado en otro fichero, una hoja de estilos o CSS que el navegador descarga junto a ésta'.",
    distractors: {
      A: "HTML no ejecuta lógica de bases de datos ni CSS compila JavaScript.",
      C: "HTML y CSS son independientes de si la conexión es HTTP o HTTPS.",
      D: "CSS es un archivo que se descarga al cliente web, no una directiva de httpd.conf."
    },
    trapNote: "HTML indica el contenido y objetivo de las partes (encabezados, tablas, párrafos); CSS indica la apariencia y presentación."
  },
  {
    id: 3,
    level: "medio",
    topic: 1,
    topicName: "Reglas de Formato CSS en el PDF",
    page: "Pág. 1-2",
    question: "En la página 2 del temario, ¿qué ejemplos concretos de directivas de estilo se mencionan para ilustrar lo que contiene una hoja de estilos CSS?",
    options: [
      { id: "A", text: "Estilos que configuran la tasa de refresco del monitor a 120Hz y el tamaño del búfer de red.", isCorrect: false },
      { id: "B", text: "Estilos que indican que el encabezado debe ir con tipo de letra Arial y en color rojo, o que los párrafos deben ir alineados a la izquierda.", isCorrect: true },
      { id: "C", text: "Estilos que cifran el tráfico TCP entre el navegador y la base de datos MariaDB.", isCorrect: false },
      { id: "D", text: "Reglas para compilar los servlets de Java EE en código nativo de la GPU.", isCorrect: false }
    ],
    explanation: "Página 2 literal: 'En ella nos podemos encontrar, por ejemplo, estilos que indican que el encabezado debe ir con tipo de letra Arial y en color rojo, o que los párrafos deben ir alineados a la izquierda'.",
    distractors: {
      A: "CSS no controla la tasa de refresco del monitor ni búferes de red.",
      C: "CSS no tiene funciones de cifrado de tráfico TCP.",
      D: "Los servlets se ejecutan en el servidor, no en CSS."
    },
    trapNote: "Pregunta de detalle puro del texto: encabezado con letra Arial y color rojo, párrafos alineados a la izquierda."
  },
  {
    id: 4,
    level: "basico",
    topic: 1,
    topicName: "Ciclo de Petición Estática (4 Pasos)",
    page: "Pág. 2",
    question: "¿Cuál es el orden secuencial exacto de los 4 pasos que se suceden cuando se solicita una página web estática?",
    options: [
      { id: "A", text: "1. El servidor envía HTML -> 2. El cliente compila -> 3. Se crea un proceso CGI -> 4. Se guarda en BD.", isCorrect: false },
      { id: "B", text: "1. Tu ordenador solicita al servidor una página (.htm, .html o .xhtml) -> 2. El servidor busca esa página en su almacén -> 3. Si la encuentra, la recupera -> 4. La envía al navegador para mostrar su contenido.", isCorrect: true },
      { id: "C", text: "1. El navegador ejecuta PHP -> 2. El servidor busca en Apache -> 3. Se genera un archivo .zip -> 4. Se descarga en USB.", isCorrect: false },
      { id: "D", text: "1. El servidor contacta con el cliente -> 2. El cliente envía su base de datos -> 3. Se interpreta CSS -> 4. Fin de conexión.", isCorrect: false }
    ],
    explanation: "Página 2 enumera textualmente los pasos: 1. Tu ordenador solicita a un servidor web una página con extensión .htm, .html o .xhtml. 2. El servidor busca esa página en un almacén de páginas (cada una suele ser un fichero). 3. Si el servidor encuentra esa página, la recupera. 4. Y por último la envía al navegador para que éste pueda mostrar su contenido.",
    distractors: {
      A: "No hay compilación ni CGI en páginas estáticas.",
      C: "El navegador nunca ejecuta PHP.",
      D: "El cliente inicia la petición, no el servidor."
    },
    trapNote: "Fíjate en las extensiones citadas: .htm, .html o .xhtml, y que el almacén de páginas habitualmente es el sistema de ficheros."
  },
  {
    id: 5,
    level: "basico",
    topic: 1,
    topicName: "Roles Cliente-Servidor",
    page: "Pág. 2",
    question: "En una comunicación cliente-servidor web típica, ¿cómo define el temario los roles del cliente y del servidor?",
    options: [
      { id: "A", text: "El servidor siempre inicia la comunicación y el cliente es el que atiende y aloja los archivos.", isCorrect: false },
      { id: "B", text: "El cliente es el que hace la petición e inicia la comunicación, y el servidor es el que recibe la petición y la atiende. El navegador es el cliente web.", isCorrect: true },
      { id: "C", text: "Ambos actúan como servidores simétricos en una red P2P sin clientes.", isCorrect: false },
      { id: "D", text: "El cliente es el sistema operativo del servidor y el navegador es el módulo ejecutor.", isCorrect: false }
    ],
    explanation: "Página 2: 'Este es un ejemplo típico de una comunicación cliente-servidor. El cliente es el que hace la petición e inicia la comunicación, y el servidor es el que recibe la petición y la atiende. El navegador es el cliente web'.",
    distractors: {
      A: "El servidor nunca inicia la comunicación en el protocolo HTTP tradicional.",
      C: "La arquitectura web es cliente-servidor asimétrica, no P2P.",
      D: "El cliente web es el navegador."
    },
    trapNote: "Concepto básico: Cliente = solicita e inicia; Servidor = recibe y atiende. Navegador = cliente web."
  },
  {
    id: 6,
    level: "medio",
    topic: 1,
    topicName: "Variables de Páginas Dinámicas",
    page: "Pág. 2",
    question: "Según el documento, las páginas web dinámicas se caracterizan porque su contenido cambia en función de diversas variables. ¿Cuáles son las tres variables citadas explícitamente en el temario?",
    options: [
      { id: "A", text: "La velocidad de la CPU local, la versión de la BIOS y el tipo de memoria RAM.", isCorrect: false },
      { id: "B", text: "El navegador que estás usando, el usuario con el que te has identificado y las acciones que has efectuado con anterioridad.", isCorrect: true },
      { id: "C", text: "La dirección MAC del router, la marca del monitor y la temperatura ambiente del servidor.", isCorrect: false },
      { id: "D", text: "La versión del compilador de C, el uso de mod_perl y el tamaño del archivo httpd.conf.", isCorrect: false }
    ],
    explanation: "Página 2 literal: 'su contenido cambia en función de diversas variables, como puede ser el navegador que estás usando, el usuario con el que te has identificado, o las acciones que has efectuado con anterioridad'.",
    distractors: {
      A: "La CPU, BIOS o RAM no son las variables funcionales citadas en el texto.",
      C: "La MAC, monitor o temperatura son distractores absurdos de hardware.",
      D: "Variables de configuración interna del servidor, no del usuario/sesión."
    },
    trapNote: "Memoriza la tríada de variables de la pág. 2: 1) Navegador usado, 2) Usuario identificado, 3) Acciones previas."
  },
  {
    id: 7,
    level: "medio",
    topic: 1,
    topicName: "Tipos de Páginas Dinámicas",
    page: "Pág. 2-3",
    question: "Dentro de las páginas web dinámicas, el temario establece una distinción fundamental en dos tipos. ¿Cuáles son?",
    options: [
      { id: "A", text: "Páginas dinámicas con CSS y páginas dinámicas sin hojas de estilo.", isCorrect: false },
      { id: "B", text: "Aquellas que incluyen código que ejecuta el navegador (normalmente JavaScript) y aquellas cuyo código se ejecuta en el servidor antes de enviar el resultado al navegador.", isCorrect: true },
      { id: "C", text: "Páginas que utilizan microprocesadores Intel y páginas que utilizan microprocesadores ARM.", isCorrect: false },
      { id: "D", text: "Páginas dinámicas de pago y páginas dinámicas gratuitas de código abierto.", isCorrect: false }
    ],
    explanation: "Páginas 2 y 3: 'es muy importante distinguir dos tipos: 1) Aquellas que incluyen código que ejecuta el navegador (normalmente JavaScript)... 2) Aquellas páginas cuyo código se ejecuta en el servidor antes de enviar el resultado al navegador'.",
    distractors: {
      A: "CSS aporta estilos, no define la tipología de ejecución dinámica.",
      C: "La arquitectura hardware del procesador es transparente a la clasificación web.",
      D: "El modelo de licencia o coste no define la arquitectura de ejecución."
    },
    trapNote: "Clasificación clave: Código ejecutado en el cliente (navegador) vs Código ejecutado en el servidor."
  },
  {
    id: 8,
    level: "medio",
    topic: 1,
    topicName: "Código Dinámico en Cliente (JavaScript)",
    page: "Pág. 2-3, 7",
    question: "En las páginas dinámicas con código ejecutado en el navegador, ¿qué capacidades y funcionalidades señala el texto que puede incorporar este código?",
    options: [
      { id: "A", text: "Reescribir la tabla de particiones del disco duro y modificar las credenciales del servidor Apache.", isCorrect: false },
      { id: "B", text: "Desde mostrar animaciones hasta cambiar totalmente la apariencia y contenido de la página, así como comprobar datos introducidos en formularios.", isCorrect: true },
      { id: "C", text: "Acceder directamente a los registros de la base de datos MySQL sin enviar ninguna petición al servidor.", isCorrect: false },
      { id: "D", text: "Compilar scripts PHP a binarios ELF ejecutables directamente por el sistema operativo cliente.", isCorrect: false }
    ],
    explanation: "Páginas 3 y 7: 'puede incorporar múltiples funcionalidades que pueden ir desde mostrar animaciones hasta cambiar totalmente la apariencia y el contenido de la página... o la comprobación de los datos que introduces en un formulario'.",
    distractors: {
      A: "El navegador se ejecuta en un entorno aislado (sandbox); no modifica particiones ni el servidor.",
      C: "El código cliente no tiene acceso directo a la base de datos del servidor por motivos de seguridad y arquitectura.",
      D: "PHP no se compila en el cliente a binarios ELF."
    },
    trapNote: "JavaScript en cliente: animaciones, cambios dinámicos de apariencia/DOM y validación de formularios."
  },
  {
    id: 9,
    level: "avanzado",
    topic: 1,
    topicName: "Alcance del Temario respecto a JavaScript",
    page: "Pág. 3",
    question: "Respecto al lenguaje JavaScript, ¿cuál es la advertencia explícita sobre el alcance formativo que realiza el temario de DWES en la página 3?",
    options: [
      { id: "A", text: "Que JavaScript ha quedado obsoleto y está terminantemente prohibido usarlo en Desarrollo Web.", isCorrect: false },
      { id: "B", text: "Que en este módulo no se va a ver JavaScript, salvo cuando éste se relaciona con la programación web del lado del servidor.", isCorrect: true },
      { id: "C", text: "Que JavaScript es el único lenguaje que se utilizará para programar la base de datos en XAMPP.", isCorrect: false },
      { id: "D", text: "Que se exigirá programar todos los servidores HTTP en Node.js desde el primer día.", isCorrect: false }
    ],
    explanation: "Página 3 literal: 'En este módulo no vamos a ver JavaScript, salvo cuando éste se relaciona con la programación web del lado del servidor'. DWES se centra en PHP y backend.",
    distractors: {
      A: "JavaScript es el lenguaje estándar de la web en cliente, no está obsoleto.",
      C: "XAMPP utiliza MySQL/MariaDB gestionado con SQL y PHP.",
      D: "El módulo se enfoca en PHP y tecnologías de servidor, no exclusivamente en Node.js."
    },
    trapNote: "Detalle del documento: JS solo se aborda en DWES cuando interactúa o se relaciona con el lado servidor (como AJAX/REST)."
  },
  {
    id: 10,
    level: "basico",
    topic: 1,
    topicName: "Extensiones de Páginas Dinámicas",
    page: "Pág. 3",
    question: "¿Cuáles son las cinco extensiones de archivos dinámicos de servidor mencionadas expresamente en la página 3 del documento?",
    options: [
      { id: "A", text: ".exe, .bat, .sh, .bin y .cmd", isCorrect: false },
      { id: "B", text: ".php, .asp, .jsp, .cgi y .aspx", isCorrect: true },
      { id: "C", text: ".jpg, .png, .gif, .svg y .webp", isCorrect: false },
      { id: "D", text: ".doc, .pdf, .xls, .ppt y .txt", isCorrect: false }
    ],
    explanation: "Página 3 literal: 'Muchas de estas páginas tienen extensiones como .php, .asp, .jsp, .cgi o .aspx'.",
    distractors: {
      A: "Esos son archivos ejecutables y scripts de sistemas operativos de escritorio.",
      C: "Esas son extensiones de formatos de imagen.",
      D: "Esas son extensiones de documentos ofimáticos."
    },
    trapNote: "Aprende la lista exacta: .php (PHP), .asp (Active Server Pages), .jsp (JavaServer Pages), .cgi (CGI scripts) y .aspx (ASP.NET)."
  },
  {
    id: 11,
    level: "medio",
    topic: 1,
    topicName: "Contenido Almacenado vs. Contenido Enviado",
    page: "Pág. 3",
    question: "En las páginas dinámicas ejecutadas en el servidor, ¿qué afirmación describe con exactitud la relación entre lo que está almacenado en el servidor y lo que recibe el navegador?",
    options: [
      { id: "A", text: "El servidor envía el código fuente tal cual (.php o .jsp) y el navegador lo ejecuta en su motor V8.", isCorrect: false },
      { id: "B", text: "El contenido que se almacena en el servidor no es el mismo que después se envía: el HTML se forma como resultado de la ejecución de un programa en el servidor web.", isCorrect: true },
      { id: "C", text: "El navegador recibe un archivo comprimido .tar.gz que debe descomprimir en disco antes de mostrar la página.", isCorrect: false },
      { id: "D", text: "El servidor nunca almacena nada; la página se genera por inteligencia artificial en el router del cliente.", isCorrect: false }
    ],
    explanation: "Página 3: 'esas páginas no están almacenadas en el servidor; más concretamente, el contenido que se almacena no es el mismo que después se envía al navegador. El HTML de estas páginas se forma como resultado de la ejecución de un programa, y esa ejecución tiene lugar en el servidor web'.",
    distractors: {
      A: "El navegador nunca recibe el código fuente del script de servidor (.php).",
      C: "El navegador recibe HTML como respuesta HTTP estándar.",
      D: "El archivo script sí está almacenado en el servidor, pero lo que se envía es su salida generada (HTML)."
    },
    trapNote: "Diferencia crítica con páginas estáticas: en estáticas, contenido almacenado = contenido enviado. En dinámicas, NO coinciden."
  },
  {
    id: 12,
    level: "medio",
    topic: 1,
    topicName: "Ciclo de Petición Dinámica (6 Pasos)",
    page: "Pág. 3",
    question: "En el esquema de 6 pasos de una página web dinámica (pág. 3), ¿qué ocurre en los pasos 3 y 4 respectivamente?",
    options: [
      { id: "A", text: "Paso 3: El cliente formatea su disco; Paso 4: El servidor solicita un reinicio del sistema.", isCorrect: false },
      { id: "B", text: "Paso 3: El servidor web contacta con el módulo responsable de ejecutar el código y se lo envía; Paso 4: Como parte de la ejecución, puede ser necesario consultar información en un repositorio (como una base de datos).", isCorrect: true },
      { id: "C", text: "Paso 3: Se envía un email al usuario; Paso 4: Se descarga la hoja de estilos CSS desde Google Fonts.", isCorrect: false },
      { id: "D", text: "Paso 3: Se compila a código máquina en el cliente; Paso 4: El usuario introduce la contraseña en un popup.", isCorrect: false }
    ],
    explanation: "Página 3: '3. En el caso de que se trate de una página web dinámica... el servidor web contacta con el módulo responsable de ejecutar el código y se lo envía. 4. Como parte del proceso de ejecución, puede ser necesario obtener información de algún repositorio, como por ejemplo consultar registros almacenados en una base de datos'.",
    distractors: {
      A: "Respuestas destructivas ajenas al protocolo.",
      C: "No hay envío de emails en el ciclo de obtención de página.",
      D: "La compilación/ejecución sucede en el servidor, no en el cliente."
    },
    trapNote: "Recuerda: Paso 1 (solicitud) -> Paso 2 (búsqueda) -> Paso 3 (envío al módulo ejecutor) -> Paso 4 (consulta a BD) -> Paso 5 (generación HTML) -> Paso 6 (envío al navegador)."
  },
  {
    id: 13,
    level: "basico",
    topic: 1,
    topicName: "Ejemplo Práctico: Correo Web",
    page: "Pág. 3-4",
    question: "¿Cómo ilustra el temario el funcionamiento de las páginas dinámicas mediante el ejemplo de los clientes de correo vía web (Gmail, Hotmail, Yahoo)?",
    options: [
      { id: "A", text: "El servidor envía exactamente la misma página HTML estática con la misma bandeja de entrada a todos los usuarios que visitan la web.", isCorrect: false },
      { id: "B", text: "Tras identificarse con usuario y contraseña, el servidor ejecuta un programa que obtiene los datos de tu usuario (contactos y mensajes recibidos) y compone a medida la página web HTML que recibes.", isCorrect: true },
      { id: "C", text: "El navegador se conecta directamente por SSH a los servidores de correo sin intervención de servidores web.", isCorrect: false },
      { id: "D", text: "El correo se descarga en un archivo ejecutable .exe que se debe instalar localmente en el disco duro.", isCorrect: false }
    ],
    explanation: "Páginas 3-4: 'Obviamente, el servidor no envía esa misma página a todos los usuarios, sino que la genera de forma dinámica en función de quién sea el usuario que se conecte. Para generarla, el servidor ejecuta un programa que obtiene los datos de tu usuario (tus contactos, la lista de mensajes recibidos) y con ellos compone la página web'.",
    distractors: {
      A: "Si enviara la misma página a todos, verías los correos privados de otros usuarios.",
      C: "La comunicación web se realiza sobre HTTP/HTTPS, no mediante túneles directos SSH de cliente.",
      D: "Es una aplicación web; se visualiza directamente en el navegador sin instalar ejecutables."
    },
    trapNote: "El correo web es el ejemplo paradigmático del tema para explicar la generación dinámica basada en autenticación de usuario y bases de datos."
  },
  {
    id: 14,
    level: "medio",
    topic: 1,
    topicName: "Ventajas de Páginas Estáticas: Enlaces y Bookmarks",
    page: "Pág. 4",
    question: "Respecto a las páginas web estáticas, ¿por qué su contenido inmutable puede suponer una ventaja concreta al almacenar un enlace (marcador o favorito)?",
    options: [
      { id: "A", text: "Porque el navegador cifra automáticamente el disco duro cuando detecta una URL estática.", isCorrect: false },
      { id: "B", text: "Porque al volver a visitarla utilizando el enlace el contenido no habrá variado respecto a cómo estaba; en una página dinámica, en cambio, el contenido puede haber cambiado con posterioridad.", isCorrect: true },
      { id: "C", text: "Porque las páginas estáticas se abren a una velocidad infinita independientemente del ancho de banda.", isCorrect: false },
      { id: "D", text: "Porque las páginas dinámicas no permiten guardar enlaces en los marcadores del navegador.", isCorrect: false }
    ],
    explanation: "Página 4: 'La característica diferenciadora de las páginas web estáticas es que su contenido nunca varía, y esto en algunos casos también puede suponer una ventaja. Sucede, por ejemplo, cuando quieres almacenar un enlace a un contenido concreto del sitio web: si la página es dinámica, al volver a visitarla utilizando el enlace su contenido puede variar con respecto a cómo estaba con anterioridad'.",
    distractors: {
      A: "El almacenamiento de enlaces no tiene relación con el cifrado de disco.",
      C: "Ninguna página tiene velocidad infinita; depende de la red.",
      D: "Los navegadores sí permiten guardar enlaces a páginas dinámicas, pero el contenido al que apuntan puede mutar."
    },
    trapNote: "Contenido inmutable = persistencia del enlace a lo largo del tiempo."
  },
  {
    id: 15,
    level: "basico",
    topic: 1,
    topicName: "Requisitos para Páginas Estáticas",
    page: "Pág. 4",
    question: "Para crear un sitio web compuesto exclusivamente por páginas web estáticas, ¿qué conocimientos técnicos son necesarios según el temario?",
    options: [
      { id: "A", text: "Es obligatorio dominar Java EE, Servlets, EJB y administración avanzada de Oracle Database.", isCorrect: false },
      { id: "B", text: "No es necesario saber programar: simplemente habría que conocer HTML/XHTML y CSS, e incluso se podría utilizar algún programa de diseño web para generarlas.", isCorrect: true },
      { id: "C", text: "Es indispensable saber programar en lenguaje ensamblador para estructurar las etiquetas del DOM.", isCorrect: false },
      { id: "D", text: "Se requiere una certificación oficial en configuración de servidores Apache y compilación de PHP 8.", isCorrect: false }
    ],
    explanation: "Página 4 literal: 'No es necesario saber programar para crear un sitio que utilice únicamente páginas web estáticas. Simplemente habría que conocer HTML/XHTML y CSS, e incluso esto no sería indispensable: se podría utilizar algún programa de diseño web para generarlas'.",
    distractors: {
      A: "Ese stack es para desarrollo empresarial complejo en Java, no para estáticas.",
      C: "HTML no requiere ensamblador en absoluto.",
      D: "No se requiere ninguna certificación ni compilar PHP."
    },
    trapNote: "Frase textual de la página 4: 'No es necesario saber programar para crear un sitio que utilice únicamente páginas web estáticas'."
  },
  {
    id: 16,
    level: "medio",
    topic: 1,
    topicName: "SEO e Indexación (Googlebot)",
    page: "Pág. 4",
    question: "¿Cómo afecta a la indexación de los motores de búsqueda (Googlebot) el uso de páginas dinámicas frente a estáticas?",
    options: [
      { id: "A", text: "Googlebot rechaza e ignora por completo cualquier página web con extensión .php o .jsp.", isCorrect: false },
      { id: "B", text: "Las estáticas son más fáciles de rastrear porque su HTML ya contiene todo el contenido desde el principio; las dinámicas dependientes de JavaScript o interacción pueden tardar más o no indexarse del todo.", isCorrect: true },
      { id: "C", text: "Las páginas dinámicas siempre indexan más rápido porque envían cabeceras HTTP precompiladas directamente al robot.", isCorrect: false },
      { id: "D", text: "Googlebot no puede indexar páginas estáticas si están vinculadas a una hoja de estilos externa CSS.", isCorrect: false }
    ],
    explanation: "Página 4: 'Tanto las páginas estáticas como las dinámicas pueden indexarse, pero las dinámicas suponen más trabajo: si dependen de JavaScript o de la interacción del usuario, Googlebot puede tardar más en procesarlas o incluso no indexarlas del todo. Las estáticas, en cambio, son más fáciles de rastrear porque su HTML ya contiene todo el contenido desde el principio'.",
    distractors: {
      A: "Googlebot indexa perfectamente páginas generadas por scripts de servidor si devuelven HTML.",
      C: "Falso, el procesamiento dinámico y la renderización en cliente suponen mayor carga para el crawler.",
      D: "CSS no impide el rastreo de páginas estáticas."
    },
    trapNote: "El texto matiza que el problema de indexación dinámica surge especialmente cuando dependen de JavaScript o de la interacción del usuario."
  },
  {
    id: 17,
    level: "medio",
    topic: 1,
    topicName: "Recursos de Servidor en Páginas Dinámicas",
    page: "Pág. 4-5",
    question: "Desde la perspectiva de los recursos del servidor web, ¿cuál es una desventaja importante de las páginas dinámicas señalada en el texto?",
    options: [
      { id: "A", text: "Que consumen todo el ancho de banda del proveedor impidiendo que otros servidores funcionen.", isCorrect: false },
      { id: "B", text: "Que requieren que el servidor ejecute su código mediante un módulo concreto (integrado como mod_php o como proceso independiente delegado) y posiblemente consultar una base de datos, lo que implica recursos adicionales que deben instalarse y mantenerse.", isCorrect: true },
      { id: "C", text: "Que obligan al servidor a cambiar de placa base cada vez que se actualiza el código.", isCorrect: false },
      { id: "D", text: "Que no pueden utilizar el protocolo TCP/IP para comunicarse con los navegadores.", isCorrect: false }
    ],
    explanation: "Páginas 4-5: 'requieren que el servidor ejecute su código mediante un módulo concreto, integrado en el propio servidor (como mod_php en Apache) o como proceso independiente al que este delega la ejecución. Esto implica recursos adicionales que las páginas estáticas no necesitan. Además, puede ser necesario consultar una base de datos... Estos recursos deben instalarse y mantenerse'.",
    distractors: {
      A: "No agotan el ancho de banda global del proveedor por definición.",
      C: "No requiere sustitución física de hardware.",
      D: "Toda la comunicación web se sustenta en TCP/IP."
    },
    trapNote: "Módulos de ejecución (mod_php/procesos) + servidores de base de datos = sobrecarga de recursos e instalación/mantenimiento en el servidor."
  },
  {
    id: 18,
    level: "medio",
    topic: 1,
    topicName: "Visualización Local de Páginas Estáticas",
    page: "Pág. 4-5",
    question: "Respecto a las páginas web estáticas, ¿cuál de las siguientes afirmaciones es una ventaja explícita señalada en el temario frente a las dinámicas?",
    options: [
      { id: "A", text: "Permiten generar contenido a medida según los privilegios del usuario autenticado.", isCorrect: false },
      { id: "B", text: "Para visualizarlas en local ni siquiera es indispensable contar con un servidor web: pueden abrirse desde un USB o disco óptico directamente en el navegador.", isCorrect: true },
      { id: "C", text: "Consumen procesos persistentes mediante FastCGI para reducir la latencia de red.", isCorrect: false },
      { id: "D", text: "Actualizan automáticamente sus contenidos sin requerir edición manual cuando cambian los datos.", isCorrect: false }
    ],
    explanation: "Página 5: 'para ver una página estática almacenada en tu equipo no necesitas siquiera de un servidor web. Son archivos que pueden almacenarse en un soporte como un disco óptico o memoria USB y abrirse directamente con un navegador'.",
    distractors: {
      A: "Personalizar según el usuario es propio de páginas dinámicas.",
      C: "FastCGI es una técnica de integración de programas dinámicos, no de archivos estáticos.",
      D: "Al contrario, la gran limitación de las estáticas es que su actualización debe ser manual editando el archivo."
    },
    trapNote: "¿Hace falta servidor web para ver un .html local? No, basta con el protocolo file:// del navegador."
  },
  {
    id: 19,
    level: "medio",
    topic: 1,
    topicName: "Limitación Principal de las Páginas Estáticas",
    page: "Pág. 5",
    question: "¿Cuál es la desventaja o limitación más importante de las páginas web estáticas destacada en el texto?",
    options: [
      { id: "A", text: "Que los navegadores modernos no soportan archivos con extensión .html.", isCorrect: false },
      { id: "B", text: "La actualización de su contenido debe hacerse de forma manual editando la página que almacena el servidor web, lo que implica un mantenimiento que puede ser prohibitivo en sitios con gran cantidad de contenido.", isCorrect: true },
      { id: "C", text: "Que obligan a tener instalada la máquina virtual de Java en el cliente.", isCorrect: false },
      { id: "D", text: "Que no pueden incluir texto con formato ni imágenes de ningún tipo.", isCorrect: false }
    ],
    explanation: "Página 5: 'La desventaja más importante ya la comentamos anteriormente: la actualización de su contenido debe hacerse de forma manual editando la página que almacena el servidor web. Esto implica un mantenimiento que puede ser prohibitivo en sitios web con gran cantidad de contenido'.",
    distractors: {
      A: "El formato .html es la base universal de todos los navegadores.",
      C: "Las páginas estáticas no requieren Java ni JVM.",
      D: "HTML soporta texto con formato, imágenes y tablas perfectamente."
    },
    trapNote: "Palabra clave de examen: mantenimiento 'prohibitivo' por requerir actualización manual archivo a archivo."
  },
  {
    id: 20,
    level: "medio",
    topic: 1,
    topicName: "Evolución Histórica: Generaciones de la Web",
    page: "Pág. 5",
    question: "Según la clasificación cronológica recogida en el documento, ¿a qué se considera la 'primera generación' y la 'segunda generación' de la web?",
    options: [
      { id: "A", text: "Primera generación: páginas con CSS; Segunda generación: páginas con HTML5.", isCorrect: false },
      { id: "B", text: "Primera generación: la web compuesta por páginas estáticas; Segunda generación: la surgida gracias a las páginas web dinámicas.", isCorrect: true },
      { id: "C", text: "Primera generación: arquitecturas SPA; Segunda generación: arquitectura en 3 capas.", isCorrect: false },
      { id: "D", text: "Primera generación: servidores CGI; Segunda generación: servidores basados exclusivamente en Node.js.", isCorrect: false }
    ],
    explanation: "Página 5 literal: 'Las primeras páginas web que se crearon en Internet fueron páginas estáticas. A esta web compuesta por páginas estáticas se le considera la primera generación. La segunda generación de la web surgió gracias a las páginas web dinámicas'.",
    distractors: {
      A: "CSS y HTML5 son estándares de diseño y maquetación, no definen las dos generaciones citadas.",
      C: "Las SPA son un enfoque moderno muy posterior.",
      D: "Node.js es contemporáneo, no define la segunda generación histórica."
    },
    trapNote: "Pregunta literal de examen: 1ª generación = estáticas, 2ª generación = dinámicas."
  },
  {
    id: 21,
    level: "medio",
    topic: 1,
    topicName: "Definición y Ventajas de Aplicaciones Web",
    page: "Pág. 5",
    question: "¿Qué es una aplicación web según el temario y cuáles son las cuatro ventajas que ofrece frente a las aplicaciones tradicionales de escritorio?",
    options: [
      { id: "A", text: "Son archivos ejecutables .exe; ventajas: funcionan sin red, sin navegador y sin sistema operativo.", isCorrect: false },
      { id: "B", text: "Emplean páginas web dinámicas ejecutadas en servidor y mostradas en navegador; ventajas: no requieren instalación en clientes, gestión centralizada sencilla (backups/actualizaciones), funcionan en cualquier equipo con navegador (sin requerir gran potencia) y acceso ubicuo desde cualquier lugar con conexión (incluidos móviles).", isCorrect: true },
      { id: "C", text: "Son scripts de PowerShell; ventajas: acceso directo sin permisos al registro de Windows y soporte gráfico nativo de 240 FPS.", isCorrect: false },
      { id: "D", text: "Son páginas HTML guardadas exclusivamente en memorias USB sin conexión externa.", isCorrect: false }
    ],
    explanation: "Página 5: 'Las aplicaciones web emplean páginas web dinámicas que se ejecutan en un servidor web y se muestran en un navegador... Ventajas: 1. No es necesario instalarlas en los equipos cliente. 2. Muy sencillo gestionarlas (backups, corrección, actualizaciones). 3. Se pueden usar en cualquier sistema con navegador sin importar SO ni potencia. 4. Acceso desde cualquier lugar con conexión, incluidos móviles'.",
    distractors: {
      A: "Las aplicaciones tradicionales son los .exe; las web se muestran en el navegador.",
      C: "Las apps web no son scripts de PowerShell para el registro de Windows.",
      D: "Esa es la descripción de archivos estáticos en soporte físico."
    },
    trapNote: "Memoriza las 4 ventajas: sin instalación en clientes, gestión centralizada en servidor, independencia de SO/hardware cliente, y ubicuidad/acceso remoto."
  },
  {
    id: 22,
    level: "avanzado",
    topic: 1,
    topicName: "Inconvenientes de Aplicaciones Web y PWA",
    page: "Pág. 6",
    question: "En el análisis de inconvenientes de las aplicaciones web, ¿qué tres limitaciones se detallan y qué excepción tecnológica se menciona para mitigar la dependencia de conexión?",
    options: [
      { id: "A", text: "Inconvenientes: falta de memoria RAM, coste de cables de red y lentitud de teclado; excepción: Bluetooth 5.0.", isCorrect: false },
      { id: "B", text: "Inconvenientes: interfaz limitada al navegador, dependencia de conexión con el servidor y necesidad de transmitir los datos por red; excepción: Aplicaciones Web Progresivas (PWA) que permiten cierto funcionamiento offline.", isCorrect: true },
      { id: "C", text: "Inconvenientes: imposibilidad de mostrar imágenes, rechazo en Linux y consumo de papel; excepción: módems analógicos.", isCorrect: false },
      { id: "D", text: "Inconvenientes: incompatibilidad con PHP 8 y obligación de reiniciar Apache a diario; excepción: FastCGI.", isCorrect: false }
    ],
    explanation: "Página 6: 'Inconvenientes de las aplicaciones web: 1. La interfaz de usuario es la página en el navegador, lo que limita sus funcionalidades a lo que éste puede ofrecer. 2. Dependemos de una conexión con el servidor para poder utilizarlas... a no ser que se trate de aplicaciones web progresivas (PWA) que permiten cierto funcionamiento offline. 3. La información debe transmitirse desde el servidor'.",
    distractors: {
      A: "Factores de hardware sin relación con el análisis del documento.",
      C: "Los navegadores muestran imágenes perfectamente y funcionan en Linux.",
      D: "Incompatibilidades falsas sin base en el texto."
    },
    trapNote: "Ojo al examen: las Aplicaciones Web Progresivas (PWA) son la única excepción citada que mitiga la desconexión ofreciendo funcionamiento offline."
  },
  {
    id: 23,
    level: "medio",
    topic: 1,
    topicName: "Limitaciones de Hardware: Videojuegos y Diseño 3D",
    page: "Pág. 6",
    question: "¿Para cuál de los siguientes tipos de software señala el temario que las aplicaciones web NO son adecuadas?",
    options: [
      { id: "A", text: "Sistemas de correo electrónico con gestión de contactos.", isCorrect: false },
      { id: "B", text: "Procesadores de texto y herramientas colaborativas de gestión de tareas.", isCorrect: false },
      { id: "C", text: "Software que requiera acceso directo y de bajo nivel al hardware, como diseño 3D con aceleración específica o videojuegos muy exigentes que necesitan exprimir la GPU local.", isCorrect: true },
      { id: "D", text: "Gestores de contenidos (CMS) para administración de portales educativos.", isCorrect: false }
    ],
    explanation: "Página 6: 'La información que se muestra en el navegador debe transmitirse desde el servidor. Esto hace que cierto tipo de aplicaciones no sean adecuadas para su implementación como aquellas que requieren acceso directo y de bajo nivel al hardware (por ejemplo, software de diseño 3D con aceleración gráfica específica o videojuegos muy exigentes que necesitan aprovechar al máximo la GPU local)'.",
    distractors: {
      A: "Los clientes de correo fueron de las primeras apps web (Hotmail, Gmail, Yahoo).",
      B: "El temario cita expresamente los procesadores de texto como aplicaciones web comunes.",
      D: "Los CMS (WordPress, Drupal, Joomla!) son el ejemplo clásico de aplicaciones web dinámicas."
    },
    trapNote: "La limitación técnica clave es: 'acceso directo y de bajo nivel al hardware' y 'aprovechar al máximo la GPU local'."
  },
  {
    id: 24,
    level: "basico",
    topic: 1,
    topicName: "Front-end vs. Back-end en CMS",
    page: "Pág. 6",
    question: "En sistemas de gestión de contenidos (como Drupal, Joomla! o WordPress), ¿cómo define el temario al front-end y al back-end?",
    options: [
      { id: "A", text: "Front-end es la base de datos relacional y Back-end es el servidor web Apache.", isCorrect: false },
      { id: "B", text: "Parte externa o front-end: conjunto de páginas que ven la gran mayoría de usuarios que las usan (usuarios externos); Parte interna o back-end: conjunto de páginas dinámicas que utilizan quienes producen contenido y administran la aplicación (usuarios internos).", isCorrect: true },
      { id: "C", text: "Front-end son los scripts compilados a código máquina y Back-end son los archivos de hojas de estilos CSS.", isCorrect: false },
      { id: "D", text: "Front-end es el protocolo HTTP y Back-end es el protocolo HTTPS.", isCorrect: false }
    ],
    explanation: "Página 6 literal: 'Parte externa o front-end, que es el conjunto de páginas que ven la gran mayoría de usuarios que las usan (usuarios externos). Una parte interna o back-end, que es otro conjunto de páginas dinámicas que utilizan las personas que producen el contenido y las que administran la aplicación web (usuarios internos) para crear contenido, organizarlo, decidir la apariencia externa, etc.'.",
    distractors: {
      A: "Front-end nunca es la base de datos.",
      C: "Front-end en web son tecnologías de navegador (HTML, CSS, JS).",
      D: "HTTP/HTTPS son protocolos de capa de red/aplicación, no partes de un CMS."
    },
    trapNote: "Asocia: Front-end = usuarios externos / interfaz visible. Back-end = usuarios internos / gestión, creación de contenido y administración."
  },
  {
    id: 25,
    level: "medio",
    topic: 1,
    topicName: "Complementariedad Cliente-Servidor",
    page: "Pág. 7",
    question: "En la página 7, ¿cómo ilustra el temario la complementariedad entre el código ejecutado en el servidor y el ejecutado en el cliente?",
    options: [
      { id: "A", text: "El servidor apaga la pantalla del cliente mientras la base de datos escribe en disco.", isCorrect: false },
      { id: "B", text: "En un correo web, el servidor ejecuta el programa que obtiene los mensajes de la BD, mientras que el navegador ejecuta el código JavaScript que avisa si has olvidado poner texto en el asunto antes de enviar.", isCorrect: true },
      { id: "C", text: "El navegador procesa la lógica de autenticación criptográfica en PHP y el servidor solo muestra las fuentes tipográficas en CSS.", isCorrect: false },
      { id: "D", text: "El cliente compila la máquina virtual de Java y el servidor la ejecuta en un hilo de WebSocket.", isCorrect: false }
    ],
    explanation: "Página 7: 'Estas dos tecnologías se complementan entre sí. Así, volviendo al ejemplo del correo web, el programa que se encarga de obtener tus mensajes y su contenido de una base de datos se ejecuta en el entorno del servidor, mientras que tu navegador ejecuta, por ejemplo, el código encargado de avisar cuando quieres enviar un mensaje y te has olvidado de poner un texto en el asunto'.",
    distractors: {
      A: "Comportamiento absurdo.",
      C: "El navegador nunca ejecuta PHP; la autenticación corre en backend.",
      D: "Mezcla de conceptos erróneos de compilación y protocolos."
    },
    trapNote: "Ejemplo clásico: Servidor = acceso a datos y generación; Cliente (JS) = validación inmediata (ej. asunto vacío en el correo)."
  },
  {
    id: 26,
    level: "medio",
    topic: 1,
    topicName: "Limitación Tradicional previa a AJAX",
    page: "Pág. 7",
    question: "¿Cuál era la limitación tradicional del código JavaScript ejecutado en el navegador que obligaba a recargar la página entera para consultar nuevos datos?",
    options: [
      { id: "A", text: "Que los navegadores antiguos solo podían interpretar código binario ensamblador.", isCorrect: false },
      { id: "B", text: "Que el código que se ejecuta en el cliente tradicionalmente no tenía acceso a los datos almacenados en el servidor (no podía consultar la BD directamente), por lo que la solución era crear una nueva página completa en el servidor y enviarla de nuevo al navegador.", isCorrect: true },
      { id: "C", text: "Que el protocolo HTTP impedía enviar más de una petición por cada sesión de usuario.", isCorrect: false },
      { id: "D", text: "Que los servidores Apache rechazaban conexiones de navegadores que tuvieran hojas de estilo CSS.", isCorrect: false }
    ],
    explanation: "Página 7: 'Esta división es así porque el código que se ejecuta en el cliente web tradicionalmente no tenía acceso a los datos que se almacenan en el servidor... el código JavaScript no podía obtener de la base de datos el contenido de ese mensaje. La solución era crear una nueva página en el servidor con la información que se pedía y enviarla de nuevo al navegador'.",
    distractors: {
      A: "Los navegadores nunca han interpretado ensamblador de forma nativa para la web.",
      C: "HTTP soporta múltiples peticiones perfectamente.",
      D: "Apache siempre ha servido CSS sin problemas."
    },
    trapNote: "Evolución histórica: Tradicional (sin acceso directo a datos -> recarga completa de página) vs AJAX/SPA (actualización parcial asíncrona)."
  },
  {
    id: 27,
    level: "medio",
    topic: 1,
    topicName: "Técnica AJAX",
    page: "Pág. 7",
    question: "¿Qué posibilidad técnica introdujo la técnica de desarrollo web AJAX según el temario?",
    options: [
      { id: "A", text: "Permitió sustituir el servidor Apache por un navegador sin necesidad de backend.", isCorrect: false },
      { id: "B", text: "Posibilitó que el código JavaScript ejecutado en el navegador se comunique con un servidor de Internet para obtener información y modificar el contenido de la página actual sin necesidad de recargarla ni salir de ella.", isCorrect: true },
      { id: "C", text: "Obligó a compilar todo el código PHP en binarios de C++ antes de descargarlo al cliente.", isCorrect: false },
      { id: "D", text: "Eliminó el uso de hojas de estilo CSS sustituyéndolas por funciones matemáticas.", isCorrect: false }
    ],
    explanation: "Página 7: 'Sin embargo, desde hace unos años existe una técnica de desarrollo web conocida como AJAX, que nos posibilita realizar programas en los que el código JavaScript que se ejecuta en el navegador pueda comunicarse con un servidor de Internet para obtener información con la que, por ejemplo, modificar la página web actual... sin salir de una página se puede modificar su contenido en base a la información que se almacena en un servidor'.",
    distractors: {
      A: "El backend sigue siendo indispensable para gestionar bases de datos y seguridad.",
      C: "PHP no se compila en binarios C++ por usar AJAX.",
      D: "CSS sigue siendo la tecnología de estilos universal."
    },
    trapNote: "AJAX = comunicación asíncrona en segundo plano para actualizar fragmentos de la página sin recargarla."
  },
  {
    id: 28,
    level: "avanzado",
    topic: 1,
    topicName: "Arquitectura SPA (Single Page Application)",
    page: "Pág. 7-8",
    question: "¿Cuál es la diferencia fundamental en el ciclo de vida entre una arquitectura web cliente-servidor tradicional y una SPA (Single Page Application)?",
    options: [
      { id: "A", text: "En la tradicional se usa JSON y en la SPA se usa exclusivamente XML y SOAP.", isCorrect: false },
      { id: "B", text: "En la tradicional el navegador no puede interpretar hojas de estilo CSS, mientras que en la SPA sí.", isCorrect: false },
      { id: "C", text: "En la tradicional cada acción suele recargar la página completa con nuevo HTML (Form POST -> Page Reload); en la SPA la aplicación se carga una sola vez y solo se actualizan partes específicas mediante JavaScript/AJAX contra servicios REST consumiendo JSON.", isCorrect: true },
      { id: "D", text: "En la SPA no interviene ningún servidor web; todo se ejecuta en el navegador sin ninguna petición de red.", isCorrect: false }
    ],
    explanation: "Página 7 y 8 (diagramas): en la arquitectura tradicional, un formulario provoca 'Form POST' y 'Page Reload' completo con nuevo HTML del servidor. En una SPA, tras el 'Initial Request' de HTML, las interacciones usan 'AJAX' para recibir datos estructurados en 'JSON' y actualizar el DOM sin recargar la página.",
    distractors: {
      A: "Al revés, las SPA modernas consumen servicios REST intercambiando JSON.",
      B: "Tanto la tradicional como la SPA usan CSS.",
      D: "La SPA sigue necesitando el backend para consultar datos y autenticación mediante peticiones HTTP asíncronas."
    },
    trapNote: "Fíjate en las palabras clave del temario: 'la aplicación se carga una sola vez', 'no se recarga la página completa', 'programación reactiva', 'REST / JSON'."
  },
  {
    id: 29,
    level: "avanzado",
    topic: 1,
    topicName: "Transición hacia Programación Reactiva y REST",
    page: "Pág. 7",
    question: "Según el texto oficial, ¿hacia qué paradigma arquitectónico está evolucionando a día de hoy gran parte del desarrollo web moderno?",
    options: [
      { id: "A", text: "Hacia el abandono del protocolo HTTP a favor de conexiones directas por puerto serie RS-232.", isCorrect: false },
      { id: "B", text: "Hacia una arquitectura SPA donde el cliente gana mucho mayor peso y sigue una programación reactiva que accede a servicios remotos REST que realizan las operaciones (comunicándose mediante JSON).", isCorrect: true },
      { id: "C", text: "Hacia el regreso exclusivo a páginas web estáticas sin JavaScript para ahorrar memoria en los routers.", isCorrect: false },
      { id: "D", text: "Hacia aplicaciones CGI compiladas en C puro para todos los dispositivos móviles.", isCorrect: false }
    ],
    explanation: "Página 7 literal: 'A día de hoy, gran parte del desarrollo web está pasando de una arquitectura web cliente-servidor clásica, donde el cliente realiza una llamada al backend, hacia una arquitectura SPA donde el cliente gana mucho mayor peso y sigue una programación reactiva que accede a servicios remotos REST que realizan las operaciones (comunicándose mediante JSON)'.",
    distractors: {
      A: "RS-232 es un protocolo serie antiguo de hardware, nada que ver con la web moderna.",
      C: "La tendencia no es volver a páginas estáticas puras para toda la web.",
      D: "CGI tradicional está en declive por su ineficiencia en procesos."
    },
    trapNote: "Frase textual de la página 7: 'el cliente gana mucho mayor peso y sigue una programación reactiva que accede a servicios remotos REST comunicándose mediante JSON'."
  },
  {
    id: 30,
    level: "avanzado",
    topic: 1,
    topicName: "Diagramas de Ciclo de Vida: Traditional vs. SPA",
    page: "Pág. 8",
    question: "Observando los diagramas de la página 8 ('Traditional Page Lifecycle' vs 'SPA Lifecycle'), ¿qué mensaje clave intercambia el servidor con el cliente tras la petición inicial en cada modelo?",
    options: [
      { id: "A", text: "En Traditional: Form POST devuelve HTML y produce Page Reload; en SPA: AJAX devuelve JSON y no recarga la página.", isCorrect: true },
      { id: "B", text: "En ambos casos el servidor devuelve archivos binarios compilados .exe.", isCorrect: false },
      { id: "C", text: "En Traditional se utiliza WebSockets y en SPA se utiliza mod_perl.", isCorrect: false },
      { id: "D", text: "En Traditional el servidor se comunica con XML y en SPA no existe ninguna respuesta del servidor.", isCorrect: false }
    ],
    explanation: "Página 8 (diagramas oficiales): Traditional Page Lifecycle muestra 'Form POST -> HTML -> Page Reload!'. SPA Lifecycle muestra 'AJAX -> JSON -> [...]'.",
    distractors: {
      B: "Nunca se devuelven archivos ejecutables .exe para renderizado web estándar.",
      C: "Los diagramas no reflejan WebSockets ni mod_perl.",
      D: "En SPA hay comunicación continua mediante peticiones asíncronas."
    },
    trapNote: "Diferencia de datos en el diagrama: Traditional recibe páginas completas en HTML; SPA recibe datos crudos en formato JSON."
  },

  // ==========================================================================
  // BLOQUE 2: ARQUITECTURA POR CAPAS Y PATRÓN MVC (Pág. 8-10)
  // ==========================================================================
  {
    id: 31,
    level: "medio",
    topic: 2,
    topicName: "Componentes Principales en el Servidor",
    page: "Pág. 8-9",
    question: "¿Cuáles son los cuatro componentes principales con los que se debe contar para ejecutar aplicaciones web dinámicas en un servidor?",
    options: [
      { id: "A", text: "1. Tarjeta gráfica dedicada, 2. Teclado mecánico, 3. Router de fibra, 4. Navegador Chrome.", isCorrect: false },
      { id: "B", text: "1. Un servidor web, 2. El módulo encargado de ejecutar el código y generar el HTML, 3. Una base de datos (normalmente también un servidor), 4. El lenguaje de programación (ej. PHP).", isCorrect: true },
      { id: "C", text: "1. Java Virtual Machine, 2. Apache Geronimo, 3. Microsoft Access, 4. Perl en modo CGI.", isCorrect: false },
      { id: "D", text: "1. Docker Desktop, 2. Kubernetes cluster, 3. Git, 4. Cuenta en GitHub.", isCorrect: false }
    ],
    explanation: "Páginas 8-9 enumeran los 4 componentes: 1. Un servidor web (recibe peticiones y envía respuestas). 2. El módulo encargado de ejecutar el código (integrado o delegado). 3. Una base de datos (almacén de datos). 4. El lenguaje de programación utilizado (PHP).",
    distractors: {
      A: "Son periféricos de usuario, no componentes de servidor.",
      C: "Son tecnologías específicas, no la clasificación general de 4 componentes del temario.",
      D: "Herramientas de despliegue y control de versiones."
    },
    trapNote: "Aprende los 4 elementos canónicos de la página 8-9: Servidor Web + Módulo Ejecutor + Base de Datos + Lenguaje de Programación."
  },
  {
    id: 32,
    level: "medio",
    topic: 2,
    topicName: "Necesidad de la Base de Datos",
    page: "Pág. 9",
    question: "Respecto a la base de datos en una aplicación web, ¿qué matiz conceptual señala el temario en la página 9?",
    options: [
      { id: "A", text: "Que es matemáticamente imposible que un servidor web devuelva HTML sin conectarse a MySQL.", isCorrect: false },
      { id: "B", text: "Que no es estrictamente necesario contar con una base de datos, pero en la práctica se utiliza en todas las aplicaciones web que manejan grandes cantidades de datos para almacenarlos.", isCorrect: true },
      { id: "C", text: "Que las bases de datos solo pueden funcionar en el mismo equipo físico donde está instalado el navegador cliente.", isCorrect: false },
      { id: "D", text: "Que PHP 8.x prohíbe la ejecución de scripts si no existe una tabla llamada 'users' en MariaDB.", isCorrect: false }
    ],
    explanation: "Página 9 literal: 'Una base de datos, que normalmente también será un servidor. Este componente no es estrictamente necesario, pero en la práctica se utiliza en todas las aplicaciones web que utilizan grandes cantidades de datos para almacenarlos'.",
    distractors: {
      A: "Un script PHP puede generar HTML dinámico (ej. cálculos o fecha actual) sin consultar ninguna BD.",
      C: "La base de datos suele estar en un servidor independiente o en el mismo servidor de aplicaciones, no en el cliente.",
      D: "PHP no impone estructuras de tablas predeterminadas."
    },
    trapNote: "Pregunta clásica de verdadero/falso: ¿Es estrictamente obligatoria la base de datos para una web dinámica? No es estrictamente necesaria, pero sí habitual en la práctica."
  },
  {
    id: 33,
    level: "medio",
    topic: 2,
    topicName: "Motivo del Diseño en Capas",
    page: "Pág. 9",
    question: "¿Cuál es el motivo fundamental que justifica dividir el diseño de una aplicación web en capas o niveles?",
    options: [
      { id: "A", text: "Obligar a que el usuario descargue tres navegadores web distintos simultáneamente.", isCorrect: false },
      { id: "B", text: "Separar las funciones lógicas de la misma, de tal forma que sea posible ejecutar cada una en un servidor distinto en caso de que sea necesario.", isCorrect: true },
      { id: "C", text: "Eliminar definitivamente la necesidad de contar con una base de datos relacional.", isCorrect: false },
      { id: "D", text: "Permitir que el código HTML se interprete en el procesador gráfico antes de solicitar datos al servidor.", isCorrect: false }
    ],
    explanation: "Página 9: 'El motivo de dividir en capas el diseño de una aplicación es que se puedan separar las funciones lógicas de la misma, de tal forma que sea posible ejecutar cada una en un servidor distinto (en caso de que sea necesario)'.",
    distractors: {
      A: "Es absurdo; el cliente utiliza un único navegador.",
      C: "La capa de datos se encarga justamente de la base de datos.",
      D: "La arquitectura por capas se enfoca en modularidad, desacoplamiento y escalabilidad distribuida."
    },
    trapNote: "Clave conceptual: separar funciones lógicas para permitir su ejecución en servidores físicos diferentes."
  },
  {
    id: 34,
    level: "basico",
    topic: 2,
    topicName: "Capa de Presentación (Cliente)",
    page: "Pág. 9",
    question: "En una arquitectura web clásica de 3 capas, ¿qué función cumple la 'Capa Cliente o de Presentación' y qué tecnologías se utilizan habitualmente en ella?",
    options: [
      { id: "A", text: "Almacenar registros en tablas relacionales mediante MySQL y PostgreSQL.", isCorrect: false },
      { id: "B", text: "Es donde programamos todo lo relacionado con la interfaz de usuario, esto es, la parte visible de la aplicación con la que interactúa el usuario (HTML, CSS, JS).", isCorrect: true },
      { id: "C", text: "Ejecutar consultas SQL y gestionar la persistencia en discos duros del servidor.", isCorrect: false },
      { id: "D", text: "Configurar los módulos mod_php y PHP-FPM en Apache.", isCorrect: false }
    ],
    explanation: "Página 9: 'Una capa cliente (presentación), donde programamos todo lo relacionado con la interfaz de usuario, esto es, la parte visible de la aplicación con la que interactúa el usuario (HTML, CSS, JS)'.",
    distractors: {
      A: "Esa es la responsabilidad de la capa de datos.",
      C: "Esa es tarea de la capa de datos y SGBD.",
      D: "Configuración de servidor web, ajena a la capa de presentación cliente."
    },
    trapNote: "Capa de presentación = Interfaz visible con la que interactúa el usuario = HTML + CSS + JavaScript."
  },
  {
    id: 35,
    level: "medio",
    topic: 2,
    topicName: "Capa de Aplicación (Lógica de Negocio)",
    page: "Pág. 9",
    question: "¿Qué tecnologías corresponden típicamente a la 'Capa de Aplicación o Lógica de Negocio' en una arquitectura web clásica de 3 capas?",
    options: [
      { id: "A", text: "HTML, CSS y JavaScript exclusivo de navegador.", isCorrect: false },
      { id: "B", text: "PHP, Java, Python, .NET (C#), etc., donde se programa la funcionalidad de la aplicación.", isCorrect: true },
      { id: "C", text: "MySQL, Oracle, PostgreSQL, SQL Server y MongoDB.", isCorrect: false },
      { id: "D", text: "Googlebot, DNS y fibra óptica.", isCorrect: false }
    ],
    explanation: "Página 9: 'Una capa de aplicación (lógica de negocio) donde deberás programar la funcionalidad de tu aplicación (PHP, Java, Python, .NET, etc.)'.",
    distractors: {
      A: "Pertenecen a la capa cliente/presentación.",
      C: "Pertenecen a la capa de datos.",
      D: "Conceptos de red e indexación sin relación."
    },
    trapNote: "No confundas la Capa de Aplicación (lógica del servidor) con la Capa de Presentación (cliente) ni con la Capa de Datos."
  },
  {
    id: 36,
    level: "basico",
    topic: 2,
    topicName: "Capa de Datos",
    page: "Pág. 9",
    question: "En el esquema de 3 capas de la página 9, ¿cuál es la función de la 'Capa de Datos' y qué sistemas gestores de base de datos se ilustran en la figura?",
    options: [
      { id: "A", text: "Renderizar fuentes Arial en color rojo; ejemplos: Firefox y Safari.", isCorrect: false },
      { id: "B", text: "Encargarse de almacenar la información de la aplicación en una base de datos y recuperarla cuando sea necesario; ejemplos: MySQL, Oracle, PostgreSQL, SQL Server, MongoDB.", isCorrect: true },
      { id: "C", text: "Interpretar etiquetas HTML en el router; ejemplos: Apache y Nginx.", isCorrect: false },
      { id: "D", text: "Controlar los atajos de teclado en el editor Visual Studio Code.", isCorrect: false }
    ],
    explanation: "Página 9: 'Una capa de datos, que se tendrá que encargar de almacenar la información de la aplicación en una base de datos y recuperarla cuando sea necesario'. En el diagrama figuran: MySQL, Oracle, PostgreSQL, SQL Server, MongoDB.",
    distractors: {
      A: "Renderizado es función de la capa de presentación en el navegador.",
      C: "Apache y Nginx son servidores web de la capa intermedia/aplicación.",
      D: "VSCode es una herramienta de desarrollo del programador."
    },
    trapNote: "Fíjate en los motores citados en la imagen: tanto relacionales (MySQL, Oracle, PostgreSQL, SQL Server) como no relacionales (MongoDB)."
  },
  {
    id: 37,
    level: "medio",
    topic: 2,
    topicName: "Concepto y Beneficios del Patrón MVC",
    page: "Pág. 9-10",
    question: "¿Qué es el Modelo Vista Controlador (MVC) y qué ventajas aporta al desarrollo de software según el texto oficial?",
    options: [
      { id: "A", text: "Un protocolo de red para sustituir TCP/IP que acelera la descarga de vídeos en streaming.", isCorrect: false },
      { id: "B", text: "Un modelo de arquitectura que separa los datos y la lógica de negocio respecto a la interfaz de usuario y el componente encargado de gestionar eventos y comunicaciones; permite reutilizar código y mejorar su organización y mantenimiento.", isCorrect: true },
      { id: "C", text: "Una extensión de pago de PhpStorm para formatear archivos con PSR-12.", isCorrect: false },
      { id: "D", text: "Un comando del panel de control de XAMPP para apagar Apache cuando falla Tomcat.", isCorrect: false }
    ],
    explanation: "Página 9: 'El Modelo Vista Controlador (Model-View-Controller) es un modelo de arquitectura que separa los datos y la lógica de negocio respecto a la interfaz de usuario y el componente encargado de gestionar los eventos y las comunicaciones. Al separar los componentes en elementos conceptuales permite reutilizar el código y mejorar su organización y mantenimiento'.",
    distractors: {
      A: "MVC es un patrón de diseño/arquitectura de software, no un protocolo de red.",
      C: "PSR-12 lo aplica PHP Intelephense, nada que ver con la definición de MVC.",
      D: "No es un comando de XAMPP."
    },
    trapNote: "Las dos ventajas clave señaladas textualmente son: 'reutilizar el código' y 'mejorar su organización y mantenimiento'."
  },
  {
    id: 38,
    level: "medio",
    topic: 2,
    topicName: "MVC: El Modelo",
    page: "Pág. 10",
    question: "En el patrón de arquitectura MVC, ¿cuál es la responsabilidad específica del MODELO y mediante qué elemento se accede habitualmente a él?",
    options: [
      { id: "A", text: "Capturar el clic del ratón y dibujar las cajas de estilo CSS directamente en el monitor.", isCorrect: false },
      { id: "B", text: "Representa la información y gestiona todos los accesos a ésta (consultas y actualizaciones provenientes normalmente de una base de datos); se accede vía el Controlador.", isCorrect: true },
      { id: "C", text: "Escuchar en el puerto 80 del servidor Apache para redirigir el tráfico a IIS.", isCorrect: false },
      { id: "D", text: "Comprobar si el navegador del cliente tiene instalada la extensión Code Runner.", isCorrect: false }
    ],
    explanation: "Página 10: 'Modelo: datos y lógica de negocio. Representa la información y gestiona todos los accesos a ésta, tanto consultas como actualizaciones provenientes, normalmente, de una base de datos. Se accede vía el controlador'.",
    distractors: {
      A: "Dibujar elementos visuales es función de la Vista.",
      C: "Escuchar en el puerto es tarea del servidor web HTTP, no del Modelo.",
      D: "Code Runner es una herramienta de VSCode."
    },
    trapNote: "Frase textual del temario que suele ser pregunta trampa de examen: 'Se accede vía el controlador'."
  },
  {
    id: 39,
    level: "medio",
    topic: 2,
    topicName: "MVC: El Controlador",
    page: "Pág. 10",
    question: "En el patrón MVC, ¿cuál es la función precisa del CONTROLADOR?",
    options: [
      { id: "A", text: "Gestionar el almacenamiento persistente de los registros en los discos del servidor de bases de datos.", isCorrect: false },
      { id: "B", text: "Actúa como intermediario modelo/vista: responde a las acciones del usuario, realiza peticiones al modelo para solicitar información y, tras recibir la respuesta del modelo, le envía los datos a la vista.", isCorrect: true },
      { id: "C", text: "Formatear visualmente con etiquetas HTML y reglas CSS los colores de la interfaz.", isCorrect: false },
      { id: "D", text: "Sustituir al servidor web Apache para escuchar en el puerto TCP 80 sin protocolo HTTP.", isCorrect: false }
    ],
    explanation: "Página 10: 'Controlador: intermediario modelo/vista. Responde a las acciones del usuario, y realiza peticiones al modelo para solicitar información. Tras recibir la respuesta del modelo, le envía los datos a la vista'.",
    distractors: {
      A: "Esa es la responsabilidad del Modelo (y de la capa de datos).",
      C: "Esa es la responsabilidad de la Vista.",
      D: "El controlador es un componente de software de la aplicación, no un demonio de red."
    },
    trapNote: "Flujo MVC: Usuario interactúa con la Vista -> Petición al Controlador -> Controlador consulta al Modelo -> Modelo devuelve datos -> Controlador actualiza la Vista."
  },
  {
    id: 40,
    level: "medio",
    topic: 2,
    topicName: "MVC: La Vista",
    page: "Pág. 10",
    question: "En el patrón MVC, ¿cuál es la función de la VISTA y cómo interactúa el usuario con ella?",
    options: [
      { id: "A", text: "Ejecutar consultas SQL directas contra las tablas de MySQL saltándose la aplicación.", isCorrect: false },
      { id: "B", text: "Es la interfaz de usuario y define cómo se muestran los datos; presenta de forma visual el modelo y los datos preparados por el controlador. El usuario interactúa con ella y realiza nuevas peticiones al controlador.", isCorrect: true },
      { id: "C", text: "Compilar los servlets de Jakarta EE en código intermedio de máquina virtual.", isCorrect: false },
      { id: "D", text: "Modificar las directivas upload_max_filesize y max_execution_time de php.ini.", isCorrect: false }
    ],
    explanation: "Página 10: 'Vista: interfaz de usuario y cómo se muestran los datos. Presenta al usuario de forma visual el modelo y los datos preparados por el controlador. El usuario interactúa con la vista y realiza nuevas peticiones al controlador'.",
    distractors: {
      A: "La Vista nunca interactúa directamente con la BD en un patrón MVC estricto.",
      C: "La compilación de Java no corresponde a la Vista.",
      D: "php.ini es un archivo de configuración del servidor."
    },
    trapNote: "El usuario VE la Vista, interactúa con ella, pero sus peticiones van dirigidas al CONTROLADOR."
  },
  {
    id: 41,
    level: "avanzado",
    topic: 2,
    topicName: "Diagrama de Interacción MVC",
    page: "Pág. 10",
    question: "Analizando el esquema 'Model-View-Controller' de la página 10, ¿cuáles son las etiquetas exactas de las flechas que comunican al Controlador con la Vista y con el Modelo?",
    options: [
      { id: "A", text: "Controlador envía 'Send Data' a View; y entre Controller y Model hay 'Request Information' y 'Response Information'.", isCorrect: true },
      { id: "B", text: "Controlador envía 'Compile Binary' a View; y entre Controller y Model hay 'Drop Table'.", isCorrect: false },
      { id: "C", text: "View envía 'Direct SQL' al Model sin pasar por Controller.", isCorrect: false },
      { id: "D", text: "Model envía 'HTTP 404' directamente al Usuario.", isCorrect: false }
    ],
    explanation: "Página 10 (diagrama oficial): la flecha de Controller a View se titula 'Send Data'. La flecha de Controller a Model se titula 'Request Information' y la de vuelta del Model al Controller se titula 'Response Information'. Del User al Controller va 'Request' y de View al User va 'Response'.",
    distractors: {
      B: "Términos inventados sin correspondencia en el esquema.",
      C: "En el diagrama la View no tiene flecha directa hacia el Model.",
      D: "El Model no envía respuestas HTTP al usuario directamente."
    },
    trapNote: "Pregunta hiper-específica de examen sobre las flechas del diagrama: Controller pide información ('Request Information'), Model responde ('Response Information') y Controller envía datos a View ('Send Data')."
  },
  {
    id: 42,
    level: "basico",
    topic: 2,
    topicName: "Continuidad del Estudio de MVC",
    page: "Pág. 10",
    question: "Al final del apartado del Modelo Vista-Controlador, ¿qué indica el documento sobre cuándo se profundizará con más detalle en este patrón?",
    options: [
      { id: "A", text: "Se estudiará al aprender a instalar tarjetas gráficas en el servidor.", isCorrect: false },
      { id: "B", text: "Se estudia con más detalle al profundizar en el uso de los frameworks PHP.", isCorrect: true },
      { id: "C", text: "No se volverá a mencionar jamás en ningún curso de DAW ni DAM.", isCorrect: false },
      { id: "D", text: "Se estudiará únicamente al configurar el archivo httpd.conf de Apache.", isCorrect: false }
    ],
    explanation: "Página 10 literal: 'Se estudia con más detalle al profundizar en el uso de los frameworks PHP'. En temas posteriores se aplicará MVC con frameworks como Laravel o Symfony.",
    distractors: {
      A: "El hardware gráfico no se relaciona con MVC.",
      C: "MVC es la columna vertebral del desarrollo web en ciclos formativos.",
      D: "httpd.conf es configuración del servidor web, no de arquitectura de aplicación MVC."
    },
    trapNote: "Frase literal de cierre del punto 2 de la página 10: 'Se estudia con más detalle al profundizar en el uso de los frameworks PHP'."
  },

  // ==========================================================================
  // BLOQUE 3: TECNOLOGÍAS, PLATAFORMAS Y SERVIDORES WEB (Pág. 10-15)
  // ==========================================================================
  {
    id: 43,
    level: "medio",
    topic: 3,
    topicName: "Jakarta EE: Historia y Nombres",
    page: "Pág. 10",
    question: "¿Qué es Jakarta EE y qué nombres oficiales recibió sucesivamente a lo largo de su historia antes de su denominación actual?",
    options: [
      { id: "A", text: "Antes Windows EE y originalmente MS-DOS Web.", isCorrect: false },
      { id: "B", text: "Antes Java EE (Enterprise Edition) y originalmente J2EE; es una plataforma que reúne un conjunto de especificaciones, APIs y tecnologías para aplicaciones empresariales en Java.", isCorrect: true },
      { id: "C", text: "Antes PHP Enterprise y originalmente mod_php.", isCorrect: false },
      { id: "D", text: "Antes Node EE y originalmente Express 1.0.", isCorrect: false }
    ],
    explanation: "Página 10: 'Jakarta EE: antes Java EE (Enterprise Edition) y originalmente J2EE. Es una plataforma que reúne un conjunto de especificaciones, APIs y tecnologías para el desarrollo de aplicaciones empresariales en Java'.",
    distractors: {
      A: "Windows EE no existe.",
      C: "PHP no tiene relación con el origen de Jakarta EE.",
      D: "Node.js y Express son tecnologías basadas en JavaScript, ajenas a Java EE."
    },
    trapNote: "Evolución cronológica: J2EE -> Java EE -> Jakarta EE."
  },
  {
    id: 44,
    level: "medio",
    topic: 3,
    topicName: "Jakarta EE: Impulsores y Respaldo",
    page: "Pág. 10",
    question: "¿Qué fundación sin ánimo de lucro impulsa actualmente la plataforma Jakarta EE y qué empresas tecnológicas líderes la respaldan según el documento?",
    options: [
      { id: "A", text: "Impulsada por la Fundación Apache y respaldada por Microsoft y Apple.", isCorrect: false },
      { id: "B", text: "Está impulsada por la Fundación Eclipse y cuenta con el respaldo de empresas como Oracle, IBM o Red Hat.", isCorrect: true },
      { id: "C", text: "Impulsada por Google y respaldada por Meta y Twitter.", isCorrect: false },
      { id: "D", text: "Impulsada por la Free Software Foundation y respaldada exclusivamente por Canonical.", isCorrect: false }
    ],
    explanation: "Página 10: 'Está impulsada por la Fundación Eclipse y cuenta con el respaldo de empresas como Oracle, IBM o Red Hat. Una de sus grandes ventajas es la enorme cantidad de librerías y herramientas disponibles en Java, además de una amplia comunidad'.",
    distractors: {
      A: "Apache gestiona Tomcat/Geronimo, pero el estándar Jakarta EE lo gestiona la Fundación Eclipse.",
      C: "Google y Meta no son las entidades citadas en el texto para Jakarta EE.",
      D: "No la gestiona la FSF ni Canonical."
    },
    trapNote: "Memoriza: Entidad impulsora = Fundación Eclipse; Empresas de respaldo = Oracle, IBM, Red Hat."
  },
  {
    id: 45,
    level: "medio",
    topic: 3,
    topicName: "Jakarta EE: Servlets, JSP y EJB",
    page: "Pág. 10-11, 14",
    question: "Respecto a Jakarta EE (Java EE), ¿qué componente se encarga específicamente de encapsular la LÓGICA DE NEGOCIO y cuáles se orientan a la GENERACIÓN DINÁMICA DE PÁGINAS?",
    options: [
      { id: "A", text: "Servlets encapsulan la lógica de negocio; EJB y JSP generan páginas web.", isCorrect: false },
      { id: "B", text: "EJB (Enterprise JavaBeans) encapsulan la lógica de negocio; Servlets y JSP se orientan a la generación dinámica de páginas web.", isCorrect: true },
      { id: "C", text: "phpMyAdmin encapsula la lógica de negocio; Apache Geronimo genera páginas web.", isCorrect: false },
      { id: "D", text: "CSS encapsula la lógica de negocio; HTML genera las bases de datos.", isCorrect: false }
    ],
    explanation: "Páginas 10-11 literal: 'Entre sus tecnologías más conocidas están Servlets y JSP (orientadas a la generación dinámica de páginas web) y EJB (Enterprise JavaBeans), que encapsulan la lógica de negocio de las aplicaciones'.",
    distractors: {
      A: "Al revés: Servlets y JSP generan páginas; EJB lleva la lógica de negocio.",
      C: "phpMyAdmin es una aplicación PHP para MySQL.",
      D: "CSS y HTML son tecnologías de presentación."
    },
    trapNote: "Distinción crucial de examen: Servlets y JSP = generación de páginas; EJB = lógica de negocio."
  },
  {
    id: 46,
    level: "medio",
    topic: 3,
    topicName: "Servidores Completos vs. Contenedores de Servlets",
    page: "Pág. 14",
    question: "¿Qué diferencia existe en la plataforma Jakarta EE entre un 'servidor de aplicaciones completo' y un 'contenedor de servlets'?",
    options: [
      { id: "A", text: "Los contenedores de servlets solo funcionan en Windows y los servidores completos solo en Linux.", isCorrect: false },
      { id: "B", text: "Los servidores de aplicaciones completos implementan todas las especificaciones de la plataforma, mientras que los contenedores de servlets solo soportan parte de la especificación y resultan más ligeros.", isCorrect: true },
      { id: "C", text: "Los contenedores de servlets ejecutan código PHP y los completos ejecutan código C#.", isCorrect: false },
      { id: "D", text: "Un servidor completo no requiere máquina virtual de Java.", isCorrect: false }
    ],
    explanation: "Página 14: 'Para ejecutar aplicaciones Jakarta EE podemos usar: Servidores de aplicaciones completos, que implementan todas las especificaciones de la plataforma. Contenedores de servlets, que solo soportan parte de la especificación y resultan más ligeros. La elección depende del tamaño y las tecnologías que requiera la aplicación'.",
    distractors: {
      A: "Ambos son multiplataforma (Java corre en cualquier SO con JVM).",
      C: "Ambos pertenecen al ecosistema Java, no a PHP ni C#.",
      D: "Todo el ecosistema Java requiere JVM."
    },
    trapNote: "Contenedor de servlets = soporte parcial (ej. Tomcat soportando Servlets/JSP) y más ligero."
  },
  {
    id: 47,
    level: "medio",
    topic: 3,
    topicName: "Servidores Java EE: Comerciales vs. Código Abierto",
    page: "Pág. 14-15",
    question: "Dentro de los servidores de aplicaciones Jakarta EE citados en el tema, ¿cuáles clasifica el documento como comerciales y cuáles como de código abierto?",
    options: [
      { id: "A", text: "Comerciales: GlassFish y WildFly; Código abierto: WebSphere y WebLogic.", isCorrect: false },
      { id: "B", text: "Comerciales: IBM WebSphere y ORACLE WebLogic; Código abierto: JBoss/WildFly, GlassFish y Apache Geronimo.", isCorrect: true },
      { id: "C", text: "Comerciales: Apache Geronimo; Código abierto: Microsoft IIS.", isCorrect: false },
      { id: "D", text: "Comerciales: XAMPP; Código abierto: Node.js.", isCorrect: false }
    ],
    explanation: "Páginas 14-15: 'Entre los servidores de aplicaciones Java EE más conocidos se encuentran las soluciones comerciales IBM WebSphere y ORACLE WebLogic, y las de código abierto como JBoss/WildFly, GlassFish o Apache Geronimo'.",
    distractors: {
      A: "Está invertido: WebSphere y WebLogic son comerciales.",
      C: "Geronimo es de Apache (código abierto); IIS es de Microsoft.",
      D: "XAMPP no es un servidor Java EE."
    },
    trapNote: "Comerciales = IBM WebSphere, Oracle WebLogic. Código abierto = JBoss/WildFly, GlassFish, Apache Geronimo."
  },
  {
    id: 48,
    level: "avanzado",
    topic: 3,
    topicName: "Servidor Apache Geronimo",
    page: "Pág. 14-15",
    question: "Dentro de las soluciones de código abierto para Java EE, ¿cuál es el detalle singular que el documento señala sobre Apache Geronimo?",
    options: [
      { id: "A", text: "Que es el servidor oficial recomendado para este curso por su alta velocidad.", isCorrect: false },
      { id: "B", text: "Que este último lleva años inactivo.", isCorrect: true },
      { id: "C", text: "Que solo puede ejecutarse en ordenadores portátiles con procesadores Intel.", isCorrect: false },
      { id: "D", text: "Que fue renombrado a Express.js tras ser adquirido por Red Hat.", isCorrect: false }
    ],
    explanation: "Página 15 literal: '...y las de código abierto como JBoss/WildFly, GlassFish o Apache Geronimo (este último lleva años inactivo)'.",
    distractors: {
      A: "El servidor recomendado para el curso en local es Apache HTTP Server mediante XAMPP.",
      C: "Java es multiplataforma.",
      D: "Express.js es de Node.js, nada que ver con Apache Geronimo."
    },
    trapNote: "¡Pregunta trampa de detalle puro! Muchos alumnos olvidan el apunte entre paréntesis sobre Apache Geronimo."
  },
  {
    id: 49,
    level: "basico",
    topic: 3,
    topicName: "Pila AMP y Lenguaje más Empleado",
    page: "Pág. 11",
    question: "¿Qué significan las siglas de la arquitectura AMP y cuál es el lenguaje de programación más empleado de los tres que contempla?",
    options: [
      { id: "A", text: "Apache, MongoDB y PostgreSQL; el más empleado es Python.", isCorrect: false },
      { id: "B", text: "Apache (servidor web), MySQL/MariaDB (base de datos) y PHP/Perl/Python (lenguaje); siendo PHP el más empleado de los tres.", isCorrect: true },
      { id: "C", text: "Android, MariaDB y Pascal; el más empleado es Pascal.", isCorrect: false },
      { id: "D", text: "Apple, Microsoft y Perl; el más empleado es Perl.", isCorrect: false }
    ],
    explanation: "Página 11: 'AMP son las siglas de Apache, MySQL/MariaDB y PHP/Perl/Python. Las dos primeras siglas hacen referencia al servidor web (Apache) y al servidor de base de datos (MySQL o MariaDB). La última se corresponde con el lenguaje de programación utilizado, que puede ser PHP, Perl o Python, siendo PHP el más empleado de los tres'.",
    distractors: {
      A: "M es MySQL/MariaDB, no MongoDB.",
      C: "Android y Pascal no forman parte de la pila AMP.",
      D: "Significado ficticio."
    },
    trapNote: "Tres opciones para la 'P': PHP, Perl o Python, pero el temario recalca: 'siendo PHP el más empleado de los tres'."
  },
  {
    id: 50,
    level: "basico",
    topic: 3,
    topicName: "Variantes de AMP por Sistema Operativo",
    page: "Pág. 11",
    question: "Dependiendo del sistema operativo que se utilice para el servidor en la pila AMP, ¿qué acrónimos se utilizan para Linux, Windows y Mac?",
    options: [
      { id: "A", text: "L-AMP (Linux), W-AMP (Windows) y M-AMP (Mac).", isCorrect: true },
      { id: "B", text: "UNIX-AMP, DOS-AMP y IOS-AMP.", isCorrect: false },
      { id: "C", text: "LIN-AMP, WIN-AMP y MAC-AMP.", isCorrect: false },
      { id: "D", text: "XAMPP-1, XAMPP-2 y XAMPP-3.", isCorrect: false }
    ],
    explanation: "Página 11: 'Dependiendo del sistema operativo que se utilice para el servidor, se utilizan las siglas LAMP (para Linux), WAMP (para Windows) o MAMP (para Mac)'.",
    distractors: {
      B: "Acrónimos incorrectos e inventados.",
      C: "Winamp era un reproductor de música de los años 90; la pila web es WAMP.",
      D: "XAMPP agrupa las plataformas en una sola instalación bajo la 'X'."
    },
    trapNote: "LAMP = Linux; WAMP = Windows; MAMP = Mac."
  },
  {
    id: 51,
    level: "medio",
    topic: 3,
    topicName: "Gestor Alternativo en la Pila AMP",
    page: "Pág. 11",
    question: "Dentro de la arquitectura de la pila AMP, ¿qué otro sistema gestor de bases de datos cita expresamente el documento como sustituto de MySQL?",
    options: [
      { id: "A", text: "Microsoft Access 97.", isCorrect: false },
      { id: "B", text: "PostgreSQL.", isCorrect: true },
      { id: "C", text: "Redis en modo volátil.", isCorrect: false },
      { id: "D", text: "SQLite embebido en una cinta magnética.", isCorrect: false }
    ],
    explanation: "Página 11 literal: 'También es posible usar otros componentes, como el gestor de bases de datos PostgreSQL en lugar de MySQL'.",
    distractors: {
      A: "Access no es un SGBD para pilas AMP en servidores.",
      C: "Redis es una base de datos clave-valor en memoria, no el SGBD citado en el texto.",
      D: "No se menciona SQLite sobre cinta magnética."
    },
    trapNote: "Sustituto explícito de MySQL en el temario: PostgreSQL."
  },
  {
    id: 52,
    level: "medio",
    topic: 3,
    topicName: "Características de la Plataforma AMP",
    page: "Pág. 11",
    question: "¿Qué características de tamaño de aplicación, aprendizaje y licencia definen a la arquitectura AMP?",
    options: [
      { id: "A", text: "Todos los componentes son de código cerrado propietario; requiere 5 años de aprendizaje y solo sirve para apps masivas de banca mundial.", isCorrect: false },
      { id: "B", text: "Todos los componentes son de código libre (open source); permite desarrollar aplicaciones de tamaño pequeño o mediano con un aprendizaje sencillo; su gran ventaja es su gran comunidad y la multitud de aplicaciones disponibles.", isCorrect: true },
      { id: "C", text: "Solo permite crear páginas de una sola línea de código sin estilos visuales.", isCorrect: false },
      { id: "D", text: "Requiere licencia comercial obligatoria de Oracle para poder descargar Apache.", isCorrect: false }
    ],
    explanation: "Página 11: 'Todos los componentes de esta arquitectura son de código libre (open source). Es una plataforma de programación que permite desarrollar aplicaciones de tamaño pequeño o mediano con un aprendizaje sencillo. Su gran ventaja es la gran comunidad que la soporta y la multitud de aplicaciones de código libre disponibles'.",
    distractors: {
      A: "Es de código abierto, aprendizaje sencillo y orientada a apps pequeñas/medianas.",
      C: "Permite aplicaciones completas como WordPress o Drupal.",
      D: "Apache es software libre gestionado por la Apache Software Foundation."
    },
    trapNote: "Tríada descriptiva de AMP: 1) Código libre, 2) Apps pequeñas o medianas con aprendizaje sencillo, 3) Gran comunidad y muchas aplicaciones open source (WordPress, etc.)."
  },
  {
    id: 53,
    level: "basico",
    topic: 3,
    topicName: "Acrónimo Detallado de XAMPP",
    page: "Pág. 11",
    question: "En el desglose literal del paquete XAMPP que aparece en la página 11, ¿qué representa exactamente cada letra?",
    options: [
      { id: "A", text: "X: XML, A: AJAX, M: MongoDB, P: Python, P: PostgreSQL.", isCorrect: false },
      { id: "B", text: "X: Multiplataforma (Windows, Linux, Mac), A: Apache, M: MySQL / MariaDB, P: PHP (lenguaje más utilizado), P: Perl (lenguaje menos usado hoy en día).", isCorrect: true },
      { id: "C", text: "X: Extensión, A: Adobe, M: Microsoft, P: Pascal, P: Prolog.", isCorrect: false },
      { id: "D", text: "X: Xcode, A: Apple, M: macOS, P: Python, P: PHP.", isCorrect: false }
    ],
    explanation: "Página 11: '¿Qué incluye XAMPP? X -> multiplataforma (funciona en Windows, Linux y Mac). A -> Apache (servidor web que atiende las peticiones). M -> MySQL / MariaDB (sistema gestor de base de datos). P -> PHP (lenguaje de programación de servidor más utilizado). P -> Perl (lenguajes de programación menos usado hoy en día)'.",
    distractors: {
      A: "X no es XML ni M es MongoDB en XAMPP.",
      C: "Términos ajenos al acrónimo de XAMPP.",
      D: "Xcode es un IDE de Apple, no la X de XAMPP."
    },
    trapNote: "Pregunta clásica: la X significa 'multiplataforma' (cross-platform), y las dos P son estrictamente PHP y Perl (con el matiz de que Perl es el menos usado hoy)."
  },
  {
    id: 54,
    level: "medio",
    topic: 3,
    topicName: "Sitio Oficial de Descarga de XAMPP",
    page: "Pág. 11",
    question: "¿Cuál es la URL oficial para descargar el paquete XAMPP indicada en el temario?",
    options: [
      { id: "A", text: "https://www.mysql.com/downloads/", isCorrect: false },
      { id: "B", text: "https://www.apachefriends.org/", isCorrect: true },
      { id: "C", text: "https://code.visualstudio.com/", isCorrect: false },
      { id: "D", text: "https://www.php.net/manual/", isCorrect: false }
    ],
    explanation: "Página 11 literal al pie del desglose de XAMPP: 'Descargar desde: https://www.apachefriends.org/'.",
    distractors: {
      A: "mysql.com es la web de MySQL.",
      C: "code.visualstudio.com es la web para descargar Visual Studio Code.",
      D: "php.net es el portal oficial y manual de PHP."
    },
    trapNote: "Pregunta de examen sobre el dominio oficial: Apache Friends (apachefriends.org)."
  },
  {
    id: 55,
    level: "medio",
    topic: 3,
    topicName: "Definición y Lenguajes de CGI",
    page: "Pág. 11-12",
    question: "¿Qué es CGI (Common Gateway Interface) y en qué lenguajes de programación puede estar escrito un programa CGI?",
    options: [
      { id: "A", text: "Es un chip de silicio; solo puede programarse en lenguaje binario directo.", isCorrect: false },
      { id: "B", text: "Es un estándar que permite a un servidor web comunicarse con programas externos para generar contenido dinámico; puede estar escrito en diferentes lenguajes como C, C++, Perl, Python o PHP, entre otros.", isCorrect: true },
      { id: "C", text: "Es un editor de texto exclusivo de Microsoft Windows que solo admite C#.", isCorrect: false },
      { id: "D", text: "Es un sistema gestor de bases de datos no relacional que solo admite JSON.", isCorrect: false }
    ],
    explanation: "Página 11: 'CGI (Common Gateway Interface) es un estándar que permite a un servidor web comunicarse con programas externos para generar contenido dinámico. Un programa CGI puede estar escrito en diferentes lenguajes, como C, C++, Perl, Python o PHP, entre otros'.",
    distractors: {
      A: "CGI es una especificación de software e interfaz, no un chip.",
      C: "No es un editor de texto.",
      D: "No es una base de datos."
    },
    trapNote: "CGI es AGNOSTICO al lenguaje: define la interfaz de comunicación con programas externos escritos en prácticamente cualquier lenguaje."
  },
  {
    id: 56,
    level: "avanzado",
    topic: 3,
    topicName: "Inconveniente Crítico de Rendimiento de CGI",
    page: "Pág. 12, 14",
    question: "¿Cuál es el principal inconveniente de rendimiento del estándar CGI tradicional que motivó la aparición de FastCGI y módulos integrados?",
    options: [
      { id: "A", text: "Que los programas CGI solo podían ejecutarse durante las horas nocturnas del servidor.", isCorrect: false },
      { id: "B", text: "Que para cada petición se crea un nuevo proceso en el sistema operativo, lo que consume un elevado número de recursos y ralentiza las respuestas con tráfico simultáneo.", isCorrect: true },
      { id: "C", text: "Que los programas CGI no permitían devolver código HTML al navegador.", isCorrect: false },
      { id: "D", text: "Que requería obligatoriamente una pantalla táctil conectada a la torre del servidor.", isCorrect: false }
    ],
    explanation: "Páginas 12 y 14: 'El principal inconveniente de CGI es que para cada petición se crea un nuevo proceso, lo que consume más recursos y ralentiza las respuestas. Por este motivo, en las aplicaciones web modernas se utilizan habitualmente otros mecanismos y servidores de aplicaciones más eficientes'.",
    distractors: {
      A: "Los servidores atienden peticiones a cualquier hora.",
      C: "CGI genera HTML que el servidor envía de vuelta al cliente.",
      D: "Los servidores web habitualmente operan en modo headless (sin pantalla)."
    },
    trapNote: "Concepto clave absoluto: 'cada petición implica la creación de un nuevo proceso', provocando una sobrecarga masiva de CPU y memoria."
  },
  {
    id: 57,
    level: "medio",
    topic: 3,
    topicName: "Evolución y Declive de Perl",
    page: "Pág. 12",
    question: "Respecto al lenguaje Perl, ¿qué papel histórico desempeñó y cuál es su situación en la actualidad según el texto oficial?",
    options: [
      { id: "A", text: "Perl nunca se utilizó en la web y hoy es el lenguaje más usado en servidores Node.js.", isCorrect: false },
      { id: "B", text: "Tuvo un papel especialmente importante en los comienzos de la programación web mediante CGI, pero actualmente tiene una presencia mucho menor en el desarrollo web que tecnologías como PHP, Java, C# o JavaScript/Node.js.", isCorrect: true },
      { id: "C", text: "Perl es el único lenguaje compatible con Windows 11 para crear aplicaciones con ASP.NET Core.", isCorrect: false },
      { id: "D", text: "Fue creado por Microsoft para sustituir a C# en la Fundación Eclipse.", isCorrect: false }
    ],
    explanation: "Página 12 literal: 'Perl tuvo un papel especialmente importante en los comienzos de la programación web mediante CGI, pero actualmente tiene una presencia mucho menor en el desarrollo web que tecnologías como PHP, Java, C# o JavaScript/Node.js'.",
    distractors: {
      A: "Perl fue pionero indiscutible en la web CGI en los años 90.",
      C: "ASP.NET Core utiliza C#, no Perl.",
      D: "Perl fue creado por Larry Wall y no tiene relación con ASP.NET ni Eclipse."
    },
    trapNote: "Contraste histórico: Gran protagonismo en los orígenes de CGI vs Presencia residual hoy frente a PHP, Java, C# y Node.js."
  },
  {
    id: 58,
    level: "avanzado",
    topic: 3,
    topicName: "Soluciones al Problema de Procesos: FastCGI y Módulos",
    page: "Pág. 14",
    question: "Para solucionar el problema de creación de procesos por petición de CGI, ¿qué soluciones técnicas surgieron según el temario?",
    options: [
      { id: "A", text: "Obligar a los usuarios a visitar las páginas de una en una mediante un sistema de turnos por teléfono.", isCorrect: false },
      { id: "B", text: "Soluciones como FastCGI y módulos específicos que permiten ejecutar el código dentro del propio servidor web sin crear procesos nuevos (por ejemplo, mod_perl para Perl en Apache).", isCorrect: true },
      { id: "C", text: "Desactivar el protocolo HTTP y utilizar correos electrónicos automáticos.", isCorrect: false },
      { id: "D", text: "Reescribir el sistema operativo Linux en lenguaje JavaScript.", isCorrect: false }
    ],
    explanation: "Página 14: 'Para mejorar el rendimiento surgieron soluciones como FastCGI y módulos específicos que permiten ejecutar el código dentro del propio servidor web sin crear procesos nuevos. Por ejemplo, mod_perl para Perl en Apache'.",
    distractors: {
      A: "Distractor absurdo.",
      C: "La comunicación web sigue basándose en HTTP.",
      D: "Linux está escrito principalmente en C."
    },
    trapNote: "Dos mecanismos para evitar crear procesos: 1) FastCGI (procesos persistentes) y 2) Módulos integrados (como mod_perl o mod_php)."
  },
  {
    id: 59,
    level: "medio",
    topic: 3,
    topicName: "Autoevaluación Oficial del PDF: Cualquier Lenguaje",
    page: "Pág. 13",
    question: "Pregunta literal de autoevaluación incluida en la página 13 del PDF: ¿Cuál de estas tecnologías permite la ejecución por el servidor web de programas escritos en cualquier lenguaje?",
    options: [
      { id: "A", text: "Java EE", isCorrect: false },
      { id: "B", text: "PHP", isCorrect: false },
      { id: "C", text: "AMP", isCorrect: false },
      { id: "D", text: "CGI", isCorrect: true }
    ],
    explanation: "Página 13 (Autoevaluación oficial del documento): '¿Cuál de estas tecnologías permite la ejecución por el servidor web de programas escritos en cualquier lenguaje? Respuesta: CGI'. CGI es un estándar de comunicación entre el servidor web y programas externos que no impone el lenguaje en que están escritos.",
    distractors: {
      A: "Java EE requiere la plataforma y lenguaje Java.",
      B: "PHP ejecuta código en lenguaje PHP.",
      C: "AMP es una pila concreta basada en Apache, MySQL y PHP/Perl/Python."
    },
    trapNote: "¡Esta pregunta cae idéntica en los exámenes oficiales porque es la autoevaluación del propio tema!"
  },
  {
    id: 60,
    level: "medio",
    topic: 3,
    topicName: "ASP.NET Core: Características y Evolución",
    page: "Pág. 12",
    question: "¿Qué es ASP.NET Core, qué lenguaje utiliza principalmente y qué diferencia fundamental presenta respecto a las versiones antiguas de ASP.NET?",
    options: [
      { id: "A", text: "Es un plugin de WordPress para PHP; utiliza JavaScript y solo funciona en Android.", isCorrect: false },
      { id: "B", text: "Es el framework web de Microsoft para aplicaciones y APIs dentro de .NET; utiliza principalmente C#; a diferencia de las versiones antiguas (que eran solo para Windows), es de código abierto y multiplataforma (ejecuta en Windows, Linux o macOS).", isCorrect: true },
      { id: "C", text: "Es un compilador comercial de pago que exige licencias de servidor Windows para poder ejecutarse en Linux.", isCorrect: false },
      { id: "D", text: "Es un contenedor de servlets desarrollado por la Fundación Eclipse para sustituir a Tomcat.", isCorrect: false }
    ],
    explanation: "Página 12: 'ASP.NET Core es el framework web de Microsoft para el desarrollo de aplicaciones y servicios web. Forma parte del ecosistema .NET... utiliza principalmente el lenguaje de programación C#. A diferencia de las versiones antiguas de ASP.NET, ASP.NET Core es multiplataforma, por lo que las aplicaciones pueden ejecutarse en Windows, Linux o macOS... Una de sus principales ventajas es que .NET y ASP.NET Core son de código abierto y multiplataforma'.",
    distractors: {
      A: "ASP.NET Core es el framework oficial de Microsoft en .NET, no un plugin de WordPress.",
      C: "ASP.NET Core es open source y gratuito.",
      D: "Los contenedores de servlets pertenecen a Java/Jakarta EE."
    },
    trapNote: "Contraste histórico de examen: ASP.NET clásico (propietario, exclusivo de Windows) vs ASP.NET Core (código abierto, multiplataforma: Windows, Linux, macOS)."
  },
  {
    id: 61,
    level: "medio",
    topic: 3,
    topicName: "ASP.NET Core: Servidor Web y Bases de Datos",
    page: "Pág. 12",
    question: "En entornos Windows, ¿qué servidor web puede utilizarse con ASP.NET Core y con qué sistemas gestores de bases de datos puede trabajar según el texto?",
    options: [
      { id: "A", text: "Servidor: Apache Tomcat; Bases de datos: Microsoft Access exclusivamente.", isCorrect: false },
      { id: "B", text: "Servidor web: IIS (Internet Information Services); Bases de datos: SQL Server, MySQL o PostgreSQL, disponiendo de herramientas como Visual Studio.", isCorrect: true },
      { id: "C", text: "Servidor: Node.js; Bases de datos: únicamente hojas de cálculo de Excel.", isCorrect: false },
      { id: "D", text: "Servidor: Apache Geronimo; Bases de datos: BIND DNS.", isCorrect: false }
    ],
    explanation: "Página 12: 'En Windows puede utilizarse IIS (Internet Information Services) como servidor web. ASP.NET Core puede trabajar con diferentes sistemas gestores de bases de datos, como SQL Server, MySQL o PostgreSQL, y cuenta con un amplio ecosistema... disponen de herramientas de desarrollo como Visual Studio'.",
    distractors: {
      A: "Tomcat es para Java, no el servidor nativo de Windows para ASP.NET.",
      C: "Node.js es un runtime de JavaScript.",
      D: "Geronimo es de Java y BIND es un servicio de nombres de dominio."
    },
    trapNote: "IIS = Internet Information Services (servidor web nativo de Windows para ASP.NET Core). SGBD: SQL Server, MySQL o PostgreSQL."
  },
  {
    id: 62,
    level: "basico",
    topic: 3,
    topicName: "Node.js y sus Frameworks",
    page: "Pág. 12",
    question: "Según el documento, ¿qué es Node.js, cuál es su principal ventaja y cuáles son dos de sus frameworks más conocidos?",
    options: [
      { id: "A", text: "Un gestor de bases de datos relacional; ventaja: no usa disco duro; frameworks: Hibernate y JPA.", isCorrect: false },
      { id: "B", text: "Un entorno de ejecución de código abierto que permite ejecutar programas escritos en JavaScript en el lado servidor (fuera del navegador); ventaja: desarrollar aplicaciones del lado servidor con JavaScript; frameworks: Express.js y NestJS.", isCorrect: true },
      { id: "C", text: "Un compilador de Java a código binario; frameworks: Laravel y Symfony.", isCorrect: false },
      { id: "D", text: "Un sistema operativo para servidores web desarrollado por Oracle.", isCorrect: false }
    ],
    explanation: "Página 12: 'Node.js es un entorno de ejecución de código abierto que permite ejecutar programas escritos en JavaScript en el lado servidor, es decir, fuera del navegador... Entre los frameworks más conocidos se encuentran Express.js y NestJS. Una de sus principales ventajas es que permite desarrollar aplicaciones del lado servidor utilizando JavaScript'.",
    distractors: {
      A: "Node.js no es una base de datos.",
      C: "Laravel y Symfony son de PHP.",
      D: "Node.js no es un sistema operativo."
    },
    trapNote: "Conceptos clave: JavaScript ejecutado 'en el lado servidor, fuera del navegador' + frameworks Express.js y NestJS."
  },
  {
    id: 63,
    level: "avanzado",
    topic: 3,
    topicName: "Criterios de Elección de Arquitectura Web (2.1.1)",
    page: "Pág. 13",
    question: "En el apartado 2.1.1 sobre 'Selección de una arquitectura de programación web', ¿cuál de los siguientes aspectos NO forma parte de las consideraciones que el desarrollador debe plantearse antes de comenzar?",
    options: [
      { id: "A", text: "¿Qué tamaño y complejidad tiene el proyecto y qué lenguajes de programación conozco?", isCorrect: false },
      { id: "B", text: "¿Dónde se desplegará la aplicación: servidor propio, máquina virtual, contenedor o nube?", isCorrect: false },
      { id: "C", text: "¿Qué requisitos de seguridad, rendimiento, escalabilidad y mantenimiento tiene el proyecto, y qué costes y licencias aplican?", isCorrect: false },
      { id: "D", text: "¿Qué tarjeta de sonido dedicada debe instalar obligatoriamente el cliente web para decodificar las etiquetas HTML de la página?", isCorrect: true }
    ],
    explanation: "Página 13 lista las preguntas clave: tamaño/complejidad, lenguajes que conozco, necesidad de aprender nueva tecnología, frameworks disponibles, código abierto vs comercial, costes/licencias, individual vs equipo, servidor web y SGBD, entorno de despliegue (propio, VM, contenedor, nube), seguridad/rendimiento/escalabilidad/mantenimiento, experiencia del equipo y licencia del software. La tarjeta de sonido no tiene ninguna relación.",
    distractors: {
      A: "Figura en la lista de la página 13.",
      B: "Figura en la lista de la página 13.",
      C: "Figura en la lista de la página 13."
    },
    trapNote: "Pregunta de exclusión típica sobre los 12-13 aspectos de selección de arquitectura de la página 13."
  },
  {
    id: 64,
    level: "basico",
    topic: 3,
    topicName: "Protocolo HTTP y el Servidor Web",
    page: "Pág. 14",
    question: "En la sección 2.2 'Integración con el Servidor Web', ¿cómo se describe el papel del protocolo HTTP y la función del servidor web?",
    options: [
      { id: "A", text: "HTTP es un lenguaje de programación compilado; el servidor web solo almacena contraseñas en texto plano.", isCorrect: false },
      { id: "B", text: "La comunicación entre cliente y servidor se realiza mediante HTTP, que actúa como vínculo; cada acción (como enviar un formulario) se transmite como petición HTTP y la respuesta llega como respuesta HTTP. El servidor web recibe las peticiones, decide cómo procesarlas y delega en otros componentes si es necesario.", isCorrect: true },
      { id: "C", text: "HTTP se utiliza exclusivamente para transferir ficheros comprimidos por FTP.", isCorrect: false },
      { id: "D", text: "El servidor web es un módulo que solo puede ejecutarse en el navegador del cliente.", isCorrect: false }
    ],
    explanation: "Página 14: 'La comunicación entre un cliente web (navegador) y un servidor web se realiza mediante el protocolo HTTP, que actúa como vínculo entre el usuario y la aplicación web. Cada acción que realiza el usuario —como enviar un formulario— se transmite como una petición HTTP, y la respuesta del servidor llega de vuelta como una respuesta HTTP. En el lado del servidor, estas peticiones son recibidas y gestionadas por el servidor web (o servidor HTTP), que decide cómo procesarlas y, si es necesario, delegar en otros componentes...'.",
    distractors: {
      A: "HTTP es un protocolo de red de la capa de aplicación, no un lenguaje.",
      C: "HTTP y FTP son protocolos distintos.",
      D: "El servidor web reside y se ejecuta en el servidor."
    },
    trapNote: "HTTP = vínculo cliente-servidor (petición HTTP <-> respuesta HTTP). Servidor web = gestor que recibe y delega en componentes ejecutores."
  },
  {
    id: 65,
    level: "medio",
    topic: 3,
    topicName: "Integración de PHP en el Servidor",
    page: "Pág. 14",
    question: "Respecto a la integración de PHP con el servidor web, ¿qué opciones cita el documento como las más habituales y eficientes en entornos tipo AMP?",
    options: [
      { id: "A", text: "Ejecutarlo únicamente como script CGI tradicional generando un nuevo proceso por cada petición.", isCorrect: false },
      { id: "B", text: "Aunque podría ejecutarse como CGI, lo más habitual en entornos AMP es usar el módulo mod_php (o en versiones modernas, PHP-FPM con FastCGI), que es más eficiente.", isCorrect: true },
      { id: "C", text: "Compilarlo obligatoriamente a applets de Java dentro de Microsoft IIS.", isCorrect: false },
      { id: "D", text: "Ejecutarlo dentro de la máquina virtual de NetBeans sin servidor web.", isCorrect: false }
    ],
    explanation: "Página 14: 'Con PHP ocurre algo similar: aunque podría ejecutarse como CGI, lo más habitual en entornos tipo AMP es usar el módulo mod_php (o en versiones modernas, PHP-FPM con FastCGI), que es más eficiente'.",
    distractors: {
      A: "CGI se evita en entornos de producción por su sobrecarga.",
      C: "PHP no genera applets de Java.",
      D: "NetBeans es un IDE, no un entorno de ejecución de servidor."
    },
    trapNote: "Entornos AMP clásicos: módulo mod_php. Versiones modernas de alto rendimiento: PHP-FPM con FastCGI."
  },
  {
    id: 66,
    level: "avanzado",
    topic: 3,
    topicName: "Integración de Python: mod_python y WSGI",
    page: "Pág. 14",
    question: "En relación con la integración de aplicaciones escritas en Python en el servidor web, ¿cuál es el estándar actual según el documento tras haber quedado descontinuado mod_python?",
    options: [
      { id: "A", text: "FastPHP integrado en el kernel de Windows.", isCorrect: false },
      { id: "B", text: "WSGI (Web Server Gateway Interface), un estándar que define cómo debe comunicarse un servidor web con una aplicación Python, normalmente a través de un servidor de aplicaciones situado detrás de un servidor web (Apache o Nginx) que actúa como proxy inverso.", isCorrect: true },
      { id: "C", text: "Enterprise PythonBeans (EPB).", isCorrect: false },
      { id: "D", text: "Compilación obligatoria a código máquina en tiempo de arranque con GCC.", isCorrect: false }
    ],
    explanation: "Página 14: 'Para Python existía un enfoque parecido llamado mod_python, aunque el proyecto está descontinuado desde hace años; hoy se usa WSGI (Web Server Gateway Interface), un estándar que define cómo debe comunicarse un servidor web con una aplicación Python, normalmente a través de un servidor de aplicaciones situado detrás de un servidor web (Apache o Nginx) que actúa como proxy inverso'.",
    distractors: {
      A: "FastPHP no existe.",
      C: "EPB es un nombre inventado distractor de EJB.",
      D: "Python se ejecuta en su propio runtime interpretado, no se compila a código máquina con GCC."
    },
    trapNote: "Términos clave: WSGI + proxy inverso (Apache/Nginx) + servidor de aplicaciones. Recuerda que mod_python está descontinuado hace años."
  },

  // ==========================================================================
  // BLOQUE 4: MODELOS DE EJECUCIÓN DE LENGUAJES DE SERVIDOR (Pág. 15-16)
  // ==========================================================================
  {
    id: 67,
    level: "medio",
    topic: 4,
    topicName: "Los Tres Tipos de Lenguajes de Servidor",
    page: "Pág. 15",
    question: "Los lenguajes de programación web se diferencian, entre otras cosas, por cómo se ejecutan en el servidor. ¿Cuáles son los tres tipos en que los clasifica el temario?",
    options: [
      { id: "A", text: "1. Lenguajes de cliente, 2. Lenguajes de estilo, 3. Lenguajes de marcado.", isCorrect: false },
      { id: "B", text: "1. Lenguajes de guiones o scripting, 2. Lenguajes compilados a código máquina, 3. Lenguajes compilados a código intermedio.", isCorrect: true },
      { id: "C", text: "1. Lenguajes orientados a objetos, 2. Lenguajes funcionales, 3. Lenguajes lógicos.", isCorrect: false },
      { id: "D", text: "1. Lenguajes comerciales, 2. Lenguajes educativos, 3. Lenguajes obsoletos.", isCorrect: false }
    ],
    explanation: "Página 15: 'Los lenguajes de programación web se diferencian, entre otras cosas, por cómo se ejecutan en el servidor. Hay tres tipos: Lenguajes de guiones o scripting... Lenguajes compilados a código máquina... Lenguajes compilados a código intermedio'.",
    distractors: {
      A: "HTML y CSS son de marcado y estilo, no lenguajes de ejecución en servidor.",
      C: "Clasificación por paradigmas de programación, no por modelo de ejecución en servidor.",
      D: "Clasificación no técnica."
    },
    trapNote: "Tríada de modelos de ejecución en servidor: Scripting / Código máquina / Código intermedio."
  },
  {
    id: 68,
    level: "medio",
    topic: 4,
    topicName: "Lenguajes de Scripting: Ventajas y Desventajas",
    page: "Pág. 15",
    question: "¿Cómo se ejecutan los lenguajes de guiones o scripting (PHP, Python, Perl, ASP clásico) y cuál es su principal ventaja e inconveniente?",
    options: [
      { id: "A", text: "Se compilan directamente a binario de máquina; ventaja: velocidad extrema; inconveniente: poca portabilidad.", isCorrect: false },
      { id: "B", text: "Se ejecutan directamente desde su código fuente a través de un intérprete (archivos de texto plano); ventaja: portabilidad y ver cambios de inmediato; inconveniente: menor rendimiento, ya que cada petición se interpreta de nuevo.", isCorrect: true },
      { id: "C", text: "Se ejecutan en una máquina virtual con compilación JIT obligatoria; ventaja: balance intermedio.", isCorrect: false },
      { id: "D", text: "Requieren obligatoriamente la creación de un nuevo proceso CGI en cada línea de código.", isCorrect: false }
    ],
    explanation: "Página 15: 'Lenguajes de guiones o scripting: estos lenguajes se ejecutan directamente desde su código fuente a través de un intérprete, que procesa las instrucciones y genera la página web. Normalmente se almacenan en archivos de texto plano. Ejemplos típicos son PHP, Python, Perl y ASP clásico. Su principal ventaja es la portabilidad y la posibilidad de modificar el código y ver los cambios de inmediato, pero su rendimiento suele ser inferior al de los lenguajes compilados, ya que cada petición se interpreta de nuevo'.",
    distractors: {
      A: "Ese es el modelo compilado a código máquina (C).",
      C: "Ese es el modelo de código intermedio (Java/.NET).",
      D: "Con módulos como mod_php o FastCGI no crean procesos CGI por línea."
    },
    trapNote: "Ventaja de scripting: Portabilidad e inmediatez (modificar y ver al instante sin compilar). Inconveniente: Menor rendimiento por reinterpretación."
  },
  {
    id: 69,
    level: "avanzado",
    topic: 4,
    topicName: "Lenguajes Compilados a Código Máquina (C)",
    page: "Pág. 15",
    question: "En el desarrollo web, ¿cuáles son los dos inconvenientes específicos de utilizar lenguajes compilados a código máquina (como C)?",
    options: [
      { id: "A", text: "No disponen de tipos de datos enteros y no permiten escribir archivos en el disco.", isCorrect: false },
      { id: "B", text: "Poca portabilidad (un binario compilado para una plataforma concreta no funciona en otra sin recompilar) y poca integración con el servidor web (normalmente cada petición genera un nuevo proceso vía CGI, aumentando el consumo de recursos).", isCorrect: true },
      { id: "C", text: "Consumen menos memoria RAM que los scripts y no pueden enviar cabeceras HTTP.", isCorrect: false },
      { id: "D", text: "No pueden ser leídos por los programadores una vez guardados en texto plano.", isCorrect: false }
    ],
    explanation: "Página 15: 'Son muy rápidos, pero tienen dos inconvenientes: por un lado, poca portabilidad, ya que un binario compilado para una plataforma concreta no funciona en otra sin recompilar; por otro, poca integración con el servidor web, ya que normalmente cada petición genera un nuevo proceso (típicamente vía CGI), lo que aumenta el consumo de recursos'.",
    distractors: {
      A: "C tiene enteros nativos y maneja ficheros con fopen/fwrite.",
      C: "Son muy rápidos, pero la afirmación mezcla conceptos erróneos.",
      D: "El código fuente en C es texto plano perfectamente legible antes de compilar."
    },
    trapNote: "Memoriza los 2 problemas de C en web: 1) Poca portabilidad (recompilar para cada SO/arquitectura), 2) Poca integración web (nuevo proceso por petición vía CGI)."
  },
  {
    id: 70,
    level: "avanzado",
    topic: 4,
    topicName: "Código Intermedio y Compilación JIT",
    page: "Pág. 15",
    question: "¿Cómo funcionan los lenguajes compilados a código intermedio (Java, ASP.NET) y qué es la compilación JIT (Just-In-Time)?",
    options: [
      { id: "A", text: "Se traducen directamente a código máquina en el navegador cliente mediante WebAssembly.", isCorrect: false },
      { id: "B", text: "El código fuente se convierte a un código intermedio independiente del procesador, ejecutado en una máquina virtual que puede además compilar en caliente (JIT, Just-In-Time) las partes más usadas del código a código máquina para mejorar el rendimiento.", isCorrect: true },
      { id: "C", text: "El código se envía por correo al administrador del servidor para que lo apruebe antes de cada petición.", isCorrect: false },
      { id: "D", text: "Son lenguajes que se interpretan línea por línea sin generar ningún archivo binario intermedio.", isCorrect: false }
    ],
    explanation: "Página 15: 'aquí, el código fuente se convierte a un código intermedio independiente del procesador, que luego se ejecuta en una máquina virtual, la cual puede además compilar en caliente (JIT, Just-In-Time) las partes más usadas del código a código máquina para mejorar el rendimiento. Esto ocurre, por ejemplo, en aplicaciones Java (servlets, JSP, Jakarta EE) y ASP.NET'.",
    distractors: {
      A: "La compilación y ejecución suceden en el servidor, no en el cliente.",
      C: "Distractor absurdo.",
      D: "Ese es el funcionamiento de los lenguajes de scripting puro."
    },
    trapNote: "Concepto clave: Bytecode/código intermedio independiente de CPU + Máquina Virtual + JIT (compilación en caliente de fragmentos más usados)."
  },
  {
    id: 71,
    level: "medio",
    topic: 4,
    topicName: "Resumen Comparativo de los Modelos de Ejecución",
    page: "Pág. 15",
    question: "En el resumen comparativo de la página 15, ¿cuál es la fortaleza distintiva de cada modelo y cuál es el ideal para aplicaciones web de mayor tamaño y complejidad?",
    options: [
      { id: "A", text: "Scripting destaca por velocidad; Máquina por portabilidad; Código intermedio es solo para pruebas.", isCorrect: false },
      { id: "B", text: "Los lenguajes scripting destacan por su simplicidad y portabilidad; los compilados a máquina por su velocidad; y los compilados a código intermedio combinan rendimiento con compatibilidad entre distintas plataformas, siendo ideales para aplicaciones de mayor tamaño y complejidad.", isCorrect: true },
      { id: "C", text: "Los tres modelos son completamente idénticos en rendimiento y consumo de memoria.", isCorrect: false },
      { id: "D", text: "El único modelo aceptado internacionalmente para cualquier web es el código máquina en C puro.", isCorrect: false }
    ],
    explanation: "Página 15 (resumen literal): 'En resumen, los lenguajes scripting destacan por su simplicidad y portabilidad, los compilados a máquina por su velocidad, y los compilados a código intermedio combinan rendimiento con compatibilidad entre distintas plataformas, siendo ideales para aplicaciones web de mayor tamaño y complejidad'.",
    distractors: {
      A: "Está totalmente invertido.",
      C: "Existen marcadas diferencias técnicas entre interpretar, compilar a binario nativo y compilar a bytecode.",
      D: "C no es el único modelo ni el más común en desarrollo web actual."
    },
    trapNote: "Frase de síntesis del tema: Scripting = simplicidad/portabilidad; Máquina = velocidad; Código intermedio = rendimiento + compatibilidad (ideal para grandes y complejas)."
  },
  {
    id: 72,
    level: "medio",
    topic: 4,
    topicName: "Código Embebido en Lenguaje de Marcas",
    page: "Pág. 15-16",
    question: "¿En qué consiste la técnica de 'código embebido en el lenguaje de marcas' y qué tres tecnologías representativas la emplean según el documento?",
    options: [
      { id: "A", text: "Compilar el navegador dentro de un archivo de base de datos; tecnologías: MySQL, Oracle y MongoDB.", isCorrect: false },
      { id: "B", text: "Integrar el código del programa en medio de las etiquetas HTML: el contenido que no varía se introduce directamente en HTML y el lenguaje de programación se usa para lo dinámico; se emplea en ASP, PHP y páginas JSP de Jakarta EE.", isCorrect: true },
      { id: "C", text: "Ocultar scripts binarios de C dentro de las cabeceras TCP/IP.", isCorrect: false },
      { id: "D", text: "Escribir hojas de estilo CSS dentro de los comentarios de la BIOS.", isCorrect: false }
    ],
    explanation: "Páginas 15-16: 'Una de las principales formas de realizar páginas web dinámicas es integrar el código del programa en medio de las etiquetas HTML de la página web. De esta forma, el contenido que no varía de la página se puede introducir directamente en HTML, y el lenguaje de programación se utilizará para todo aquello que pueda variar de forma dinámica. Esta metodología de programación es la que se emplea en los lenguajes ASP, PHP y en páginas JSP de Jakarta EE'.",
    distractors: {
      A: "El navegador no se compila en una BD.",
      C: "C no se embebe en HTML.",
      D: "CSS no tiene relación con la BIOS."
    },
    trapNote: "Tríada clásica de código embebido en HTML citada en el tema: ASP, PHP y JSP."
  },
  {
    id: 73,
    level: "medio",
    topic: 4,
    topicName: "Ejemplo de Código Embebido en el PDF",
    page: "Pág. 16",
    question: "En el ejemplo de código de la página 16, ¿qué instrucción PHP y qué variable superglobal se utilizan dentro del bloque de código embebido para mostrar información?",
    options: [
      { id: "A", text: "printf($_POST['USER_NAME']); para mostrar el nombre del cliente conectado.", isCorrect: false },
      { id: "B", text: "echo $_SERVER['SERVER_NAME']; dentro de una etiqueta <p> para mostrar el nombre del servidor desde el que se sirve el sitio.", isCorrect: true },
      { id: "C", text: "system('shutdown'); para apagar Apache al cargar la página.", isCorrect: false },
      { id: "D", text: "var_dump($_ENV['PATH']); para listar las variables del sistema operativo.", isCorrect: false }
    ],
    explanation: "Página 16 (código textual): dentro de <p>Este sitio está siendo servido desde: <?php // Mostramos el nombre del servidor echo $_SERVER['SERVER_NAME']; ?></p>. Se utiliza la variable superglobal $_SERVER con la clave 'SERVER_NAME'.",
    distractors: {
      A: "El código no utiliza $_POST ni printf.",
      C: "No se apaga el servidor en el ejemplo.",
      D: "No se usa var_dump de variables de entorno."
    },
    trapNote: "Detalle del snippet de la página 16: echo $_SERVER['SERVER_NAME'] comentando '// Mostramos el nombre del servidor'."
  },

  // ==========================================================================
  // BLOQUE 5: ENTORNO, HERRAMIENTAS, PHP Y XAMPP (Pág. 16-20)
  // ==========================================================================
  {
    id: 74,
    level: "medio",
    topic: 5,
    topicName: "IDEs de Código Abierto: Eclipse y NetBeans",
    page: "Pág. 16",
    question: "Respecto a Eclipse y NetBeans, ¿en qué lenguaje se centraron en sus orígenes, qué lenguajes admiten hoy y qué versiones ofrecen para su descarga?",
    options: [
      { id: "A", text: "Se centraron en C#; hoy solo admiten HTML y no permiten instalar módulos.", isCorrect: false },
      { id: "B", text: "En sus orígenes se centraron en Java; hoy admiten (directamente o por módulos) C, C++, PHP, Python y Ruby; y ofrecen versiones personalizadas del IDE listas para programar en un lenguaje sin configurar ni instalar módulos.", isCorrect: true },
      { id: "C", text: "Se crearon exclusivamente para programar en PHP 8.x en sistemas macOS.", isCorrect: false },
      { id: "D", text: "Ambos fueron adquiridos por Microsoft y convertidos en extensiones de pago de VSCode.", isCorrect: false }
    ],
    explanation: "Página 16: 'Dos de los IDE de código abierto más utilizados en la actualidad son Eclipse y NetBeans. Ambos permiten el desarrollo de aplicaciones informáticas en varios lenguajes de programación. Aunque en sus orígenes se centraron en la programación en lenguaje Java, hoy en día admiten directamente o a través de módulos, varios lenguajes entre los que se incluyen C, C++, PHP, Python y Ruby. Ambos ofrecen para la descarga versiones personalizadas del IDE, que pueden ser usadas directamente para programar en un lenguaje determinado, sin necesidad de cambiar la configuración o instalar módulos'.",
    distractors: {
      A: "NetBeans y Eclipse no nacieron para C# (.NET).",
      C: "Nacieron en el entorno Java.",
      D: "Son proyectos de código abierto independientes de Microsoft."
    },
    trapNote: "Detalle del texto: versiones personalizadas listas para programar en C, C++, PHP, Python o Ruby sin tener que instalar módulos."
  },
  {
    id: 75,
    level: "medio",
    topic: 5,
    topicName: "Elección del IDE para el Curso",
    page: "Pág. 16",
    question: "¿Qué entorno de desarrollo se empleará a lo largo del curso y cuál es la valoración que hace el temario sobre PhpStorm y Eclipse?",
    options: [
      { id: "A", text: "Se empleará Eclipse porque es muy ligero; PhpStorm es gratuito y VSCode es de pago.", isCorrect: false },
      { id: "B", text: "Se empleará Visual Studio Code (editor que se complementa mediante extensiones); siendo PhpStorm la alternativa más conocida pero de pago; y Eclipse otra posibilidad, aunque es un entorno bastante pesado.", isCorrect: true },
      { id: "C", text: "Se empleará el Bloc de Notas de Windows sin extensiones ni resaltado de sintaxis.", isCorrect: false },
      { id: "D", text: "Se empleará phpMyAdmin como editor principal de código fuente.", isCorrect: false }
    ],
    explanation: "Página 16: 'En este curso vamos a emplear Visual Studio Code (https://code.visualstudio.com) como entorno de desarrollo (IDE). Existen otras alternativas, siendo PhpStorm la más conocida pero de pago. Otra posibilidad es utilizar Eclipse, aunque es un entorno bastante pesado. VSCode es un editor de código fuente que se complementa mediante extensiones'.",
    distractors: {
      A: "Eclipse es calificado como pesado y PhpStorm es de pago.",
      C: "El curso prescribe el uso formal de VSCode.",
      D: "phpMyAdmin es para bases de datos MySQL, no un editor de código PHP."
    },
    trapNote: "Frase textual del temario: 'PhpStorm es de pago' y 'Eclipse es un entorno bastante pesado'. VSCode = editor complementado con extensiones."
  },
  {
    id: 76,
    level: "medio",
    topic: 5,
    topicName: "Extensión PHP Intelephense",
    page: "Pág. 17",
    question: "En Visual Studio Code, ¿cuáles son las capacidades que aporta la extensión 'PHP Intelephense' detalladas en la página 17?",
    options: [
      { id: "A", text: "Reiniciar el router automáticamente cuando detecta un error de sintaxis en CSS.", isCorrect: false },
      { id: "B", text: "Autocompletado inteligente, información contextual (documentación oficial o PHP_Doc al pasar el cursor), formato de código (estilos como PSR-12), diagnóstico de errores en tiempo real, soporte para HTML/JS/CSS embebido y salto rápido a definiciones y usos de funciones, clases y métodos.", isCorrect: true },
      { id: "C", text: "Compilar código PHP a archivos binarios de extensión .dll para Windows.", isCorrect: false },
      { id: "D", text: "Sustituir al servidor Apache para ejecutar bases de datos MariaDB en la GPU.", isCorrect: false }
    ],
    explanation: "Página 17: 'PHP Intelephense: autocompletado inteligente (sugiere funciones, clases, métodos y variables mientras escribes), información contextual (al pasar el cursor sobre una función o clase, muestra documentación oficial o comentarios de PHP_Doc), formato de código (aplica estilos como PSR-12 para mantener tu código limpio y consistente), diagnóstico de errores en tiempo real, soporte para HTML/JS/CSS embebido y también permite saltar rápidamente a la definición de una función, clase o método y ver dónde se usa en todo el proyecto'.",
    distractors: {
      A: "Intelephense no interactúa con routers.",
      C: "PHP es interpretado; Intelephense es un Language Server, no un compilador de DLLs.",
      D: "No tiene funciones de servidor web ni de base de datos."
    },
    trapNote: "Recuerda las palabras clave asociadas a PHP Intelephense: autocompletado, hover contextual (PHP_Doc), formateo PSR-12, errores en tiempo real y salto a definiciones."
  },
  {
    id: 77,
    level: "basico",
    topic: 5,
    topicName: "Extensión PHP Code Sniffer",
    page: "Pág. 17",
    question: "¿Cuál es la función específica de la extensión 'PHP Code Sniffer' recomendada para VSCode en el documento?",
    options: [
      { id: "A", text: "Detectar errores de estilo y estructura en tu código.", isCorrect: true },
      { id: "B", text: "Descargar automáticamente paquetes desde GitHub sin permiso.", isCorrect: false },
      { id: "C", text: "Ejecutar la base de datos MySQL en segundo plano.", isCorrect: false },
      { id: "D", text: "Renderizar animaciones en 3D en el panel lateral de VSCode.", isCorrect: false }
    ],
    explanation: "Página 17 literal: 'PHP Code Sniffer: detecta errores de estilo y estructura en tu código'.",
    distractors: {
      B: "No gestiona descargas no autorizadas de GitHub.",
      C: "MySQL se ejecuta como servicio desde el panel de XAMPP.",
      D: "No renderiza gráficos 3D."
    },
    trapNote: "No confundir: PHP Intelephense (autocompletado/formato PSR-12/errores) vs PHP Code Sniffer (detecta errores de estilo y estructura)."
  },
  {
    id: 78,
    level: "avanzado",
    topic: 5,
    topicName: "Configuración de Code Runner",
    page: "Pág. 17",
    question: "Según el documento, ¿cómo se debe configurar la extensión 'Code Runner' en VSCode para el curso?",
    options: [
      { id: "A", text: "Para compilar el código PHP a archivos ejecutables .exe antes de guardarlo.", isCorrect: false },
      { id: "B", text: "Hay que configurarlo para que ejecute el código en la terminal integrada y funcione con PHP puro, sin frameworks.", isCorrect: true },
      { id: "C", text: "Para subir automáticamente los archivos a un repositorio remoto de GitHub en cada guardado.", isCorrect: false },
      { id: "D", text: "Para sustituir al archivo php.ini eliminando la directiva max_execution_time.", isCorrect: false }
    ],
    explanation: "Página 17 literal: 'Code Runner: hay que configurarlo para que ejecute el código en la terminal integrada y funcione con PHP puro, sin frameworks'.",
    distractors: {
      A: "PHP no se compila a .exe con Code Runner.",
      C: "Code Runner no es un cliente de Git.",
      D: "Code Runner no modifica directivas de php.ini."
    },
    trapNote: "Detalle textual: 'ejecute el código en la terminal integrada y funcione con PHP puro, sin frameworks'."
  },
  {
    id: 79,
    level: "basico",
    topic: 5,
    topicName: "Extensión Laravel Snippets",
    page: "Pág. 17",
    question: "¿Qué cuarta extensión para VSCode se incluye en la lista oficial de herramientas para facilitar el trabajo a lo largo del curso?",
    options: [
      { id: "A", text: "Django Snippets.", isCorrect: false },
      { id: "B", text: "Laravel Snippets.", isCorrect: true },
      { id: "C", text: "Spring Boot Tools.", isCorrect: false },
      { id: "D", text: "React Developer Tools.", isCorrect: false }
    ],
    explanation: "Página 17 (cuarta viñeta de extensiones): 'Laravel Snippets'. Proporciona atajos y fragmentos de código para el popular framework PHP Laravel.",
    distractors: {
      A: "Django es de Python.",
      C: "Spring Boot es de Java.",
      D: "React es de JavaScript."
    },
    trapNote: "Las 4 extensiones de la página 17 son: 1. PHP Intelephense, 2. PHP Code Sniffer, 3. Code Runner, 4. Laravel Snippets."
  },
  {
    id: 80,
    level: "medio",
    topic: 5,
    topicName: "Definición y Sintaxis de PHP",
    page: "Pág. 17",
    question: "¿Cómo define el temario al lenguaje PHP, en qué lenguaje se basa su sintaxis y cuál es la versión recomendada actualmente?",
    options: [
      { id: "A", text: "Lenguaje compilado a máquina basado en Python; versión recomendada PHP 5.4.", isCorrect: false },
      { id: "B", text: "Lenguaje interpretado de propósito general diseñado para desarrollo de páginas web dinámicas mediante código embebido en HTML; sintaxis basada en C/C++ (muy similar a Java); versión recomendada PHP 8.x (siempre superior a la 7.0).", isCorrect: true },
      { id: "C", text: "Lenguaje exclusivo para hojas de cálculo basado en Visual Basic; versión recomendada PHP 1.0.", isCorrect: false },
      { id: "D", text: "Lenguaje de base de datos no relacional basado en SQL Server; versión recomendada PHP 9.9.", isCorrect: false }
    ],
    explanation: "Página 17: 'PHP es un lenguaje interpretado de propósito general diseñado para el desarrollo de páginas web dinámicas mediante la inserción de código embebido dentro del lenguaje de marcas HTML. Su sintaxis está basada en la de C/C++, y por lo tanto es muy similar a la de Java... Actualmente la versión recomendada es PHP 8.x (siempre superior a la 7.0)'.",
    distractors: {
      A: "PHP no es compilado a máquina ni se basa en Python; la versión 5.4 está totalmente obsoleta.",
      C: "PHP no es para hojas de cálculo ni deriva de Visual Basic.",
      D: "PHP no es un dialecto SQL."
    },
    trapNote: "Frase literal del texto: 'PHP 8.x (siempre superior a la 7.0)' y sintaxis 'basada en C/C++, muy similar a Java'."
  },
  {
    id: 81,
    level: "avanzado",
    topic: 5,
    topicName: "Frameworks de PHP Citados en el Tema",
    page: "Pág. 17",
    question: "¿Cuáles son los cuatro frameworks de PHP citados expresamente entre paréntesis en la página 17 del temario?",
    options: [
      { id: "A", text: "Django, Flask, FastAPI y Tornado.", isCorrect: false },
      { id: "B", text: "Laravel, Symfony, Codeigniter y Zend.", isCorrect: true },
      { id: "C", text: "Express.js, NestJS, Koa y Fastify.", isCorrect: false },
      { id: "D", text: "Spring, Struts, Hibernate y JSF.", isCorrect: false }
    ],
    explanation: "Página 17 literal: 'PHP dispone de una multitud de librerías y frameworks (Laravel, Symfony, Codeigniter, Zend)'.",
    distractors: {
      A: "Son frameworks de Python.",
      C: "Son frameworks de Node.js (JavaScript).",
      D: "Son frameworks y librerías de Java."
    },
    trapNote: "Aprende el cuarteto exacto de frameworks PHP citado en el documento: Laravel, Symfony, Codeigniter, Zend."
  },
  {
    id: 82,
    level: "medio",
    topic: 5,
    topicName: "Delimitadores de PHP y Regla de Archivos Puros",
    page: "Pág. 17",
    question: "¿Cuáles son los delimitadores recomendados para incluir código PHP y qué regla especial se aplica a archivos que contienen EXCLUSIVAMENTE código PHP?",
    options: [
      { id: "A", text: "Se recomienda usar <% y %>; y en archivos sólo PHP es obligatorio cerrar con %>.", isCorrect: false },
      { id: "B", text: "Los delimitadores recomendados son <?php y ?>; y en archivos de sólo PHP puros NO se incluye el delimitador de cierre (?>).", isCorrect: true },
      { id: "C", text: "Se recomienda usar siempre <script language='php'> y es obligatorio incluir siempre la etiqueta de cierre.", isCorrect: false },
      { id: "D", text: "No se usa ningún delimitador; basta con guardar el archivo con extensión .php.", isCorrect: false }
    ],
    explanation: "Página 17: 'los delimitadores recomendados para incluir código PHP dentro de una página web son <?php y ?>. En archivos sólo PHP puros no se incluye el delimitador de cierre'.",
    distractors: {
      A: "<% y %> son etiquetas estilo ASP, no recomendadas ni admitidas por defecto.",
      C: "La etiqueta <script language='php'> está obsoleta y eliminada.",
      D: "Sin delimitadores <?php el intérprete no reconoce los bloques de código PHP dentro del archivo."
    },
    trapNote: "¡Regla de oro de examen! En archivos que son 100% PHP puro, la etiqueta de cierre '?>' se OMITE para evitar envíos accidentales de espacios en blanco antes de cabeceras HTTP."
  },
  {
    id: 83,
    level: "medio",
    topic: 5,
    topicName: "Ficheros de Configuración: Apache y PHP",
    page: "Pág. 17",
    question: "¿Cuáles son los ficheros de configuración de Apache y de PHP respectivamente, y qué función nos informa del lugar exacto en que está almacenado el fichero de PHP?",
    options: [
      { id: "A", text: "apache.cfg y php.conf; la función get_php_path().", isCorrect: false },
      { id: "B", text: "El de Apache es httpd.conf y el de PHP es php.ini; la función phpinfo().", isCorrect: true },
      { id: "C", text: "server.xml y web.config; la función echo_config().", isCorrect: false },
      { id: "D", text: "nginx.conf y composer.json; la función var_dump().", isCorrect: false }
    ],
    explanation: "Página 17: 'La configuración tanto del servidor web Apache, como de PHP, se realiza por medio de ficheros de configuración. El de Apache es httpd.conf y el de PHP es php.ini. Este fichero, php.ini, puede encontrarse en distintas ubicaciones. La función phpinfo() que ejecutaste antes te informa, entre otras muchas cosas, del lugar en que se encuentra almacenado el fichero php.ini en tu ordenador'.",
    distractors: {
      A: "Nombres incorrectos.",
      C: "server.xml es de Tomcat y web.config de IIS.",
      D: "nginx.conf es de Nginx y composer.json es de Composer."
    },
    trapNote: "Apache = httpd.conf | PHP = php.ini | Ver ruta en pantalla = phpinfo()."
  },
  {
    id: 84,
    level: "medio",
    topic: 5,
    topicName: "Directiva short_open_tag y Conflicto con XML",
    page: "Pág. 17",
    question: "¿Qué indica la directiva 'short_open_tag' en php.ini, por qué se aconseja asignarle el valor 'Off' y qué problema concreto previene?",
    options: [
      { id: "A", text: "Indica si se pueden usar comentarios de una sola línea; se pone en Off para permitir comentarios multilinea.", isCorrect: false },
      { id: "B", text: "Indica si se pueden utilizar en PHP los delimitadores cortos <? y ?>; es preferible no usarlos (asignar Off) porque puede causarnos problemas si utilizamos páginas con XML.", isCorrect: true },
      { id: "C", text: "Indica si el servidor Apache puede escuchar peticiones HTTP comprimidas en gzip.", isCorrect: false },
      { id: "D", text: "Indica si PHP puede conectarse a MariaDB sin contraseña.", isCorrect: false }
    ],
    explanation: "Página 17: 'short_open_tag. Indica si se pueden utilizar en PHP los delimitadores cortos <? y ?>. Es preferible no usarlos, pues puede causarnos problemas si utilizamos páginas con XML. Para prohibir la utilización de estos delimitadores con PHP le asignamos a esta directiva el valor Off'.",
    distractors: {
      A: "Los comentarios // o /* */ no dependen de esta directiva.",
      C: "La compresión gzip la gestiona el servidor web.",
      D: "No tiene ninguna relación con bases de datos ni contraseñas."
    },
    trapNote: "¿Por qué da conflicto con XML? Porque el prólogo estándar de XML empieza por '<?xml version=\"1.0\"...?>' y PHP interpretaría erróneamente que comienza un bloque de script si short_open_tag estuviera en On."
  },
  {
    id: 85,
    level: "basico",
    topic: 5,
    topicName: "Ruta de php.ini en XAMPP",
    page: "Pág. 17",
    question: "En una instalación típica de XAMPP en Windows, ¿cuál es la ruta por defecto donde se encuentra almacenado el fichero de configuración 'php.ini' citada en el temario?",
    options: [
      { id: "A", text: "C:\\Windows\\System32\\php.ini", isCorrect: false },
      { id: "B", text: "C:\\xampp\\php\\php.ini", isCorrect: true },
      { id: "C", text: "C:\\xampp\\htdocs\\php.ini", isCorrect: false },
      { id: "D", text: "C:\\Program Files\\Apache\\conf\\php.ini", isCorrect: false }
    ],
    explanation: "Página 17 literal: 'Si utilizamos xampp sería C:\\xampp\\php\\php.ini'.",
    distractors: {
      A: "Antiguamente algunas instalaciones manuales usaban C:\\Windows, pero XAMPP lo ubica en su propia carpeta php.",
      C: "htdocs es la raíz web pública (DocumentRoot), nunca debe alojarse php.ini allí.",
      D: "En XAMPP la ruta no es Program Files sino la raíz C:\\xampp."
    },
    trapNote: "Ruta oficial de examen en XAMPP: C:\\xampp\\php\\php.ini."
  },
  {
    id: 86,
    level: "avanzado",
    topic: 5,
    topicName: "Directiva max_execution_time",
    page: "Pág. 18",
    question: "¿Cuál es el objetivo principal de la directiva 'max_execution_time' en el archivo php.ini y en qué unidad se mide?",
    options: [
      { id: "A", text: "Establecer la hora en que se debe reiniciar automáticamente el servidor web.", isCorrect: false },
      { id: "B", text: "Permite ajustar el número máximo de segundos que podrá durar la ejecución de un script PHP, evitando que el servidor se bloquee si se produce algún error o bucle infinito.", isCorrect: true },
      { id: "C", text: "Limitar los milisegundos de latencia de red antes de cortar la conexión de fibra.", isCorrect: false },
      { id: "D", text: "Contar cuántas semanas puede estar abierto el panel de control de XAMPP.", isCorrect: false }
    ],
    explanation: "Página 18: 'max_execution_time. Permite que puedas ajustar el número máximo de segundos que podrá durar la ejecución de un script PHP. Evita que el servidor se bloquee si se produce algún error en un script'.",
    distractors: {
      A: "No define horas de apagado del servidor.",
      C: "Se mide en segundos, no milisegundos de red.",
      D: "No controla la vida útil del panel de control de XAMPP."
    },
    trapNote: "Unidad de medida: segundos. Función: evitar bloqueos por scripts infinitos o con errores."
  },
  {
    id: 87,
    level: "avanzado",
    topic: 5,
    topicName: "Directiva error_reporting y Operador ~",
    page: "Pág. 18",
    question: "Si en el archivo php.ini configuras la directiva: 'error_reporting = E_ALL & ~E_NOTICE', ¿cuál será el comportamiento de PHP ante los errores?",
    options: [
      { id: "A", text: "Ocultará todos los errores fatales y solo mostrará los avisos leves (notices).", isCorrect: false },
      { id: "B", text: "Mostrará todos los tipos de errores (E_ALL), excepto los avisos (notices), que no se mostrarán debido al operador virgulilla (~).", isCorrect: true },
      { id: "C", text: "Desactivará por completo cualquier mensaje en pantalla y enviará un correo al administrador.", isCorrect: false },
      { id: "D", text: "Provocará un error de sintaxis en php.ini porque el carácter virgulilla (~) está prohibido.", isCorrect: false }
    ],
    explanation: "Página 18: 'error_reporting. Indica qué tipo de errores se mostrarán en el caso de que se produzcan. Por ejemplo, si haces error_reporting = E_ALL, te mostrará todos los tipos de errores. Si no quieres que te muestre los avisos pero sí otros tipos de errores, puedes hacer error_reporting = E_ALL & ~E_NOTICE'. La virgulilla (~) es el operador de negación bit a bit (NOT).",
    distractors: {
      A: "Al revés: E_ALL activa todos y ~E_NOTICE excluye los avisos.",
      C: "Para ocultar todo se usaría error_reporting = 0 o display_errors = Off.",
      D: "El operador bit a bit NOT (~) es la sintaxis oficial estándar de PHP en php.ini."
    },
    trapNote: "El operador & ~ significa 'TODO MENOS LO QUE SIGUE'. Por tanto: todos los errores excepto notices."
  },
  {
    id: 88,
    level: "medio",
    topic: 5,
    topicName: "Directivas de Subida: file_uploads y upload_max_filesize",
    page: "Pág. 18",
    question: "¿Qué dos directivas de php.ini controlan, respectivamente, si se permite la subida de ficheros por HTTP y el límite máximo de tamaño de cada archivo subido?",
    options: [
      { id: "A", text: "http_upload_enable y file_max_buffer.", isCorrect: false },
      { id: "B", text: "file_uploads (indica si se pueden o no subir ficheros por HTTP) y upload_max_filesize (límite máximo permitido para cada archivo, ej. 1M).", isCorrect: true },
      { id: "C", text: "post_max_size y memory_limit.", isCorrect: false },
      { id: "D", text: "upload_allow y size_file_http.", isCorrect: false }
    ],
    explanation: "Página 18: 'file_uploads. Indica si se pueden o no subir ficheros al servidor por HTTP' y 'upload_max_filesize. En caso de que se puedan subir ficheros por HTTP, puedes indicar el límite máximo permitido para el tamaño de cada archivo. Por ejemplo, upload_max_filesize = 1M'.",
    distractors: {
      A: "Nombres inexistentes.",
      C: "Aunque post_max_size y memory_limit existen en PHP, las dos explicadas específicamente en el temario para esta función son file_uploads y upload_max_filesize.",
      D: "Nombres inventados."
    },
    trapNote: "Aprende de memoria los nombres exactos: 'file_uploads' y 'upload_max_filesize'."
  },
  {
    id: 89,
    level: "basico",
    topic: 5,
    topicName: "Puesta en Marcha: XAMPP Control Panel y phpMyAdmin",
    page: "Pág. 18",
    question: "En la sección 4 'Puesta en marcha', ¿qué pasos se indican para arrancar el servidor web y comprobar que la base de datos funciona correctamente?",
    options: [
      { id: "A", text: "Reiniciar el ordenador y desinstalar el navegador.", isCorrect: false },
      { id: "B", text: "Arrancar XAMPP e iniciar Apache en el panel de control pulsando 'Start'; y para comprobar la base de datos, ejecutar desde el navegador la aplicación phpMyAdmin que proporciona el paquete.", isCorrect: true },
      { id: "C", text: "Abrir la consola de Windows y escribir 'format C:'.", isCorrect: false },
      { id: "D", text: "Instalar Oracle WebLogic para verificar que MySQL responde por el puerto 8080.", isCorrect: false }
    ],
    explanation: "Página 18: 'Para ello arrancamos XAMPP e iniciamos Apache en el panel de control (start)... Para comprobar que también el servidor de la base de datos funciona correctamente, ejecutaremos desde el navegador la aplicación phpMyAdmin que nos proporciona el paquete y que permite la administración de la base de datos'.",
    distractors: {
      A: "No hace falta reiniciar ni desinstalar nada.",
      C: "Comando destructivo sin relación.",
      D: "WebLogic es un servidor comercial de Java, ajeno al flujo de XAMPP."
    },
    trapNote: "Acciones clave: Panel de XAMPP -> Start en Apache; Comprobación de BD -> ejecutar phpMyAdmin desde el navegador."
  },
  {
    id: 90,
    level: "medio",
    topic: 5,
    topicName: "DocumentRoot y Carpeta htdocs",
    page: "Pág. 18",
    question: "En una instalación de Apache con XAMPP, ¿qué es la carpeta 'htdocs' y cuál es su función oficial según el temario?",
    options: [
      { id: "A", text: "Es la carpeta temporal donde se almacenan exclusivamente los archivos de registro (logs) de errores de Windows.", isCorrect: false },
      { id: "B", text: "Es la conocida como DocumentRoot, en la que Apache buscará todas las aplicaciones PHP; por tanto, para ejecutarlas, deben estar guardadas en principio en esa carpeta.", isCorrect: true },
      { id: "C", text: "Es el directorio donde se compilan los servlets de Jakarta EE en formato binario .jar.", isCorrect: false },
      { id: "D", text: "Es el almacén reservado para las copias de seguridad automáticas de phpMyAdmin.", isCorrect: false }
    ],
    explanation: "Página 18: 'La carpeta htdocs es la conocida como DocumentRoot, en la que Apache buscará todas las aplicaciones PHP. Por tanto, para ejecutarlas, deben estar guardadas en principio en esa carpeta'.",
    distractors: {
      A: "Los logs de Apache suelen estar en apache/logs.",
      C: "XAMPP básico corre PHP/Apache; servlets requieren Tomcat.",
      D: "phpMyAdmin almacena sus datos en MySQL."
    },
    trapNote: "Concepto técnico: DocumentRoot es la raíz de documentos públicos que sirve el servidor HTTP (en XAMPP: htdocs)."
  },
  {
    id: 91,
    level: "avanzado",
    topic: 5,
    topicName: "Contenido Inicial de htdocs",
    page: "Pág. 18-19",
    question: "Según la captura del explorador de archivos mostrada en la página 19, ¿cuáles son las carpetas y archivos que contiene inicialmente el DocumentRoot ('htdocs') en una instalación limpia de XAMPP?",
    options: [
      { id: "A", text: "Carpetas: 'windows', 'system32', 'temp'; Archivos: 'kernel.dll' y 'boot.ini'.", isCorrect: false },
      { id: "B", text: "Carpetas: 'dashboard', 'img', 'webalizer', 'xampp'; y archivos: 'applications', 'bitnami', 'favicon' e 'index.php'.", isCorrect: true },
      { id: "C", text: "Carpetas: 'node_modules' y 'vendor'; Archivos: 'package.json' y 'composer.lock'.", isCorrect: false },
      { id: "D", text: "Únicamente un archivo vacío llamado 'empty.txt'.", isCorrect: false }
    ],
    explanation: "Página 18-19 (captura oficial de Windows): se aprecian las carpetas 'dashboard', 'img', 'webalizer' y 'xampp', junto a los elementos 'applications' (archivo HTML), 'bitnami', 'favicon' (ICO) e 'index.php'.",
    distractors: {
      A: "Son carpetas y archivos del sistema operativo Windows.",
      C: "Son directorios de gestores de dependencias npm y Composer, no el contenido por defecto de htdocs.",
      D: "htdocs viene con la web de bienvenida de XAMPP."
    },
    trapNote: "Pregunta hiper-visual de examen basada en la captura de la página 19: carpetas dashboard, img, webalizer, xampp; y archivo clave index.php."
  },
  {
    id: 92,
    level: "avanzado",
    topic: 5,
    topicName: "Ejecución de index.php y Listado de Directorios",
    page: "Pág. 19",
    question: "¿Por qué se ejecuta de forma automática 'index.php' al acceder a la raíz del servidor Apache y qué ocurre si se le cambia el nombre o se elimina?",
    options: [
      { id: "A", text: "Apache se bloquea y apaga el equipo mostrando una pantalla azul.", isCorrect: false },
      { id: "B", text: "Apache está configurado para que cualquier archivo llamado 'index.php' se ejecute automáticamente al entrar a un directorio; si se renombra o elimina, el navegador mostraría todos los archivos y directorios que haya dentro del DocumentRoot (listado de directorios).", isCorrect: true },
      { id: "C", text: "Apache descarga e instala automáticamente una copia de WordPress desde Internet.", isCorrect: false },
      { id: "D", text: "El navegador cliente redirige de forma obligatoria a la web de Microsoft Bing.", isCorrect: false }
    ],
    explanation: "Página 19: 'Apache está configurado para que, al acceder a un directorio, cualquier archivo con el nombre de index.php se ejecute de forma automática, y por eso aparece la pantalla que vimos al principio, para comprobar que Apache funciona. Si le cambiamos el nombre a este fichero o lo eliminamos, el navegador mostraría todos los archivos y directorios que haya dentro del DocumentRoot (a esto se le llama el listado de directorios en servidores web)'.",
    distractors: {
      A: "Apache no produce pantallas azules por faltar un archivo índice.",
      C: "No hay autoinstalación de WordPress.",
      D: "No hay redirecciones forzosas a buscadores."
    },
    trapNote: "Término oficial: 'Listado de directorios' (Directory Listing), que se activa si falta el archivo de índice (index.php o index.html)."
  },
  {
    id: 93,
    level: "medio",
    topic: 5,
    topicName: "Acceso Local y Pantalla de Bienvenida de XAMPP",
    page: "Pág. 19",
    question: "¿Qué nombre de host se escribe en el navegador para probar XAMPP localmente y qué título de bienvenida figura en la pantalla mostrada en el PDF?",
    options: [
      { id: "A", text: "Host: gateway.lan; Título: 'Bienvenido a Apache Cloud 2026'.", isCorrect: false },
      { id: "B", text: "Host: localhost (ya que de esta manera se accede a servicios locales); Título: 'Welcome to XAMPP for Windows 8.1.6'.", isCorrect: true },
      { id: "C", text: "Host: 192.168.1.254; Título: 'Configuración del Router'.", isCorrect: false },
      { id: "D", text: "Host: xampp.com; Título: 'Inicie sesión con su tarjeta de crédito'.", isCorrect: false }
    ],
    explanation: "Página 19: 'Ahora probaremos en Xampp desde el navegador, para lo que utilizaremos el nombre de localhost, ya que de esta manera se accede a servicios locales. Si todo funciona correctamente, nos aparecerá la siguiente pantalla: [Welcome to XAMPP for Windows 8.1.6]'.",
    distractors: {
      A: "El nombre es localhost, no gateway.lan.",
      C: "192.168.1.254 es una IP habitual de puerta de enlace, no el loopback local.",
      D: "xampp.com es un dominio externo."
    },
    trapNote: "Nombre de acceso local: localhost. Versión mostrada en la captura del tema: Welcome to XAMPP for Windows 8.1.6."
  },
  {
    id: 94,
    level: "medio",
    topic: 5,
    topicName: "Primer Script: holamundo.php",
    page: "Pág. 19-20",
    question: "En las páginas 19 y 20 se crea el primer script de prueba 'holamundo.php' (en C:/xampp/htdocs). ¿Cuál es su estructura HTML y el bloque de código PHP que incluye en el body?",
    options: [
      { id: "A", text: "Un archivo de texto plano sin etiquetas HTML que contiene únicamente 'print_r(phpinfo());'.", isCorrect: false },
      { id: "B", text: "Documento HTML5 con <!DOCTYPE html>, <html lang=\"es\">, head con meta charset UTF-8, viewport, <title>Hola Mundo</title>, y en el body el bloque: <?php echo \"Hola Mundo\"; ?>.", isCorrect: true },
      { id: "C", text: "Un documento XML con etiqueta <soap:Envelope> y script en lenguaje Python.", isCorrect: false },
      { id: "D", text: "Un archivo binario precompilado generado con gcc en la consola de comandos.", isCorrect: false }
    ],
    explanation: "Páginas 19 y 20: código completo: <!DOCTYPE html> <html lang=\"es\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> <title>Hola Mundo</title> </head> <body> <?php echo \"Hola Mundo\"; ?> </body> </html>.",
    distractors: {
      A: "Tiene estructura completa HTML5, no es texto plano.",
      C: "No utiliza SOAP ni Python.",
      D: "Es código fuente en texto plano interpretado por PHP, no binario de GCC."
    },
    trapNote: "Fíjate en las etiquetas HTML estándar: doctype html, lang='es', meta UTF-8, viewport, title 'Hola Mundo' y dentro del body: <?php echo 'Hola Mundo'; ?>."
  },
  // ==========================================================================
  // BLOQUE 6: INSTALACIÓN Y CONFIGURACIÓN DE XAMPP Y APACHE (PDF 2 - Pág. 1-10)
  // ==========================================================================
  {
    id: 95,
    level: "basico",
    topic: 6,
    topicName: "Definición y Objetivo de XAMPP",
    page: "XAMPP Pág. 1",
    question: "¿Qué es XAMPP según la definición del documento oficial y cuál es su objetivo principal para desarrolladores principiantes?",
    options: [
      { id: "A", text: "Es un compilador nativo de C++ diseñado exclusivamente para producción bancaria de alta seguridad.", isCorrect: false },
      { id: "B", text: "Es una herramienta de desarrollo que permite probar desarrollos web basados en PHP en el propio ordenador sin necesidad de acceso a Internet, con configuración funcional 'extraer y listo'.", isCorrect: true },
      { id: "C", text: "Es un sistema operativo basado en Linux que sustituye al kernel de Windows en servidores de clase.", isCorrect: false },
      { id: "D", text: "Es un framework JavaScript para diseñar interfaces reactivas similares a React o Angular.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 1: Es una herramienta de desarrollo que permite probar desarrollos web basados en PHP en tu propio ordenador sin necesidad de conexión a Internet. Provee una configuración totalmente funcional desde el momento que se instala ('básicamente lo extraes y listo').",
    distractors: {
      A: "No es un compilador de C++ ni está diseñado para entornos bancarios.",
      C: "Es una distribución de software libre para Windows, Linux y Mac, no un sistema operativo.",
      D: "Es un paquete de servidor web (Apache, BD, PHP, Perl), no un framework JS."
    },
    trapNote: "El temario subraya que para principiantes 'no es necesario saber sobre configuraciones de servidores (aún)' porque viene preconfigurado."
  },
  {
    id: 96,
    level: "medio",
    topic: 6,
    topicName: "Seguridad y Ámbito de XAMPP",
    page: "XAMPP Pág. 1",
    question: "¿Cuál es la advertencia explícita que realiza el temario sobre la seguridad de datos en XAMPP?",
    options: [
      { id: "A", text: "Cumple con el estándar militar ISO-27001 y está certificado para comercio electrónico internacional.", isCorrect: false },
      { id: "B", text: "La seguridad de datos no es su punto fuerte, por lo cual NO es suficientemente seguro para ambientes grandes o de producción.", isCorrect: true },
      { id: "C", text: "Bloquea automáticamente todos los puertos e impide cualquier ataque de red por diseño criptográfico.", isCorrect: false },
      { id: "D", text: "Solo puede usarse si se instala previamente un cortafuegos por hardware dedicado.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 1: 'Es bueno recordar que la seguridad de datos no es su punto fuerte, por lo cual no es suficientemente seguro para ambientes grandes o de producción.' Su propósito es el desarrollo y pruebas locales.",
    distractors: {
      A: "XAMPP viene configurado de forma muy permisiva y no tiene certificaciones de seguridad para producción.",
      C: "Al contrario, por defecto tiene accesos sin contraseñas (como en phpMyAdmin/root).",
      D: "No exige cortafuegos hardware; corre en cualquier PC local."
    },
    trapNote: "Pregunta clásica de examen: XAMPP es para DESARROLLO LOCAL, nunca para entornos reales de producción por sus carencias de seguridad nativa."
  },
  {
    id: 97,
    level: "basico",
    topic: 6,
    topicName: "Acrónimo XAMPP: La letra X",
    page: "XAMPP Pág. 1",
    question: "En el acrónimo XAMPP, ¿qué representa la letra 'X' inicial?",
    options: [
      { id: "A", text: "XML (eXtensible Markup Language), indicando que el servidor procesa exclusivamente esquemas XML.", isCorrect: false },
      { id: "B", text: "Multiplataforma: funciona en los sistemas operativos Linux, Windows y macOS.", isCorrect: true },
      { id: "C", text: "X.509, el estándar de certificados digitales TLS/SSL.", isCorrect: false },
      { id: "D", text: "Xenon, la arquitectura del procesador sobre la que debe ejecutarse el servidor.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 1: 'X - Multiplataforma: funciona en Linux, Windows y macOS.'",
    distractors: {
      A: "La X no significa XML.",
      C: "No hace referencia al estándar X.509 de certificados.",
      D: "No tiene relación con procesadores ni hardware Xenon."
    },
    trapNote: "La 'X' simboliza el cruce entre múltiples sistemas operativos (Cross-platform / Multiplataforma)."
  },
  {
    id: 98,
    level: "avanzado",
    topic: 6,
    topicName: "Diferencia de Servidores: Linux vs. Windows",
    page: "XAMPP Pág. 1",
    question: "¿Qué advertencia crítica de programación da el temario al desarrollar en XAMPP bajo Windows teniendo en cuenta que el servidor final de producción suele ser Linux?",
    options: [
      { id: "A", text: "Windows utiliza procesadores ARM y Linux siempre utiliza procesadores x86 de 32 bits.", isCorrect: false },
      { id: "B", text: "Linux distingue entre mayúsculas y minúsculas (case-sensitive) en nombres de archivo y rutas, cosa que no ocurre en Windows, lo que puede provocar que el servidor final no reconozca los archivos.", isCorrect: true },
      { id: "C", text: "PHP no puede ejecutar bucles 'for' en sistemas operativos de la familia Linux.", isCorrect: false },
      { id: "D", text: "Los archivos en Linux deben guardarse obligatoriamente con codificación ISO-8859-1 en vez de UTF-8.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 1: 'Hay que tener en cuenta que los servidores web están habitualmente en Linux, por tanto, cuida bien la programación de la aplicación, ya que puede ocurrir que el servidor final no la reconozca. Por ejemplo, Linux distingue mayúscula y minúscula, cosa que no ocurre en Windows.'",
    distractors: {
      A: "La diferencia fundamental señalada es la sensibilidad a mayúsculas/minúsculas en el sistema de archivos.",
      C: "PHP es totalmente estándar y ejecuta bucles idénticos en cualquier SO.",
      D: "UTF-8 es el estándar universal recomendado tanto en Windows como en Linux."
    },
    trapNote: "En Windows `Script.php` y `script.php` cargan el mismo fichero; en Linux son dos ficheros completamente distintos y provocará error 404 si no coincide exactamente."
  },
  {
    id: 99,
    level: "basico",
    topic: 6,
    topicName: "Acrónimo XAMPP: La letra A",
    page: "XAMPP Pág. 1",
    question: "En el acrónimo XAMPP, ¿qué representa la letra 'A' y qué entidad lo desarrolla?",
    options: [
      { id: "A", text: "ASP.NET, desarrollado por Microsoft Corporation.", isCorrect: false },
      { id: "B", text: "Apache: el servidor web de código abierto usado globalmente para entrega de contenidos web, desarrollado y mantenido por la Apache Software Foundation.", isCorrect: true },
      { id: "C", text: "AJAX, la técnica asíncrona mantenida por el W3C.", isCorrect: false },
      { id: "D", text: "Amazon Web Services (AWS), que gestiona la nube de alojamiento.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 1: 'A - Apache: es el servidor web de código abierto usado globalmente para la entrega de contenidos web... desarrollado y mantenido por la Apache Software Foundation.'",
    distractors: {
      A: "ASP.NET no forma parte de XAMPP ni es la letra A.",
      C: "AJAX es una técnica cliente, no un servidor web.",
      D: "AWS no desarrolla el servidor web Apache."
    },
    trapNote: "Recuerda que recibe peticiones HTTP al escribir una URL en el navegador y responde enviando páginas web."
  },
  {
    id: 100,
    level: "medio",
    topic: 6,
    topicName: "Acrónimo XAMPP: La letra M",
    page: "XAMPP Pág. 1-2",
    question: "Respecto a la letra 'M' en XAMPP, ¿qué cambio importante señala el temario en las versiones actuales del paquete?",
    options: [
      { id: "A", text: "Ha sido reemplazado por MongoDB para almacenar documentos JSON.", isCorrect: false },
      { id: "B", text: "Originalmente representaba a MySQL, pero en las versiones actuales de XAMPP esta base de datos se ha sustituido por MariaDB.", isCorrect: true },
      { id: "C", text: "Ahora significa Microsoft SQL Server debido a un acuerdo de licencias.", isCorrect: false },
      { id: "D", text: "Significa Memcached para acelerar consultas en memoria RAM.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 1-2: '3. MySQL/MariaDB: XAMPP cuenta con uno de los sistemas relacionales de gestión de bases de datos más populares del mundo... En las versiones actuales de XAMPP esta base de datos se ha sustituido por MariaDB.'",
    distractors: {
      A: "XAMPP no incluye MongoDB por defecto.",
      C: "XAMPP es 100% software libre y no incluye Microsoft SQL Server.",
      D: "La M corresponde a MySQL/MariaDB, no a Memcached."
    },
    trapNote: "MariaDB es la bifurcación comunitaria de MySQL creada tras la adquisición de Sun/MySQL por Oracle."
  },
  {
    id: 101,
    level: "basico",
    topic: 6,
    topicName: "Acrónimo XAMPP: Primera P",
    page: "XAMPP Pág. 2",
    question: "En el acrónimo XAMPP, ¿qué representa la primera 'P'?",
    options: [
      { id: "A", text: "Python, usado para machine learning en servidores.", isCorrect: false },
      { id: "B", text: "PHP: lenguaje de programación del lado del servidor que permite crear páginas web o aplicaciones dinámicas, independiente de la plataforma.", isCorrect: true },
      { id: "C", text: "PostgreSQL, el sistema gestor de bases de datos objeto-relacional.", isCorrect: false },
      { id: "D", text: "Pascal, para compilación de algoritmos estructurados.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 2: '4. PHP: lenguaje de programación del lado del servidor que permite crear páginas web o aplicaciones dinámicas. Es independiente de la plataforma y soporta varios sistemas de bases de datos.'",
    distractors: {
      A: "Python no está incluido en el acrónimo XAMPP clásico.",
      C: "PostgreSQL no es la primera P de XAMPP.",
      D: "Pascal no se usa para desarrollo web en este entorno."
    },
    trapNote: "PHP es el lenguaje central sobre el que giran las prácticas de DWES en este curso."
  },
  {
    id: 102,
    level: "medio",
    topic: 6,
    topicName: "Acrónimo XAMPP: Segunda P",
    page: "XAMPP Pág. 2",
    question: "¿Qué representa la segunda 'P' en el acrónimo XAMPP y en qué ámbitos se utiliza según el temario?",
    options: [
      { id: "A", text: "Python, enfocado exclusivamente en desarrollo con Django.", isCorrect: false },
      { id: "B", text: "PostgreSQL, como base de datos secundaria para transacciones.", isCorrect: false },
      { id: "C", text: "Perl: lenguaje usado en la administración del sistema, en el desarrollo web y en la programación de red.", isCorrect: true },
      { id: "D", text: "Photoshop, para edición de banners y contenido multimedia.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 2: '5. Perl: este lenguaje de programación se usa en la administración del sistema, en el desarrollo web y en la programación de red. También permite programar aplicaciones web dinámicas.'",
    distractors: {
      A: "Trampa habitual de examen: la segunda P es Perl, NO Python.",
      B: "Tampoco es PostgreSQL ni phpMyAdmin.",
      D: "Photoshop es software de diseño gráfico comercial, no un lenguaje de servidor."
    },
    trapNote: "¡Ojo al examen! Muchos alumnos responden erróneamente Python o PostgreSQL en los exámenes tipo test. La respuesta oficial es PERL."
  },
  {
    id: 103,
    level: "medio",
    topic: 6,
    topicName: "Herramientas Adicionales: Mercury Mail",
    page: "XAMPP Pág. 2",
    question: "Dentro de las herramientas adicionales que incluye XAMPP para Windows, ¿cuál es la función de 'Mercury Mail'?",
    options: [
      { id: "A", text: "Un servidor de bases de datos NoSQL ultrarrápido.", isCorrect: false },
      { id: "B", text: "Un servidor de correo incluido en XAMPP para Windows.", isCorrect: true },
      { id: "C", text: "Un analizador estático de código PHP para buscar fallos de sintaxis.", isCorrect: false },
      { id: "D", text: "Un proxy inverso para balancear carga HTTP entre varios clusters.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 2: 'Mercury Mail: servidor de correo incluido en XAMPP para Windows.'",
    distractors: {
      A: "No es una base de datos NoSQL.",
      C: "No es un linter ni analizador de código.",
      D: "No es un balanceador de carga."
    },
    trapNote: "Mercury Mail viene listado en el Panel de Control de XAMPP junto a Apache, MySQL, FileZilla y Tomcat."
  },
  {
    id: 104,
    level: "basico",
    topic: 6,
    topicName: "Herramientas Adicionales: phpMyAdmin",
    page: "XAMPP Pág. 2",
    question: "¿Qué es 'phpMyAdmin' según el temario oficial de XAMPP?",
    options: [
      { id: "A", text: "Un compilador de PHP a código binario para Windows.", isCorrect: false },
      { id: "B", text: "Una herramienta web para la administración de bases de datos MySQL / MariaDB.", isCorrect: true },
      { id: "C", text: "Un módulo de Apache para comprimir imágenes JPEG en tiempo real.", isCorrect: false },
      { id: "D", text: "Un cliente de correo electrónico alternativo a Outlook.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 2: 'phpMyAdmin: herramienta para administración de bases de datos MySQL / MaríaDB.'",
    distractors: {
      A: "phpMyAdmin está escrito en PHP, no es un compilador.",
      C: "No comprime imágenes.",
      D: "No es un cliente de correo; administra bases de datos desde el navegador."
    },
    trapNote: "Se accede habitualmente a través del navegador web en http://localhost/phpmyadmin."
  },
  {
    id: 105,
    level: "medio",
    topic: 6,
    topicName: "Herramientas Adicionales: Webalizer y Tomcat",
    page: "XAMPP Pág. 2",
    question: "¿Qué funciones desempeñan respectivamente 'Webalizer' y 'Apache Tomcat' en el paquete XAMPP?",
    options: [
      { id: "A", text: "Webalizer es un cortafuegos y Tomcat cifra contraseñas en MD5.", isCorrect: false },
      { id: "B", text: "Webalizer es una herramienta de análisis de logs de servidores web, y Apache Tomcat es un servidor de aplicaciones Java (para JSP/Servlets).", isCorrect: true },
      { id: "C", text: "Webalizer sirve para diseñar hojas de estilo CSS y Tomcat es una extensión de Node.js.", isCorrect: false },
      { id: "D", text: "Ambos son servidores FTP para transferencia segura de archivos por SSH.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 2: 'Webalizer: herramienta de análisis de logs de servidores web. Apache Tomcat: servidor de aplicaciones Java (para JSP/Servlets).' Los servidores FTP incluidos son FileZilla Server o ProFTPd.",
    distractors: {
      A: "Webalizer no es cortafuegos ni Tomcat un algoritmo de cifrado.",
      C: "Webalizer analiza logs HTTP; Tomcat corre servlets Java, no Node.js.",
      D: "Los servidores FTP son FileZilla o ProFTPd."
    },
    trapNote: "Recuerda: Webalizer = análisis de logs. Tomcat = aplicaciones Java (JSP y Servlets)."
  },
  {
    id: 106,
    level: "medio",
    topic: 6,
    topicName: "Instalación en Windows y Firewall",
    page: "XAMPP Pág. 2-3",
    question: "Durante la instalación de XAMPP en Windows, ¿qué recomendación específica da el temario al mostrarse el aviso del Cortafuegos (Firewall) de Windows para Apache (httpd.exe)?",
    options: [
      { id: "A", text: "Denegar el acceso a todas las redes para trabajar 100% aislado.", isCorrect: false },
      { id: "B", text: "Se recomienda permitir las redes privadas y denegar las redes públicas para la configuración del firewall, pulsando en 'Permitir acceso'.", isCorrect: true },
      { id: "C", text: "Desactivar por completo el Firewall de Windows y desinstalar el antivirus permanentemente.", isCorrect: false },
      { id: "D", text: "Permitir solo redes públicas porque las privadas son vulnerables a ataques ARP.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 2-3: 'Se recomienda permitir las redes privadas y denegar las redes públicas para la configuración del firewall, hacer clic en el botón Permitir acceso.'",
    distractors: {
      A: "Si se deniegan las privadas, el servidor no podrá comunicarse adecuadamente en la red local de clase.",
      C: "Nunca se debe desactivar el cortafuegos general del sistema.",
      D: "Las redes públicas no se deben permitir por seguridad ante accesos externos no deseados."
    },
    trapNote: "Permitir privadas (domésticas/trabajo) y denegar públicas (aeropuertos/cafeterías)."
  },
  {
    id: 107,
    level: "avanzado",
    topic: 6,
    topicName: "Panel de Control: Modo Administrador",
    page: "XAMPP Pág. 3",
    question: "¿Por qué razón es IMPRESCINDIBLE ejecutar el panel de control de XAMPP en 'Modo Administrador' en Windows?",
    options: [
      { id: "A", text: "Porque de lo contrario Windows elimina automáticamente la carpeta de instalación de C:\\xampp.", isCorrect: false },
      { id: "B", text: "Porque el servidor web, por medidas de seguridad del sistema operativo, solamente arranca en este modo con privilegios elevados.", isCorrect: true },
      { id: "C", text: "Porque PHP 8 requiere obligatoriamente una cuenta de dominio de Azure Active Directory.", isCorrect: false },
      { id: "D", text: "Para evitar que el navegador Google Chrome consuma más de 1 GB de memoria RAM.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 3: 'Una vez instalado XAMPP, debemos ejecutar el panel de control. Es importante hacerlo en modo administrador porque el servidor web, por medidas de seguridad, solamente arranca en este modo.'",
    distractors: {
      A: "Windows no borra la carpeta, simplemente rechaza iniciar el servicio del servidor si no tiene privilegios.",
      C: "No requiere cuentas en la nube de Azure.",
      D: "No tiene ninguna relación con el consumo de RAM de Chrome."
    },
    trapNote: "Si no lo abres como Administrador, al pulsar 'Start' en Apache se producirá un error de permisos en Windows."
  },
  {
    id: 108,
    level: "basico",
    topic: 6,
    topicName: "Arranque de Servicios en XAMPP",
    page: "XAMPP Pág. 3-4",
    question: "¿Qué servicios se deben arrancar inicialmente para las prácticas del módulo según el temario y cómo sabemos visualmente que la ejecución ha sido satisfactoria?",
    options: [
      { id: "A", text: "Todos los servicios (Mercury, FileZilla, Tomcat); se muestran en rojo intermitente.", isCorrect: false },
      { id: "B", text: "Solamente Apache y MySQL (MariaDB); se colorean en verde y se muestran los PID y el puerto por el que escucha cada servicio.", isCorrect: true },
      { id: "C", text: "Solo Tomcat; se abre una ventana azul de consola CMD.", isCorrect: false },
      { id: "D", text: "Ninguno; XAMPP no requiere arrancar servicios para procesar código PHP.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 3-4: 'Nosotros vamos a arrancar solamente Apache y MySQL (MaríaDB) en principio. Como vemos, se han coloreado en verde y se muestra el puerto por el que escucha cada uno de los servicios correspondientes.'",
    distractors: {
      A: "Arrancar Mercury o FileZilla es innecesario y malgasta recursos si no se usan correos o FTP.",
      C: "Tomcat es para Java, no para PHP.",
      D: "Apache debe estar obligatoriamente iniciado para interpretar PHP vía HTTP."
    },
    trapNote: "Color verde = servicio activo satisfactoriamente. Botón 'Start' cambia a 'Stop'."
  },
  {
    id: 109,
    level: "medio",
    topic: 6,
    topicName: "Puertos por Defecto: Apache y MySQL",
    page: "XAMPP Pág. 4, 7",
    question: "Según la captura del Panel de Control de XAMPP y el temario, ¿cuáles son los puertos de red predeterminados por los que escuchan Apache y MySQL respectivamente?",
    options: [
      { id: "A", text: "Apache por el puerto 21 y MySQL por el puerto 25.", isCorrect: false },
      { id: "B", text: "Apache por el puerto 80 (y 443 para HTTPS) y MySQL por el puerto 3306.", isCorrect: true },
      { id: "C", text: "Apache por el puerto 8080 y MySQL por el puerto 1433.", isCorrect: false },
      { id: "D", text: "Ambos escuchan por el mismo puerto 80 compartiendo socket TCP.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 4 y 7: Apache escucha en el puerto estándar HTTP 80 (y 443 SSL). MySQL (MariaDB) escucha en el puerto relacional 3306. Dos servicios distintos no pueden escuchar simultáneamente en el mismo puerto.",
    distractors: {
      A: "El puerto 21 es FTP y el 25 es SMTP de correo.",
      C: "8080 es alternativo de conflicto y 1433 es de Microsoft SQL Server.",
      D: "Dos servicios no pueden enlazar el mismo puerto TCP simultáneamente sin colisión."
    },
    trapNote: "Recuerda: Apache = 80 (HTTP) / 443 (HTTPS). MySQL = 3306."
  },
  {
    id: 110,
    level: "basico",
    topic: 6,
    topicName: "Comprobación de Acceso: Loopback y Localhost",
    page: "XAMPP Pág. 4",
    question: "¿De qué dos formas indica el temario que podemos probar el servidor web desde el navegador para acceder a los servicios locales?",
    options: [
      { id: "A", text: "Escribiendo 'www.google.es' o la IP pública del router 192.168.1.1.", isCorrect: false },
      { id: "B", text: "Utilizando la IP de loopback 127.0.0.1 o el nombre de dominio local 'localhost'.", isCorrect: true },
      { id: "C", text: "Introduciendo la dirección MAC de la tarjeta de red Ethernet.", isCorrect: false },
      { id: "D", text: "Escribiendo 'file:///C:/xampp/apache/bin/httpd.exe'.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 4: 'Ahora probaremos en XAMPP desde el navegador, utilizando la IP de loopback o localhost 127.0.0.1 o también utilizaremos el nombre de localhost, ya que de esta manera se accede a servicios locales.'",
    distractors: {
      A: "Google no accede a tu servidor local y 192.168.1.1 suele ser la puerta de enlace del router.",
      C: "Los navegadores web no resuelven direcciones MAC en la barra de direcciones.",
      D: "file:/// no utiliza el servidor web Apache ni el protocolo HTTP."
    },
    trapNote: "Loopback = 127.0.0.1 = localhost."
  },
  {
    id: 111,
    level: "medio",
    topic: 6,
    topicName: "DocumentRoot: Directorio htdocs",
    page: "XAMPP Pág. 5",
    question: "¿Qué es la carpeta 'htdocs' en XAMPP y cuál es su ruta por defecto en Windows?",
    options: [
      { id: "A", text: "Es la carpeta temporal donde se guardan las copias de seguridad de Windows en C:\\Windows\\Temp.", isCorrect: false },
      { id: "B", text: "Es la carpeta conocida como DocumentRoot (C:\\xampp\\htdocs), en la que Apache buscará todas las aplicaciones PHP para ser ejecutadas directamente.", isCorrect: true },
      { id: "C", text: "Es la carpeta binaria donde se compilan los archivos .exe de Apache.", isCorrect: false },
      { id: "D", text: "Es la base de datos física de MariaDB donde residen las tablas relacionales.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 5: 'La carpeta htdocs es la conocida como DocumentRoot, en la que Apache buscará todas las aplicaciones PHP. Por tanto, para ejecutarlas, deben estar guardadas en principio en esa carpeta.'",
    distractors: {
      A: "No es una carpeta de temporales de Windows.",
      C: "Los ejecutables están en apache\\bin.",
      D: "Las bases de datos físicas están en mysql\\data."
    },
    trapNote: "DocumentRoot = raíz de documentos públicos web servidos por Apache."
  },
  {
    id: 112,
    level: "medio",
    topic: 6,
    topicName: "Ejecución Automática de index.php",
    page: "XAMPP Pág. 6",
    question: "En la configuración por defecto de Apache, ¿cómo reacciona el servidor cuando un cliente solicita acceder a un directorio sin especificar un archivo concreto?",
    options: [
      { id: "A", text: "Devuelve siempre un error 500 Internal Server Error porque es obligatorio teclear el nombre exacto del archivo.", isCorrect: false },
      { id: "B", text: "Cualquier archivo con el nombre de 'index.php' se ejecuta de forma automática.", isCorrect: true },
      { id: "C", text: "Descarga el archivo más pesado del directorio para saturar el ancho de banda.", isCorrect: false },
      { id: "D", text: "Ejecuta un script en Perl que apaga el servidor Apache.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 6: 'Apache está configurado para que, al acceder a un directorio, cualquier archivo con el nombre de index.php se ejecute de forma automática, y por eso aparece la pantalla que vimos al principio, para comprobar que Apache funciona.'",
    distractors: {
      A: "No da error 500; busca los archivos de índice configurados (DirectoryIndex).",
      C: "No descarga archivos pesados.",
      D: "No apaga el servidor."
    },
    trapNote: "Si existe index.php (o index.html), Apache lo sirve de inmediato sin mostrar la lista de archivos."
  },
  {
    id: 113,
    level: "avanzado",
    topic: 6,
    topicName: "Examen de Directorios (Directory Listing)",
    page: "XAMPP Pág. 6",
    question: "¿Qué ocurre en Apache si renombras el archivo 'index.php' a 'index1.php' (o lo eliminas) dentro del DocumentRoot y accedes a la URL en el navegador?",
    options: [
      { id: "A", text: "La pantalla se queda completamente en blanco y el ordenador emite un pitido.", isCorrect: false },
      { id: "B", text: "El navegador muestra todos los archivos y directorios que haya dentro del DocumentRoot (comportamiento denominado 'examen de directorios' o Directory Listing).", isCorrect: true },
      { id: "C", text: "Apache se detiene automáticamente y elimina el servicio del registro de Windows.", isCorrect: false },
      { id: "D", text: "Redirige de inmediato a la página oficial de phpMyAdmin solicitando login.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 6: 'Si le cambiamos el nombre a este fichero o lo eliminamos, el navegador mostraría todos los archivos y directorios que haya dentro del DocumentRoot (a esto se le llama el examen de directorios en servidores web).' Se visualiza 'Index of /' con la lista de carpetas.",
    distractors: {
      A: "No queda en blanco; lista la estructura del disco si Options Indexes está activo.",
      C: "El servidor sigue funcionando con normalidad.",
      D: "No redirige a phpMyAdmin."
    },
    trapNote: "Término oficial del temario: 'Examen de directorios' (Directory Listing). En producción suele deshabilitarse por seguridad."
  },
  {
    id: 114,
    level: "medio",
    topic: 6,
    topicName: "Carpeta de Trabajo: aplicacionesclase",
    page: "XAMPP Pág. 6-7",
    question: "¿Por qué motivo se crea en el temario la carpeta 'C:/xampp/aplicacionesclase' y qué configuración requiere para que el navegador pueda acceder a ella?",
    options: [
      { id: "A", text: "Porque Windows no permite crear archivos dentro de htdocs bajo ninguna circunstancia.", isCorrect: false },
      { id: "B", text: "Para simplificar el trabajo en clase y por seguridad; para acceder a ella desde el navegador es necesario configurar un 'Alias' en Apache.", isCorrect: true },
      { id: "C", text: "Para almacenar virus y troyanos que comprueban la seguridad del cortafuegos.", isCorrect: false },
      { id: "D", text: "Porque MySQL solo puede guardar tablas en carpetas que contengan la palabra 'clase'.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 6-7: 'Para simplificar nuestro trabajo en clase y por seguridad, creamos un directorio en c:/xampp que llamaremos: aplicacionesclase... Pero para poder acceder a ella tendremos que realizar un paso en la configuración de Apache... trabajar con los Alias.'",
    distractors: {
      A: "En htdocs sí se pueden crear archivos, pero mezclarlos con los de XAMPP es poco limpio y menos seguro.",
      C: "No es para almacenar malware.",
      D: "MySQL gestiona sus datos independientemente en la carpeta data."
    },
    trapNote: "Al estar fuera de htdocs (DocumentRoot), Apache NO puede servirla directamente a menos que se declare un Alias."
  },
  {
    id: 115,
    level: "medio",
    topic: 6,
    topicName: "Edición de Configuración: Regla de Oro",
    page: "XAMPP Pág. 7",
    question: "¿Cuál es el primer paso obligatorio que debe realizarse antes de modificar cualquier archivo de configuración de Apache según el temario?",
    options: [
      { id: "A", text: "Formatear la partición del disco duro C:\\.", isCorrect: false },
      { id: "B", text: "Parar el proceso (hacer clic en Stop en el panel de control de XAMPP).", isCorrect: true },
      { id: "C", text: "Desinstalar el navegador web y reinstalarlo.", isCorrect: false },
      { id: "D", text: "Crear una nueva cuenta de usuario en Windows con permisos de invitado.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 7: '3.1. CONFIGURANDO APACHE: Lo primero que debemos hacer es parar el proceso. Después accedemos a la configuración de Apache.'",
    distractors: {
      A: "Formatear el disco destruiría todo el sistema operativo.",
      C: "El navegador no tiene ninguna influencia en la configuración interna de Apache.",
      D: "XAMPP requiere privilegios de Administrador, no de invitado."
    },
    trapNote: "Parar el servicio -> Editar fichero -> Guardar cambios -> Iniciar el servicio (Start)."
  },
  {
    id: 116,
    level: "medio",
    topic: 6,
    topicName: "Fichero httpd.conf y Comentarios",
    page: "XAMPP Pág. 7",
    question: "¿Dónde se encuentra el archivo principal de configuración de Apache y qué carácter indica que una línea es un comentario?",
    options: [
      { id: "A", text: "En C:\\xampp\\php\\php.ini y los comentarios empiezan por '//'.", isCorrect: false },
      { id: "B", text: "En C:\\xampp\\apache\\conf\\httpd.conf y las líneas comentadas van precedidas por '#' (almohadilla).", isCorrect: true },
      { id: "C", text: "En C:\\xampp\\htdocs\\index.html y los comentarios empiezan por '<!--'.", isCorrect: false },
      { id: "D", text: "En C:\\Windows\\System32\\drivers\\etc\\hosts y los comentarios usan ';'.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 7: 'Apache (httpd.conf). Este es el archivo de configuración de Apache, que se encuentra en: C:\\xampp\\apache\\conf. Todas las líneas precedidas por \"#\" no serán ejecutadas. Para activarlas, basta con quitar la \"#\".'",
    distractors: {
      A: "php.ini es de PHP y usa punto y coma (;).",
      C: "index.html es una página web, no la configuración del servidor web.",
      D: "El archivo hosts es para resolución DNS local de Windows."
    },
    trapNote: "¡Ojo al examen! En Apache (httpd.conf) el comentario es `#`. En PHP (php.ini) el comentario es `;`."
  },
  {
    id: 117,
    level: "medio",
    topic: 6,
    topicName: "Directiva Listen y Conflicto en Windows 10",
    page: "XAMPP Pág. 7",
    question: "En `httpd.conf`, ¿qué indica la directiva `Listen 80` y qué solución propone el temario si el sistema operativo produce un conflicto con dicho puerto?",
    options: [
      { id: "A", text: "Indica que Apache solo acepta 80 usuarios concurrentes; si hay conflicto se debe borrar Windows.", isCorrect: false },
      { id: "B", text: "Indica el puerto TCP de escucha de Apache (80 por defecto); si hay conflicto (frecuente en Windows 10), se suele cambiar por el puerto 8080.", isCorrect: true },
      { id: "C", text: "Indica el número máximo de líneas de código PHP que se pueden procesar por script.", isCorrect: false },
      { id: "D", text: "Indica que Apache escucha en la frecuencia de radio FM de 80 MHz.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 7: 'Generalmente sale por el puerto 80. Si el SO te diera un conflicto con el puerto (esto empezó a ocurrir con Win10, pero lo subsanaron), se suele cambiar por el 8080.'",
    distractors: {
      A: "Listen 80 define el puerto de red TCP, no el número de usuarios.",
      C: "El límite de líneas o ejecución lo gestiona PHP (max_execution_time), no Listen.",
      D: "Es un puerto de red TCP/IP, no una frecuencia de radio."
    },
    trapNote: "Si cambias a 8080, para entrar debes escribir en el navegador: `http://localhost:8080`."
  },
  {
    id: 118,
    level: "medio",
    topic: 6,
    topicName: "Directiva ServerName",
    page: "XAMPP Pág. 7",
    question: "¿Cuál es el valor por defecto de la directiva `ServerName` en `httpd.conf` y qué norma práctica establece el temario?",
    options: [
      { id: "A", text: "ServerName miordenador.empresa.com:80 y se debe cambiar obligatoriamente por el nombre del alumno.", isCorrect: false },
      { id: "B", text: "ServerName localhost:80; es una norma de facto, lo llama todo el mundo igual, y por eso no debemos modificarlo.", isCorrect: true },
      { id: "C", text: "ServerName 192.168.1.254:443 y debe apuntar siempre al servidor DNS de Google.", isCorrect: false },
      { id: "D", text: "ServerName null y debe dejarse siempre vacío.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 7: 'Son el nombre del servidor, que generalmente se llama localhost... (esto es una norma de facto, lo llama todo el mundo igual, y por eso no debemos modificarlo) y generalmente sale por el puerto 80.'",
    distractors: {
      A: "El temario desaconseja expresamente cambiar el nombre de localhost.",
      C: "No apunta a DNS públicos ni usa IPs arbitrarias.",
      D: "No debe dejarse en null."
    },
    trapNote: "ServerName localhost:80 es la convención estándar en entornos locales de XAMPP."
  },
  {
    id: 119,
    level: "avanzado",
    topic: 6,
    topicName: "Configuración de Alias: httpd-xampp.conf",
    page: "XAMPP Pág. 7-8",
    question: "¿En qué archivo específico se configuran los Alias en XAMPP para enlazar carpetas externas como 'aplicacionesclase' y dónde se ubica la directiva?",
    options: [
      { id: "A", text: "En C:\\xampp\\php\\php.ini, al final del bloque de directivas de subida de archivos.", isCorrect: false },
      { id: "B", text: "En el archivo httpd-xampp.conf, editado desde la consola de administración de Apache en XAMPP, después de las líneas donde se configura phpmyadmin.", isCorrect: true },
      { id: "C", text: "En C:\\xampp\\htdocs\\.htaccess, creando un script en bash.", isCorrect: false },
      { id: "D", text: "En C:\\xampp\\mysql\\my.ini, dentro de la sección [mysqld].", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 7-8: 'Para ello editamos el fichero httpd-xampp.conf desde la consola de administración de Apache en XAMPP, y después de las líneas donde se configura phpmyadmin añadimos [el bloque del Alias].'",
    distractors: {
      A: "php.ini no gestiona los alias web de Apache; es el intérprete PHP.",
      C: ".htaccess es para sobreescritura local de directorios, no la configuración de XAMPP.",
      D: "my.ini es la configuración del servidor de bases de datos MySQL/MariaDB."
    },
    trapNote: "Fichero clave de examen: `httpd-xampp.conf` (configuraciones específicas de XAMPP para Apache)."
  },
  {
    id: 120,
    level: "avanzado",
    topic: 6,
    topicName: "Sintaxis del Alias en Apache",
    page: "XAMPP Pág. 7-8; Accesos Pág. 3",
    question: "¿Cuál es la sintaxis general de la directiva `Alias` en Apache y cómo queda redactada para 'aplicacionesclase'?",
    options: [
      { id: "A", text: "Directory /aplicacionesclase = C:/xampp/aplicacionesclase/", isCorrect: false },
      { id: "B", text: "El formato general es: 'Alias ruta-URL ruta-carpeta', y queda: 'Alias /aplicacionesclase \"C:/xampp/aplicacionesclase/\"'.", isCorrect: true },
      { id: "C", text: "Symlink C:/xampp/aplicacionesclase/ -> http://localhost", isCorrect: false },
      { id: "D", text: "Redirect 301 /htdocs/aplicacionesclase to C:/xampp/", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 8 y Accesos Pág. 3: 'Alias ruta-URL ruta-carpeta'. En el caso de aplicacionesclase se escribe: Alias /aplicacionesclase \"C:/xampp/aplicacionesclase/\". Permite acceder en el navegador escribiendo: localhost/aplicacionesclase.",
    distractors: {
      A: "Directory es una etiqueta contenedora de permisos (<Directory ...>), no la directiva de redirección de ruta.",
      C: "Symlink es una orden de sistemas de archivos de Linux, no una directiva de Apache.",
      D: "Redirect es para redirecciones HTTP (301/302), no para mapear carpetas físicas fuera de DocumentRoot."
    },
    trapNote: "Estructura obligatoria: `Alias [ruta-URL] [ruta-carpeta-física]`."
  },
  {
    id: 121,
    level: "avanzado",
    topic: 6,
    topicName: "Directiva Options: Indexes",
    page: "XAMPP Pág. 8",
    question: "Dentro del bloque `<Directory \"C:/xampp/aplicacionesclase/\">`, ¿qué función cumple la opción `Indexes` y qué error ocurriría si estuviera desactivada al acceder a una carpeta sin archivo índice?",
    options: [
      { id: "A", text: "Crea un índice de base de datos MySQL en memoria; si falta da error 500.", isCorrect: false },
      { id: "B", text: "Si un cliente solicita un directorio y no existe un archivo índice (index.php, index.html), Apache mostrará el contenido de ese directorio. Si estuviera desactivado y no hubiera índice, mostraría '403 Forbidden'.", isCorrect: true },
      { id: "C", text: "Obliga a que todos los ficheros del directorio terminen en la extensión .idx.", isCorrect: false },
      { id: "D", text: "Traduce automáticamente los nombres de los archivos al idioma del navegador.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 8: 'Con Indexes si un cliente solicita un directorio y no existe un archivo índice (index.php, index.html), Apache mostrará el contenido de ese directorio (si estuviera desactivado y no hubiera índice mostrará \"403 Forbidden\").'",
    distractors: {
      A: "No tiene ninguna relación con índices de bases de datos relacionales.",
      C: "No exige la extensión .idx.",
      D: "No traduce nombres de ficheros."
    },
    trapNote: "Detalle de examen: Si falta index y no hay Indexes activo en Options, el error devuelto por Apache es estrictamente '403 Forbidden'."
  },
  {
    id: 122,
    level: "avanzado",
    topic: 6,
    topicName: "Directiva Options: FollowSymLinks y MultiViews",
    page: "XAMPP Pág. 8",
    question: "¿Qué funciones tienen respectivamente las opciones `FollowSymLinks` y `MultiViews` en la directiva `Options` de Apache?",
    options: [
      { id: "A", text: "FollowSymLinks bloquea enlaces web y MultiViews permite abrir 4 pestañas a la vez.", isCorrect: false },
      { id: "B", text: "FollowSymLinks permite usar enlaces simbólicos en el sistema de archivos, y MultiViews permite la 'negociación del contenido' (que el navegador escoja la mejor representación basándose en sus preferencias: ej. archivo.php o archivo.html).", isCorrect: true },
      { id: "C", text: "FollowSymLinks envía correos a administradores y MultiViews graba la pantalla.", isCorrect: false },
      { id: "D", text: "Ambas sirven para cifrar las contraseñas guardadas en los archivos .htaccess.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 8: 'FollowSymLinks permite usar enlaces simbólicos y MultiViews permite la \"negociación del contenido\" (que el navegador escoja la mejor representación del contenido basándose en sus preferencias: archivo.php o archivo.html).'",
    distractors: {
      A: "MultiViews es negociación de contenido HTTP (Content Negotiation), no pestañas del navegador.",
      C: "No envían correos ni graban vídeo.",
      D: "No cifran contraseñas."
    },
    trapNote: "MultiViews = Negociación de contenido (Content Negotiation según cabeceras Accept del cliente)."
  },
  {
    id: 123,
    level: "avanzado",
    topic: 6,
    topicName: "Directiva AllowOverride: All vs. None",
    page: "XAMPP Pág. 8",
    question: "En un bloque `<Directory>`, ¿qué controla la directiva `AllowOverride` y qué diferencia existe entre asignarle `All` o `None`?",
    options: [
      { id: "A", text: "Controla si se puede sobreescribir el disco duro con un formateo rápido desde la web.", isCorrect: false },
      { id: "B", text: "Controla si Apache permite que los archivos .htaccess dentro del directorio cambien la configuración. 'None' ignora cualquier .htaccess; 'All' permite que sobreescriban la configuración principal (redirecciones, contraseñas, etc.).", isCorrect: true },
      { id: "C", text: "Controla si los alumnos pueden sobreescribir el examen de otros compañeros en el servidor de clase.", isCorrect: false },
      { id: "D", text: "Permite que PHP ejecute comandos de Python dentro del mismo hilo.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 8: 'AllowOverride controla si Apache permite que los archivos .htaccess dentro de ese directorio cambien la configuración... Con AllowOverride None se ignora cualquier archivo .htaccess. Con AllowOverride All se permite que los archivos .htaccess sobreescriban la configuración principal.'",
    distractors: {
      A: "No tiene que ver con formateo de discos.",
      C: "Es una directiva técnica de Apache para archivos .htaccess descentralizados.",
      D: "No tiene relación con lenguajes de programación."
    },
    trapNote: "AllowOverride None = mayor rendimiento y seguridad (ignora .htaccess). AllowOverride All = máxima flexibilidad para desarrolladores."
  },
  {
    id: 124,
    level: "medio",
    topic: 6,
    topicName: "Directiva Require: all granted vs. all denied",
    page: "XAMPP Pág. 8",
    question: "¿Qué efecto tienen en Apache las directivas `Require all granted` y `Require all denied`?",
    options: [
      { id: "A", text: "Garantizan que el código PHP compile a código binario sin errores de sintaxis.", isCorrect: false },
      { id: "B", text: "'Require all granted' permite que todos los clientes tengan acceso al directorio especificado sin restricciones, mientras que 'Require all denied' bloquea el acceso a todos.", isCorrect: true },
      { id: "C", text: "'Require all granted' obliga a introducir usuario y contraseña en todas las peticiones.", isCorrect: false },
      { id: "D", text: "Son directivas exclusivas del servidor de correo Mercury Mail.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 8: 'Require all granted permite que todos los clientes tengan acceso al directorio especificado, sin restricciones. Require all denied bloquea el acceso a todos.'",
    distractors: {
      A: "Son directivas de control de acceso HTTP de Apache (módulo mod_authz_core), no de compilación.",
      C: "all granted NO pide contraseña; concede acceso libre a todo el mundo.",
      D: "Son directivas de Apache HTTP Server, no de Mercury."
    },
    trapNote: "Require all granted = acceso público permitido. Require all denied = acceso prohibido (403 Forbidden)."
  },
  {
    id: 125,
    level: "medio",
    topic: 6,
    topicName: "Configuración de PHP: php.ini y Comentarios",
    page: "XAMPP Pág. 9",
    question: "¿Dónde se encuentra el archivo `php.ini` en XAMPP y qué carácter se utiliza para comentar líneas que no deben ejecutarse?",
    options: [
      { id: "A", text: "En C:\\xampp\\apache\\php.ini y se comenta con '#' (almohadilla).", isCorrect: false },
      { id: "B", text: "En C:\\xampp\\php\\php.ini (cuarta opción del desplegable de Apache) y las líneas comentadas van precedidas por ';' (punto y coma).", isCorrect: true },
      { id: "C", text: "En C:\\xampp\\mysql\\bin\\php.ini y se comenta con comillas dobles '\"'.", isCorrect: false },
      { id: "D", text: "En C:\\htdocs\\php.ini y no admite comentarios de ningún tipo.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 9: 'Al igual que el archivo de configuración de Apache, lo podemos encontrar en C:\\xampp\\php\\php.ini. En este caso, no se ejecutan todas las líneas, precedida por \";\" al igual que antes, si queremos activarlas, basta con quitar el \";\".'",
    distractors: {
      A: "En Apache es '#' pero en php.ini es el punto y coma ';'.",
      C: "No se encuentra en la carpeta de MySQL.",
      D: "Sí admite comentarios y está en la carpeta php de XAMPP."
    },
    trapNote: "Recuerda: Apache httpd.conf = `#`. PHP php.ini = `;`. Clásica pregunta de confusión en examen."
  },
  {
    id: 126,
    level: "medio",
    topic: 6,
    topicName: "Directiva short_open_tag en php.ini",
    page: "XAMPP Pág. 9",
    question: "En `php.ini`, ¿qué delimitadores habilita la directiva `short_open_tag = On` y por qué se recomienda expresamente utilizar siempre `<?php ... ?>`?",
    options: [
      { id: "A", text: "Habilita etiquetas de JavaScript; se recomienda para acelerar la carga en CSS.", isCorrect: false },
      { id: "B", text: "Habilita la notación abreviada <? ... ?>; se recomienda poner <?php ... ?> para identificar claramente el script porque se mezcla con otros lenguajes.", isCorrect: true },
      { id: "C", text: "Habilita etiquetas XML cerradas; se recomienda para no saturar el servidor MySQL.", isCorrect: false },
      { id: "D", text: "Habilita comentarios multilínea con /* y */; se recomienda para documentar funciones.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 9: 'Las etiquetas entre las que se escriben los script php son <?php ... ?>, pero también es posible utilizar la notación abreviada, <? ... ?>, para que esta notación funcione, es necesario poner la directiva anterior a On. Se recomienda poner <?php ... ?> para identificar claramente el script, porque se mezcla con otros lenguajes.'",
    distractors: {
      A: "No tiene que ver con etiquetas de JavaScript.",
      C: "El uso de short_open_tag precisamente colisiona con el prólogo XML <?xml ...?>.",
      D: "No afecta a los comentarios de bloque."
    },
    trapNote: "La notación recomendada y estándar PSR es siempre la etiqueta larga: `<?php ... ?>`."
  },
  {
    id: 127,
    level: "medio",
    topic: 6,
    topicName: "Directiva display_errors: Desarrollo vs. Producción",
    page: "XAMPP Pág. 9",
    question: "¿Cuál es la recomendación profesional respecto a la directiva `display_errors` en PHP durante el desarrollo frente al entorno de producción?",
    options: [
      { id: "A", text: "Debe estar siempre en Off para no gastar tinta si se imprimen los errores en papel.", isCorrect: false },
      { id: "B", text: "Es recomendable poner 'display_errors = On' mientras se está programando para detectar fallos, pero cuando el programa está en producción deben estar desactivados (Off) por seguridad.", isCorrect: true },
      { id: "C", text: "Debe estar en On en producción para que los clientes finales puedan corregir el código del servidor.", isCorrect: false },
      { id: "D", text: "No tiene ningún efecto en PHP 8 ya que los errores siempre se ocultan.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 9: 'Otra modificación a realizar es que muestre los errores que se produzcan. Esto es recomendable mientras se está programando, pero cuando el programa está en producción estarán desactivados.' Exponer errores en producción revela rutas internas y datos sensibles a atacantes.",
    distractors: {
      A: "Los errores se muestran en pantalla en la respuesta HTTP, no en impresoras.",
      C: "Mostrar errores al cliente final en producción es una grave brecha de seguridad.",
      D: "display_errors sigue siendo fundamental en PHP 8."
    },
    trapNote: "Desarrollo = On (depurar rápido). Producción = Off (seguridad y registro privado en log)."
  },
  {
    id: 128,
    level: "medio",
    topic: 6,
    topicName: "Directiva error_reporting en XAMPP",
    page: "XAMPP Pág. 10",
    question: "Según la página 10 de XAMPP, ¿cuál es el valor de la directiva `error_reporting` configurado por defecto?",
    options: [
      { id: "A", text: "error_reporting = 0", isCorrect: false },
      { id: "B", text: "error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT", isCorrect: true },
      { id: "C", text: "error_reporting = E_NOTICE | E_WARNING", isCorrect: false },
      { id: "D", text: "error_reporting = E_CORE_ERROR_ONLY", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 10: En la captura de php.ini se muestra explícitamente: 'error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT'. El temario indica: 'Estas líneas la dejaremos como están con el valor por defecto. Si más adelante vemos que algunas notificaciones son molestas, las eliminaremos.'",
    distractors: {
      A: "error_reporting = 0 silenciaría todos los errores por completo.",
      C: "Muestra todos los errores (E_ALL) excluyendo avisos obsoletos y estrictos.",
      D: "No existe esa constante."
    },
    trapNote: "El operador virgulilla `~` excluye (NOT bit a bit) las constantes que le siguen."
  },
  {
    id: 129,
    level: "avanzado",
    topic: 6,
    topicName: "Configuración Inicial de MySQL: Política de Contraseñas",
    page: "XAMPP Pág. 10",
    question: "¿Qué instrucción categórica da el temario en el apartado 3.3 respecto a poner contraseña al usuario 'root' de MySQL en esta fase inicial de instalación?",
    options: [
      { id: "A", text: "Es obligatorio ponerle una contraseña de 32 caracteres inmediatamente antes de pulsar Start.", isCorrect: false },
      { id: "B", text: "'MySQL no lo vamos a tocar. XAMPP no pone password al Administrador (root), no lo hagas, puesto que hay que cambiar la conexión en phpMyAdmin y puede que no funcione. Estás en local, y en nuestro caso no hay que protegerla.'", isCorrect: true },
      { id: "C", text: "Se debe eliminar el usuario root y crear un usuario llamado 'guest' con permisos totales.", isCorrect: false },
      { id: "D", text: "MySQL no admite contraseñas bajo ninguna versión de Windows.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 10: '3.3. CONFIGURANDO MYSQL: MySQL no lo vamos a tocar. Xampp no pone password al Administrador(root) no lo hagas, puesto que hay que cambiar la conexión del mismo en phpMyAdmin y puede que no funcione. Estás en local, y la base de datos en nuestro caso no hay que protegerla.'",
    distractors: {
      A: "Poner contraseña sin ajustar phpMyAdmin bloquea el acceso de la herramienta web.",
      C: "Nunca se debe borrar el usuario root inicial.",
      D: "MySQL soporta contraseñas y cifrado completo en Windows."
    },
    trapNote: "En la fase 1 de instalación de XAMPP se aconseja NO tocar la clave de root para evitar romper phpMyAdmin, aunque en el tema siguiente de seguridad se enseña a hacerlo paso a paso."
  },

  // ==========================================================================
  // BLOQUE 7: CONFIGURACIÓN DE SEGURIDAD Y ACCESOS (PDF 3 - Pág. 1-3)
  // ==========================================================================
  {
    id: 130,
    level: "basico",
    topic: 7,
    topicName: "Acceso Inicial a phpMyAdmin en XAMPP",
    page: "Accesos Pág. 1",
    question: "Con la configuración inicial que XAMPP da a phpMyAdmin, ¿cómo se realiza el acceso y por qué razón?",
    options: [
      { id: "A", text: "Requiere autenticación de doble factor mediante una app en el móvil.", isCorrect: false },
      { id: "B", text: "Su acceso se hace sin login, ya que está pensado para ser usado para pruebas locales, sin ningún tipo de seguridad.", isCorrect: true },
      { id: "C", text: "Exige el usuario 'admin' y la contraseña 'password123' por defecto.", isCorrect: false },
      { id: "D", text: "Solo se puede entrar si se introduce una tarjeta inteligente en el lector de tarjetas.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 1: 'Con la configuración inicial que XAMPP da a phpmyadmin, su acceso se hace sin login, ya que está pensado para ser usado para pruebas locales, sin ningún tipo de seguridad.'",
    distractors: {
      A: "No utiliza 2FA por defecto.",
      C: "No pide login ni credenciales por defecto.",
      D: "No requiere hardware de tarjetas inteligentes."
    },
    trapNote: "Configuración inicial = acceso directo sin login (auth_type = 'config')."
  },
  {
    id: 131,
    level: "medio",
    topic: 7,
    topicName: "Fichero de Configuración de phpMyAdmin",
    page: "Accesos Pág. 1",
    question: "¿En qué fichero se configuran las opciones de acceso y autenticación de phpMyAdmin en XAMPP?",
    options: [
      { id: "A", text: "En C:\\xampp\\apache\\conf\\httpd.conf.", isCorrect: false },
      { id: "B", text: "En el fichero 'config.inc.php', que se encuentra en la ruta de phpmyadmin (C:\\xampp\\phpMyAdmin).", isCorrect: true },
      { id: "C", text: "En C:\\xampp\\mysql\\data\\mysql.db.", isCorrect: false },
      { id: "D", text: "En C:\\xampp\\php\\php.ini.", isCorrect: false },
    ],
    explanation: "Accesos Pág. 1: 'Si queremos que se haga su acceso solicitando login, debemos hacer los siguientes cambios en el fichero config.inc.php que se encuentra en la ruta de phpmyadmin.'",
    distractors: {
      A: "httpd.conf es el servidor web Apache.",
      C: "mysql.db es un archivo interno de base de datos.",
      D: "php.ini configura el intérprete PHP, no los parámetros de phpMyAdmin."
    },
    trapNote: "Fichero clave: `config.inc.php` dentro de la carpeta `phpMyAdmin`."
  },
  {
    id: 132,
    level: "avanzado",
    topic: 7,
    topicName: "Habilitar Formulario de Login: auth_type cookie",
    page: "Accesos Pág. 1",
    question: "Para solicitar formulario de login con ventana emergente al acceder a phpMyAdmin, ¿qué línea debe modificarse en `config.inc.php`?",
    options: [
      { id: "A", text: "Cambiar $cfg['Login'] = true;", isCorrect: false },
      { id: "B", text: "Comentar //$cfg['Servers'][$i]['auth_type'] = 'config'; y añadir $cfg['Servers'][$i]['auth_type'] = 'cookie';", isCorrect: true },
      { id: "C", text: "Cambiar $cfg['Servers'][$i]['auth_type'] = 'session_token_bearer';", isCorrect: false },
      { id: "D", text: "Cambiar AuthType Basic en el fichero php.ini.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 1: '//$cfg['Servers'][$i]['auth_type'] = 'config'; $cfg['Servers'][$i]['auth_type'] = 'cookie'; //para solicitar formulario de login. De esta manera ya nos aparecerá la ventana de login al acceder a phpmyadmin.'",
    distractors: {
      A: "La directiva no se llama $cfg['Login'].",
      C: "El valor estándar de phpMyAdmin es 'cookie' (o 'http'), no 'session_token_bearer'.",
      D: "AuthType Basic es una directiva de Apache, no de config.inc.php."
    },
    trapNote: "De 'config' (automático e inseguro) a 'cookie' (solicita usuario y contraseña por formulario web)."
  },
  {
    id: 133,
    level: "avanzado",
    topic: 7,
    topicName: "Acceso sin Contraseña: AllowNoPassword",
    page: "Accesos Pág. 1-2",
    question: "Tras cambiar `auth_type` a `'cookie'`, ¿por qué inicialmente se puede seguir accediendo sin introducir contraseña y qué cambio se requiere para que sea obligatoria?",
    options: [
      { id: "A", text: "Porque Windows ignora las cookies; hay que reiniciar el ordenador 3 veces.", isCorrect: false },
      { id: "B", text: "Porque por defecto AllowNoPassword está a true; para que la contraseña sea obligatoria se debe cambiar: $cfg['Servers'][$i]['AllowNoPassword'] = false;", isCorrect: true },
      { id: "C", text: "Porque MySQL siempre permite entrar con cualquier contraseña que empiece por '123'.", isCorrect: false },
      { id: "D", text: "Porque Apache requiere instalar una extensión de pago en la web oficial.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 1-2: 'Podremos acceder a phpmyadmin sin introducir contraseña. Si queremos que la contraseña sea obligatoria, debemos cambiar esta línea en el config.inc.php: //$cfg['Servers'][$i]['AllowNoPassword'] = true; $cfg['Servers'][$i]['AllowNoPassword'] = false;'.",
    distractors: {
      A: "Windows no ignora cookies y reiniciar el PC no cambia la configuración del script.",
      C: "MySQL no tiene ninguna regla con '123'.",
      D: "phpMyAdmin y Apache son 100% gratuitos y de código abierto."
    },
    trapNote: "Para obligar a escribir clave: `AllowNoPassword = false`."
  },
  {
    id: 134,
    level: "medio",
    topic: 7,
    topicName: "Mensaje de Error de AllowNoPassword",
    page: "Accesos Pág. 2",
    question: "Si se configura `AllowNoPassword = false` y el usuario root no tiene contraseña e intenta acceder a phpMyAdmin sin escribir clave, ¿qué mensaje de error exacto muestra la pantalla?",
    options: [
      { id: "A", text: "'Error 404 Not Found: Servidor de base de datos no localizado'.", isCorrect: false },
      { id: "B", text: "'El inicio de sesión sin contraseña está prohibido por la configuración (ver AllowNoPassword)'.", isCorrect: true },
      { id: "C", text: "'Contraseña incorrecta: le quedan 2 intentos antes del bloqueo'.", isCorrect: false },
      { id: "D", text: "'Acceso concedido temporalmente en modo de emergencia'.", isCorrect: false },
    ],
    explanation: "Accesos Pág. 2: La captura oficial de phpMyAdmin muestra el aviso en recuadro rosa: 'El inicio de sesión sin contraseña está prohibido por la configuración (ver AllowNoPassword)'.",
    distractors: {
      A: "No es un error 404 HTTP de archivo no encontrado.",
      C: "No hay límite de intentos ni contador de bloqueos.",
      D: "No existe modo de emergencia en phpMyAdmin."
    },
    trapNote: "Fíjate en la cita literal: '(ver AllowNoPassword)'."
  },
  {
    id: 135,
    level: "basico",
    topic: 7,
    topicName: "Contraseña Inicial de root",
    page: "Accesos Pág. 2",
    question: "¿Qué contraseña tiene por defecto el usuario administrador 'root' de MySQL en una instalación recién completada de XAMPP?",
    options: [
      { id: "A", text: "Tiene la contraseña 'admin'.", isCorrect: false },
      { id: "B", text: "Tiene la contraseña 'root'.", isCorrect: false },
      { id: "C", text: "El usuario root NO tiene contraseña (está completamente vacía).", isCorrect: true },
      { id: "D", text: "Tiene una clave aleatoria generada en el archivo passwords.txt.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 2: 'El usuario root no tiene contraseña, se la podemos poner de la siguiente manera, desde la shell de xampp o desde el disco duro en la ruta de mysql/bin.'",
    distractors: {
      A: "No tiene 'admin'.",
      B: "Trampa clásica: en muchas distribuciones Linux es 'root', pero en XAMPP para Windows está vacía (sin contraseña).",
      D: "No genera contraseñas aleatorias."
    },
    trapNote: "¡Ojo al examen! En XAMPP, el usuario root NO tiene contraseña inicial."
  },
  {
    id: 136,
    level: "avanzado",
    topic: 7,
    topicName: "Asignación Inicial de Clave con mysqladmin",
    page: "Accesos Pág. 2",
    question: "¿Cuál es el comando exacto que se utiliza para asignar por primera vez una contraseña al usuario root cuando este AÚN NO TIENE contraseña?",
    options: [
      { id: "A", text: "mysql -u root set password = 'nueva'", isCorrect: false },
      { id: "B", text: "mysqladmin -u root password", isCorrect: true },
      { id: "C", text: "mysqladmin -u root -p password nueva_contraseña", isCorrect: false },
      { id: "D", text: "passwd root --xampp", isCorrect: false }
    ],
    explanation: "Accesos Pág. 2: 'El usuario root no tiene contraseña, se la podemos poner de la siguiente manera...: mysqladmin -u root password (Nos pide la nueva contraseña). Este comando se utiliza cuando root no tiene aún contraseña.'",
    distractors: {
      A: "mysql es el cliente interactivo SQL; para gestión administrativa rápida de contraseñas se usa la utilidad mysqladmin.",
      C: "El flag -p se usa cuando root YA tiene contraseña previa (para pedir la antigua).",
      D: "passwd es una orden de Linux para cuentas del sistema operativo."
    },
    trapNote: "Cuando NO tiene clave: `mysqladmin -u root password` (sin el flag `-p`)."
  },
  {
    id: 137,
    level: "avanzado",
    topic: 7,
    topicName: "Cambio de Clave Existente con mysqladmin: Flag -p",
    page: "Accesos Pág. 2",
    question: "Una vez que el usuario root YA tiene una contraseña establecida, ¿qué comando exacto se debe ejecutar para cambiarla por una nueva?",
    options: [
      { id: "A", text: "mysqladmin -u root password", isCorrect: false },
      { id: "B", text: "mysqladmin -u root -p password nueva_contraseña", isCorrect: true },
      { id: "C", text: "alter user root identified by 'nueva';", isCorrect: false },
      { id: "D", text: "xampp-cli mysql change-root-key nueva_contraseña", isCorrect: false }
    ],
    explanation: "Accesos Pág. 2: 'Una vez que tiene contraseña root, podríamos cambiarla con este comando: mysqladmin -u root -p password nueva_contraseña (Nos pedirá a continuación la antigua para realizar el cambio de contraseña).'",
    distractors: {
      A: "Sin -p fallará con error de acceso denegado porque root ya tiene contraseña.",
      C: "Esa es la sentencia SQL dentro del cliente mysql, no el comando ejecutable de consola mysqladmin.",
      D: "Ese comando no existe en XAMPP."
    },
    trapNote: "El parámetro `-p` es indispensable para que solicite por pantalla la contraseña antigua antes de asignar la nueva."
  },
  {
    id: 138,
    level: "medio",
    topic: 7,
    topicName: "Ubicación de mysqladmin",
    page: "Accesos Pág. 2",
    question: "¿Desde qué dos lugares indica el temario que podemos ejecutar la herramienta `mysqladmin`?",
    options: [
      { id: "A", text: "Desde el navegador web en localhost/mysqladmin o desde Word.", isCorrect: false },
      { id: "B", text: "Desde el botón 'Shell' del panel de control de XAMPP o desde el disco duro en la ruta 'C:\\xampp\\mysql\\bin'.", isCorrect: true },
      { id: "C", text: "Exclusivamente desde una máquina virtual con Ubuntu Server.", isCorrect: false },
      { id: "D", text: "Desde la BIOS del ordenador antes de iniciar Windows.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 2: '...se la podemos poner de la siguiente manera, desde la shell de xampp o desde el disco duro en la ruta de mysql/bin.'",
    distractors: {
      A: "mysqladmin es una herramienta ejecutable de consola (.exe), no una página web.",
      C: "Se ejecuta en Windows de forma nativa.",
      D: "No tiene que ver con la BIOS."
    },
    trapNote: "Botón 'Shell' en la parte derecha del Panel de Control de XAMPP o terminal CMD en `mysql/bin`."
  },
  {
    id: 139,
    level: "medio",
    topic: 7,
    topicName: "Resolución de URLs en Apache",
    page: "Accesos Pág. 3",
    question: "Según el ejemplo de la página 3, cuando un cliente introduce la URL `http://servidor.web/carpeta/archivo.html`, ¿dónde busca exactamente Apache ese archivo en XAMPP?",
    options: [
      { id: "A", text: "En C:\\xampp\\carpeta\\archivo.html fuera de cualquier DocumentRoot.", isCorrect: false },
      { id: "B", text: "En la carpeta principal donde se alojan las páginas web (DocumentRoot), que en XAMPP es htdocs, con la ruta: C:/xampp/htdocs/carpeta/archivo.html.", isCorrect: true },
      { id: "C", text: "En la nube de GitHub dentro de un repositorio público.", isCorrect: false },
      { id: "D", text: "En C:\\Windows\\System32\\carpeta\\archivo.html.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 3: 'Normalmente, cuando se indica una URL como la siguiente http://servidor.web/carpeta/archivo.html, estamos buscando el archivo llamado archivo.html en la carpeta llamada carpeta que se debe encontrar en la carpeta principal del servidor web donde se alojan las páginas web (DocumentRoot) que en xampp es htdocs (la ruta sería: c:/xampp/htdocs/carpeta/archivo.html).'",
    distractors: {
      A: "No busca en la raíz de xampp; busca dentro del DocumentRoot (htdocs).",
      C: "No busca en GitHub.",
      D: "No busca en las carpetas del sistema Windows."
    },
    trapNote: "Ruta física calculada: `DocumentRoot + ruta de la URL`."
  },
  {
    id: 140,
    level: "avanzado",
    topic: 7,
    topicName: "Definición y Objetivo de la directiva Alias",
    page: "Accesos Pág. 3",
    question: "¿Para qué sirve la directiva `Alias` en la configuración del servidor web Apache y qué formato obligatorio tiene?",
    options: [
      { id: "A", text: "Para renombrar variables dentro de un script PHP; formato 'Alias $var1 $var2'.", isCorrect: false },
      { id: "B", text: "Para redireccionar la ruta de una dirección web a una carpeta que no se encuentre forzosamente dentro de la especificada como DocumentRoot; formato 'Alias ruta-URL ruta-carpeta'.", isCorrect: true },
      { id: "C", text: "Para crear apodos de usuarios en el chat de phpMyAdmin.", isCorrect: false },
      { id: "D", text: "Para cambiar la clave de acceso de MySQL sin usar mysqladmin.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 3: 'En la configuración del servidor web Apache es posible crear alias para redireccionar la ruta de una dirección web a una carpeta que no se encuentre forzosamente dentro de la especificada como DocumentRoot. Para ello se debe usar la directiva alias con el siguiente formato: Alias ruta-URL ruta-carpeta.'",
    distractors: {
      A: "Es una directiva de Apache para mapeo de directorios, no para variables de PHP.",
      C: "No es un sistema de mensajería.",
      D: "No cambia contraseñas de bases de datos."
    },
    trapNote: "Un Alias 'engaña' al cliente web haciendo que una carpeta externa parezca estar dentro del servidor web."
  },
  {
    id: 141,
    level: "avanzado",
    topic: 7,
    topicName: "Restricción de phpMyAdmin por Defecto: Require local",
    page: "Accesos Pág. 3",
    question: "En el fichero `httpd-xampp.conf`, dentro del bloque `<Directory \"C:/xampp/phpMyAdmin\">`, ¿qué significa la directiva por defecto `Require local`?",
    options: [
      { id: "A", text: "Que phpMyAdmin solo puede guardar bases de datos en discos duros locales y no en memorias USB.", isCorrect: false },
      { id: "B", text: "Que solamente se podrá acceder a phpMyAdmin desde el mismo equipo en el que se encuentra instalado (localhost / 127.0.0.1).", isCorrect: true },
      { id: "C", text: "Que solo funciona si el ordenador no tiene conexión de red física conectada.", isCorrect: false },
      { id: "D", text: "Que los alumnos locales tienen prioridad sobre los profesores.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 3: 'Como vemos, en el fichero hay creado un alias para phpmyadmin, en el que se le indica un permiso Require local que indica que sólamente se podrá acceder a phpmyadmin desde el mismo equipo en el que se encuentra instalado.'",
    distractors: {
      A: "No controla los medios de almacenamiento físico.",
      C: "Puede haber conexión de red, pero Apache rechazará las peticiones provenientes de otras IPs.",
      D: "No distingue entre roles académicos."
    },
    trapNote: "Require local = solo peticiones originadas desde la propia máquina local (loopback)."
  },
  {
    id: 142,
    level: "avanzado",
    topic: 7,
    topicName: "Permitir Acceso a phpMyAdmin desde Toda la Red (LAN)",
    page: "Accesos Pág. 3",
    question: "Para poder administrar phpMyAdmin desde cualquier equipo o IP de la red local, ¿qué cambio exacto debe realizarse en `httpd-xampp.conf`?",
    options: [
      { id: "A", text: "Cambiar la línea 'Require local' por 'Require all granted' dentro del bloque <Directory \"C:/xampp/phpMyAdmin\"> y reiniciar Apache.", isCorrect: true },
      { id: "B", text: "Borrar el fichero httpd-xampp.conf por completo.", isCorrect: false },
      { id: "C", text: "Cambiar 'Require local' por 'Require user admin'.", isCorrect: false },
      { id: "D", text: "Poner 'AllowOverride None' en el archivo php.ini.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 3: 'Modificamos la línea Require local por Require all granted: <Directory \"C:/xampp/phpMyAdmin\"> AllowOverride AuthConfig Require all granted ErrorDocument 403 /error/XAMPP_FORBIDDEN.html.var </Directory>. De esta manera permitimos el acceso al alias phpmyadmin desde cualquier IP.'",
    distractors: {
      B: "Borrar el fichero rompería la configuración de XAMPP.",
      C: "Require user requeriría configuración previa de autenticación HTTP que no se ha realizado.",
      D: "php.ini no gestiona directivas de Apache."
    },
    trapNote: "De `Require local` (solo yo) a `Require all granted` (cualquier equipo de la red)."
  },
  {
    id: 143,
    level: "medio",
    topic: 7,
    topicName: "Asignación de Permisos: Bloque Directory",
    page: "Accesos Pág. 3",
    question: "¿Qué directiva contenedora de Apache es indispensable utilizar para asignar permisos de seguridad y acceso una vez establecido un Alias?",
    options: [
      { id: "A", text: "<VirtualHost>", isCorrect: false },
      { id: "B", text: "<Directory>", isCorrect: true },
      { id: "C", text: "<LocationMatch>", isCorrect: false },
      { id: "D", text: "<FilesSecurity>", isCorrect: false }
    ],
    explanation: "Accesos Pág. 3: 'Una vez establecido el alias debes recordar asignar los permisos adecuados usando la directiva <Directory>.' En ella se configuran AllowOverride, Options y Require.",
    distractors: {
      A: "<VirtualHost> es para alojar múltiples dominios en un mismo servidor.",
      C: "<LocationMatch> aplica a URLs mediante expresiones regulares, no rutas de carpetas de disco.",
      D: "FilesSecurity no existe como directiva estándar en Apache."
    },
    trapNote: "`Alias` define la ruta web; `<Directory>` define qué está permitido hacer dentro de esa carpeta física."
  },
  {
    id: 144,
    level: "medio",
    topic: 7,
    topicName: "Gestión de Errores: ErrorDocument 403",
    page: "Accesos Pág. 3",
    question: "En el bloque `<Directory \"C:/xampp/phpMyAdmin\">`, ¿qué función tiene la directiva `ErrorDocument 403 /error/XAMPP_FORBIDDEN.html.var`?",
    options: [
      { id: "A", text: "Envía un virus a cualquier usuario que cometa un error en la base de datos.", isCorrect: false },
      { id: "B", text: "Personaliza la página mostrada cuando un cliente intenta acceder sin permisos (error 403 Prohibido), mostrando una pantalla informativa de advertencia de XAMPP.", isCorrect: true },
      { id: "C", text: "Obliga al usuario a reiniciar el router si se desconecta de la red.", isCorrect: false },
      { id: "D", text: "Registra en una tabla MySQL las contraseñas incorrectas introducidas.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 3: ErrorDocument 403 define el documento personalizado que Apache entrega cuando se rechaza el acceso por directivas Require (HTTP 403 Forbidden).",
    distractors: {
      A: "No envía malware.",
      C: "No reinicia routers.",
      D: "No interactúa con bases de datos relacionales; es una directiva nativa de Apache."
    },
    trapNote: "Error 403 = Forbidden (Acceso denegado o prohibido)."
  },
  {
    id: 145,
    level: "avanzado",
    topic: 7,
    topicName: "Cadena de Securización Completa de phpMyAdmin",
    page: "Accesos Pág. 1-3",
    question: "¿Cuál es la secuencia completa y coherente de acciones para securizar phpMyAdmin en local según la guía oficial?",
    options: [
      { id: "A", text: "1. Desinstalar XAMPP. 2. Instalar Linux. 3. Rezar para que funcione.", isCorrect: false },
      { id: "B", text: "1. En config.inc.php cambiar auth_type a 'cookie'. 2. En config.inc.php poner AllowNoPassword a false. 3. Asignar contraseña a root con 'mysqladmin -u root password'.", isCorrect: true },
      { id: "C", text: "1. Poner AllowNoPassword a true. 2. Cambiar auth_type a 'config'. 3. Borrar el usuario root.", isCorrect: false },
      { id: "D", text: "1. Cambiar el puerto de Apache a 8080. 2. Ejecutar phpinfo(). 3. Apagar el cortafuegos.", isCorrect: false }
    ],
    explanation: "Accesos Pág. 1-2: Pasos: 1) Activar formulario de login con auth_type = 'cookie'. 2) Impedir logins sin clave con AllowNoPassword = false. 3) Poner contraseña al usuario root con mysqladmin -u root password. Con estas 3 acciones se consigue que para acceder a phpmyadmin desde local pida credenciales de forma estricta.",
    distractors: {
      A: "Es una respuesta humorística no técnica.",
      C: "Esa configuración dejaría el sistema completamente desprotegido.",
      D: "No tiene nada que ver con phpinfo ni cortafuegos."
    },
    trapNote: "Esta secuencia de 3 pasos (cookie + AllowNoPassword false + mysqladmin password) es la práctica evaluable típica de examen de taller DWES."
  },
  {
    id: 146,
    level: "medio",
    topic: 7,
    topicName: "Cambio de Entorno: Local vs. Hosting de Producción",
    page: "XAMPP Pág. 10",
    question: "En el tema 3.3 de XAMPP, ¿qué ocurrirá con el usuario Administrador y la contraseña cuando la aplicación web desarrollada en local se suba a un servidor de hosting o dominio definitivo en Internet?",
    options: [
      { id: "A", text: "El servidor de hosting utilizará automáticamente la misma contraseña que teníamos en nuestro PC local de clase.", isCorrect: false },
      { id: "B", text: "Cambiará el usuario administrador (te lo proporcionará el servidor de hosting contratado), así como el nombre de la base de datos y la contraseña, por lo que habrá que actualizar la conexión de la aplicación.", isCorrect: true },
      { id: "C", text: "El hosting borrará todos los scripts PHP porque solo admite archivos HTML planos.", isCorrect: false },
      { id: "D", text: "Será obligatorio viajar físicamente al centro de datos del proveedor para teclear la contraseña en su teclado.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 10: 'Cuando la aplicación suba al dominio web cambiará el usuario administrador (te lo dará el servidor que contrates) así como el nombre de la base de datos, y la contraseña será la que luego tengas. Por tanto, aunque la cambies, posteriormente tendrás que hacerlo otra vez.'",
    distractors: {
      A: "Los proveedores de hosting asignan usuarios y bases de datos aisladas por seguridad multiusuario.",
      C: "Los hostings PHP soportan bases de datos y scripts dinámicos.",
      D: "La configuración se realiza de forma remota vía panel de control (cPanel, Plesk) o SSH."
    },
    trapNote: "En local trabajamos con `root` sin contraseña para agilidad; en producción el hosting proporciona credenciales seguras dedicadas."
  },
  {
    id: 147,
    level: "avanzado",
    topic: 7,
    topicName: "Reinicio de Apache tras Cambios de Configuración",
    page: "XAMPP Pág. 8; Accesos Pág. 3",
    question: "¿Por qué tras modificar `httpd.conf` o `httpd-xampp.conf` los cambios NO tienen efecto inmediato en el navegador y qué acción es obligatoria?",
    options: [
      { id: "A", text: "Porque Windows guarda una copia en caché del disco durante 24 horas y no hay forma de forzarlo.", isCorrect: false },
      { id: "B", text: "Porque Apache solo lee sus ficheros de configuración al arrancar el servicio; para que los cambios tengan efecto hay que parar (Stop) e iniciar (Start) Apache.", isCorrect: true },
      { id: "C", text: "Porque hay que recompilar Apache con Visual Studio Code en cada cambio.", isCorrect: false },
      { id: "D", text: "Porque hay que borrar las cookies del navegador de los últimos 3 meses.", isCorrect: false }
    ],
    explanation: "XAMPP Pág. 8 y Accesos Pág. 3: 'Para que los cambios tengan efecto hay que parar e iniciar Apache.' Apache carga la configuración en memoria en el arranque de su proceso; no sondea el archivo en caliente para evitar sobrecarga de I/O.",
    distractors: {
      A: "No hay espera de 24 horas; basta con reiniciar el proceso.",
      C: "No se recompila nada; es un servidor precompilado.",
      D: "Las cookies del cliente no afectan a la configuración del servidor web Apache."
    },
    trapNote: "Regla sagrada de administración: 'Todo cambio en ficheros de Apache requiere parada y arranque del servicio para entrar en vigor'."
  }

];

// Comprobación de integridad
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS_DATA };
}
