import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Eye, GitBranch, Cpu } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  // Animation variants for staggered cascade fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 18,
      },
    },
  };

  const visualVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 60,
        damping: 15,
        delay: 0.4,
      },
    },
  };

  // Bounce animation loop on button hover
  const buttonBounce = {
    hover: {
      y: [0, -6, 0],
      transition: {
        repeat: Infinity,
        duration: 0.8,
        ease: 'easeInOut' as const,
      },
    },
    tap: { scale: 0.95 },
  };

  const disciplines = [
    { name: 'Diseño UX/UI', icon: <Eye size={16} />, color: '#fd6d4d' },
    { name: 'Desarrollo Web', icon: <Code size={16} />, color: '#84c2ff' },
    { name: 'Análisis SQL', icon: <Database size={16} />, color: '#10b981' },
    { name: 'NLP & IA', icon: <Cpu size={16} />, color: '#a78bfa' },
  ];

  return (
    <section className="hero-section" id="inicio">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Copy and Interactions */}
        <div className="hero-copy">
          <motion.div variants={itemVariants} className="hero-badge-container">
            <span className="hero-badge">Estudio Colaborativo // Sprint 1</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Creamos productos <br />
            digitales con <span className="hero-highlight">carácter</span> y 
            <span className="hero-highlight-alt"> precisión</span>.
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Somos un equipo multidisciplinario enfocado en la excelencia técnica. 
            Desde interfaces en Figma y desarrollo robusto en React, hasta pipelines 
            de datos SQL y modelos avanzados de NLP.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-actions">
            <motion.a
              href="#proyectos"
              className="btn btn--explore"
              variants={buttonBounce}
              whileHover="hover"
              whileTap="tap"
            >
              <span>Explorar Proyectos</span>
              <ArrowRight size={18} />
            </motion.a>
            <a href="#contacto" className="btn btn--secondary">
              Conoce al Equipo
            </a>
          </motion.div>

          {/* Collaborative Stats */}
          <motion.div variants={itemVariants} className="hero-stats">
            <div className="stat-card">
              <span className="stat-num">05</span>
              <span className="stat-label">Especialistas</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">UX & Dev</span>
              <span className="stat-label">Enfoque Core</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">Data & NLP</span>
              <span className="stat-label">Inteligencia</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Visual Element */}
        <motion.div
          className="hero-visual-wrapper"
          variants={visualVariants}
        >
          <div className="visual-scene">
            {/* Glowing backgrounds */}
            <div className="glow-orb glow-orb--primary" />
            <div className="glow-orb glow-orb--secondary" />

            {/* Floating Glassmorphic Card Showcase */}
            <div className="glass-board">
              <div className="glass-board__header">
                <div className="window-dots">
                  <span className="dot dot--red"></span>
                  <span className="dot dot--yellow"></span>
                  <span className="dot dot--green"></span>
                </div>
                <div className="window-title">wilocorp_workspace.ts</div>
              </div>

              <div className="glass-board__body">
                <div className="code-snippet">
                  <span className="code-keyword">const</span> <span className="code-name">teamCapabilities</span> = [
                </div>

                <div className="disciplines-grid">
                  {disciplines.map((disc, idx) => (
                    <motion.div
                      key={disc.name}
                      className="discipline-pill"
                      whileHover={{ scale: 1.05, x: 5, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                      transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition-delay={idx * 0.1}
                    >
                      <div className="pill-icon-wrapper" style={{ backgroundColor: `${disc.color}15`, color: disc.color }}>
                        {disc.icon}
                      </div>
                      <span className="pill-name">{disc.name}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="code-snippet">
                  ];
                </div>

                {/* Team Status Capsule */}
                <div className="team-status-capsule">
                  <div className="pulse-indicator"></div>
                  <span className="status-text">Listo para Colaborar (5/5 en línea)</span>
                </div>
              </div>
            </div>

            {/* Extra floating accent card */}
            <motion.div
              className="accent-card"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' as const }}
            >
              <div className="accent-card__header">
                <GitBranch size={14} className="accent-card__icon" />
                <span>Active Branch</span>
              </div>
              <div className="accent-card__value">main</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
