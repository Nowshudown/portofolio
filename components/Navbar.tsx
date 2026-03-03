
import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Méthodologie', href: '#methodology' },
    { name: 'Expériences', href: '#experience' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[1000] px-6 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className={`rounded-full px-6 md:px-10 py-4 flex justify-between items-center border shadow-2xl transition-all duration-500 ${isScrolled ? 'bg-black border-white/30 py-4 opacity-100' : 'bg-black/90 backdrop-blur-xl border-white/10'}`}>
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center text-dark rounded-full font-black text-lg md:text-xl transition-all duration-500 ${isScrolled ? 'scale-75' : 'scale-100'}`}>
                A
              </div>
              <span className={`text-sm md:text-lg font-black tracking-tighter uppercase hidden xs:block transition-all duration-500 ${isScrolled ? 'text-white text-xs md:text-sm' : 'text-white'}`}>ADJA SAGNA</span>
            </div>

            <div className="flex items-center gap-4 md:gap-10">
              <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">{link.name}</a>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <a href="#contact" className={`hidden sm:inline-block px-6 py-3 bg-primary text-dark font-black rounded-full text-[10px] uppercase tracking-widest hover:scale-105 transition-transform ${isScrolled ? 'scale-90' : 'scale-100'}`}>
                  Contact
                </a>
                
                {/* Mobile Menu Toggle */}
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden w-10 h-10 flex items-center justify-center z-[1100]"
                  aria-label="Toggle Menu"
                >
                  {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-dark z-[1050] transition-all duration-700 ease-in-out lg:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col h-full justify-center px-8 md:px-20 gap-16">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-primary"></span>
            <div className="text-primary font-black text-[10px] uppercase tracking-[0.5em]">Menu</div>
          </div>
          
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl md:text-5xl font-black uppercase tracking-tighter hover:text-primary transition-all group flex items-baseline gap-4"
              >
                <span className="text-white/10 font-mono text-xs group-hover:text-primary/40 transition-colors">0{i + 1}</span>
                <span className="group-hover:translate-x-4 transition-transform duration-500">{link.name}</span>
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="mt-10 inline-block w-fit px-8 py-4 bg-primary text-dark font-black rounded-full text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Me Contacter
            </a>
          </div>
          
          <div className="mt-10 border-t border-white/5 pt-10">
            <div className="text-white/20 text-[10px] uppercase tracking-[0.3em] mb-6">Connect</div>
            <div className="flex gap-10 text-xl text-white/40">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="https://github.com/Adjakim" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
            <a href="mailto:adjakimfatima@gmail.com" className="hover:text-primary transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
