
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Large Logo/Name */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-black gradient-text tracking-tighter mb-4">ADJA Fatou Sagna</h2>
          
          {/* Social Links - Clean, well-spaced under the name */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.linkedin.com/in/adja-fatou-sagna-950359335/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVp3ZjKjGQhuW0tyNHf3qSQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Adjakim" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:adjakimfatima@gmail.com" className="text-slate-400 hover:text-primary transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base font-light leading-relaxed">
            Data Analyst / Scientist
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>

        {/* Copyright */}
        <div className="text-slate-600 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
          © {new Date().getFullYear()} Adja Fatou Sagna. Powered by Noshutdown.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
