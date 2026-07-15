import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';
import './ProjectsSection.css';

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="proyectos">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <span className="projects-eyebrow">01 // Casos de Estudio</span>
          <h2 className="projects-title">Portafolio de Proyectos</h2>
          <p className="projects-desc">
            Una muestra de nuestro trabajo multidisciplinario abarcando desde investigación UX y desarrollo Frontend, hasta optimización de consultas SQL y modelos NLP.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="projects-grid">
          {portfolioData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
