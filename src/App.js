import './index.css';
import Navbar from './Components/Layouts/Navbar/Navbar';
import HeroSection from './Components/Layouts/Hero/HeroSection';
import Sponsors from './Components/Layouts/Sponsor/Sponsor';
import AboutMe from './Components/Layouts/AboutMe/AboutMe';
import Projects from './Components/Layouts/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <div className='px-16'>
        <HeroSection />
        <Sponsors />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
}

export default App;
