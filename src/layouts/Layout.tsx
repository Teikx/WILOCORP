import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, MessageSquare } from 'lucide-react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="app-container">
      {/* Navigation Header */}
      <motion.header
        className={`header ${scrolled ? 'header--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="header__inner">
          <a href="#inicio" className="logo">
            WILOCORP<span className="logo__dot">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <a href="#contacto" className="nav-cta btn-header">
              <span>Hablemos</span>
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="nav-mobile">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="nav-mobile-link"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contacto"
                className="nav-mobile-cta"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * navLinks.length, duration: 0.3 }}
              >
                <span>Hablemos</span>
                <ArrowUpRight size={18} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="main-content">{children}</main>

      {/* Editorial Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__info">
            <div className="footer__logo">WILOCORP.</div>
            <p className="footer__desc">
              Estudio multidisciplinario de diseño, desarrollo y análisis de datos. 
              Creamos soluciones digitales con carácter y rigurosidad técnica.
            </p>
            <div className="footer__socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#contacto" className="social-icon" aria-label="Contact">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          <div className="footer__links-group">
            <div className="footer__column">
              <span className="footer__title">Navegación</span>
              <a href="#inicio" className="footer__link">Inicio</a>
              <a href="#proyectos" className="footer__link">Proyectos</a>
              <a href="#equipo" className="footer__link">Equipo</a>
              <a href="#contacto" className="footer__link">Contacto</a>
            </div>

            <div className="footer__column">
              <span className="footer__title">Categorías</span>
              <a href="#proyectos?cat=ux-ui" className="footer__link">Diseño UX/UI</a>
              <a href="#proyectos?cat=dev" className="footer__link">Desarrollo Web</a>
              <a href="#proyectos?cat=nlp" className="footer__link">IA & NLP</a>
              <a href="#proyectos?cat=data" className="footer__link">Análisis SQL</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Wilocorp. Todos los derechos reservados.
          </p>
          <div className="footer__meta-info">
            <span>Sprint 1: Inicialización</span>
            <span className="status-dot"></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
