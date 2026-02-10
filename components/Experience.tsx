import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience: React.FC = () => {
  // I'm tracking which experience card is currently being hovered to trigger the expansion animation
  const [hoveredExp, setHoveredExp] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-32 bg-transparent relative transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* My header section with a simple fade-in animation */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Work <span className="text-indigo-600 dark:text-indigo-400">Experience</span></h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                My professional journey and the roles I've held in the tech industry.
            </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((job) => (
            <motion.div
              key={job.id}
              layout
              onMouseEnter={() => setHoveredExp(job.id)}
              onMouseLeave={() => setHoveredExp(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`
                relative overflow-hidden rounded-3xl border transition-colors duration-300 cursor-default
                ${hoveredExp === job.id 
                    ? 'bg-white dark:bg-navy-800 border-indigo-500/50 shadow-2xl shadow-indigo-500/10' 
                    : 'bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/5 hover:border-indigo-300 dark:hover:border-white/10'}
              `}
            >
                {/* I added this gradient background effect that only shows up when I hover over the card */}
                {hoveredExp === job.id && (
                    <motion.div 
                        layoutId="highlight"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent dark:from-indigo-900/10 dark:to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}

                <div className="relative z-10 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        {/* Showing the role and company up top */}
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <motion.h3 
                                    layout="position"
                                    className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${hoveredExp === job.id ? 'text-indigo-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}
                                >
                                    {job.role}
                                </motion.h3>
                            </div>
                            
                            <motion.div 
                                layout="position"
                                className="flex flex-wrap items-center gap-4 text-lg"
                            >
                                <span className={`font-medium transition-colors duration-300 ${hoveredExp === job.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-400'}`}>
                                    {job.company}
                                </span>
                                {/* Showing date immediately so visitors know when this happened without hovering */}
                                <span className="text-slate-500 text-sm bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5">
                                    {job.date}
                                </span>
                            </motion.div>
                        </div>

                        {/* Visual indicator for interaction - rotates when I hover */}
                        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-slate-400 shrink-0">
                             <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredExp === job.id ? 'rotate-90 text-indigo-600 dark:text-indigo-400' : ''}`} />
                        </div>
                    </div>

                    {/* Keeping the details hidden until interaction to keep the UI clean */}
                    <AnimatePresence>
                        {hoveredExp === job.id && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-8 mt-8 border-t border-slate-200 dark:border-white/10">
                                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6 text-sm font-medium">
                                        <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                        {job.location}
                                    </div>

                                    <ul className="grid gap-3">
                                        {job.description.map((desc, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;