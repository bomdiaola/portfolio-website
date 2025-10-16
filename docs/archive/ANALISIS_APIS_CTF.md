# 🔌 Análisis de APIs para CTF Platforms - Integración Portfolio

## 📊 Resumen Ejecutivo

Este documento analiza las posibilidades de integración automática con las APIs de Hack The Box, PortSwigger Academy y TryHackMe para el portfolio de Rygnus.

---

## 1️⃣ HACK THE BOX (HTB)

### 🔗 Perfil: [Rygnus #1736672](https://app.hackthebox.com/profile/overview)

### ✅ **API Disponible: SÍ**

HTB proporciona una API oficial para obtener datos de perfiles públicos.

#### **Endpoints Disponibles:**

```
Base URL: https://www.hackthebox.com/api/v4/

Endpoints útiles:
- GET /user/profile/basic/{user_id}  → Información básica del perfil
- GET /user/profile/progress/machines/os  → Progreso en máquinas
- GET /user/profile/activity/{user_id}  → Actividad reciente
- GET /user/profile/chart/machines/attack  → Stats de ataque
```

#### **Datos Extraíbles Automáticamente:**

✅ **Sin API Key (Públicos):**

- Avatar del usuario
- Ranking actual
- Puntos totales
- País
- Universidad/organización
- Fecha de registro
- Número de máquinas completadas (User Owns, Root Owns)
- Número de challenges resueltos
- Ranking global y de país

✅ **Con API Key (Más Detallados):**

- Badges y certificaciones
- Progreso detallado por categoría
- Máquinas completadas (lista específica)
- Actividad reciente
- Gráficos de progreso
- Respects recibidos

#### **Limitaciones:**

- Rate limiting: ~100 requests/hour sin API key
- API Key se obtiene desde la cuenta HTB (Settings → API Keys)
- Algunos datos requieren autenticación

#### **Implementación Recomendada:**

**Opción A: Integración Automática con API Key**

```javascript
// Requiere API Key en .env
REACT_APP_HTB_API_KEY = your_api_key_here;
REACT_APP_HTB_USER_ID = 1736672;

// Código en el componente:
const fetchHTBProfile = async () => {
  const response = await fetch(
    `https://www.hackthebox.com/api/v4/user/profile/basic/${process.env.REACT_APP_HTB_USER_ID}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_HTB_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return {
    avatar: data.profile.avatar,
    rank: data.profile.rank,
    points: data.profile.points,
    userOwns: data.profile.user_owns,
    systemOwns: data.profile.system_owns,
    ranking: data.profile.ranking,
  };
};
```

**Opción B: Manual (Sin API Key)**

```javascript
// Actualización manual en portfolioData.js
// Ventajas: Sin dependencias externas, más rápido
// Desventajas: Requiere actualización manual periódica
{
    name: "Hack The Box",
    username: "Rygnus",
    userId: "1736672",
    profileUrl: "https://app.hackthebox.com/profile/1736672",
    stats: {
        rank: "Script Kiddie",  // Actualizar manualmente
        points: 0,
        userOwns: 0,
        systemOwns: 0
    }
}
```

#### **Recomendación:**

⭐ **Opción B (Manual)** por las siguientes razones:

1. **Sin dependencias externas** que puedan fallar
2. **Más rápido** al cargar (sin llamadas API)
3. **Sin rate limits** que preocuparse
4. **Privacidad** - tú controlas qué mostrar
5. **Actualización ocasional** (1-2 veces al mes es suficiente)

---

## 2️⃣ PORTSWIGGER ACADEMY

### 🔗 Perfil: Rygnus

### ❌ **API Disponible: NO**

PortSwigger Academy **NO** proporciona una API pública para extraer datos de perfiles.

#### **Datos Disponibles Públicamente:**

- Ninguno (perfiles privados por defecto)

#### **Datos Mostrados en el Perfil:**

- Laboratorios completados
- Tópicos completados
- Progreso en Learning Paths
- Badges/certificados obtenidos

#### **Métodos de Extracción:**

**Opción A: Web Scraping (No Recomendado)**

```javascript
// Problemático por:
// - Viola términos de servicio
// - Requiere autenticación
// - Estructura HTML puede cambiar
// - Rate limiting agresivo
```

**Opción B: Manual (Recomendado)**

```javascript
// portfolioData.js
{
    name: "PortSwigger Academy",
    username: "Rygnus",
    profileUrl: "https://portswigger.net/web-security",
    completedLabs: 0,  // ⚠️ ACTUALIZAR MANUALMENTE
    badges: [
        { name: "SQL Injection", earned: true, date: "2024-XX" },
        { name: "XSS", earned: true, date: "2024-XX" }
    ],
    stats: {
        rank: "Practitioner",  // Beginner, Practitioner, Expert
        completedTopics: 0  // ⚠️ ACTUALIZAR MANUALMENTE
    }
}
```

#### **Cómo Obtener tus Datos Manualmente:**

1. Inicia sesión en PortSwigger Academy
2. Ve a tu perfil (click en tu avatar → My Account)
3. Cuenta los laboratorios completados
4. Anota los badges obtenidos
5. Actualiza `portfolioData.js` con los números

#### **Recomendación:**

⭐ **Opción B (Manual)** - Es la única opción viable y legal.

---

## 3️⃣ TRYHACKME (THM)

### 🔗 Perfil: [https://tryhackme.com/p/Rygnus](https://tryhackme.com/p/Rygnus)

### ✅ **API Disponible: SÍ (Limitada)**

TryHackMe no tiene una API oficial pública documentada, pero expone algunos datos en formato JSON.

#### **Endpoints No Oficiales:**

```
GET https://tryhackme.com/api/user/rank
GET https://tryhackme.com/api/all-badges
GET https://tryhackme.com/api/leaderboards

// Perfil específico (si es público):
GET https://tryhackme.com/api/get-user-data?username=Rygnus
```

#### **Datos Extraíbles:**

✅ **Sin Autenticación (si el perfil es público):**

- Avatar
- Ranking global
- User level
- Número de rooms completadas
- Badges públicos
- Streak actual
- País

⚠️ **Limitaciones:**

- No hay documentación oficial
- Endpoints pueden cambiar sin aviso
- Rate limiting no documentado
- Algunos perfiles son privados

#### **Implementación:**

**Opción A: Integración con API No Oficial**

```javascript
const fetchTHMProfile = async (username) => {
  try {
    const response = await fetch(
      `https://tryhackme.com/api/get-user-data?username=${username}`
    );
    const data = await response.json();
    return {
      avatar: data.avatar,
      rank: data.rank,
      level: data.level,
      roomsCompleted: data.stats.rooms,
      badges: data.badges,
    };
  } catch (error) {
    console.error("THM API error:", error);
    return null; // Fallback a datos manuales
  }
};
```

**Opción B: Manual (Recomendado para estabilidad)**

```javascript
{
    name: "TryHackMe",
    username: "Rygnus",
    profileUrl: "https://tryhackme.com/p/Rygnus",
    stats: {
        level: 0,  // ⚠️ ACTUALIZAR
        rank: "Top X%",  // ⚠️ ACTUALIZAR
        roomsCompleted: 0,  // ⚠️ ACTUALIZAR
        streakDays: 0
    },
    badges: [
        // Agregar badges obtenidos
    ]
}
```

#### **Recomendación:**

⭐ **Opción B (Manual)** por estabilidad, aunque Opción A es técnicamente posible.

---

## 🎯 RECOMENDACIÓN FINAL

### **Enfoque Híbrido Sugerido:**

```
┌─────────────────────────────────────────────────────────┐
│                  ESTRATEGIA DE DATOS                    │
└─────────────────────────────────────────────────────────┘

📊 Hack The Box:        ✅ Manual (actualizar 1-2x/mes)
📊 PortSwigger:         ✅ Manual (actualizar al completar labs)
📊 TryHackMe:           ✅ Manual (actualizar 1-2x/mes)

Razón: Estabilidad > Automatización
```

### **Ventajas del Enfoque Manual:**

✅ **Rendimiento:**

- Carga instantánea (sin esperar APIs)
- Sin latencia de red
- Sin posibilidad de timeouts

✅ **Confiabilidad:**

- Sin dependencias externas que puedan fallar
- Sin rate limits
- Sin cambios inesperados en APIs de terceros

✅ **Simplicidad:**

- Sin API keys que gestionar
- Sin lógica de error handling compleja
- Sin problemas de CORS

✅ **Control:**

- Tú decides qué mostrar y cuándo
- Privacidad total
- Puedes "redondear" números o agregar contexto

✅ **SEO y Performance:**

- Datos estáticos = mejor SEO
- Lighthouse score más alto
- Tiempo de carga más rápido

### **Desventajas (Menores):**

⚠️ Requiere actualización manual (15 minutos cada 1-2 meses)

---

## 🛠️ IMPLEMENTACIÓN PROPUESTA

### **Estructura de Datos Editable:**

```javascript
// src/portfolioData.js

export const ctfAchievements = {
  platforms: [
    {
      name: "Hack The Box",
      username: "Rygnus",
      userId: "1736672",
      profileUrl: "https://app.hackthebox.com/profile/1736672",
      logo: "./images/logos/htb-logo.png", // Agregar logo

      // ⚠️ ACTUALIZAR ESTOS VALORES MANUALMENTE
      stats: {
        rank: "Script Kiddie", // Tu ranking actual
        points: 0, // Tus puntos
        userOwns: 0, // User flags
        systemOwns: 0, // Root flags
        challengesSolved: 0, // Challenges completados
      },

      badges: [
        // Agregar badges cuando los obtengas:
        // { name: "First Blood", earned: true, date: "2024-10" },
      ],
    },
    {
      name: "PortSwigger Academy",
      username: "Rygnus",
      profileUrl: "https://portswigger.net/web-security",
      logo: "./images/logos/portswigger-logo.png",

      // ⚠️ ACTUALIZAR ESTOS VALORES MANUALMENTE
      completedLabs: 0, // Número de labs completados

      stats: {
        rank: "Practitioner", // Beginner, Practitioner, Expert
        completedTopics: 0, // Tópicos completados
      },

      badges: [
        // Agregar badges cuando los completes:
        // { name: "SQL Injection Expert", earned: true, date: "2024-10" },
      ],
    },
    {
      name: "TryHackMe",
      username: "Rygnus",
      profileUrl: "https://tryhackme.com/p/Rygnus",
      logo: "./images/logos/thm-logo.png",

      // ⚠️ ACTUALIZAR ESTOS VALORES MANUALMENTE
      stats: {
        level: 0, // Tu nivel actual
        rank: "Top X%", // Tu ranking percentil
        roomsCompleted: 0, // Rooms completadas
        streakDays: 0, // Días de streak actual
      },

      badges: [
        // Agregar badges cuando los obtengas:
        // { name: "7 Day Streak", earned: true, date: "2024-10" },
      ],
    },
  ],

  competitions: [
    // Agregar competiciones en las que participes:
    // {
    //     name: "Nombre del CTF",
    //     position: "Top 50",
    //     date: "2024-10",
    //     writeupUrl: "#"
    // }
  ],
};
```

### **Comentarios de Ayuda en el Código:**

```javascript
/*
┌─────────────────────────────────────────────────────────────┐
│  CÓMO ACTUALIZAR TUS STATS DE CTF PLATFORMS                 │
└─────────────────────────────────────────────────────────────┘

📍 HACK THE BOX:
   1. Ve a: https://app.hackthebox.com/profile/1736672
   2. Copia tus stats actuales
   3. Actualiza los valores en este archivo
   
📍 PORTSWIGGER:
   1. Inicia sesión en PortSwigger Academy
   2. Ve a tu perfil
   3. Cuenta labs completados
   4. Actualiza aquí
   
📍 TRYHACKME:
   1. Ve a: https://tryhackme.com/p/Rygnus
   2. Copia tus stats visibles
   3. Actualiza aquí

⏰ FRECUENCIA RECOMENDADA:
   - Después de completar una máquina/lab importante
   - O cada 1-2 meses para mantener actualizado

💡 TIP: Usa comandos como //TODO para marcar cuando necesites actualizar
*/
```

---

## 📸 DISEÑO VISUAL PROPUESTO

```
┌──────────────────────────────────────────────────────────────┐
│  Hack The Box                          [View Profile →]      │
│  ────────────────────────────────────────────────────────────│
│                                                              │
│  [Logo HTB]    Rygnus #1736672                              │
│                                                              │
│  ┌──────────────┬──────────────┬──────────────┬───────────┐│
│  │ Rank         │ Points       │ User Owns    │ System    ││
│  │ Script       │ 0            │ 0            │ Owns      ││
│  │ Kiddie       │              │              │ 0         ││
│  └──────────────┴──────────────┴──────────────┴───────────┘│
│                                                              │
│  Achievements                                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  No badges yet - Start your journey!                   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  💡 Update your stats in src/portfolioData.js               │
└──────────────────────────────────────────────────────────────┘
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] Actualizar `portfolioData.js` con perfiles de Rygnus
- [ ] Agregar logos de plataformas en `public/images/logos/`
- [ ] Modificar componente `CTFPlatformCard` para mostrar userId
- [ ] Agregar tooltip/mensaje para actualizar stats manualmente
- [ ] Crear guía `COMO_ACTUALIZAR_CTF_STATS.md`
- [ ] Testing visual de las 3 tarjetas
- [ ] Desplegar cambios

---

## 🎓 PRÓXIMO PASO

Voy a implementar la solución con:

1. ✅ Datos manuales editables
2. ✅ Estructura clara y documentada
3. ✅ Placeholders para badges futuros
4. ✅ Mensajes de ayuda en el código
5. ✅ Guía de actualización incluida

**¿Procedo con la implementación?**
