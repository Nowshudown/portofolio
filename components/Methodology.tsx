
import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Compréhension Métier',
      description: 'Définition des objectifs, identification des problématiques et traduction des besoins business en objectifs Data Science.'
    },
    {
      id: '02',
      title: 'Exploration & Préparation',
      description: 'Nettoyage des données, analyse exploratoire (EDA) et feature engineering pour extraire le maximum de valeur.'
    },
    {
      id: '03',
      title: 'Modélisation IA',
      description: 'Sélection et entraînement des algorithmes (ML/DL), optimisation des hyperparamètres et validation croisée.'
    },
    {
      id: '04',
      title: 'Évaluation & Déploiement',
      description: 'Mesure de l\'impact réel, tests de robustesse et mise en production via des APIs ou dashboards interactifs.'
    }
  ];

  return (
    <section id="methodology" className="py-40 px-6 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-end mb-32">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-primary"></span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Méthodologie</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8]">
              Mon<br/>
              <span className="font-serif italic text-outline">Approche</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-white/80 text-xl font-light leading-relaxed max-w-lg">
              Une démarche rigoureuse basée sur le cycle CRISP-DM pour garantir des résultats exploitables et un impact business mesurable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="group relative p-10 bg-white/[0.03] border border-white/10 hover:border-primary transition-all duration-500 rounded-3xl overflow-hidden">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs mb-8">
                  {step.id}
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                <p className="text-white/60 text-base font-light leading-relaxed group-hover:text-white/90 transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
