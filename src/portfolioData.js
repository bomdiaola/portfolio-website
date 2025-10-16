// src/portfolioData.js

// Datos de los proyectos existentes (ya migrados desde projectData.js)
export const projectData = {
  "portfolio-website": {
    image: "./images/Portada-portfolio-web.svg",
    technologies: ["React", "Node.js", "CSS"],
    features: [
      "Diseño responsivo y accesible.",
      "Integración con APIs de terceros.",
      "Despliegue continuo con GitHub Actions.",
    ],
  },

  "Analisis-ISP-NIST": {
    image: "",
    technologies: ["NIST", "OSINT", "MITRE ATT&CK"],
    features: [
      "Implementación del framework NIST CSF 2.0.",
      "Análisis a fondo de la seguridad de un ISP.",
      "Cumplimiento con estándares NIST CSF 2.0",
      "Uso e implementación de técnicas MITRE ATT&CK",
    ],
  },

  RegisterAPP: {
    image: "",
    technologies: ["Django", "Angular", "MySQL", "TypeScript", "SCSS"],
    features: [
      "Administración de notas y asistencia.",
      "Registro de asistencia por código QR.",
      "Interfaz de usuario para alumnos y profesores.",
    ],
  },

  registerapp_API: {
    image: "",
    technologies: ["Node.js", "Ionic", "JavaScript", "Python"],
    features: [
      "Tracking de ubicación en tiempo real.",
      "Endpoints seguros para la aplicación móvil.",
      "Toma de asistencia por geolocalización.",
    ],
  },
};

// ============================================
// NUEVA SECCIÓN: Security Research
// ============================================
export const securityResearch = [
  {
    id: "nist-isp-analysis",
    title: "NIST CSF 2.0 Implementation for ISP Infrastructure",
    date: "2024-01",
    tags: ["NIST", "Compliance", "Risk Management"],
    description:
      "Comprehensive security analysis applying NIST Cybersecurity Framework 2.0 to ISP infrastructure, including gap analysis and remediation roadmap.",
    frameworks: ["NIST CSF 2.0", "MITRE ATT&CK", "ISO 27001"],
    url: "https://github.com/bomdiaola/Analisis-ISP-NIST",
    thumbnail: "./images/nist-analysis.png",
  },
  {
    id: "mitre-attack-mapping",
    title: "MITRE ATT&CK Mapping for Web Application Threats",
    date: "2024-10",
    tags: ["MITRE ATT&CK", "Web Security", "Threat Modeling"],
    description:
      "Deep-dive analysis mapping common web vulnerabilities to MITRE ATT&CK techniques with real-world exploitation examples.",
    frameworks: ["MITRE ATT&CK", "OWASP Top 10"],
    url: "#",
    thumbnail: "./images/mitre-mapping.png",
  },
  {
    id: "owasp-top10-analysis",
    title: "OWASP Top 10 2021: Practical Security Testing",
    date: "2023-11",
    tags: ["OWASP", "Web Security", "Penetration Testing"],
    description:
      "Hands-on analysis of OWASP Top 10 vulnerabilities with proof-of-concept exploits and secure coding recommendations.",
    frameworks: ["OWASP Top 10", "SANS Top 25"],
    url: "#",
    thumbnail: "./images/owasp-analysis.png",
  },
];

// ============================================
// NUEVA SECCIÓN: CTF & Labs
// ============================================

/*
┌─────────────────────────────────────────────────────────────────────────┐
│  CÓMO ACTUALIZAR TUS STATS DE CTF PLATFORMS                             │
└─────────────────────────────────────────────────────────────────────────┘

📍 HACK THE BOX:
   1. Ve a: https://app.hackthebox.com/profile/1736672
   2. Copia tus stats actuales (rank, points, owns, challenges)
   3. Actualiza los valores en "stats" debajo
   
📍 PORTSWIGGER ACADEMY:
   1. Inicia sesión en: https://portswigger.net/web-security
   2. Ve a tu perfil (click en avatar → My Account)
   3. Cuenta labs completados y topics
   4. Actualiza "completedLabs" y "completedTopics"
   
📍 TRYHACKME:
   1. Ve a: https://tryhackme.com/p/Rygnus
   2. Copia tus stats (level, rank, rooms, streak)
   3. Actualiza los valores en "stats"

⏰ FRECUENCIA RECOMENDADA: Cada 1-2 meses o después de logros importantes

💡 TIP: Cuando obtengas un badge nuevo, agrégalo en el array "badges"
*/

export const ctfAchievements = {
  platforms: [
    {
      name: "Hack The Box",
      username: "Rygnus",
      userId: "1736672", // Tu ID de usuario HTB
      profileUrl: "https://app.hackthebox.com/profile/1736672",
      logo: "./images/logos/htb-logo.png", // Agregar logo si lo tienes

      // ⚠️ ACTUALIZAR ESTOS VALORES VISITANDO TU PERFIL HTB
      stats: {
        rank: "Script Kiddie", // Tu ranking actual (ej: "Noob", "Script Kiddie", "Hacker", etc.)
        points: 0, // Tus puntos actuales
        userOwns: 8, // Flags de usuario capturadas
        systemOwns: 8, // Flags de root/system capturadas
        challengesSolved: 0, // Challenges completados
        ranking: "952", // Tu posición global (ej: "#12345")
      },

      badges: [
        // 💡 AGREGAR BADGES CUANDO LOS OBTENGAS
        // Ejemplo: { name: "First Blood", earned: true, date: "2024-10" },
        // Ejemplo: { name: "CPTS Certified", earned: true, date: "2024-11" },
        {
          name: "Tumble Into the Rabbit's Warren",
          earned: true,
          date: "2024-12",
        },
        { name: "Is There Anybody Out There?", earned: true, date: "2024-12" },
      ],
    },
    {
      name: "PortSwigger Academy",
      username: "Rygnus",
      profileUrl: "https://portswigger.net/web-security",
      logo: "./images/logos/portswigger-logo.png",

      // ⚠️ ACTUALIZAR ESTOS VALORES DESDE TU PERFIL PORTSWIGGER
      // NIVELES DE LABORATORIOS:
      // - Apprentice: Labs básicos para principiantes
      // - Practitioner: Labs intermedios con dificultad media
      // - Expert: Labs avanzados, requieren conocimientos profundos

      completedLabs: 93, // Número TOTAL de labs completados (suma de todos los niveles)

      // 📊 LABS POR NIVEL (actualizar manualmente contando desde tu perfil)
      labsByLevel: {
        apprentice: {
          completed: 21, // ⬅️ ACTUALIZAR: Labs nivel Apprentice completados
          total: 59, // Total de labs Apprentice disponibles
        },
        practitioner: {
          completed: 61, // ⬅️ ACTUALIZAR: Labs nivel Practitioner completados
          total: 171, // Total de labs Practitioner disponibles
        },
        expert: {
          completed: 11, // ⬅️ ACTUALIZAR: Labs nivel Expert completados
          total: 40, // Total de labs Expert disponibles
        },
      },

      // 🎯 PROGRESO Y NIVEL ACTUAL
      currentLevel: "Practitioner", // ⬅️ ACTUALIZAR: Tu nivel actual (Newbie/Apprentice/Practitioner/Expert)

      // 💡 Para calcular labs restantes para próximo nivel:
      // - Si eres Newbie → necesitas completar 20 Apprentice para ser Apprentice
      // - Si eres Apprentice → necesitas completar 40 Practitioner para ser Practitioner
      // - Si eres Practitioner → necesitas completar 30 Expert para ser Expert
      labsToNextLevel: 17, // ⬅️ ACTUALIZAR: Labs que faltan para subir de nivel

      stats: {
        rank: "Newbie", // Beginner / Practitioner / Expert
        completedTopics: 9, // ⬅️ ACTUALIZAR: Número de tópicos completados (ej: SQL Injection, XSS, etc.)
        totalTopics: 25, // Total de tópicos disponibles en la academia
      },

      badges: [
        // 💡 AGREGAR BADGES POR TÓPICO COMPLETADO
        // Ejemplo: { name: "SQL Injection Expert", earned: true, date: "2024-10" },
        // Ejemplo: { name: "XSS Practitioner", earned: true, date: "2024-11" },
        {
          name: "SQL Injection Expert",
          earned: true,
          date: "2024-10",
        },
        { 
            name: "XSS Expert", 
            earned: true, 
            date: "2024-11" 
        },
        {
          name: "Cross-site request forgery (CSRF)",
          earned: true,
          date: "2025-04"
        },
        {
          name: "Clickjacking",
          earned: true,
          date: "2025-05"
        },
        {
          name: "DOM-based vulnerabilities",
          earned: true,
          date: "2025-05"
        },
                {
          name: "Cross-origin resource sharing (CORS)",
          earned: true,
          date: "2025-06"
        },
                {
          name: "XML external entity (XXE) injection",
          earned: true,
          date: "2025-07"
        },
        {
          name: "Server-side request forgery (SSRF)",
          earned: true,
          date: "2025-07"
        },
                {
          name: "HTTP request smuggling",
          earned: true,
          date: "2025-10"
        },
      ],
    },
    {
      name: "TryHackMe",
      username: "Rygnus",
      profileUrl: "https://tryhackme.com/p/Rygnus",
      logo: "./images/logos/thm-logo.png",

      // 🎨 IFRAME DEL BADGE OFICIAL DE TRYHACKME
      // Configuración del iframe que muestra tu badge público
      badgeIframe: {
        enabled: true, // ⬅️ Cambiar a false para ocultar el iframe
        userPublicId: "3624056", // ⬅️ Tu ID público de THM
        // Estilos del iframe (puedes ajustar):
        style: {
          maxWidth: "100%",
          width: "400px",
          height: "90px", // Ajusta la altura según el diseño del badge
          border: "none",
          borderRadius: "8px",
        },
      },

      // ⚠️ ACTUALIZAR ESTOS VALORES DESDE TU PERFIL THM
      stats: {
        level: 500, // Tu nivel actual (0-15+)
        rank: "644263", // Tu ranking (ej: "Top 10%", "Top 5%")
        roomsCompleted: 14, // Número de rooms completadas
        streakDays: 0, // Días consecutivos de actividad
      },

      badges: [
        // 💡 AGREGAR BADGES CUANDO LOS OBTENGAS
        // Ejemplo: { name: "7 Day Streak", earned: true, date: "2024-10" },
        // Ejemplo: { name: "OWASP Top 10", earned: true, date: "2024-11" },
        { name: "Pentesting Principles", earned: true, date: "2024-12" },
      ],
    },
  ],

  // 💡 AGREGAR COMPETICIONES CTF EN LAS QUE PARTICIPES
  competitions: [
    // Ejemplo cuando participes en un CTF:
    // {
    //     name: "PicoCTF 2025",
    //     position: "Top 100",
    //     date: "2025-03",
    //     writeupUrl: "#"  // Link a tu writeup (si lo publicas)
    // }
  ],
};

// ============================================
// NUEVA SECCIÓN: Bug Bounty & CVEs
// ============================================
export const bugBountyData = {
  recognitions: [
    {
      id: 1,
      program: "HackerOne",
      company: "Example Corp",
      severity: "High",
      bounty: "$500",
      date: "2024-01",
      description:
        "SQL Injection in payment processing endpoint leading to unauthorized data access.",
      cve: "CVE-2024-XXXXX",
      status: "Resolved",
    },
    {
      id: 2,
      program: "Bugcrowd",
      company: "Tech Startup",
      severity: "Medium",
      bounty: "$250",
      date: "2023-11",
      description:
        "Cross-Site Scripting (XSS) vulnerability in user profile section.",
      cve: null,
      status: "Resolved",
    },
  ],
  articles: [
    {
      title: "From XSS to Account Takeover: A Case Study",
      url: "#",
      platform: "Medium",
      date: "2023-11",
      readTime: "8 min",
    },
    {
      title: "Bug Bounty Tips: Finding Hidden Endpoints",
      url: "#",
      platform: "Personal Blog",
      date: "2024-02",
      readTime: "5 min",
    },
    {
      title: "IDOR Vulnerabilities: Detection and Prevention",
      url: "#",
      platform: "Medium",
      date: "2024-05",
      readTime: "10 min",
    },
  ],
  stats: {
    totalBounties: 5,
    totalEarned: "$2,500",
    platforms: ["HackerOne", "Bugcrowd", "Intigriti"],
    validFindings: 12,
    criticalSeverity: 1,
    highSeverity: 4,
    mediumSeverity: 7,
  },
};
