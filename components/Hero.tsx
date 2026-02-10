import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Instagram, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';
import { motion, useAnimation } from 'framer-motion';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const socialControls = useAnimation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const mouse = { x: -9999, y: -9999 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }
    
    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 15000), 80);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Check for Dark Mode to change particle color
      const isDark = document.documentElement.classList.contains('dark');
      const particleColor = isDark ? '255, 255, 255' : '99, 102, 241'; // White or Indigo

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.alpha * 0.5})`;
        ctx.fill();

        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < 200) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distMouse / 200)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleContactClick = () => {
    socialControls.start({
      y: [0, -20, -20, 0],
      scale: [1, 1.5, 1.5, 1],
      rotate: [0, -20, 20, -15, 15, 0],
      filter: [
        "drop-shadow(0 0 0px rgba(99,102,241,0))", 
        "drop-shadow(0 0 25px rgba(99,102,241,1))", 
        "drop-shadow(0 0 25px rgba(99,102,241,1))", 
        "drop-shadow(0 0 0px rgba(99,102,241,0))"
      ],
      color: ["#64748b", "#6366f1", "#6366f1", "#64748b"],
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 1]
      }
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-slate-600 dark:text-slate-300 text-xs font-medium tracking-wide uppercase">Available for Hire</span>
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight"
            >
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500 animate-gradient-x">Huseyn Aslanli</span>
            </motion.h1>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
            >
                Software Engineer specializing in <strong className="text-slate-900 dark:text-slate-200 font-medium">IoT Security</strong>, <strong className="text-slate-900 dark:text-slate-200 font-medium">API Development</strong>, and <strong className="text-slate-900 dark:text-slate-200 font-medium">LLM Integration</strong>.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
            >
                {/* Segmented Pill Button */}
                <div className="flex items-center bg-white dark:bg-white rounded-full overflow-hidden transition-transform hover:scale-105 duration-300 shadow-lg shadow-indigo-500/10 border border-slate-200 dark:border-transparent">
                    <Link 
                        to="/skills" 
                        className="px-6 py-4 text-slate-900 dark:text-navy-950 font-bold hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                        View Skills
                    </Link>
                    <div className="w-[1px] h-5 bg-slate-200 dark:bg-slate-200"></div>
                    <Link 
                        to="/experience" 
                        className="px-6 py-4 text-slate-900 dark:text-navy-950 font-bold hover:bg-indigo-50 hover:text-indigo-600 transition-colors flex items-center gap-2 group/btn"
                    >
                        Experience
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <button 
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white rounded-full font-medium transition-all hover:scale-105 backdrop-blur-sm cursor-pointer shadow-sm dark:shadow-none"
                >
                    Contact Me
                </button>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-6 items-center justify-center"
            >
                {[
                    { icon: Github, href: PERSONAL_INFO.github },
                    { icon: Linkedin, href: PERSONAL_INFO.linkedin },
                    { icon: Mail, href: `mailto:${PERSONAL_INFO.email}` },
                    { icon: Instagram, href: PERSONAL_INFO.instagram },
                ].map((item, index) => (
                    <motion.a 
                        key={index}
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-colors"
                        animate={socialControls}
                        whileHover={{ scale: 1.1 }}
                    >
                        <item.icon className="w-6 h-6" />
                    </motion.a>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;