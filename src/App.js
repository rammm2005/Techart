import './index.css';
import Navbar from './Components/Layouts/Navbar/Navbar';
import HeroSection from './Components/Layouts/Hero/HeroSection';

function App() {
  return (
    <>
      <Navbar />
      <div className='px-16'>
        <HeroSection />
      </div>
    </>
  );
}

export default App;
