# 🎨 Guía Rápida de Personalización

## 📝 Cómo Actualizar el Contenido con tus Datos Reales

### 1. Security Research (src/portfolioData.js)

```javascript
export const securityResearch = [
  {
    id: "tu-analisis-unico",
    title: "Tu Título del Análisis",
    date: "2024-10", // Formato YYYY-MM
    tags: ["Tag1", "Tag2", "Tag3"], // Máximo 3-4 tags
    description: "Descripción detallada de tu análisis (150-200 caracteres)",
    frameworks: ["NIST CSF 2.0", "MITRE ATT&CK"], // Frameworks que aplicaste
    url: "https://github.com/tuusuario/tu-repo", // O "#" si aún no está disponible
    thumbnail: "./images/imagen.png", // Opcional
  },
  // Agrega más análisis...
];
```

**Dónde conseguir contenido:**

- Tus análisis de NIST, OWASP, MITRE existentes
- Writeups de CTFs con enfoque técnico profundo
- Proyectos académicos de seguridad
- Investigaciones personales documentadas

---

### 2. CTF & Labs (src/portfolioData.js)

#### Actualizar Hack The Box:

```javascript
{
    name: "Hack The Box",
    username: "TU_USERNAME_HTB",  // ⚠️ ACTUALIZAR
    profileUrl: "https://app.hackthebox.com/profile/TU_USERNAME",  // ⚠️ ACTUALIZAR
    badges: [
        {
            name: "Badge Real",
            earned: true,  // true si lo tienes, false si no
            date: "2024-10"  // Fecha en que lo obtuviste
        },
        // Agrega tus badges reales
    ],
    stats: {
        rank: "Tu Rank Real",  // ⚠️ ACTUALIZAR (e.g., "Hacker", "Pro Hacker", "Script Kiddie")
        points: 145,  // ⚠️ ACTUALIZAR con tus puntos reales
        machinesOwned: 32,  // ⚠️ ACTUALIZAR
        challengesSolved: 18  // ⚠️ ACTUALIZAR
    }
}
```

**Cómo obtener tus stats reales de HTB:**

1. Ve a tu perfil: https://app.hackthebox.com/profile/tuusuario
2. Copia los números exactos
3. Actualiza en `portfolioData.js`

#### Actualizar PortSwigger:

```javascript
{
    name: "PortSwigger Academy",
    username: "TU_EMAIL",  // ⚠️ ACTUALIZAR
    profileUrl: "https://portswigger.net/web-security",
    completedLabs: 87,  // ⚠️ Cuenta tus labs completados
    badges: [
        {
            name: "Nombre del Badge Real",
            earned: true,
            date: "2024-01"
        }
    ],
    stats: {
        rank: "Advanced",  // O "Intermediate", "Expert"
        completedTopics: 15  // Número de tópicos completados
    }
}
```

#### Actualizar TryHackMe:

```javascript
{
    name: "TryHackMe",
    username: "TU_USERNAME_THM",  // ⚠️ ACTUALIZAR
    profileUrl: "https://tryhackme.com/p/TU_USERNAME",  // ⚠️ ACTUALIZAR
    badges: [
        // Tus badges reales de THM
    ],
    stats: {
        rank: "Top 5%",  // Tu ranking real
        roomsCompleted: 124,  // ⚠️ ACTUALIZAR
        streakDays: 30  // Opcional
    }
}
```

#### Agregar Competiciones CTF:

```javascript
competitions: [
  {
    name: "Nombre de la Competición",
    position: "Tu Posición", // e.g., "Top 50", "5th Place", "#23"
    date: "2024-03",
    writeupUrl: "URL_de_tu_writeup", // O "#" si no tienes
  },
];
```

---

### 3. Bug Bounty & CVEs (src/portfolioData.js)

#### Agregar Hallazgos Reales:

```javascript
recognitions: [
  {
    id: 1,
    program: "HackerOne", // O "Bugcrowd", "Intigriti", etc.
    company: "Nombre de la Empresa", // Puede ser anónimo: "Private Company"
    severity: "High", // "Critical", "High", "Medium", "Low"
    bounty: "$500", // O "€300", "£200", "Swag", "Hall of Fame"
    date: "2024-01",
    description:
      "Descripción breve del hallazgo (sin revelar detalles sensibles si es privado)",
    cve: "CVE-2024-XXXXX", // O null si no tiene CVE asignado
    status: "Resolved", // O "Pending"
  },
];
```

**⚠️ IMPORTANTE:**

- No reveles detalles sensibles de programas privados
- Respeta los términos de divulgación de cada programa
- Solo incluye hallazgos que puedes mencionar públicamente

#### Actualizar Estadísticas:

```javascript
stats: {
    totalBounties: 5,  // ⚠️ ACTUALIZAR: Número total de bounties pagados
    totalEarned: "$2,500",  // ⚠️ ACTUALIZAR: Total ganado (o rango aproximado)
    platforms: ["HackerOne", "Bugcrowd"],  // ⚠️ Plataformas donde participas
    validFindings: 12,  // ⚠️ Total de hallazgos válidos (incluyendo no pagados)
    criticalSeverity: 1,  // ⚠️ ACTUALIZAR
    highSeverity: 4,  // ⚠️ ACTUALIZAR
    mediumSeverity: 7  // ⚠️ ACTUALIZAR
}
```

#### Agregar Artículos:

```javascript
articles: [
  {
    title: "Título de tu Artículo",
    url: "https://medium.com/@tu-usuario/tu-articulo",
    platform: "Medium", // O "Personal Blog", "Dev.to", etc.
    date: "2023-11",
    readTime: "8 min", // Estimación de lectura
  },
];
```

---

### 4. Proyectos de GitHub (src/portfolioData.js)

Ya tienes algunos proyectos. Para agregar más detalles:

```javascript
"nombre-de-tu-repo-en-github": {
    image: "./images/nombre-imagen.png",  // Agrega imagen en public/images/
    technologies: ["Tech1", "Tech2", "Tech3"],
    features: [
        "Feature 1 descriptivo",
        "Feature 2 descriptivo",
        "Feature 3 descriptivo"
    ]
}
```

---

## 🖼️ Agregar Imágenes

### Para Proyectos:

1. Guarda imágenes en: `public/images/`
2. Nombra descriptivamente: `proyecto-nombre.png`
3. Actualiza en `portfolioData.js`: `image: "./images/proyecto-nombre.png"`

### Para Security Research:

1. Crea capturas de tus análisis
2. Guarda en: `public/images/`
3. Actualiza `thumbnail: "./images/analisis-nombre.png"`

**Tamaños recomendados:**

- Proyectos: 800x600px (4:3)
- Research thumbnails: 400x300px

---

## 🎨 Personalizar Colores (Opcional)

Si quieres cambiar el esquema de colores:

**Archivo:** `src/pages/portfolio/style.css`

```css
/* Verde principal → Cambia a tu color */
.portfolio-tabs .nav-link.active {
  color: #00ff00; /* ← Cambia esto */
}

/* Cyan accent → Cambia a tu color secundario */
.research-date {
  color: #64ffda; /* ← Cambia esto */
}
```

---

## ✅ Checklist de Personalización

### Datos Mínimos para Producción:

- [ ] **Hack The Box:** Username, stats reales
- [ ] **PortSwigger:** Labs completados reales
- [ ] **TryHackMe:** Username, rooms completadas
- [ ] **Security Research:** Al menos 1 análisis real (actualiza o elimina ejemplos)
- [ ] **Bug Bounty Stats:** Actualiza con números reales (o elimina sección si no aplica)
- [ ] **Proyectos GitHub:** Verifica que los features sean correctos
- [ ] **Imágenes:** Agrega al menos 2-3 imágenes reales de proyectos

### Datos Opcionales:

- [ ] Competiciones CTF completadas
- [ ] Artículos publicados sobre seguridad
- [ ] CVEs asignados
- [ ] Badges adicionales de plataformas

---

## 🚫 Qué Eliminar si No Aplica

### Si NO tienes Bug Bounty experience:

```javascript
// En src/pages/portfolio/index.js, comenta o elimina:
<Nav.Item>
    <Nav.Link eventKey="bugbounty">Bug Bounty & CVEs</Nav.Link>
</Nav.Item>

<Tab.Pane eventKey="bugbounty">
    <BugBountySection data={bugBountyData} />
</Tab.Pane>
```

### Si NO tienes Competiciones CTF:

```javascript
// En src/portfolioData.js:
competitions: []; // Deja el array vacío
```

El componente automáticamente no mostrará la sección si está vacía.

---

## 📞 Links de Perfil a Actualizar

Verifica que todos los links apunten a TUS perfiles:

```javascript
// ⚠️ CRÍTICO: Actualiza estos URLs
profileUrl: "https://app.hackthebox.com/profile/TU_USERNAME";
profileUrl: "https://tryhackme.com/p/TU_USERNAME";
profileUrl: "https://portswigger.net/web-security"; // No tiene perfil público, mantén genérico
```

---

## 🎯 Ejemplo de Datos Realistas para Principiantes

Si estás empezando en ciberseguridad:

```javascript
// HTB Stats realistas para principiante:
stats: {
    rank: "Noob",  // O "Script Kiddie"
    points: 20,
    machinesOwned: 3,  // Máquinas fáciles completadas
    challengesSolved: 5
}

// THM Stats realistas:
stats: {
    rank: "Top 20%",  // Más realista que Top 5%
    roomsCompleted: 25
}

// PortSwigger realistas:
completedLabs: 15,  // Labs básicos
stats: {
    rank: "Intermediate",
    completedTopics: 5
}
```

**¡No infles tus números!** Los reclutadores pueden verificarlos.

---

## 🔄 Actualización Continua

Agrega un recordatorio en tu calendario para actualizar cada:

- **Mensual:** Stats de HTB, THM, PortSwigger
- **Al completar:** Nuevos análisis, writeups, hallazgos
- **Trimestral:** Review general del portfolio

---

## 📝 Plantilla para Agregar Nuevo Research

```javascript
{
    id: "analisis-[nombre-corto]-[año]",
    title: "[Framework/Tool] Implementation/Analysis for [Context]",
    date: "YYYY-MM",
    tags: ["Tag Principal", "Tag Secundario", "Tag Técnico"],
    description: "Resumen ejecutivo del análisis en 1-2 líneas (máx 200 caracteres)",
    frameworks: ["Framework Aplicado 1", "Framework Aplicado 2"],
    url: "https://github.com/tu-usuario/tu-repo",
    thumbnail: "./images/analisis-thumbnail.png"
}
```

---

¿Necesitas ayuda con alguna sección específica? ¡Pregúntame!
