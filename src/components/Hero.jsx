export default function Hero() {
  return (
    <section className="hero" id="top">
      <canvas id="network-canvas"></canvas>

      <svg className="hero-mark" viewBox="0 0 300 300" fill="none" aria-hidden="true">
        <polygon points="90,20 140,20 60,280 10,280" fill="var(--signal)" />
        <polygon points="160,20 200,20 120,280 80,280" fill="var(--text)" opacity="0.5" />
        <polygon points="220,20 250,20 170,280 140,280" fill="var(--signal)" opacity="0.35" />
      </svg>

      <div className="hero-inner">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Junior Entreprise · INPT Rabat</span>
            <h1>
              <span className="line-white">Connecter les idées,</span>
              <span className="line-blue">déployer l'impact.</span>
            </h1>
            <p className="lead">
              A2S est la Junior Entreprise de l'INPT (Institut National des Postes et
              Télécommunications). Nos étudiants-ingénieurs conçoivent des solutions Web, Cloud,
              IoT et IA pour des entreprises qui veulent avancer vite.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Démarrer un projet →</a>
              <a href="#services" className="btn btn-ghost">Voir nos services</a>
            </div>
          </div>

          <div className="signal-card">
            <div className="freq"><span>SIGNAL_STATUS</span><span>ACTIF</span></div>
            <div className="bars">
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </div>
            <p className="caption">
              <b>12+ projets</b> livrés à des entreprises partenaires depuis la création d'A2S.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}