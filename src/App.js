import './index.css';
import Navbar from './Components/Layouts/Navbar/Navbar';
import HeroSection from './Components/Layouts/Hero/HeroSection';
import Sponsors from './Components/Layouts/Sponsor/Sponsor';
import AboutMe from './Components/Layouts/AboutMe/AboutMe';

function App() {
  return (
    <>
      <Navbar />
      <div className='px-16'>
        <HeroSection />
        <Sponsors />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
