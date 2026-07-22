import photo1 from '../assets/team/president.jpg'
import photo2 from '../assets/team/vice-president.jpg'
import photo3 from '../assets/team/secretaire-general.jpg'
import photo4 from '../assets/team/tresorier.jpg'
import photo5 from '../assets/team/responsable-technique.jpg'

const team = [
  { photo: photo1, name: 'Nom Prénom', role: 'Président' },
  { photo: photo2, name: 'Nom Prénom', role: 'Vice-Président' },
  { photo: photo3, name: 'Nom Prénom', role: 'Secrétaire Général' },
  { photo: photo4, name: 'Nom Prénom', role: 'Trésorier' },
  { photo: photo5, name: 'Nom Prénom', role: 'Responsable Technique' },
]

const loop = [...team, ...team]

export default function Team() {
  return (
    <section id="team">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Notre équipe</span>
          <h2 className="section-title">L'équipe A2S</h2>
        </div>
      </div>

      <div className="team-carousel">
        <div className="team-track">
          {loop.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-photo"><img src={m.photo} alt={m.name} /></div>
              <h4>{m.name}</h4>
              <div className="role">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}