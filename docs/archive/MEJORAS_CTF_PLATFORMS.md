# 🚀 MEJORAS CTF PLATFORMS - Documentación Completa

## 📋 RESUMEN DE CAMBIOS

Se han implementado mejoras visuales y funcionales específicas para cada plataforma CTF, manteniendo la estética hacker/tech del portfolio.

---

## 🎯 PORTSWIGGER ACADEMY

### **Funcionalidades Agregadas:**

#### 1. **Indicador de Progreso Circular**

- Muestra el porcentaje total de labs completados
- Diseño circular con animación SVG
- Ubicado junto a la información de nivel actual

```javascript
// En portfolioData.js - Ejemplo de uso:
completedLabs: 93,  // Total de labs completados
```

#### 2. **Sistema de Niveles por Dificultad**

- Separación visual de labs por nivel:
  - ⭐ **Apprentice** (Cyan) - Labs básicos
  - ⭐⭐ **Practitioner** (Naranja) - Labs intermedios
  - ⭐⭐⭐ **Expert** (Rojo) - Labs avanzados

```javascript
// En portfolioData.js - Estructura de datos:
labsByLevel: {
  apprentice: {
    completed: 50,  // ⬅️ ACTUALIZAR manualmente
    total: 100,     // Total disponible
  },
  practitioner: {
    completed: 30,  // ⬅️ ACTUALIZAR manualmente
    total: 80,
  },
  expert: {
    completed: 13,  // ⬅️ ACTUALIZAR manualmente
    total: 50,
  }
}
```

#### 3. **Barras de Progreso por Nivel**

- Cada nivel tiene su propia barra de progreso
- Colores distintivos por dificultad
- Porcentaje visible en la barra

#### 4. **Nivel Actual y Labs Restantes**

- Badge visual del nivel actual (Newbie/Apprentice/Practitioner/Expert)
- Contador de labs necesarios para subir de nivel
- Diseño destacado con gradiente

```javascript
// En portfolioData.js:
currentLevel: "Practitioner",  // ⬅️ Tu nivel actual
labsToNextLevel: 17,           // ⬅️ Labs que faltan para subir
```

### **Cómo Actualizar PortSwigger:**

1. **Inicia sesión en PortSwigger Academy**
2. **Ve a tu perfil** (click en avatar → My Account)
3. **Cuenta tus labs por nivel:**
   - Filtra por "Apprentice" y cuenta completados
   - Filtra por "Practitioner" y cuenta completados
   - Filtra por "Expert" y cuenta completados
4. **Abre `src/portfolioData.js`**
5. **Actualiza los valores:**
   ```javascript
   labsByLevel: {
     apprentice: { completed: 50, total: 100 },
     practitioner: { completed: 30, total: 80 },
     expert: { completed: 13, total: 50 }
   },
   currentLevel: "Practitioner",
   labsToNextLevel: 17,
   ```

### **Agregar Más Niveles (Futuro):**

Si PortSwigger agrega más niveles (ej: "Master"), sigue estos pasos:

1. **En `portfolioData.js`:**

   ```javascript
   labsByLevel: {
     // ... niveles existentes
     master: {
       completed: 0,
       total: 30
     }
   }
   ```

2. **En `CTFPlatformCard.js`:**
   Duplica un bloque completo:

   ```javascript
   {
     /* MASTER LEVEL */
   }
   <div className="level-progress-bar">
     <div className="level-header">
       <span className="level-name master">⭐⭐⭐⭐ Master</span>
       <span className="level-count">
         {platform.labsByLevel?.master?.completed || 0} /{" "}
         {platform.labsByLevel?.master?.total || 0}
       </span>
     </div>
     <div className="progress-bar">
       <div
         className="progress-fill master-fill"
         style={{ width: `${masterProgress}%` }}
       >
         <span className="progress-text">{masterProgress}%</span>
       </div>
     </div>
   </div>;
   ```

3. **En `CTFPlatformCard.css`:**

   ```css
   .level-name.master {
     color: #9b59b6; /* Color púrpura para Master */
   }

   .progress-fill.master-fill {
     background: linear-gradient(
       90deg,
       rgba(155, 89, 182, 0.3) 0%,
       rgba(155, 89, 182, 0.6) 100%
     );
     border-right: 2px solid #9b59b6;
   }
   ```

---

## 🎮 HACK THE BOX

### **Funcionalidades Agregadas:**

#### 1. **Sistema de Badges Responsive**

- Grid flexible que se adapta al número de badges
- Sin desbordes ni solapamientos
- Diseño automático según espacio disponible

#### 2. **Configuración del Layout:**

**Actual (Automático):**

```css
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
```

- Caben tantos badges como permita el ancho (mínimo 200px cada uno)
- Se adapta automáticamente

**Breakpoints Responsive:**

- **Móvil (< 768px):** 1 badge por fila
- **Tablet (769px - 1024px):** 2 badges por fila
- **Desktop (> 1025px):** 3+ badges por fila (según espacio)

### **Modificar el Layout de Badges:**

#### Opción 1: Más Badges por Fila

Si tienes muchos badges y quieres mostrar más por fila:

```css
/* En CTFPlatformCard.css, línea ~350 */
.badges-grid {
  grid-template-columns: repeat(
    auto-fill,
    minmax(150px, 1fr)
  ); /* Antes: 200px */
}
```

#### Opción 2: Número Fijo de Columnas

Para siempre mostrar exactamente 4 badges por fila:

```css
.badges-grid {
  grid-template-columns: repeat(4, 1fr);
}
```

#### Opción 3: Layout Más Espacioso

Para badges más grandes con menos por fila:

```css
.badges-grid {
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 1fr)
  ); /* Antes: 200px */
}
```

#### Opción 4: Control Manual por Tamaño de Pantalla

```css
@media (min-width: 1200px) {
  .badges-grid {
    grid-template-columns: repeat(5, 1fr);
  } /* 5 en pantallas grandes */
}
@media (min-width: 768px) and (max-width: 1199px) {
  .badges-grid {
    grid-template-columns: repeat(3, 1fr);
  } /* 3 en tablet */
}
@media (max-width: 767px) {
  .badges-grid {
    grid-template-columns: repeat(2, 1fr);
  } /* 2 en móvil */
}
```

### **Agregar Más Badges:**

```javascript
// En portfolioData.js - HTB platform:
badges: [
  {
    name: "Tumble Into the Rabbit's Warren",
    earned: true,
    date: "2024-12",
  },
  {
    name: "Is There Anybody Out There?",
    earned: true,
    date: "2024-12",
  },
  // Agregar más badges aquí
  {
    name: "First Blood",
    earned: true,
    date: "2025-01",
  },
  {
    name: "CPTS Certified",
    earned: true,
    date: "2025-02",
  },
];
```

**El diseño se ajustará automáticamente sin importar cuántos badges agregues.**

### **Ajustar Espaciado:**

```css
/* En CTFPlatformCard.css */
.badges-grid {
  gap: 1rem; /* Actual: 1rem */
  /* Opciones:
       0.5rem = Compacto
       1rem = Normal (actual)
       1.5rem = Espacioso
       2rem = Muy espacioso
    */
}
```

---

## 🔴 TRYHACKME

### **Funcionalidades Agregadas:**

#### 1. **Badge Oficial con Iframe**

- Integración del badge público de TryHackMe
- Visualización del perfil directamente en la tarjeta
- Configuración flexible desde `portfolioData.js`

```javascript
// En portfolioData.js:
badgeIframe: {
  enabled: true,  // ⬅️ Cambiar a false para ocultar
  userPublicId: "3624056",  // ⬅️ Tu ID público de THM
  style: {
    maxWidth: "100%",
    width: "400px",
    height: "80px",  // ⬅️ Ajustar según diseño del badge
    border: "none",
    borderRadius: "8px",
  }
}
```

### **Personalizar el Badge:**

#### Cambiar Tamaño:

```javascript
badgeIframe: {
  style: {
    width: "500px",   // Más ancho
    height: "100px",  // Más alto
  }
}
```

#### Ocultar Badge:

```javascript
badgeIframe: {
  enabled: false,  // El iframe no se renderizará
}
```

#### Cambiar User ID:

```javascript
badgeIframe: {
  userPublicId: "TU_ID_AQUI",  // Encuentra tu ID en tu URL de perfil
}
```

### **Modificar Estilos del Contenedor:**

```css
/* En CTFPlatformCard.css, línea ~450 */
.thm-iframe-wrapper {
  background: #0a192f; /* ⬅️ Color de fondo */
  padding: 1rem; /* ⬅️ Espaciado interno */
  border-radius: 8px; /* ⬅️ Bordes redondeados */
  border: 1px solid #233554; /* ⬅️ Borde */
  /* Agregar sombra: */
  /* box-shadow: 0 4px 15px rgba(0, 255, 0, 0.2); */
}
```

### **Agregar Descripción Personalizada:**

Edita directamente en `CTFPlatformCard.js`:

```javascript
{
  /* Antes del iframe */
}
<p className="thm-description">🎯 Check out my progress on TryHackMe!</p>;
```

---

## 📁 ESTRUCTURA DE ARCHIVOS MODIFICADOS

```
src/
├── portfolioData.js               ✅ Actualizado con nuevos campos
├── components/
    └── CTFPlatformCard/
        ├── CTFPlatformCard.js     ✅ Lógica específica por plataforma
        └── CTFPlatformCard.css    ✅ Estilos nuevos para cada plataforma
```

---

## 🎨 GUÍA VISUAL DE DISEÑO

### **PortSwigger Academy - Vista Completa:**

```
┌─────────────────────────────────────────────────────────────┐
│  PortSwigger Academy                    [View Profile →]    │
│  ─────────────────────────────────────────────────────────  │
│  Username: Rygnus                                           │
│                                                             │
│  ┌──────────────┬───────────────────────────────────────┐  │
│  │  ⭕ 40.4%    │  Current Level                        │  │
│  │    Overall   │  [Practitioner]                       │  │
│  │              │  🎯 17 labs to next level             │  │
│  └──────────────┴───────────────────────────────────────┘  │
│                                                             │
│  ┌─────────────┬─────────────┬─────────────┐              │
│  │ Total Labs  │ Topics      │ Rank        │              │
│  │ 93 / 230    │ 9 / 25      │ Practitioner│              │
│  └─────────────┴─────────────┴─────────────┘              │
│                                                             │
│  Labs by Difficulty                                        │
│  ⭐ Apprentice        50 / 100                             │
│  [████████████░░░░░░] 50.0%                               │
│                                                             │
│  ⭐⭐ Practitioner    30 / 80                              │
│  [███████░░░░░░░░░░] 37.5%                                │
│                                                             │
│  ⭐⭐⭐ Expert        13 / 50                              │
│  [█████░░░░░░░░░░░░] 26.0%                                │
└─────────────────────────────────────────────────────────────┘
```

### **TryHackMe - Vista con Badge:**

```
┌─────────────────────────────────────────────────────────────┐
│  TryHackMe                              [View Profile →]    │
│  ─────────────────────────────────────────────────────────  │
│  Username: Rygnus                                           │
│                                                             │
│  Official Profile Badge                                     │
│  ┌───────────────────────────────────────────────────────┐ │
│  │  [TryHackMe Badge Iframe - Renderizado por THM]      │ │
│  └───────────────────────────────────────────────────────┘ │
│  💡 Para ajustar el badge: Edita platform.badgeIframe...   │
│                                                             │
│  ┌─────────┬─────────┬──────────┬─────────┐               │
│  │ Level   │ Rank    │ Rooms    │ Streak  │               │
│  │ 5       │ Top 10% │ 42       │ 7 days  │               │
│  └─────────┴─────────┴──────────┴─────────┘               │
└─────────────────────────────────────────────────────────────┘
```

### **Hack The Box - Badges Responsive:**

```
┌─────────────────────────────────────────────────────────────┐
│  Achievements                                               │
│  ┌────────────────┬────────────────┬────────────────┐      │
│  │ 🏆 First Blood │ 🏆 CPTS Cert   │ 🏆 Pro Hacker  │      │
│  │    2024-12     │    2024-11     │    2025-01     │      │
│  └────────────────┴────────────────┴────────────────┘      │
│  ┌────────────────┬────────────────┬────────────────┐      │
│  │ 🏆 Rabbit Hole │ 🏆 10 Machines │ 🔒 Expert      │      │
│  │    2024-10     │    2024-12     │    Locked      │      │
│  └────────────────┴────────────────┴────────────────┘      │
└─────────────────────────────────────────────────────────────┘

MÓVIL:
┌────────────────────┐
│ 🏆 First Blood     │
│    2024-12         │
├────────────────────┤
│ 🏆 CPTS Cert       │
│    2024-11         │
├────────────────────┤
│ 🏆 Pro Hacker      │
│    2025-01         │
└────────────────────┘
```

---

## 🛠️ INSTRUCCIONES DE MANTENIMIENTO

### **Actualización Mensual Recomendada:**

1. **Visita tus perfiles:**

   - HTB: https://app.hackthebox.com/profile/1736672
   - PortSwigger: https://portswigger.net/web-security
   - THM: https://tryhackme.com/p/Rygnus

2. **Anota tus stats actuales**

3. **Actualiza `src/portfolioData.js`:**

   - HTB: points, owns, challenges, badges
   - PortSwigger: labs por nivel, currentLevel, labsToNextLevel
   - THM: level, rank, rooms, streak

4. **Guarda y verifica:** `npm start`

### **Checklist de Actualización:**

**PortSwigger:**

- [ ] Labs Apprentice completados
- [ ] Labs Practitioner completados
- [ ] Labs Expert completados
- [ ] Total labs (suma de todos)
- [ ] Current level
- [ ] Labs to next level
- [ ] Topics completados
- [ ] Badges nuevos (si aplica)

**Hack The Box:**

- [ ] Points actuales
- [ ] User owns
- [ ] System owns
- [ ] Challenges solved
- [ ] Global ranking
- [ ] Badges nuevos

**TryHackMe:**

- [ ] Level actual
- [ ] Rank (Top X%)
- [ ] Rooms completadas
- [ ] Streak days
- [ ] Badges nuevos

---

## 💡 TIPS Y MEJORES PRÁCTICAS

### **Performance:**

- ✅ Todas las stats se actualizan manualmente (sin API calls)
- ✅ El iframe de THM se carga directamente desde su servidor
- ✅ Sin impacto en tiempo de carga del portfolio

### **Responsive Design:**

- ✅ Todos los componentes se adaptan automáticamente
- ✅ Breakpoints definidos para móvil, tablet y desktop
- ✅ No requiere ajustes manuales por tamaño de pantalla

### **Mantenimiento:**

- ✅ Comentarios detallados en el código
- ✅ Instrucciones inline en `portfolioData.js`
- ✅ Fácil de editar sin conocimientos avanzados

### **Escalabilidad:**

- ✅ Agregar más niveles en PortSwigger: 5 minutos
- ✅ Agregar más badges en HTB: copiar/pegar en array
- ✅ Cambiar configuración de THM: editar objeto en data

---

## 🔄 COMPATIBILIDAD

### **Navegadores Soportados:**

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### **Dispositivos:**

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1365px)
- ✅ Mobile (< 768px)

### **Tecnologías Utilizadas:**

- React 18.2.0
- CSS3 (Flexbox, Grid, SVG)
- HTML5 iframe (para THM badge)

---

## 🐛 TROUBLESHOOTING

### **El progreso circular no se muestra:**

```javascript
// Verifica que los valores en portfolioData.js sean números (no strings)
completedLabs: 93,  // ✅ Correcto
completedLabs: "93",  // ❌ Incorrecto
```

### **Los badges se desbordan:**

```css
/* En CTFPlatformCard.css, ajusta el minmax */
.badges-grid {
  grid-template-columns: repeat(
    auto-fill,
    minmax(150px, 1fr)
  ); /* Reduce a 150px */
}
```

### **El iframe de THM no se muestra:**

```javascript
// Verifica que enabled esté en true
badgeIframe: {
  enabled: true,  // ⬅️ Debe ser true
  userPublicId: "3624056",  // ⬅️ Verifica tu ID correcto
}
```

### **Las barras de progreso están en 0%:**

```javascript
// Asegúrate de que completed y total sean números válidos
labsByLevel: {
  apprentice: {
    completed: 50,  // ✅ Debe ser > 0
    total: 100,     // ✅ Debe ser > 0
  }
}
```

---

## 📞 SOPORTE

Si tienes problemas o necesitas agregar funcionalidades adicionales:

1. **Revisa los comentarios en el código** (están muy detallados)
2. **Consulta esta documentación**
3. **Verifica la estructura de datos en `portfolioData.js`**
4. **Inspecciona el navegador** (F12) para ver errores de consola

---

## 🎉 CONCLUSIÓN

Las tarjetas CTF ahora tienen:

- ✅ **PortSwigger:** Sistema completo de niveles con progreso visual
- ✅ **Hack The Box:** Badges totalmente responsive sin desbordes
- ✅ **TryHackMe:** Badge oficial integrado con iframe

**Todo el código está documentado y es fácil de personalizar.**

**¡Disfruta mostrando tu progreso en cybersecurity!** 🚀
