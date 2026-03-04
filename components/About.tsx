
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-black text-primary tracking-[0.4em] uppercase border-l-4 border-primary pl-6 py-1 bg-primary/5 inline-block pr-8 rounded-r-lg">02. À Propos</h2>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
              Transformer la <span className="italic">complexité des données</span> en <span className="text-primary underline">leviers de décision</span>.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-300 text-lg font-light leading-relaxed">
              <p>
                Data Analyst / Scientist  orienté Intelligence Artificielle et Big Data, j’accompagne les organisations dans l’exploitation stratégique de leurs données afin d’améliorer la performance, anticiper les tendances et optimiser la prise de décision.
              </p>
              <p>
                J’interviens sur l’ensemble du cycle de vie de la donnée : collecte, nettoyage, analyse exploratoire, modélisation prédictive et déploiement de solutions analytiques.
              </p>
            </div>
            
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Formation', val: 'Master en Intelligence artificielle, Big data et développement' },
                { label: 'Spécialité', val: 'Net analyse et Science des données' },
                { label: 'Outils', val: 'python ,sql ,git, power bi , docker , unbuntu' },
                { label: 'Localisation', val: 'Paris / Dakar' }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/5 bg-white/2 rounded-2xl">
                  <div className="text-[10px] text-primary font-black uppercase tracking-widest mb-2">{item.label}</div>
                  <div className="text-lg font-bold text-white">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
