import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import About from './components/About';
import PageTransition from './components/PageTransition';

// Separate component to use useLocation hook inside BrowserRouter context
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/referrals" element={<PageTransition><Testimonials /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const FluidBackground = () => {
  const location = useLocation();
  // Don't show on home page as it has its own particle effect
  if (location.pathname === '/') return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50 dark:bg-navy-950 transition-colors duration-500">
        <div className="absolute top-0 left-0 w-full h-full">
            {/* Cloud 1 */}
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-300/30 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] opacity-60 animate-blob"></div>
            
            {/* Cloud 2 */}
            <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-violet-300/30 dark:bg-violet-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] opacity-60 animate-blob animation-delay-2000"></div>
            
            {/* Cloud 3 */}
            <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-blue-300/30 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[60px] opacity-60 animate-blob animation-delay-4000"></div>

            {/* Cloud 4 - Subtle Center Mist */}
            <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-slate-400/10 dark:bg-slate-800/20 rounded-full mix-blend-overlay filter blur-[40px] opacity-30 animate-blob animation-delay-4000"></div>
        </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-50 dark:bg-navy-900 min-h-screen text-slate-900 dark:text-slate-200 relative selection:bg-indigo-500/30 flex flex-col overflow-x-hidden transition-colors duration-300">
        <FluidBackground />
        <Header />
        <main className="flex-grow relative z-10">
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;