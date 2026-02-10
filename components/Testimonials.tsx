import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Linkedin, Mail, User, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Limit to 3 for the specific "3 vertical windows" design
  const displayTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <section className="min-h-screen py-24 bg-transparent relative flex flex-col justify-center transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Referrals</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
                Insights from colleagues and partners.
            </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full">
          {displayTestimonials.map((testimonial, idx) => {
             const isActive = activeIndex === idx;
             
             return (
                <motion.div
                  key={testimonial.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)} // For mobile tap
                  animate={{
                    flex: isActive ? 3 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  className={`
                    relative rounded-3xl overflow-hidden cursor-pointer
                    border transition-colors duration-500
                    ${isActive 
                        ? 'bg-white dark:bg-white/10 border-indigo-200 dark:border-indigo-500/30 shadow-2xl shadow-indigo-500/10 dark:shadow-[0_0_30px_rgba(99,102,241,0.15)]' 
                        : 'bg-white/60 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 hover:border-indigo-300 dark:hover:border-white/20'}
                    backdrop-blur-xl
                  `}
                >
                    {/* Background Highlight for Active */}
                    <AnimatePresence>
                        {isActive && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-transparent to-transparent dark:from-indigo-500/10 pointer-events-none"
                            />
                        )}
                    </AnimatePresence>

                    {/* Content Layer */}
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                        
                        {/* Header Area */}
                        <div className={`flex justify-between items-start ${!isActive ? 'md:justify-center' : ''}`}>
                            <motion.div 
                                layout 
                                className={`rounded-full overflow-hidden border border-slate-200 dark:border-white/20 bg-slate-100 dark:bg-navy-800 shrink-0 ${isActive ? 'w-16 h-16' : 'w-12 h-12 md:w-16 md:h-16'}`}
                            >
                                {testimonial.image ? (
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <User className="w-1/2 h-1/2 text-slate-400 dark:text-slate-500" />
                                    </div>
                                )}
                            </motion.div>

                            {/* Quote Icon - Only visible when active */}
                            {isActive && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Quote className="w-10 h-10 text-indigo-200 dark:text-indigo-400/30" />
                                </motion.div>
                            )}
                        </div>

                        {/* Active Content */}
                        <AnimatePresence mode="wait">
                            {isActive ? (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="mt-6 flex flex-col h-full"
                                >
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">{testimonial.name}</h3>
                                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300 text-sm font-medium mt-1">
                                            <span>{testimonial.role}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-500" />
                                            <span className="text-slate-500 dark:text-slate-400">{testimonial.company}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="relative flex-grow overflow-y-auto pr-2 scrollbar-hide">
                                        <p className="text-slate-700 dark:text-slate-300 text-lg font-light leading-relaxed">
                                            "{testimonial.text}"
                                        </p>
                                    </div>

                                    <div className="pt-6 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center gap-4">
                                        {testimonial.linkedin && (
                                            <a href={testimonial.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-colors">
                                                <Linkedin className="w-4 h-4" />
                                                <span>LinkedIn</span>
                                            </a>
                                        )}
                                        {testimonial.email && (
                                            <a href={`mailto:${testimonial.email}`} className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-colors">
                                                <Mail className="w-4 h-4" />
                                                <span>Email</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                /* Collapsed State Label (Vertical on Desktop) */
                                <motion.div
                                    key="label"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="hidden md:flex flex-grow items-center justify-center"
                                >
                                    <div className="rotate-[-90deg] whitespace-nowrap">
                                        <h3 className="text-xl font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">{testimonial.name}</h3>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                        {/* Mobile Collapsed State Label */}
                        {!isActive && (
                            <div className="md:hidden mt-4">
                                <h3 className="text-lg font-bold text-slate-600 dark:text-slate-400">{testimonial.name}</h3>
                                <p className="text-xs text-slate-500">{testimonial.company}</p>
                            </div>
                        )}
                    </div>
                </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;