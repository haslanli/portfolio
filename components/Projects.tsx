import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight, Code2, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-32 bg-transparent relative transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span></h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                A selection of my recent work in IoT security, algorithmic trading, and software development.
            </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layout
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`
                relative overflow-hidden rounded-3xl border transition-colors duration-300 cursor-default
                ${hoveredProject === project.id 
                    ? 'bg-white dark:bg-navy-800 border-indigo-500/50 shadow-2xl shadow-indigo-500/10' 
                    : 'bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/5 hover:border-indigo-300 dark:hover:border-white/10'}
              `}
            >
                {/* Background Highlight on Hover */}
                {hoveredProject === project.id && (
                    <motion.div 
                        layoutId="highlight"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-transparent dark:from-indigo-900/10 dark:to-transparent pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}

                <div className="relative z-10 p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        {/* Header Section */}
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                                <motion.h3 
                                    layout="position"
                                    className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${hoveredProject === project.id ? 'text-indigo-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.div 
                                    layout="position"
                                    className={`px-3 py-1 rounded-full text-xs font-medium border ${hoveredProject === project.id ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-500' : 'bg-slate-100 dark:bg-black/20 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-white/10'}`}
                                >
                                    Project
                                </motion.div>
                            </div>
                            
                            {/* Short Description */}
                            <motion.p 
                                layout="position"
                                className="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed max-w-3xl"
                            >
                                {project.description}
                            </motion.p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-slate-400 shrink-0">
                             <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredProject === project.id ? 'rotate-90 text-indigo-600 dark:text-indigo-400' : ''}`} />
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                        {hoveredProject === project.id && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-8 mt-8 border-t border-slate-200 dark:border-white/10 grid md:grid-cols-2 gap-8">
                                    {/* Tech Stack */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <Layers className="w-4 h-4" /> Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span 
                                                    key={tech} 
                                                    className="px-3 py-1.5 bg-slate-100 dark:bg-navy-900 rounded-lg text-slate-700 dark:text-slate-300 text-sm border border-slate-200 dark:border-white/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex flex-col justify-start items-start gap-4">
                                        <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                                            <Code2 className="w-4 h-4" /> Project Link
                                        </h4>
                                        <div className="flex gap-4">
                                            {/* Modified Logic for "Coming Soon" */}
                                            {project.link && project.link !== "#" ? (
                                                <a 
                                                    href={project.link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group/link px-4 py-2 bg-white/50 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5 hover:border-indigo-500/30"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                    <span className="font-medium">Live Demo</span>
                                                </a>
                                            ) : (
                                                <div className="flex items-center gap-2 text-slate-400 px-4 py-2 bg-slate-50 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5 cursor-not-allowed">
                                                    <ExternalLink className="w-5 h-5 opacity-50" />
                                                    <span className="font-medium">Coming Soon</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
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

export default Projects;