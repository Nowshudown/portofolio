
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-black text-primary tracking-[0.4em] uppercase mb-16 border-l-4 border-primary pl-6 py-1 bg-primary/5 inline-block pr-8 rounded-r-lg">08. Contact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
              Prêt à <span className="text-outline italic">Innover ?</span>
            </h3>
            <p className="text-xl text-slate-300 font-light mb-16 leading-relaxed">
              Une idée de projet, une opportunité de collaboration ou simplement envie de discuter de Data Analyst et d'IA ? Écrivez-moi.
            </p>
            
            <div className="space-y-8">
              <a href="mailto:wwwtanorawa.com@gmail.com" className="block group">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Email Direct</span>
                <span className="text-2xl font-bold group-hover:text-primary transition-colors underline decoration-1 underline-offset-8">adjakimfatima@gmail.com</span>
              </a>
              <div className="flex gap-8">
                <a href="https://www.linkedin.com/in/adja-fatou-sagna-950359335/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVp3ZjKjGQhuW0tyNHf3qSQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-10 h-10" /></a>
                <a href="https://github.com/Adjakim" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github className="w-10 h-10" /></a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 shadow-2xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nom Complet</label>
                  <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-slate-600" placeholder="Adja Fatou" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-slate-600" placeholder="adja@gmail.com" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message</label>
                <textarea className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-primary h-32 transition-all text-white placeholder:text-slate-600" placeholder="Dites-moi tout..."></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-dark font-black rounded-2xl hover:bg-white transition-all uppercase tracking-widest text-xs shadow-lg">
                Envoyer la requête
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
