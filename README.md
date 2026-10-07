# 🎓 DWES Test Master | Unidad 1: Arquitecturas Web
### 🚀 Simulador Oficial Interactivo para Ciclos Formativos (DAW & DAM)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![FP DAW / DAM](https://img.shields.io/badge/FP_Informática-DAW%20%2F%20DAM-007acc?style=for-the-badge&logo=buffer&logoColor=white)](#)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0_Vanilla-success?style=for-the-badge)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Plataforma web interactiva de entrenamiento y evaluación diseñada específicamente para estudiantes de los ciclos de grado superior **DAW (Desarrollo de Aplicaciones Web)** y **DAM (Desarrollo de Aplicaciones Multiplataforma)**. 

Abarca de forma exhaustiva el **100% de los contenidos de las 20 páginas del documento oficial** (*Unidad 1: Arquitecturas Web*), con un banco de **94 preguntas tipo test** analizadas línea por línea, con retroalimentación académica inmediata, análisis pormenorizado de distractores, advertencias trampa de examen y simulación con fórmula oficial eliminatoria.

---

## 📑 Tabla de Contenidos

- [✨ Características Principales](#-características-principales)
- [🎯 Modos de Estudio](#-modos-de-estudio)
- [📚 Temario Oficial Cubierto (94 Preguntas)](#-temario-oficial-cubierto-94-preguntas)
- [🧮 Fórmula Oficial de Corrección (FP DAW/DAM)](#-fórmula-oficial-de-corrección-fp-dawdam)
- [⌨️ Atajos de Teclado](#️-atajos-de-teclado)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Cómo Ejecutar la Aplicación](#-cómo-ejecutar-la-aplicación)
- [🐙 Guía Rápida de Git y GitHub (Paso a Paso)](#-guía-rápida-de-git-y-github-paso-a-paso)
- [🌐 Despliegue en GitHub Pages](#-despliegue-en-github-pages)
- [📄 Licencia](#-licencia)

---

## ✨ Características Principales

* **💯 Cobertura Total Línea por Línea**: 147 preguntas oficiales extraídas y verificadas a partir de los 3 documentos oficiales (Unidad 1 Teoría, Instalación de XAMPP y Configurar Accesos) sin omitir directivas, comandos de consola ni notas al pie.
* **📱 Progressive Web App (PWA) 100% Offline**: Incluye `manifest.json` y `sw.js` (Service Worker v3 con estrategia *Cache-First*). Se instala como app nativa en el móvil o PC y funciona sin conexión a Internet.
* **💻 Terminal CLI Simulada Interactiva**: Practica en tiempo real los comandos reales de examen (`mysqladmin`, creación de `Alias` y directivas `Require`) con validación automática y retroalimentación pedagógica.
* **🔒 Simulacro Oficial Riguroso (Zero Leak)**: En Modo Examen, la selección es neutral (sin colores delatores ni sonidos de acierto/fallo). Permite rectificar respuestas o dejarlas en blanco voluntariamente.
* **🔍 Revisión Post-Examen Exhaustiva**: Al terminar, visualiza cada una de las preguntas con tu elección, la solución oficial, explicación de distractores y filtro de solo falladas.
* **🗺️ Mapa Interactivo de Preguntas (1-147)**: Salta instantáneamente a cualquier pregunta con código de colores según su estado (respondida, pendiente, con duda ⭐).
* **🔀 Aleatorización Anti-Memoria Visual**: Baraja no solo el orden de las preguntas sino también las alternativas (A, B, C, D) para entrenar comprensión real.
* **🔎 Buscador en Tiempo Real**: Filtra preguntas al instante introduciendo términos como *WSGI*, *EJB*, *mod_php*, *mysqladmin*, *AllowOverride* o *php.ini*.
* **🔊 Audio Sintetizado con Web Audio API**: Sonido nativo procedural sin dependencias de archivos `.mp3`.
* **🌓 Modo Oscuro / Claro**: Paleta de alto contraste optimizada para largas sesiones de estudio.
* **👆 Gestos Táctiles (Swipe)**: Desliza el dedo a izquierda o derecha en tu smartphone para avanzar o retroceder.

---

## 🎯 Modos de Estudio

| Modo | Icono | Descripción |
| :--- | :---: | :--- |
| **Modo Tutor** | 🎓 | Feedback inmediato pregunta a pregunta con justificación técnica oficial, cita de página del PDF, análisis de los 3 distractores y alertas de *"Ojo al examen"*. |
| **Modo Examen Oficial** | ⏱️ | Simulacro con selección de duración (Express 15 min, Estándar 25 min o Maratón 60 min con 147 preguntas). Aplica penalización oficial FP ($-0.33$), guarda la sesión ante recargas y genera diagnóstico por bloques. |
| **Preguntas Trampa** | ⚠️ | Filtro dinámico enfocado exclusivamente en las preguntas de nivel avanzado (WSGI, CGI, directivas de `php.ini`, matices de Jakarta EE, `AllowOverride` y comandos de `mysqladmin`). |
| **Bolsa de Fallos** | 🔁 | Repaso inteligente: acumula automáticamente los errores cometidos para reentrenarlos hasta dominarlos al 100%. |
| **Flashcards 3D** | 🎴 | 25 tarjetas de memoria interactiva con giro 3D sobre conceptos clave, directivas y acrónimos, con autoevaluación (*"Me lo sé"* / *"Repasar"*). |
| **Muerte Súbita** | ⚡ | Desafío contrarreloj arcade: 15 segundos por pregunta con barra de tiempo dinámica. Un solo fallo termina la partida y registra tu récord personal. |
| **Terminal CLI** | 💻 | Consola simulada interactiva para entrenar los comandos de consola `mysqladmin`, directivas `Alias` y permisos `Require` con feedback inmediato. |
| **Chuleta del Tema** | 📖 | 7 tablas de consulta rápida con directivas de `php.ini`, acrónimos de arquitectura, directivas de Apache, autenticación en phpMyAdmin y comandos CLI. |

---

## 📚 Temario Oficial Cubierto (147 Preguntas)

El banco de preguntas se divide en los 7 bloques temáticos del currículo:

```mermaid
graph TD
    A[DWES Unidad 1 y Entorno de Desarrollo] --> B[Bloque 1: Estáticas, Dinámicas, SEO y SPA<br/>Pág. 1-8 | 30 preguntas]
    A --> C[Bloque 2: Arquitectura 3 Capas y Patrón MVC<br/>Pág. 8-10 | 12 preguntas]
    A --> D[Bloque 3: Tecnologías y Plataformas de Servidor<br/>Pág. 10-15 | 24 preguntas]
    A --> E[Bloque 4: Modelos de Ejecución de Lenguajes<br/>Pág. 15-16 | 7 preguntas]
    A --> F[Bloque 5: VSCode, PHP, php.ini y XAMPP Inicial<br/>Pág. 16-20 | 21 preguntas]
    A --> G[Bloque 6: Instalación y Configuración Servidor XAMPP y Apache<br/>PDF 2 | 35 preguntas]
    A --> H[Bloque 7: Seguridad y Accesos phpMyAdmin/MySQL<br/>PDF 3 | 18 preguntas]
```

### 1. Páginas Estáticas, Dinámicas, SEO y SPA (Páginas 1 a 8)
- Lenguajes de marcado (HTML/XHTML) y hojas de estilo (CSS).
- Esquema de 4 pasos del ciclo de petición estática. Comunicación cliente-servidor.
- Variables determinantes del contenido dinámico (navegador, usuario autenticado, acciones previas).
- Dinámicas en cliente (JavaScript, DOM, validación) vs Dinámicas en servidor (`.php`, `.asp`, `.jsp`, `.cgi`, `.aspx`).
- Esquema de 6 pasos de páginas dinámicas de servidor. Ejemplo del correo web (Gmail, Hotmail, Yahoo).
- Ventajas e inconvenientes de las páginas estáticas. Rastreo e indexación de **Googlebot**.
- Visualización local sin servidor web (soportes USB/ópticos con protocolo `file://`).
- Primera generación (web estática) vs Segunda generación (web dinámica).
- Definición, ventajas e inconvenientes de las Aplicaciones Web.
- **PWA (Progressive Web Apps)** y funcionamiento offline. Limitaciones de hardware (GPU local, 3D).
- CMS (Drupal, Joomla!, WordPress): Front-end (usuarios externos) vs Back-end (usuarios internos).
- Complementariedad cliente-servidor. Limitación tradicional de JS antes de **AJAX**.
- Arquitectura **SPA (Single Page Application)**: carga única, programación reactiva, servicios **REST** y comunicación mediante **JSON**. Comparativa de diagramas de ciclo de vida.

### 2. Arquitectura por Capas y Patrón MVC (Páginas 8 a 10)
- Los 4 componentes de ejecución: servidor web, módulo ejecutor, base de datos y lenguaje.
- Justificación del diseño en capas: ejecución independiente en servidores distintos.
- **Arquitectura de 3 capas**:
  - *Presentación*: HTML, CSS, JS.
  - *Lógica de Negocio*: PHP, Java, Python, .NET.
  - *Datos*: MySQL, Oracle, PostgreSQL, SQL Server, MongoDB.
- **Patrón Modelo-Vista-Controlador (MVC)**:
  - *Modelo*: datos y lógica de negocio (acceso vía el controlador).
  - *Controlador*: intermediario, recepción de peticiones y envío de datos.
  - *Vista*: interfaz visual para el usuario.
  - Diagrama de flujo formal de interacciones (`Request`, `Request Information`, `Response Information`, `Send Data`, `Response`).

### 3. Tecnologías y Plataformas de Servidor (Páginas 10 a 15)
- **Jakarta EE**: Historia (J2EE $\rightarrow$ Java EE $\rightarrow$ Jakarta EE), Fundación Eclipse, respaldo de Oracle, IBM, Red Hat.
  - Servlets y JSP (generación web) vs EJB (lógica de negocio).
  - Servidores completos (WebSphere, WebLogic, JBoss/WildFly, GlassFish, Apache Geronimo [inactivo]) vs Contenedores de servlets.
- **Pila AMP**: Apache, MySQL/MariaDB, PHP/Perl/Python. Variantes (LAMP, WAMP, MAMP) y sustitución por PostgreSQL.
- **Paquete XAMPP**: Desglose literal (X = Multiplataforma, A = Apache, M = MySQL/MariaDB, P = PHP, P = Perl). Web oficial `apachefriends.org`.
- **CGI (Common Gateway Interface)**: Estándar agnóstico al lenguaje (C, C++, Perl, Python, PHP). **Problema de creación de un proceso por petición**. Declive de Perl.
- Solución de procesos: FastCGI y módulos integrados (`mod_perl`, `mod_php`, PHP-FPM).
- Pregunta oficial de autoevaluación del temario.
- **ASP.NET Core**: Microsoft, C#, multiplataforma, IIS en Windows, SGBD compatibles y Visual Studio.
- **Node.js**: JavaScript en servidor fuera del navegador, Express.js y NestJS.
- **Criterios de selección de arquitectura**: Los 12 factores del apartado 2.1.1.
- Integración web: Protocolo HTTP (vínculo cliente-servidor). Python con `mod_python` (descontinuado) y estándar **WSGI** con proxy inverso (Apache/Nginx).

### 4. Modelos de Ejecución de Lenguajes de Servidor (Páginas 15 a 16)
- **Lenguajes de scripting**: Intérprete, texto plano, portabilidad e inmediatez vs menor rendimiento.
- **Compilados a código máquina (C)**: Velocidad vs poca portabilidad y coste de procesos CGI.
- **Compilados a código intermedio (Java, ASP.NET)**: Máquina virtual, compilación **JIT (Just-In-Time)** a código máquina en caliente.
- **Código embebido**: Separación de contenido estático en HTML y código dinámico. Ejemplo con `echo $_SERVER['SERVER_NAME'];`.

### 5. Entorno VSCode, PHP, php.ini y XAMPP (Páginas 16 a 20)
- IDEs: Eclipse, NetBeans, PhpStorm (de pago) y Visual Studio Code.
- Extensiones recomendadas: `PHP Intelephense` (PSR-12, PHP_Doc), `PHP Code Sniffer`, `Code Runner` (terminal integrada sin frameworks) y `Laravel Snippets`.
- Lenguaje PHP: Sintaxis C/C++/Java, versión recomendada PHP 8.x (> 7.0), frameworks (Laravel, Symfony, Codeigniter, Zend).
- Delimitadores `<?php` y `?>`. **Omisión de `?>` en archivos de solo PHP puro**.
- Directivas de `php.ini`:
  - `short_open_tag = Off` (evitar colisión con `<?xml ...?>`).
  - `max_execution_time` (límite en segundos).
  - `error_reporting = E_ALL & ~E_NOTICE` (operador bit a bit `~`).
  - `file_uploads` y `upload_max_filesize` (ej. `1M`).
- Ficheros de configuración (`httpd.conf`, `php.ini`), función `phpinfo()` y ruta `C:\xampp\php\php.ini`.
- Puesta en marcha: Panel de XAMPP (Start Apache), comprobación con `phpMyAdmin`.
- Carpeta `htdocs` como `DocumentRoot`. Contenido inicial.
- Papel de `index.php` y **Listado de directorios (*Directory Listing*)** si se renombra/elimina.
- Acceso con `localhost` (pantalla *Welcome to XAMPP for Windows 8.1.6*).
- Estructura del script inicial `holamundo.php`.

### 6. Instalación y Configuración del Servidor XAMPP y Apache (PDF 2)
- Acrónimo XAMPP detallado: X (Multiplataforma: Windows, Linux, macOS), A (Apache), M (MySQL/MariaDB), P (PHP), P (Perl).
- Advertencia crítica de desarrollo: Linux es *case-sensitive* (distingue mayúsculas y minúsculas en rutas y archivos); Windows no.
- Herramientas auxiliares integradas: Mercury Mail (correo), phpMyAdmin (BD), Webalizer (análisis de logs), Apache Tomcat (Java JSP/Servlets), servidores FTP (FileZilla / ProFTPd).
- Instalación en Windows: Alerta de Firewall (permitir redes privadas, denegar públicas) y ejecución del panel obligatoria en **Modo Administrador**.
- Puertos estándar: Apache en puerto 80 (443 SSL); MySQL en puerto 3306.
- Comprobación de loopback `127.0.0.1` vs `localhost`.
- `DocumentRoot` en `C:\xampp\htdocs`. Comportamiento de `index.php` y **Examen de directorios (*Directory Listing*)** ante renombrado/eliminación.
- Edición de ficheros de Apache: **Parar el proceso primero (Stop)**. Fichero `httpd.conf` en `C:\xampp\apache\conf\httpd.conf` (comentarios con `#`).
- Conflicto en Windows 10 con puerto 80 y cambio a `Listen 8080`.
- Configuración de Alias en `httpd-xampp.conf`: `Alias ruta-URL ruta-carpeta`.
- Directivas en bloques `<Directory>`:
  - `Options Indexes`: Listado si falta índice (si está inactivo da *403 Forbidden*).
  - `Options FollowSymLinks` y `Options MultiViews` (negociación de contenido).
  - `AllowOverride All` vs `AllowOverride None` (impacto de `.htaccess`).
  - `Require all granted` (acceso público) vs `Require all denied` (bloqueo total).
- Parámetros en `C:\xampp\php\php.ini` (comentarios con `;`): `short_open_tag = Off`, `display_errors = On` (desarrollo) vs `Off` (producción) y `error_reporting`.
- Política inicial con MySQL: En desarrollo local no tocar la contraseña de root para no romper la conexión de phpMyAdmin.

### 7. Configuración de Seguridad y Accesos a phpMyAdmin y MySQL (PDF 3)
- Acceso inicial por defecto en XAMPP: sin login (`auth_type = 'config'`), diseñado para desarrollo local rápido sin seguridad.
- Archivo de autenticación: `C:\xampp\phpMyAdmin\config.inc.php`.
- Habilitar formulario de login interactivo: `$cfg['Servers'][$i]['auth_type'] = 'cookie'`.
- Obligatoriedad estricta de contraseña: `$cfg['Servers'][$i]['AllowNoPassword'] = false` (evita accesos sin clave con mensaje de prohibición).
- Comandos de consola `mysqladmin` (en `C:\xampp\mysql\bin` o Shell de XAMPP):
  - Primera asignación (cuando root NO tiene clave): `mysqladmin -u root password`.
  - Modificación posterior (cuando root YA tiene clave): `mysqladmin -u root -p password <nueva>` (flag `-p` obligatorio para solicitar la clave previa).
- Resolución de URLs de Apache frente a `DocumentRoot`.
- Apertura de acceso a phpMyAdmin en red local (LAN):
  - Modificar `httpd-xampp.conf` dentro del bloque `<Directory "C:/xampp/phpMyAdmin">`.
  - Sustituir `Require local` por `Require all granted` y reiniciar Apache.

---

## 🧮 Fórmula Oficial de Corrección (FP DAW/DAM)

En el **Modo Examen Oficial**, la calificación se calcula de acuerdo al estándar eliminatorio de Formación Profesional con 4 opciones por pregunta:

$$\text{Nota Final} = \max\left(0, \frac{\text{Aciertos} - \frac{\text{Fallos}}{3}}{\text{Total de Preguntas}} \times 10\right)$$

* **Acierto**: $+1.00$
* **Fallo**: $-0.33$ puntos
* **En Blanco**: $0.00$ puntos (no penaliza)
* **Corte de Aprobado**: $5.00 / 10$

---

## ⌨️ Atajos de Teclado

| Tecla | Acción |
| :---: | :--- |
| <kbd>1</kbd> o <kbd>A</kbd> | Marcar la opción **A** |
| <kbd>2</kbd> o <kbd>B</kbd> | Marcar la opción **B** |
| <kbd>3</kbd> o <kbd>C</kbd> | Marcar la opción **C** |
| <kbd>4</kbd> o <kbd>D</kbd> | Marcar la opción **D** |
| <kbd>→</kbd> o <kbd>Enter</kbd> | Avanzar a la siguiente pregunta |
| <kbd>←</kbd> | Retroceder a la pregunta anterior |

---

## 📂 Estructura del Proyecto

```text
examenPHP/
├── index.html                   # Interfaz de usuario (HTML5 semántico, accesibilidad)
├── styles.css                   # Sistema de diseño (Dark/Light tokens, glassmorphism, responsive)
├── app.js                       # Controlador SPA, Web Audio API, persistencia y lógica evaluadora
├── questions.js                 # Banco oficial de 94 preguntas exhaustivas línea por línea
├── 1_1_DWES_ArquitecturasWeb.pdf# Documento curricular oficial de referencia (20 páginas)
├── .gitignore                   # Archivos ignorados por Git
└── README.md                    # Documentación técnica completa del repositorio
```

---

## 🚀 Cómo Ejecutar la Aplicación

No requiere `npm`, `node`, `composer` ni servidores para su funcionamiento básico. Puedes usar cualquiera de estas opciones:

### Opción 1: Ejecución Directa en Navegador (Recomendada)
1. Clona o descarga esta carpeta en tu ordenador.
2. Haz doble clic sobre el archivo **`index.html`**.
3. Se abrirá directamente en Google Chrome, Microsoft Edge, Firefox, Brave u Opera bajo el protocolo local `file://`.

### Opción 2: Dentro de un Servidor Local Apache (XAMPP)
1. Copia la carpeta `examenPHP` dentro de tu directorio `DocumentRoot`:
   ```text
   C:\xampp\htdocs\examenPHP
   ```
2. Inicia el módulo **Apache** desde el panel de control de XAMPP.
3. Abre tu navegador y accede a:
   ```text
   http://localhost/examenPHP/
   ```

---

## 🐙 Guía Rápida de Git y GitHub (Paso a Paso)

Si vas a subir este proyecto a tu perfil de GitHub, sigue estos pasos desde la consola de tu ordenador una vez instalado Git:

### 1. Configuración de tu Identidad en Git (¡Ya configurado!)
```bash
git config --global user.name "dgarridor05"
git config --global user.email "dgarridor05@educarex.es"
```

### 2. Inicializar el Repositorio Local
Abre una terminal (PowerShell, CMD o Git Bash) dentro de la carpeta `examenPHP`:
```bash
cd "c:\Users\usuario\Desktop\ant\examenPHP"
git init
```

### 3. Añadir Archivos y Realizar el Primer Commit
```bash
git add .
git commit -m "feat: Simulador interactivo de examen DWES Unidad 1 con 94 preguntas oficiales"
```

### 4. Crear el Repositorio en GitHub y Conectar
1. Ve a [GitHub](https://github.com) e inicia sesión con tu cuenta **dgarridor05**.
2. Pulsa en el botón **"New"** (Nuevo repositorio).
3. Nómbralo (por ejemplo: `dwes-simulador-unidad-1` o `examenPHP`).
4. Déjalo **Público** y **NO** marques las casillas de añadir README ni `.gitignore` (ya están creados).
5. Copia y ejecuta los siguientes comandos en tu terminal:

```bash
git branch -M main
git remote add origin https://github.com/dgarridor05/dwes-simulador-unidad-1.git
git push -u origin main
```

---

## 🌐 Despliegue en GitHub Pages

Puedes tener este simulador online funcionando gratis en menos de 1 minuto:

1. Entra a tu repositorio en GitHub: `https://github.com/dgarridor05/dwes-simulador-unidad-1`.
2. Ve a la pestaña **Settings** (Configuración) $\rightarrow$ **Pages** (en el menú lateral izquierdo).
3. En la sección **Build and deployment**:
   * **Source**: Elige `Deploy from a branch`.
   * **Branch**: Selecciona `main` y la carpeta `/ (root)`.
4. Haz clic en **Save** (Guardar).
5. En unos segundos, GitHub generará tu enlace web público:
   `https://dgarridor05.github.io/dwes-simulador-unidad-1/`

¡Podrás abrir el simulador desde el móvil o compartirlo con tus compañeros y profesores!

---

## 👤 Autor

* **dgarridor05** ([@dgarridor05](https://github.com/dgarridor05))
* **Email**: [`dgarridor05@educarex.es`](mailto:dgarridor05@educarex.es)
* **Ámbito**: Ciclos Formativos de FP Informática (DAW & DAM)

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Puedes usarlo, modificarlo y compartirlo libremente con fines educativos y de estudio para ciclos formativos.
