import React from "react";
import PropTypes from "prop-types";
import "./CTFPlatformCard.css";

export const CTFPlatformCard = ({ platform }) => {
  // Determinar si hay stats con valor (diferente de 0)
  const hasStats =
    platform.stats &&
    Object.values(platform.stats).some(
      (val) => val !== 0 && val !== "0" && val !== "N/A" && val !== "Unranked"
    );

  // Verificar si hay badges ganados
  const hasBadges = platform.badges && platform.badges.length > 0;

  // ============================================
  // COMPONENTE ESPECÍFICO: PORTSWIGGER ACADEMY
  // ============================================
  const renderPortSwiggerStats = () => {
    if (platform.name !== "PortSwigger Academy") return null;

    // Calcular porcentaje de progreso por nivel
    const apprenticeProgress = platform.labsByLevel?.apprentice
      ? (
          (platform.labsByLevel.apprentice.completed /
            platform.labsByLevel.apprentice.total) *
          100
        ).toFixed(1)
      : 0;
    const practitionerProgress = platform.labsByLevel?.practitioner
      ? (
          (platform.labsByLevel.practitioner.completed /
            platform.labsByLevel.practitioner.total) *
          100
        ).toFixed(1)
      : 0;
    const expertProgress = platform.labsByLevel?.expert
      ? (
          (platform.labsByLevel.expert.completed /
            platform.labsByLevel.expert.total) *
          100
        ).toFixed(1)
      : 0;

    // Progreso total
    const totalLabs = platform.labsByLevel
      ? platform.labsByLevel.apprentice.total +
        platform.labsByLevel.practitioner.total +
        platform.labsByLevel.expert.total
      : 0;
    const totalCompleted = platform.completedLabs || 0;
    const overallProgress =
      totalLabs > 0 ? ((totalCompleted / totalLabs) * 100).toFixed(1) : 0;

    return (
      <div className="portswigger-stats-container">
        {/* Indicador de nivel actual con progreso circular */}
        <div className="current-level-indicator">
          <div className="circular-progress-wrapper">
            <svg className="circular-progress" width="120" height="120">
              <circle className="circular-progress-bg" cx="60" cy="60" r="50" />
              <circle
                className="circular-progress-bar"
                cx="60"
                cy="60"
                r="50"
                style={{
                  strokeDasharray: `${overallProgress * 3.14} 314`,
                  strokeDashoffset: 0,
                }}
              />
            </svg>
            <div className="circular-progress-text">
              <span className="progress-percentage">{overallProgress}%</span>
              <span className="progress-label">Overall</span>
            </div>
          </div>
          <div className="level-info">
            <h4 className="current-level-title">Current Level</h4>
            <span className="current-level-badge">
              {platform.currentLevel || "Newbie"}
            </span>
            {platform.labsToNextLevel !== undefined && (
              <p className="labs-to-next-level">
                🎯 {platform.labsToNextLevel} labs to next level
              </p>
            )}
          </div>
        </div>

        {/* Stats generales */}
        <div className="portswigger-general-stats">
          <div className="stat">
            <span className="stat-label">Total Labs</span>
            <span className="stat-value">
              {totalCompleted} / {totalLabs}
            </span>
          </div>
          <div className="stat">
            <span className="stat-label">Topics Completed</span>
            <span className="stat-value">
              {platform.stats.completedTopics || 0} /{" "}
              {platform.stats.totalTopics || 25}
            </span>
          </div>
          <div className="stat">
            <span className="stat-label">Rank</span>
            <span className="stat-value">
              {platform.stats.rank || "Newbie"}
            </span>
          </div>
        </div>

        {/* Labs por nivel - EDITABLE FÁCILMENTE */}
        {/* 💡 Para agregar más niveles, simplemente duplica un bloque .level-progress-bar */}
        <div className="labs-by-level">
          <h4>Labs by Difficulty</h4>

          {/* APPRENTICE LEVEL */}
          <div className="level-progress-bar">
            <div className="level-header">
              <span className="level-name apprentice">⭐ Apprentice</span>
              <span className="level-count">
                {platform.labsByLevel?.apprentice?.completed || 0} /{" "}
                {platform.labsByLevel?.apprentice?.total || 0}
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill apprentice-fill"
                style={{ width: `${apprenticeProgress}%` }}
              >
                <span className="progress-text">{apprenticeProgress}%</span>
              </div>
            </div>
          </div>

          {/* PRACTITIONER LEVEL */}
          <div className="level-progress-bar">
            <div className="level-header">
              <span className="level-name practitioner">⭐⭐ Practitioner</span>
              <span className="level-count">
                {platform.labsByLevel?.practitioner?.completed || 0} /{" "}
                {platform.labsByLevel?.practitioner?.total || 0}
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill practitioner-fill"
                style={{ width: `${practitionerProgress}%` }}
              >
                <span className="progress-text">{practitionerProgress}%</span>
              </div>
            </div>
          </div>

          {/* EXPERT LEVEL */}
          <div className="level-progress-bar">
            <div className="level-header">
              <span className="level-name expert">⭐⭐⭐ Expert</span>
              <span className="level-count">
                {platform.labsByLevel?.expert?.completed || 0} /{" "}
                {platform.labsByLevel?.expert?.total || 0}
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill expert-fill"
                style={{ width: `${expertProgress}%` }}
              >
                <span className="progress-text">{expertProgress}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* 📝 INSTRUCCIONES PARA AGREGAR MÁS NIVELES:
                    1. Copia un bloque .level-progress-bar completo
                    2. Cambia el nombre del nivel (ej: "Master")
                    3. Actualiza las clases CSS (ej: master-fill)
                    4. Agrega el mismo nivel en portfolioData.js
                    5. Define el color en CTFPlatformCard.css
                */}
      </div>
    );
  };

  // ============================================
  // COMPONENTE ESPECÍFICO: TRYHACKME
  // ============================================
  const renderTryHackMeBadge = () => {
    if (platform.name !== "TryHackMe" || !platform.badgeIframe?.enabled)
      return null;

    return (
      <div className="thm-badge-container">
        <h4>Official Profile Badge</h4>
        <div className="thm-iframe-wrapper">
          <iframe
            src={`https://tryhackme.com/api/v2/badges/public-profile?userPublicId=${platform.badgeIframe.userPublicId}`}
            style={{
              border: platform.badgeIframe.style?.border || "none",
              width: platform.badgeIframe.style?.width || "100%",
              maxWidth: platform.badgeIframe.style?.maxWidth || "400px",
              height: platform.badgeIframe.style?.height || "80px",
              borderRadius: platform.badgeIframe.style?.borderRadius || "8px",
            }}
            title="TryHackMe Profile Badge"
          />
        </div>
        {/*
        <p className="iframe-hint">
          💡 <strong>Para ajustar el badge:</strong> Edita{" "}
          <code>platform.badgeIframe.style</code> en{" "}
          <code>portfolioData.js</code>
        </p>
        */}
        {/* 📝 INSTRUCCIONES PARA MODIFICAR EL IFRAME:
                    - Cambiar tamaño: Edita width/height en portfolioData.js
                    - Ocultar badge: Cambia enabled a false
                    - Cambiar ID: Actualiza userPublicId con tu ID público de THM
                    - Estilos: Agrega más propiedades en badgeIframe.style
                */}
      </div>
    );
  };

  // ============================================
  // RENDERIZADO PRINCIPAL
  // ============================================
  return (
    <div className="ctf-platform-card">
      <div className="platform-header">
        <div className="platform-title">
          <h3>{platform.name}</h3>
          {platform.userId && (
            <span className="user-id">#{platform.userId}</span>
          )}
        </div>
        <a
          href={platform.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          View Profile →
        </a>
      </div>

      <div className="platform-username">
        <span className="username-label">Username:</span>
        <span className="username-value">{platform.username}</span>
      </div>

      {/* Renderizado específico de PortSwigger */}
      {platform.name === "PortSwigger Academy" && renderPortSwiggerStats()}

      {/* Renderizado específico de TryHackMe Badge */}
      {platform.name === "TryHackMe" && renderTryHackMeBadge()}

      {/* Stats generales para HTB y THM (no PortSwigger) */}
      {platform.name !== "PortSwigger Academy" && hasStats && (
        <div className="platform-stats">
          {platform.stats.rank && platform.stats.rank !== "Unranked" && (
            <div className="stat">
              <span className="stat-label">Rank</span>
              <span className="stat-value">{platform.stats.rank}</span>
            </div>
          )}
          {platform.stats.points !== undefined && (
            <div className="stat">
              <span className="stat-label">Points</span>
              <span className="stat-value">{platform.stats.points}</span>
            </div>
          )}
          {/* HTB specific stats */}
          {platform.stats.userOwns !== undefined && (
            <div className="stat">
              <span className="stat-label">User Owns</span>
              <span className="stat-value">{platform.stats.userOwns}</span>
            </div>
          )}
          {platform.stats.systemOwns !== undefined && (
            <div className="stat">
              <span className="stat-label">System Owns</span>
              <span className="stat-value">{platform.stats.systemOwns}</span>
            </div>
          )}
          {platform.stats.challengesSolved !== undefined && (
            <div className="stat">
              <span className="stat-label">Challenges</span>
              <span className="stat-value">
                {platform.stats.challengesSolved}
              </span>
            </div>
          )}
          {platform.stats.ranking !== undefined && (
            <div className="stat">
              <span className="stat-label">Global Rank</span>
              <span className="stat-value">#{platform.stats.ranking}</span>
            </div>
          )}
          {/* THM specific stats */}
          {platform.stats.level !== undefined && (
            <div className="stat">
              <span className="stat-label">Level</span>
              <span className="stat-value">{platform.stats.level}</span>
            </div>
          )}
          {platform.stats.roomsCompleted !== undefined && (
            <div className="stat">
              <span className="stat-label">Rooms</span>
              <span className="stat-value">
                {platform.stats.roomsCompleted}
              </span>
            </div>
          )}
          {platform.stats.streakDays !== undefined &&
            platform.stats.streakDays > 0 && (
              <div className="stat">
                <span className="stat-label">Streak</span>
                <span className="stat-value">
                  {platform.stats.streakDays} days
                </span>
              </div>
            )}
        </div>
      )}

      {platform.name !== "PortSwigger Academy" && !hasStats && (
        <div className="no-stats-message">
          <p>🚀 Start your journey on {platform.name}!</p>
          <p className="update-hint">
            💡 Update your stats in <code>src/portfolioData.js</code>
          </p>
        </div>
      )}

      {/* BADGES SECTION - RESPONSIVE DESIGN */}
      {/* 💡 El grid se ajusta automáticamente según el ancho disponible */}
      {/* 💡 Para cambiar cuántos badges caben por fila, edita grid-template-columns en CSS */}
      {hasBadges && (
        <div className="badges-container">
          <h4>Achievements</h4>
          <div className="badges-grid">
            {/* El diseño responsive se gestiona automáticamente con CSS Grid:
                            - Móvil: 1 badge por fila
                            - Tablet: 2 badges por fila
                            - Desktop: hasta 3 badges por fila
                            
                            Para modificar este comportamiento, edita .badges-grid en CTFPlatformCard.css
                        */}
            {platform.badges.map((badge, index) => (
              <div
                key={index}
                className={`badge ${badge.earned ? "earned" : "locked"}`}
              >
                <span className="badge-icon">{badge.earned ? "🏆" : "🔒"}</span>
                <div className="badge-info">
                  <span className="badge-name">{badge.name}</span>
                  {badge.date && (
                    <span className="badge-date">{badge.date}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 📝 INSTRUCCIONES PARA MODIFICAR EL LAYOUT DE BADGES:
                        
                        Si tienes MUCHOS badges y quieres mostrar más por fila:
                        1. Ve a CTFPlatformCard.css
                        2. Busca .badges-grid
                        3. Cambia: grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                           A: grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                           (Reducir el minmax permite más columnas)
                        
                        Si quieres un número FIJO de badges por fila:
                        1. Cambia grid-template-columns a: repeat(4, 1fr)
                           (Esto mostrará exactamente 4 badges por fila)
                        
                        Para ajustar el espacio entre badges:
                        1. Modifica la propiedad 'gap' en .badges-grid
                    */}
        </div>
      )}

      {!hasBadges && (
        <div className="no-badges-message">
          <p>🎯 No badges yet - Keep learning!</p>
        </div>
      )}
    </div>
  );
};

export const CTFCompetitionCard = ({ competition }) => {
  return (
    <div className="ctf-competition-card">
      <div className="competition-header">
        <h4>{competition.name}</h4>
        <span className="competition-position">{competition.position}</span>
      </div>
      <div className="competition-footer">
        <span className="competition-date">{competition.date}</span>
        {competition.writeupUrl !== "#" ? (
          <a
            href={competition.writeupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="writeup-link"
          >
            Read Writeup
          </a>
        ) : (
          <span className="writeup-link disabled">Writeup Coming Soon</span>
        )}
      </div>
    </div>
  );
};

// Validación de PropTypes para CTFPlatformCard
CTFPlatformCard.propTypes = {
  platform: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    logo: PropTypes.string,
    completedLabs: PropTypes.number,
    labsByLevel: PropTypes.shape({
      apprentice: PropTypes.shape({
        completed: PropTypes.number,
        total: PropTypes.number,
      }),
      practitioner: PropTypes.shape({
        completed: PropTypes.number,
        total: PropTypes.number,
      }),
      expert: PropTypes.shape({
        completed: PropTypes.number,
        total: PropTypes.number,
      }),
    }),
    currentLevel: PropTypes.string,
    labsToNextLevel: PropTypes.number,
    badgeIframe: PropTypes.shape({
      enabled: PropTypes.bool,
      userPublicId: PropTypes.string,
      style: PropTypes.object,
    }),
    stats: PropTypes.object,
    badges: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        earned: PropTypes.bool.isRequired,
        date: PropTypes.string,
      })
    ),
  }).isRequired,
};

// Validación de PropTypes para CTFCompetitionCard
CTFCompetitionCard.propTypes = {
  competition: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    writeupUrl: PropTypes.string.isRequired,
  }).isRequired,
};
