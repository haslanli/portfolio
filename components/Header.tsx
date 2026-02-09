import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
            transition-all duration-300
            ${isScrolled || isOpen 
                ? 'bg-navy-950/40 backdrop-blur-2xl backdrop-saturate-150 border border-white/10 w-full md:w-auto shadow-2xl shadow-black/10' 
                : 'bg-transparent border border-transparent w-full md:w-auto'
            }
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
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 z-10 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-lg shadow-indigo-500/30"
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 30 
                        }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors ml-4"
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
          className="fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-2xl backdrop-saturate-150 md:hidden flex items-center justify-center pt-20"
        >
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-2xl font-light ${
                  location.pathname === link.path ? 'text-indigo-400 font-medium' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Header;