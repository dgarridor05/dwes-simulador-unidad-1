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

* **💯 Cobertura Total Línea por Línea**: 94 preguntas diseñadas a partir del temario oficial sin omitir directivas, acrónimos, diagramas de ciclo de vida ni notas al pie.
* **⚡ 100% Vanilla (Zero Dependencies)**: Construido exclusivamente con HTML5 semántico, CSS3 moderno (Custom Properties, Glassmorphism, CSS Grid/Flexbox) y JavaScript ES6+.
* **🔊 Audio Sintetizado con Web Audio API**: Feedback sonoro nativo sintetizado proceduralmente en tiempo real (sin archivos de audio externos `.mp3`/`.wav`).
* **🌓 Modo Oscuro / Claro**: Selector de tema con persistencia en `localStorage`.
* **💾 Persistencia Local**: Almacenamiento automático del historial de preguntas falladas, marcadores de dudas y preferencias.
* **📱 Diseño Totalmente Responsivo**: Adaptado para ordenadores de sobremesa, portátiles, tablets y smartphones.

---

## 🎯 Modos de Estudio

| Modo | Icono | Descripción |
| :--- | :---: | :--- |
| **Modo Tutor** | 🎓 | Feedback inmediato pregunta a pregunta. Incluye justificación técnica oficial, número de página exacta del PDF, desglose de por qué falla cada uno de los 3 distractores y advertencias de examen (*"Ojo al examen"*). |
| **Modo Examen Oficial** | ⏱️ | Simulacro estricto con temporizador de 45 minutos. Aplica penalización por fallo (-0.33) y genera informe académico con nota sobre 10 y veredicto cualitativo. |
| **Preguntas Trampa** | ⚠️ | Filtro dinámico enfocado exclusivamente en las cuestiones de mayor dificultad técnica (WSGI, directivas de `php.ini`, ciclo SPA vs tradicional, matices de Jakarta EE y CGI). |
| **Bolsa de Fallos** | 🔁 | Repaso inteligente: acumula automáticamente los errores cometidos para reentrenarlos hasta dominarlos al 100%. |
| **Chuleta del Tema** | 📖 | Tablas de consulta rápida con directivas de configuración de `php.ini`, acrónimos de arquitectura y comparativa de modelos de ejecución. |

---

## 📚 Temario Oficial Cubierto (94 Preguntas)

El banco de preguntas se divide en los 5 bloques temáticos del currículo:

```mermaid
graph TD
    A[Unidad 1: Arquitecturas Web] --> B[Bloque 1: Estáticas, Dinámicas, SEO y SPA<br/>Pág. 1-8 | 30 preguntas]
    A --> C[Bloque 2: Arquitectura 3 Capas y Patrón MVC<br/>Pág. 8-10 | 12 preguntas]
    A --> D[Bloque 3: Tecnologías y Plataformas de Servidor<br/>Pág. 10-15 | 24 preguntas]
    A --> E[Bloque 4: Modelos de Ejecución de Lenguajes<br/>Pág. 15-16 | 7 preguntas]
    A --> F[Bloque 5: VSCode, PHP, php.ini y XAMPP<br/>Pág. 16-20 | 21 preguntas]
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
