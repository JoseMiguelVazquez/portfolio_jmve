import { BrowserRouter, Link } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center mb-16'>
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Projects />
        {/* <Feedbacks /> */}
        <div className='h-screen flex items-center xl:justify-center'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        <footer className='flex flex-col items-center pb-4 text-gray-400 -mt-5'>
          <p className='py-px'>
            <Link to='https://www.linkedin.com/in/jos%C3%A9-miguel-v%C3%A1zquez-espinosa-35a97691/' className='text-[14px] underline' target='_blank' rel='noreferrer'>Portfolio created by José Miguel Vázquez</Link>
          </p>
          <p className='py-px'>
            <Link to='https://www.freepik.com/' className='text-[14px] underline' target='_blank' rel='noreferrer'>Hero Image Designed by stories / Freepik</Link>
          </p>
          <p className='text-[14px] py-px'>
            This work uses <Link to='https://sketchfab.com/3d-models/coffee-cup-a6b4a3eccaf5449d99b25f0e53bf9962' target='_blank' rel='noreferrer' className='underline'>"Coffee Cup"</Link> by <Link to='https://sketchfab.com/drobluda' target='_blank' rel='noreferrer' className='underline'>Tiago Lopes</Link> licensed under <Link to='http://creativecommons.org/licenses/by/4.0/' target='_blank' rel='noreferrer' className='underline'>CC-BY-4.0</Link>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
