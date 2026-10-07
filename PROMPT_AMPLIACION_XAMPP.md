# PROMPT MAESTRO DE AMPLIACIÓN (6 CARAS): INTEGRACIÓN DE INSTALACIÓN Y CONFIGURACIÓN DE XAMPP, APACHE, MYSQL Y PHPMYADMIN

> **Propósito**: Directriz maestra de 6 caras (dimensiones técnicas y pedagógicas) para procesar los documentos `pdf2.md` (*Instalación de un servidor XAMPP*) y `pdf3.md` (*Configurar Accesos*), generar el banco de preguntas oficial complementario, diseñar nuevas herramientas interactivas y evolucionar el simulador web DWES hacia una suite formativa completa para FP DAW/DAM.

---

## 📄 CARA 1: MARCO DE CONTEXTO, OBJETIVOS FORMATIVOS Y FUSIÓN CURRICULAR

### 1.1. Contexto Académico y Ámbito
* **Ciclo Formativo**: Desarrollo de Aplicaciones Web (DAW) y Desarrollo de Aplicaciones Multiplataforma (DAM).
* **Módulo Profesional**: Desarrollo Web en Entorno Servidor (DWES) / Entornos de Desarrollo.
* **Núcleo Temático Unificado**:
  * **Bloque 1**: Arquitecturas Web y Modelos de Ejecución (Contenido teórico de base, 20 páginas - *1_1_DWES_ArquitecturasWeb.pdf*).
  * **Bloque 2**: Despliegue Local con XAMPP (Instalación, estructura de directorios, cortafuegos, arranque de servicios y configuración de Apache y PHP - *Configuracion_XAMPP_inicial.pdf*).
  * **Bloque 3**: Administración, Autenticación y Seguridad en phpMyAdmin y MySQL (Ficheros de configuración, control de acceso por cookies, CLI `mysqladmin`, alias y directivas de red - *ConfigurarAccesos.pdf*).

### 1.2. Objetivos de Aprendizaje Operativos
Al interactuar con las nuevas secciones y preguntas añadidas, el estudiante debe ser capaz de:
1. Identificar con precisión cada componente del acrónimo XAMPP, sus herramientas auxiliares (Mercury Mail, Tomcat, FileZilla, phpMyAdmin, Webalizer) y sus limitaciones inherentes (carencia de seguridad nativa para entornos de producción).
2. Comprender las discrepancias críticas entre entornos de desarrollo en Windows y entornos de despliegue en Linux (sensibilidad a mayúsculas/minúsculas en nombres de fichero y rutas).
3. Administrar el ciclo de vida de los servicios mediante el Panel de Control de XAMPP, conociendo los puertos estándar (Apache: 80/8080, MySQL: 3306) y la obligatoriedad del modo Administrador.
4. Manipular `httpd.conf` y `httpd-xampp.conf` para crear y securizar alias (`Alias /aplicacionesclase`, `Alias /phpmyadmin`), entendiendo el impacto de `Options (Indexes, FollowSymLinks, MultiViews)`, `AllowOverride (All/None)` y `Require (local, all granted, all denied)`.
5. Gestionar las directivas críticas de `php.ini` (`short_open_tag`, `display_errors`, `error_reporting`) diferenciando entornos de depuración frente a producción.
6. Configurar la seguridad de phpMyAdmin en `config.inc.php` modificando `auth_type` ('config' vs 'cookie') y `AllowNoPassword` (true vs false).
7. Dominar la sintaxis exacta de la herramienta de línea de comandos `mysqladmin` para asignación inicial de contraseña a `root` y cambio posterior mediante el parámetro `-p`.

### 1.3. Reglas Metodológicas Anti-Alucinación y Calidad de Preguntas
* **Fidelidad Literal**: Toda pregunta, código o comando debe emanar exclusivamente de lo redactado en los documentos `pdf2.md` y `pdf3.md`.
* **Cita Obligatoria de Fuente**: Cada cuestión debe registrar la página exacta del documento original (ej. *XAMPP Pág. 7* o *Accesos Pág. 2*).
* **Análisis Cuádruple de Opciones**: Toda pregunta debe justificar la respuesta correcta y explicar técnicamente por qué es erróneo cada uno de los 3 distractores.
* **Detección de Trampas**: Cada pregunta debe incluir la etiqueta `trapNote` señalando confusiones típicas de examen de FP (ej. olvidar el `-p` en `mysqladmin`, confundir la almohadilla `#` de Apache con el punto y coma `;` de PHP, o alterar mayúsculas de directivas).

---

## 📄 CARA 2: EXTRACCIÓN Y DESGLOSE EXHAUSTIVO DE CONTENIDOS TÉCNICOS (PDF 2 Y PDF 3)

### 2.1. Desglose Integral de `pdf2.md`: Instalación de un Servidor XAMPP
* **Acrónimo y Componentes**:
  * **X**: Multiplataforma (Linux, Windows, macOS). Advertencia de examen: Linux es *case-sensitive* (distingue mayúsculas y minúsculas), Windows no.
  * **A**: Servidor HTTP Apache (mantenido por Apache Software Foundation, código abierto).
  * **M**: MySQL / MariaDB (en versiones modernas de XAMPP sustituido por MariaDB).
  * **P**: PHP (lenguaje del lado del servidor).
  * **P**: Perl (administración, desarrollo web y scripts de red).
* **Herramientas Adicionales Integradas**:
  * *Mercury Mail* (servidor de correo para Windows).
  * *phpMyAdmin* (interfaz web de gestión para MySQL/MariaDB).
  * *Webalizer* (analizador de logs de acceso web).
  * *Apache Tomcat* (servidor de aplicaciones Java para Servlets y JSP).
  * *Servidores FTP*: FileZilla Server o ProFTPd.
* **Instalación y Permisos**:
  * Instalador ejecutable único en Windows.
  * Alerta del Firewall de Windows: autorizar `httpd.exe` permitiendo **redes privadas** y denegando **redes públicas**.
  * **Panel de Control**: Ejecutar obligatoriamente en **Modo Administrador** (el servidor web sólo arranca con privilegios elevados por medidas de seguridad).
  * Servicios a arrancar inicialmente: Únicamente **Apache** y **MySQL**. Códigos de color (verde = ejecutándose correctamente, muestra PID y puertos).
  * Verificación: `127.0.0.1` (IP de loopback) o `http://localhost`. Pantalla de confirmación (*Welcome to XAMPP for Windows 8.1.6*).
* **Estructura de Ficheros y DocumentRoot**:
  * Directorio raíz de instalación: `C:\xampp`.
  * `C:\xampp\htdocs`: DocumentRoot por defecto de Apache donde se buscan las aplicaciones.
  * `index.php`: Archivo de índice por defecto ejecutado automáticamente al acceder a un directorio.
  * **Examen de directorios (*Directory Listing*)**: Ocurre al eliminar o renombrar `index.php` (ej. a `index1.php`), exponiendo el listado de archivos en el navegador.
  * Creación de `C:\xampp\aplicacionesclase` fuera de `htdocs` para prácticas seguras.
* **Configuración de Apache (`httpd.conf` y `httpd-xampp.conf`)**:
  * Botón *Config* del panel: Editor por defecto Notepad. Casillas para autoarranque de servicios.
  * **Regla de oro**: Parar el servicio antes de modificar archivos de configuración.
  * Ruta principal: `C:\xampp\apache\conf\httpd.conf`.
  * Carácter de comentario: Almohadilla (`#`).
  * Directivas clave de `httpd.conf`:
    * `Listen 80`: Puerto por defecto. Si hay conflicto (habitual históricamente en Windows 10), cambiar a `8080`.
    * `ServerName localhost:80`.
    * `DocumentRoot "C:/xampp/htdocs"`.
  * Configuración de Alias en `C:\xampp\apache\conf\extra\httpd-xampp.conf`:
    ```apache
    Alias /aplicacionesclase "C:/xampp/aplicacionesclase/"
    <Directory "C:/xampp/aplicacionesclase/">
        Options Indexes FollowSymLinks MultiViews
        AllowOverride all
        Require all granted
    </Directory>
    ```
    * `Alias ruta-URL ruta-carpeta`: Desvincula la URL física del `DocumentRoot`.
    * `Options Indexes`: Permite listar contenido si no existe fichero índice (si estuviera desactivado daría *403 Forbidden*).
    * `Options FollowSymLinks`: Permite seguir enlaces simbólicos.
    * `Options MultiViews`: Negociación de contenido (ej. servir archivo.php o archivo.html según el cliente).
    * `AllowOverride All`: Permite que ficheros `.htaccess` dentro del directorio sobreescriban configuraciones principales (`None` los ignora por completo).
    * `Require all granted`: Permite acceso público irrestricto (`Require all denied` bloquea a todos).
* **Configuración de PHP (`php.ini`)**:
  * Ruta: `C:\xampp\php\php.ini`.
  * Carácter de comentario: Punto y coma (`;`).
  * `short_open_tag`: Controla etiquetas cortas `<? ... ?>`. Valor recomendado `Off` (fuerza uso de `<?php ... ?>` para no colisionar con XML y evitar confusiones).
  * `display_errors`: `On` en fase de desarrollo/programación; `Off` en producción.
  * `error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT`: Reporte por defecto en XAMPP.
* **Configuración Inicial de MySQL**:
  * XAMPP no asigna contraseña por defecto al usuario Administrador (`root`).
  * Recomendación del tema 1.2: En pruebas locales iniciales no tocar la contraseña para evitar desconfigurar phpMyAdmin sin necesidad.

### 2.2. Desglose Integral de `pdf3.md`: Configuración de Accesos
* **Seguridad y Acceso a phpMyAdmin**:
  * Configuración por defecto: Acceso automático sin pantalla de login (`auth_type = 'config'`), pensado para desarrollo local sin seguridad.
  * Archivo de configuración: `C:\xampp\phpMyAdmin\config.inc.php`.
  * Habilitar formulario de login:
    ```php
    //$cfg['Servers'][$i]['auth_type'] = 'config';
    $cfg['Servers'][$i]['auth_type'] = 'cookie'; // Solicita formulario interactivo
    ```
  * Obligatoriedad de contraseña:
    * Por defecto `AllowNoPassword = true` permite entrar a root sin introducir clave aunque se solicite formulario.
    * Para obligar a introducir contraseña:
      ```php
      //$cfg['Servers'][$i]['AllowNoPassword'] = true;
      $cfg['Servers'][$i]['AllowNoPassword'] = false;
      ```
    * Si se intenta acceder sin clave, phpMyAdmin muestra: *"El inicio de sesión sin contraseña está prohibido por la configuración (ver AllowNoPassword)"*.
* **Gestión de Credenciales de `root` mediante `mysqladmin` (CLI)**:
  * Ruta del ejecutable: `C:\xampp\mysql\bin\mysqladmin.exe` o accesible desde el botón *Shell* del panel de control de XAMPP.
  * **Asignación inicial (cuando root NO tiene clave)**:
    ```bash
    mysqladmin -u root password
    ```
    *Solicita por consola la nueva contraseña.*
  * **Modificación posterior (cuando root YA tiene clave asignada)**:
    ```bash
    mysqladmin -u root -p password nueva_contraseña
    ```
    *El parámetro `-p` es obligatorio para que solicite la contraseña antigua antes de aplicar la nueva.*
* **Acceso Remoto a phpMyAdmin a través de la Red Local (LAN)**:
  * Archivo a modificar: `httpd-xampp.conf` de Apache.
  * Bloque original restrictivo:
    ```apache
    Alias /phpmyadmin "C:/xampp/phpMyAdmin/"
    <Directory "C:/xampp/phpMyAdmin">
        AllowOverride AuthConfig
        Require local
        ErrorDocument 403 /error/XAMPP_FORBIDDEN.html.var
    </Directory>
    ```
    *`Require local` restringe el acceso exclusivamente a la máquina local (`127.0.0.1` / `localhost`).*
  * Modificación para acceso desde cualquier equipo o IP de la red:
    * Sustituir `Require local` por:
    ```apache
    Require all granted
    ```
  * Requiere reiniciar el servicio Apache desde el panel de XAMPP para aplicar los cambios.

---

## 📄 CARA 3: ESPECIFICACIÓN DEL NUEVO BANCO DE PREGUNTAS OFICIALES (LÍNEA POR LÍNEA)

### 3.1. Estructura de Datos JSON Estricta
Cada nueva pregunta debe adherirse de forma rigurosa al siguiente esquema TypeScript/JSON:

```javascript
{
  id: 95, // Numeración correlativa a partir de la 94 existente
  topic: "XAMPP: Instalación y Entorno", // o "Seguridad y Accesos"
  subtopic: "Directivas Apache / MySQL CLI / php.ini",
  page: "XAMPP Pág. X" // o "Accesos Pág. X"
  question: "Texto redactado con precisión técnica y formalismo de examen eliminatorio...",
  options: [
    { id: "A", text: "Opción A...", isCorrect: false, reason: "Por qué es falsa..." },
    { id: "B", text: "Opción B...", isCorrect: true, reason: "Justificación de acierto..." },
    { id: "C", text: "Opción C...", isCorrect: false, reason: "Por qué es falsa..." },
    { id: "D", text: "Opción D...", isCorrect: false, reason: "Por qué es falsa..." }
  ],
  explanation: "Explicación detallada oficial basada en el texto del documento...",
  trapNote: "⚠️ Advertencia de examen sobre la trampa habitual en esta cuestión."
}
```

### 3.2. Catálogo Temático de Nuevas Preguntas a Generar (Mínimo 50 Preguntas)
1. **Acrónimo y Componentes de XAMPP (Preguntas 95 a 102)**:
   * Significado exacto de la 'X' (multiplataforma) y por qué importa que Linux distinga mayúsculas/minúsculas.
   * La segunda 'P' (Perl, y no Python ni PostgreSQL).
   * Sustitución de MySQL por MariaDB en versiones actuales.
   * Rol de Mercury Mail, Webalizer y Apache Tomcat en el paquete.
2. **Instalación, Permisos y Cortafuegos en Windows (Preguntas 103 a 110)**:
   * Por qué es obligatorio arrancar el panel de XAMPP en "Modo Administrador".
   * Regla de configuración en el Firewall de Windows (permitir redes privadas, denegar redes públicas).
   * Códigos de color en el panel de XAMPP (verde = activo con PID y puertos asignados).
   * Verificación mediante loopback `127.0.0.1` vs `localhost`.
3. **DocumentRoot y Listado de Directorios (Preguntas 111 a 118)**:
   * Ruta y función de `C:\xampp\htdocs`.
   * Comportamiento automático ante la presencia de `index.php`.
   * Efecto de renombrar `index.php` a `index1.php` (Directory Listing / examen de directorios).
   * Riesgos de seguridad de exponer el examen de directorios en producción.
4. **Ficheros de Configuración de Apache y Manejo de Alias (Preguntas 119 a 128)**:
   * Ubicación de `httpd.conf` (`C:\xampp\apache\conf`) y símbolo de comentario (`#`).
   * Resolución de conflicto de puerto 80 cambiando a 8080 (`Listen 8080`).
   * Creación de alias en `httpd-xampp.conf` con formato `Alias ruta-URL ruta-carpeta`.
   * Propósito de las directivas:
     * `Options Indexes` vs ausencia de índice (403 Forbidden).
     * `Options FollowSymLinks` y enlaces simbólicos.
     * `Options MultiViews` y negociación de contenido.
     * `AllowOverride All` vs `AllowOverride None` y ficheros `.htaccess`.
     * `Require all granted` vs `Require all denied` vs `Require local`.
5. **Configuración de PHP y php.ini (Preguntas 129 a 134)**:
   * Ubicación de `php.ini` (`C:\xampp\php\php.ini`) y símbolo de comentario (`;`).
   * Directiva `short_open_tag`: Valores `On` vs `Off` y recomendación `<?php ... ?>`.
   * Directiva `display_errors`: `On` en desarrollo vs `Off` en producción.
   * `error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT`.
6. **Autenticación en phpMyAdmin (Preguntas 135 a 140)**:
   * Ubicación de `config.inc.php` (`C:\xampp\phpMyAdmin\config.inc.php`).
   * Modo inicial por defecto: `$cfg['Servers'][$i]['auth_type'] = 'config'` (sin login).
   * Activación de formulario: `$cfg['Servers'][$i]['auth_type'] = 'cookie'`.
   * Directiva `$cfg['Servers'][$i]['AllowNoPassword'] = false` para forzar contraseña obligatoria.
   * Mensaje de error al violar `AllowNoPassword`.
7. **Comandos CLI `mysqladmin` (Preguntas 141 a 146)**:
   * Ubicación del binario en `C:\xampp\mysql\bin` y acceso desde la consola Shell de XAMPP.
   * Sintaxis exacta cuando root no tiene clave: `mysqladmin -u root password`.
   * Sintaxis exacta para cambiar clave existente: `mysqladmin -u root -p password nueva_contraseña`.
   * Rol obligatorio del flag `-p` para solicitar la clave previa.
8. **Acceso a phpMyAdmin en Red Local (LAN) (Preguntas 147 a 150)**:
   * Por qué phpMyAdmin viene bloqueado para equipos externos (`Require local`).
   * Fichero exacto donde se aplica la regla (`httpd-xampp.conf`).
   * Cambio de `Require local` a `Require all granted` dentro del bloque `<Directory "C:/xampp/phpMyAdmin">`.

---

## 📄 CARA 4: ARQUITECTURA DE LA INTERFAZ WEB Y NUEVAS VISTAS

### 4.1. Selector de Bloque Temático / Unidad
Añadir a la cabecera un selector dinámico de unidades que permita:
1. **Modo Global (144+ preguntas)**: Simula el examen final del trimestre combinando teoría y práctica.
2. **Unidad 1.1: Arquitecturas Web (94 preguntas)**: Contenido teórico de arquitecturas, SPA, CGI, WSGI, Jakarta EE y modelos de ejecución.
3. **Unidad 1.2: Servidor XAMPP y Apache (30 preguntas)**: Instalación, puertos, DocumentRoot, `httpd.conf`, `php.ini` y alias.
4. **Unidad 1.3: Seguridad y phpMyAdmin (20 preguntas)**: Configuración de cookies, comandos `mysqladmin`, directivas de red y `AllowNoPassword`.

### 4.2. Simulador Interactivo de Terminal CLI (MySQL & Apache)
Integrar un componente interactivo tipo terminal embebida donde el estudiante deba teclear los comandos reales del temario y reciba feedback instantáneo:
* Prueba 1: Poner contraseña a root por primera vez (`mysqladmin -u root password`).
* Prueba 2: Modificar la contraseña de root teniendo una previa (`mysqladmin -u root -p password miclave`).
* Prueba 3: Crear la directiva Alias en Apache para `aplicacionesclase`.
* Prueba 4: Configurar `httpd-xampp.conf` para permitir acceso de red a phpMyAdmin (`Require all granted`).

### 4.3. Ampliación del Mapa Interactivo (Question Grid)
* Soporte para renderizar de forma reactiva el número total de preguntas del bloque activo (de 15 a 144+).
* Filtros rápidos en la cabecera del mapa: *Ver solo falladas*, *Ver solo dudas ⭐*, *Ver solo bloque práctico*.

### 4.4. Informes Diagnósticos Avanzados
En el modal de resultados finales del examen, desglosar el rendimiento en cuatro barras de competencia:
1. *Fundamentos de Arquitecturas Web y Servidores*
2. *Integración de Lenguajes y Modelos de Ejecución*
3. *Instalación y Configuración de Apache/PHP en XAMPP*
4. *Seguridad de Bases de Datos, phpMyAdmin y Permisos de Red*

---

## 📄 CARA 5: EXPANSIÓN DE RECURSOS DE APRENDIZAJE ACTIVO (FLASHCARDS 3D, CHULETA Y DESAFÍOS)

### 5.1. Nuevas Flashcards 3D de Memoria Activa
Añadir al mazo de flashcards interactivas las siguientes tarjetas clave de los nuevos PDFs:
* **Tarjeta 1**: *¿Por qué XAMPP no es adecuado para producción?* (Respuesta: Falta de medidas de seguridad predeterminadas, pensado para desarrollo y pruebas locales rápidas).
* **Tarjeta 2**: *¿Qué diferencia crítica existe entre Windows y Linux al servir archivos web?* (Respuesta: Linux distingue mayúsculas y minúsculas en rutas y nombres de fichero, Windows no).
* **Tarjeta 3**: *¿Por qué el panel de control de XAMPP debe ejecutarse en Modo Administrador?* (Respuesta: Por seguridad del sistema operativo, los servicios como Apache sólo arrancan con permisos elevados).
* **Tarjeta 4**: *¿Qué ocurre si renombramos o borramos index.php dentro de DocumentRoot?* (Respuesta: Se activa el examen de directorios o Directory Listing, mostrando la estructura de archivos en el navegador).
* **Tarjeta 5**: *¿Qué diferencia Options Indexes de AllowOverride All en Apache?* (Respuesta: Indexes permite mostrar carpetas sin index.php; AllowOverride All permite que ficheros .htaccess modifiquen la configuración).
* **Tarjeta 6**: *¿Qué caracteres marcan comentarios en httpd.conf frente a php.ini?* (Respuesta: En httpd.conf es la almohadilla `#`; en php.ini es el punto y coma `;`).
* **Tarjeta 7**: *¿Qué comando asigna contraseña inicial al root de MySQL cuando aún no tiene?* (Respuesta: `mysqladmin -u root password` en mysql/bin o la shell de XAMPP).
* **Tarjeta 8**: *¿Qué parámetro es imprescindible para cambiar la clave de root si ya tiene una previa?* (Respuesta: El flag `-p`, mediante `mysqladmin -u root -p password nueva_clave`).
* **Tarjeta 9**: *¿Cómo se solicita formulario de login en phpMyAdmin?* (Respuesta: Cambiando `$cfg['Servers'][$i]['auth_type'] = 'cookie'` en config.inc.php).
* **Tarjeta 10**: *¿Qué directiva de Apache permite el acceso a phpMyAdmin desde cualquier IP de la red?* (Respuesta: Sustituir `Require local` por `Require all granted` en httpd-xampp.conf).

### 5.2. Nuevas Tablas en la "Chuleta del Tema" (Glosario y Guía Rápida)
Enriquecer [`index.html`](file:///c:/Users/usuario/Desktop/ant/examenPHP/index.html) con cuatro nuevas tablas de referencia rápida:
1. **Tabla de Rutas y Ficheros Clave de XAMPP**:
   * `C:\xampp\htdocs`: DocumentRoot oficial de Apache.
   * `C:\xampp\apache\conf\httpd.conf`: Configuración global de Apache (puerto 80, ServerName).
   * `C:\xampp\apache\conf\extra\httpd-xampp.conf`: Alias y permisos de XAMPP (`aplicacionesclase`, `phpmyadmin`).
   * `C:\xampp\php\php.ini`: Parámetros de ejecución PHP (`short_open_tag`, `display_errors`).
   * `C:\xampp\phpMyAdmin\config.inc.php`: Autenticación (`auth_type`, `AllowNoPassword`).
   * `C:\xampp\mysql\bin\mysqladmin.exe`: Herramienta CLI de gestión de claves de MySQL.
2. **Tabla de Directivas Apache en Bloques `<Directory>`**:
   * `Options Indexes`: Permite listar contenido sin archivo índice (si falta: 403 Forbidden).
   * `Options FollowSymLinks`: Permite seguir enlaces simbólicos.
   * `Options MultiViews`: Negociación de contenido entre tipos de archivo.
   * `AllowOverride All`: Permite reglas de ficheros `.htaccess`.
   * `Require all granted` / `Require local` / `Require all denied`: Control de acceso por host o IP.
3. **Tabla Comparativa de Autenticación en phpMyAdmin**:
   * `auth_type = 'config'`: Sin pantalla de login (modo inicial inseguro).
   * `auth_type = 'cookie'`: Con formulario emergente en navegador.
   * `AllowNoPassword = true` vs `false`: Permite o prohíbe el acceso a usuarios sin clave.
4. **Tabla de Comandos de Consola CLI para MySQL**:
   * `mysqladmin -u root password`: Asignar contraseña por primera vez.
   * `mysqladmin -u root -p password <nueva>`: Cambiar contraseña existente (pide la vieja).

---

## 📄 CARA 6: PLAN DE EJECUCIÓN TÉCNICA, VALIDACIÓN, PWA Y DESPLIEGUE GIT

### 6.1. Secuencia de Implementación Modular
1. **Fase 1: Extensión del Banco de Preguntas en `questions.js`**:
   * Añadir las preguntas 95 a 144+ extraídas de `pdf2.md` y `pdf3.md`.
   * Asignar atributos de filtrado: `unit: "1.2"` / `unit: "1.3"`, citas de página, justificaciones y distractores.
2. **Fase 2: Actualización de la Lógica de Control en `app.js`**:
   * Adaptar filtros para soportar selección por Unidades Temáticas.
   * Actualizar el generador de flashcards para incorporar el mazo práctico.
   * Ajustar el cálculo de diagnóstico por bloques temáticos en el informe de resultados.
   * Ampliar la base de datos de récords de Muerte Súbita para incluir las nuevas preguntas.
3. **Fase 3: Ampliación de Vistas y Tablas en `index.html`**:
   * Añadir selector de unidades en el encabezado.
   * Incrustar las 4 nuevas tablas maestras en la Chuleta del Tema.
   * Actualizar los filtros de revisión post-examen.
4. **Fase 4: Estilos y Micro-Animaciones en `styles.css`**:
   * Estilos para etiquetas de unidades (*Unit Pills*).
   * Mejoras en el visor de tablas responsivas para dispositivos móviles.
5. **Fase 5: Actualización del Service Worker y Caché Offline en `sw.js`**:
   * Incrementar la versión de caché de `dwes-simulador-v2` a `dwes-simulador-v3`.
   * Garantizar precaché de todas las preguntas y recursos actualizados.
6. **Fase 6: Actualización de Documentación en `README.md`**:
   * Actualizar el contador oficial de preguntas (de 94 a 144+).
   * Añadir la cobertura detallada de los temas de XAMPP y Seguridad de Accesos.

### 6.2. Criterios de Aceptación y Pruebas de Calidad (DoD)
* [ ] 100% de los datos de `pdf2.md` y `pdf3.md` reflejados en preguntas y tablas.
* [ ] Cero dependencias externas (`Vanilla JS`, `Vanilla CSS`).
* [ ] Registro del Service Worker funcional sin errores de consola.
* [ ] Modo Examen con cálculo exacto de penalización eliminatoria (-0.33 por fallo).
* [ ] Revisión post-examen y mapa interactivo adaptados al nuevo volumen de preguntas.
* [ ] Commit descriptivo en Git y subida a la rama `main` en GitHub.

---
*Fin del Prompt Maestro de 6 Caras para Ampliación de DWES.*
