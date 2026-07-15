import { motion } from 'framer-motion';
import { ExternalLink, Layers, Cpu, ArrowRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Reveal animation variant when card comes into viewport
  const revealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
        delay: index * 0.1, // Stagger effect based on grid layout order
      },
    },
  };

  // Hover and interactive animations
  const hoverAnimation = {
    y: -8,
    scale: 1.02,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 20,
    },
  };

  // Select appropriate icon and badge text depending on project type
  const getTypeConfig = (type: Project['type']) => {
    switch (type) {
      case 'demo':
        return {
          icon: <ExternalLink size={18} />,
          badgeText: 'Demo en Vivo',
          className: 'project-card--demo',
        };
      case 'case-study':
        return {
          icon: <Layers size={18} />,
          badgeText: 'Caso de Estudio',
          className: 'project-card--case-study',
        };
      case 'architecture':
        return {
          icon: <Cpu size={18} />,
          badgeText: 'Arquitectura Técnica',
          className: 'project-card--architecture',
        };
      default:
        return {
          icon: <ExternalLink size={18} />,
          badgeText: 'Proyecto',
          className: '',
        };
    }
  };

  const { icon, badgeText, className } = getTypeConfig(project.type);

  return (
    <motion.div
      className={`project-card ${className}`}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={hoverAnimation}
    >
      {/* Decorative top color accent strip */}
      <div className="project-card__accent" />

      <div className="project-card__header">
        <span className="project-card__badge">
          {badgeText}
        </span>
        <div className="project-card__icon-wrapper">
          {icon}
        </div>
      </div>

      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        
        {/* Technologies Grid */}
        <div className="project-card__tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__footer">
        <a 
          href={project.link} 
          target={project.type === 'demo' ? '_blank' : '_self'} 
          rel="noopener noreferrer"
          className="project-card__link"
        >
          <span>{project.linkLabel}</span>
          <ArrowRight size={16} className="arrow-icon" />
        </a>
      </div>
    </motion.div>
  );
}
