
import React from 'react';
import { ArrowRight, Send } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-[#0A0C10] rounded-[4rem] p-16 md:p-32 relative overflow-hidden group border border-white/5 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-8">Prêt à collaborer ?</div>
            <h2 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-12 max-w-4xl">
              Transformons vos données en <span className="text-primary italic">valeur stratégique</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl font-medium max-w-2xl mb-16 leading-relaxed">
              Que ce soit pour un projet d'IA, une analyse prédictive ou une architecture de données, je suis là pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contact" className="px-12 py-6 bg-primary text-dark font-black rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl flex items-center gap-3">
                Démarrer un projet <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:adjakimfatima@gmail.com" className="px-12 py-6 border-2 border-white/10 text-white font-black rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-dark transition-all flex items-center gap-3">
                Envoyer un email <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
