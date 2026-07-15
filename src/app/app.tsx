import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import './app.css';

function App() {
  return (
    <Layout>
      {/* Hero Welcome Section */}
      <Hero />

      {/* Projects Showcase Section */}
      <ProjectsSection />

      {/* Team Section Placeholder */}
      <section className="section-container section-container--alt" id="equipo">
        <div className="section-header">
          <span className="section-eyebrow">02 // Talento Multidisciplinario</span>
          <h2 className="section-title">El Equipo Wilocorp</h2>
          <p className="section-desc">
            Ingenieros, diseñadores y analistas trabajando en perfecta sinergia.
          </p>
        </div>

        <div className="team-grid">
          <div className="team-member-card">
            <div className="member-avatar member-avatar--wilbert"></div>
            <h4>Wilbert Cardenas</h4>
            <span className="member-role">Tech Lead & NLP Engineer</span>
          </div>
          <div className="team-member-card">
            <div className="member-avatar member-avatar--camilo"></div>
            <h4>Camilo Timoteo</h4>
            <span className="member-role">UX/UI & Frontend Developer</span>
          </div>
          <div className="team-member-card">
            <div className="member-avatar member-avatar--jose"></div>
            <h4>Jose Pantoja</h4>
            <span className="member-role">Senior Data & SQL Analyst</span>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section className="section-container" id="contacto">
        <div className="contact-box">
          <span className="contact-eyebrow">¿Tienes un proyecto en mente?</span>
          <h2 className="contact-title">Hagamos algo extraordinario juntos.</h2>
          <p className="contact-desc">
            ¿Buscas robustez técnica, diseño de marca de alta gama o automatización inteligente? Escríbenos.
          </p>
          <a href="mailto:hola@wilocorp.com" className="btn btn--explore">
            Iniciar Conversación
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default App;
