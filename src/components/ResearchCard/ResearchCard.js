import React from "react";
import PropTypes from "prop-types";
import "./ResearchCard.css";

export const ResearchCard = ({ research }) => {
  return (
    <div className="research-card">
      <div className="research-header">
        <h3>{research.title}</h3>
        <span className="research-date">{research.date}</span>
      </div>
      <div className="research-tags">
        {research.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <p className="research-description">{research.description}</p>
      <div className="research-frameworks">
        <strong>Frameworks Applied:</strong>
        <div className="frameworks-list">
          {research.frameworks.map((fw) => (
            <span key={fw} className="framework-badge">
              {fw}
            </span>
          ))}
        </div>
      </div>
      {research.url !== "#" ? (
        <a
          href={research.url}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-btn"
        >
          Read Full Analysis →
        </a>
      ) : (
        <button className="read-more-btn disabled" disabled>
          Coming Soon
        </button>
      )}
    </div>
  );
};

// Validación de PropTypes
ResearchCard.propTypes = {
  research: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
  }).isRequired,
};
