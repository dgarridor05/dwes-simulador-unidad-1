
1
Instalación de un servidor XAMPP
INSTALACIÓN DE UN SERVIDOR XAMPP
1. ¿QUÉ ES XAMPP?......................................................................................................... 1
2. INSTALACIÓN DE XAMPP EN WINDOWS....................................................................2
3. CONFIGURANDO........................................................................................................... 7
3.1. CONFIGURANDO APACHE................................................................................... 7
3.2. CONFIGURANDO PHP.......................................................................................... 9
3.3. CONFIGURANDO MYSQL................................................................................... 10
1. ¿QUÉ ES XAMPP?
XAMPP es una herramienta de desarrollo que te permite probar tu desarrollo web
basado en PHP en tu propio ordenador sin necesidad de tener acceso a Internet. Si eres
un diseñador web o desarrollador web que está comenzando, no es necesario saber
sobre las configuraciones de servidores (aún), ya que XAMPP te provee de una
configuración totalmente funcional desde el momento que lo instalas. Básicamente lo
extraes y listo. Es bueno recordar que la seguridad de datos no es su punto fuerte, por lo
cual no es suficientemente seguro para ambientes grandes o de producción.
XAMPP es una distribución de Apache que incluye diferentes softwares libres. El
nombre es un acrónimo compuesto por las iniciales de los programas que lo constituyen:
X - Multiplataforma: funciona en Linux, Windows y macOS. Nosotros los vamos a
instalar en Windows, porque nos va ser más cómodo de usar, pero hay que tener en
cuenta que los servidores web están habitualmente en Linux, por tanto, cuida bien la
programación de la aplicación, ya que puede ocurrir que el servidor final no la
reconozca. Por ejemplo, Linux distingue mayúscula y minúscula, cosa que no ocurre en
Windows.
A - Apache: es el servidor web de código abierto usado globalmente para la
entrega de contenidos web. Recibe peticiones HTTP (cuando escribes una URL en el
navegador) y responde con páginas web. El servidor web Apache es software libre y es
desarrollado y mantenido por la Apache Software Foundation.
3. MySQL/MariaDB: XAMPP cuenta con uno de los sistemas relacionales de gestión de
bases de datos más populares del mundo. En combinación con el servidor web Apache
1 de 10
Instalación de un servidor XAMPP
y el lenguaje PHP, MySQL sirve para el almacenamiento de datos para servicios web. En
las versiones actuales de XAMPP esta base de datos se ha sustituido por MariaDB.
4. PHP: lenguaje de programación del lado del servidor que permite crear páginas web o
aplicaciones dinámicas. Es independiente de la plataforma y soporta varios sistemas de
bases de datos.
5. Perl: este lenguaje de programación se usa en la administración del sistema, en el
desarrollo web y en la programación de red. También permite programar aplicaciones
web dinámicas.
Además de estos componentes principales, esta distribución gratuita también
incluye, según el sistema operativo, otras herramientas como:
● Mercury Mail: servidor de correo incluido en XAMPP para Windows.
● phpMyAdmin: herramienta para administración de bases de datos MySQL /
MaríaDB.
● Webalizer: herramienta de análisis de logs de servidores web.
● Apache Tomcat: servidor de aplicaciones Java (para JSP/Servlets).
● Servidores FTP: FileZilla Server o ProFTPd.
2. INSTALACIÓN DE XAMPP EN WINDOWS
Un servidor XAMPP se puede instalar rápido y fácilmente en un sistema Linux, y en
Windows con un único archivo ejecutable. El paquete del software contiene los mismos
componentes que se utilizan en cualquier servidor web, de forma que permite a los
desarrolladores probar proyectos localmente y transferirlos cómodamente a sistemas
reales.
Antes de instalar XAMPP, por supuesto será necesario la descarga de este
paquete. Para ello nos vamos a dirigir a su página web y elegir la descarga del sistema
operativo que tengamos. La aplicación se encuentra en un único archivo ejecutable, y
basta con ejecutar el mismo, y dar siempre a siguiente.
En algún momento, puede ser que se muestre un aviso del cortafuegos de
Windows para autorizar a Apache a comunicarse en las redes privadas o públicas. Una
vez elegidas las opciones deseadas (se recomienda permitir las redes privadas y
denegar las redes públicas para la configuración del firewall), hacer clic en el botón
2 de 10
Instalación de un servidor XAMPP
“Permitir acceso”.
Una vez instalado XAMPP, debemos ejecutar el panel de control. Es importante
hacerlo en modo administrador porque el servidor web, por medidas de seguridad,
solamente arranca en este modo.
Iniciar
Para iniciar los servicios de Xampp, haremos un click en Start y para detenerlos un
3 de 10
Instalación de un servidor XAMPP
click en Stop. Nosotros vamos a arrancar solamente Apache y MySQL (MaríaDB) en
principio.
Como vemos, se han coloreado en verde y se muestra el puerto por el que
escucha cada uno de los servicios correspondientes. Abajo aparece que la ejecución ha
sido satisfactoria o no.
Ahora probaremos en Xampp desde el navegador, utilizando la IP de loopback o
localhost 127.0.0.1 o también utilizaremos el nombre de localhost, ya que de esta
manera se accede a servicios locales.
Si todo funciona correctamente, nos aparecerá la siguiente pantalla:
Para comprobar que también el servidor de la base de datos funciona
4 de 10
Instalación de un servidor XAMPP
correctamente, ejecutaremos desde el navegador la aplicación phpMyAdmin que nos
proporciona el paquete y que permite la administración de la base de datos.
Una vez comprobado que todo funciona correctamente, vamos a configurar
Xampp. Para ello nos vamos al directorio donde está instalado XAMPP, en la unidad C:\
La carpeta htdocs es la conocida como DocumentRoot, en la que Apache buscará
todas las aplicaciones PHP. Por tanto, para ejecutarlas, deben estar guardadas en
principio en esa carpeta. El contenido inicial de la misma es este:
5 de 10
Instalación de un servidor XAMPP
En la imagen anterior se ve un archivo index.php. Apache está configurado para
que, al acceder a un directorio, cualquier archivo con el nombre de index.php se ejecute
de forma automática, y por eso aparece la pantalla que vimos al principio, para
comprobar que Apache funciona.
Si le cambiamos el nombre a este fichero o lo eliminamos, el navegador mostraría
todos los archivos y directorios que haya dentro del DocumentRoot (a esto se le llama el
examen de directorios en servidores web). Lo que haré será renombrar el archivo como
index1.php y veremos que se accede a la estructura del disco.
Todos los php guardados en la carpeta htdocs pueden ser ejecutados directamente
por el servidor web (ya que es el DocumentRoot por defecto de Apache). Si no
cambiamos nada en la configuración, al acceder al servidor web se mostrará por defecto
el index.php contenido en esta ruta.
Para simplificar nuestro trabajo en clase y por seguridad, creamos un directorio en
c:/xampp que llamaremos: aplicacionesclase. En ella vamos a guardar nuestros
programas. Pero para poder acceder a ella tendremos que realizar un paso en la
configuración de Apache.
6 de 10
Instalación de un servidor XAMPP
3. CONFIGURANDO
Accedemos al panel de control y pulsamos en config. Recordamos que hemos
arrancado XAMPP en modo administrador. Por defecto el editor para cambiar los
archivos de configuración es notepad, podemos cambiarlo al editor que queramos.
Podemos marcar los check de Apache y MySQL para que se arranquen al ejecutar
XAMPP.
3.1. CONFIGURANDO APACHE
Lo primero que debemos hacer es parar el proceso. Después accedemos a la
configuración de Apache. Aparece un desplegable, elegimos la primera opción: Apache
(httpd.conf). Este es el archivo de configuración de Apache, que se encuentra en:
C:\xampp\apache\conf.
Todas las líneas precedidas por “#” no serán ejecutadas. Para activarlas, basta con
quitar la “#”. Vamos a ver aquellas que nos interesan, y que puede ser, que tengamos o
queramos modificar (yo no he movido nada).
Son el nombre del servidor, que generalmente se llama localhost, como hemos
dicho anteriormente (esto es una norma de facto, lo llama todo el mundo igual, y por eso
no debemos modificarlo) y generalmente sale por el puerto 80. Si el SO te diera un
conflicto con el puerto (esto empezó a ocurrir con win10, pero lo subsanaron), se suele
cambiar por el 8080.
Ya hemos hablado del DocumentRoot, es el directorio donde Apache buscará las
aplicaciones. Dejamos este para guardarlos todos en el mismo sitio en clase.
Ahora debemos configurar Apache para que podamos acceder a la carpeta
7 de 10
Instalación de un servidor XAMPP
C:/xampp/aplicacionesclase/ donde almacenaremos nuestros trabajos. Para ello
tenemos que trabajar con los Alias, una forma de poder separar nuestro sitio web del
htdocs (DocumentRoot por defecto de Apache). Para ello editamos el fichero
httpd-xampp.conf desde la consola de administración de Apache en Xampp, y después
de las líneas donde se configura phpmyadmin añadimos:
Para que los cambios tengan efecto hay que parar e iniciar Apache.
Con esto conseguimos poder acceder a nuestros trabajos de clase, buscando en el
navegador con localhost/aplicacionesclase.
● Options define qué está permitido. Con Indexes si un cliente solicita un
directorio y no existe un archivo índice (index.php, index.html), Apache
mostrará el contenido de ese directorio (si estuviera desactivado y no
hubiera índice mostrará “403 Forbidden”). FollowSymLinks permite usar
enlaces simbólicos y MultiViews permite la “negociación del contenido” (que
el navegador escoja la mejor representación del contenido basándose en
sus preferencias: archivo.php o archivo.html).
● AllowOverride controla si Apache permite que los archivos .htaccess
dentro de ese directorio cambien la configuración. Apache puede leer
archivos .htaccess en los directorios para aplicar configuraciones adicionales
(como redirecciones, reglas de reescritura, contraseñas, etc.). Por defecto,
muchas instalaciones tienen AllowOverride None, lo que implica que se
ignore cualquier archivo .htaccess. Con AllowOverride All se permite que los
archivos .htaccess sobreescriban la configuración principal.
● Require all granted permite que todos los clientes tengan acceso al
directorio especificado, sin restricciones. Require all denied bloquea el
acceso a todos.
8 de 10
Instalación de un servidor XAMPP
El resto de las líneas sirven para permitir el acceso.
3.2. CONFIGURANDO PHP
En el mismo desplegable donde hemos elegido el archivo de configuración de
apache, ahora elegimos PHP (php.ini), es la cuarta opción. Al igual que el archivo de
configuración de Apache, lo podemos encontrar en C:\xampp\php\php.ini.
En este caso, no se ejecutan todas las líneas, precedida por “;” al igual que antes,
si queremos activarlas, basta con quitar el “;”.
Las etiquetas entre las que se escriben los script php son <?php ... ?>, pero
también es posible utilizar la notación abreviada, <? ... ?>, para que esta notación
funcione, es necesario poner la directiva anterior a On. :
Se recomienda poner <?php ... ? > para identificar claramente el script, porque se
mezcla con otros lenguajes.
Otra modificación a realizar es que muestre los errores que se produzcan. Esto es
recomendable mientras se está programando, pero cuando el programa está en
producción estarán desactivados.
9 de 10
Instalación de un servidor XAMPP
Estas líneas la dejaremos como están con el valor por defecto. Si más adelante vemos
que algunas notificaciones son molestas, las eliminaremos.
3.3. CONFIGURANDO MYSQL
MySQL no lo vamos a tocar. Xampp no pone password al Administrador(root) no lo
hagas, puesto que hay que cambiar la conexión del mismo en phpMyAdmin y puede que
no funcione. Estás en local, y la base de datos en nuestro caso no hay que protegerla.
Cuando la aplicación suba al dominio web cambiará el usuario administrador (te lo dará
el servidor que contrates) así como el nombre de la base de datos, y la contraseña será
la que luego tengas. Por tanto, aunque la cambies, posteriormente tendrás que hacerlo
otra vez.
10 de 10