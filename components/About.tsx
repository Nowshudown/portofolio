
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
                Data Scientist en formation spécialisée en Intelligence Artificielle et Big Data, je développe des solutions basées sur le Machine Learning et le Deep Learning pour analyser les données et aider à la prise de décision.
              </p>
              <p>
                Je maîtrise l'intégralité du cycle de vie des données : du nettoyage et l'analyse exploratoire à la modélisation statistique avancée et au déploiement d'applications IA performantes.
              </p>
            </div>
            
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Formation', val: 'Master IA' },
                { label: 'Spécialité', val: 'Deep Learning' },
                { label: 'Outils', val: 'TensorFlow' },
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
