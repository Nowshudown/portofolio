
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Methodology from './components/Methodology';
import ExperienceEducation from './components/ExperienceEducation';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const scaleUp = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    };

    const scaleDown = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', scaleUp);
    window.addEventListener('mouseup', scaleDown);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', scaleUp);
      window.removeEventListener('mouseup', scaleDown);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-dark">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />                 {/* 1. Hero */}
        <About />                {/* 2. À Propos */}
        <Skills />               {/* 3. Compétences */}
        <Projects />             {/* 4. Projets */}
        <Methodology />          {/* 5. Méthodologie */}
        <ExperienceEducation />  {/* 6. Expériences & 7. Formation & 8. Réalisations */}
        <CTA />                  {/* 9. Call to Action */}
        <Contact />              {/* 10. Contact */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
