import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services, { Marquee } from './components/Services.jsx';
import { Showcase, Stats } from './components/Showcase.jsx';
import Process from './components/Process.jsx';
import Reviews from './components/Reviews.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Showcase />
        <Stats />
        <Process />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  );
}