import { useState, useEffect } from 'react';
import { usePortfolio } from './context/PortfolioContext';
import Review from './components/review';
import Contact from './components/contact';
import Project from './components/project';
import Education from './components/education';
import Experience from './components/experience';
import About from './components/about';
import Home from './components/home';
import Header from './components/header';
import { PortfolioSettings } from "./constants/settings";
import DownloadResume from './components/downloadResume';

function App() {
  const { portfolio } = usePortfolio();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = PortfolioSettings.menus;
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  if (!portfolio) {
    return <div>Loading...</div>;
  }


  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection} />

      <main>
        <Home scrollToSection={scrollToSection} />
        <About />
        <Experience />
        <Education />
        <Project />
        <Review />
        <Contact />
        <DownloadResume isScrolled={isScrolled} />
      </main>
    </div>
  );
}

export default App;
