
import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24">
          <h2 className="text-sm font-black text-primary tracking-[0.4em] uppercase border-l-4 border-primary pl-6 py-1 bg-primary/5 inline-block pr-8 rounded-r-lg">04. Projets & Lab</h2>
          <a href="https://github.com/Adjakim" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-4 text-xs font-black uppercase tracking-widest hover:text-primary transition-all">
            Archive GitHub <Github className="w-5 h-5" />
          </a>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((p, i) => (
            <div key={p.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
              <div className="lg:w-1/2 group">
                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors duration-500 aspect-video shadow-xl">
                  <img src={p.imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={p.title} />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="flex gap-3 mb-6 flex-wrap">
                  {p.tech.map(t => <span key={t} className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">{t}</span>)}
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-none tracking-tighter">{p.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-2">Problème</h4>
                    <p className="text-slate-300 font-light">{p.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-white/60 uppercase tracking-widest mb-2">Solution</h4>
                    <p className="text-slate-300 font-light">{p.solution}</p>
                  </div>
                  <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl">
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Impact / Résultats</h4>
                    <p className="text-white font-medium">{p.results}</p>
                  </div>
                </div>
                
                <div className="mt-10 flex gap-6">
                  {p.githubUrl && (
                    <a 
                      href={p.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-primary hover:text-dark hover:border-primary transition-all"
                    >
                      VOIR LE CODE SOURCE <Code className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
