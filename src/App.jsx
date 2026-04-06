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
import { Awards } from './components/Awards/Awards';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Portfolio />

        <div style={{ position: 'relative' }}>
          {/* ✅ Sticky wrapper */}
          <div style={{ height: '200vh' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 0 }}>
              <Services />
            </div>
          </div>

          {/* ✅ বাকি content — Services এর উপর দিয়ে আসবে */}
          <div style={{ position: 'relative', zIndex: 10, background: '#f5f5f3' }}>
            <TechSection />
            <Contact />
            <Awards />
            <Team />
            <FAQSection />
            <Insights />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
