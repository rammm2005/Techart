import './index.css';
import Navbar from './Components/Layouts/Navbar/Navbar';
import HeroSection from './Components/Layouts/Hero/HeroSection';
import Sponsors from './Components/Layouts/Sponsor/Sponsor';
import AboutMe from './Components/Layouts/AboutMe/AboutMe';
import Projects from './Components/Layouts/Projects/Projects';
import Testimonials from './Components/Layouts/Testimonials/Testimonials';
import Blogs from './Components/Layouts/Blogs/Blogs';
import SwiperService from './Components/Service/ServiceSwiper';
import Contact from './Components/Layouts/Contact/Contact';
import Footer from './Components/Layouts/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className='px-16'>
        <HeroSection />
        <Sponsors />
        <AboutMe />
        <SwiperService />
        <Projects />
        <Testimonials />
        <Blogs />
      </main>
        <Contact />
        <Footer />
    </>
  );
}

export default App;
