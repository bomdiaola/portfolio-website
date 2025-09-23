import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { projectData } from "../../projectData"; 
import defaultProjectImage from '../../assets/images/default-project.svg';

const GITHUB_USERNAME = "bomdiaola";

export const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Estado para guardar el mensaje de error

 useEffect(() => {
    // La llamada a fetch ahora incluye un segundo argumento con opciones
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`, {
        // Añadimos los "headers" (encabezados) a la petición
        headers: {
            // Pasamos el token para la autorización
            'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error de GitHub: ${res.status}. Verifica que tu API Key sea correcta.`);
        }
        return res.json();
    })
    .then((data) => {
        // ... (el resto del código para procesar los datos es el mismo)
        if (!Array.isArray(data)) {
            throw new Error("La respuesta de la API de GitHub no es un formato válido.");
        }
        const filteredRepos = data.filter(repo => repo.name !== GITHUB_USERNAME && !repo.fork);
        const enhancedProjects = filteredRepos.map(repo => {
            const customData = projectData[repo.name] || {}; 
            return {
                id: repo.id,
                name: repo.name.replace(/[-_]/g, ' '),
                description: repo.description,
                url: repo.html_url,
                image: customData.image || defaultProjectImage,
                features: customData.features || [], 
                technologies: customData.technologies || (repo.language ? [repo.language] : [])
            };
        });
        setProjects(enhancedProjects);
    })
    .catch((error) => {
        console.error("Error al cargar los proyectos de GitHub:", error);
        setError(error.message);
    })
    .finally(() => {
        setLoading(false);
    });
}, []);

    // Si está cargando, muestra el mensaje de carga
    if (loading) {
        return <div className="text-center p-5">Loading projects from GitHub...</div>;
    }

    // Si hubo un error, muestra el mensaje de error en la página
    if (error) {
        return <div className="text-center p-5 text-danger">Error: {error}</div>;
    }

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
              <div className="project-showcase-list">
                  {projects.map((project, index) => (
                      <div key={project.id} className={`project-showcase-item ${index % 2 !== 0 ? "reversed" : ""}`}>
                          <div className="project-text-content">
                              <h3 className="project-title">{project.name}</h3>
                              <div className="project-description"><p>{project.description}</p></div>
                              <div className="project-features">
                                  <h4>Features</h4>
                                  <ul>
                                      {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                                  </ul>
                              </div>
                              <div className="project-footer">
                                  <div className="project-tech-list">
                                      {project.technologies.map(tech => <span key={tech}>{tech}</span>)}
                                  </div>
                                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-view-button">View Project</a>
                              </div>
                          </div>
                          <div className="project-image-content">
                              <img src={project.image} alt={`Cover of ${project.name}`} />
                          </div>
                      </div>
                  ))}
              </div>
          </Container>
      </HelmetProvider>
  );
};