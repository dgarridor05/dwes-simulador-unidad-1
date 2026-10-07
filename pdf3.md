
1
Configurar accesos
CONFIGURAR ACCESOS
1. CONFIGURAR ACCESO A PHPMYADMIN
Con la configuración inicial que XAMPP da a phpmyadmin, su acceso se hace sin
login, ya que está pensado para ser usado para pruebas locales, sin ningún tipo de
seguridad.
Si queremos que se haga su acceso solicitando login, debemos hacer los
siguientes cambios en el fichero config.inc.php que se encuentra en la ruta de
phpmyadmin.
//$cfg['Servers'][$i]['auth_type'] = 'config';
$cfg['Servers'][$i]['auth_type'] = 'cookie'; //para solicitar
formulario de login
De esta manera ya nos aparecerá la ventana de login al acceder a phpmyadmin
Podremos acceder a phpmyadmin sin introducir contraseña. Si queremos que la
contraseña sea obligatoria, debemos cambiar esta línea en el config.inc.php
1 de 3
Configurar accesos
El usuario root no tiene contraseña, se la podemos poner de la siguiente manera,
desde la shell de xampp o desde el disco duro en la ruta de mysql/bin.
mysqladmin -u root password
(Nos pide la nueva contraseña)
Este comando se utiliza cuando root no tiene aún contraseña
Ahora ya sólo se podrá acceder a phpmyadmin con contraseña
Una vez que tiene contraseña root, podríamos cambiarla con este comando:
mysqladmin -u root -p password nueva_contraseña
(Nos pedirá a continuación la antigua para realizar el cambio de contraseña).
Con estas acciones conseguimos que para acceder a phpmyadmin desde local
nos pida credenciales.
Podemos también cambiar la configuración para poder acceder a la configuración
por phpmyadmin de la base de datos desde cualquier equipo de la red. Para ello,
debemos modificar el alias para phpmyadmin en el fichero de configuración de apache
para xampp httpd_xampp.conf. En este fichero es donde están configurados los alias
en xampp (ya creamos el alias aplicacionesclase en el tema 1.2).
2 de 3

3 de 3
Configurar accesos
Normalmente, cuando se indica una URL como la siguiente
http://servidor.web/carpeta/archivo.html, estamos buscando el archivo llamado
archivo.html en la carpeta llamada carpeta que se debe encontrar en la carpeta
principal del servidor web donde se alojan las páginas web (DocumentRoot) que en
xampp es htdocs (la ruta sería: c:/xampp/htdocs/carpeta/archivo.html).

En la configuración del servidor web Apache es posible crear alias para
redireccionar la ruta de una dirección web a una carpeta que no se encuentre
forzosamente dentro de la especificada como DocumentRoot. Para ello se debe usar la
directiva alias con el siguiente formato:
Alias ruta-URL ruta-carpeta

Una vez establecido el alias debes recordar asignar los permisos adecuados
usando la directiva <Directory>.

Como vemos, en el fichero hay creado un alias para phpmyadmin, en el que se le
indica un permiso Require local que indica que sólamente se podrá acceder a
phpmyadmin desde el mismo equipo en el que se encuentra instalado:

Alias /phpmyadmin "C:/xampp/phpMyAdmin/"
<Directory "C:/xampp/phpMyAdmin">
    AllowOverride AuthConfig
    Require local
    ErrorDocument 403 /error/XAMPP_FORBIDDEN.html.var
</Directory>

Modificamos la línea Require local por Require all granted:

Alias /phpmyadmin "C:/xampp/phpMyAdmin/"
<Directory "C:/xampp/phpMyAdmin">
    AllowOverride AuthConfig
    Require all granted
    ErrorDocument 403 /error/XAMPP_FORBIDDEN.html.var
</Directory>

De esta manera permitimos el acceso al alias phpmyadmin desde cualquier IP de la red.
3 de 3
