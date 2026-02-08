import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen py-32 bg-navy-900">
      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Featured <span className="text-indigo-400">Projects</span></h2>
            <div className="h-1 w-24 bg-white/10 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 group flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                 <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div>
                 <FolderGit2 className="w-16 h-16 text-indigo-500/40 group-hover:text-indigo-400 transition-colors" />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 mb-8 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-black/20 text-indigo-300 text-xs font-medium rounded-full border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;