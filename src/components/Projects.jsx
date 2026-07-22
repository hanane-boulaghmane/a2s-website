export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Nos réalisations</span>
          <p className="section-lead">
            À personnaliser avec vos vrais projets, captures d'écran et clients au fur et à mesure
            des livraisons.
          </p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-thumb">[ Capture du projet ]</div>
            <div className="project-body">
              <span className="cat">WEB · PLATEFORME</span>
              <h3>Plateforme collaborative</h3>
              <p>Application web temps réel pour la gestion et le suivi de projets d'équipe.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-thumb">[ Capture du projet ]</div>
            <div className="project-body">
              <span className="cat">IOT · MONITORING</span>
              <h3>Système de supervision connecté</h3>
              <p>Solution IoT de collecte et de visualisation de données capteurs en temps réel.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-thumb">[ Capture du projet ]</div>
            <div className="project-body">
              <span className="cat">CLOUD · MIGRATION</span>
              <h3>Migration cloud PME</h3>
              <p>Accompagnement d'une PME vers une infrastructure cloud scalable et sécurisée.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}