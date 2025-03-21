import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Timeline from '../components/Timeline';
import Prizes from '../components/Prizes';
import Committee from '../components/Committee';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Timeline />
      <Committee />
      <Contact />
      <Footer />
    </main>
  );
}