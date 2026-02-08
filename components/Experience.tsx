import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section className="min-h-screen py-32 bg-navy-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-indigo-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector */}
              {index !== EXPERIENCE.length - 1 && (
                <div className="absolute left-8 md:left-12 top-full h-12 w-px bg-gradient-to-b from-white/10 to-transparent z-0"></div>
              )}

              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/5 hover:border-indigo-500/30 transition-all duration-500 relative overflow-hidden">
                
                {/* Subtle Glow on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                                    <span className="font-mono text-sm md:text-base font-bold">{index + 1}</span>
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                    {job.role}
                                </h3>
                            </div>
                            <div className="flex items-center gap-2 text-xl text-slate-400 font-medium pl-11 md:pl-14">
                                <span className="text-white">{job.company}</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pl-11 md:pl-0 lg:justify-end">
                             <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg border border-white/5 text-slate-400 text-sm font-medium">
                                <Calendar className="w-4 h-4 text-indigo-400" />
                                {job.date}
                            </div>
                            <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg border border-white/5 text-slate-400 text-sm font-medium">
                                <MapPin className="w-4 h-4 text-indigo-400" />
                                {job.location}
                            </div>
                        </div>
                    </div>

                    <ul className="grid gap-4 pl-4 md:pl-14">
                        {job.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-4 text-slate-300 leading-relaxed font-light group/item">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 group-hover/item:shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-shadow"></div>
                                <span>{desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;