
import React from 'react';
import { SKILL_GROUPS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-black text-primary tracking-[0.4em] uppercase mb-16 border-l-4 border-primary pl-6 py-1 bg-primary/5 inline-block pr-8 rounded-r-lg">03. Compétences</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className="glass-panel p-10 rounded-[3rem] border border-white/5">
              <h3 className="text-2xl font-bold mb-10 uppercase tracking-tighter text-white/90">{group.category}</h3>
              <div className="space-y-8">
                {group.skills.map((skill) => {
                  // @ts-ignore - Dynamically access Lucide icons
                  const IconComponent = LucideIcons[skill.icon] || LucideIcons.HelpCircle;
                  
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                          <span className="text-sm font-bold tracking-tight">{skill.name}</span>
                        </div>
                        <span className="font-mono text-xs opacity-40">{skill.level}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-1000 group-hover:bg-white"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
