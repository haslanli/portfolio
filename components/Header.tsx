import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Referrals', path: '/referrals' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-center">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`
            flex items-center justify-between px-6 py-3 rounded-full 
            border border-white/10 backdrop-blur-xl transition-all duration-300
            ${isScrolled || isOpen ? 'bg-navy-900/80 w-full md:w-auto shadow-2xl shadow-black/20' : 'bg-transparent w-full md:w-auto border-transparent'}
          `}
        >
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mr-8 group">
              <div className="p-1.5 bg-indigo-600 rounded-lg group-hover:bg-indigo-500 transition-colors">
                 <Code className="w-5 h-5 text-white" />
              </div>
              <span className="tracking-tight hidden sm:block">haslanli</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path}
                  className={({ isActive }) => 
                    `px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive 
                        ? 'text-white bg-white/10 shadow-inner' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="w-px h-5 bg-white/10 mx-2"></div>
              <a 
                href="https://github.com/haslanli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2 bg-white text-navy-950 rounded-full text-sm font-bold transition-all hover:bg-indigo-50 hover:scale-105"
              >
                GitHub
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
        </motion.div>
      </div>
    </header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-navy-950/95 backdrop-blur-xl md:hidden flex items-center justify-center pt-20"
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => 
                  `text-2xl font-light ${
                    isActive ? 'text-indigo-400 font-medium' : 'text-slate-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;