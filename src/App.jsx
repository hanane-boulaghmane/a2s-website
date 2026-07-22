import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Why from './components/Why'
import Services from './components/Services'
import Process from './components/Process'
import Team from './components/Team'
import Footer from './components/Footer'
import './components/Header.css'
import './components/Hero.css'
import './components/About.css'
import './components/Why.css'
import './components/Services.css'
import './components/Process.css'
import './components/Team.css'
import './components/Footer.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Why />
        <Services />
        <Process />
        <Team />
      </main>
      <Footer />
    </>
  )
}

export default App