import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import TechSection from './components/TechSection/TechSection';
import Insights from './components/Insights/insights';
import FAQSection from './components/FAQSection/FAQSection';
import './index.css';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="pt-20">
        {/* <Hero /> */}
        <About />
        {/* <Portfolio /> */}
        <Services />
        {/* <MarqueeSection /> */}
        <TechSection />
        <Team />
        <FAQSection />
        <Testimonials />
        <Contact />
        <Insights />
      </div>
      <Footer />
    </>
  );
}

export default App;
