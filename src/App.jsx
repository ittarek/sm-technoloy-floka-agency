import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';

import Team from './components/Team/Team';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import TechSection from './components/TechSection/TechSection';
import Insights from './components/Insights/insights';
import FAQSection from './components/FAQSection/FAQSection';
import './index.css';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="pt-20">
        {/* <Hero /> */}
        {/* <About /> */}
        {/* <Portfolio /> */}
        {/* Sticky wrapper */}
        <div className="relative">
          <div
            className="sticky  z-0"
            style={{ top: 'calc(-100vh + 130px)' }}>
            {/* <Services /> */}
          </div>

          <div className="relative z-10">
            {/* <MarqueeSection /> */}
            {/* <TechSection /> */}
            <Contact />
            {/* <Team /> */}
            {/* <FAQSection /> */}
            {/* <Testimonials /> */}
            {/* <Insights /> */}
          </div>
          {/* <Footer /> */}
        </div>{' '}
      </div>
    </>
  );
}

export default App;
