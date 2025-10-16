import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { meta } from "../../content_option";
import {
  projectData,
  securityResearch,
  ctfAchievements,
  bugBountyData,
} from "../../portfolioData";
import { ResearchCard } from "../../components/ResearchCard/ResearchCard";
import {
  CTFPlatformCard,
  CTFCompetitionCard,
} from "../../components/CTFPlatformCard/CTFPlatformCard";
import {
  BugBountyRecognition,
  BugBountyArticle,
  BugBountyStats,
} from "../../components/BugBountyCard/BugBountyCard";
import defaultProjectImage from "../../assets/images/default-project.svg";

const GITHUB_USERNAME = "bomdiaola";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Estado para guardar el mensaje de error

  useEffect(() => {
    // La llamada a fetch ahora incluye un segundo argumento con opciones
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
      {
        // Añadimos los "headers" (encabezados) a la petición
        headers: {
          // Pasamos el token para la autorización
          Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Error de GitHub: ${res.status}. Verifica que tu API Key sea correcta.`
          );
        }
        return res.json();
      })
      .then((data) => {
        // ... (el resto del código para procesar los datos es el mismo)
        if (!Array.isArray(data)) {
          throw new Error(
            "La respuesta de la API de GitHub no es un formato válido."
          );
        }
        const filteredRepos = data.filter(
          (repo) => repo.name !== GITHUB_USERNAME && !repo.fork
        );
        const enhancedProjects = filteredRepos.map((repo) => {
          const customData = projectData[repo.name] || {};
          return {
            id: repo.id,
            name: repo.name.replace(/[-_]/g, " "),
            description: repo.description,
            url: repo.html_url,
            image: customData.image || defaultProjectImage,
            features: customData.features || [],
            technologies:
              customData.technologies || (repo.language ? [repo.language] : []),
          };
        });
        setProjects(enhancedProjects);
      })
      .catch((error) => {
        // Solo mostrar error en consola durante desarrollo
        if (process.env.NODE_ENV === "development") {
          console.error("Error al cargar los proyectos de GitHub:", error);
        }
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Si todo salió bien, muestra los proyectos
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> My Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Sistema de Tabs */}
        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav variant="tabs" className="portfolio-tabs mb-4">
            <Nav.Item>
              <Nav.Link eventKey="projects">Technical Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="research">Security Research</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ctf">CTF & Labs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bugbounty">Bug Bounty & CVEs</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="projects">
              <ProjectsSection
                projects={projects}
                loading={loading}
                error={error}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="research">
              <ResearchSection data={securityResearch} />
            </Tab.Pane>
            <Tab.Pane eventKey="ctf">
              <CTFSection data={ctfAchievements} />
            </Tab.Pane>
            <Tab.Pane eventKey="bugbounty">
              <BugBountySection data={bugBountyData} />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </HelmetProvider>
  );
};

// Componente para Technical Projects (lógica actual de GitHub)
const ProjectsSection = ({ projects, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center p-5">Loading projects from GitHub...</div>
    );
  }

  if (error) {
    return <div className="text-center p-5 text-danger">Error: {error}</div>;
  }

  return (
    <div className="project-showcase-list">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`project-showcase-item ${
            index % 2 !== 0 ? "reversed" : ""
          }`}
        >
          <div className="project-text-content">
            <h3 className="project-title">{project.name}</h3>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <div className="project-features">
              <h4>Features</h4>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="project-footer">
              <div className="project-tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-view-button"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="project-image-content">
            <img
              src={project.image}
              alt={`Cover of ${project.name}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Componente para Security Research
const ResearchSection = ({ data }) => {
  return (
    <div className="research-section">
      <div className="section-intro">
        <h2>Security Research & Analysis</h2>
        <p>
          In-depth cybersecurity research, framework implementations, and
          technical writeups.
        </p>
      </div>
      {data.map((research) => (
        <ResearchCard key={research.id} research={research} />
      ))}
    </div>
  );
};

// Componente para CTF & Labs
const CTFSection = ({ data }) => {
  return (
    <div className="ctf-section">
      <div className="section-intro">
        <h2>CTF Achievements & Lab Progress</h2>
        <p>
          Platforms where I practice and sharpen my penetration testing and
          security skills.
        </p>
      </div>

      {data.platforms.map((platform, index) => (
        <CTFPlatformCard key={index} platform={platform} />
      ))}

      {data.competitions && data.competitions.length > 0 && (
        <div className="competitions-container">
          <h3>CTF Competitions</h3>
          {data.competitions.map((competition, index) => (
            <CTFCompetitionCard key={index} competition={competition} />
          ))}
        </div>
      )}
    </div>
  );
};

// Componente para Bug Bounty & CVEs
const BugBountySection = ({ data }) => {
  return (
    <div className="bugbounty-section">
      <div className="section-intro">
        <h2>Bug Bounty & CVE Contributions</h2>
        <p className="coming-soon-message">Próximamente...</p>
      </div>

      {/* ============================================
                CONTENIDO COMENTADO - LISTO PARA REACTIVAR
                ============================================
                
                Descomentar cuando tengas datos reales de Bug Bounty.
                Toda la estructura está lista para usar.
            */}

      {/* <BugBountyStats stats={data.stats} />

            <div className="recognitions-container">
                <h3>Security Findings & Recognitions</h3>
                {data.recognitions.map(recognition => (
                    <BugBountyRecognition key={recognition.id} recognition={recognition} />
                ))}
            </div>

            <div className="articles-container">
                <h3>Articles & Publications</h3>
                {data.articles.map((article, index) => (
                    <BugBountyArticle key={index} article={article} />
                ))}
            </div> */}
    </div>
  );
};
