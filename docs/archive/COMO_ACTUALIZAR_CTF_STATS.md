# 📊 Guía: Cómo Actualizar tus Stats de CTF Platforms

## 🎯 Objetivo

Esta guía te explica paso a paso cómo obtener y actualizar tus estadísticas reales de Hack The Box, PortSwigger Academy y TryHackMe en tu portfolio.

---

## 1️⃣ HACK THE BOX

### 📍 Tu Perfil: [https://app.hackthebox.com/profile/1736672](https://app.hackthebox.com/profile/1736672)

### Paso 1: Obtener tus Stats

1. **Inicia sesión** en Hack The Box
2. **Navega a tu perfil**: https://app.hackthebox.com/profile/1736672
3. **Anota los siguientes datos:**

```
┌────────────────────────────────────────┐
│  DATOS A COPIAR DE TU PERFIL HTB      │
└────────────────────────────────────────┘

📊 Rank: _______________________
   (Ej: "Noob", "Script Kiddie", "Hacker", "Pro Hacker", "Elite Hacker", "Guru", "Omniscient")

⭐ Points: _______________________
   (Número de puntos totales)

🎯 User Owns: _______________________
   (Flags de usuario capturadas)

🏆 System Owns: _______________________
   (Flags de root/system capturadas)

🧩 Challenges Solved: _______________________
   (Challenges completados)

🌍 Global Ranking: _______________________
   (Tu posición global, ej: "#12345")
```

### Paso 2: Actualizar en el Código

Abre el archivo: `src/portfolioData.js`

Busca la sección de Hack The Box y actualiza:

```javascript
{
    name: "Hack The Box",
    username: "Rygnus",
    userId: "1736672",
    profileUrl: "https://app.hackthebox.com/profile/1736672",

    stats: {
        rank: "Script Kiddie",      // ⬅️ ACTUALIZAR CON TU RANK
        points: 0,                  // ⬅️ ACTUALIZAR CON TUS PUNTOS
        userOwns: 0,                // ⬅️ ACTUALIZAR CON USER FLAGS
        systemOwns: 0,              // ⬅️ ACTUALIZAR CON SYSTEM FLAGS
        challengesSolved: 0,        // ⬅️ ACTUALIZAR CON CHALLENGES
        ranking: "N/A"              // ⬅️ ACTUALIZAR CON TU POSICIÓN
    },
}
```

### Paso 3: Agregar Badges (Opcional)

Si has obtenido badges o certificaciones, agrégalos:

```javascript
badges: [
  { name: "CPTS Certified", earned: true, date: "2024-11" },
  { name: "First Blood", earned: true, date: "2024-10" },
  { name: "Machine Master", earned: true, date: "2024-09" },
];
```

**Badges comunes de HTB:**

- CPTS, CBBH, CDSA (Certificaciones oficiales)
- First Blood, Machine Master, Challenge Master
- Rank-specific badges

---

## 2️⃣ PORTSWIGGER ACADEMY

### 📍 Tu Perfil: Rygnus en PortSwigger Academy

### Paso 1: Obtener tus Stats

1. **Inicia sesión** en https://portswigger.net/web-security
2. **Click en tu avatar** → "My Account"
3. **Revisa tu progreso:**

```
┌────────────────────────────────────────┐
│  DATOS A COPIAR DE PORTSWIGGER        │
└────────────────────────────────────────┘

📚 Labs Completed: _______________________
   (Cuenta todos los labs con ✅ check verde)

📖 Topics Completed: _______________________
   (Número de tópicos 100% completados)

🎓 Rank: _______________________
   (Beginner / Practitioner / Expert)

   • Beginner: < 30% de labs
   • Practitioner: 30-70% de labs
   • Expert: > 70% de labs
```

### Paso 2: Contar Labs por Tópico

Si quieres saber exactamente cuántos labs has completado:

1. Ve a: https://portswigger.net/web-security/all-labs
2. Usa Ctrl+F y busca "Solved" o el ícono de completado
3. Cuenta manualmente o usa este truco:

```javascript
// En la consola del navegador (F12):
document.querySelectorAll('.solved, .completed, [data-status="solved"]').length;
```

### Paso 3: Actualizar en el Código

```javascript
{
    name: "PortSwigger Academy",
    username: "Rygnus",
    profileUrl: "https://portswigger.net/web-security",

    completedLabs: 0,               // ⬅️ ACTUALIZAR CON LABS COMPLETADOS

    stats: {
        rank: "Practitioner",       // ⬅️ ACTUALIZAR: Beginner/Practitioner/Expert
        completedTopics: 0          // ⬅️ ACTUALIZAR CON TOPICS COMPLETADOS
    },
}
```

### Paso 4: Agregar Badges por Tópico

```javascript
badges: [
  { name: "SQL Injection Expert", earned: true, date: "2024-10" },
  { name: "XSS Practitioner", earned: true, date: "2024-11" },
  { name: "Authentication Expert", earned: true, date: "2024-09" },
];
```

**Tópicos principales de PortSwigger:**

- SQL Injection
- Cross-site scripting (XSS)
- CSRF
- Clickjacking
- DOM-based vulnerabilities
- CORS
- XXE
- SSRF
- Request smuggling
- OS command injection
- Server-side template injection
- Path traversal
- Access control
- Authentication
- WebSockets
- Web cache poisoning
- Insecure deserialization
- Information disclosure
- Business logic vulnerabilities
- HTTP Host header attacks
- OAuth authentication

---

## 3️⃣ TRYHACKME

### 📍 Tu Perfil: [https://tryhackme.com/p/Rygnus](https://tryhackme.com/p/Rygnus)

### Paso 1: Obtener tus Stats

1. **Visita tu perfil público**: https://tryhackme.com/p/Rygnus
2. **Anota los siguientes datos:**

```
┌────────────────────────────────────────┐
│  DATOS A COPIAR DE TU PERFIL THM      │
└────────────────────────────────────────┘

🎚️ Level: _______________________
   (Número de nivel 0-15+)

📊 Ranking: _______________________
   (Ej: "Top 10%", "Top 5%", "Top 1%")

🏠 Rooms Completed: _______________________
   (Número total de rooms completadas)

🔥 Current Streak: _______________________
   (Días consecutivos de actividad)
```

### Paso 2: Ver tu Nivel Detallado

Si tu perfil es público, puedes ver:

- **Nivel actual** (aparece junto a tu nombre)
- **Progreso hacia el siguiente nivel** (barra de progreso)
- **Ranking percentil** (aparece en la sección de ranking)

### Paso 3: Actualizar en el Código

```javascript
{
    name: "TryHackMe",
    username: "Rygnus",
    profileUrl: "https://tryhackme.com/p/Rygnus",

    stats: {
        level: 0,                   // ⬅️ ACTUALIZAR CON TU NIVEL
        rank: "Unranked",           // ⬅️ ACTUALIZAR: "Top X%"
        roomsCompleted: 0,          // ⬅️ ACTUALIZAR CON ROOMS
        streakDays: 0               // ⬅️ ACTUALIZAR CON STREAK
    },
}
```

### Paso 4: Agregar Badges

```javascript
badges: [
  { name: "7 Day Streak", earned: true, date: "2024-10" },
  { name: "OWASP Top 10", earned: true, date: "2024-11" },
  { name: "Linux PrivEsc", earned: true, date: "2024-09" },
];
```

**Badges comunes de THM:**

- Streak badges (7, 30, 90, 365 días)
- Path completion badges (Jr Penetration Tester, Offensive Pentesting, etc.)
- Room series badges (Advent of Cyber, OWASP Top 10, etc.)
- Skill badges (Linux, Windows, Web, Network, etc.)

---

## 🔄 FRECUENCIA DE ACTUALIZACIÓN RECOMENDADA

| Evento                                     | Cuándo Actualizar |
| ------------------------------------------ | ----------------- |
| **Completaste una máquina/lab importante** | Inmediatamente    |
| **Subiste de rank**                        | Inmediatamente    |
| **Obtuviste un badge/certificación**       | Inmediatamente    |
| **Actualización de rutina**                | Cada 1-2 meses    |

---

## 📝 CHECKLIST DE ACTUALIZACIÓN

Usa esta lista cada vez que actualices tus stats:

### Hack The Box

- [ ] Rank actualizado
- [ ] Points actualizados
- [ ] User Owns actualizados
- [ ] System Owns actualizados
- [ ] Challenges actualizados
- [ ] Ranking global actualizado
- [ ] Badges agregados (si hay nuevos)

### PortSwigger Academy

- [ ] Labs completados actualizados
- [ ] Topics completados actualizados
- [ ] Rank actualizado (Beginner/Practitioner/Expert)
- [ ] Badges agregados (si completaste un tópico)

### TryHackMe

- [ ] Level actualizado
- [ ] Ranking actualizado
- [ ] Rooms completadas actualizadas
- [ ] Streak actualizado
- [ ] Badges agregados (si hay nuevos)

---

## 🎨 CÓMO SE VE EN EL PORTFOLIO

Después de actualizar, tu tarjeta se verá así:

```
┌──────────────────────────────────────────────────────────┐
│  Hack The Box                         [View Profile →]   │
│  #1736672                                                │
│  ────────────────────────────────────────────────────────│
│                                                          │
│  Username: Rygnus                                        │
│                                                          │
│  ┌──────────┬──────────┬───────────┬──────────┬────────┐│
│  │ Rank     │ Points   │ User Owns │ System   │ Chall. ││
│  │ Hacker   │ 145      │ 15        │ Owns 10  │ 8      ││
│  └──────────┴──────────┴───────────┴──────────┴────────┘│
│                                                          │
│  Achievements                                            │
│  🏆 CPTS Certified (2024-11)                             │
│  🏆 First Blood (2024-10)                                │
└──────────────────────────────────────────────────────────┘
```

**Si aún no tienes stats:**

```
┌──────────────────────────────────────────────────────────┐
│  Hack The Box                         [View Profile →]   │
│  #1736672                                                │
│  ────────────────────────────────────────────────────────│
│                                                          │
│  Username: Rygnus                                        │
│                                                          │
│  🚀 Start your journey on Hack The Box!                  │
│  💡 Update your stats in src/portfolioData.js            │
│                                                          │
│  🎯 No badges yet - Keep learning!                       │
└──────────────────────────────────────────────────────────┘
```

---

## 💡 TIPS Y TRUCOS

### 1. Usa Comentarios TODO

Agrega comentarios en tu código para recordar actualizar:

```javascript
stats: {
    rank: "Script Kiddie",
    points: 0,  // TODO: Actualizar después de completar "Lame"
    userOwns: 0,
    systemOwns: 0
}
```

### 2. Lleva un Registro

Crea un archivo `STATS_LOG.md` para trackear tu progreso:

```markdown
## Historial de Updates

### 2024-10-16

- HTB: Completé máquina "Lame" - User Own +1
- PortSwigger: Completé SQL Injection (Apprentice) - Labs +1

### 2024-11-01

- THM: Completé room "OWASP Top 10" - Rooms +1, Badge +1
```

### 3. Automatiza Recordatorios

Configura un recordatorio mensual en tu calendario:

```
"Actualizar stats de CTF Portfolio - 1er día de cada mes"
```

### 4. Celebra Logros Grandes

Cuando alcances hitos importantes:

- Primer root flag
- Primer lab completado
- Subida de rank
- Certificación obtenida

**¡Actualiza inmediatamente para motivarte!**

---

## 🔧 TROUBLESHOOTING

### "No veo mis badges en PortSwigger"

**Solución:** PortSwigger no tiene un sistema oficial de badges. Crea tus propios badges basados en topics completados:

- "SQL Injection Expert" cuando completes todos los labs de SQL Injection
- "XSS Practitioner" cuando completes 50%+ de labs de XSS

### "Mi perfil de THM es privado"

**Solución:**

1. Ve a Settings en TryHackMe
2. Busca "Profile Visibility"
3. Cambia a "Public" si quieres compartir tus stats

### "No recuerdo cuándo obtuve un badge"

**Solución:** Usa la fecha aproximada (mes/año). No es crítico ser exacto.

### "Mis números son muy bajos"

**Solución:** ¡No hay problema! El portfolio muestra tu viaje de aprendizaje. Todos empezamos en 0. Lo importante es la progresión.

---

## ✅ RESUMEN RÁPIDO

```bash
# Cada 1-2 meses (o después de logros importantes):

1. Visita tus perfiles:
   - HTB: https://app.hackthebox.com/profile/1736672
   - PortSwigger: https://portswigger.net/web-security
   - THM: https://tryhackme.com/p/Rygnus

2. Anota tus stats actuales

3. Abre: src/portfolioData.js

4. Actualiza los números en la sección ctfAchievements

5. Guarda el archivo

6. Ejecuta: npm start

7. Verifica que se vean correctamente

8. ¡Listo! 🎉
```

---

**¿Dudas? Revisa los ejemplos en `portfolioData.js` - están comentados con instrucciones claras.**
