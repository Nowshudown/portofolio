
import React from 'react';
import { PROJECTS } from '../constants';

const BentoProjects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex items-end justify-between border-b border-white/10 pb-12">
          <div>
            <h2 className="text-sm font-black text-primary tracking-[0.4em] uppercase mb-4">Case Studies</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight uppercase font-display">
              Portfolio <span className="text-outline">Alpha</span>
            </h3>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">Selected Works • 2024 Edition</p>
          </div>
        </div>

        <div className="bento-grid">
          {/* Main Large Card */}
          <div className="md:col-span-2 md:row-span-2 glass-panel rounded-[3rem] overflow-hidden group relative">
            <img src={PROJECTS[0].imageUrl} className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" alt=""/>
            <div className="relative z-10 p-12 h-full flex flex-col justify-end">
              <div className="mb-6">
                <span className="px-4 py-2 bg-primary text-dark text-[10px] font-black rounded-full uppercase tracking-tighter">Feature Project</span>
              </div>
              <h4 className="text-4xl font-black mb-4 uppercase leading-none">{PROJECTS[0].title}</h4>
              {/* Fix: description property is now available on Project type */}
              <p className="text-slate-400 mb-8 max-w-sm">{PROJECTS[0].description}</p>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center transition-transform group-hover:translate-x-2">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Medium Tech Card */}
          <div className="md:col-span-2 md:row-span-1 glass-panel rounded-[3rem] p-10 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary text-2xl">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <span className="font-mono text-xs text-slate-500">02 / NLP & AI</span>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2 uppercase">{PROJECTS[1].title}</h4>
              {/* Fix: Replaced non-existent 'tags' property with 'tech' */}
              <p className="text-slate-500 text-sm">{PROJECTS[1].tech.join(' • ')}</p>
            </div>
          </div>

          {/* Small Dynamic Card */}
          <div className="md:col-span-1 md:row-span-1 glass-panel rounded-[3rem] p-10 flex flex-col justify-center items-center text-center hover:bg-primary/5">
             <i className="fa-brands fa-github text-4xl mb-6 text-slate-500 group-hover:text-white transition-colors"></i>
             <span className="text-xs font-black tracking-widest uppercase">Open Source</span>
          </div>

          {/* Visual Showcase Card */}
          <div className="md:col-span-1 md:row-span-1 glass-panel rounded-[3rem] overflow-hidden relative">
            <img src={PROJECTS[2].imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform group-hover:scale-110" alt=""/>
            <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
              <span className="font-display font-black text-2xl uppercase">Vision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoProjects;
