import './index.css';
import Navbar from './Components/Layouts/Navbar/Navbar';
import HeroSection from './Components/Layouts/Hero/HeroSection';
import Sponsors from './Components/Layouts/Sponsor/Sponsor';
import AboutMe from './Components/Layouts/AboutMe/AboutMe';
import Projects from './Components/Layouts/Projects/Projects';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <div className='px-16'>
        <HeroSection />
        <Sponsors />
        <AboutMe />
        <Projects />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
