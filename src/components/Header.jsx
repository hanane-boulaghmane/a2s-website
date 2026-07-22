import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header>
      <nav>
        <a href="#top" className="logo">
          <img src={logo} alt="A2S — Actions Services & Solutions" width="34" height="34" />
          <span className="logo-text">
            A2S<span style={{ color: 'var(--muted)', fontWeight: 400 }}>.inpt</span>
          </span>
        </a>

        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#team">Équipe</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-cta">Démarrer un projet</a>
      </nav>
    </header>
  )
}