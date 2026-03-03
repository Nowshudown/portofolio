
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';

const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-40 px-6 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 05. EXPÉRIENCES - Structured Editorial Timeline */}
        <div className="mb-60">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-primary"></span>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">05. Expériences</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                Parcours<br/>
                <span className="font-serif italic text-outline">Pro</span>
              </h2>
              <div className="h-px w-full bg-white/10 mb-8"></div>
            </div>
            
            <div className="lg:w-2/3 space-y-32">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="group border-b border-white/5 pb-20 last:border-0">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/4">
                      <div className="text-primary font-black text-[10px] uppercase tracking-[0.4em]">
                        {exp.period}
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-4xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors duration-500 text-white/90">
                        {exp.role}
                      </h4>
                      <div className="inline-block px-4 py-1 bg-white text-dark font-black text-[10px] uppercase tracking-[0.2em] mb-8">
                        {exp.company}
                      </div>
                      <div className="grid grid-cols-1 gap-6">
                        {exp.missions.map((m, j) => (
                          <div key={j} className="flex gap-6 group/item">
                            <div className="w-px h-4 bg-primary/30 group-hover/item:bg-primary transition-colors shrink-0 mt-1.5"></div>
                            <p className="text-white/80 text-lg font-light leading-relaxed">
                              {m}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 06. FORMATION - Minimalist Typography Grid */}
        <div className="mb-60">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-px bg-primary"></span>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">06. Formation</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-12">
                Mon<br/>
                <span className="font-serif italic text-outline">Cursus</span>
              </h2>
              <div className="h-px w-full bg-white/10 mb-8"></div>
              <p className="text-white/80 font-light text-xl leading-relaxed italic">
                Forger l'esprit critique à travers l'excellence académique.
              </p>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 gap-16">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="group border-l-4 border-white/5 pl-12 py-4 hover:border-primary transition-all duration-500">
                  <div className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-4">
                    {edu.year}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-none group-hover:text-primary transition-colors font-display text-white/95">
                    {edu.degree}
                  </h4>
                  <p className="text-white/70 text-lg font-medium uppercase tracking-widest mb-6">
                    {edu.institution}
                  </p>
                  <p className="text-white/80 text-lg font-light leading-relaxed italic border-t border-white/5 pt-6">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceEducation;
