import React from "react";
import PropTypes from "prop-types";
import "./BugBountyCard.css";

export const BugBountyRecognition = ({ recognition }) => {
  const getSeverityClass = (severity) => {
    return severity.toLowerCase();
  };

  return (
    <div className="bugbounty-recognition-card">
      <div className="recognition-header">
        <div className="recognition-title">
          <h4>{recognition.company}</h4>
          <span
            className={`severity-badge ${getSeverityClass(
              recognition.severity
            )}`}
          >
            {recognition.severity}
          </span>
        </div>
        <div className="recognition-meta">
          <span className="bounty-amount">{recognition.bounty}</span>
          <span className="recognition-date">{recognition.date}</span>
        </div>
      </div>
      <p className="recognition-description">{recognition.description}</p>
      <div className="recognition-footer">
        <span className="recognition-program">via {recognition.program}</span>
        {recognition.cve && (
          <span className="cve-badge">{recognition.cve}</span>
        )}
        <span className={`status-badge ${recognition.status.toLowerCase()}`}>
          {recognition.status}
        </span>
      </div>
    </div>
  );
};

export const BugBountyArticle = ({ article }) => {
  return (
    <div className="bugbounty-article-card">
      <div className="article-content">
        <h4>{article.title}</h4>
        <div className="article-meta">
          <span className="article-platform">{article.platform}</span>
          <span className="article-read-time">{article.readTime} read</span>
          <span className="article-date">{article.date}</span>
        </div>
      </div>
      {article.url !== "#" ? (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="article-link"
        >
          Read Article →
        </a>
      ) : (
        <button className="article-link disabled" disabled>
          Coming Soon
        </button>
      )}
    </div>
  );
};

export const BugBountyStats = ({ stats }) => {
  return (
    <div className="bugbounty-stats-container">
      <h3>Bug Bounty Statistics</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total Bounties</span>
          <span className="stat-value">{stats.totalBounties}</span>
        </div>
        <div className="stat-card highlight">
          <span className="stat-label">Total Earned</span>
          <span className="stat-value">{stats.totalEarned}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Valid Findings</span>
          <span className="stat-value">{stats.validFindings}</span>
        </div>
      </div>

      <div className="severity-breakdown">
        <h4>Severity Breakdown</h4>
        <div className="severity-stats">
          <div className="severity-item">
            <span className="severity-dot critical"></span>
            <span className="severity-label">Critical</span>
            <span className="severity-count">{stats.criticalSeverity}</span>
          </div>
          <div className="severity-item">
            <span className="severity-dot high"></span>
            <span className="severity-label">High</span>
            <span className="severity-count">{stats.highSeverity}</span>
          </div>
          <div className="severity-item">
            <span className="severity-dot medium"></span>
            <span className="severity-label">Medium</span>
            <span className="severity-count">{stats.mediumSeverity}</span>
          </div>
        </div>
      </div>

      <div className="platforms-list">
        <h4>Active Platforms</h4>
        <div className="platforms">
          {stats.platforms.map((platform, index) => (
            <span key={index} className="platform-badge">
              {platform}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// PropTypes - Validación de tipos
// ============================================

// Validación de PropTypes para BugBountyRecognition
BugBountyRecognition.propTypes = {
  recognition: PropTypes.shape({
    id: PropTypes.number.isRequired,
    program: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    severity: PropTypes.string.isRequired,
    bounty: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cve: PropTypes.string,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

// Validación de PropTypes para BugBountyArticle
BugBountyArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
  }).isRequired,
};

// Validación de PropTypes para BugBountyStats
BugBountyStats.propTypes = {
  stats: PropTypes.shape({
    totalBounties: PropTypes.number.isRequired,
    totalEarned: PropTypes.string.isRequired,
    platforms: PropTypes.arrayOf(PropTypes.string).isRequired,
    validFindings: PropTypes.number.isRequired,
    criticalSeverity: PropTypes.number.isRequired,
    highSeverity: PropTypes.number.isRequired,
    mediumSeverity: PropTypes.number.isRequired,
  }).isRequired,
};
