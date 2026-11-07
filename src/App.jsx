import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import UseCases from './components/UseCases'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <UseCases />
        <WhyChooseUs />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
