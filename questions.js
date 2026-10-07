// ==========================================================================
// BANCO EXHAUSTIVO OFICIAL DE PREGUNTAS - DWES UNIDAD 1: ARQUITECTURAS WEB
// Ciclos Formativos: DAW & DAM | 90 Preguntas ExtraÃ­das LÃ­nea por LÃ­nea
// Basado 100% en el documento oficial (20 pÃ¡ginas)
// ==========================================================================

const QUESTIONS_DATA = [
  // ==========================================================================
  // BLOQUE 1: PÃGINAS ESTÃTICAS, DINÃMICAS, SEO, APLICACIONES WEB Y SPA (PÃ¡g. 1-8)
  // ==========================================================================
  {
    id: 1,
    level: "basico",
    topic: 1,
    topicName: "PÃ¡ginas EstÃ¡ticas vs. DinÃ¡micas",
    page: "PÃ¡g. 1-2",
    question: "Â¿QuÃ© ocurre en el servidor web cuando un cliente solicita una pÃ¡gina web estÃ¡tica (.html o .htm)?",
    options: [
      { id: "A", text: "El servidor compila el cÃ³digo HTML a cÃ³digo binario y lo almacena en cachÃ© antes de enviarlo.", isCorrect: false },
      { id: "B", text: "El servidor busca la pÃ¡gina en su almacÃ©n de pÃ¡ginas (habitualmente un archivo), la recupera tal cual estÃ¡ almacenada y la envÃ­a al navegador.", isCorrect: true },
      { id: "C", text: "El servidor contacta necesariamente con una base de datos para verificar la integridad del contenido estÃ¡tico.", isCorrect: false },
      { id: "D", text: "El servidor delega la peticiÃ³n a un mÃ³dulo ejecutor como mod_php para interpretar las etiquetas de estilo.", isCorrect: false }
    ],
    explanation: "En las pÃ¡ginas estÃ¡ticas, el servidor simplemente busca el archivo en su almacÃ©n de archivos (paso 2 del ciclo), lo recupera (paso 3) y lo envÃ­a tal cual al navegador (paso 4). No hay procesamiento ni ejecuciÃ³n de cÃ³digo en el servidor.",
    distractors: {
      A: "El HTML no se compila en el servidor; es un lenguaje de marcas interpretado por el navegador.",
      C: "Las pÃ¡ginas estÃ¡ticas no requieren base de datos en absoluto.",
      D: "mod_php solo interviene con scripts PHP, no con pÃ¡ginas estÃ¡ticas HTML/CSS."
    },
    trapNote: "Recuerda el esquema de 4 pasos de la pÃ¡gina 2: el contenido almacenado en el servidor coincide al 100% con el enviado al cliente."
  },
  {
    id: 2,
    level: "basico",
    topic: 1,
    topicName: "Estructura Web: HTML y CSS",
    page: "PÃ¡g. 1",
    question: "En una pÃ¡gina web bien estructurada, Â¿cuÃ¡l es la funciÃ³n diferenciada del lenguaje de marcado (HTML/XHTML) y de las hojas de estilo (CSS)?",
    options: [
      { id: "A", text: "HTML ejecuta la lÃ³gica de base de datos en el cliente y CSS compila el cÃ³digo a JavaScript.", isCorrect: false },
      { id: "B", text: "HTML/XHTML define el contenido y el objetivo de cada una de sus partes mediante etiquetas; CSS almacena en otro fichero el estilo con que el navegador debe mostrar cada parte.", isCorrect: true },
      { id: "C", text: "HTML se utiliza Ãºnicamente para conexiones HTTPS seguras y CSS para peticiones HTTP no cifradas.", isCorrect: false },
      { id: "D", text: "No existe ninguna separaciÃ³n: los estilos CSS deben escribirse obligatoriamente en el servidor Apache dentro de httpd.conf.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 1: 'Este contenido estÃ¡ programado en un lenguaje de marcado, formado por etiquetas, que puede ser HTML o XHTML. Las etiquetas indican el objetivo de cada una de las partes... AdemÃ¡s, si la pÃ¡gina estÃ¡ bien estructurada, la informaciÃ³n que indica el estilo estarÃ¡ almacenado en otro fichero, una hoja de estilos o CSS que el navegador descarga junto a Ã©sta'.",
    distractors: {
      A: "HTML no ejecuta lÃ³gica de bases de datos ni CSS compila JavaScript.",
      C: "HTML y CSS son independientes de si la conexiÃ³n es HTTP o HTTPS.",
      D: "CSS es un archivo que se descarga al cliente web, no una directiva de httpd.conf."
    },
    trapNote: "HTML indica el contenido y objetivo de las partes (encabezados, tablas, pÃ¡rrafos); CSS indica la apariencia y presentaciÃ³n."
  },
  {
    id: 3,
    level: "medio",
    topic: 1,
    topicName: "Reglas de Formato CSS en el PDF",
    page: "PÃ¡g. 1-2",
    question: "En la pÃ¡gina 2 del temario, Â¿quÃ© ejemplos concretos de directivas de estilo se mencionan para ilustrar lo que contiene una hoja de estilos CSS?",
    options: [
      { id: "A", text: "Estilos que configuran la tasa de refresco del monitor a 120Hz y el tamaÃ±o del bÃºfer de red.", isCorrect: false },
      { id: "B", text: "Estilos que indican que el encabezado debe ir con tipo de letra Arial y en color rojo, o que los pÃ¡rrafos deben ir alineados a la izquierda.", isCorrect: true },
      { id: "C", text: "Estilos que cifran el trÃ¡fico TCP entre el navegador y la base de datos MariaDB.", isCorrect: false },
      { id: "D", text: "Reglas para compilar los servlets de Java EE en cÃ³digo nativo de la GPU.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 2 literal: 'En ella nos podemos encontrar, por ejemplo, estilos que indican que el encabezado debe ir con tipo de letra Arial y en color rojo, o que los pÃ¡rrafos deben ir alineados a la izquierda'.",
    distractors: {
      A: "CSS no controla la tasa de refresco del monitor ni bÃºferes de red.",
      C: "CSS no tiene funciones de cifrado de trÃ¡fico TCP.",
      D: "Los servlets se ejecutan en el servidor, no en CSS."
    },
    trapNote: "Pregunta de detalle puro del texto: encabezado con letra Arial y color rojo, pÃ¡rrafos alineados a la izquierda."
  },
  {
    id: 4,
    level: "basico",
    topic: 1,
    topicName: "Ciclo de PeticiÃ³n EstÃ¡tica (4 Pasos)",
    page: "PÃ¡g. 2",
    question: "Â¿CuÃ¡l es el orden secuencial exacto de los 4 pasos que se suceden cuando se solicita una pÃ¡gina web estÃ¡tica?",
    options: [
      { id: "A", text: "1. El servidor envÃ­a HTML -> 2. El cliente compila -> 3. Se crea un proceso CGI -> 4. Se guarda en BD.", isCorrect: false },
      { id: "B", text: "1. Tu ordenador solicita al servidor una pÃ¡gina (.htm, .html o .xhtml) -> 2. El servidor busca esa pÃ¡gina en su almacÃ©n -> 3. Si la encuentra, la recupera -> 4. La envÃ­a al navegador para mostrar su contenido.", isCorrect: true },
      { id: "C", text: "1. El navegador ejecuta PHP -> 2. El servidor busca en Apache -> 3. Se genera un archivo .zip -> 4. Se descarga en USB.", isCorrect: false },
      { id: "D", text: "1. El servidor contacta con el cliente -> 2. El cliente envÃ­a su base de datos -> 3. Se interpreta CSS -> 4. Fin de conexiÃ³n.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 2 enumera textualmente los pasos: 1. Tu ordenador solicita a un servidor web una pÃ¡gina con extensiÃ³n .htm, .html o .xhtml. 2. El servidor busca esa pÃ¡gina en un almacÃ©n de pÃ¡ginas (cada una suele ser un fichero). 3. Si el servidor encuentra esa pÃ¡gina, la recupera. 4. Y por Ãºltimo la envÃ­a al navegador para que Ã©ste pueda mostrar su contenido.",
    distractors: {
      A: "No hay compilaciÃ³n ni CGI en pÃ¡ginas estÃ¡ticas.",
      C: "El navegador nunca ejecuta PHP.",
      D: "El cliente inicia la peticiÃ³n, no el servidor."
    },
    trapNote: "FÃ­jate en las extensiones citadas: .htm, .html o .xhtml, y que el almacÃ©n de pÃ¡ginas habitualmente es el sistema de ficheros."
  },
  {
    id: 5,
    level: "basico",
    topic: 1,
    topicName: "Roles Cliente-Servidor",
    page: "PÃ¡g. 2",
    question: "En una comunicaciÃ³n cliente-servidor web tÃ­pica, Â¿cÃ³mo define el temario los roles del cliente y del servidor?",
    options: [
      { id: "A", text: "El servidor siempre inicia la comunicaciÃ³n y el cliente es el que atiende y aloja los archivos.", isCorrect: false },
      { id: "B", text: "El cliente es el que hace la peticiÃ³n e inicia la comunicaciÃ³n, y el servidor es el que recibe la peticiÃ³n y la atiende. El navegador es el cliente web.", isCorrect: true },
      { id: "C", text: "Ambos actÃºan como servidores simÃ©tricos en una red P2P sin clientes.", isCorrect: false },
      { id: "D", text: "El cliente es el sistema operativo del servidor y el navegador es el mÃ³dulo ejecutor.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 2: 'Este es un ejemplo tÃ­pico de una comunicaciÃ³n cliente-servidor. El cliente es el que hace la peticiÃ³n e inicia la comunicaciÃ³n, y el servidor es el que recibe la peticiÃ³n y la atiende. El navegador es el cliente web'.",
    distractors: {
      A: "El servidor nunca inicia la comunicaciÃ³n en el protocolo HTTP tradicional.",
      C: "La arquitectura web es cliente-servidor asimÃ©trica, no P2P.",
      D: "El cliente web es el navegador."
    },
    trapNote: "Concepto bÃ¡sico: Cliente = solicita e inicia; Servidor = recibe y atiende. Navegador = cliente web."
  },
  {
    id: 6,
    level: "medio",
    topic: 1,
    topicName: "Variables de PÃ¡ginas DinÃ¡micas",
    page: "PÃ¡g. 2",
    question: "SegÃºn el documento, las pÃ¡ginas web dinÃ¡micas se caracterizan porque su contenido cambia en funciÃ³n de diversas variables. Â¿CuÃ¡les son las tres variables citadas explÃ­citamente en el temario?",
    options: [
      { id: "A", text: "La velocidad de la CPU local, la versiÃ³n de la BIOS y el tipo de memoria RAM.", isCorrect: false },
      { id: "B", text: "El navegador que estÃ¡s usando, el usuario con el que te has identificado y las acciones que has efectuado con anterioridad.", isCorrect: true },
      { id: "C", text: "La direcciÃ³n MAC del router, la marca del monitor y la temperatura ambiente del servidor.", isCorrect: false },
      { id: "D", text: "La versiÃ³n del compilador de C, el uso de mod_perl y el tamaÃ±o del archivo httpd.conf.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 2 literal: 'su contenido cambia en funciÃ³n de diversas variables, como puede ser el navegador que estÃ¡s usando, el usuario con el que te has identificado, o las acciones que has efectuado con anterioridad'.",
    distractors: {
      A: "La CPU, BIOS o RAM no son las variables funcionales citadas en el texto.",
      C: "La MAC, monitor o temperatura son distractores absurdos de hardware.",
      D: "Variables de configuraciÃ³n interna del servidor, no del usuario/sesiÃ³n."
    },
    trapNote: "Memoriza la trÃ­ada de variables de la pÃ¡g. 2: 1) Navegador usado, 2) Usuario identificado, 3) Acciones previas."
  },
  {
    id: 7,
    level: "medio",
    topic: 1,
    topicName: "Tipos de PÃ¡ginas DinÃ¡micas",
    page: "PÃ¡g. 2-3",
    question: "Dentro de las pÃ¡ginas web dinÃ¡micas, el temario establece una distinciÃ³n fundamental en dos tipos. Â¿CuÃ¡les son?",
    options: [
      { id: "A", text: "PÃ¡ginas dinÃ¡micas con CSS y pÃ¡ginas dinÃ¡micas sin hojas de estilo.", isCorrect: false },
      { id: "B", text: "Aquellas que incluyen cÃ³digo que ejecuta el navegador (normalmente JavaScript) y aquellas cuyo cÃ³digo se ejecuta en el servidor antes de enviar el resultado al navegador.", isCorrect: true },
      { id: "C", text: "PÃ¡ginas que utilizan microprocesadores Intel y pÃ¡ginas que utilizan microprocesadores ARM.", isCorrect: false },
      { id: "D", text: "PÃ¡ginas dinÃ¡micas de pago y pÃ¡ginas dinÃ¡micas gratuitas de cÃ³digo abierto.", isCorrect: false }
    ],
    explanation: "PÃ¡ginas 2 y 3: 'es muy importante distinguir dos tipos: 1) Aquellas que incluyen cÃ³digo que ejecuta el navegador (normalmente JavaScript)... 2) Aquellas pÃ¡ginas cuyo cÃ³digo se ejecuta en el servidor antes de enviar el resultado al navegador'.",
    distractors: {
      A: "CSS aporta estilos, no define la tipologÃ­a de ejecuciÃ³n dinÃ¡mica.",
      C: "La arquitectura hardware del procesador es transparente a la clasificaciÃ³n web.",
      D: "El modelo de licencia o coste no define la arquitectura de ejecuciÃ³n."
    },
    trapNote: "ClasificaciÃ³n clave: CÃ³digo ejecutado en el cliente (navegador) vs CÃ³digo ejecutado en el servidor."
  },
  {
    id: 8,
    level: "medio",
    topic: 1,
    topicName: "CÃ³digo DinÃ¡mico en Cliente (JavaScript)",
    page: "PÃ¡g. 2-3, 7",
    question: "En las pÃ¡ginas dinÃ¡micas con cÃ³digo ejecutado en el navegador, Â¿quÃ© capacidades y funcionalidades seÃ±ala el texto que puede incorporar este cÃ³digo?",
    options: [
      { id: "A", text: "Reescribir la tabla de particiones del disco duro y modificar las credenciales del servidor Apache.", isCorrect: false },
      { id: "B", text: "Desde mostrar animaciones hasta cambiar totalmente la apariencia y contenido de la pÃ¡gina, asÃ­ como comprobar datos introducidos en formularios.", isCorrect: true },
      { id: "C", text: "Acceder directamente a los registros de la base de datos MySQL sin enviar ninguna peticiÃ³n al servidor.", isCorrect: false },
      { id: "D", text: "Compilar scripts PHP a binarios ELF ejecutables directamente por el sistema operativo cliente.", isCorrect: false }
    ],
    explanation: "PÃ¡ginas 3 y 7: 'puede incorporar mÃºltiples funcionalidades que pueden ir desde mostrar animaciones hasta cambiar totalmente la apariencia y el contenido de la pÃ¡gina... o la comprobaciÃ³n de los datos que introduces en un formulario'.",
    distractors: {
      A: "El navegador se ejecuta en un entorno aislado (sandbox); no modifica particiones ni el servidor.",
      C: "El cÃ³digo cliente no tiene acceso directo a la base de datos del servidor por motivos de seguridad y arquitectura.",
      D: "PHP no se compila en el cliente a binarios ELF."
    },
    trapNote: "JavaScript en cliente: animaciones, cambios dinÃ¡micos de apariencia/DOM y validaciÃ³n de formularios."
  },
  {
    id: 9,
    level: "avanzado",
    topic: 1,
    topicName: "Alcance del Temario respecto a JavaScript",
    page: "PÃ¡g. 3",
    question: "Respecto al lenguaje JavaScript, Â¿cuÃ¡l es la advertencia explÃ­cita sobre el alcance formativo que realiza el temario de DWES en la pÃ¡gina 3?",
    options: [
      { id: "A", text: "Que JavaScript ha quedado obsoleto y estÃ¡ terminantemente prohibido usarlo en Desarrollo Web.", isCorrect: false },
      { id: "B", text: "Que en este mÃ³dulo no se va a ver JavaScript, salvo cuando Ã©ste se relaciona con la programaciÃ³n web del lado del servidor.", isCorrect: true },
      { id: "C", text: "Que JavaScript es el Ãºnico lenguaje que se utilizarÃ¡ para programar la base de datos en XAMPP.", isCorrect: false },
      { id: "D", text: "Que se exigirÃ¡ programar todos los servidores HTTP en Node.js desde el primer dÃ­a.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 3 literal: 'En este mÃ³dulo no vamos a ver JavaScript, salvo cuando Ã©ste se relaciona con la programaciÃ³n web del lado del servidor'. DWES se centra en PHP y backend.",
    distractors: {
      A: "JavaScript es el lenguaje estÃ¡ndar de la web en cliente, no estÃ¡ obsoleto.",
      C: "XAMPP utiliza MySQL/MariaDB gestionado con SQL y PHP.",
      D: "El mÃ³dulo se enfoca en PHP y tecnologÃ­as de servidor, no exclusivamente en Node.js."
    },
    trapNote: "Detalle del documento: JS solo se aborda en DWES cuando interactÃºa o se relaciona con el lado servidor (como AJAX/REST)."
  },
  {
    id: 10,
    level: "basico",
    topic: 1,
    topicName: "Extensiones de PÃ¡ginas DinÃ¡micas",
    page: "PÃ¡g. 3",
    question: "Â¿CuÃ¡les son las cinco extensiones de archivos dinÃ¡micos de servidor mencionadas expresamente en la pÃ¡gina 3 del documento?",
    options: [
      { id: "A", text: ".exe, .bat, .sh, .bin y .cmd", isCorrect: false },
      { id: "B", text: ".php, .asp, .jsp, .cgi y .aspx", isCorrect: true },
      { id: "C", text: ".jpg, .png, .gif, .svg y .webp", isCorrect: false },
      { id: "D", text: ".doc, .pdf, .xls, .ppt y .txt", isCorrect: false }
    ],
    explanation: "PÃ¡gina 3 literal: 'Muchas de estas pÃ¡ginas tienen extensiones como .php, .asp, .jsp, .cgi o .aspx'.",
    distractors: {
      A: "Esos son archivos ejecutables y scripts de sistemas operativos de escritorio.",
      C: "Esas son extensiones de formatos de imagen.",
      D: "Esas son extensiones de documentos ofimÃ¡ticos."
    },
    trapNote: "Aprende la lista exacta: .php (PHP), .asp (Active Server Pages), .jsp (JavaServer Pages), .cgi (CGI scripts) y .aspx (ASP.NET)."
  },
  {
    id: 11,
    level: "medio",
    topic: 1,
    topicName: "Contenido Almacenado vs. Contenido Enviado",
    page: "PÃ¡g. 3",
    question: "En las pÃ¡ginas dinÃ¡micas ejecutadas en el servidor, Â¿quÃ© afirmaciÃ³n describe con exactitud la relaciÃ³n entre lo que estÃ¡ almacenado en el servidor y lo que recibe el navegador?",
    options: [
      { id: "A", text: "El servidor envÃ­a el cÃ³digo fuente tal cual (.php o .jsp) y el navegador lo ejecuta en su motor V8.", isCorrect: false },
      { id: "B", text: "El contenido que se almacena en el servidor no es el mismo que despuÃ©s se envÃ­a: el HTML se forma como resultado de la ejecuciÃ³n de un programa en el servidor web.", isCorrect: true },
      { id: "C", text: "El navegador recibe un archivo comprimido .tar.gz que debe descomprimir en disco antes de mostrar la pÃ¡gina.", isCorrect: false },
      { id: "D", text: "El servidor nunca almacena nada; la pÃ¡gina se genera por inteligencia artificial en el router del cliente.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 3: 'esas pÃ¡ginas no estÃ¡n almacenadas en el servidor; mÃ¡s concretamente, el contenido que se almacena no es el mismo que despuÃ©s se envÃ­a al navegador. El HTML de estas pÃ¡ginas se forma como resultado de la ejecuciÃ³n de un programa, y esa ejecuciÃ³n tiene lugar en el servidor web'.",
    distractors: {
      A: "El navegador nunca recibe el cÃ³digo fuente del script de servidor (.php).",
      C: "El navegador recibe HTML como respuesta HTTP estÃ¡ndar.",
      D: "El archivo script sÃ­ estÃ¡ almacenado en el servidor, pero lo que se envÃ­a es su salida generada (HTML)."
    },
    trapNote: "Diferencia crÃ­tica con pÃ¡ginas estÃ¡ticas: en estÃ¡ticas, contenido almacenado = contenido enviado. En dinÃ¡micas, NO coinciden."
  },
  {
    id: 12,
    level: "medio",
    topic: 1,
    topicName: "Ciclo de PeticiÃ³n DinÃ¡mica (6 Pasos)",
    page: "PÃ¡g. 3",
    question: "En el esquema de 6 pasos de una pÃ¡gina web dinÃ¡mica (pÃ¡g. 3), Â¿quÃ© ocurre en los pasos 3 y 4 respectivamente?",
    options: [
      { id: "A", text: "Paso 3: El cliente formatea su disco; Paso 4: El servidor solicita un reinicio del sistema.", isCorrect: false },
      { id: "B", text: "Paso 3: El servidor web contacta con el mÃ³dulo responsable de ejecutar el cÃ³digo y se lo envÃ­a; Paso 4: Como parte de la ejecuciÃ³n, puede ser necesario consultar informaciÃ³n en un repositorio (como una base de datos).", isCorrect: true },
      { id: "C", text: "Paso 3: Se envÃ­a un email al usuario; Paso 4: Se descarga la hoja de estilos CSS desde Google Fonts.", isCorrect: false },
      { id: "D", text: "Paso 3: Se compila a cÃ³digo mÃ¡quina en el cliente; Paso 4: El usuario introduce la contraseÃ±a en un popup.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 3: '3. En el caso de que se trate de una pÃ¡gina web dinÃ¡mica... el servidor web contacta con el mÃ³dulo responsable de ejecutar el cÃ³digo y se lo envÃ­a. 4. Como parte del proceso de ejecuciÃ³n, puede ser necesario obtener informaciÃ³n de algÃºn repositorio, como por ejemplo consultar registros almacenados en una base de datos'.",
    distractors: {
      A: "Respuestas destructivas ajenas al protocolo.",
      C: "No hay envÃ­o de emails en el ciclo de obtenciÃ³n de pÃ¡gina.",
      D: "La compilaciÃ³n/ejecuciÃ³n sucede en el servidor, no en el cliente."
    },
    trapNote: "Recuerda: Paso 1 (solicitud) -> Paso 2 (bÃºsqueda) -> Paso 3 (envÃ­o al mÃ³dulo ejecutor) -> Paso 4 (consulta a BD) -> Paso 5 (generaciÃ³n HTML) -> Paso 6 (envÃ­o al navegador)."
  },
  {
    id: 13,
    level: "basico",
    topic: 1,
    topicName: "Ejemplo PrÃ¡ctico: Correo Web",
    page: "PÃ¡g. 3-4",
    question: "Â¿CÃ³mo ilustra el temario el funcionamiento de las pÃ¡ginas dinÃ¡micas mediante el ejemplo de los clientes de correo vÃ­a web (Gmail, Hotmail, Yahoo)?",
    options: [
      { id: "A", text: "El servidor envÃ­a exactamente la misma pÃ¡gina HTML estÃ¡tica con la misma bandeja de entrada a todos los usuarios que visitan la web.", isCorrect: false },
      { id: "B", text: "Tras identificarse con usuario y contraseÃ±a, el servidor ejecuta un programa que obtiene los datos de tu usuario (contactos y mensajes recibidos) y compone a medida la pÃ¡gina web HTML que recibes.", isCorrect: true },
      { id: "C", text: "El navegador se conecta directamente por SSH a los servidores de correo sin intervenciÃ³n de servidores web.", isCorrect: false },
      { id: "D", text: "El correo se descarga en un archivo ejecutable .exe que se debe instalar localmente en el disco duro.", isCorrect: false }
    ],
    explanation: "PÃ¡ginas 3-4: 'Obviamente, el servidor no envÃ­a esa misma pÃ¡gina a todos los usuarios, sino que la genera de forma dinÃ¡mica en funciÃ³n de quiÃ©n sea el usuario que se conecte. Para generarla, el servidor ejecuta un programa que obtiene los datos de tu usuario (tus contactos, la lista de mensajes recibidos) y con ellos compone la pÃ¡gina web'.",
    distractors: {
      A: "Si enviara la misma pÃ¡gina a todos, verÃ­as los correos privados de otros usuarios.",
      C: "La comunicaciÃ³n web se realiza sobre HTTP/HTTPS, no mediante tÃºneles directos SSH de cliente.",
      D: "Es una aplicaciÃ³n web; se visualiza directamente en el navegador sin instalar ejecutables."
    },
    trapNote: "El correo web es el ejemplo paradigmÃ¡tico del tema para explicar la generaciÃ³n dinÃ¡mica basada en autenticaciÃ³n de usuario y bases de datos."
  },
  {
    id: 14,
    level: "medio",
    topic: 1,
    topicName: "Ventajas de PÃ¡ginas EstÃ¡ticas: Enlaces y Bookmarks",
    page: "PÃ¡g. 4",
    question: "Respecto a las pÃ¡ginas web estÃ¡ticas, Â¿por quÃ© su contenido inmutable puede suponer una ventaja concreta al almacenar un enlace (marcador o favorito)?",
    options: [
      { id: "A", text: "Porque el navegador cifra automÃ¡ticamente el disco duro cuando detecta una URL estÃ¡tica.", isCorrect: false },
      { id: "B", text: "Porque al volver a visitarla utilizando el enlace el contenido no habrÃ¡ variado respecto a cÃ³mo estaba; en una pÃ¡gina dinÃ¡mica, en cambio, el contenido puede haber cambiado con posterioridad.", isCorrect: true },
      { id: "C", text: "Porque las pÃ¡ginas estÃ¡ticas se abren a una velocidad infinita independientemente del ancho de banda.", isCorrect: false },
      { id: "D", text: "Porque las pÃ¡ginas dinÃ¡micas no permiten guardar enlaces en los marcadores del navegador.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 4: 'La caracterÃ­stica diferenciadora de las pÃ¡ginas web estÃ¡ticas es que su contenido nunca varÃ­a, y esto en algunos casos tambiÃ©n puede suponer una ventaja. Sucede, por ejemplo, cuando quieres almacenar un enlace a un contenido concreto del sitio web: si la pÃ¡gina es dinÃ¡mica, al volver a visitarla utilizando el enlace su contenido puede variar con respecto a cÃ³mo estaba con anterioridad'.",
    distractors: {
      A: "El almacenamiento de enlaces no tiene relaciÃ³n con el cifrado de disco.",
      C: "Ninguna pÃ¡gina tiene velocidad infinita; depende de la red.",
      D: "Los navegadores sÃ­ permiten guardar enlaces a pÃ¡ginas dinÃ¡micas, pero el contenido al que apuntan puede mutar."
    },
    trapNote: "Contenido inmutable = persistencia del enlace a lo largo del tiempo."
  },
  {
    id: 15,
    level: "basico",
    topic: 1,
    topicName: "Requisitos para PÃ¡ginas EstÃ¡ticas",
    page: "PÃ¡g. 4",
    question: "Para crear un sitio web compuesto exclusivamente por pÃ¡ginas web estÃ¡ticas, Â¿quÃ© conocimientos tÃ©cnicos son necesarios segÃºn el temario?",
    options: [
      { id: "A", text: "Es obligatorio dominar Java EE, Servlets, EJB y administraciÃ³n avanzada de Oracle Database.", isCorrect: false },
      { id: "B", text: "No es necesario saber programar: simplemente habrÃ­a que conocer HTML/XHTML y CSS, e incluso se podrÃ­a utilizar algÃºn programa de diseÃ±o web para generarlas.", isCorrect: true },
      { id: "C", text: "Es indispensable saber programar en lenguaje ensamblador para estructurar las etiquetas del DOM.", isCorrect: false },
      { id: "D", text: "Se requiere una certificaciÃ³n oficial en configuraciÃ³n de servidores Apache y compilaciÃ³n de PHP 8.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 4 literal: 'No es necesario saber programar para crear un sitio que utilice Ãºnicamente pÃ¡ginas web estÃ¡ticas. Simplemente habrÃ­a que conocer HTML/XHTML y CSS, e incluso esto no serÃ­a indispensable: se podrÃ­a utilizar algÃºn programa de diseÃ±o web para generarlas'.",
    distractors: {
      A: "Ese stack es para desarrollo empresarial complejo en Java, no para estÃ¡ticas.",
      C: "HTML no requiere ensamblador en absoluto.",
      D: "No se requiere ninguna certificaciÃ³n ni compilar PHP."
    },
    trapNote: "Frase textual de la pÃ¡gina 4: 'No es necesario saber programar para crear un sitio que utilice Ãºnicamente pÃ¡ginas web estÃ¡ticas'."
  },
  {
    id: 16,
    level: "medio",
    topic: 1,
    topicName: "SEO e IndexaciÃ³n (Googlebot)",
    page: "PÃ¡g. 4",
    question: "Â¿CÃ³mo afecta a la indexaciÃ³n de los motores de bÃºsqueda (Googlebot) el uso de pÃ¡ginas dinÃ¡micas frente a estÃ¡ticas?",
    options: [
      { id: "A", text: "Googlebot rechaza e ignora por completo cualquier pÃ¡gina web con extensiÃ³n .php o .jsp.", isCorrect: false },
      { id: "B", text: "Las estÃ¡ticas son mÃ¡s fÃ¡ciles de rastrear porque su HTML ya contiene todo el contenido desde el principio; las dinÃ¡micas dependientes de JavaScript o interacciÃ³n pueden tardar mÃ¡s o no indexarse del todo.", isCorrect: true },
      { id: "C", text: "Las pÃ¡ginas dinÃ¡micas siempre indexan mÃ¡s rÃ¡pido porque envÃ­an cabeceras HTTP precompiladas directamente al robot.", isCorrect: false },
      { id: "D", text: "Googlebot no puede indexar pÃ¡ginas estÃ¡ticas si estÃ¡n vinculadas a una hoja de estilos externa CSS.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 4: 'Tanto las pÃ¡ginas estÃ¡ticas como las dinÃ¡micas pueden indexarse, pero las dinÃ¡micas suponen mÃ¡s trabajo: si dependen de JavaScript o de la interacciÃ³n del usuario, Googlebot puede tardar mÃ¡s en procesarlas o incluso no indexarlas del todo. Las estÃ¡ticas, en cambio, son mÃ¡s fÃ¡ciles de rastrear porque su HTML ya contiene todo el contenido desde el principio'.",
    distractors: {
      A: "Googlebot indexa perfectamente pÃ¡ginas generadas por scripts de servidor si devuelven HTML.",
      C: "Falso, el procesamiento dinÃ¡mico y la renderizaciÃ³n en cliente suponen mayor carga para el crawler.",
      D: "CSS no impide el rastreo de pÃ¡ginas estÃ¡ticas."
    },
    trapNote: "El texto matiza que el problema de indexaciÃ³n dinÃ¡mica surge especialmente cuando dependen de JavaScript o de la interacciÃ³n del usuario."
  },
  {
    id: 17,
    level: "medio",
    topic: 1,
    topicName: "Recursos de Servidor en PÃ¡ginas DinÃ¡micas",
    page: "PÃ¡g. 4-5",
    question: "Desde la perspectiva de los recursos del servidor web, Â¿cuÃ¡l es una desventaja importante de las pÃ¡ginas dinÃ¡micas seÃ±alada en el texto?",
    options: [
      { id: "A", text: "Que consumen todo el ancho de banda del proveedor impidiendo que otros servidores funcionen.", isCorrect: false },
      { id: "B", text: "Que requieren que el servidor ejecute su cÃ³digo mediante un mÃ³dulo concreto (integrado como mod_php o como proceso independiente delegado) y posiblemente consultar una base de datos, lo que implica recursos adicionales que deben instalarse y mantenerse.", isCorrect: true },
      { id: "C", text: "Que obligan al servidor a cambiar de placa base cada vez que se actualiza el cÃ³digo.", isCorrect: false },
      { id: "D", text: "Que no pueden utilizar el protocolo TCP/IP para comunicarse con los navegadores.", isCorrect: false }
    ],
    explanation: "PÃ¡ginas 4-5: 'requieren que el servidor ejecute su cÃ³digo mediante un mÃ³dulo concreto, integrado en el propio servidor (como mod_php en Apache) o como proceso independiente al que este delega la ejecuciÃ³n. Esto implica recursos adicionales que las pÃ¡ginas estÃ¡ticas no necesitan. AdemÃ¡s, puede ser necesario consultar una base de datos... Estos recursos deben instalarse y mantenerse'.",
    distractors: {
      A: "No agotan el ancho de banda global del proveedor por definiciÃ³n.",
      C: "No requiere sustituciÃ³n fÃ­sica de hardware.",
      D: "Toda la comunicaciÃ³n web se sustenta en TCP/IP."
    },
    trapNote: "MÃ³dulos de ejecuciÃ³n (mod_php/procesos) + servidores de base de datos = sobrecarga de recursos e instalaciÃ³n/mantenimiento en el servidor."
  },
  {
    id: 18,
    level: "medio",
    topic: 1,
    topicName: "VisualizaciÃ³n Local de PÃ¡ginas EstÃ¡ticas",
    page: "PÃ¡g. 4-5",
    question: "Respecto a las pÃ¡ginas web estÃ¡ticas, Â¿cuÃ¡l de las siguientes afirmaciones es una ventaja explÃ­cita seÃ±alada en el temario frente a las dinÃ¡micas?",
    options: [
      { id: "A", text: "Permiten generar contenido a medida segÃºn los privilegios del usuario autenticado.", isCorrect: false },
      { id: "B", text: "Para visualizarlas en local ni siquiera es indispensable contar con un servidor web: pueden abrirse desde un USB o disco Ã³ptico directamente en el navegador.", isCorrect: true },
      { id: "C", text: "Consumen procesos persistentes mediante FastCGI para reducir la latencia de red.", isCorrect: false },
      { id: "D", text: "Actualizan automÃ¡ticamente sus contenidos sin requerir ediciÃ³n manual cuando cambian los datos.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 5: 'para ver una pÃ¡gina estÃ¡tica almacenada en tu equipo no necesitas siquiera de un servidor web. Son archivos que pueden almacenarse en un soporte como un disco Ã³ptico o memoria USB y abrirse directamente con un navegador'.",
    distractors: {
      A: "Personalizar segÃºn el usuario es propio de pÃ¡ginas dinÃ¡micas.",
      C: "FastCGI es una tÃ©cnica de integraciÃ³n de programas dinÃ¡micos, no de archivos estÃ¡ticos.",
      D: "Al contrario, la gran limitaciÃ³n de las estÃ¡ticas es que su actualizaciÃ³n debe ser manual editando el archivo."
    },
    trapNote: "Â¿Hace falta servidor web para ver un .html local? No, basta con el protocolo file:// del navegador."
  },
  {
    id: 19,
    level: "medio",
    topic: 1,
    topicName: "LimitaciÃ³n Principal de las PÃ¡ginas EstÃ¡ticas",
    page: "PÃ¡g. 5",
    question: "Â¿CuÃ¡l es la desventaja o limitaciÃ³n mÃ¡s importante de las pÃ¡ginas web estÃ¡ticas destacada en el texto?",
    options: [
      { id: "A", text: "Que los navegadores modernos no soportan archivos con extensiÃ³n .html.", isCorrect: false },
      { id: "B", text: "La actualizaciÃ³n de su contenido debe hacerse de forma manual editando la pÃ¡gina que almacena el servidor web, lo que implica un mantenimiento que puede ser prohibitivo en sitios con gran cantidad de contenido.", isCorrect: true },
      { id: "C", text: "Que obligan a tener instalada la mÃ¡quina virtual de Java en el cliente.", isCorrect: false },
      { id: "D", text: "Que no pueden incluir texto con formato ni imÃ¡genes de ningÃºn tipo.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 5: 'La desventaja mÃ¡s importante ya la comentamos anteriormente: la actualizaciÃ³n de su contenido debe hacerse de forma manual editando la pÃ¡gina que almacena el servidor web. Esto implica un mantenimiento que puede ser prohibitivo en sitios web con gran cantidad de contenido'.",
    distractors: {
      A: "El formato .html es la base universal de todos los navegadores.",
      C: "Las pÃ¡ginas estÃ¡ticas no requieren Java ni JVM.",
      D: "HTML soporta texto con formato, imÃ¡genes y tablas perfectamente."
    },
    trapNote: "Palabra clave de examen: mantenimiento 'prohibitivo' por requerir actualizaciÃ³n manual archivo a archivo."
  },
  {
    id: 20,
    level: "medio",
    topic: 1,
    topicName: "EvoluciÃ³n HistÃ³rica: Generaciones de la Web",
    page: "PÃ¡g. 5",
    question: "SegÃºn la clasificaciÃ³n cronolÃ³gica recogida en el documento, Â¿a quÃ© se considera la 'primera generaciÃ³n' y la 'segunda generaciÃ³n' de la web?",
    options: [
      { id: "A", text: "Primera generaciÃ³n: pÃ¡ginas con CSS; Segunda generaciÃ³n: pÃ¡ginas con HTML5.", isCorrect: false },
      { id: "B", text: "Primera generaciÃ³n: la web compuesta por pÃ¡ginas estÃ¡ticas; Segunda generaciÃ³n: la surgida gracias a las pÃ¡ginas web dinÃ¡micas.", isCorrect: true },
      { id: "C", text: "Primera generaciÃ³n: arquitecturas SPA; Segunda generaciÃ³n: arquitectura en 3 capas.", isCorrect: false },
      { id: "D", text: "Primera generaciÃ³n: servidores CGI; Segunda generaciÃ³n: servidores basados exclusivamente en Node.js.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 5 literal: 'Las primeras pÃ¡ginas web que se crearon en Internet fueron pÃ¡ginas estÃ¡ticas. A esta web compuesta por pÃ¡ginas estÃ¡ticas se le considera la primera generaciÃ³n. La segunda generaciÃ³n de la web surgiÃ³ gracias a las pÃ¡ginas web dinÃ¡micas'.",
    distractors: {
      A: "CSS y HTML5 son estÃ¡ndares de diseÃ±o y maquetaciÃ³n, no definen las dos generaciones citadas.",
      C: "Las SPA son un enfoque moderno muy posterior.",
      D: "Node.js es contemporÃ¡neo, no define la segunda generaciÃ³n histÃ³rica."
    },
    trapNote: "Pregunta literal de examen: 1Âª generaciÃ³n = estÃ¡ticas, 2Âª generaciÃ³n = dinÃ¡micas."
  },
  {
    id: 21,
    level: "medio",
    topic: 1,
    topicName: "DefiniciÃ³n y Ventajas de Aplicaciones Web",
    page: "PÃ¡g. 5",
    question: "Â¿QuÃ© es una aplicaciÃ³n web segÃºn el temario y cuÃ¡les son las cuatro ventajas que ofrece frente a las aplicaciones tradicionales de escritorio?",
    options: [
      { id: "A", text: "Son archivos ejecutables .exe; ventajas: funcionan sin red, sin navegador y sin sistema operativo.", isCorrect: false },
      { id: "B", text: "Emplean pÃ¡ginas web dinÃ¡micas ejecutadas en servidor y mostradas en navegador; ventajas: no requieren instalaciÃ³n en clientes, gestiÃ³n centralizada sencilla (backups/actualizaciones), funcionan en cualquier equipo con navegador (sin requerir gran potencia) y acceso ubicuo desde cualquier lugar con conexiÃ³n (incluidos mÃ³viles).", isCorrect: true },
      { id: "C", text: "Son scripts de PowerShell; ventajas: acceso directo sin permisos al registro de Windows y soporte grÃ¡fico nativo de 240 FPS.", isCorrect: false },
      { id: "D", text: "Son pÃ¡ginas HTML guardadas exclusivamente en memorias USB sin conexiÃ³n externa.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 5: 'Las aplicaciones web emplean pÃ¡ginas web dinÃ¡micas que se ejecutan en un servidor web y se muestran en un navegador... Ventajas: 1. No es necesario instalarlas en los equipos cliente. 2. Muy sencillo gestionarlas (backups, correcciÃ³n, actualizaciones). 3. Se pueden usar en cualquier sistema con navegador sin importar SO ni potencia. 4. Acceso desde cualquier lugar con conexiÃ³n, incluidos mÃ³viles'.",
    distractors: {
      A: "Las aplicaciones tradicionales son los .exe; las web se muestran en el navegador.",
      C: "Las apps web no son scripts de PowerShell para el registro de Windows.",
      D: "Esa es la descripciÃ³n de archivos estÃ¡ticos en soporte fÃ­sico."
    },
    trapNote: "Memoriza las 4 ventajas: sin instalaciÃ³n en clientes, gestiÃ³n centralizada en servidor, independencia de SO/hardware cliente, y ubicuidad/acceso remoto."
  },
  {
    id: 22,
    level: "avanzado",
    topic: 1,
    topicName: "Inconvenientes de Aplicaciones Web y PWA",
    page: "PÃ¡g. 6",
    question: "En el anÃ¡lisis de inconvenientes de las aplicaciones web, Â¿quÃ© tres limitaciones se detallan y quÃ© excepciÃ³n tecnolÃ³gica se menciona para mitigar la dependencia de conexiÃ³n?",
    options: [
      { id: "A", text: "Inconvenientes: falta de memoria RAM, coste de cables de red y lentitud de teclado; excepciÃ³n: Bluetooth 5.0.", isCorrect: false },
      { id: "B", text: "Inconvenientes: interfaz limitada al navegador, dependencia de conexiÃ³n con el servidor y necesidad de transmitir los datos por red; excepciÃ³n: Aplicaciones Web Progresivas (PWA) que permiten cierto funcionamiento offline.", isCorrect: true },
      { id: "C", text: "Inconvenientes: imposibilidad de mostrar imÃ¡genes, rechazo en Linux y consumo de papel; excepciÃ³n: mÃ³dems analÃ³gicos.", isCorrect: false },
      { id: "D", text: "Inconvenientes: incompatibilidad con PHP 8 y obligaciÃ³n de reiniciar Apache a diario; excepciÃ³n: FastCGI.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 6: 'Inconvenientes de las aplicaciones web: 1. La interfaz de usuario es la pÃ¡gina en el navegador, lo que limita sus funcionalidades a lo que Ã©ste puede ofrecer. 2. Dependemos de una conexiÃ³n con el servidor para poder utilizarlas... a no ser que se trate de aplicaciones web progresivas (PWA) que permiten cierto funcionamiento offline. 3. La informaciÃ³n debe transmitirse desde el servidor'.",
    distractors: {
      A: "Factores de hardware sin relaciÃ³n con el anÃ¡lisis del documento.",
      C: "Los navegadores muestran imÃ¡genes perfectamente y funcionan en Linux.",
      D: "Incompatibilidades falsas sin base en el texto."
    },
    trapNote: "Ojo al examen: las Aplicaciones Web Progresivas (PWA) son la Ãºnica excepciÃ³n citada que mitiga la desconexiÃ³n ofreciendo funcionamiento offline."
  },
  {
    id: 23,
    level: "medio",
    topic: 1,
    topicName: "Limitaciones de Hardware: Videojuegos y DiseÃ±o 3D",
    page: "PÃ¡g. 6",
    question: "Â¿Para cuÃ¡l de los siguientes tipos de software seÃ±ala el temario que las aplicaciones web NO son adecuadas?",
    options: [
      { id: "A", text: "Sistemas de correo electrÃ³nico con gestiÃ³n de contactos.", isCorrect: false },
      { id: "B", text: "Procesadores de texto y herramientas colaborativas de gestiÃ³n de tareas.", isCorrect: false },
      { id: "C", text: "Software que requiera acceso directo y de bajo nivel al hardware, como diseÃ±o 3D con aceleraciÃ³n especÃ­fica o videojuegos muy exigentes que necesitan exprimir la GPU local.", isCorrect: true },
      { id: "D", text: "Gestores de contenidos (CMS) para administraciÃ³n de portales educativos.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 6: 'La informaciÃ³n que se muestra en el navegador debe transmitirse desde el servidor. Esto hace que cierto tipo de aplicaciones no sean adecuadas para su implementaciÃ³n como aquellas que requieren acceso directo y de bajo nivel al hardware (por ejemplo, software de diseÃ±o 3D con aceleraciÃ³n grÃ¡fica especÃ­fica o videojuegos muy exigentes que necesitan aprovechar al mÃ¡ximo la GPU local)'.",
    distractors: {
      A: "Los clientes de correo fueron de las primeras apps web (Hotmail, Gmail, Yahoo).",
      B: "El temario cita expresamente los procesadores de texto como aplicaciones web comunes.",
      D: "Los CMS (WordPress, Drupal, Joomla!) son el ejemplo clÃ¡sico de aplicaciones web dinÃ¡micas."
    },
    trapNote: "La limitaciÃ³n tÃ©cnica clave es: 'acceso directo y de bajo nivel al hardware' y 'aprovechar al mÃ¡ximo la GPU local'."
  },
  {
    id: 24,
    level: "basico",
    topic: 1,
    topicName: "Front-end vs. Back-end en CMS",
    page: "PÃ¡g. 6",
    question: "En sistemas de gestiÃ³n de contenidos (como Drupal, Joomla! o WordPress), Â¿cÃ³mo define el temario al front-end y al back-end?",
    options: [
      { id: "A", text: "Front-end es la base de datos relacional y Back-end es el servidor web Apache.", isCorrect: false },
      { id: "B", text: "Parte externa o front-end: conjunto de pÃ¡ginas que ven la gran mayorÃ­a de usuarios que las usan (usuarios externos); Parte interna o back-end: conjunto de pÃ¡ginas dinÃ¡micas que utilizan quienes producen contenido y administran la aplicaciÃ³n (usuarios internos).", isCorrect: true },
      { id: "C", text: "Front-end son los scripts compilados a cÃ³digo mÃ¡quina y Back-end son los archivos de hojas de estilos CSS.", isCorrect: false },
      { id: "D", text: "Front-end es el protocolo HTTP y Back-end es el protocolo HTTPS.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 6 literal: 'Parte externa o front-end, que es el conjunto de pÃ¡ginas que ven la gran mayorÃ­a de usuarios que las usan (usuarios externos). Una parte interna o back-end, que es otro conjunto de pÃ¡ginas dinÃ¡micas que utilizan las personas que producen el contenido y las que administran la aplicaciÃ³n web (usuarios internos) para crear contenido, organizarlo, decidir la apariencia externa, etc.'.",
    distractors: {
      A: "Front-end nunca es la base de datos.",
      C: "Front-end en web son tecnologÃ­as de navegador (HTML, CSS, JS).",
      D: "HTTP/HTTPS son protocolos de capa de red/aplicaciÃ³n, no partes de un CMS."
    },
    trapNote: "Asocia: Front-end = usuarios externos / interfaz visible. Back-end = usuarios internos / gestiÃ³n, creaciÃ³n de contenido y administraciÃ³n."
  },
  {
    id: 25,
    level: "medio",
    topic: 1,
    topicName: "Complementariedad Cliente-Servidor",
    page: "PÃ¡g. 7",
    question: "En la pÃ¡gina 7, Â¿cÃ³mo ilustra el temario la complementariedad entre el cÃ³digo ejecutado en el servidor y el ejecutado en el cliente?",
    options: [
      { id: "A", text: "El servidor apaga la pantalla del cliente mientras la base de datos escribe en disco.", isCorrect: false },
      { id: "B", text: "En un correo web, el servidor ejecuta el programa que obtiene los mensajes de la BD, mientras que el navegador ejecuta el cÃ³digo JavaScript que avisa si has olvidado poner texto en el asunto antes de enviar.", isCorrect: true },
      { id: "C", text: "El navegador procesa la lÃ³gica de autenticaciÃ³n criptogrÃ¡fica en PHP y el servidor solo muestra las fuentes tipogrÃ¡ficas en CSS.", isCorrect: false },
      { id: "D", text: "El cliente compila la mÃ¡quina virtual de Java y el servidor la ejecuta en un hilo de WebSocket.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 7: 'Estas dos tecnologÃ­as se complementan entre sÃ­. AsÃ­, volviendo al ejemplo del correo web, el programa que se encarga de obtener tus mensajes y su contenido de una base de datos se ejecuta en el entorno del servidor, mientras que tu navegador ejecuta, por ejemplo, el cÃ³digo encargado de avisar cuando quieres enviar un mensaje y te has olvidado de poner un texto en el asunto'.",
    distractors: {
      A: "Comportamiento absurdo.",
      C: "El navegador nunca ejecuta PHP; la autenticaciÃ³n corre en backend.",
      D: "Mezcla de conceptos errÃ³neos de compilaciÃ³n y protocolos."
    },
    trapNote: "Ejemplo clÃ¡sico: Servidor = acceso a datos y generaciÃ³n; Cliente (JS) = validaciÃ³n inmediata (ej. asunto vacÃ­o en el correo)."
  },
  {
    id: 26,
    level: "medio",
    topic: 1,
    topicName: "LimitaciÃ³n Tradicional previa a AJAX",
    page: "PÃ¡g. 7",
    question: "Â¿CuÃ¡l era la limitaciÃ³n tradicional del cÃ³digo JavaScript ejecutado en el navegador que obligaba a recargar la pÃ¡gina entera para consultar nuevos datos?",
    options: [
      { id: "A", text: "Que los navegadores antiguos solo podÃ­an interpretar cÃ³digo binario ensamblador.", isCorrect: false },
      { id: "B", text: "Que el cÃ³digo que se ejecuta en el cliente tradicionalmente no tenÃ­a acceso a los datos almacenados en el servidor (no podÃ­a consultar la BD directamente), por lo que la soluciÃ³n era crear una nueva pÃ¡gina completa en el servidor y enviarla de nuevo al navegador.", isCorrect: true },
      { id: "C", text: "Que el protocolo HTTP impedÃ­a enviar mÃ¡s de una peticiÃ³n por cada sesiÃ³n de usuario.", isCorrect: false },
      { id: "D", text: "Que los servidores Apache rechazaban conexiones de navegadores que tuvieran hojas de estilo CSS.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 7: 'Esta divisiÃ³n es asÃ­ porque el cÃ³digo que se ejecuta en el cliente web tradicionalmente no tenÃ­a acceso a los datos que se almacenan en el servidor... el cÃ³digo JavaScript no podÃ­a obtener de la base de datos el contenido de ese mensaje. La soluciÃ³n era crear una nueva pÃ¡gina en el servidor con la informaciÃ³n que se pedÃ­a y enviarla de nuevo al navegador'.",
    distractors: {
      A: "Los navegadores nunca han interpretado ensamblador de forma nativa para la web.",
      C: "HTTP soporta mÃºltiples peticiones perfectamente.",
      D: "Apache siempre ha servido CSS sin problemas."
    },
    trapNote: "EvoluciÃ³n histÃ³rica: Tradicional (sin acceso directo a datos -> recarga completa de pÃ¡gina) vs AJAX/SPA (actualizaciÃ³n parcial asÃ­ncrona)."
  },
  {
    id: 27,
    level: "medio",
    topic: 1,
    topicName: "TÃ©cnica AJAX",
    page: "PÃ¡g. 7",
    question: "Â¿QuÃ© posibilidad tÃ©cnica introdujo la tÃ©cnica de desarrollo web AJAX segÃºn el temario?",
    options: [
      { id: "A", text: "PermitiÃ³ sustituir el servidor Apache por un navegador sin necesidad de backend.", isCorrect: false },
      { id: "B", text: "PosibilitÃ³ que el cÃ³digo JavaScript ejecutado en el navegador se comunique con un servidor de Internet para obtener informaciÃ³n y modificar el contenido de la pÃ¡gina actual sin necesidad de recargarla ni salir de ella.", isCorrect: true },
      { id: "C", text: "ObligÃ³ a compilar todo el cÃ³digo PHP en binarios de C++ antes de descargarlo al cliente.", isCorrect: false },
      { id: "D", text: "EliminÃ³ el uso de hojas de estilo CSS sustituyÃ©ndolas por funciones matemÃ¡ticas.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 7: 'Sin embargo, desde hace unos aÃ±os existe una tÃ©cnica de desarrollo web conocida como AJAX, que nos posibilita realizar programas en los que el cÃ³digo JavaScript que se ejecuta en el navegador pueda comunicarse con un servidor de Internet para obtener informaciÃ³n con la que, por ejemplo, modificar la pÃ¡gina web actual... sin salir de una pÃ¡gina se puede modificar su contenido en base a la informaciÃ³n que se almacena en un servidor'.",
    distractors: {
      A: "El backend sigue siendo indispensable para gestionar bases de datos y seguridad.",
      C: "PHP no se compila en binarios C++ por usar AJAX.",
      D: "CSS sigue siendo la tecnologÃ­a de estilos universal."
    },
    trapNote: "AJAX = comunicaciÃ³n asÃ­ncrona en segundo plano para actualizar fragmentos de la pÃ¡gina sin recargarla."
  },
  {
    id: 28,
    level: "avanzado",
    topic: 1,
    topicName: "Arquitectura SPA (Single Page Application)",
    page: "PÃ¡g. 7-8",
    question: "Â¿CuÃ¡l es la diferencia fundamental en el ciclo de vida entre una arquitectura web cliente-servidor tradicional y una SPA (Single Page Application)?",
    options: [
      { id: "A", text: "En la tradicional se usa JSON y en la SPA se usa exclusivamente XML y SOAP.", isCorrect: false },
      { id: "B", text: "En la tradicional el navegador no puede interpretar hojas de estilo CSS, mientras que en la SPA sÃ­.", isCorrect: false },
      { id: "C", text: "En la tradicional cada acciÃ³n suele recargar la pÃ¡gina completa con nuevo HTML (Form POST -> Page Reload); en la SPA la aplicaciÃ³n se carga una sola vez y solo se actualizan partes especÃ­ficas mediante JavaScript/AJAX contra servicios REST consumiendo JSON.", isCorrect: true },
      { id: "D", text: "En la SPA no interviene ningÃºn servidor web; todo se ejecuta en el navegador sin ninguna peticiÃ³n de red.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 7 y 8 (diagramas): en la arquitectura tradicional, un formulario provoca 'Form POST' y 'Page Reload' completo con nuevo HTML del servidor. En una SPA, tras el 'Initial Request' de HTML, las interacciones usan 'AJAX' para recibir datos estructurados en 'JSON' y actualizar el DOM sin recargar la pÃ¡gina.",
    distractors: {
      A: "Al revÃ©s, las SPA modernas consumen servicios REST intercambiando JSON.",
      B: "Tanto la tradicional como la SPA usan CSS.",
      D: "La SPA sigue necesitando el backend para consultar datos y autenticaciÃ³n mediante peticiones HTTP asÃ­ncronas."
    },
    trapNote: "FÃ­jate en las palabras clave del temario: 'la aplicaciÃ³n se carga una sola vez', 'no se recarga la pÃ¡gina completa', 'programaciÃ³n reactiva', 'REST / JSON'."
  },
  {
    id: 29,
    level: "avanzado",
    topic: 1,
    topicName: "TransiciÃ³n hacia ProgramaciÃ³n Reactiva y REST",
    page: "PÃ¡g. 7",
    question: "SegÃºn el texto oficial, Â¿hacia quÃ© paradigma arquitectÃ³nico estÃ¡ evolucionando a dÃ­a de hoy gran parte del desarrollo web moderno?",
    options: [
      { id: "A", text: "Hacia el abandono del protocolo HTTP a favor de conexiones directas por puerto serie RS-232.", isCorrect: false },
      { id: "B", text: "Hacia una arquitectura SPA donde el cliente gana mucho mayor peso y sigue una programaciÃ³n reactiva que accede a servicios remotos REST que realizan las operaciones (comunicÃ¡ndose mediante JSON).", isCorrect: true },
      { id: "C", text: "Hacia el regreso exclusivo a pÃ¡ginas web estÃ¡ticas sin JavaScript para ahorrar memoria en los routers.", isCorrect: false },
      { id: "D", text: "Hacia aplicaciones CGI compiladas en C puro para todos los dispositivos mÃ³viles.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 7 literal: 'A dÃ­a de hoy, gran parte del desarrollo web estÃ¡ pasando de una arquitectura web cliente-servidor clÃ¡sica, donde el cliente realiza una llamada al backend, hacia una arquitectura SPA donde el cliente gana mucho mayor peso y sigue una programaciÃ³n reactiva que accede a servicios remotos REST que realizan las operaciones (comunicÃ¡ndose mediante JSON)'.",
    distractors: {
      A: "RS-232 es un protocolo serie antiguo de hardware, nada que ver con la web moderna.",
      C: "La tendencia no es volver a pÃ¡ginas estÃ¡ticas puras para toda la web.",
      D: "CGI tradicional estÃ¡ en declive por su ineficiencia en procesos."
    },
    trapNote: "Frase textual de la pÃ¡gina 7: 'el cliente gana mucho mayor peso y sigue una programaciÃ³n reactiva que accede a servicios remotos REST comunicÃ¡ndose mediante JSON'."
  },
  {
    id: 30,
    level: "avanzado",
    topic: 1,
    topicName: "Diagramas de Ciclo de Vida: Traditional vs. SPA",
    page: "PÃ¡g. 8",
    question: "Observando los diagramas de la pÃ¡gina 8 ('Traditional Page Lifecycle' vs 'SPA Lifecycle'), Â¿quÃ© mensaje clave intercambia el servidor con el cliente tras la peticiÃ³n inicial en cada modelo?",
    options: [
      { id: "A", text: "En Traditional: Form POST devuelve HTML y produce Page Reload; en SPA: AJAX devuelve JSON y no recarga la pÃ¡gina.", isCorrect: true },
      { id: "B", text: "En ambos casos el servidor devuelve archivos binarios compilados .exe.", isCorrect: false },
      { id: "C", text: "En Traditional se utiliza WebSockets y en SPA se utiliza mod_perl.", isCorrect: false },
      { id: "D", text: "En Traditional el servidor se comunica con XML y en SPA no existe ninguna respuesta del servidor.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 8 (diagramas oficiales): Traditional Page Lifecycle muestra 'Form POST -> HTML -> Page Reload!'. SPA Lifecycle muestra 'AJAX -> JSON -> [...]'.",
    distractors: {
      B: "Nunca se devuelven archivos ejecutables .exe para renderizado web estÃ¡ndar.",
      C: "Los diagramas no reflejan WebSockets ni mod_perl.",
      D: "En SPA hay comunicaciÃ³n continua mediante peticiones asÃ­ncronas."
    },
    trapNote: "Diferencia de datos en el diagrama: Traditional recibe pÃ¡ginas completas en HTML; SPA recibe datos crudos en formato JSON."
  },

  // ==========================================================================
  // BLOQUE 2: ARQUITECTURA POR CAPAS Y PATRÃ“N MVC (PÃ¡g. 8-10)
  // ==========================================================================
  {
    id: 31,
    level: "medio",
    topic: 2,
    topicName: "Componentes Principales en el Servidor",
    page: "PÃ¡g. 8-9",
    question: "Â¿CuÃ¡les son los cuatro componentes principales con los que se debe contar para ejecutar aplicaciones web dinÃ¡micas en un servidor?",
    options: [
      { id: "A", text: "1. Tarjeta grÃ¡fica dedicada, 2. Teclado mecÃ¡nico, 3. Router de fibra, 4. Navegador Chrome.", isCorrect: false },
      { id: "B", text: "1. Un servidor web, 2. El mÃ³dulo encargado de ejecutar el cÃ³digo y generar el HTML, 3. Una base de datos (normalmente tambiÃ©n un servidor), 4. El lenguaje de programaciÃ³n (ej. PHP).", isCorrect: true },
      { id: "C", text: "1. Java Virtual Machine, 2. Apache Geronimo, 3. Microsoft Access, 4. Perl en modo CGI.", isCorrect: false },
      { id: "D", text: "1. Docker Desktop, 2. Kubernetes cluster, 3. Git, 4. Cuenta en GitHub.", isCorrect: false }
    ],
    explanation: "PÃ¡ginas 8-9 enumeran los 4 componentes: 1. Un servidor web (recibe peticiones y envÃ­a respuestas). 2. El mÃ³dulo encargado de ejecutar el cÃ³digo (integrado o delegado). 3. Una base de datos (almacÃ©n de datos). 4. El lenguaje de programaciÃ³n utilizado (PHP).",
    distractors: {
      A: "Son perifÃ©ricos de usuario, no componentes de servidor.",
      C: "Son tecnologÃ­as especÃ­ficas, no la clasificaciÃ³n general de 4 componentes del temario.",
      D: "Herramientas de despliegue y control de versiones."
    },
    trapNote: "Aprende los 4 elementos canÃ³nicos de la pÃ¡gina 8-9: Servidor Web + MÃ³dulo Ejecutor + Base de Datos + Lenguaje de ProgramaciÃ³n."
  },
  {
    id: 32,
    level: "medio",
    topic: 2,
    topicName: "Necesidad de la Base de Datos",
    page: "PÃ¡g. 9",
    question: "Respecto a la base de datos en una aplicaciÃ³n web, Â¿quÃ© matiz conceptual seÃ±ala el temario en la pÃ¡gina 9?",
    options: [
      { id: "A", text: "Que es matemÃ¡ticamente imposible que un servidor web devuelva HTML sin conectarse a MySQL.", isCorrect: false },
      { id: "B", text: "Que no es estrictamente necesario contar con una base de datos, pero en la prÃ¡ctica se utiliza en todas las aplicaciones web que manejan grandes cantidades de datos para almacenarlos.", isCorrect: true },
      { id: "C", text: "Que las bases de datos solo pueden funcionar en el mismo equipo fÃ­sico donde estÃ¡ instalado el navegador cliente.", isCorrect: false },
      { id: "D", text: "Que PHP 8.x prohÃ­be la ejecuciÃ³n de scripts si no existe una tabla llamada 'users' en MariaDB.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 9 literal: 'Una base de datos, que normalmente tambiÃ©n serÃ¡ un servidor. Este componente no es estrictamente necesario, pero en la prÃ¡ctica se utiliza en todas las aplicaciones web que utilizan grandes cantidades de datos para almacenarlos'.",
    distractors: {
      A: "Un script PHP puede generar HTML dinÃ¡mico (ej. cÃ¡lculos o fecha actual) sin consultar ninguna BD.",
      C: "La base de datos suele estar en un servidor independiente o en el mismo servidor de aplicaciones, no en el cliente.",
      D: "PHP no impone estructuras de tablas predeterminadas."
    },
    trapNote: "Pregunta clÃ¡sica de verdadero/falso: Â¿Es estrictamente obligatoria la base de datos para una web dinÃ¡mica? No es estrictamente necesaria, pero sÃ­ habitual en la prÃ¡ctica."
  },
  {
    id: 33,
    level: "medio",
    topic: 2,
    topicName: "Motivo del DiseÃ±o en Capas",
    page: "PÃ¡g. 9",
    question: "Â¿CuÃ¡l es el motivo fundamental que justifica dividir el diseÃ±o de una aplicaciÃ³n web en capas o niveles?",
    options: [
      { id: "A", text: "Obligar a que el usuario descargue tres navegadores web distintos simultÃ¡neamente.", isCorrect: false },
      { id: "B", text: "Separar las funciones lÃ³gicas de la misma, de tal forma que sea posible ejecutar cada una en un servidor distinto en caso de que sea necesario.", isCorrect: true },
      { id: "C", text: "Eliminar definitivamente la necesidad de contar con una base de datos relacional.", isCorrect: false },
      { id: "D", text: "Permitir que el cÃ³digo HTML se interprete en el procesador grÃ¡fico antes de solicitar datos al servidor.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 9: 'El motivo de dividir en capas el diseÃ±o de una aplicaciÃ³n es que se puedan separar las funciones lÃ³gicas de la misma, de tal forma que sea posible ejecutar cada una en un servidor distinto (en caso de que sea necesario)'.",
    distractors: {
      A: "Es absurdo; el cliente utiliza un Ãºnico navegador.",
      C: "La capa de datos se encarga justamente de la base de datos.",
      D: "La arquitectura por capas se enfoca en modularidad, desacoplamiento y escalabilidad distribuida."
    },
    trapNote: "Clave conceptual: separar funciones lÃ³gicas para permitir su ejecuciÃ³n en servidores fÃ­sicos diferentes."
  },
  {
    id: 34,
    level: "basico",
    topic: 2,
    topicName: "Capa de PresentaciÃ³n (Cliente)",
    page: "PÃ¡g. 9",
    question: "En una arquitectura web clÃ¡sica de 3 capas, Â¿quÃ© funciÃ³n cumple la 'Capa Cliente o de PresentaciÃ³n' y quÃ© tecnologÃ­as se utilizan habitualmente en ella?",
    options: [
      { id: "A", text: "Almacenar registros en tablas relacionales mediante MySQL y PostgreSQL.", isCorrect: false },
      { id: "B", text: "Es donde programamos todo lo relacionado con la interfaz de usuario, esto es, la parte visible de la aplicaciÃ³n con la que interactÃºa el usuario (HTML, CSS, JS).", isCorrect: true },
      { id: "C", text: "Ejecutar consultas SQL y gestionar la persistencia en discos duros del servidor.", isCorrect: false },
      { id: "D", text: "Configurar los mÃ³dulos mod_php y PHP-FPM en Apache.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 9: 'Una capa cliente (presentaciÃ³n), donde programamos todo lo relacionado con la interfaz de usuario, esto es, la parte visible de la aplicaciÃ³n con la que interactÃºa el usuario (HTML, CSS, JS)'.",
    distractors: {
      A: "Esa es la responsabilidad de la capa de datos.",
      C: "Esa es tarea de la capa de datos y SGBD.",
      D: "ConfiguraciÃ³n de servidor web, ajena a la capa de presentaciÃ³n cliente."
    },
    trapNote: "Capa de presentaciÃ³n = Interfaz visible con la que interactÃºa el usuario = HTML + CSS + JavaScript."
  },
  {
    id: 35,
    level: "medio",
    topic: 2,
    topicName: "Capa de AplicaciÃ³n (LÃ³gica de Negocio)",
    page: "PÃ¡g. 9",
    question: "Â¿QuÃ© tecnologÃ­as corresponden tÃ­picamente a la 'Capa de AplicaciÃ³n o LÃ³gica de Negocio' en una arquitectura web clÃ¡sica de 3 capas?",
    options: [
      { id: "A", text: "HTML, CSS y JavaScript exclusivo de navegador.", isCorrect: false },
      { id: "B", text: "PHP, Java, Python, .NET (C#), etc., donde se programa la funcionalidad de la aplicaciÃ³n.", isCorrect: true },
      { id: "C", text: "MySQL, Oracle, PostgreSQL, SQL Server y MongoDB.", isCorrect: false },
      { id: "D", text: "Googlebot, DNS y fibra Ã³ptica.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 9: 'Una capa de aplicaciÃ³n (lÃ³gica de negocio) donde deberÃ¡s programar la funcionalidad de tu aplicaciÃ³n (PHP, Java, Python, .NET, etc.)'.",
    distractors: {
      A: "Pertenecen a la capa cliente/presentaciÃ³n.",
      C: "Pertenecen a la capa de datos.",
      D: "Conceptos de red e indexaciÃ³n sin relaciÃ³n."
    },
    trapNote: "No confundas la Capa de AplicaciÃ³n (lÃ³gica del servidor) con la Capa de PresentaciÃ³n (cliente) ni con la Capa de Datos."
  },
  {
    id: 36,
    level: "basico",
    topic: 2,
    topicName: "Capa de Datos",
    page: "PÃ¡g. 9",
    question: "En el esquema de 3 capas de la pÃ¡gina 9, Â¿cuÃ¡l es la funciÃ³n de la 'Capa de Datos' y quÃ© sistemas gestores de base de datos se ilustran en la figura?",
    options: [
      { id: "A", text: "Renderizar fuentes Arial en color rojo; ejemplos: Firefox y Safari.", isCorrect: false },
      { id: "B", text: "Encargarse de almacenar la informaciÃ³n de la aplicaciÃ³n en una base de datos y recuperarla cuando sea necesario; ejemplos: MySQL, Oracle, PostgreSQL, SQL Server, MongoDB.", isCorrect: true },
      { id: "C", text: "Interpretar etiquetas HTML en el router; ejemplos: Apache y Nginx.", isCorrect: false },
      { id: "D", text: "Controlar los atajos de teclado en el editor Visual Studio Code.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 9: 'Una capa de datos, que se tendrÃ¡ que encargar de almacenar la informaciÃ³n de la aplicaciÃ³n en una base de datos y recuperarla cuando sea necesario'. En el diagrama figuran: MySQL, Oracle, PostgreSQL, SQL Server, MongoDB.",
    distractors: {
      A: "Renderizado es funciÃ³n de la capa de presentaciÃ³n en el navegador.",
      C: "Apache y Nginx son servidores web de la capa intermedia/aplicaciÃ³n.",
      D: "VSCode es una herramienta de desarrollo del programador."
    },
    trapNote: "FÃ­jate en los motores citados en la imagen: tanto relacionales (MySQL, Oracle, PostgreSQL, SQL Server) como no relacionales (MongoDB)."
  },
  {
    id: 37,
    level: "medio",
    topic: 2,
    topicName: "Concepto y Beneficios del PatrÃ³n MVC",
    page: "PÃ¡g. 9-10",
    question: "Â¿QuÃ© es el Modelo Vista Controlador (MVC) y quÃ© ventajas aporta al desarrollo de software segÃºn el texto oficial?",
    options: [
      { id: "A", text: "Un protocolo de red para sustituir TCP/IP que acelera la descarga de vÃ­deos en streaming.", isCorrect: false },
      { id: "B", text: "Un modelo de arquitectura que separa los datos y la lÃ³gica de negocio respecto a la interfaz de usuario y el componente encargado de gestionar eventos y comunicaciones; permite reutilizar cÃ³digo y mejorar su organizaciÃ³n y mantenimiento.", isCorrect: true },
      { id: "C", text: "Una extensiÃ³n de pago de PhpStorm para formatear archivos con PSR-12.", isCorrect: false },
      { id: "D", text: "Un comando del panel de control de XAMPP para apagar Apache cuando falla Tomcat.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 9: 'El Modelo Vista Controlador (Model-View-Controller) es un modelo de arquitectura que separa los datos y la lÃ³gica de negocio respecto a la interfaz de usuario y el componente encargado de gestionar los eventos y las comunicaciones. Al separar los componentes en elementos conceptuales permite reutilizar el cÃ³digo y mejorar su organizaciÃ³n y mantenimiento'.",
    distractors: {
      A: "MVC es un patrÃ³n de diseÃ±o/arquitectura de software, no un protocolo de red.",
      C: "PSR-12 lo aplica PHP Intelephense, nada que ver con la definiciÃ³n de MVC.",
      D: "No es un comando de XAMPP."
    },
    trapNote: "Las dos ventajas clave seÃ±aladas textualmente son: 'reutilizar el cÃ³digo' y 'mejorar su organizaciÃ³n y mantenimiento'."
  },
  {
    id: 38,
    level: "medio",
    topic: 2,
    topicName: "MVC: El Modelo",
    page: "PÃ¡g. 10",
    question: "En el patrÃ³n de arquitectura MVC, Â¿cuÃ¡l es la responsabilidad especÃ­fica del MODELO y mediante quÃ© elemento se accede habitualmente a Ã©l?",
    options: [
      { id: "A", text: "Capturar el clic del ratÃ³n y dibujar las cajas de estilo CSS directamente en el monitor.", isCorrect: false },
      { id: "B", text: "Representa la informaciÃ³n y gestiona todos los accesos a Ã©sta (consultas y actualizaciones provenientes normalmente de una base de datos); se accede vÃ­a el Controlador.", isCorrect: true },
      { id: "C", text: "Escuchar en el puerto 80 del servidor Apache para redirigir el trÃ¡fico a IIS.", isCorrect: false },
      { id: "D", text: "Comprobar si el navegador del cliente tiene instalada la extensiÃ³n Code Runner.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 10: 'Modelo: datos y lÃ³gica de negocio. Representa la informaciÃ³n y gestiona todos los accesos a Ã©sta, tanto consultas como actualizaciones provenientes, normalmente, de una base de datos. Se accede vÃ­a el controlador'.",
    distractors: {
      A: "Dibujar elementos visuales es funciÃ³n de la Vista.",
      C: "Escuchar en el puerto es tarea del servidor web HTTP, no del Modelo.",
      D: "Code Runner es una herramienta de VSCode."
    },
    trapNote: "Frase textual del temario que suele ser pregunta trampa de examen: 'Se accede vÃ­a el controlador'."
  },
  {
    id: 39,
    level: "medio",
    topic: 2,
    topicName: "MVC: El Controlador",
    page: "PÃ¡g. 10",
    question: "En el patrÃ³n MVC, Â¿cuÃ¡l es la funciÃ³n precisa del CONTROLADOR?",
    options: [
      { id: "A", text: "Gestionar el almacenamiento persistente de los registros en los discos del servidor de bases de datos.", isCorrect: false },
      { id: "B", text: "ActÃºa como intermediario modelo/vista: responde a las acciones del usuario, realiza peticiones al modelo para solicitar informaciÃ³n y, tras recibir la respuesta del modelo, le envÃ­a los datos a la vista.", isCorrect: true },
      { id: "C", text: "Formatear visualmente con etiquetas HTML y reglas CSS los colores de la interfaz.", isCorrect: false },
      { id: "D", text: "Sustituir al servidor web Apache para escuchar en el puerto TCP 80 sin protocolo HTTP.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 10: 'Controlador: intermediario modelo/vista. Responde a las acciones del usuario, y realiza peticiones al modelo para solicitar informaciÃ³n. Tras recibir la respuesta del modelo, le envÃ­a los datos a la vista'.",
    distractors: {
      A: "Esa es la responsabilidad del Modelo (y de la capa de datos).",
      C: "Esa es la responsabilidad de la Vista.",
      D: "El controlador es un componente de software de la aplicaciÃ³n, no un demonio de red."
    },
    trapNote: "Flujo MVC: Usuario interactÃºa con la Vista -> PeticiÃ³n al Controlador -> Controlador consulta al Modelo -> Modelo devuelve datos -> Controlador actualiza la Vista."
  },
  {
    id: 40,
    level: "medio",
    topic: 2,
    topicName: "MVC: La Vista",
    page: "PÃ¡g. 10",
    question: "En el patrÃ³n MVC, Â¿cuÃ¡l es la funciÃ³n de la VISTA y cÃ³mo interactÃºa el usuario con ella?",
    options: [
      { id: "A", text: "Ejecutar consultas SQL directas contra las tablas de MySQL saltÃ¡ndose la aplicaciÃ³n.", isCorrect: false },
      { id: "B", text: "Es la interfaz de usuario y define cÃ³mo se muestran los datos; presenta de forma visual el modelo y los datos preparados por el controlador. El usuario interactÃºa con ella y realiza nuevas peticiones al controlador.", isCorrect: true },
      { id: "C", text: "Compilar los servlets de Jakarta EE en cÃ³digo intermedio de mÃ¡quina virtual.", isCorrect: false },
      { id: "D", text: "Modificar las directivas upload_max_filesize y max_execution_time de php.ini.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 10: 'Vista: interfaz de usuario y cÃ³mo se muestran los datos. Presenta al usuario de forma visual el modelo y los datos preparados por el controlador. El usuario interactÃºa con la vista y realiza nuevas peticiones al controlador'.",
    distractors: {
      A: "La Vista nunca interactÃºa directamente con la BD en un patrÃ³n MVC estricto.",
      C: "La compilaciÃ³n de Java no corresponde a la Vista.",
      D: "php.ini es un archivo de configuraciÃ³n del servidor."
    },
    trapNote: "El usuario VE la Vista, interactÃºa con ella, pero sus peticiones van dirigidas al CONTROLADOR."
  },
  {
    id: 41,
    level: "avanzado",
    topic: 2,
    topicName: "Diagrama de InteracciÃ³n MVC",
    page: "PÃ¡g. 10",
    question: "Analizando el esquema 'Model-View-Controller' de la pÃ¡gina 10, Â¿cuÃ¡les son las etiquetas exactas de las flechas que comunican al Controlador con la Vista y con el Modelo?",
    options: [
      { id: "A", text: "Controlador envÃ­a 'Send Data' a View; y entre Controller y Model hay 'Request Information' y 'Response Information'.", isCorrect: true },
      { id: "B", text: "Controlador envÃ­a 'Compile Binary' a View; y entre Controller y Model hay 'Drop Table'.", isCorrect: false },
      { id: "C", text: "View envÃ­a 'Direct SQL' al Model sin pasar por Controller.", isCorrect: false },
      { id: "D", text: "Model envÃ­a 'HTTP 404' directamente al Usuario.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 10 (diagrama oficial): la flecha de Controller a View se titula 'Send Data'. La flecha de Controller a Model se titula 'Request Information' y la de vuelta del Model al Controller se titula 'Response Information'. Del User al Controller va 'Request' y de View al User va 'Response'.",
    distractors: {
      B: "TÃ©rminos inventados sin correspondencia en el esquema.",
      C: "En el diagrama la View no tiene flecha directa hacia el Model.",
      D: "El Model no envÃ­a respuestas HTTP al usuario directamente."
    },
    trapNote: "Pregunta hiper-especÃ­fica de examen sobre las flechas del diagrama: Controller pide informaciÃ³n ('Request Information'), Model responde ('Response Information') y Controller envÃ­a datos a View ('Send Data')."
  },
  {
    id: 42,
    level: "basico",
    topic: 2,
    topicName: "Continuidad del Estudio de MVC",
    page: "PÃ¡g. 10",
    question: "Al final del apartado del Modelo Vista-Controlador, Â¿quÃ© indica el documento sobre cuÃ¡ndo se profundizarÃ¡ con mÃ¡s detalle en este patrÃ³n?",
    options: [
      { id: "A", text: "Se estudiarÃ¡ al aprender a instalar tarjetas grÃ¡ficas en el servidor.", isCorrect: false },
      { id: "B", text: "Se estudia con mÃ¡s detalle al profundizar en el uso de los frameworks PHP.", isCorrect: true },
      { id: "C", text: "No se volverÃ¡ a mencionar jamÃ¡s en ningÃºn curso de DAW ni DAM.", isCorrect: false },
      { id: "D", text: "Se estudiarÃ¡ Ãºnicamente al configurar el archivo httpd.conf de Apache.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 10 literal: 'Se estudia con mÃ¡s detalle al profundizar en el uso de los frameworks PHP'. En temas posteriores se aplicarÃ¡ MVC con frameworks como Laravel o Symfony.",
    distractors: {
      A: "El hardware grÃ¡fico no se relaciona con MVC.",
      C: "MVC es la columna vertebral del desarrollo web en ciclos formativos.",
      D: "httpd.conf es configuraciÃ³n del servidor web, no de arquitectura de aplicaciÃ³n MVC."
    },
    trapNote: "Frase literal de cierre del punto 2 de la pÃ¡gina 10: 'Se estudia con mÃ¡s detalle al profundizar en el uso de los frameworks PHP'."
  },

  // ==========================================================================
  // BLOQUE 3: TECNOLOGÃAS, PLATAFORMAS Y SERVIDORES WEB (PÃ¡g. 10-15)
  // ==========================================================================
  {
    id: 43,
    level: "medio",
    topic: 3,
    topicName: "Jakarta EE: Historia y Nombres",
    page: "PÃ¡g. 10",
    question: "Â¿QuÃ© es Jakarta EE y quÃ© nombres oficiales recibiÃ³ sucesivamente a lo largo de su historia antes de su denominaciÃ³n actual?",
    options: [
      { id: "A", text: "Antes Windows EE y originalmente MS-DOS Web.", isCorrect: false },
      { id: "B", text: "Antes Java EE (Enterprise Edition) y originalmente J2EE; es una plataforma que reÃºne un conjunto de especificaciones, APIs y tecnologÃ­as para aplicaciones empresariales en Java.", isCorrect: true },
      { id: "C", text: "Antes PHP Enterprise y originalmente mod_php.", isCorrect: false },
      { id: "D", text: "Antes Node EE y originalmente Express 1.0.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 10: 'Jakarta EE: antes Java EE (Enterprise Edition) y originalmente J2EE. Es una plataforma que reÃºne un conjunto de especificaciones, APIs y tecnologÃ­as para el desarrollo de aplicaciones empresariales en Java'.",
    distractors: {
      A: "Windows EE no existe.",
      C: "PHP no tiene relaciÃ³n con el origen de Jakarta EE.",
      D: "Node.js y Express son tecnologÃ­as basadas en JavaScript, ajenas a Java EE."
    },
    trapNote: "EvoluciÃ³n cronolÃ³gica: J2EE -> Java EE -> Jakarta EE."
  },
  {
    id: 44,
    level: "medio",
    topic: 3,
    topicName: "Jakarta EE: Impulsores y Respaldo",
    page: "PÃ¡g. 10",
    question: "Â¿QuÃ© fundaciÃ³n sin Ã¡nimo de lucro impulsa actualmente la plataforma Jakarta EE y quÃ© empresas tecnolÃ³gicas lÃ­deres la respaldan segÃºn el documento?",
    options: [
      { id: "A", text: "Impulsada por la FundaciÃ³n Apache y respaldada por Microsoft y Apple.", isCorrect: false },
      { id: "B", text: "EstÃ¡ impulsada por la FundaciÃ³n Eclipse y cuenta con el respaldo de empresas como Oracle, IBM o Red Hat.", isCorrect: true },
      { id: "C", text: "Impulsada por Google y respaldada por Meta y Twitter.", isCorrect: false },
      { id: "D", text: "Impulsada por la Free Software Foundation y respaldada exclusivamente por Canonical.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 10: 'EstÃ¡ impulsada por la FundaciÃ³n Eclipse y cuenta con el respaldo de empresas como Oracle, IBM o Red Hat. Una de sus grandes ventajas es la enorme cantidad de librerÃ­as y herramientas disponibles en Java, ademÃ¡s de una amplia comunidad'.",
    distractors: {
      A: "Apache gestiona Tomcat/Geronimo, pero el estÃ¡ndar Jakarta EE lo gestiona la FundaciÃ³n Eclipse.",
      C: "Google y Meta no son las entidades citadas en el texto para Jakarta EE.",
      D: "No la gestiona la FSF ni Canonical."
    },
    trapNote: "Memoriza: Entidad impulsora = FundaciÃ³n Eclipse; Empresas de respaldo = Oracle, IBM, Red Hat."
  },
  {
    id: 45,
    level: "medio",
    topic: 3,
    topicName: "Jakarta EE: Servlets, JSP y EJB",
    page: "PÃ¡g. 10-11, 14",
    question: "Respecto a Jakarta EE (Java EE), Â¿quÃ© componente se encarga especÃ­ficamente de encapsular la LÃ“GICA DE NEGOCIO y cuÃ¡les se orientan a la GENERACIÃ“N DINÃMICA DE PÃGINAS?",
    options: [
      { id: "A", text: "Servlets encapsulan la lÃ³gica de negocio; EJB y JSP generan pÃ¡ginas web.", isCorrect: false },
      { id: "B", text: "EJB (Enterprise JavaBeans) encapsulan la lÃ³gica de negocio; Servlets y JSP se orientan a la generaciÃ³n dinÃ¡mica de pÃ¡ginas web.", isCorrect: true },
      { id: "C", text: "phpMyAdmin encapsula la lÃ³gica de negocio; Apache Geronimo genera pÃ¡ginas web.", isCorrect: false },
      { id: "D", text: "CSS encapsula la lÃ³gica de negocio; HTML genera las bases de datos.", isCorrect: false }
    ],
    explanation: "PÃ¡ginas 10-11 literal: 'Entre sus tecnologÃ­as mÃ¡s conocidas estÃ¡n Servlets y JSP (orientadas a la generaciÃ³n dinÃ¡mica de pÃ¡ginas web) y EJB (Enterprise JavaBeans), que encapsulan la lÃ³gica de negocio de las aplicaciones'.",
    distractors: {
      A: "Al revÃ©s: Servlets y JSP generan pÃ¡ginas; EJB lleva la lÃ³gica de negocio.",
      C: "phpMyAdmin es una aplicaciÃ³n PHP para MySQL.",
      D: "CSS y HTML son tecnologÃ­as de presentaciÃ³n."
    },
    trapNote: "DistinciÃ³n crucial de examen: Servlets y JSP = generaciÃ³n de pÃ¡ginas; EJB = lÃ³gica de negocio."
  },
  {
    id: 46,
    level: "medio",
    topic: 3,
    topicName: "Servidores Completos vs. Contenedores de Servlets",
    page: "PÃ¡g. 14",
    question: "Â¿QuÃ© diferencia existe en la plataforma Jakarta EE entre un 'servidor de aplicaciones completo' y un 'contenedor de servlets'?",
    options: [
      { id: "A", text: "Los contenedores de servlets solo funcionan en Windows y los servidores completos solo en Linux.", isCorrect: false },
      { id: "B", text: "Los servidores de aplicaciones completos implementan todas las especificaciones de la plataforma, mientras que los contenedores de servlets solo soportan parte de la especificaciÃ³n y resultan mÃ¡s ligeros.", isCorrect: true },
      { id: "C", text: "Los contenedores de servlets ejecutan cÃ³digo PHP y los completos ejecutan cÃ³digo C#.", isCorrect: false },
      { id: "D", text: "Un servidor completo no requiere mÃ¡quina virtual de Java.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 14: 'Para ejecutar aplicaciones Jakarta EE podemos usar: Servidores de aplicaciones completos, que implementan todas las especificaciones de la plataforma. Contenedores de servlets, que solo soportan parte de la especificaciÃ³n y resultan mÃ¡s ligeros. La elecciÃ³n depende del tamaÃ±o y las tecnologÃ­as que requiera la aplicaciÃ³n'.",
    distractors: {
      A: "Ambos son multiplataforma (Java corre en cualquier SO con JVM).",
      C: "Ambos pertenecen al ecosistema Java, no a PHP ni C#.",
      D: "Todo el ecosistema Java requiere JVM."
    },
    trapNote: "Contenedor de servlets = soporte parcial (ej. Tomcat soportando Servlets/JSP) y mÃ¡s ligero."
  },
  {
    id: 47,
    level: "medio",
    topic: 3,
    topicName: "Servidores Java EE: Comerciales vs. CÃ³digo Abierto",
    page: "PÃ¡g. 14-15",
    question: "Dentro de los servidores de aplicaciones Jakarta EE citados en el tema, Â¿cuÃ¡les clasifica el documento como comerciales y cuÃ¡les como de cÃ³digo abierto?",
    options: [
      { id: "A", text: "Comerciales: GlassFish y WildFly; CÃ³digo abierto: WebSphere y WebLogic.", isCorrect: false },
      { id: "B", text: "Comerciales: IBM WebSphere y ORACLE WebLogic; CÃ³digo abierto: JBoss/WildFly, GlassFish y Apache Geronimo.", isCorrect: true },
      { id: "C", text: "Comerciales: Apache Geronimo; CÃ³digo abierto: Microsoft IIS.", isCorrect: false },
      { id: "D", text: "Comerciales: XAMPP; CÃ³digo abierto: Node.js.", isCorrect: false }
    ],
    explanation: "PÃ¡ginas 14-15: 'Entre los servidores de aplicaciones Java EE mÃ¡s conocidos se encuentran las soluciones comerciales IBM WebSphere y ORACLE WebLogic, y las de cÃ³digo abierto como JBoss/WildFly, GlassFish o Apache Geronimo'.",
    distractors: {
      A: "EstÃ¡ invertido: WebSphere y WebLogic son comerciales.",
      C: "Geronimo es de Apache (cÃ³digo abierto); IIS es de Microsoft.",
      D: "XAMPP no es un servidor Java EE."
    },
    trapNote: "Comerciales = IBM WebSphere, Oracle WebLogic. CÃ³digo abierto = JBoss/WildFly, GlassFish, Apache Geronimo."
  },
  {
    id: 48,
    level: "avanzado",
    topic: 3,
    topicName: "Servidor Apache Geronimo",
    page: "PÃ¡g. 14-15",
    question: "Dentro de las soluciones de cÃ³digo abierto para Java EE, Â¿cuÃ¡l es el detalle singular que el documento seÃ±ala sobre Apache Geronimo?",
    options: [
      { id: "A", text: "Que es el servidor oficial recomendado para este curso por su alta velocidad.", isCorrect: false },
      { id: "B", text: "Que este Ãºltimo lleva aÃ±os inactivo.", isCorrect: true },
      { id: "C", text: "Que solo puede ejecutarse en ordenadores portÃ¡tiles con procesadores Intel.", isCorrect: false },
      { id: "D", text: "Que fue renombrado a Express.js tras ser adquirido por Red Hat.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 15 literal: '...y las de cÃ³digo abierto como JBoss/WildFly, GlassFish o Apache Geronimo (este Ãºltimo lleva aÃ±os inactivo)'.",
    distractors: {
      A: "El servidor recomendado para el curso en local es Apache HTTP Server mediante XAMPP.",
      C: "Java es multiplataforma.",
      D: "Express.js es de Node.js, nada que ver con Apache Geronimo."
    },
    trapNote: "Â¡Pregunta trampa de detalle puro! Muchos alumnos olvidan el apunte entre parÃ©ntesis sobre Apache Geronimo."
  },
  {
    id: 49,
    level: "basico",
    topic: 3,
    topicName: "Pila AMP y Lenguaje mÃ¡s Empleado",
    page: "PÃ¡g. 11",
    question: "Â¿QuÃ© significan las siglas de la arquitectura AMP y cuÃ¡l es el lenguaje de programaciÃ³n mÃ¡s empleado de los tres que contempla?",
    options: [
      { id: "A", text: "Apache, MongoDB y PostgreSQL; el mÃ¡s empleado es Python.", isCorrect: false },
      { id: "B", text: "Apache (servidor web), MySQL/MariaDB (base de datos) y PHP/Perl/Python (lenguaje); siendo PHP el mÃ¡s empleado de los tres.", isCorrect: true },
      { id: "C", text: "Android, MariaDB y Pascal; el mÃ¡s empleado es Pascal.", isCorrect: false },
      { id: "D", text: "Apple, Microsoft y Perl; el mÃ¡s empleado es Perl.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 11: 'AMP son las siglas de Apache, MySQL/MariaDB y PHP/Perl/Python. Las dos primeras siglas hacen referencia al servidor web (Apache) y al servidor de base de datos (MySQL o MariaDB). La Ãºltima se corresponde con el lenguaje de programaciÃ³n utilizado, que puede ser PHP, Perl o Python, siendo PHP el mÃ¡s empleado de los tres'.",
    distractors: {
      A: "M es MySQL/MariaDB, no MongoDB.",
      C: "Android y Pascal no forman parte de la pila AMP.",
      D: "Significado ficticio."
    },
    trapNote: "Tres opciones para la 'P': PHP, Perl o Python, pero el temario recalca: 'siendo PHP el mÃ¡s empleado de los tres'."
  },
  {
    id: 50,
    level: "basico",
    topic: 3,
    topicName: "Variantes de AMP por Sistema Operativo",
    page: "PÃ¡g. 11",
    question: "Dependiendo del sistema operativo que se utilice para el servidor en la pila AMP, Â¿quÃ© acrÃ³nimos se utilizan para Linux, Windows y Mac?",
    options: [
      { id: "A", text: "L-AMP (Linux), W-AMP (Windows) y M-AMP (Mac).", isCorrect: true },
      { id: "B", text: "UNIX-AMP, DOS-AMP y IOS-AMP.", isCorrect: false },
      { id: "C", text: "LIN-AMP, WIN-AMP y MAC-AMP.", isCorrect: false },
      { id: "D", text: "XAMPP-1, XAMPP-2 y XAMPP-3.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 11: 'Dependiendo del sistema operativo que se utilice para el servidor, se utilizan las siglas LAMP (para Linux), WAMP (para Windows) o MAMP (para Mac)'.",
    distractors: {
      B: "AcrÃ³nimos incorrectos e inventados.",
      C: "Winamp era un reproductor de mÃºsica de los aÃ±os 90; la pila web es WAMP.",
      D: "XAMPP agrupa las plataformas en una sola instalaciÃ³n bajo la 'X'."
    },
    trapNote: "LAMP = Linux; WAMP = Windows; MAMP = Mac."
  },
  {
    id: 51,
    level: "medio",
    topic: 3,
    topicName: "Gestor Alternativo en la Pila AMP",
    page: "PÃ¡g. 11",
    question: "Dentro de la arquitectura de la pila AMP, Â¿quÃ© otro sistema gestor de bases de datos cita expresamente el documento como sustituto de MySQL?",
    options: [
      { id: "A", text: "Microsoft Access 97.", isCorrect: false },
      { id: "B", text: "PostgreSQL.", isCorrect: true },
      { id: "C", text: "Redis en modo volÃ¡til.", isCorrect: false },
      { id: "D", text: "SQLite embebido en una cinta magnÃ©tica.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 11 literal: 'TambiÃ©n es posible usar otros componentes, como el gestor de bases de datos PostgreSQL en lugar de MySQL'.",
    distractors: {
      A: "Access no es un SGBD para pilas AMP en servidores.",
      C: "Redis es una base de datos clave-valor en memoria, no el SGBD citado en el texto.",
      D: "No se menciona SQLite sobre cinta magnÃ©tica."
    },
    trapNote: "Sustituto explÃ­cito de MySQL en el temario: PostgreSQL."
  },
  {
    id: 52,
    level: "medio",
    topic: 3,
    topicName: "CaracterÃ­sticas de la Plataforma AMP",
    page: "PÃ¡g. 11",
    question: "Â¿QuÃ© caracterÃ­sticas de tamaÃ±o de aplicaciÃ³n, aprendizaje y licencia definen a la arquitectura AMP?",
    options: [
      { id: "A", text: "Todos los componentes son de cÃ³digo cerrado propietario; requiere 5 aÃ±os de aprendizaje y solo sirve para apps masivas de banca mundial.", isCorrect: false },
      { id: "B", text: "Todos los componentes son de cÃ³digo libre (open source); permite desarrollar aplicaciones de tamaÃ±o pequeÃ±o o mediano con un aprendizaje sencillo; su gran ventaja es su gran comunidad y la multitud de aplicaciones disponibles.", isCorrect: true },
      { id: "C", text: "Solo permite crear pÃ¡ginas de una sola lÃ­nea de cÃ³digo sin estilos visuales.", isCorrect: false },
      { id: "D", text: "Requiere licencia comercial obligatoria de Oracle para poder descargar Apache.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 11: 'Todos los componentes de esta arquitectura son de cÃ³digo libre (open source). Es una plataforma de programaciÃ³n que permite desarrollar aplicaciones de tamaÃ±o pequeÃ±o o mediano con un aprendizaje sencillo. Su gran ventaja es la gran comunidad que la soporta y la multitud de aplicaciones de cÃ³digo libre disponibles'.",
    distractors: {
      A: "Es de cÃ³digo abierto, aprendizaje sencillo y orientada a apps pequeÃ±as/medianas.",
      C: "Permite aplicaciones completas como WordPress o Drupal.",
      D: "Apache es software libre gestionado por la Apache Software Foundation."
    },
    trapNote: "TrÃ­ada descriptiva de AMP: 1) CÃ³digo libre, 2) Apps pequeÃ±as o medianas con aprendizaje sencillo, 3) Gran comunidad y muchas aplicaciones open source (WordPress, etc.)."
  },
  {
    id: 53,
    level: "basico",
    topic: 3,
    topicName: "AcrÃ³nimo Detallado de XAMPP",
    page: "PÃ¡g. 11",
    question: "En el desglose literal del paquete XAMPP que aparece en la pÃ¡gina 11, Â¿quÃ© representa exactamente cada letra?",
    options: [
      { id: "A", text: "X: XML, A: AJAX, M: MongoDB, P: Python, P: PostgreSQL.", isCorrect: false },
      { id: "B", text: "X: Multiplataforma (Windows, Linux, Mac), A: Apache, M: MySQL / MariaDB, P: PHP (lenguaje mÃ¡s utilizado), P: Perl (lenguaje menos usado hoy en dÃ­a).", isCorrect: true },
      { id: "C", text: "X: ExtensiÃ³n, A: Adobe, M: Microsoft, P: Pascal, P: Prolog.", isCorrect: false },
      { id: "D", text: "X: Xcode, A: Apple, M: macOS, P: Python, P: PHP.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 11: 'Â¿QuÃ© incluye XAMPP? X -> multiplataforma (funciona en Windows, Linux y Mac). A -> Apache (servidor web que atiende las peticiones). M -> MySQL / MariaDB (sistema gestor de base de datos). P -> PHP (lenguaje de programaciÃ³n de servidor mÃ¡s utilizado). P -> Perl (lenguajes de programaciÃ³n menos usado hoy en dÃ­a)'.",
    distractors: {
      A: "X no es XML ni M es MongoDB en XAMPP.",
      C: "TÃ©rminos ajenos al acrÃ³nimo de XAMPP.",
      D: "Xcode es un IDE de Apple, no la X de XAMPP."
    },
    trapNote: "Pregunta clÃ¡sica: la X significa 'multiplataforma' (cross-platform), y las dos P son estrictamente PHP y Perl (con el matiz de que Perl es el menos usado hoy)."
  },
  {
    id: 54,
    level: "medio",
    topic: 3,
    topicName: "Sitio Oficial de Descarga de XAMPP",
    page: "PÃ¡g. 11",
    question: "Â¿CuÃ¡l es la URL oficial para descargar el paquete XAMPP indicada en el temario?",
    options: [
      { id: "A", text: "https://www.mysql.com/downloads/", isCorrect: false },
      { id: "B", text: "https://www.apachefriends.org/", isCorrect: true },
      { id: "C", text: "https://code.visualstudio.com/", isCorrect: false },
      { id: "D", text: "https://www.php.net/manual/", isCorrect: false }
    ],
    explanation: "PÃ¡gina 11 literal al pie del desglose de XAMPP: 'Descargar desde: https://www.apachefriends.org/'.",
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
    topicName: "DefiniciÃ³n y Lenguajes de CGI",
    page: "PÃ¡g. 11-12",
    question: "Â¿QuÃ© es CGI (Common Gateway Interface) y en quÃ© lenguajes de programaciÃ³n puede estar escrito un programa CGI?",
    options: [
      { id: "A", text: "Es un chip de silicio; solo puede programarse en lenguaje binario directo.", isCorrect: false },
      { id: "B", text: "Es un estÃ¡ndar que permite a un servidor web comunicarse con programas externos para generar contenido dinÃ¡mico; puede estar escrito en diferentes lenguajes como C, C++, Perl, Python o PHP, entre otros.", isCorrect: true },
      { id: "C", text: "Es un editor de texto exclusivo de Microsoft Windows que solo admite C#.", isCorrect: false },
      { id: "D", text: "Es un sistema gestor de bases de datos no relacional que solo admite JSON.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 11: 'CGI (Common Gateway Interface) es un estÃ¡ndar que permite a un servidor web comunicarse con programas externos para generar contenido dinÃ¡mico. Un programa CGI puede estar escrito en diferentes lenguajes, como C, C++, Perl, Python o PHP, entre otros'.",
    distractors: {
      A: "CGI es una especificaciÃ³n de software e interfaz, no un chip.",
      C: "No es un editor de texto.",
      D: "No es una base de datos."
    },
    trapNote: "CGI es AGNOSTICO al lenguaje: define la interfaz de comunicaciÃ³n con programas externos escritos en prÃ¡cticamente cualquier lenguaje."
  },
  {
    id: 56,
    level: "avanzado",
    topic: 3,
    topicName: "Inconveniente CrÃ­tico de Rendimiento de CGI",
    page: "PÃ¡g. 12, 14",
    question: "Â¿CuÃ¡l es el principal inconveniente de rendimiento del estÃ¡ndar CGI tradicional que motivÃ³ la apariciÃ³n de FastCGI y mÃ³dulos integrados?",
    options: [
      { id: "A", text: "Que los programas CGI solo podÃ­an ejecutarse durante las horas nocturnas del servidor.", isCorrect: false },
      { id: "B", text: "Que para cada peticiÃ³n se crea un nuevo proceso en el sistema operativo, lo que consume un elevado nÃºmero de recursos y ralentiza las respuestas con trÃ¡fico simultÃ¡neo.", isCorrect: true },
      { id: "C", text: "Que los programas CGI no permitÃ­an devolver cÃ³digo HTML al navegador.", isCorrect: false },
      { id: "D", text: "Que requerÃ­a obligatoriamente una pantalla tÃ¡ctil conectada a la torre del servidor.", isCorrect: false }
    ],
    explanation: "PÃ¡ginas 12 y 14: 'El principal inconveniente de CGI es que para cada peticiÃ³n se crea un nuevo proceso, lo que consume mÃ¡s recursos y ralentiza las respuestas. Por este motivo, en las aplicaciones web modernas se utilizan habitualmente otros mecanismos y servidores de aplicaciones mÃ¡s eficientes'.",
    distractors: {
      A: "Los servidores atienden peticiones a cualquier hora.",
      C: "CGI genera HTML que el servidor envÃ­a de vuelta al cliente.",
      D: "Los servidores web habitualmente operan en modo headless (sin pantalla)."
    },
    trapNote: "Concepto clave absoluto: 'cada peticiÃ³n implica la creaciÃ³n de un nuevo proceso', provocando una sobrecarga masiva de CPU y memoria."
  },
  {
    id: 57,
    level: "medio",
    topic: 3,
    topicName: "EvoluciÃ³n y Declive de Perl",
    page: "PÃ¡g. 12",
    question: "Respecto al lenguaje Perl, Â¿quÃ© papel histÃ³rico desempeÃ±Ã³ y cuÃ¡l es su situaciÃ³n en la actualidad segÃºn el texto oficial?",
    options: [
      { id: "A", text: "Perl nunca se utilizÃ³ en la web y hoy es el lenguaje mÃ¡s usado en servidores Node.js.", isCorrect: false },
      { id: "B", text: "Tuvo un papel especialmente importante en los comienzos de la programaciÃ³n web mediante CGI, pero actualmente tiene una presencia mucho menor en el desarrollo web que tecnologÃ­as como PHP, Java, C# o JavaScript/Node.js.", isCorrect: true },
      { id: "C", text: "Perl es el Ãºnico lenguaje compatible con Windows 11 para crear aplicaciones con ASP.NET Core.", isCorrect: false },
      { id: "D", text: "Fue creado por Microsoft para sustituir a C# en la FundaciÃ³n Eclipse.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 12 literal: 'Perl tuvo un papel especialmente importante en los comienzos de la programaciÃ³n web mediante CGI, pero actualmente tiene una presencia mucho menor en el desarrollo web que tecnologÃ­as como PHP, Java, C# o JavaScript/Node.js'.",
    distractors: {
      A: "Perl fue pionero indiscutible en la web CGI en los aÃ±os 90.",
      C: "ASP.NET Core utiliza C#, no Perl.",
      D: "Perl fue creado por Larry Wall y no tiene relaciÃ³n con ASP.NET ni Eclipse."
    },
    trapNote: "Contraste histÃ³rico: Gran protagonismo en los orÃ­genes de CGI vs Presencia residual hoy frente a PHP, Java, C# y Node.js."
  },
  {
    id: 58,
    level: "avanzado",
    topic: 3,
    topicName: "Soluciones al Problema de Procesos: FastCGI y MÃ³dulos",
    page: "PÃ¡g. 14",
    question: "Para solucionar el problema de creaciÃ³n de procesos por peticiÃ³n de CGI, Â¿quÃ© soluciones tÃ©cnicas surgieron segÃºn el temario?",
    options: [
      { id: "A", text: "Obligar a los usuarios a visitar las pÃ¡ginas de una en una mediante un sistema de turnos por telÃ©fono.", isCorrect: false },
      { id: "B", text: "Soluciones como FastCGI y mÃ³dulos especÃ­ficos que permiten ejecutar el cÃ³digo dentro del propio servidor web sin crear procesos nuevos (por ejemplo, mod_perl para Perl en Apache).", isCorrect: true },
      { id: "C", text: "Desactivar el protocolo HTTP y utilizar correos electrÃ³nicos automÃ¡ticos.", isCorrect: false },
      { id: "D", text: "Reescribir el sistema operativo Linux en lenguaje JavaScript.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 14: 'Para mejorar el rendimiento surgieron soluciones como FastCGI y mÃ³dulos especÃ­ficos que permiten ejecutar el cÃ³digo dentro del propio servidor web sin crear procesos nuevos. Por ejemplo, mod_perl para Perl en Apache'.",
    distractors: {
      A: "Distractor absurdo.",
      C: "La comunicaciÃ³n web sigue basÃ¡ndose en HTTP.",
      D: "Linux estÃ¡ escrito principalmente en C."
    },
    trapNote: "Dos mecanismos para evitar crear procesos: 1) FastCGI (procesos persistentes) y 2) MÃ³dulos integrados (como mod_perl o mod_php)."
  },
  {
    id: 59,
    level: "medio",
    topic: 3,
    topicName: "AutoevaluaciÃ³n Oficial del PDF: Cualquier Lenguaje",
    page: "PÃ¡g. 13",
    question: "Pregunta literal de autoevaluaciÃ³n incluida en la pÃ¡gina 13 del PDF: Â¿CuÃ¡l de estas tecnologÃ­as permite la ejecuciÃ³n por el servidor web de programas escritos en cualquier lenguaje?",
    options: [
      { id: "A", text: "Java EE", isCorrect: false },
      { id: "B", text: "PHP", isCorrect: false },
      { id: "C", text: "AMP", isCorrect: false },
      { id: "D", text: "CGI", isCorrect: true }
    ],
    explanation: "PÃ¡gina 13 (AutoevaluaciÃ³n oficial del documento): 'Â¿CuÃ¡l de estas tecnologÃ­as permite la ejecuciÃ³n por el servidor web de programas escritos en cualquier lenguaje? Respuesta: CGI'. CGI es un estÃ¡ndar de comunicaciÃ³n entre el servidor web y programas externos que no impone el lenguaje en que estÃ¡n escritos.",
    distractors: {
      A: "Java EE requiere la plataforma y lenguaje Java.",
      B: "PHP ejecuta cÃ³digo en lenguaje PHP.",
      C: "AMP es una pila concreta basada en Apache, MySQL y PHP/Perl/Python."
    },
    trapNote: "Â¡Esta pregunta cae idÃ©ntica en los exÃ¡menes oficiales porque es la autoevaluaciÃ³n del propio tema!"
  },
  {
    id: 60,
    level: "medio",
    topic: 3,
    topicName: "ASP.NET Core: CaracterÃ­sticas y EvoluciÃ³n",
    page: "PÃ¡g. 12",
    question: "Â¿QuÃ© es ASP.NET Core, quÃ© lenguaje utiliza principalmente y quÃ© diferencia fundamental presenta respecto a las versiones antiguas de ASP.NET?",
    options: [
      { id: "A", text: "Es un plugin de WordPress para PHP; utiliza JavaScript y solo funciona en Android.", isCorrect: false },
      { id: "B", text: "Es el framework web de Microsoft para aplicaciones y APIs dentro de .NET; utiliza principalmente C#; a diferencia de las versiones antiguas (que eran solo para Windows), es de cÃ³digo abierto y multiplataforma (ejecuta en Windows, Linux o macOS).", isCorrect: true },
      { id: "C", text: "Es un compilador comercial de pago que exige licencias de servidor Windows para poder ejecutarse en Linux.", isCorrect: false },
      { id: "D", text: "Es un contenedor de servlets desarrollado por la FundaciÃ³n Eclipse para sustituir a Tomcat.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 12: 'ASP.NET Core es el framework web de Microsoft para el desarrollo de aplicaciones y servicios web. Forma parte del ecosistema .NET... utiliza principalmente el lenguaje de programaciÃ³n C#. A diferencia de las versiones antiguas de ASP.NET, ASP.NET Core es multiplataforma, por lo que las aplicaciones pueden ejecutarse en Windows, Linux o macOS... Una de sus principales ventajas es que .NET y ASP.NET Core son de cÃ³digo abierto y multiplataforma'.",
    distractors: {
      A: "ASP.NET Core es el framework oficial de Microsoft en .NET, no un plugin de WordPress.",
      C: "ASP.NET Core es open source y gratuito.",
      D: "Los contenedores de servlets pertenecen a Java/Jakarta EE."
    },
    trapNote: "Contraste histÃ³rico de examen: ASP.NET clÃ¡sico (propietario, exclusivo de Windows) vs ASP.NET Core (cÃ³digo abierto, multiplataforma: Windows, Linux, macOS)."
  },
  {
    id: 61,
    level: "medio",
    topic: 3,
    topicName: "ASP.NET Core: Servidor Web y Bases de Datos",
    page: "PÃ¡g. 12",
    question: "En entornos Windows, Â¿quÃ© servidor web puede utilizarse con ASP.NET Core y con quÃ© sistemas gestores de bases de datos puede trabajar segÃºn el texto?",
    options: [
      { id: "A", text: "Servidor: Apache Tomcat; Bases de datos: Microsoft Access exclusivamente.", isCorrect: false },
      { id: "B", text: "Servidor web: IIS (Internet Information Services); Bases de datos: SQL Server, MySQL o PostgreSQL, disponiendo de herramientas como Visual Studio.", isCorrect: true },
      { id: "C", text: "Servidor: Node.js; Bases de datos: Ãºnicamente hojas de cÃ¡lculo de Excel.", isCorrect: false },
      { id: "D", text: "Servidor: Apache Geronimo; Bases de datos: BIND DNS.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 12: 'En Windows puede utilizarse IIS (Internet Information Services) como servidor web. ASP.NET Core puede trabajar con diferentes sistemas gestores de bases de datos, como SQL Server, MySQL o PostgreSQL, y cuenta con un amplio ecosistema... disponen de herramientas de desarrollo como Visual Studio'.",
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
    page: "PÃ¡g. 12",
    question: "SegÃºn el documento, Â¿quÃ© es Node.js, cuÃ¡l es su principal ventaja y cuÃ¡les son dos de sus frameworks mÃ¡s conocidos?",
    options: [
      { id: "A", text: "Un gestor de bases de datos relacional; ventaja: no usa disco duro; frameworks: Hibernate y JPA.", isCorrect: false },
      { id: "B", text: "Un entorno de ejecuciÃ³n de cÃ³digo abierto que permite ejecutar programas escritos en JavaScript en el lado servidor (fuera del navegador); ventaja: desarrollar aplicaciones del lado servidor con JavaScript; frameworks: Express.js y NestJS.", isCorrect: true },
      { id: "C", text: "Un compilador de Java a cÃ³digo binario; frameworks: Laravel y Symfony.", isCorrect: false },
      { id: "D", text: "Un sistema operativo para servidores web desarrollado por Oracle.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 12: 'Node.js es un entorno de ejecuciÃ³n de cÃ³digo abierto que permite ejecutar programas escritos en JavaScript en el lado servidor, es decir, fuera del navegador... Entre los frameworks mÃ¡s conocidos se encuentran Express.js y NestJS. Una de sus principales ventajas es que permite desarrollar aplicaciones del lado servidor utilizando JavaScript'.",
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
    topicName: "Criterios de ElecciÃ³n de Arquitectura Web (2.1.1)",
    page: "PÃ¡g. 13",
    question: "En el apartado 2.1.1 sobre 'SelecciÃ³n de una arquitectura de programaciÃ³n web', Â¿cuÃ¡l de los siguientes aspectos NO forma parte de las consideraciones que el desarrollador debe plantearse antes de comenzar?",
    options: [
      { id: "A", text: "Â¿QuÃ© tamaÃ±o y complejidad tiene el proyecto y quÃ© lenguajes de programaciÃ³n conozco?", isCorrect: false },
      { id: "B", text: "Â¿DÃ³nde se desplegarÃ¡ la aplicaciÃ³n: servidor propio, mÃ¡quina virtual, contenedor o nube?", isCorrect: false },
      { id: "C", text: "Â¿QuÃ© requisitos de seguridad, rendimiento, escalabilidad y mantenimiento tiene el proyecto, y quÃ© costes y licencias aplican?", isCorrect: false },
      { id: "D", text: "Â¿QuÃ© tarjeta de sonido dedicada debe instalar obligatoriamente el cliente web para decodificar las etiquetas HTML de la pÃ¡gina?", isCorrect: true }
    ],
    explanation: "PÃ¡gina 13 lista las preguntas clave: tamaÃ±o/complejidad, lenguajes que conozco, necesidad de aprender nueva tecnologÃ­a, frameworks disponibles, cÃ³digo abierto vs comercial, costes/licencias, individual vs equipo, servidor web y SGBD, entorno de despliegue (propio, VM, contenedor, nube), seguridad/rendimiento/escalabilidad/mantenimiento, experiencia del equipo y licencia del software. La tarjeta de sonido no tiene ninguna relaciÃ³n.",
    distractors: {
      A: "Figura en la lista de la pÃ¡gina 13.",
      B: "Figura en la lista de la pÃ¡gina 13.",
      C: "Figura en la lista de la pÃ¡gina 13."
    },
    trapNote: "Pregunta de exclusiÃ³n tÃ­pica sobre los 12-13 aspectos de selecciÃ³n de arquitectura de la pÃ¡gina 13."
  },
  {
    id: 64,
    level: "basico",
    topic: 3,
    topicName: "Protocolo HTTP y el Servidor Web",
    page: "PÃ¡g. 14",
    question: "En la secciÃ³n 2.2 'IntegraciÃ³n con el Servidor Web', Â¿cÃ³mo se describe el papel del protocolo HTTP y la funciÃ³n del servidor web?",
    options: [
      { id: "A", text: "HTTP es un lenguaje de programaciÃ³n compilado; el servidor web solo almacena contraseÃ±as en texto plano.", isCorrect: false },
      { id: "B", text: "La comunicaciÃ³n entre cliente y servidor se realiza mediante HTTP, que actÃºa como vÃ­nculo; cada acciÃ³n (como enviar un formulario) se transmite como peticiÃ³n HTTP y la respuesta llega como respuesta HTTP. El servidor web recibe las peticiones, decide cÃ³mo procesarlas y delega en otros componentes si es necesario.", isCorrect: true },
      { id: "C", text: "HTTP se utiliza exclusivamente para transferir ficheros comprimidos por FTP.", isCorrect: false },
      { id: "D", text: "El servidor web es un mÃ³dulo que solo puede ejecutarse en el navegador del cliente.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 14: 'La comunicaciÃ³n entre un cliente web (navegador) y un servidor web se realiza mediante el protocolo HTTP, que actÃºa como vÃ­nculo entre el usuario y la aplicaciÃ³n web. Cada acciÃ³n que realiza el usuario â€”como enviar un formularioâ€” se transmite como una peticiÃ³n HTTP, y la respuesta del servidor llega de vuelta como una respuesta HTTP. En el lado del servidor, estas peticiones son recibidas y gestionadas por el servidor web (o servidor HTTP), que decide cÃ³mo procesarlas y, si es necesario, delegar en otros componentes...'.",
    distractors: {
      A: "HTTP es un protocolo de red de la capa de aplicaciÃ³n, no un lenguaje.",
      C: "HTTP y FTP son protocolos distintos.",
      D: "El servidor web reside y se ejecuta en el servidor."
    },
    trapNote: "HTTP = vÃ­nculo cliente-servidor (peticiÃ³n HTTP <-> respuesta HTTP). Servidor web = gestor que recibe y delega en componentes ejecutores."
  },
  {
    id: 65,
    level: "medio",
    topic: 3,
    topicName: "IntegraciÃ³n de PHP en el Servidor",
    page: "PÃ¡g. 14",
    question: "Respecto a la integraciÃ³n de PHP con el servidor web, Â¿quÃ© opciones cita el documento como las mÃ¡s habituales y eficientes en entornos tipo AMP?",
    options: [
      { id: "A", text: "Ejecutarlo Ãºnicamente como script CGI tradicional generando un nuevo proceso por cada peticiÃ³n.", isCorrect: false },
      { id: "B", text: "Aunque podrÃ­a ejecutarse como CGI, lo mÃ¡s habitual en entornos AMP es usar el mÃ³dulo mod_php (o en versiones modernas, PHP-FPM con FastCGI), que es mÃ¡s eficiente.", isCorrect: true },
      { id: "C", text: "Compilarlo obligatoriamente a applets de Java dentro de Microsoft IIS.", isCorrect: false },
      { id: "D", text: "Ejecutarlo dentro de la mÃ¡quina virtual de NetBeans sin servidor web.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 14: 'Con PHP ocurre algo similar: aunque podrÃ­a ejecutarse como CGI, lo mÃ¡s habitual en entornos tipo AMP es usar el mÃ³dulo mod_php (o en versiones modernas, PHP-FPM con FastCGI), que es mÃ¡s eficiente'.",
    distractors: {
      A: "CGI se evita en entornos de producciÃ³n por su sobrecarga.",
      C: "PHP no genera applets de Java.",
      D: "NetBeans es un IDE, no un entorno de ejecuciÃ³n de servidor."
    },
    trapNote: "Entornos AMP clÃ¡sicos: mÃ³dulo mod_php. Versiones modernas de alto rendimiento: PHP-FPM con FastCGI."
  },
  {
    id: 66,
    level: "avanzado",
    topic: 3,
    topicName: "IntegraciÃ³n de Python: mod_python y WSGI",
    page: "PÃ¡g. 14",
    question: "En relaciÃ³n con la integraciÃ³n de aplicaciones escritas en Python en el servidor web, Â¿cuÃ¡l es el estÃ¡ndar actual segÃºn el documento tras haber quedado descontinuado mod_python?",
    options: [
      { id: "A", text: "FastPHP integrado en el kernel de Windows.", isCorrect: false },
      { id: "B", text: "WSGI (Web Server Gateway Interface), un estÃ¡ndar que define cÃ³mo debe comunicarse un servidor web con una aplicaciÃ³n Python, normalmente a travÃ©s de un servidor de aplicaciones situado detrÃ¡s de un servidor web (Apache o Nginx) que actÃºa como proxy inverso.", isCorrect: true },
      { id: "C", text: "Enterprise PythonBeans (EPB).", isCorrect: false },
      { id: "D", text: "CompilaciÃ³n obligatoria a cÃ³digo mÃ¡quina en tiempo de arranque con GCC.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 14: 'Para Python existÃ­a un enfoque parecido llamado mod_python, aunque el proyecto estÃ¡ descontinuado desde hace aÃ±os; hoy se usa WSGI (Web Server Gateway Interface), un estÃ¡ndar que define cÃ³mo debe comunicarse un servidor web con una aplicaciÃ³n Python, normalmente a travÃ©s de un servidor de aplicaciones situado detrÃ¡s de un servidor web (Apache o Nginx) que actÃºa como proxy inverso'.",
    distractors: {
      A: "FastPHP no existe.",
      C: "EPB es un nombre inventado distractor de EJB.",
      D: "Python se ejecuta en su propio runtime interpretado, no se compila a cÃ³digo mÃ¡quina con GCC."
    },
    trapNote: "TÃ©rminos clave: WSGI + proxy inverso (Apache/Nginx) + servidor de aplicaciones. Recuerda que mod_python estÃ¡ descontinuado hace aÃ±os."
  },

  // ==========================================================================
  // BLOQUE 4: MODELOS DE EJECUCIÃ“N DE LENGUAJES DE SERVIDOR (PÃ¡g. 15-16)
  // ==========================================================================
  {
    id: 67,
    level: "medio",
    topic: 4,
    topicName: "Los Tres Tipos de Lenguajes de Servidor",
    page: "PÃ¡g. 15",
    question: "Los lenguajes de programaciÃ³n web se diferencian, entre otras cosas, por cÃ³mo se ejecutan en el servidor. Â¿CuÃ¡les son los tres tipos en que los clasifica el temario?",
    options: [
      { id: "A", text: "1. Lenguajes de cliente, 2. Lenguajes de estilo, 3. Lenguajes de marcado.", isCorrect: false },
      { id: "B", text: "1. Lenguajes de guiones o scripting, 2. Lenguajes compilados a cÃ³digo mÃ¡quina, 3. Lenguajes compilados a cÃ³digo intermedio.", isCorrect: true },
      { id: "C", text: "1. Lenguajes orientados a objetos, 2. Lenguajes funcionales, 3. Lenguajes lÃ³gicos.", isCorrect: false },
      { id: "D", text: "1. Lenguajes comerciales, 2. Lenguajes educativos, 3. Lenguajes obsoletos.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 15: 'Los lenguajes de programaciÃ³n web se diferencian, entre otras cosas, por cÃ³mo se ejecutan en el servidor. Hay tres tipos: Lenguajes de guiones o scripting... Lenguajes compilados a cÃ³digo mÃ¡quina... Lenguajes compilados a cÃ³digo intermedio'.",
    distractors: {
      A: "HTML y CSS son de marcado y estilo, no lenguajes de ejecuciÃ³n en servidor.",
      C: "ClasificaciÃ³n por paradigmas de programaciÃ³n, no por modelo de ejecuciÃ³n en servidor.",
      D: "ClasificaciÃ³n no tÃ©cnica."
    },
    trapNote: "TrÃ­ada de modelos de ejecuciÃ³n en servidor: Scripting / CÃ³digo mÃ¡quina / CÃ³digo intermedio."
  },
  {
    id: 68,
    level: "medio",
    topic: 4,
    topicName: "Lenguajes de Scripting: Ventajas y Desventajas",
    page: "PÃ¡g. 15",
    question: "Â¿CÃ³mo se ejecutan los lenguajes de guiones o scripting (PHP, Python, Perl, ASP clÃ¡sico) y cuÃ¡l es su principal ventaja e inconveniente?",
    options: [
      { id: "A", text: "Se compilan directamente a binario de mÃ¡quina; ventaja: velocidad extrema; inconveniente: poca portabilidad.", isCorrect: false },
      { id: "B", text: "Se ejecutan directamente desde su cÃ³digo fuente a travÃ©s de un intÃ©rprete (archivos de texto plano); ventaja: portabilidad y ver cambios de inmediato; inconveniente: menor rendimiento, ya que cada peticiÃ³n se interpreta de nuevo.", isCorrect: true },
      { id: "C", text: "Se ejecutan en una mÃ¡quina virtual con compilaciÃ³n JIT obligatoria; ventaja: balance intermedio.", isCorrect: false },
      { id: "D", text: "Requieren obligatoriamente la creaciÃ³n de un nuevo proceso CGI en cada lÃ­nea de cÃ³digo.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 15: 'Lenguajes de guiones o scripting: estos lenguajes se ejecutan directamente desde su cÃ³digo fuente a travÃ©s de un intÃ©rprete, que procesa las instrucciones y genera la pÃ¡gina web. Normalmente se almacenan en archivos de texto plano. Ejemplos tÃ­picos son PHP, Python, Perl y ASP clÃ¡sico. Su principal ventaja es la portabilidad y la posibilidad de modificar el cÃ³digo y ver los cambios de inmediato, pero su rendimiento suele ser inferior al de los lenguajes compilados, ya que cada peticiÃ³n se interpreta de nuevo'.",
    distractors: {
      A: "Ese es el modelo compilado a cÃ³digo mÃ¡quina (C).",
      C: "Ese es el modelo de cÃ³digo intermedio (Java/.NET).",
      D: "Con mÃ³dulos como mod_php o FastCGI no crean procesos CGI por lÃ­nea."
    },
    trapNote: "Ventaja de scripting: Portabilidad e inmediatez (modificar y ver al instante sin compilar). Inconveniente: Menor rendimiento por reinterpretaciÃ³n."
  },
  {
    id: 69,
    level: "avanzado",
    topic: 4,
    topicName: "Lenguajes Compilados a CÃ³digo MÃ¡quina (C)",
    page: "PÃ¡g. 15",
    question: "En el desarrollo web, Â¿cuÃ¡les son los dos inconvenientes especÃ­ficos de utilizar lenguajes compilados a cÃ³digo mÃ¡quina (como C)?",
    options: [
      { id: "A", text: "No disponen de tipos de datos enteros y no permiten escribir archivos en el disco.", isCorrect: false },
      { id: "B", text: "Poca portabilidad (un binario compilado para una plataforma concreta no funciona en otra sin recompilar) y poca integraciÃ³n con el servidor web (normalmente cada peticiÃ³n genera un nuevo proceso vÃ­a CGI, aumentando el consumo de recursos).", isCorrect: true },
      { id: "C", text: "Consumen menos memoria RAM que los scripts y no pueden enviar cabeceras HTTP.", isCorrect: false },
      { id: "D", text: "No pueden ser leÃ­dos por los programadores una vez guardados en texto plano.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 15: 'Son muy rÃ¡pidos, pero tienen dos inconvenientes: por un lado, poca portabilidad, ya que un binario compilado para una plataforma concreta no funciona en otra sin recompilar; por otro, poca integraciÃ³n con el servidor web, ya que normalmente cada peticiÃ³n genera un nuevo proceso (tÃ­picamente vÃ­a CGI), lo que aumenta el consumo de recursos'.",
    distractors: {
      A: "C tiene enteros nativos y maneja ficheros con fopen/fwrite.",
      C: "Son muy rÃ¡pidos, pero la afirmaciÃ³n mezcla conceptos errÃ³neos.",
      D: "El cÃ³digo fuente en C es texto plano perfectamente legible antes de compilar."
    },
    trapNote: "Memoriza los 2 problemas de C en web: 1) Poca portabilidad (recompilar para cada SO/arquitectura), 2) Poca integraciÃ³n web (nuevo proceso por peticiÃ³n vÃ­a CGI)."
  },
  {
    id: 70,
    level: "avanzado",
    topic: 4,
    topicName: "CÃ³digo Intermedio y CompilaciÃ³n JIT",
    page: "PÃ¡g. 15",
    question: "Â¿CÃ³mo funcionan los lenguajes compilados a cÃ³digo intermedio (Java, ASP.NET) y quÃ© es la compilaciÃ³n JIT (Just-In-Time)?",
    options: [
      { id: "A", text: "Se traducen directamente a cÃ³digo mÃ¡quina en el navegador cliente mediante WebAssembly.", isCorrect: false },
      { id: "B", text: "El cÃ³digo fuente se convierte a un cÃ³digo intermedio independiente del procesador, ejecutado en una mÃ¡quina virtual que puede ademÃ¡s compilar en caliente (JIT, Just-In-Time) las partes mÃ¡s usadas del cÃ³digo a cÃ³digo mÃ¡quina para mejorar el rendimiento.", isCorrect: true },
      { id: "C", text: "El cÃ³digo se envÃ­a por correo al administrador del servidor para que lo apruebe antes de cada peticiÃ³n.", isCorrect: false },
      { id: "D", text: "Son lenguajes que se interpretan lÃ­nea por lÃ­nea sin generar ningÃºn archivo binario intermedio.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 15: 'aquÃ­, el cÃ³digo fuente se convierte a un cÃ³digo intermedio independiente del procesador, que luego se ejecuta en una mÃ¡quina virtual, la cual puede ademÃ¡s compilar en caliente (JIT, Just-In-Time) las partes mÃ¡s usadas del cÃ³digo a cÃ³digo mÃ¡quina para mejorar el rendimiento. Esto ocurre, por ejemplo, en aplicaciones Java (servlets, JSP, Jakarta EE) y ASP.NET'.",
    distractors: {
      A: "La compilaciÃ³n y ejecuciÃ³n suceden en el servidor, no en el cliente.",
      C: "Distractor absurdo.",
      D: "Ese es el funcionamiento de los lenguajes de scripting puro."
    },
    trapNote: "Concepto clave: Bytecode/cÃ³digo intermedio independiente de CPU + MÃ¡quina Virtual + JIT (compilaciÃ³n en caliente de fragmentos mÃ¡s usados)."
  },
  {
    id: 71,
    level: "medio",
    topic: 4,
    topicName: "Resumen Comparativo de los Modelos de EjecuciÃ³n",
    page: "PÃ¡g. 15",
    question: "En el resumen comparativo de la pÃ¡gina 15, Â¿cuÃ¡l es la fortaleza distintiva de cada modelo y cuÃ¡l es el ideal para aplicaciones web de mayor tamaÃ±o y complejidad?",
    options: [
      { id: "A", text: "Scripting destaca por velocidad; MÃ¡quina por portabilidad; CÃ³digo intermedio es solo para pruebas.", isCorrect: false },
      { id: "B", text: "Los lenguajes scripting destacan por su simplicidad y portabilidad; los compilados a mÃ¡quina por su velocidad; y los compilados a cÃ³digo intermedio combinan rendimiento con compatibilidad entre distintas plataformas, siendo ideales para aplicaciones de mayor tamaÃ±o y complejidad.", isCorrect: true },
      { id: "C", text: "Los tres modelos son completamente idÃ©nticos en rendimiento y consumo de memoria.", isCorrect: false },
      { id: "D", text: "El Ãºnico modelo aceptado internacionalmente para cualquier web es el cÃ³digo mÃ¡quina en C puro.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 15 (resumen literal): 'En resumen, los lenguajes scripting destacan por su simplicidad y portabilidad, los compilados a mÃ¡quina por su velocidad, y los compilados a cÃ³digo intermedio combinan rendimiento con compatibilidad entre distintas plataformas, siendo ideales para aplicaciones web de mayor tamaÃ±o y complejidad'.",
    distractors: {
      A: "EstÃ¡ totalmente invertido.",
      C: "Existen marcadas diferencias tÃ©cnicas entre interpretar, compilar a binario nativo y compilar a bytecode.",
      D: "C no es el Ãºnico modelo ni el mÃ¡s comÃºn en desarrollo web actual."
    },
    trapNote: "Frase de sÃ­ntesis del tema: Scripting = simplicidad/portabilidad; MÃ¡quina = velocidad; CÃ³digo intermedio = rendimiento + compatibilidad (ideal para grandes y complejas)."
  },
  {
    id: 72,
    level: "medio",
    topic: 4,
    topicName: "CÃ³digo Embebido en Lenguaje de Marcas",
    page: "PÃ¡g. 15-16",
    question: "Â¿En quÃ© consiste la tÃ©cnica de 'cÃ³digo embebido en el lenguaje de marcas' y quÃ© tres tecnologÃ­as representativas la emplean segÃºn el documento?",
    options: [
      { id: "A", text: "Compilar el navegador dentro de un archivo de base de datos; tecnologÃ­as: MySQL, Oracle y MongoDB.", isCorrect: false },
      { id: "B", text: "Integrar el cÃ³digo del programa en medio de las etiquetas HTML: el contenido que no varÃ­a se introduce directamente en HTML y el lenguaje de programaciÃ³n se usa para lo dinÃ¡mico; se emplea en ASP, PHP y pÃ¡ginas JSP de Jakarta EE.", isCorrect: true },
      { id: "C", text: "Ocultar scripts binarios de C dentro de las cabeceras TCP/IP.", isCorrect: false },
      { id: "D", text: "Escribir hojas de estilo CSS dentro de los comentarios de la BIOS.", isCorrect: false }
    ],
    explanation: "PÃ¡ginas 15-16: 'Una de las principales formas de realizar pÃ¡ginas web dinÃ¡micas es integrar el cÃ³digo del programa en medio de las etiquetas HTML de la pÃ¡gina web. De esta forma, el contenido que no varÃ­a de la pÃ¡gina se puede introducir directamente en HTML, y el lenguaje de programaciÃ³n se utilizarÃ¡ para todo aquello que pueda variar de forma dinÃ¡mica. Esta metodologÃ­a de programaciÃ³n es la que se emplea en los lenguajes ASP, PHP y en pÃ¡ginas JSP de Jakarta EE'.",
    distractors: {
      A: "El navegador no se compila en una BD.",
      C: "C no se embebe en HTML.",
      D: "CSS no tiene relaciÃ³n con la BIOS."
    },
    trapNote: "TrÃ­ada clÃ¡sica de cÃ³digo embebido en HTML citada en el tema: ASP, PHP y JSP."
  },
  {
    id: 73,
    level: "medio",
    topic: 4,
    topicName: "Ejemplo de CÃ³digo Embebido en el PDF",
    page: "PÃ¡g. 16",
    question: "En el ejemplo de cÃ³digo de la pÃ¡gina 16, Â¿quÃ© instrucciÃ³n PHP y quÃ© variable superglobal se utilizan dentro del bloque de cÃ³digo embebido para mostrar informaciÃ³n?",
    options: [
      { id: "A", text: "printf($_POST['USER_NAME']); para mostrar el nombre del cliente conectado.", isCorrect: false },
      { id: "B", text: "echo $_SERVER['SERVER_NAME']; dentro de una etiqueta <p> para mostrar el nombre del servidor desde el que se sirve el sitio.", isCorrect: true },
      { id: "C", text: "system('shutdown'); para apagar Apache al cargar la pÃ¡gina.", isCorrect: false },
      { id: "D", text: "var_dump($_ENV['PATH']); para listar las variables del sistema operativo.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 16 (cÃ³digo textual): dentro de <p>Este sitio estÃ¡ siendo servido desde: <?php // Mostramos el nombre del servidor echo $_SERVER['SERVER_NAME']; ?></p>. Se utiliza la variable superglobal $_SERVER con la clave 'SERVER_NAME'.",
    distractors: {
      A: "El cÃ³digo no utiliza $_POST ni printf.",
      C: "No se apaga el servidor en el ejemplo.",
      D: "No se usa var_dump de variables de entorno."
    },
    trapNote: "Detalle del snippet de la pÃ¡gina 16: echo $_SERVER['SERVER_NAME'] comentando '// Mostramos el nombre del servidor'."
  },

  // ==========================================================================
  // BLOQUE 5: ENTORNO, HERRAMIENTAS, PHP Y XAMPP (PÃ¡g. 16-20)
  // ==========================================================================
  {
    id: 74,
    level: "medio",
    topic: 5,
    topicName: "IDEs de CÃ³digo Abierto: Eclipse y NetBeans",
    page: "PÃ¡g. 16",
    question: "Respecto a Eclipse y NetBeans, Â¿en quÃ© lenguaje se centraron en sus orÃ­genes, quÃ© lenguajes admiten hoy y quÃ© versiones ofrecen para su descarga?",
    options: [
      { id: "A", text: "Se centraron en C#; hoy solo admiten HTML y no permiten instalar mÃ³dulos.", isCorrect: false },
      { id: "B", text: "En sus orÃ­genes se centraron en Java; hoy admiten (directamente o por mÃ³dulos) C, C++, PHP, Python y Ruby; y ofrecen versiones personalizadas del IDE listas para programar en un lenguaje sin configurar ni instalar mÃ³dulos.", isCorrect: true },
      { id: "C", text: "Se crearon exclusivamente para programar en PHP 8.x en sistemas macOS.", isCorrect: false },
      { id: "D", text: "Ambos fueron adquiridos por Microsoft y convertidos en extensiones de pago de VSCode.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 16: 'Dos de los IDE de cÃ³digo abierto mÃ¡s utilizados en la actualidad son Eclipse y NetBeans. Ambos permiten el desarrollo de aplicaciones informÃ¡ticas en varios lenguajes de programaciÃ³n. Aunque en sus orÃ­genes se centraron en la programaciÃ³n en lenguaje Java, hoy en dÃ­a admiten directamente o a travÃ©s de mÃ³dulos, varios lenguajes entre los que se incluyen C, C++, PHP, Python y Ruby. Ambos ofrecen para la descarga versiones personalizadas del IDE, que pueden ser usadas directamente para programar en un lenguaje determinado, sin necesidad de cambiar la configuraciÃ³n o instalar mÃ³dulos'.",
    distractors: {
      A: "NetBeans y Eclipse no nacieron para C# (.NET).",
      C: "Nacieron en el entorno Java.",
      D: "Son proyectos de cÃ³digo abierto independientes de Microsoft."
    },
    trapNote: "Detalle del texto: versiones personalizadas listas para programar en C, C++, PHP, Python o Ruby sin tener que instalar mÃ³dulos."
  },
  {
    id: 75,
    level: "medio",
    topic: 5,
    topicName: "ElecciÃ³n del IDE para el Curso",
    page: "PÃ¡g. 16",
    question: "Â¿QuÃ© entorno de desarrollo se emplearÃ¡ a lo largo del curso y cuÃ¡l es la valoraciÃ³n que hace el temario sobre PhpStorm y Eclipse?",
    options: [
      { id: "A", text: "Se emplearÃ¡ Eclipse porque es muy ligero; PhpStorm es gratuito y VSCode es de pago.", isCorrect: false },
      { id: "B", text: "Se emplearÃ¡ Visual Studio Code (editor que se complementa mediante extensiones); siendo PhpStorm la alternativa mÃ¡s conocida pero de pago; y Eclipse otra posibilidad, aunque es un entorno bastante pesado.", isCorrect: true },
      { id: "C", text: "Se emplearÃ¡ el Bloc de Notas de Windows sin extensiones ni resaltado de sintaxis.", isCorrect: false },
      { id: "D", text: "Se emplearÃ¡ phpMyAdmin como editor principal de cÃ³digo fuente.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 16: 'En este curso vamos a emplear Visual Studio Code (https://code.visualstudio.com) como entorno de desarrollo (IDE). Existen otras alternativas, siendo PhpStorm la mÃ¡s conocida pero de pago. Otra posibilidad es utilizar Eclipse, aunque es un entorno bastante pesado. VSCode es un editor de cÃ³digo fuente que se complementa mediante extensiones'.",
    distractors: {
      A: "Eclipse es calificado como pesado y PhpStorm es de pago.",
      C: "El curso prescribe el uso formal de VSCode.",
      D: "phpMyAdmin es para bases de datos MySQL, no un editor de cÃ³digo PHP."
    },
    trapNote: "Frase textual del temario: 'PhpStorm es de pago' y 'Eclipse es un entorno bastante pesado'. VSCode = editor complementado con extensiones."
  },
  {
    id: 76,
    level: "medio",
    topic: 5,
    topicName: "ExtensiÃ³n PHP Intelephense",
    page: "PÃ¡g. 17",
    question: "En Visual Studio Code, Â¿cuÃ¡les son las capacidades que aporta la extensiÃ³n 'PHP Intelephense' detalladas en la pÃ¡gina 17?",
    options: [
      { id: "A", text: "Reiniciar el router automÃ¡ticamente cuando detecta un error de sintaxis en CSS.", isCorrect: false },
      { id: "B", text: "Autocompletado inteligente, informaciÃ³n contextual (documentaciÃ³n oficial o PHP_Doc al pasar el cursor), formato de cÃ³digo (estilos como PSR-12), diagnÃ³stico de errores en tiempo real, soporte para HTML/JS/CSS embebido y salto rÃ¡pido a definiciones y usos de funciones, clases y mÃ©todos.", isCorrect: true },
      { id: "C", text: "Compilar cÃ³digo PHP a archivos binarios de extensiÃ³n .dll para Windows.", isCorrect: false },
      { id: "D", text: "Sustituir al servidor Apache para ejecutar bases de datos MariaDB en la GPU.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 17: 'PHP Intelephense: autocompletado inteligente (sugiere funciones, clases, mÃ©todos y variables mientras escribes), informaciÃ³n contextual (al pasar el cursor sobre una funciÃ³n o clase, muestra documentaciÃ³n oficial o comentarios de PHP_Doc), formato de cÃ³digo (aplica estilos como PSR-12 para mantener tu cÃ³digo limpio y consistente), diagnÃ³stico de errores en tiempo real, soporte para HTML/JS/CSS embebido y tambiÃ©n permite saltar rÃ¡pidamente a la definiciÃ³n de una funciÃ³n, clase o mÃ©todo y ver dÃ³nde se usa en todo el proyecto'.",
    distractors: {
      A: "Intelephense no interactÃºa con routers.",
      C: "PHP es interpretado; Intelephense es un Language Server, no un compilador de DLLs.",
      D: "No tiene funciones de servidor web ni de base de datos."
    },
    trapNote: "Recuerda las palabras clave asociadas a PHP Intelephense: autocompletado, hover contextual (PHP_Doc), formateo PSR-12, errores en tiempo real y salto a definiciones."
  },
  {
    id: 77,
    level: "basico",
    topic: 5,
    topicName: "ExtensiÃ³n PHP Code Sniffer",
    page: "PÃ¡g. 17",
    question: "Â¿CuÃ¡l es la funciÃ³n especÃ­fica de la extensiÃ³n 'PHP Code Sniffer' recomendada para VSCode en el documento?",
    options: [
      { id: "A", text: "Detectar errores de estilo y estructura en tu cÃ³digo.", isCorrect: true },
      { id: "B", text: "Descargar automÃ¡ticamente paquetes desde GitHub sin permiso.", isCorrect: false },
      { id: "C", text: "Ejecutar la base de datos MySQL en segundo plano.", isCorrect: false },
      { id: "D", text: "Renderizar animaciones en 3D en el panel lateral de VSCode.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 17 literal: 'PHP Code Sniffer: detecta errores de estilo y estructura en tu cÃ³digo'.",
    distractors: {
      B: "No gestiona descargas no autorizadas de GitHub.",
      C: "MySQL se ejecuta como servicio desde el panel de XAMPP.",
      D: "No renderiza grÃ¡ficos 3D."
    },
    trapNote: "No confundir: PHP Intelephense (autocompletado/formato PSR-12/errores) vs PHP Code Sniffer (detecta errores de estilo y estructura)."
  },
  {
    id: 78,
    level: "avanzado",
    topic: 5,
    topicName: "ConfiguraciÃ³n de Code Runner",
    page: "PÃ¡g. 17",
    question: "SegÃºn el documento, Â¿cÃ³mo se debe configurar la extensiÃ³n 'Code Runner' en VSCode para el curso?",
    options: [
      { id: "A", text: "Para compilar el cÃ³digo PHP a archivos ejecutables .exe antes de guardarlo.", isCorrect: false },
      { id: "B", text: "Hay que configurarlo para que ejecute el cÃ³digo en la terminal integrada y funcione con PHP puro, sin frameworks.", isCorrect: true },
      { id: "C", text: "Para subir automÃ¡ticamente los archivos a un repositorio remoto de GitHub en cada guardado.", isCorrect: false },
      { id: "D", text: "Para sustituir al archivo php.ini eliminando la directiva max_execution_time.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 17 literal: 'Code Runner: hay que configurarlo para que ejecute el cÃ³digo en la terminal integrada y funcione con PHP puro, sin frameworks'.",
    distractors: {
      A: "PHP no se compila a .exe con Code Runner.",
      C: "Code Runner no es un cliente de Git.",
      D: "Code Runner no modifica directivas de php.ini."
    },
    trapNote: "Detalle textual: 'ejecute el cÃ³digo en la terminal integrada y funcione con PHP puro, sin frameworks'."
  },
  {
    id: 79,
    level: "basico",
    topic: 5,
    topicName: "ExtensiÃ³n Laravel Snippets",
    page: "PÃ¡g. 17",
    question: "Â¿QuÃ© cuarta extensiÃ³n para VSCode se incluye en la lista oficial de herramientas para facilitar el trabajo a lo largo del curso?",
    options: [
      { id: "A", text: "Django Snippets.", isCorrect: false },
      { id: "B", text: "Laravel Snippets.", isCorrect: true },
      { id: "C", text: "Spring Boot Tools.", isCorrect: false },
      { id: "D", text: "React Developer Tools.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 17 (cuarta viÃ±eta de extensiones): 'Laravel Snippets'. Proporciona atajos y fragmentos de cÃ³digo para el popular framework PHP Laravel.",
    distractors: {
      A: "Django es de Python.",
      C: "Spring Boot es de Java.",
      D: "React es de JavaScript."
    },
    trapNote: "Las 4 extensiones de la pÃ¡gina 17 son: 1. PHP Intelephense, 2. PHP Code Sniffer, 3. Code Runner, 4. Laravel Snippets."
  },
  {
    id: 80,
    level: "medio",
    topic: 5,
    topicName: "DefiniciÃ³n y Sintaxis de PHP",
    page: "PÃ¡g. 17",
    question: "Â¿CÃ³mo define el temario al lenguaje PHP, en quÃ© lenguaje se basa su sintaxis y cuÃ¡l es la versiÃ³n recomendada actualmente?",
    options: [
      { id: "A", text: "Lenguaje compilado a mÃ¡quina basado en Python; versiÃ³n recomendada PHP 5.4.", isCorrect: false },
      { id: "B", text: "Lenguaje interpretado de propÃ³sito general diseÃ±ado para desarrollo de pÃ¡ginas web dinÃ¡micas mediante cÃ³digo embebido en HTML; sintaxis basada en C/C++ (muy similar a Java); versiÃ³n recomendada PHP 8.x (siempre superior a la 7.0).", isCorrect: true },
      { id: "C", text: "Lenguaje exclusivo para hojas de cÃ¡lculo basado en Visual Basic; versiÃ³n recomendada PHP 1.0.", isCorrect: false },
      { id: "D", text: "Lenguaje de base de datos no relacional basado en SQL Server; versiÃ³n recomendada PHP 9.9.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 17: 'PHP es un lenguaje interpretado de propÃ³sito general diseÃ±ado para el desarrollo de pÃ¡ginas web dinÃ¡micas mediante la inserciÃ³n de cÃ³digo embebido dentro del lenguaje de marcas HTML. Su sintaxis estÃ¡ basada en la de C/C++, y por lo tanto es muy similar a la de Java... Actualmente la versiÃ³n recomendada es PHP 8.x (siempre superior a la 7.0)'.",
    distractors: {
      A: "PHP no es compilado a mÃ¡quina ni se basa en Python; la versiÃ³n 5.4 estÃ¡ totalmente obsoleta.",
      C: "PHP no es para hojas de cÃ¡lculo ni deriva de Visual Basic.",
      D: "PHP no es un dialecto SQL."
    },
    trapNote: "Frase literal del texto: 'PHP 8.x (siempre superior a la 7.0)' y sintaxis 'basada en C/C++, muy similar a Java'."
  },
  {
    id: 81,
    level: "avanzado",
    topic: 5,
    topicName: "Frameworks de PHP Citados en el Tema",
    page: "PÃ¡g. 17",
    question: "Â¿CuÃ¡les son los cuatro frameworks de PHP citados expresamente entre parÃ©ntesis en la pÃ¡gina 17 del temario?",
    options: [
      { id: "A", text: "Django, Flask, FastAPI y Tornado.", isCorrect: false },
      { id: "B", text: "Laravel, Symfony, Codeigniter y Zend.", isCorrect: true },
      { id: "C", text: "Express.js, NestJS, Koa y Fastify.", isCorrect: false },
      { id: "D", text: "Spring, Struts, Hibernate y JSF.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 17 literal: 'PHP dispone de una multitud de librerÃ­as y frameworks (Laravel, Symfony, Codeigniter, Zend)'.",
    distractors: {
      A: "Son frameworks de Python.",
      C: "Son frameworks de Node.js (JavaScript).",
      D: "Son frameworks y librerÃ­as de Java."
    },
    trapNote: "Aprende el cuarteto exacto de frameworks PHP citado en el documento: Laravel, Symfony, Codeigniter, Zend."
  },
  {
    id: 82,
    level: "medio",
    topic: 5,
    topicName: "Delimitadores de PHP y Regla de Archivos Puros",
    page: "PÃ¡g. 17",
    question: "Â¿CuÃ¡les son los delimitadores recomendados para incluir cÃ³digo PHP y quÃ© regla especial se aplica a archivos que contienen EXCLUSIVAMENTE cÃ³digo PHP?",
    options: [
      { id: "A", text: "Se recomienda usar <% y %>; y en archivos sÃ³lo PHP es obligatorio cerrar con %>.", isCorrect: false },
      { id: "B", text: "Los delimitadores recomendados son <?php y ?>; y en archivos de sÃ³lo PHP puros NO se incluye el delimitador de cierre (?>).", isCorrect: true },
      { id: "C", text: "Se recomienda usar siempre <script language='php'> y es obligatorio incluir siempre la etiqueta de cierre.", isCorrect: false },
      { id: "D", text: "No se usa ningÃºn delimitador; basta con guardar el archivo con extensiÃ³n .php.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 17: 'los delimitadores recomendados para incluir cÃ³digo PHP dentro de una pÃ¡gina web son <?php y ?>. En archivos sÃ³lo PHP puros no se incluye el delimitador de cierre'.",
    distractors: {
      A: "<% y %> son etiquetas estilo ASP, no recomendadas ni admitidas por defecto.",
      C: "La etiqueta <script language='php'> estÃ¡ obsoleta y eliminada.",
      D: "Sin delimitadores <?php el intÃ©rprete no reconoce los bloques de cÃ³digo PHP dentro del archivo."
    },
    trapNote: "Â¡Regla de oro de examen! En archivos que son 100% PHP puro, la etiqueta de cierre '?>' se OMITE para evitar envÃ­os accidentales de espacios en blanco antes de cabeceras HTTP."
  },
  {
    id: 83,
    level: "medio",
    topic: 5,
    topicName: "Ficheros de ConfiguraciÃ³n: Apache y PHP",
    page: "PÃ¡g. 17",
    question: "Â¿CuÃ¡les son los ficheros de configuraciÃ³n de Apache y de PHP respectivamente, y quÃ© funciÃ³n nos informa del lugar exacto en que estÃ¡ almacenado el fichero de PHP?",
    options: [
      { id: "A", text: "apache.cfg y php.conf; la funciÃ³n get_php_path().", isCorrect: false },
      { id: "B", text: "El de Apache es httpd.conf y el de PHP es php.ini; la funciÃ³n phpinfo().", isCorrect: true },
      { id: "C", text: "server.xml y web.config; la funciÃ³n echo_config().", isCorrect: false },
      { id: "D", text: "nginx.conf y composer.json; la funciÃ³n var_dump().", isCorrect: false }
    ],
    explanation: "PÃ¡gina 17: 'La configuraciÃ³n tanto del servidor web Apache, como de PHP, se realiza por medio de ficheros de configuraciÃ³n. El de Apache es httpd.conf y el de PHP es php.ini. Este fichero, php.ini, puede encontrarse en distintas ubicaciones. La funciÃ³n phpinfo() que ejecutaste antes te informa, entre otras muchas cosas, del lugar en que se encuentra almacenado el fichero php.ini en tu ordenador'.",
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
    page: "PÃ¡g. 17",
    question: "Â¿QuÃ© indica la directiva 'short_open_tag' en php.ini, por quÃ© se aconseja asignarle el valor 'Off' y quÃ© problema concreto previene?",
    options: [
      { id: "A", text: "Indica si se pueden usar comentarios de una sola lÃ­nea; se pone en Off para permitir comentarios multilinea.", isCorrect: false },
      { id: "B", text: "Indica si se pueden utilizar en PHP los delimitadores cortos <? y ?>; es preferible no usarlos (asignar Off) porque puede causarnos problemas si utilizamos pÃ¡ginas con XML.", isCorrect: true },
      { id: "C", text: "Indica si el servidor Apache puede escuchar peticiones HTTP comprimidas en gzip.", isCorrect: false },
      { id: "D", text: "Indica si PHP puede conectarse a MariaDB sin contraseÃ±a.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 17: 'short_open_tag. Indica si se pueden utilizar en PHP los delimitadores cortos <? y ?>. Es preferible no usarlos, pues puede causarnos problemas si utilizamos pÃ¡ginas con XML. Para prohibir la utilizaciÃ³n de estos delimitadores con PHP le asignamos a esta directiva el valor Off'.",
    distractors: {
      A: "Los comentarios // o /* */ no dependen de esta directiva.",
      C: "La compresiÃ³n gzip la gestiona el servidor web.",
      D: "No tiene ninguna relaciÃ³n con bases de datos ni contraseÃ±as."
    },
    trapNote: "Â¿Por quÃ© da conflicto con XML? Porque el prÃ³logo estÃ¡ndar de XML empieza por '<?xml version=\"1.0\"...?>' y PHP interpretarÃ­a errÃ³neamente que comienza un bloque de script si short_open_tag estuviera en On."
  },
  {
    id: 85,
    level: "basico",
    topic: 5,
    topicName: "Ruta de php.ini en XAMPP",
    page: "PÃ¡g. 17",
    question: "En una instalaciÃ³n tÃ­pica de XAMPP en Windows, Â¿cuÃ¡l es la ruta por defecto donde se encuentra almacenado el fichero de configuraciÃ³n 'php.ini' citada en el temario?",
    options: [
      { id: "A", text: "C:\\Windows\\System32\\php.ini", isCorrect: false },
      { id: "B", text: "C:\\xampp\\php\\php.ini", isCorrect: true },
      { id: "C", text: "C:\\xampp\\htdocs\\php.ini", isCorrect: false },
      { id: "D", text: "C:\\Program Files\\Apache\\conf\\php.ini", isCorrect: false }
    ],
    explanation: "PÃ¡gina 17 literal: 'Si utilizamos xampp serÃ­a C:\\xampp\\php\\php.ini'.",
    distractors: {
      A: "Antiguamente algunas instalaciones manuales usaban C:\\Windows, pero XAMPP lo ubica en su propia carpeta php.",
      C: "htdocs es la raÃ­z web pÃºblica (DocumentRoot), nunca debe alojarse php.ini allÃ­.",
      D: "En XAMPP la ruta no es Program Files sino la raÃ­z C:\\xampp."
    },
    trapNote: "Ruta oficial de examen en XAMPP: C:\\xampp\\php\\php.ini."
  },
  {
    id: 86,
    level: "avanzado",
    topic: 5,
    topicName: "Directiva max_execution_time",
    page: "PÃ¡g. 18",
    question: "Â¿CuÃ¡l es el objetivo principal de la directiva 'max_execution_time' en el archivo php.ini y en quÃ© unidad se mide?",
    options: [
      { id: "A", text: "Establecer la hora en que se debe reiniciar automÃ¡ticamente el servidor web.", isCorrect: false },
      { id: "B", text: "Permite ajustar el nÃºmero mÃ¡ximo de segundos que podrÃ¡ durar la ejecuciÃ³n de un script PHP, evitando que el servidor se bloquee si se produce algÃºn error o bucle infinito.", isCorrect: true },
      { id: "C", text: "Limitar los milisegundos de latencia de red antes de cortar la conexiÃ³n de fibra.", isCorrect: false },
      { id: "D", text: "Contar cuÃ¡ntas semanas puede estar abierto el panel de control de XAMPP.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 18: 'max_execution_time. Permite que puedas ajustar el nÃºmero mÃ¡ximo de segundos que podrÃ¡ durar la ejecuciÃ³n de un script PHP. Evita que el servidor se bloquee si se produce algÃºn error en un script'.",
    distractors: {
      A: "No define horas de apagado del servidor.",
      C: "Se mide en segundos, no milisegundos de red.",
      D: "No controla la vida Ãºtil del panel de control de XAMPP."
    },
    trapNote: "Unidad de medida: segundos. FunciÃ³n: evitar bloqueos por scripts infinitos o con errores."
  },
  {
    id: 87,
    level: "avanzado",
    topic: 5,
    topicName: "Directiva error_reporting y Operador ~",
    page: "PÃ¡g. 18",
    question: "Si en el archivo php.ini configuras la directiva: 'error_reporting = E_ALL & ~E_NOTICE', Â¿cuÃ¡l serÃ¡ el comportamiento de PHP ante los errores?",
    options: [
      { id: "A", text: "OcultarÃ¡ todos los errores fatales y solo mostrarÃ¡ los avisos leves (notices).", isCorrect: false },
      { id: "B", text: "MostrarÃ¡ todos los tipos de errores (E_ALL), excepto los avisos (notices), que no se mostrarÃ¡n debido al operador virgulilla (~).", isCorrect: true },
      { id: "C", text: "DesactivarÃ¡ por completo cualquier mensaje en pantalla y enviarÃ¡ un correo al administrador.", isCorrect: false },
      { id: "D", text: "ProvocarÃ¡ un error de sintaxis en php.ini porque el carÃ¡cter virgulilla (~) estÃ¡ prohibido.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 18: 'error_reporting. Indica quÃ© tipo de errores se mostrarÃ¡n en el caso de que se produzcan. Por ejemplo, si haces error_reporting = E_ALL, te mostrarÃ¡ todos los tipos de errores. Si no quieres que te muestre los avisos pero sÃ­ otros tipos de errores, puedes hacer error_reporting = E_ALL & ~E_NOTICE'. La virgulilla (~) es el operador de negaciÃ³n bit a bit (NOT).",
    distractors: {
      A: "Al revÃ©s: E_ALL activa todos y ~E_NOTICE excluye los avisos.",
      C: "Para ocultar todo se usarÃ­a error_reporting = 0 o display_errors = Off.",
      D: "El operador bit a bit NOT (~) es la sintaxis oficial estÃ¡ndar de PHP en php.ini."
    },
    trapNote: "El operador & ~ significa 'TODO MENOS LO QUE SIGUE'. Por tanto: todos los errores excepto notices."
  },
  {
    id: 88,
    level: "medio",
    topic: 5,
    topicName: "Directivas de Subida: file_uploads y upload_max_filesize",
    page: "PÃ¡g. 18",
    question: "Â¿QuÃ© dos directivas de php.ini controlan, respectivamente, si se permite la subida de ficheros por HTTP y el lÃ­mite mÃ¡ximo de tamaÃ±o de cada archivo subido?",
    options: [
      { id: "A", text: "http_upload_enable y file_max_buffer.", isCorrect: false },
      { id: "B", text: "file_uploads (indica si se pueden o no subir ficheros por HTTP) y upload_max_filesize (lÃ­mite mÃ¡ximo permitido para cada archivo, ej. 1M).", isCorrect: true },
      { id: "C", text: "post_max_size y memory_limit.", isCorrect: false },
      { id: "D", text: "upload_allow y size_file_http.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 18: 'file_uploads. Indica si se pueden o no subir ficheros al servidor por HTTP' y 'upload_max_filesize. En caso de que se puedan subir ficheros por HTTP, puedes indicar el lÃ­mite mÃ¡ximo permitido para el tamaÃ±o de cada archivo. Por ejemplo, upload_max_filesize = 1M'.",
    distractors: {
      A: "Nombres inexistentes.",
      C: "Aunque post_max_size y memory_limit existen en PHP, las dos explicadas especÃ­ficamente en el temario para esta funciÃ³n son file_uploads y upload_max_filesize.",
      D: "Nombres inventados."
    },
    trapNote: "Aprende de memoria los nombres exactos: 'file_uploads' y 'upload_max_filesize'."
  },
  {
    id: 89,
    level: "basico",
    topic: 5,
    topicName: "Puesta en Marcha: XAMPP Control Panel y phpMyAdmin",
    page: "PÃ¡g. 18",
    question: "En la secciÃ³n 4 'Puesta en marcha', Â¿quÃ© pasos se indican para arrancar el servidor web y comprobar que la base de datos funciona correctamente?",
    options: [
      { id: "A", text: "Reiniciar el ordenador y desinstalar el navegador.", isCorrect: false },
      { id: "B", text: "Arrancar XAMPP e iniciar Apache en el panel de control pulsando 'Start'; y para comprobar la base de datos, ejecutar desde el navegador la aplicaciÃ³n phpMyAdmin que proporciona el paquete.", isCorrect: true },
      { id: "C", text: "Abrir la consola de Windows y escribir 'format C:'.", isCorrect: false },
      { id: "D", text: "Instalar Oracle WebLogic para verificar que MySQL responde por el puerto 8080.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 18: 'Para ello arrancamos XAMPP e iniciamos Apache en el panel de control (start)... Para comprobar que tambiÃ©n el servidor de la base de datos funciona correctamente, ejecutaremos desde el navegador la aplicaciÃ³n phpMyAdmin que nos proporciona el paquete y que permite la administraciÃ³n de la base de datos'.",
    distractors: {
      A: "No hace falta reiniciar ni desinstalar nada.",
      C: "Comando destructivo sin relaciÃ³n.",
      D: "WebLogic es un servidor comercial de Java, ajeno al flujo de XAMPP."
    },
    trapNote: "Acciones clave: Panel de XAMPP -> Start en Apache; ComprobaciÃ³n de BD -> ejecutar phpMyAdmin desde el navegador."
  },
  {
    id: 90,
    level: "medio",
    topic: 5,
    topicName: "DocumentRoot y Carpeta htdocs",
    page: "PÃ¡g. 18",
    question: "En una instalaciÃ³n de Apache con XAMPP, Â¿quÃ© es la carpeta 'htdocs' y cuÃ¡l es su funciÃ³n oficial segÃºn el temario?",
    options: [
      { id: "A", text: "Es la carpeta temporal donde se almacenan exclusivamente los archivos de registro (logs) de errores de Windows.", isCorrect: false },
      { id: "B", text: "Es la conocida como DocumentRoot, en la que Apache buscarÃ¡ todas las aplicaciones PHP; por tanto, para ejecutarlas, deben estar guardadas en principio en esa carpeta.", isCorrect: true },
      { id: "C", text: "Es el directorio donde se compilan los servlets de Jakarta EE en formato binario .jar.", isCorrect: false },
      { id: "D", text: "Es el almacÃ©n reservado para las copias de seguridad automÃ¡ticas de phpMyAdmin.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 18: 'La carpeta htdocs es la conocida como DocumentRoot, en la que Apache buscarÃ¡ todas las aplicaciones PHP. Por tanto, para ejecutarlas, deben estar guardadas en principio en esa carpeta'.",
    distractors: {
      A: "Los logs de Apache suelen estar en apache/logs.",
      C: "XAMPP bÃ¡sico corre PHP/Apache; servlets requieren Tomcat.",
      D: "phpMyAdmin almacena sus datos en MySQL."
    },
    trapNote: "Concepto tÃ©cnico: DocumentRoot es la raÃ­z de documentos pÃºblicos que sirve el servidor HTTP (en XAMPP: htdocs)."
  },
  {
    id: 91,
    level: "avanzado",
    topic: 5,
    topicName: "Contenido Inicial de htdocs",
    page: "PÃ¡g. 18-19",
    question: "SegÃºn la captura del explorador de archivos mostrada en la pÃ¡gina 19, Â¿cuÃ¡les son las carpetas y archivos que contiene inicialmente el DocumentRoot ('htdocs') en una instalaciÃ³n limpia de XAMPP?",
    options: [
      { id: "A", text: "Carpetas: 'windows', 'system32', 'temp'; Archivos: 'kernel.dll' y 'boot.ini'.", isCorrect: false },
      { id: "B", text: "Carpetas: 'dashboard', 'img', 'webalizer', 'xampp'; y archivos: 'applications', 'bitnami', 'favicon' e 'index.php'.", isCorrect: true },
      { id: "C", text: "Carpetas: 'node_modules' y 'vendor'; Archivos: 'package.json' y 'composer.lock'.", isCorrect: false },
      { id: "D", text: "Ãšnicamente un archivo vacÃ­o llamado 'empty.txt'.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 18-19 (captura oficial de Windows): se aprecian las carpetas 'dashboard', 'img', 'webalizer' y 'xampp', junto a los elementos 'applications' (archivo HTML), 'bitnami', 'favicon' (ICO) e 'index.php'.",
    distractors: {
      A: "Son carpetas y archivos del sistema operativo Windows.",
      C: "Son directorios de gestores de dependencias npm y Composer, no el contenido por defecto de htdocs.",
      D: "htdocs viene con la web de bienvenida de XAMPP."
    },
    trapNote: "Pregunta hiper-visual de examen basada en la captura de la pÃ¡gina 19: carpetas dashboard, img, webalizer, xampp; y archivo clave index.php."
  },
  {
    id: 92,
    level: "avanzado",
    topic: 5,
    topicName: "EjecuciÃ³n de index.php y Listado de Directorios",
    page: "PÃ¡g. 19",
    question: "Â¿Por quÃ© se ejecuta de forma automÃ¡tica 'index.php' al acceder a la raÃ­z del servidor Apache y quÃ© ocurre si se le cambia el nombre o se elimina?",
    options: [
      { id: "A", text: "Apache se bloquea y apaga el equipo mostrando una pantalla azul.", isCorrect: false },
      { id: "B", text: "Apache estÃ¡ configurado para que cualquier archivo llamado 'index.php' se ejecute automÃ¡ticamente al entrar a un directorio; si se renombra o elimina, el navegador mostrarÃ­a todos los archivos y directorios que haya dentro del DocumentRoot (listado de directorios).", isCorrect: true },
      { id: "C", text: "Apache descarga e instala automÃ¡ticamente una copia de WordPress desde Internet.", isCorrect: false },
      { id: "D", text: "El navegador cliente redirige de forma obligatoria a la web de Microsoft Bing.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 19: 'Apache estÃ¡ configurado para que, al acceder a un directorio, cualquier archivo con el nombre de index.php se ejecute de forma automÃ¡tica, y por eso aparece la pantalla que vimos al principio, para comprobar que Apache funciona. Si le cambiamos el nombre a este fichero o lo eliminamos, el navegador mostrarÃ­a todos los archivos y directorios que haya dentro del DocumentRoot (a esto se le llama el listado de directorios en servidores web)'.",
    distractors: {
      A: "Apache no produce pantallas azules por faltar un archivo Ã­ndice.",
      C: "No hay autoinstalaciÃ³n de WordPress.",
      D: "No hay redirecciones forzosas a buscadores."
    },
    trapNote: "TÃ©rmino oficial: 'Listado de directorios' (Directory Listing), que se activa si falta el archivo de Ã­ndice (index.php o index.html)."
  },
  {
    id: 93,
    level: "medio",
    topic: 5,
    topicName: "Acceso Local y Pantalla de Bienvenida de XAMPP",
    page: "PÃ¡g. 19",
    question: "Â¿QuÃ© nombre de host se escribe en el navegador para probar XAMPP localmente y quÃ© tÃ­tulo de bienvenida figura en la pantalla mostrada en el PDF?",
    options: [
      { id: "A", text: "Host: gateway.lan; TÃ­tulo: 'Bienvenido a Apache Cloud 2026'.", isCorrect: false },
      { id: "B", text: "Host: localhost (ya que de esta manera se accede a servicios locales); TÃ­tulo: 'Welcome to XAMPP for Windows 8.1.6'.", isCorrect: true },
      { id: "C", text: "Host: 192.168.1.254; TÃ­tulo: 'ConfiguraciÃ³n del Router'.", isCorrect: false },
      { id: "D", text: "Host: xampp.com; TÃ­tulo: 'Inicie sesiÃ³n con su tarjeta de crÃ©dito'.", isCorrect: false }
    ],
    explanation: "PÃ¡gina 19: 'Ahora probaremos en Xampp desde el navegador, para lo que utilizaremos el nombre de localhost, ya que de esta manera se accede a servicios locales. Si todo funciona correctamente, nos aparecerÃ¡ la siguiente pantalla: [Welcome to XAMPP for Windows 8.1.6]'.",
    distractors: {
      A: "El nombre es localhost, no gateway.lan.",
      C: "192.168.1.254 es una IP habitual de puerta de enlace, no el loopback local.",
      D: "xampp.com es un dominio externo."
    },
    trapNote: "Nombre de acceso local: localhost. VersiÃ³n mostrada en la captura del tema: Welcome to XAMPP for Windows 8.1.6."
  },
  {
    id: 94,
    level: "medio",
    topic: 5,
    topicName: "Primer Script: holamundo.php",
    page: "PÃ¡g. 19-20",
    question: "En las pÃ¡ginas 19 y 20 se crea el primer script de prueba 'holamundo.php' (en C:/xampp/htdocs). Â¿CuÃ¡l es su estructura HTML y el bloque de cÃ³digo PHP que incluye en el body?",
    options: [
      { id: "A", text: "Un archivo de texto plano sin etiquetas HTML que contiene Ãºnicamente 'print_r(phpinfo());'.", isCorrect: false },
      { id: "B", text: "Documento HTML5 con <!DOCTYPE html>, <html lang=\"es\">, head con meta charset UTF-8, viewport, <title>Hola Mundo</title>, y en el body el bloque: <?php echo \"Hola Mundo\"; ?>.", isCorrect: true },
      { id: "C", text: "Un documento XML con etiqueta <soap:Envelope> y script en lenguaje Python.", isCorrect: false },
      { id: "D", text: "Un archivo binario precompilado generado con gcc en la consola de comandos.", isCorrect: false }
    ],
    explanation: "PÃ¡ginas 19 y 20: cÃ³digo completo: <!DOCTYPE html> <html lang=\"es\"> <head> <meta charset=\"UTF-8\"> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> <title>Hola Mundo</title> </head> <body> <?php echo \"Hola Mundo\"; ?> </body> </html>.",
    distractors: {
      A: "Tiene estructura completa HTML5, no es texto plano.",
      C: "No utiliza SOAP ni Python.",
      D: "Es cÃ³digo fuente en texto plano interpretado por PHP, no binario de GCC."
    },
    trapNote: "FÃ­jate en las etiquetas HTML estÃ¡ndar: doctype html, lang='es', meta UTF-8, viewport, title 'Hola Mundo' y dentro del body: <?php echo 'Hola Mundo'; ?>."
  },
  // ==========================================================================
  // BLOQUE 6: INSTALACIÃ“N Y CONFIGURACIÃ“N DE XAMPP Y APACHE (PDF 2 - PÃ¡g. 1-10)
  // ==========================================================================
  {
    id: 95,
    level: "basico",
    topic: 6,
    topicName: "DefiniciÃ³n y Objetivo de XAMPP",
    page: "XAMPP PÃ¡g. 1",
    question: "Â¿QuÃ© es XAMPP segÃºn la definiciÃ³n del documento oficial y cuÃ¡l es su objetivo principal para desarrolladores principiantes?",
    options: [
      { id: "A", text: "Es un compilador nativo de C++ diseÃ±ado exclusivamente para producciÃ³n bancaria de alta seguridad.", isCorrect: false },
      { id: "B", text: "Es una herramienta de desarrollo que permite probar desarrollos web basados en PHP en el propio ordenador sin necesidad de acceso a Internet, con configuraciÃ³n funcional 'extraer y listo'.", isCorrect: true },
      { id: "C", text: "Es un sistema operativo basado en Linux que sustituye al kernel de Windows en servidores de clase.", isCorrect: false },
      { id: "D", text: "Es un framework JavaScript para diseÃ±ar interfaces reactivas similares a React o Angular.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 1: Es una herramienta de desarrollo que permite probar desarrollos web basados en PHP en tu propio ordenador sin necesidad de conexiÃ³n a Internet. Provee una configuraciÃ³n totalmente funcional desde el momento que se instala ('bÃ¡sicamente lo extraes y listo').",
    distractors: {
      A: "No es un compilador de C++ ni estÃ¡ diseÃ±ado para entornos bancarios.",
      C: "Es una distribuciÃ³n de software libre para Windows, Linux y Mac, no un sistema operativo.",
      D: "Es un paquete de servidor web (Apache, BD, PHP, Perl), no un framework JS."
    },
    trapNote: "El temario subraya que para principiantes 'no es necesario saber sobre configuraciones de servidores (aÃºn)' porque viene preconfigurado."
  },
  {
    id: 96,
    level: "medio",
    topic: 6,
    topicName: "Seguridad y Ãmbito de XAMPP",
    page: "XAMPP PÃ¡g. 1",
    question: "Â¿CuÃ¡l es la advertencia explÃ­cita que realiza el temario sobre la seguridad de datos en XAMPP?",
    options: [
      { id: "A", text: "Cumple con el estÃ¡ndar militar ISO-27001 y estÃ¡ certificado para comercio electrÃ³nico internacional.", isCorrect: false },
      { id: "B", text: "La seguridad de datos no es su punto fuerte, por lo cual NO es suficientemente seguro para ambientes grandes o de producciÃ³n.", isCorrect: true },
      { id: "C", text: "Bloquea automÃ¡ticamente todos los puertos e impide cualquier ataque de red por diseÃ±o criptogrÃ¡fico.", isCorrect: false },
      { id: "D", text: "Solo puede usarse si se instala previamente un cortafuegos por hardware dedicado.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 1: 'Es bueno recordar que la seguridad de datos no es su punto fuerte, por lo cual no es suficientemente seguro para ambientes grandes o de producciÃ³n.' Su propÃ³sito es el desarrollo y pruebas locales.",
    distractors: {
      A: "XAMPP viene configurado de forma muy permisiva y no tiene certificaciones de seguridad para producciÃ³n.",
      C: "Al contrario, por defecto tiene accesos sin contraseÃ±as (como en phpMyAdmin/root).",
      D: "No exige cortafuegos hardware; corre en cualquier PC local."
    },
    trapNote: "Pregunta clÃ¡sica de examen: XAMPP es para DESARROLLO LOCAL, nunca para entornos reales de producciÃ³n por sus carencias de seguridad nativa."
  },
  {
    id: 97,
    level: "basico",
    topic: 6,
    topicName: "AcrÃ³nimo XAMPP: La letra X",
    page: "XAMPP PÃ¡g. 1",
    question: "En el acrÃ³nimo XAMPP, Â¿quÃ© representa la letra 'X' inicial?",
    options: [
      { id: "A", text: "XML (eXtensible Markup Language), indicando que el servidor procesa exclusivamente esquemas XML.", isCorrect: false },
      { id: "B", text: "Multiplataforma: funciona en los sistemas operativos Linux, Windows y macOS.", isCorrect: true },
      { id: "C", text: "X.509, el estÃ¡ndar de certificados digitales TLS/SSL.", isCorrect: false },
      { id: "D", text: "Xenon, la arquitectura del procesador sobre la que debe ejecutarse el servidor.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 1: 'X - Multiplataforma: funciona en Linux, Windows y macOS.'",
    distractors: {
      A: "La X no significa XML.",
      C: "No hace referencia al estÃ¡ndar X.509 de certificados.",
      D: "No tiene relaciÃ³n con procesadores ni hardware Xenon."
    },
    trapNote: "La 'X' simboliza el cruce entre mÃºltiples sistemas operativos (Cross-platform / Multiplataforma)."
  },
  {
    id: 98,
    level: "avanzado",
    topic: 6,
    topicName: "Diferencia de Servidores: Linux vs. Windows",
    page: "XAMPP PÃ¡g. 1",
    question: "Â¿QuÃ© advertencia crÃ­tica de programaciÃ³n da el temario al desarrollar en XAMPP bajo Windows teniendo en cuenta que el servidor final de producciÃ³n suele ser Linux?",
    options: [
      { id: "A", text: "Windows utiliza procesadores ARM y Linux siempre utiliza procesadores x86 de 32 bits.", isCorrect: false },
      { id: "B", text: "Linux distingue entre mayÃºsculas y minÃºsculas (case-sensitive) en nombres de archivo y rutas, cosa que no ocurre en Windows, lo que puede provocar que el servidor final no reconozca los archivos.", isCorrect: true },
      { id: "C", text: "PHP no puede ejecutar bucles 'for' en sistemas operativos de la familia Linux.", isCorrect: false },
      { id: "D", text: "Los archivos en Linux deben guardarse obligatoriamente con codificaciÃ³n ISO-8859-1 en vez de UTF-8.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 1: 'Hay que tener en cuenta que los servidores web estÃ¡n habitualmente en Linux, por tanto, cuida bien la programaciÃ³n de la aplicaciÃ³n, ya que puede ocurrir que el servidor final no la reconozca. Por ejemplo, Linux distingue mayÃºscula y minÃºscula, cosa que no ocurre en Windows.'",
    distractors: {
      A: "La diferencia fundamental seÃ±alada es la sensibilidad a mayÃºsculas/minÃºsculas en el sistema de archivos.",
      C: "PHP es totalmente estÃ¡ndar y ejecuta bucles idÃ©nticos en cualquier SO.",
      D: "UTF-8 es el estÃ¡ndar universal recomendado tanto en Windows como en Linux."
    },
    trapNote: "En Windows `Script.php` y `script.php` cargan el mismo fichero; en Linux son dos ficheros completamente distintos y provocarÃ¡ error 404 si no coincide exactamente."
  },
  {
    id: 99,
    level: "basico",
    topic: 6,
    topicName: "AcrÃ³nimo XAMPP: La letra A",
    page: "XAMPP PÃ¡g. 1",
    question: "En el acrÃ³nimo XAMPP, Â¿quÃ© representa la letra 'A' y quÃ© entidad lo desarrolla?",
    options: [
      { id: "A", text: "ASP.NET, desarrollado por Microsoft Corporation.", isCorrect: false },
      { id: "B", text: "Apache: el servidor web de cÃ³digo abierto usado globalmente para entrega de contenidos web, desarrollado y mantenido por la Apache Software Foundation.", isCorrect: true },
      { id: "C", text: "AJAX, la tÃ©cnica asÃ­ncrona mantenida por el W3C.", isCorrect: false },
      { id: "D", text: "Amazon Web Services (AWS), que gestiona la nube de alojamiento.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 1: 'A - Apache: es el servidor web de cÃ³digo abierto usado globalmente para la entrega de contenidos web... desarrollado y mantenido por la Apache Software Foundation.'",
    distractors: {
      A: "ASP.NET no forma parte de XAMPP ni es la letra A.",
      C: "AJAX es una tÃ©cnica cliente, no un servidor web.",
      D: "AWS no desarrolla el servidor web Apache."
    },
    trapNote: "Recuerda que recibe peticiones HTTP al escribir una URL en el navegador y responde enviando pÃ¡ginas web."
  },
  {
    id: 100,
    level: "medio",
    topic: 6,
    topicName: "AcrÃ³nimo XAMPP: La letra M",
    page: "XAMPP PÃ¡g. 1-2",
    question: "Respecto a la letra 'M' en XAMPP, Â¿quÃ© cambio importante seÃ±ala el temario en las versiones actuales del paquete?",
    options: [
      { id: "A", text: "Ha sido reemplazado por MongoDB para almacenar documentos JSON.", isCorrect: false },
      { id: "B", text: "Originalmente representaba a MySQL, pero en las versiones actuales de XAMPP esta base de datos se ha sustituido por MariaDB.", isCorrect: true },
      { id: "C", text: "Ahora significa Microsoft SQL Server debido a un acuerdo de licencias.", isCorrect: false },
      { id: "D", text: "Significa Memcached para acelerar consultas en memoria RAM.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 1-2: '3. MySQL/MariaDB: XAMPP cuenta con uno de los sistemas relacionales de gestiÃ³n de bases de datos mÃ¡s populares del mundo... En las versiones actuales de XAMPP esta base de datos se ha sustituido por MariaDB.'",
    distractors: {
      A: "XAMPP no incluye MongoDB por defecto.",
      C: "XAMPP es 100% software libre y no incluye Microsoft SQL Server.",
      D: "La M corresponde a MySQL/MariaDB, no a Memcached."
    },
    trapNote: "MariaDB es la bifurcaciÃ³n comunitaria de MySQL creada tras la adquisiciÃ³n de Sun/MySQL por Oracle."
  },
  {
    id: 101,
    level: "basico",
    topic: 6,
    topicName: "AcrÃ³nimo XAMPP: Primera P",
    page: "XAMPP PÃ¡g. 2",
    question: "En el acrÃ³nimo XAMPP, Â¿quÃ© representa la primera 'P'?",
    options: [
      { id: "A", text: "Python, usado para machine learning en servidores.", isCorrect: false },
      { id: "B", text: "PHP: lenguaje de programaciÃ³n del lado del servidor que permite crear pÃ¡ginas web o aplicaciones dinÃ¡micas, independiente de la plataforma.", isCorrect: true },
      { id: "C", text: "PostgreSQL, el sistema gestor de bases de datos objeto-relacional.", isCorrect: false },
      { id: "D", text: "Pascal, para compilaciÃ³n de algoritmos estructurados.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 2: '4. PHP: lenguaje de programaciÃ³n del lado del servidor que permite crear pÃ¡ginas web o aplicaciones dinÃ¡micas. Es independiente de la plataforma y soporta varios sistemas de bases de datos.'",
    distractors: {
      A: "Python no estÃ¡ incluido en el acrÃ³nimo XAMPP clÃ¡sico.",
      C: "PostgreSQL no es la primera P de XAMPP.",
      D: "Pascal no se usa para desarrollo web en este entorno."
    },
    trapNote: "PHP es el lenguaje central sobre el que giran las prÃ¡cticas de DWES en este curso."
  },
  {
    id: 102,
    level: "medio",
    topic: 6,
    topicName: "AcrÃ³nimo XAMPP: Segunda P",
    page: "XAMPP PÃ¡g. 2",
    question: "Â¿QuÃ© representa la segunda 'P' en el acrÃ³nimo XAMPP y en quÃ© Ã¡mbitos se utiliza segÃºn el temario?",
    options: [
      { id: "A", text: "Python, enfocado exclusivamente en desarrollo con Django.", isCorrect: false },
      { id: "B", text: "PostgreSQL, como base de datos secundaria para transacciones.", isCorrect: false },
      { id: "C", text: "Perl: lenguaje usado en la administraciÃ³n del sistema, en el desarrollo web y en la programaciÃ³n de red.", isCorrect: true },
      { id: "D", text: "Photoshop, para ediciÃ³n de banners y contenido multimedia.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 2: '5. Perl: este lenguaje de programaciÃ³n se usa en la administraciÃ³n del sistema, en el desarrollo web y en la programaciÃ³n de red. TambiÃ©n permite programar aplicaciones web dinÃ¡micas.'",
    distractors: {
      A: "Trampa habitual de examen: la segunda P es Perl, NO Python.",
      B: "Tampoco es PostgreSQL ni phpMyAdmin.",
      D: "Photoshop es software de diseÃ±o grÃ¡fico comercial, no un lenguaje de servidor."
    },
    trapNote: "Â¡Ojo al examen! Muchos alumnos responden errÃ³neamente Python o PostgreSQL en los exÃ¡menes tipo test. La respuesta oficial es PERL."
  },
  {
    id: 103,
    level: "medio",
    topic: 6,
    topicName: "Herramientas Adicionales: Mercury Mail",
    page: "XAMPP PÃ¡g. 2",
    question: "Dentro de las herramientas adicionales que incluye XAMPP para Windows, Â¿cuÃ¡l es la funciÃ³n de 'Mercury Mail'?",
    options: [
      { id: "A", text: "Un servidor de bases de datos NoSQL ultrarrÃ¡pido.", isCorrect: false },
      { id: "B", text: "Un servidor de correo incluido en XAMPP para Windows.", isCorrect: true },
      { id: "C", text: "Un analizador estÃ¡tico de cÃ³digo PHP para buscar fallos de sintaxis.", isCorrect: false },
      { id: "D", text: "Un proxy inverso para balancear carga HTTP entre varios clusters.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 2: 'Mercury Mail: servidor de correo incluido en XAMPP para Windows.'",
    distractors: {
      A: "No es una base de datos NoSQL.",
      C: "No es un linter ni analizador de cÃ³digo.",
      D: "No es un balanceador de carga."
    },
    trapNote: "Mercury Mail viene listado en el Panel de Control de XAMPP junto a Apache, MySQL, FileZilla y Tomcat."
  },
  {
    id: 104,
    level: "basico",
    topic: 6,
    topicName: "Herramientas Adicionales: phpMyAdmin",
    page: "XAMPP PÃ¡g. 2",
    question: "Â¿QuÃ© es 'phpMyAdmin' segÃºn el temario oficial de XAMPP?",
    options: [
      { id: "A", text: "Un compilador de PHP a cÃ³digo binario para Windows.", isCorrect: false },
      { id: "B", text: "Una herramienta web para la administraciÃ³n de bases de datos MySQL / MariaDB.", isCorrect: true },
      { id: "C", text: "Un mÃ³dulo de Apache para comprimir imÃ¡genes JPEG en tiempo real.", isCorrect: false },
      { id: "D", text: "Un cliente de correo electrÃ³nico alternativo a Outlook.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 2: 'phpMyAdmin: herramienta para administraciÃ³n de bases de datos MySQL / MarÃ­aDB.'",
    distractors: {
      A: "phpMyAdmin estÃ¡ escrito en PHP, no es un compilador.",
      C: "No comprime imÃ¡genes.",
      D: "No es un cliente de correo; administra bases de datos desde el navegador."
    },
    trapNote: "Se accede habitualmente a travÃ©s del navegador web en http://localhost/phpmyadmin."
  },
  {
    id: 105,
    level: "medio",
    topic: 6,
    topicName: "Herramientas Adicionales: Webalizer y Tomcat",
    page: "XAMPP PÃ¡g. 2",
    question: "Â¿QuÃ© funciones desempeÃ±an respectivamente 'Webalizer' y 'Apache Tomcat' en el paquete XAMPP?",
    options: [
      { id: "A", text: "Webalizer es un cortafuegos y Tomcat cifra contraseÃ±as en MD5.", isCorrect: false },
      { id: "B", text: "Webalizer es una herramienta de anÃ¡lisis de logs de servidores web, y Apache Tomcat es un servidor de aplicaciones Java (para JSP/Servlets).", isCorrect: true },
      { id: "C", text: "Webalizer sirve para diseÃ±ar hojas de estilo CSS y Tomcat es una extensiÃ³n de Node.js.", isCorrect: false },
      { id: "D", text: "Ambos son servidores FTP para transferencia segura de archivos por SSH.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 2: 'Webalizer: herramienta de anÃ¡lisis de logs de servidores web. Apache Tomcat: servidor de aplicaciones Java (para JSP/Servlets).' Los servidores FTP incluidos son FileZilla Server o ProFTPd.",
    distractors: {
      A: "Webalizer no es cortafuegos ni Tomcat un algoritmo de cifrado.",
      C: "Webalizer analiza logs HTTP; Tomcat corre servlets Java, no Node.js.",
      D: "Los servidores FTP son FileZilla o ProFTPd."
    },
    trapNote: "Recuerda: Webalizer = anÃ¡lisis de logs. Tomcat = aplicaciones Java (JSP y Servlets)."
  },
  {
    id: 106,
    level: "medio",
    topic: 6,
    topicName: "InstalaciÃ³n en Windows y Firewall",
    page: "XAMPP PÃ¡g. 2-3",
    question: "Durante la instalaciÃ³n de XAMPP en Windows, Â¿quÃ© recomendaciÃ³n especÃ­fica da el temario al mostrarse el aviso del Cortafuegos (Firewall) de Windows para Apache (httpd.exe)?",
    options: [
      { id: "A", text: "Denegar el acceso a todas las redes para trabajar 100% aislado.", isCorrect: false },
      { id: "B", text: "Se recomienda permitir las redes privadas y denegar las redes pÃºblicas para la configuraciÃ³n del firewall, pulsando en 'Permitir acceso'.", isCorrect: true },
      { id: "C", text: "Desactivar por completo el Firewall de Windows y desinstalar el antivirus permanentemente.", isCorrect: false },
      { id: "D", text: "Permitir solo redes pÃºblicas porque las privadas son vulnerables a ataques ARP.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 2-3: 'Se recomienda permitir las redes privadas y denegar las redes pÃºblicas para la configuraciÃ³n del firewall, hacer clic en el botÃ³n Permitir acceso.'",
    distractors: {
      A: "Si se deniegan las privadas, el servidor no podrÃ¡ comunicarse adecuadamente en la red local de clase.",
      C: "Nunca se debe desactivar el cortafuegos general del sistema.",
      D: "Las redes pÃºblicas no se deben permitir por seguridad ante accesos externos no deseados."
    },
    trapNote: "Permitir privadas (domÃ©sticas/trabajo) y denegar pÃºblicas (aeropuertos/cafeterÃ­as)."
  },
  {
    id: 107,
    level: "avanzado",
    topic: 6,
    topicName: "Panel de Control: Modo Administrador",
    page: "XAMPP PÃ¡g. 3",
    question: "Â¿Por quÃ© razÃ³n es IMPRESCINDIBLE ejecutar el panel de control de XAMPP en 'Modo Administrador' en Windows?",
    options: [
      { id: "A", text: "Porque de lo contrario Windows elimina automÃ¡ticamente la carpeta de instalaciÃ³n de C:\\xampp.", isCorrect: false },
      { id: "B", text: "Porque el servidor web, por medidas de seguridad del sistema operativo, solamente arranca en este modo con privilegios elevados.", isCorrect: true },
      { id: "C", text: "Porque PHP 8 requiere obligatoriamente una cuenta de dominio de Azure Active Directory.", isCorrect: false },
      { id: "D", text: "Para evitar que el navegador Google Chrome consuma mÃ¡s de 1 GB de memoria RAM.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 3: 'Una vez instalado XAMPP, debemos ejecutar el panel de control. Es importante hacerlo en modo administrador porque el servidor web, por medidas de seguridad, solamente arranca en este modo.'",
    distractors: {
      A: "Windows no borra la carpeta, simplemente rechaza iniciar el servicio del servidor si no tiene privilegios.",
      C: "No requiere cuentas en la nube de Azure.",
      D: "No tiene ninguna relaciÃ³n con el consumo de RAM de Chrome."
    },
    trapNote: "Si no lo abres como Administrador, al pulsar 'Start' en Apache se producirÃ¡ un error de permisos en Windows."
  },
  {
    id: 108,
    level: "basico",
    topic: 6,
    topicName: "Arranque de Servicios en XAMPP",
    page: "XAMPP PÃ¡g. 3-4",
    question: "Â¿QuÃ© servicios se deben arrancar inicialmente para las prÃ¡cticas del mÃ³dulo segÃºn el temario y cÃ³mo sabemos visualmente que la ejecuciÃ³n ha sido satisfactoria?",
    options: [
      { id: "A", text: "Todos los servicios (Mercury, FileZilla, Tomcat); se muestran en rojo intermitente.", isCorrect: false },
      { id: "B", text: "Solamente Apache y MySQL (MariaDB); se colorean en verde y se muestran los PID y el puerto por el que escucha cada servicio.", isCorrect: true },
      { id: "C", text: "Solo Tomcat; se abre una ventana azul de consola CMD.", isCorrect: false },
      { id: "D", text: "Ninguno; XAMPP no requiere arrancar servicios para procesar cÃ³digo PHP.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 3-4: 'Nosotros vamos a arrancar solamente Apache y MySQL (MarÃ­aDB) en principio. Como vemos, se han coloreado en verde y se muestra el puerto por el que escucha cada uno de los servicios correspondientes.'",
    distractors: {
      A: "Arrancar Mercury o FileZilla es innecesario y malgasta recursos si no se usan correos o FTP.",
      C: "Tomcat es para Java, no para PHP.",
      D: "Apache debe estar obligatoriamente iniciado para interpretar PHP vÃ­a HTTP."
    },
    trapNote: "Color verde = servicio activo satisfactoriamente. BotÃ³n 'Start' cambia a 'Stop'."
  },
  {
    id: 109,
    level: "medio",
    topic: 6,
    topicName: "Puertos por Defecto: Apache y MySQL",
    page: "XAMPP PÃ¡g. 4, 7",
    question: "SegÃºn la captura del Panel de Control de XAMPP y el temario, Â¿cuÃ¡les son los puertos de red predeterminados por los que escuchan Apache y MySQL respectivamente?",
    options: [
      { id: "A", text: "Apache por el puerto 21 y MySQL por el puerto 25.", isCorrect: false },
      { id: "B", text: "Apache por el puerto 80 (y 443 para HTTPS) y MySQL por el puerto 3306.", isCorrect: true },
      { id: "C", text: "Apache por el puerto 8080 y MySQL por el puerto 1433.", isCorrect: false },
      { id: "D", text: "Ambos escuchan por el mismo puerto 80 compartiendo socket TCP.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 4 y 7: Apache escucha en el puerto estÃ¡ndar HTTP 80 (y 443 SSL). MySQL (MariaDB) escucha en el puerto relacional 3306. Dos servicios distintos no pueden escuchar simultÃ¡neamente en el mismo puerto.",
    distractors: {
      A: "El puerto 21 es FTP y el 25 es SMTP de correo.",
      C: "8080 es alternativo de conflicto y 1433 es de Microsoft SQL Server.",
      D: "Dos servicios no pueden enlazar el mismo puerto TCP simultÃ¡neamente sin colisiÃ³n."
    },
    trapNote: "Recuerda: Apache = 80 (HTTP) / 443 (HTTPS). MySQL = 3306."
  },
  {
    id: 110,
    level: "basico",
    topic: 6,
    topicName: "ComprobaciÃ³n de Acceso: Loopback y Localhost",
    page: "XAMPP PÃ¡g. 4",
    question: "Â¿De quÃ© dos formas indica el temario que podemos probar el servidor web desde el navegador para acceder a los servicios locales?",
    options: [
      { id: "A", text: "Escribiendo 'www.google.es' o la IP pÃºblica del router 192.168.1.1.", isCorrect: false },
      { id: "B", text: "Utilizando la IP de loopback 127.0.0.1 o el nombre de dominio local 'localhost'.", isCorrect: true },
      { id: "C", text: "Introduciendo la direcciÃ³n MAC de la tarjeta de red Ethernet.", isCorrect: false },
      { id: "D", text: "Escribiendo 'file:///C:/xampp/apache/bin/httpd.exe'.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 4: 'Ahora probaremos en XAMPP desde el navegador, utilizando la IP de loopback o localhost 127.0.0.1 o tambiÃ©n utilizaremos el nombre de localhost, ya que de esta manera se accede a servicios locales.'",
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
    page: "XAMPP PÃ¡g. 5",
    question: "Â¿QuÃ© es la carpeta 'htdocs' en XAMPP y cuÃ¡l es su ruta por defecto en Windows?",
    options: [
      { id: "A", text: "Es la carpeta temporal donde se guardan las copias de seguridad de Windows en C:\\Windows\\Temp.", isCorrect: false },
      { id: "B", text: "Es la carpeta conocida como DocumentRoot (C:\\xampp\\htdocs), en la que Apache buscarÃ¡ todas las aplicaciones PHP para ser ejecutadas directamente.", isCorrect: true },
      { id: "C", text: "Es la carpeta binaria donde se compilan los archivos .exe de Apache.", isCorrect: false },
      { id: "D", text: "Es la base de datos fÃ­sica de MariaDB donde residen las tablas relacionales.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 5: 'La carpeta htdocs es la conocida como DocumentRoot, en la que Apache buscarÃ¡ todas las aplicaciones PHP. Por tanto, para ejecutarlas, deben estar guardadas en principio en esa carpeta.'",
    distractors: {
      A: "No es una carpeta de temporales de Windows.",
      C: "Los ejecutables estÃ¡n en apache\\bin.",
      D: "Las bases de datos fÃ­sicas estÃ¡n en mysql\\data."
    },
    trapNote: "DocumentRoot = raÃ­z de documentos pÃºblicos web servidos por Apache."
  },
  {
    id: 112,
    level: "medio",
    topic: 6,
    topicName: "EjecuciÃ³n AutomÃ¡tica de index.php",
    page: "XAMPP PÃ¡g. 6",
    question: "En la configuraciÃ³n por defecto de Apache, Â¿cÃ³mo reacciona el servidor cuando un cliente solicita acceder a un directorio sin especificar un archivo concreto?",
    options: [
      { id: "A", text: "Devuelve siempre un error 500 Internal Server Error porque es obligatorio teclear el nombre exacto del archivo.", isCorrect: false },
      { id: "B", text: "Cualquier archivo con el nombre de 'index.php' se ejecuta de forma automÃ¡tica.", isCorrect: true },
      { id: "C", text: "Descarga el archivo mÃ¡s pesado del directorio para saturar el ancho de banda.", isCorrect: false },
      { id: "D", text: "Ejecuta un script en Perl que apaga el servidor Apache.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 6: 'Apache estÃ¡ configurado para que, al acceder a un directorio, cualquier archivo con el nombre de index.php se ejecute de forma automÃ¡tica, y por eso aparece la pantalla que vimos al principio, para comprobar que Apache funciona.'",
    distractors: {
      A: "No da error 500; busca los archivos de Ã­ndice configurados (DirectoryIndex).",
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
    page: "XAMPP PÃ¡g. 6",
    question: "Â¿QuÃ© ocurre en Apache si renombras el archivo 'index.php' a 'index1.php' (o lo eliminas) dentro del DocumentRoot y accedes a la URL en el navegador?",
    options: [
      { id: "A", text: "La pantalla se queda completamente en blanco y el ordenador emite un pitido.", isCorrect: false },
      { id: "B", text: "El navegador muestra todos los archivos y directorios que haya dentro del DocumentRoot (comportamiento denominado 'examen de directorios' o Directory Listing).", isCorrect: true },
      { id: "C", text: "Apache se detiene automÃ¡ticamente y elimina el servicio del registro de Windows.", isCorrect: false },
      { id: "D", text: "Redirige de inmediato a la pÃ¡gina oficial de phpMyAdmin solicitando login.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 6: 'Si le cambiamos el nombre a este fichero o lo eliminamos, el navegador mostrarÃ­a todos los archivos y directorios que haya dentro del DocumentRoot (a esto se le llama el examen de directorios en servidores web).' Se visualiza 'Index of /' con la lista de carpetas.",
    distractors: {
      A: "No queda en blanco; lista la estructura del disco si Options Indexes estÃ¡ activo.",
      C: "El servidor sigue funcionando con normalidad.",
      D: "No redirige a phpMyAdmin."
    },
    trapNote: "TÃ©rmino oficial del temario: 'Examen de directorios' (Directory Listing). En producciÃ³n suele deshabilitarse por seguridad."
  },
  {
    id: 114,
    level: "medio",
    topic: 6,
    topicName: "Carpeta de Trabajo: aplicacionesclase",
    page: "XAMPP PÃ¡g. 6-7",
    question: "Â¿Por quÃ© motivo se crea en el temario la carpeta 'C:/xampp/aplicacionesclase' y quÃ© configuraciÃ³n requiere para que el navegador pueda acceder a ella?",
    options: [
      { id: "A", text: "Porque Windows no permite crear archivos dentro de htdocs bajo ninguna circunstancia.", isCorrect: false },
      { id: "B", text: "Para simplificar el trabajo en clase y por seguridad; para acceder a ella desde el navegador es necesario configurar un 'Alias' en Apache.", isCorrect: true },
      { id: "C", text: "Para almacenar virus y troyanos que comprueban la seguridad del cortafuegos.", isCorrect: false },
      { id: "D", text: "Porque MySQL solo puede guardar tablas en carpetas que contengan la palabra 'clase'.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 6-7: 'Para simplificar nuestro trabajo en clase y por seguridad, creamos un directorio en c:/xampp que llamaremos: aplicacionesclase... Pero para poder acceder a ella tendremos que realizar un paso en la configuraciÃ³n de Apache... trabajar con los Alias.'",
    distractors: {
      A: "En htdocs sÃ­ se pueden crear archivos, pero mezclarlos con los de XAMPP es poco limpio y menos seguro.",
      C: "No es para almacenar malware.",
      D: "MySQL gestiona sus datos independientemente en la carpeta data."
    },
    trapNote: "Al estar fuera de htdocs (DocumentRoot), Apache NO puede servirla directamente a menos que se declare un Alias."
  },
  {
    id: 115,
    level: "medio",
    topic: 6,
    topicName: "EdiciÃ³n de ConfiguraciÃ³n: Regla de Oro",
    page: "XAMPP PÃ¡g. 7",
    question: "Â¿CuÃ¡l es el primer paso obligatorio que debe realizarse antes de modificar cualquier archivo de configuraciÃ³n de Apache segÃºn el temario?",
    options: [
      { id: "A", text: "Formatear la particiÃ³n del disco duro C:\\.", isCorrect: false },
      { id: "B", text: "Parar el proceso (hacer clic en Stop en el panel de control de XAMPP).", isCorrect: true },
      { id: "C", text: "Desinstalar el navegador web y reinstalarlo.", isCorrect: false },
      { id: "D", text: "Crear una nueva cuenta de usuario en Windows con permisos de invitado.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 7: '3.1. CONFIGURANDO APACHE: Lo primero que debemos hacer es parar el proceso. DespuÃ©s accedemos a la configuraciÃ³n de Apache.'",
    distractors: {
      A: "Formatear el disco destruirÃ­a todo el sistema operativo.",
      C: "El navegador no tiene ninguna influencia en la configuraciÃ³n interna de Apache.",
      D: "XAMPP requiere privilegios de Administrador, no de invitado."
    },
    trapNote: "Parar el servicio -> Editar fichero -> Guardar cambios -> Iniciar el servicio (Start)."
  },
  {
    id: 116,
    level: "medio",
    topic: 6,
    topicName: "Fichero httpd.conf y Comentarios",
    page: "XAMPP PÃ¡g. 7",
    question: "Â¿DÃ³nde se encuentra el archivo principal de configuraciÃ³n de Apache y quÃ© carÃ¡cter indica que una lÃ­nea es un comentario?",
    options: [
      { id: "A", text: "En C:\\xampp\\php\\php.ini y los comentarios empiezan por '//'.", isCorrect: false },
      { id: "B", text: "En C:\\xampp\\apache\\conf\\httpd.conf y las lÃ­neas comentadas van precedidas por '#' (almohadilla).", isCorrect: true },
      { id: "C", text: "En C:\\xampp\\htdocs\\index.html y los comentarios empiezan por '<!--'.", isCorrect: false },
      { id: "D", text: "En C:\\Windows\\System32\\drivers\\etc\\hosts y los comentarios usan ';'.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 7: 'Apache (httpd.conf). Este es el archivo de configuraciÃ³n de Apache, que se encuentra en: C:\\xampp\\apache\\conf. Todas las lÃ­neas precedidas por \"#\" no serÃ¡n ejecutadas. Para activarlas, basta con quitar la \"#\".'",
    distractors: {
      A: "php.ini es de PHP y usa punto y coma (;).",
      C: "index.html es una pÃ¡gina web, no la configuraciÃ³n del servidor web.",
      D: "El archivo hosts es para resoluciÃ³n DNS local de Windows."
    },
    trapNote: "Â¡Ojo al examen! En Apache (httpd.conf) el comentario es `#`. En PHP (php.ini) el comentario es `;`."
  },
  {
    id: 117,
    level: "medio",
    topic: 6,
    topicName: "Directiva Listen y Conflicto en Windows 10",
    page: "XAMPP PÃ¡g. 7",
    question: "En `httpd.conf`, Â¿quÃ© indica la directiva `Listen 80` y quÃ© soluciÃ³n propone el temario si el sistema operativo produce un conflicto con dicho puerto?",
    options: [
      { id: "A", text: "Indica que Apache solo acepta 80 usuarios concurrentes; si hay conflicto se debe borrar Windows.", isCorrect: false },
      { id: "B", text: "Indica el puerto TCP de escucha de Apache (80 por defecto); si hay conflicto (frecuente en Windows 10), se suele cambiar por el puerto 8080.", isCorrect: true },
      { id: "C", text: "Indica el nÃºmero mÃ¡ximo de lÃ­neas de cÃ³digo PHP que se pueden procesar por script.", isCorrect: false },
      { id: "D", text: "Indica que Apache escucha en la frecuencia de radio FM de 80 MHz.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 7: 'Generalmente sale por el puerto 80. Si el SO te diera un conflicto con el puerto (esto empezÃ³ a ocurrir con Win10, pero lo subsanaron), se suele cambiar por el 8080.'",
    distractors: {
      A: "Listen 80 define el puerto de red TCP, no el nÃºmero de usuarios.",
      C: "El lÃ­mite de lÃ­neas o ejecuciÃ³n lo gestiona PHP (max_execution_time), no Listen.",
      D: "Es un puerto de red TCP/IP, no una frecuencia de radio."
    },
    trapNote: "Si cambias a 8080, para entrar debes escribir en el navegador: `http://localhost:8080`."
  },
  {
    id: 118,
    level: "medio",
    topic: 6,
    topicName: "Directiva ServerName",
    page: "XAMPP PÃ¡g. 7",
    question: "Â¿CuÃ¡l es el valor por defecto de la directiva `ServerName` en `httpd.conf` y quÃ© norma prÃ¡ctica establece el temario?",
    options: [
      { id: "A", text: "ServerName miordenador.empresa.com:80 y se debe cambiar obligatoriamente por el nombre del alumno.", isCorrect: false },
      { id: "B", text: "ServerName localhost:80; es una norma de facto, lo llama todo el mundo igual, y por eso no debemos modificarlo.", isCorrect: true },
      { id: "C", text: "ServerName 192.168.1.254:443 y debe apuntar siempre al servidor DNS de Google.", isCorrect: false },
      { id: "D", text: "ServerName null y debe dejarse siempre vacÃ­o.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 7: 'Son el nombre del servidor, que generalmente se llama localhost... (esto es una norma de facto, lo llama todo el mundo igual, y por eso no debemos modificarlo) y generalmente sale por el puerto 80.'",
    distractors: {
      A: "El temario desaconseja expresamente cambiar el nombre de localhost.",
      C: "No apunta a DNS pÃºblicos ni usa IPs arbitrarias.",
      D: "No debe dejarse en null."
    },
    trapNote: "ServerName localhost:80 es la convenciÃ³n estÃ¡ndar en entornos locales de XAMPP."
  },
  {
    id: 119,
    level: "avanzado",
    topic: 6,
    topicName: "ConfiguraciÃ³n de Alias: httpd-xampp.conf",
    page: "XAMPP PÃ¡g. 7-8",
    question: "Â¿En quÃ© archivo especÃ­fico se configuran los Alias en XAMPP para enlazar carpetas externas como 'aplicacionesclase' y dÃ³nde se ubica la directiva?",
    options: [
      { id: "A", text: "En C:\\xampp\\php\\php.ini, al final del bloque de directivas de subida de archivos.", isCorrect: false },
      { id: "B", text: "En el archivo httpd-xampp.conf, editado desde la consola de administraciÃ³n de Apache en XAMPP, despuÃ©s de las lÃ­neas donde se configura phpmyadmin.", isCorrect: true },
      { id: "C", text: "En C:\\xampp\\htdocs\\.htaccess, creando un script en bash.", isCorrect: false },
      { id: "D", text: "En C:\\xampp\\mysql\\my.ini, dentro de la secciÃ³n [mysqld].", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 7-8: 'Para ello editamos el fichero httpd-xampp.conf desde la consola de administraciÃ³n de Apache en XAMPP, y despuÃ©s de las lÃ­neas donde se configura phpmyadmin aÃ±adimos [el bloque del Alias].'",
    distractors: {
      A: "php.ini no gestiona los alias web de Apache; es el intÃ©rprete PHP.",
      C: ".htaccess es para sobreescritura local de directorios, no la configuraciÃ³n de XAMPP.",
      D: "my.ini es la configuraciÃ³n del servidor de bases de datos MySQL/MariaDB."
    },
    trapNote: "Fichero clave de examen: `httpd-xampp.conf` (configuraciones especÃ­ficas de XAMPP para Apache)."
  },
  {
    id: 120,
    level: "avanzado",
    topic: 6,
    topicName: "Sintaxis del Alias en Apache",
    page: "XAMPP PÃ¡g. 7-8; Accesos PÃ¡g. 3",
    question: "Â¿CuÃ¡l es la sintaxis general de la directiva `Alias` en Apache y cÃ³mo queda redactada para 'aplicacionesclase'?",
    options: [
      { id: "A", text: "Directory /aplicacionesclase = C:/xampp/aplicacionesclase/", isCorrect: false },
      { id: "B", text: "El formato general es: 'Alias ruta-URL ruta-carpeta', y queda: 'Alias /aplicacionesclase \"C:/xampp/aplicacionesclase/\"'.", isCorrect: true },
      { id: "C", text: "Symlink C:/xampp/aplicacionesclase/ -> http://localhost", isCorrect: false },
      { id: "D", text: "Redirect 301 /htdocs/aplicacionesclase to C:/xampp/", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 8 y Accesos PÃ¡g. 3: 'Alias ruta-URL ruta-carpeta'. En el caso de aplicacionesclase se escribe: Alias /aplicacionesclase \"C:/xampp/aplicacionesclase/\". Permite acceder en el navegador escribiendo: localhost/aplicacionesclase.",
    distractors: {
      A: "Directory es una etiqueta contenedora de permisos (<Directory ...>), no la directiva de redirecciÃ³n de ruta.",
      C: "Symlink es una orden de sistemas de archivos de Linux, no una directiva de Apache.",
      D: "Redirect es para redirecciones HTTP (301/302), no para mapear carpetas fÃ­sicas fuera de DocumentRoot."
    },
    trapNote: "Estructura obligatoria: `Alias [ruta-URL] [ruta-carpeta-fÃ­sica]`."
  },
  {
    id: 121,
    level: "avanzado",
    topic: 6,
    topicName: "Directiva Options: Indexes",
    page: "XAMPP PÃ¡g. 8",
    question: "Dentro del bloque `<Directory \"C:/xampp/aplicacionesclase/\">`, Â¿quÃ© funciÃ³n cumple la opciÃ³n `Indexes` y quÃ© error ocurrirÃ­a si estuviera desactivada al acceder a una carpeta sin archivo Ã­ndice?",
    options: [
      { id: "A", text: "Crea un Ã­ndice de base de datos MySQL en memoria; si falta da error 500.", isCorrect: false },
      { id: "B", text: "Si un cliente solicita un directorio y no existe un archivo Ã­ndice (index.php, index.html), Apache mostrarÃ¡ el contenido de ese directorio. Si estuviera desactivado y no hubiera Ã­ndice, mostrarÃ­a '403 Forbidden'.", isCorrect: true },
      { id: "C", text: "Obliga a que todos los ficheros del directorio terminen en la extensiÃ³n .idx.", isCorrect: false },
      { id: "D", text: "Traduce automÃ¡ticamente los nombres de los archivos al idioma del navegador.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 8: 'Con Indexes si un cliente solicita un directorio y no existe un archivo Ã­ndice (index.php, index.html), Apache mostrarÃ¡ el contenido de ese directorio (si estuviera desactivado y no hubiera Ã­ndice mostrarÃ¡ \"403 Forbidden\").'",
    distractors: {
      A: "No tiene ninguna relaciÃ³n con Ã­ndices de bases de datos relacionales.",
      C: "No exige la extensiÃ³n .idx.",
      D: "No traduce nombres de ficheros."
    },
    trapNote: "Detalle de examen: Si falta index y no hay Indexes activo en Options, el error devuelto por Apache es estrictamente '403 Forbidden'."
  },
  {
    id: 122,
    level: "avanzado",
    topic: 6,
    topicName: "Directiva Options: FollowSymLinks y MultiViews",
    page: "XAMPP PÃ¡g. 8",
    question: "Â¿QuÃ© funciones tienen respectivamente las opciones `FollowSymLinks` y `MultiViews` en la directiva `Options` de Apache?",
    options: [
      { id: "A", text: "FollowSymLinks bloquea enlaces web y MultiViews permite abrir 4 pestaÃ±as a la vez.", isCorrect: false },
      { id: "B", text: "FollowSymLinks permite usar enlaces simbÃ³licos en el sistema de archivos, y MultiViews permite la 'negociaciÃ³n del contenido' (que el navegador escoja la mejor representaciÃ³n basÃ¡ndose en sus preferencias: ej. archivo.php o archivo.html).", isCorrect: true },
      { id: "C", text: "FollowSymLinks envÃ­a correos a administradores y MultiViews graba la pantalla.", isCorrect: false },
      { id: "D", text: "Ambas sirven para cifrar las contraseÃ±as guardadas en los archivos .htaccess.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 8: 'FollowSymLinks permite usar enlaces simbÃ³licos y MultiViews permite la \"negociaciÃ³n del contenido\" (que el navegador escoja la mejor representaciÃ³n del contenido basÃ¡ndose en sus preferencias: archivo.php o archivo.html).'",
    distractors: {
      A: "MultiViews es negociaciÃ³n de contenido HTTP (Content Negotiation), no pestaÃ±as del navegador.",
      C: "No envÃ­an correos ni graban vÃ­deo.",
      D: "No cifran contraseÃ±as."
    },
    trapNote: "MultiViews = NegociaciÃ³n de contenido (Content Negotiation segÃºn cabeceras Accept del cliente)."
  },
  {
    id: 123,
    level: "avanzado",
    topic: 6,
    topicName: "Directiva AllowOverride: All vs. None",
    page: "XAMPP PÃ¡g. 8",
    question: "En un bloque `<Directory>`, Â¿quÃ© controla la directiva `AllowOverride` y quÃ© diferencia existe entre asignarle `All` o `None`?",
    options: [
      { id: "A", text: "Controla si se puede sobreescribir el disco duro con un formateo rÃ¡pido desde la web.", isCorrect: false },
      { id: "B", text: "Controla si Apache permite que los archivos .htaccess dentro del directorio cambien la configuraciÃ³n. 'None' ignora cualquier .htaccess; 'All' permite que sobreescriban la configuraciÃ³n principal (redirecciones, contraseÃ±as, etc.).", isCorrect: true },
      { id: "C", text: "Controla si los alumnos pueden sobreescribir el examen de otros compaÃ±eros en el servidor de clase.", isCorrect: false },
      { id: "D", text: "Permite que PHP ejecute comandos de Python dentro del mismo hilo.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 8: 'AllowOverride controla si Apache permite que los archivos .htaccess dentro de ese directorio cambien la configuraciÃ³n... Con AllowOverride None se ignora cualquier archivo .htaccess. Con AllowOverride All se permite que los archivos .htaccess sobreescriban la configuraciÃ³n principal.'",
    distractors: {
      A: "No tiene que ver con formateo de discos.",
      C: "Es una directiva tÃ©cnica de Apache para archivos .htaccess descentralizados.",
      D: "No tiene relaciÃ³n con lenguajes de programaciÃ³n."
    },
    trapNote: "AllowOverride None = mayor rendimiento y seguridad (ignora .htaccess). AllowOverride All = mÃ¡xima flexibilidad para desarrolladores."
  },
  {
    id: 124,
    level: "medio",
    topic: 6,
    topicName: "Directiva Require: all granted vs. all denied",
    page: "XAMPP PÃ¡g. 8",
    question: "Â¿QuÃ© efecto tienen en Apache las directivas `Require all granted` y `Require all denied`?",
    options: [
      { id: "A", text: "Garantizan que el cÃ³digo PHP compile a cÃ³digo binario sin errores de sintaxis.", isCorrect: false },
      { id: "B", text: "'Require all granted' permite que todos los clientes tengan acceso al directorio especificado sin restricciones, mientras que 'Require all denied' bloquea el acceso a todos.", isCorrect: true },
      { id: "C", text: "'Require all granted' obliga a introducir usuario y contraseÃ±a en todas las peticiones.", isCorrect: false },
      { id: "D", text: "Son directivas exclusivas del servidor de correo Mercury Mail.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 8: 'Require all granted permite que todos los clientes tengan acceso al directorio especificado, sin restricciones. Require all denied bloquea el acceso a todos.'",
    distractors: {
      A: "Son directivas de control de acceso HTTP de Apache (mÃ³dulo mod_authz_core), no de compilaciÃ³n.",
      C: "all granted NO pide contraseÃ±a; concede acceso libre a todo el mundo.",
      D: "Son directivas de Apache HTTP Server, no de Mercury."
    },
    trapNote: "Require all granted = acceso pÃºblico permitido. Require all denied = acceso prohibido (403 Forbidden)."
  },
  {
    id: 125,
    level: "medio",
    topic: 6,
    topicName: "ConfiguraciÃ³n de PHP: php.ini y Comentarios",
    page: "XAMPP PÃ¡g. 9",
    question: "Â¿DÃ³nde se encuentra el archivo `php.ini` en XAMPP y quÃ© carÃ¡cter se utiliza para comentar lÃ­neas que no deben ejecutarse?",
    options: [
      { id: "A", text: "En C:\\xampp\\apache\\php.ini y se comenta con '#' (almohadilla).", isCorrect: false },
      { id: "B", text: "En C:\\xampp\\php\\php.ini (cuarta opciÃ³n del desplegable de Apache) y las lÃ­neas comentadas van precedidas por ';' (punto y coma).", isCorrect: true },
      { id: "C", text: "En C:\\xampp\\mysql\\bin\\php.ini y se comenta con comillas dobles '\"'.", isCorrect: false },
      { id: "D", text: "En C:\\htdocs\\php.ini y no admite comentarios de ningÃºn tipo.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 9: 'Al igual que el archivo de configuraciÃ³n de Apache, lo podemos encontrar en C:\\xampp\\php\\php.ini. En este caso, no se ejecutan todas las lÃ­neas, precedida por \";\" al igual que antes, si queremos activarlas, basta con quitar el \";\".'",
    distractors: {
      A: "En Apache es '#' pero en php.ini es el punto y coma ';'.",
      C: "No se encuentra en la carpeta de MySQL.",
      D: "SÃ­ admite comentarios y estÃ¡ en la carpeta php de XAMPP."
    },
    trapNote: "Recuerda: Apache httpd.conf = `#`. PHP php.ini = `;`. ClÃ¡sica pregunta de confusiÃ³n en examen."
  },
  {
    id: 126,
    level: "medio",
    topic: 6,
    topicName: "Directiva short_open_tag en php.ini",
    page: "XAMPP PÃ¡g. 9",
    question: "En `php.ini`, Â¿quÃ© delimitadores habilita la directiva `short_open_tag = On` y por quÃ© se recomienda expresamente utilizar siempre `<?php ... ?>`?",
    options: [
      { id: "A", text: "Habilita etiquetas de JavaScript; se recomienda para acelerar la carga en CSS.", isCorrect: false },
      { id: "B", text: "Habilita la notaciÃ³n abreviada <? ... ?>; se recomienda poner <?php ... ?> para identificar claramente el script porque se mezcla con otros lenguajes.", isCorrect: true },
      { id: "C", text: "Habilita etiquetas XML cerradas; se recomienda para no saturar el servidor MySQL.", isCorrect: false },
      { id: "D", text: "Habilita comentarios multilÃ­nea con /* y */; se recomienda para documentar funciones.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 9: 'Las etiquetas entre las que se escriben los script php son <?php ... ?>, pero tambiÃ©n es posible utilizar la notaciÃ³n abreviada, <? ... ?>, para que esta notaciÃ³n funcione, es necesario poner la directiva anterior a On. Se recomienda poner <?php ... ?> para identificar claramente el script, porque se mezcla con otros lenguajes.'",
    distractors: {
      A: "No tiene que ver con etiquetas de JavaScript.",
      C: "El uso de short_open_tag precisamente colisiona con el prÃ³logo XML <?xml ...?>.",
      D: "No afecta a los comentarios de bloque."
    },
    trapNote: "La notaciÃ³n recomendada y estÃ¡ndar PSR es siempre la etiqueta larga: `<?php ... ?>`."
  },
  {
    id: 127,
    level: "medio",
    topic: 6,
    topicName: "Directiva display_errors: Desarrollo vs. ProducciÃ³n",
    page: "XAMPP PÃ¡g. 9",
    question: "Â¿CuÃ¡l es la recomendaciÃ³n profesional respecto a la directiva `display_errors` en PHP durante el desarrollo frente al entorno de producciÃ³n?",
    options: [
      { id: "A", text: "Debe estar siempre en Off para no gastar tinta si se imprimen los errores en papel.", isCorrect: false },
      { id: "B", text: "Es recomendable poner 'display_errors = On' mientras se estÃ¡ programando para detectar fallos, pero cuando el programa estÃ¡ en producciÃ³n deben estar desactivados (Off) por seguridad.", isCorrect: true },
      { id: "C", text: "Debe estar en On en producciÃ³n para que los clientes finales puedan corregir el cÃ³digo del servidor.", isCorrect: false },
      { id: "D", text: "No tiene ningÃºn efecto en PHP 8 ya que los errores siempre se ocultan.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 9: 'Otra modificaciÃ³n a realizar es que muestre los errores que se produzcan. Esto es recomendable mientras se estÃ¡ programando, pero cuando el programa estÃ¡ en producciÃ³n estarÃ¡n desactivados.' Exponer errores en producciÃ³n revela rutas internas y datos sensibles a atacantes.",
    distractors: {
      A: "Los errores se muestran en pantalla en la respuesta HTTP, no en impresoras.",
      C: "Mostrar errores al cliente final en producciÃ³n es una grave brecha de seguridad.",
      D: "display_errors sigue siendo fundamental en PHP 8."
    },
    trapNote: "Desarrollo = On (depurar rÃ¡pido). ProducciÃ³n = Off (seguridad y registro privado en log)."
  },
  {
    id: 128,
    level: "medio",
    topic: 6,
    topicName: "Directiva error_reporting en XAMPP",
    page: "XAMPP PÃ¡g. 10",
    question: "SegÃºn la pÃ¡gina 10 de XAMPP, Â¿cuÃ¡l es el valor de la directiva `error_reporting` configurado por defecto?",
    options: [
      { id: "A", text: "error_reporting = 0", isCorrect: false },
      { id: "B", text: "error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT", isCorrect: true },
      { id: "C", text: "error_reporting = E_NOTICE | E_WARNING", isCorrect: false },
      { id: "D", text: "error_reporting = E_CORE_ERROR_ONLY", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 10: En la captura de php.ini se muestra explÃ­citamente: 'error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT'. El temario indica: 'Estas lÃ­neas la dejaremos como estÃ¡n con el valor por defecto. Si mÃ¡s adelante vemos que algunas notificaciones son molestas, las eliminaremos.'",
    distractors: {
      A: "error_reporting = 0 silenciarÃ­a todos los errores por completo.",
      C: "Muestra todos los errores (E_ALL) excluyendo avisos obsoletos y estrictos.",
      D: "No existe esa constante."
    },
    trapNote: "El operador virgulilla `~` excluye (NOT bit a bit) las constantes que le siguen."
  },
  {
    id: 129,
    level: "avanzado",
    topic: 6,
    topicName: "ConfiguraciÃ³n Inicial de MySQL: PolÃ­tica de ContraseÃ±as",
    page: "XAMPP PÃ¡g. 10",
    question: "Â¿QuÃ© instrucciÃ³n categÃ³rica da el temario en el apartado 3.3 respecto a poner contraseÃ±a al usuario 'root' de MySQL en esta fase inicial de instalaciÃ³n?",
    options: [
      { id: "A", text: "Es obligatorio ponerle una contraseÃ±a de 32 caracteres inmediatamente antes de pulsar Start.", isCorrect: false },
      { id: "B", text: "'MySQL no lo vamos a tocar. XAMPP no pone password al Administrador (root), no lo hagas, puesto que hay que cambiar la conexiÃ³n en phpMyAdmin y puede que no funcione. EstÃ¡s en local, y en nuestro caso no hay que protegerla.'", isCorrect: true },
      { id: "C", text: "Se debe eliminar el usuario root y crear un usuario llamado 'guest' con permisos totales.", isCorrect: false },
      { id: "D", text: "MySQL no admite contraseÃ±as bajo ninguna versiÃ³n de Windows.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 10: '3.3. CONFIGURANDO MYSQL: MySQL no lo vamos a tocar. Xampp no pone password al Administrador(root) no lo hagas, puesto que hay que cambiar la conexiÃ³n del mismo en phpMyAdmin y puede que no funcione. EstÃ¡s en local, y la base de datos en nuestro caso no hay que protegerla.'",
    distractors: {
      A: "Poner contraseÃ±a sin ajustar phpMyAdmin bloquea el acceso de la herramienta web.",
      C: "Nunca se debe borrar el usuario root inicial.",
      D: "MySQL soporta contraseÃ±as y cifrado completo en Windows."
    },
    trapNote: "En la fase 1 de instalaciÃ³n de XAMPP se aconseja NO tocar la clave de root para evitar romper phpMyAdmin, aunque en el tema siguiente de seguridad se enseÃ±a a hacerlo paso a paso."
  },

  // ==========================================================================
  // BLOQUE 7: CONFIGURACIÃ“N DE SEGURIDAD Y ACCESOS (PDF 3 - PÃ¡g. 1-3)
  // ==========================================================================
  {
    id: 130,
    level: "basico",
    topic: 7,
    topicName: "Acceso Inicial a phpMyAdmin en XAMPP",
    page: "Accesos PÃ¡g. 1",
    question: "Con la configuraciÃ³n inicial que XAMPP da a phpMyAdmin, Â¿cÃ³mo se realiza el acceso y por quÃ© razÃ³n?",
    options: [
      { id: "A", text: "Requiere autenticaciÃ³n de doble factor mediante una app en el mÃ³vil.", isCorrect: false },
      { id: "B", text: "Su acceso se hace sin login, ya que estÃ¡ pensado para ser usado para pruebas locales, sin ningÃºn tipo de seguridad.", isCorrect: true },
      { id: "C", text: "Exige el usuario 'admin' y la contraseÃ±a 'password123' por defecto.", isCorrect: false },
      { id: "D", text: "Solo se puede entrar si se introduce una tarjeta inteligente en el lector de tarjetas.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 1: 'Con la configuraciÃ³n inicial que XAMPP da a phpmyadmin, su acceso se hace sin login, ya que estÃ¡ pensado para ser usado para pruebas locales, sin ningÃºn tipo de seguridad.'",
    distractors: {
      A: "No utiliza 2FA por defecto.",
      C: "No pide login ni credenciales por defecto.",
      D: "No requiere hardware de tarjetas inteligentes."
    },
    trapNote: "ConfiguraciÃ³n inicial = acceso directo sin login (auth_type = 'config')."
  },
  {
    id: 131,
    level: "medio",
    topic: 7,
    topicName: "Fichero de ConfiguraciÃ³n de phpMyAdmin",
    page: "Accesos PÃ¡g. 1",
    question: "Â¿En quÃ© fichero se configuran las opciones de acceso y autenticaciÃ³n de phpMyAdmin en XAMPP?",
    options: [
      { id: "A", text: "En C:\\xampp\\apache\\conf\\httpd.conf.", isCorrect: false },
      { id: "B", text: "En el fichero 'config.inc.php', que se encuentra en la ruta de phpmyadmin (C:\\xampp\\phpMyAdmin).", isCorrect: true },
      { id: "C", text: "En C:\\xampp\\mysql\\data\\mysql.db.", isCorrect: false },
      { id: "D", text: "En C:\\xampp\\php\\php.ini.", isCorrect: false },
    ],
    explanation: "Accesos PÃ¡g. 1: 'Si queremos que se haga su acceso solicitando login, debemos hacer los siguientes cambios en el fichero config.inc.php que se encuentra en la ruta de phpmyadmin.'",
    distractors: {
      A: "httpd.conf es el servidor web Apache.",
      C: "mysql.db es un archivo interno de base de datos.",
      D: "php.ini configura el intÃ©rprete PHP, no los parÃ¡metros de phpMyAdmin."
    },
    trapNote: "Fichero clave: `config.inc.php` dentro de la carpeta `phpMyAdmin`."
  },
  {
    id: 132,
    level: "avanzado",
    topic: 7,
    topicName: "Habilitar Formulario de Login: auth_type cookie",
    page: "Accesos PÃ¡g. 1",
    question: "Para solicitar formulario de login con ventana emergente al acceder a phpMyAdmin, Â¿quÃ© lÃ­nea debe modificarse en `config.inc.php`?",
    options: [
      { id: "A", text: "Cambiar $cfg['Login'] = true;", isCorrect: false },
      { id: "B", text: "Comentar //$cfg['Servers'][$i]['auth_type'] = 'config'; y aÃ±adir $cfg['Servers'][$i]['auth_type'] = 'cookie';", isCorrect: true },
      { id: "C", text: "Cambiar $cfg['Servers'][$i]['auth_type'] = 'session_token_bearer';", isCorrect: false },
      { id: "D", text: "Cambiar AuthType Basic en el fichero php.ini.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 1: '//$cfg['Servers'][$i]['auth_type'] = 'config'; $cfg['Servers'][$i]['auth_type'] = 'cookie'; //para solicitar formulario de login. De esta manera ya nos aparecerÃ¡ la ventana de login al acceder a phpmyadmin.'",
    distractors: {
      A: "La directiva no se llama $cfg['Login'].",
      C: "El valor estÃ¡ndar de phpMyAdmin es 'cookie' (o 'http'), no 'session_token_bearer'.",
      D: "AuthType Basic es una directiva de Apache, no de config.inc.php."
    },
    trapNote: "De 'config' (automÃ¡tico e inseguro) a 'cookie' (solicita usuario y contraseÃ±a por formulario web)."
  },
  {
    id: 133,
    level: "avanzado",
    topic: 7,
    topicName: "Acceso sin ContraseÃ±a: AllowNoPassword",
    page: "Accesos PÃ¡g. 1-2",
    question: "Tras cambiar `auth_type` a `'cookie'`, Â¿por quÃ© inicialmente se puede seguir accediendo sin introducir contraseÃ±a y quÃ© cambio se requiere para que sea obligatoria?",
    options: [
      { id: "A", text: "Porque Windows ignora las cookies; hay que reiniciar el ordenador 3 veces.", isCorrect: false },
      { id: "B", text: "Porque por defecto AllowNoPassword estÃ¡ a true; para que la contraseÃ±a sea obligatoria se debe cambiar: $cfg['Servers'][$i]['AllowNoPassword'] = false;", isCorrect: true },
      { id: "C", text: "Porque MySQL siempre permite entrar con cualquier contraseÃ±a que empiece por '123'.", isCorrect: false },
      { id: "D", text: "Porque Apache requiere instalar una extensiÃ³n de pago en la web oficial.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 1-2: 'Podremos acceder a phpmyadmin sin introducir contraseÃ±a. Si queremos que la contraseÃ±a sea obligatoria, debemos cambiar esta lÃ­nea en el config.inc.php: //$cfg['Servers'][$i]['AllowNoPassword'] = true; $cfg['Servers'][$i]['AllowNoPassword'] = false;'.",
    distractors: {
      A: "Windows no ignora cookies y reiniciar el PC no cambia la configuraciÃ³n del script.",
      C: "MySQL no tiene ninguna regla con '123'.",
      D: "phpMyAdmin y Apache son 100% gratuitos y de cÃ³digo abierto."
    },
    trapNote: "Para obligar a escribir clave: `AllowNoPassword = false`."
  },
  {
    id: 134,
    level: "medio",
    topic: 7,
    topicName: "Mensaje de Error de AllowNoPassword",
    page: "Accesos PÃ¡g. 2",
    question: "Si se configura `AllowNoPassword = false` y el usuario root no tiene contraseÃ±a e intenta acceder a phpMyAdmin sin escribir clave, Â¿quÃ© mensaje de error exacto muestra la pantalla?",
    options: [
      { id: "A", text: "'Error 404 Not Found: Servidor de base de datos no localizado'.", isCorrect: false },
      { id: "B", text: "'El inicio de sesiÃ³n sin contraseÃ±a estÃ¡ prohibido por la configuraciÃ³n (ver AllowNoPassword)'.", isCorrect: true },
      { id: "C", text: "'ContraseÃ±a incorrecta: le quedan 2 intentos antes del bloqueo'.", isCorrect: false },
      { id: "D", text: "'Acceso concedido temporalmente en modo de emergencia'.", isCorrect: false },
    ],
    explanation: "Accesos PÃ¡g. 2: La captura oficial de phpMyAdmin muestra el aviso en recuadro rosa: 'El inicio de sesiÃ³n sin contraseÃ±a estÃ¡ prohibido por la configuraciÃ³n (ver AllowNoPassword)'.",
    distractors: {
      A: "No es un error 404 HTTP de archivo no encontrado.",
      C: "No hay lÃ­mite de intentos ni contador de bloqueos.",
      D: "No existe modo de emergencia en phpMyAdmin."
    },
    trapNote: "FÃ­jate en la cita literal: '(ver AllowNoPassword)'."
  },
  {
    id: 135,
    level: "basico",
    topic: 7,
    topicName: "ContraseÃ±a Inicial de root",
    page: "Accesos PÃ¡g. 2",
    question: "Â¿QuÃ© contraseÃ±a tiene por defecto el usuario administrador 'root' de MySQL en una instalaciÃ³n reciÃ©n completada de XAMPP?",
    options: [
      { id: "A", text: "Tiene la contraseÃ±a 'admin'.", isCorrect: false },
      { id: "B", text: "Tiene la contraseÃ±a 'root'.", isCorrect: false },
      { id: "C", text: "El usuario root NO tiene contraseÃ±a (estÃ¡ completamente vacÃ­a).", isCorrect: true },
      { id: "D", text: "Tiene una clave aleatoria generada en el archivo passwords.txt.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 2: 'El usuario root no tiene contraseÃ±a, se la podemos poner de la siguiente manera, desde la shell de xampp o desde el disco duro en la ruta de mysql/bin.'",
    distractors: {
      A: "No tiene 'admin'.",
      B: "Trampa clÃ¡sica: en muchas distribuciones Linux es 'root', pero en XAMPP para Windows estÃ¡ vacÃ­a (sin contraseÃ±a).",
      D: "No genera contraseÃ±as aleatorias."
    },
    trapNote: "Â¡Ojo al examen! En XAMPP, el usuario root NO tiene contraseÃ±a inicial."
  },
  {
    id: 136,
    level: "avanzado",
    topic: 7,
    topicName: "AsignaciÃ³n Inicial de Clave con mysqladmin",
    page: "Accesos PÃ¡g. 2",
    question: "Â¿CuÃ¡l es el comando exacto que se utiliza para asignar por primera vez una contraseÃ±a al usuario root cuando este AÃšN NO TIENE contraseÃ±a?",
    options: [
      { id: "A", text: "mysql -u root set password = 'nueva'", isCorrect: false },
      { id: "B", text: "mysqladmin -u root password", isCorrect: true },
      { id: "C", text: "mysqladmin -u root -p password nueva_contraseÃ±a", isCorrect: false },
      { id: "D", text: "passwd root --xampp", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 2: 'El usuario root no tiene contraseÃ±a, se la podemos poner de la siguiente manera...: mysqladmin -u root password (Nos pide la nueva contraseÃ±a). Este comando se utiliza cuando root no tiene aÃºn contraseÃ±a.'",
    distractors: {
      A: "mysql es el cliente interactivo SQL; para gestiÃ³n administrativa rÃ¡pida de contraseÃ±as se usa la utilidad mysqladmin.",
      C: "El flag -p se usa cuando root YA tiene contraseÃ±a previa (para pedir la antigua).",
      D: "passwd es una orden de Linux para cuentas del sistema operativo."
    },
    trapNote: "Cuando NO tiene clave: `mysqladmin -u root password` (sin el flag `-p`)."
  },
  {
    id: 137,
    level: "avanzado",
    topic: 7,
    topicName: "Cambio de Clave Existente con mysqladmin: Flag -p",
    page: "Accesos PÃ¡g. 2",
    question: "Una vez que el usuario root YA tiene una contraseÃ±a establecida, Â¿quÃ© comando exacto se debe ejecutar para cambiarla por una nueva?",
    options: [
      { id: "A", text: "mysqladmin -u root password", isCorrect: false },
      { id: "B", text: "mysqladmin -u root -p password nueva_contraseÃ±a", isCorrect: true },
      { id: "C", text: "alter user root identified by 'nueva';", isCorrect: false },
      { id: "D", text: "xampp-cli mysql change-root-key nueva_contraseÃ±a", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 2: 'Una vez que tiene contraseÃ±a root, podrÃ­amos cambiarla con este comando: mysqladmin -u root -p password nueva_contraseÃ±a (Nos pedirÃ¡ a continuaciÃ³n la antigua para realizar el cambio de contraseÃ±a).'",
    distractors: {
      A: "Sin -p fallarÃ¡ con error de acceso denegado porque root ya tiene contraseÃ±a.",
      C: "Esa es la sentencia SQL dentro del cliente mysql, no el comando ejecutable de consola mysqladmin.",
      D: "Ese comando no existe en XAMPP."
    },
    trapNote: "El parÃ¡metro `-p` es indispensable para que solicite por pantalla la contraseÃ±a antigua antes de asignar la nueva."
  },
  {
    id: 138,
    level: "medio",
    topic: 7,
    topicName: "UbicaciÃ³n de mysqladmin",
    page: "Accesos PÃ¡g. 2",
    question: "Â¿Desde quÃ© dos lugares indica el temario que podemos ejecutar la herramienta `mysqladmin`?",
    options: [
      { id: "A", text: "Desde el navegador web en localhost/mysqladmin o desde Word.", isCorrect: false },
      { id: "B", text: "Desde el botÃ³n 'Shell' del panel de control de XAMPP o desde el disco duro en la ruta 'C:\\xampp\\mysql\\bin'.", isCorrect: true },
      { id: "C", text: "Exclusivamente desde una mÃ¡quina virtual con Ubuntu Server.", isCorrect: false },
      { id: "D", text: "Desde la BIOS del ordenador antes de iniciar Windows.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 2: '...se la podemos poner de la siguiente manera, desde la shell de xampp o desde el disco duro en la ruta de mysql/bin.'",
    distractors: {
      A: "mysqladmin es una herramienta ejecutable de consola (.exe), no una pÃ¡gina web.",
      C: "Se ejecuta en Windows de forma nativa.",
      D: "No tiene que ver con la BIOS."
    },
    trapNote: "BotÃ³n 'Shell' en la parte derecha del Panel de Control de XAMPP o terminal CMD en `mysql/bin`."
  },
  {
    id: 139,
    level: "medio",
    topic: 7,
    topicName: "ResoluciÃ³n de URLs en Apache",
    page: "Accesos PÃ¡g. 3",
    question: "SegÃºn el ejemplo de la pÃ¡gina 3, cuando un cliente introduce la URL `http://servidor.web/carpeta/archivo.html`, Â¿dÃ³nde busca exactamente Apache ese archivo en XAMPP?",
    options: [
      { id: "A", text: "En C:\\xampp\\carpeta\\archivo.html fuera de cualquier DocumentRoot.", isCorrect: false },
      { id: "B", text: "En la carpeta principal donde se alojan las pÃ¡ginas web (DocumentRoot), que en XAMPP es htdocs, con la ruta: C:/xampp/htdocs/carpeta/archivo.html.", isCorrect: true },
      { id: "C", text: "En la nube de GitHub dentro de un repositorio pÃºblico.", isCorrect: false },
      { id: "D", text: "En C:\\Windows\\System32\\carpeta\\archivo.html.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 3: 'Normalmente, cuando se indica una URL como la siguiente http://servidor.web/carpeta/archivo.html, estamos buscando el archivo llamado archivo.html en la carpeta llamada carpeta que se debe encontrar en la carpeta principal del servidor web donde se alojan las pÃ¡ginas web (DocumentRoot) que en xampp es htdocs (la ruta serÃ­a: c:/xampp/htdocs/carpeta/archivo.html).'",
    distractors: {
      A: "No busca en la raÃ­z de xampp; busca dentro del DocumentRoot (htdocs).",
      C: "No busca en GitHub.",
      D: "No busca en las carpetas del sistema Windows."
    },
    trapNote: "Ruta fÃ­sica calculada: `DocumentRoot + ruta de la URL`."
  },
  {
    id: 140,
    level: "avanzado",
    topic: 7,
    topicName: "DefiniciÃ³n y Objetivo de la directiva Alias",
    page: "Accesos PÃ¡g. 3",
    question: "Â¿Para quÃ© sirve la directiva `Alias` en la configuraciÃ³n del servidor web Apache y quÃ© formato obligatorio tiene?",
    options: [
      { id: "A", text: "Para renombrar variables dentro de un script PHP; formato 'Alias $var1 $var2'.", isCorrect: false },
      { id: "B", text: "Para redireccionar la ruta de una direcciÃ³n web a una carpeta que no se encuentre forzosamente dentro de la especificada como DocumentRoot; formato 'Alias ruta-URL ruta-carpeta'.", isCorrect: true },
      { id: "C", text: "Para crear apodos de usuarios en el chat de phpMyAdmin.", isCorrect: false },
      { id: "D", text: "Para cambiar la clave de acceso de MySQL sin usar mysqladmin.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 3: 'En la configuraciÃ³n del servidor web Apache es posible crear alias para redireccionar la ruta de una direcciÃ³n web a una carpeta que no se encuentre forzosamente dentro de la especificada como DocumentRoot. Para ello se debe usar la directiva alias con el siguiente formato: Alias ruta-URL ruta-carpeta.'",
    distractors: {
      A: "Es una directiva de Apache para mapeo de directorios, no para variables de PHP.",
      C: "No es un sistema de mensajerÃ­a.",
      D: "No cambia contraseÃ±as de bases de datos."
    },
    trapNote: "Un Alias 'engaÃ±a' al cliente web haciendo que una carpeta externa parezca estar dentro del servidor web."
  },
  {
    id: 141,
    level: "avanzado",
    topic: 7,
    topicName: "RestricciÃ³n de phpMyAdmin por Defecto: Require local",
    page: "Accesos PÃ¡g. 3",
    question: "En el fichero `httpd-xampp.conf`, dentro del bloque `<Directory \"C:/xampp/phpMyAdmin\">`, Â¿quÃ© significa la directiva por defecto `Require local`?",
    options: [
      { id: "A", text: "Que phpMyAdmin solo puede guardar bases de datos en discos duros locales y no en memorias USB.", isCorrect: false },
      { id: "B", text: "Que solamente se podrÃ¡ acceder a phpMyAdmin desde el mismo equipo en el que se encuentra instalado (localhost / 127.0.0.1).", isCorrect: true },
      { id: "C", text: "Que solo funciona si el ordenador no tiene conexiÃ³n de red fÃ­sica conectada.", isCorrect: false },
      { id: "D", text: "Que los alumnos locales tienen prioridad sobre los profesores.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 3: 'Como vemos, en el fichero hay creado un alias para phpmyadmin, en el que se le indica un permiso Require local que indica que sÃ³lamente se podrÃ¡ acceder a phpmyadmin desde el mismo equipo en el que se encuentra instalado.'",
    distractors: {
      A: "No controla los medios de almacenamiento fÃ­sico.",
      C: "Puede haber conexiÃ³n de red, pero Apache rechazarÃ¡ las peticiones provenientes de otras IPs.",
      D: "No distingue entre roles acadÃ©micos."
    },
    trapNote: "Require local = solo peticiones originadas desde la propia mÃ¡quina local (loopback)."
  },
  {
    id: 142,
    level: "avanzado",
    topic: 7,
    topicName: "Permitir Acceso a phpMyAdmin desde Toda la Red (LAN)",
    page: "Accesos PÃ¡g. 3",
    question: "Para poder administrar phpMyAdmin desde cualquier equipo o IP de la red local, Â¿quÃ© cambio exacto debe realizarse en `httpd-xampp.conf`?",
    options: [
      { id: "A", text: "Cambiar la lÃ­nea 'Require local' por 'Require all granted' dentro del bloque <Directory \"C:/xampp/phpMyAdmin\"> y reiniciar Apache.", isCorrect: true },
      { id: "B", text: "Borrar el fichero httpd-xampp.conf por completo.", isCorrect: false },
      { id: "C", text: "Cambiar 'Require local' por 'Require user admin'.", isCorrect: false },
      { id: "D", text: "Poner 'AllowOverride None' en el archivo php.ini.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 3: 'Modificamos la lÃ­nea Require local por Require all granted: <Directory \"C:/xampp/phpMyAdmin\"> AllowOverride AuthConfig Require all granted ErrorDocument 403 /error/XAMPP_FORBIDDEN.html.var </Directory>. De esta manera permitimos el acceso al alias phpmyadmin desde cualquier IP.'",
    distractors: {
      B: "Borrar el fichero romperÃ­a la configuraciÃ³n de XAMPP.",
      C: "Require user requerirÃ­a configuraciÃ³n previa de autenticaciÃ³n HTTP que no se ha realizado.",
      D: "php.ini no gestiona directivas de Apache."
    },
    trapNote: "De `Require local` (solo yo) a `Require all granted` (cualquier equipo de la red)."
  },
  {
    id: 143,
    level: "medio",
    topic: 7,
    topicName: "AsignaciÃ³n de Permisos: Bloque Directory",
    page: "Accesos PÃ¡g. 3",
    question: "Â¿QuÃ© directiva contenedora de Apache es indispensable utilizar para asignar permisos de seguridad y acceso una vez establecido un Alias?",
    options: [
      { id: "A", text: "<VirtualHost>", isCorrect: false },
      { id: "B", text: "<Directory>", isCorrect: true },
      { id: "C", text: "<LocationMatch>", isCorrect: false },
      { id: "D", text: "<FilesSecurity>", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 3: 'Una vez establecido el alias debes recordar asignar los permisos adecuados usando la directiva <Directory>.' En ella se configuran AllowOverride, Options y Require.",
    distractors: {
      A: "<VirtualHost> es para alojar mÃºltiples dominios en un mismo servidor.",
      C: "<LocationMatch> aplica a URLs mediante expresiones regulares, no rutas de carpetas de disco.",
      D: "FilesSecurity no existe como directiva estÃ¡ndar en Apache."
    },
    trapNote: "`Alias` define la ruta web; `<Directory>` define quÃ© estÃ¡ permitido hacer dentro de esa carpeta fÃ­sica."
  },
  {
    id: 144,
    level: "medio",
    topic: 7,
    topicName: "GestiÃ³n de Errores: ErrorDocument 403",
    page: "Accesos PÃ¡g. 3",
    question: "En el bloque `<Directory \"C:/xampp/phpMyAdmin\">`, Â¿quÃ© funciÃ³n tiene la directiva `ErrorDocument 403 /error/XAMPP_FORBIDDEN.html.var`?",
    options: [
      { id: "A", text: "EnvÃ­a un virus a cualquier usuario que cometa un error en la base de datos.", isCorrect: false },
      { id: "B", text: "Personaliza la pÃ¡gina mostrada cuando un cliente intenta acceder sin permisos (error 403 Prohibido), mostrando una pantalla informativa de advertencia de XAMPP.", isCorrect: true },
      { id: "C", text: "Obliga al usuario a reiniciar el router si se desconecta de la red.", isCorrect: false },
      { id: "D", text: "Registra en una tabla MySQL las contraseÃ±as incorrectas introducidas.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 3: ErrorDocument 403 define el documento personalizado que Apache entrega cuando se rechaza el acceso por directivas Require (HTTP 403 Forbidden).",
    distractors: {
      A: "No envÃ­a malware.",
      C: "No reinicia routers.",
      D: "No interactÃºa con bases de datos relacionales; es una directiva nativa de Apache."
    },
    trapNote: "Error 403 = Forbidden (Acceso denegado o prohibido)."
  },
  {
    id: 145,
    level: "avanzado",
    topic: 7,
    topicName: "Cadena de SecurizaciÃ³n Completa de phpMyAdmin",
    page: "Accesos PÃ¡g. 1-3",
    question: "Â¿CuÃ¡l es la secuencia completa y coherente de acciones para securizar phpMyAdmin en local segÃºn la guÃ­a oficial?",
    options: [
      { id: "A", text: "1. Desinstalar XAMPP. 2. Instalar Linux. 3. Rezar para que funcione.", isCorrect: false },
      { id: "B", text: "1. En config.inc.php cambiar auth_type a 'cookie'. 2. En config.inc.php poner AllowNoPassword a false. 3. Asignar contraseÃ±a a root con 'mysqladmin -u root password'.", isCorrect: true },
      { id: "C", text: "1. Poner AllowNoPassword a true. 2. Cambiar auth_type a 'config'. 3. Borrar el usuario root.", isCorrect: false },
      { id: "D", text: "1. Cambiar el puerto de Apache a 8080. 2. Ejecutar phpinfo(). 3. Apagar el cortafuegos.", isCorrect: false }
    ],
    explanation: "Accesos PÃ¡g. 1-2: Pasos: 1) Activar formulario de login con auth_type = 'cookie'. 2) Impedir logins sin clave con AllowNoPassword = false. 3) Poner contraseÃ±a al usuario root con mysqladmin -u root password. Con estas 3 acciones se consigue que para acceder a phpmyadmin desde local pida credenciales de forma estricta.",
    distractors: {
      A: "Es una respuesta humorÃ­stica no tÃ©cnica.",
      C: "Esa configuraciÃ³n dejarÃ­a el sistema completamente desprotegido.",
      D: "No tiene nada que ver con phpinfo ni cortafuegos."
    },
    trapNote: "Esta secuencia de 3 pasos (cookie + AllowNoPassword false + mysqladmin password) es la prÃ¡ctica evaluable tÃ­pica de examen de taller DWES."
  },
  {
    id: 146,
    level: "medio",
    topic: 7,
    topicName: "Cambio de Entorno: Local vs. Hosting de ProducciÃ³n",
    page: "XAMPP PÃ¡g. 10",
    question: "En el tema 3.3 de XAMPP, Â¿quÃ© ocurrirÃ¡ con el usuario Administrador y la contraseÃ±a cuando la aplicaciÃ³n web desarrollada en local se suba a un servidor de hosting o dominio definitivo en Internet?",
    options: [
      { id: "A", text: "El servidor de hosting utilizarÃ¡ automÃ¡ticamente la misma contraseÃ±a que tenÃ­amos en nuestro PC local de clase.", isCorrect: false },
      { id: "B", text: "CambiarÃ¡ el usuario administrador (te lo proporcionarÃ¡ el servidor de hosting contratado), asÃ­ como el nombre de la base de datos y la contraseÃ±a, por lo que habrÃ¡ que actualizar la conexiÃ³n de la aplicaciÃ³n.", isCorrect: true },
      { id: "C", text: "El hosting borrarÃ¡ todos los scripts PHP porque solo admite archivos HTML planos.", isCorrect: false },
      { id: "D", text: "SerÃ¡ obligatorio viajar fÃ­sicamente al centro de datos del proveedor para teclear la contraseÃ±a en su teclado.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 10: 'Cuando la aplicaciÃ³n suba al dominio web cambiarÃ¡ el usuario administrador (te lo darÃ¡ el servidor que contrates) asÃ­ como el nombre de la base de datos, y la contraseÃ±a serÃ¡ la que luego tengas. Por tanto, aunque la cambies, posteriormente tendrÃ¡s que hacerlo otra vez.'",
    distractors: {
      A: "Los proveedores de hosting asignan usuarios y bases de datos aisladas por seguridad multiusuario.",
      C: "Los hostings PHP soportan bases de datos y scripts dinÃ¡micos.",
      D: "La configuraciÃ³n se realiza de forma remota vÃ­a panel de control (cPanel, Plesk) o SSH."
    },
    trapNote: "En local trabajamos con `root` sin contraseÃ±a para agilidad; en producciÃ³n el hosting proporciona credenciales seguras dedicadas."
  },
  {
    id: 147,
    level: "avanzado",
    topic: 7,
    topicName: "Reinicio de Apache tras Cambios de ConfiguraciÃ³n",
    page: "XAMPP PÃ¡g. 8; Accesos PÃ¡g. 3",
    question: "Â¿Por quÃ© tras modificar `httpd.conf` o `httpd-xampp.conf` los cambios NO tienen efecto inmediato en el navegador y quÃ© acciÃ³n es obligatoria?",
    options: [
      { id: "A", text: "Porque Windows guarda una copia en cachÃ© del disco durante 24 horas y no hay forma de forzarlo.", isCorrect: false },
      { id: "B", text: "Porque Apache solo lee sus ficheros de configuraciÃ³n al arrancar el servicio; para que los cambios tengan efecto hay que parar (Stop) e iniciar (Start) Apache.", isCorrect: true },
      { id: "C", text: "Porque hay que recompilar Apache con Visual Studio Code en cada cambio.", isCorrect: false },
      { id: "D", text: "Porque hay que borrar las cookies del navegador de los Ãºltimos 3 meses.", isCorrect: false }
    ],
    explanation: "XAMPP PÃ¡g. 8 y Accesos PÃ¡g. 3: 'Para que los cambios tengan efecto hay que parar e iniciar Apache.' Apache carga la configuraciÃ³n en memoria en el arranque de su proceso; no sondea el archivo en caliente para evitar sobrecarga de I/O.",
    distractors: {
      A: "No hay espera de 24 horas; basta con reiniciar el proceso.",
      C: "No se recompila nada; es un servidor precompilado.",
      D: "Las cookies del cliente no afectan a la configuraciÃ³n del servidor web Apache."
    },
    trapNote: "Regla sagrada de administraciÃ³n: 'Todo cambio en ficheros de Apache requiere parada y arranque del servicio para entrar en vigor'."
  }

];

// ComprobaciÃ³n de integridad
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUESTIONS_DATA };
}
