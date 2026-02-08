import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight, Linkedin, Mail, User } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  if (TESTIMONIALS.length === 0) return null;

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="min-h-screen py-24 bg-navy-900 flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          <span className="border-b-4 border-blue-500 pb-2">Referrals</span>
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 bg-navy-800 rounded-full border border-navy-700 text-white hover:bg-blue-600 transition-all z-10 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 bg-navy-800 rounded-full border border-navy-700 text-white hover:bg-blue-600 transition-all z-10 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Card */}
          <div className="bg-navy-800 p-8 md:p-12 rounded-3xl border border-navy-700 shadow-2xl relative overflow-hidden min-h-[450px] flex flex-col justify-center animate-fade-in">
            {/* Decorative Quote */}
            <div className="absolute top-4 right-8 opacity-10 pointer-events-none">
              <Quote className="w-32 h-32 text-blue-500" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              
              {/* Profile Image / Info Column */}
              <div className="flex flex-col items-center text-center md:w-1/3 border-b md:border-b-0 md:border-r border-navy-700 pb-6 md:pb-0 md:pr-8 w-full shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-navy-700 border-4 border-navy-600 overflow-hidden mb-4 flex items-center justify-center relative shadow-xl">
                  {current.image ? (
                    <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-slate-500" />
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{current.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-1">{current.role}</p>
                <p className="text-slate-500 text-sm mb-4">{current.company}</p>

                {/* Contacts Slider/Row */}
                <div className="flex gap-3 mt-auto">
                  {current.linkedin && (
                    <a 
                      href={current.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-navy-900 rounded-full text-slate-400 hover:text-white hover:bg-[#0077b5] transition-all border border-navy-700 hover:border-[#0077b5]"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {current.email && (
                    <a 
                      href={`mailto:${current.email}`} 
                      className="p-2 bg-navy-900 rounded-full text-slate-400 hover:text-white hover:bg-red-500 transition-all border border-navy-700 hover:border-red-500"
                      title="Send Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Text Column */}
              <div className="md:w-2/3 text-center md:text-left">
                <p className="text-slate-300 text-lg md:text-xl italic leading-relaxed">
                  "{current.text}"
                </p>
              </div>

            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'w-8 bg-blue-500' : 'w-2 bg-navy-700 hover:bg-navy-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;