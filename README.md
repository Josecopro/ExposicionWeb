# ExposicionWeb


## Evento Evaluativo — Exposición Grupal

**Curso:** Desarrollo Web · Semestre 2026-2
**Modalidad:** Grupal — 3 o 4 estudiantes
**Valor:** 10 % de la nota final *(Nota 1.1 del Seguimiento 1)*
**Fechas:** jueves 6 y martes 11 de agosto de 2026
**Duración:** 20–25 minutos de exposición + 5 minutos de preguntas


---

## 1. Estructura obligatoria

Todos los grupos, sin importar el tema, deben cubrir estas cinco partes:

| # | Parte | Qué debe incluir |
|---|---|---|
| 1 | **Introducción** | Definición del tema y por qué importa en el desarrollo web. |
| 2 | **Conceptos fundamentales** | Componentes, funcionamiento y definiciones clave. |
| 3 | **Profundización** | Ventajas y desventajas, comparaciones y casos reales. |
| 4 | **Demo o ejemplo práctico** | **Obligatorio.** Código, herramienta o sitio real analizado en vivo. |
| 5 | **Conclusiones** | Cuándo usarlo y cómo se relaciona con el curso (React / Node). |

> ⚠️ Una exposición sin demo práctica **no puede superar el nivel Aceptable**, sin importar qué tan buena sea la parte teórica.

---

## 2. Reglas

- **Todos los integrantes deben hablar.** Quien no se presente sin excusa institucional obtiene **0** en esta nota, aunque el equipo sí exponga.
- El material de apoyo (diapositivas, código de la demo) se entrega por **UVirtual** antes de iniciar la franja del día de exposición.
- La demo debe estar **probada antes de clase**. Si falla en vivo, el equipo debe tener capturas o un video de respaldo.
- No se lee de las diapositivas. Las diapositivas apoyan, no reemplazan.
- El docente puede preguntar a **cualquier integrante** sobre **cualquier parte** del tema, no solo la que expuso.

---

## 3. Criterios de evaluación

| Criterio | Peso | Qué se evalúa |
|---|---|---|
| **Dominio del tema** | 40 % | Precisión técnica, profundidad, respuestas a las preguntas del docente. |
| **Demo práctica** | 30 % | Funciona, es pertinente al tema y está explicada, no solo mostrada. |
| **Claridad y material** | 20 % | Orden, calidad de las diapositivas, manejo del tiempo, lenguaje técnico correcto. |
| **Participación equilibrada** | 10 % | Todos exponen una porción comparable y conocen el tema completo. |

### Niveles de logro

| | Nivel | % del criterio |
|---|---|---|
| 🟢 | Excelente | 100 % |
| 🔵 | Bueno | 75 % |
| 🟡 | Aceptable | 50 % |
| 🔴 | Insuficiente | 0–25 % |

### Descuentos

| Situación | Descuento |
|---|---|
| Sin demo práctica | −30 % (el criterio completo) |
| Exceder o no alcanzar el tiempo por más de 5 minutos | −10 % |
| Material no entregado a tiempo por UVirtual | −10 % |
| Contenido copiado sin citar la fuente | Nota 0 y reporte académico |

---

## 4. Temas

Cada equipo desarrolla **un** tema. Los primeros ocho corresponden a fundamentos del curso; los cuatro últimos son de mayor exigencia técnica y se asignan a los equipos de 4 integrantes.

### 1. Navegadores web y el DOM

- ¿Qué es un navegador y cómo está construido?
- Motores de renderizado (Blink, Gecko, WebKit) y sus diferencias.
- ¿Qué es el DOM y por qué no es lo mismo que el HTML?
- Proceso de renderizado: parsing, CSSOM, árbol de render, layout, paint.
- **Demo:** recorrido por DevTools inspeccionando y modificando el DOM en vivo.

### 2. HTTP en profundidad

- ¿Qué es HTTP y qué problema resuelve?
- Métodos: GET, POST, PUT, PATCH, DELETE y cuándo usar cada uno.
- Códigos de estado por familia (2xx, 3xx, 4xx, 5xx) con ejemplos reales.
- Headers y body: qué viaja en cada uno.
- Diferencia entre HTTP/1.1, HTTP/2 y HTTP/3.
- **Demo:** peticiones a una API pública desde Thunder Client o Postman, mostrando headers y códigos.

### 3. Hosting, dominios y despliegue

- Dominio vs. hosting: qué es cada cosa.
- Cómo funciona el DNS: del dominio a la IP.
- Tipos de hosting: compartido, VPS, dedicado, serverless.
- Proceso completo de publicación de un sitio.
- **Demo:** desplegar un sitio estático en Vercel o Netlify en vivo, desde el repositorio hasta la URL.

### 4. SEO técnico para desarrolladores

- ¿Qué es SEO y qué parte le corresponde al desarrollador?
- Meta tags importantes: `title`, `description`, Open Graph.
- Relación entre HTML semántico y posicionamiento.
- `robots.txt`, `sitemap.xml` y datos estructurados.
- **Demo:** auditoría de un sitio real con Lighthouse, explicando cada hallazgo.

### 5. Accesibilidad web (a11y)

- ¿Qué es accesibilidad y a quiénes afecta?
- Los cuatro principios WCAG: perceptible, operable, comprensible, robusto.
- `alt`, `label`, contraste, navegación por teclado, roles ARIA.
- Impacto legal y de negocio.
- **Demo:** navegar un sitio con lector de pantalla o solo con teclado, y corregir en vivo una página inaccesible.

### 6. Tipos de aplicaciones web: MPA, SPA, SSR y PWA

- Definición de MPA y su flujo de navegación.
- Definición de SPA: ventajas y el problema del primer render.
- ¿Qué es SSR y qué problema resuelve? SSG e ISR.
- ¿Qué es una PWA? Service workers, manifest, offline.
- Comparación y ejemplos reales de cada tipo.
- **Demo:** comparar el comportamiento de red de un MPA y un SPA en DevTools.

### 7. CMS: WordPress y alternativas

- ¿Qué es un CMS y qué problema resuelve?
- WordPress como ejemplo: estructura, temas, plugins.
- CMS tradicional vs. **headless** (Strapi, Contentful).
- Ventajas y limitaciones frente a desarrollar desde cero.
- Cuándo un CMS es la decisión correcta y cuándo no.
- **Demo:** crear una página en el panel de WordPress o consumir un CMS headless por API.

### 8. Historia de HTML, CSS, JavaScript, Node.js y TypeScript

- Origen y evolución de HTML y sus versiones principales.
- Nacimiento de CSS y el problema que vino a resolver.
- Creación de JavaScript en 1995 y su impacto en la web.
- Aparición de Node.js en 2009: JavaScript en el backend.
- TypeScript en 2012: por qué surge y qué aporta.
- Comparación directa entre JavaScript y TypeScript.
- **Demo obligatoria:** página web informativa en HTML + CSS con una **línea de tiempo** de estas tecnologías, desplegada y accesible por URL.

### 9. Seguridad web para desarrolladores 🔺

- Principales vulnerabilidades del OWASP Top 10 aplicadas al desarrollo web.
- XSS: qué es, tipos y cómo se previene.
- SQL Injection y por qué los ORM ayudan.
- CSRF y el papel de los tokens.
- HTTPS, certificados TLS y por qué importa.
- Manejo correcto de secretos: variables de entorno, qué nunca se commitea.
- **Demo:** explotar un XSS o una inyección SQL en una app vulnerable de laboratorio y luego corregirlo.

### 10. Autenticación moderna: sesiones, JWT y OAuth 🔺

- Autenticación vs. autorización.
- Sesiones con cookies: cómo funcionan y dónde se guardan.
- JWT: estructura (header, payload, signature), firma y expiración.
- Comparación honesta: cuándo conviene sesión y cuándo JWT.
- OAuth 2.0 y el flujo de "iniciar sesión con Google".
- Refresh tokens y buenas prácticas de almacenamiento.
- **Demo:** decodificar un JWT en jwt.io explicando cada parte, y mostrar un login con OAuth funcionando.

### 11. Rendimiento web y Core Web Vitals 🔺

- ¿Por qué el rendimiento es un requisito y no un lujo?
- Core Web Vitals: LCP, INP y CLS explicados.
- Optimización de imágenes: formatos modernos, `srcset`, lazy loading.
- Bundle size, code splitting y carga diferida.
- Caché del navegador y CDN.
- **Demo:** medir un sitio real con Lighthouse, aplicar dos optimizaciones y mostrar la mejora medida.

### 12. Git avanzado y flujo de trabajo en equipo 🔺

- Modelo de ramas: `main`, `develop`, features.
- Pull requests y revisión de código: para qué sirven realmente.
- Merge vs. rebase: qué hace cada uno y cuándo usarlos.
- Resolución de conflictos paso a paso.
- Convenciones de commits y por qué importan.
- CI/CD: qué es y cómo se integra con GitHub Actions.
- **Demo:** provocar un conflicto de merge en vivo y resolverlo, más un pull request completo con revisión.

> 🔺 Temas de mayor exigencia técnica, asignados preferentemente a equipos de 4 integrantes.

---

## 5. Planilla de calificación

**Equipo:** _______________________________
**Tema:** _______________________________
**Fecha:** _______________  **Duración real:** _______ min

| Criterio | Máx | Nivel | Obtenido |
|---|---|---|---|
| Dominio del tema | 40 | | |
| Demo práctica | 30 | | |
| Claridad y material | 20 | | |
| Participación equilibrada | 10 | | |
| **Subtotal** | **100** | | |
| Descuentos | | | − |
| **TOTAL** | **100** | | |
| **Nota sobre 5.0** | | | |

### Participación por integrante

| # | Estudiante | Parte expuesta | Respondió preguntas | Nota individual |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |

**Observaciones:**

_______________________________________________

_______________________________________________

---

## 6. Checklist antes de exponer

- [ ] El tema cubre las **cinco partes** obligatorias
- [ ] La demo está **probada** y hay respaldo (capturas o video) por si falla
- [ ] Todos los integrantes tienen una parte asignada y conocen el tema completo
- [ ] La exposición dura entre 20 y 25 minutos (ensayada con cronómetro)
- [ ] Las fuentes están citadas en la última diapositiva
- [ ] El material está subido a **UVirtual** antes de la franja
