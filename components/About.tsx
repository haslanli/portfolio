import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { User, MapPin, Download, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="min-h-screen py-32 bg-navy-900/50 flex items-center">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto"
        >
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative w-80 h-96 sm:w-96 sm:h-[30rem] rounded-2xl overflow-hidden border border-white/10 bg-navy-800 shadow-2xl">
                 <img 
                    src="https://github.com/haslanli.png" 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                        // Fallback if image isn't found
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                        const icon = document.createElement('div');
                        icon.innerHTML = '<svg class="w-20 h-20 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>';
                        e.currentTarget.parentElement?.appendChild(icon);
                    }}
                 />
                 
                 {/* Glass Overlay Text */}
                 <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium text-lg">{PERSONAL_INFO.name}</p>
                    <p className="text-indigo-400 text-sm">Computer Science Undergrad</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              About <span className="text-indigo-400">Me</span>
            </h2>
            
            <div className="flex items-center gap-3 text-slate-400 mb-8 font-light border-l-2 border-indigo-500 pl-4">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
                <p>
                    I am a Computer Science undergraduate specializing in <strong className="text-white font-medium">Cybersecurity</strong> at Arizona State University. My passion lies at the intersection of secure infrastructure and intelligent systems.
                </p>
                <p>
                    Currently, I serve as a <strong className="text-white font-medium">Legal Extern at Hydroficient</strong>, where I engineer secure IoT pipelines using Python and TLS encryption to protect critical water monitoring systems.
                </p>
                <p>
                    Beyond code, I am a community leader. As VP of Corporate Relations for ACM at ASU, I bridge the gap between academia and industry, connecting students with mentors from FAANG and Fortune 500 companies.
                </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2 group"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;