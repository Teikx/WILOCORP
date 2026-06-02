import heroImg from '../assets/hero.png'
import './app.css'

function App() {
  return (
    <main className="page">
      <section className="hero" id="inicio">
        <div className="hero__copy">
          <span className="badge">Wilocorp Studio</span>
          <h1>
            Portafolio de un emprendimiento que disena marcas con caracter y
            proyeccion.
          </h1>
          <p>
            Transformamos ideas en identidad, web y contenido con estrategia.
            Somos un equipo pequeno, rapido y obsesionado con el detalle.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contacto">
              Trabajemos
            </a>
            <a className="btn btn--ghost" href="#proyectos">
              Ver proyectos
            </a>
          </div>
          <div className="hero__meta">
            <div className="meta">
              <span className="meta__label">Clientes</span>
              <span className="meta__value">12+</span>
            </div>
            <div className="meta">
              <span className="meta__label">Disciplinas</span>
              <span className="meta__value">Branding, Web, Contenido</span>
            </div>
            <div className="meta">
              <span className="meta__label">Base</span>
              <span className="meta__value">Latam</span>
            </div>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="orb"></div>
          <div className="mesh"></div>
          <img
            src={heroImg}
            className="hero__image"
            width="520"
            height="520"
            alt=""
          />
        </div>
      </section>
    </main>
  )
}

export default App
