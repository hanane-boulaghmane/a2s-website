export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about-text">
          <span className="eyebrow">À propos d'A2S</span>
          <h2 className="section-title">L'expertise télécom & cloud de l'INPT, au service de votre projet</h2>
          <p>
            A2S rassemble des étudiants ingénieurs de l'INPT, formés aux réseaux, aux systèmes
            Cloud & IoT, à la data et au développement logiciel. Chaque projet est encadré par un
            chef de projet dédié et validé par notre pôle qualité avant livraison.
          </p>
          <p>
            Nous fonctionnons comme une vraie entreprise : cahier des charges, devis, jalons,
            livrables — avec l'agilité et l'enthousiasme d'une équipe étudiante qui a envie de
            prouver ce qu'elle sait faire.
          </p>
          <a href="#contact" className="btn btn-ghost" style={{ marginTop: 8 }}>
            Discuter de votre besoin →
          </a>
        </div>

        <div className="stat-grid">
          <div className="stat"><div className="num">12</div><div className="label">Projets livrés</div></div>
          <div className="stat"><div className="num">30</div><div className="label">Membres actifs</div></div>
          <div className="stat"><div className="num">8</div><div className="label">Entreprises partenaires</div></div>
          <div className="stat"><div className="num">4</div><div className="label">Pôles d'expertise</div></div>
        </div>
      </div>
    </section>
  )
}