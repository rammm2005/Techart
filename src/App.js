import './index.css';
import Navbar from './Components/Layouts/Navbar/Navbar';
import HeroSection from './Components/Layouts/Hero/HeroSection';
import Sponsors from './Components/Layouts/Sponsor/Sponsor';
import AboutMe from './Components/Layouts/AboutMe/AboutMe';
import SwiperService from './Components/Service/ServiceSwiper';

function App() {
  return (
    <>
      <Navbar />
      <main className='px-16'>
        <HeroSection />
        <Sponsors />
        <AboutMe />
        <SwiperService />
      </main>
    </>
  );
}

export default App;
