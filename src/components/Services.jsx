export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Nos services</span>
          <h2 className="section-title">Des solutions techniques taillées pour votre besoin</h2>
          <p className="section-lead">
            Du site vitrine à l'architecture cloud complète, notre équipe couvre l'ensemble de la
            chaîne technique.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-tag">WEB</span>
            <h3>Web & Mobile</h3>
            <p>Sites vitrines, applications web et mobiles sur mesure, du design à la mise en production.</p>
            <div className="tools"><span>React</span><span>Node.js</span><span>Flutter</span></div>
          </div>
          <div className="service-card">
            <span className="service-tag">CLD</span>
            <h3>Cloud & DevOps</h3>
            <p>Architecture, migration et automatisation d'infrastructures cloud pour vos applications.</p>
            <div className="tools"><span>OCI</span><span>AWS</span><span>Docker</span></div>
          </div>
          <div className="service-card">
            <span className="service-tag">IOT</span>
            <h3>IoT & Réseaux</h3>
            <p>Conception de systèmes connectés et de solutions réseaux, cœur de métier historique de l'INPT.</p>
            <div className="tools"><span>MQTT</span><span>Raspberry Pi</span><span>LoRa</span></div>
          </div>
          <div className="service-card">
            <span className="service-tag">AI</span>
            <h3>IA & Data</h3>
            <p>Analyse de données et modèles d'intelligence artificielle pour éclairer vos décisions.</p>
            <div className="tools"><span>Python</span><span>ML</span><span>Dashboards</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}