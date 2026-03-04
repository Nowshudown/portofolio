
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dark pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-dark to-transparent z-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Adja Fatou<br/>
            <span className="text-outline italic">Sagna</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-xl mb-12">
            Data Scientist / Data Analyst spécialisée en <span className="text-white font-bold underline decoration-primary decoration-2 underline-offset-8">IA & Big Data</span>. Je développe des solutions de Machine Learning pour transformer les données en décisions stratégiques.
          </p>

          <div className="flex flex-wrap gap-6">
            <a href="#projects" className="px-8 py-5 bg-white text-dark font-black rounded-2xl hover:bg-primary transition-all flex items-center gap-3">
              VOIR MES PROJETS <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-8 py-5 border border-white/20 text-white font-black rounded-2xl hover:bg-white hover:text-dark transition-all">
              ME CONTACTER
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
           <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] group">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {/* Photo Placeholder - Replace with real image URL */}
              <div className="w-full h-full bg-slate-900 rounded-[3rem] border border-white/10 overflow-hidden relative transition-all duration-700">
                <img 
                  src="/images/me.jpeg" 
                  className="w-full h-full object-cover"
                  alt="Adja Fatou Sagna"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
