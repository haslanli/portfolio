import React from 'react';
import { SKILLS, EDUCATION, LEARNING_PATH } from '../constants';
import { Code, Terminal, Shield, Cpu, GraduationCap, Loader2, Target, ExternalLink } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = {
    Language: { icon: Code, color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/20' },
    Tool: { icon: Terminal, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
    Concept: { icon: Shield, color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
    Other: { icon: Cpu, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' }
  };

  const inProgress = LEARNING_PATH.filter(item => item.status === 'In Progress');
  const planning = LEARNING_PATH.filter(item => item.status === 'Planning');

  return (
    <section className="min-h-screen py-32 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          
          {/* Skills Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-indigo-500" />
                Technical Arsenal
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {Object.entries(categories).map(([category, style]) => {
                  const categorySkills = SKILLS.filter(s => s.category === category);
                  if (categorySkills.length === 0) return null;

                  const Icon = style.icon;

                  return (
                    <div key={category} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-2 mb-4">
                        <Icon className={`w-5 h-5 ${style.color}`} />
                        <h3 className="text-white font-medium tracking-wide">{category}s</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {categorySkills.map(skill => (
                          <span 
                            key={skill.name} 
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${style.bg} ${style.color} ${style.border}`}
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Continuous Learning */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Loader2 className="w-6 h-6 text-indigo-400 animate-spin-slow" />
                    Learning Path
                </h2>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden">
                    <div className="p-4 bg-white/5 border-b border-white/5 font-medium text-indigo-300 text-sm">In Progress</div>
                    {inProgress.map((item, idx) => (
                        <div key={idx} className="p-4 border-b border-white/5 last:border-0 flex justify-between items-center hover:bg-white/5 transition-colors group">
                            <div>
                                <h4 className="text-white font-medium group-hover:text-indigo-300 transition-colors">{item.name}</h4>
                                <span className="text-xs text-slate-500">{item.platform}</span>
                            </div>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 hover:text-white transition-colors"><ExternalLink className="w-4 h-4" /></a>
                        </div>
                    ))}
                </div>

                 <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden border-dashed">
                    <div className="p-4 bg-white/5 border-b border-white/5 font-medium text-slate-400 text-sm">Planned</div>
                    {planning.map((item, idx) => (
                        <div key={idx} className="p-4 border-b border-white/5 last:border-0 flex justify-between items-center opacity-75">
                            <div>
                                <h4 className="text-slate-300 font-medium">{item.name}</h4>
                                <span className="text-xs text-slate-600">{item.platform}</span>
                            </div>
                            <span className="p-2 text-slate-600"><Target className="w-4 h-4" /></span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-indigo-500" />
              Education
            </h2>
            
            <div className="sticky top-32">
                <div className="bg-gradient-to-br from-indigo-900/20 to-navy-900 p-8 rounded-3xl border border-indigo-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <GraduationCap className="w-64 h-64 text-white" />
                </div>
                
                <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded-full mb-6">BS Computer Science</span>
                    <h3 className="text-3xl font-bold text-white mb-2">{EDUCATION.school}</h3>
                    <p className="text-slate-400 font-light text-xl mb-8">{EDUCATION.date}</p>
                    
                    <div className="p-6 bg-black/20 rounded-xl border border-white/5 backdrop-blur-md">
                        <p className="text-slate-300 italic font-light leading-relaxed">
                            "Specializing in Cybersecurity and Intelligent Systems, focusing on bridging the gap between theoretical computer science and practical, secure industrial applications."
                        </p>
                    </div>
                </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;