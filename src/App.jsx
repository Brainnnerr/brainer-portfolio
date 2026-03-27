import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Typewriter } from 'react-simple-typewriter';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import Iridescence from './components/Iridescence';
import AboutMe from './components/AboutMe';
import TechnicalPortfolio from './components/TechnicalPortfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import myPhoto from './assets/removed-bg.png'; 

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`transition-colors duration-700 font-sans selection:bg-[#800000] selection:text-white ${isDark ? 'bg-[#1a0204] text-white' : 'bg-[#fdfcf0] text-[#1a0204]'}`}>
      
      {/* 1. TOP NAV */}
      <nav className="absolute top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto p-8 flex justify-between items-center">
          
          <button 
            onClick={toggleTheme}
            className={`p-3 rounded-full border transition-all duration-300 shadow-xl active:rotate-90 ${isDark ? 'bg-white/5 border-white/10 text-[#800000]' : 'bg-[#800000]/5 border-[#800000]/20 text-[#800000]'}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDark ? "moon" : "sun"}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                className="text-2xl"
              >
                {isDark ? <HiOutlineMoon /> : <HiOutlineSun />}
              </motion.div>
            </AnimatePresence>
          </button>

          <div className={`hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.3em] font-bold ${isDark ? 'text-white/60' : 'text-[#1a0204]/60'}`}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-[#800000] transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px]">
        <div className={`backdrop-blur-xl border rounded-full px-6 py-4 flex justify-between items-center shadow-2xl transition-colors duration-500 ${isDark ? 'bg-[#2d0205]/80 border-white/10 text-white' : 'bg-white/70 border-[#800000]/10 text-[#1a0204]'}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[9px] uppercase tracking-tighter font-black opacity-50 hover:text-[#800000] transition-colors">{link.name}</a>
          ))}
          <button onClick={toggleTheme} className="text-[#800000] text-xl">
            {isDark ? <HiOutlineMoon /> : <HiOutlineSun />}
          </button>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section id="home" className="relative min-h-screen lg:h-screen flex items-center justify-center lg:snap-start overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
           <Iridescence color={isDark ? [0.4, 0.02, 0.05] : [0.8, 0.6, 0.4]} mouseReact={true} amplitude={0.12} speed={0.7} />
        </div>
        <motion.div 
          className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-20 lg:py-0"
          initial="hidden" whileInView="visible" viewport={{ once: false }} variants={sectionVariants}
        >
          {/* Hero Image Side */}
          <div className="order-2 md:order-1 flex justify-center items-center">
            <div className={`absolute w-64 h-64 md:w-[500px] md:h-[500px] rounded-full blur-[80px] transition-colors duration-700 ${isDark ? 'bg-white/5' : 'bg-[#800000]/10'}`} />
            <motion.img 
              src={myPhoto} 
              alt="Leonard" 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
              className="w-full max-w-[280px] md:max-w-[450px] relative z-10 drop-shadow-2xl md:scale-125" 
            />
          </div>

          {/* Hero Text Side */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h1 className={`header-font text-5xl md:text-[90px] leading-none transition-colors duration-700 ${isDark ? 'text-[#f8ebeb]' : 'text-[#1a0204]'}`}>
              LEONARD<br /> GEPOSON
            </h1>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
              <div className="hidden md:block h-[2px] w-12 bg-[#800000]"></div>
              <p className={`text-lg md:text-2xl font-bold tracking-[0.2em] uppercase ${isDark ? 'text-[#f07c7c]' : 'text-[#800000]'}`}>
                <Typewriter words={['Computer Engineer', 'Software Developer', 'UI/UX Enthusiast', 'Brainer']} loop={true} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />
              </p>
            </div>
            <p className={`mt-6 max-w-md mx-auto md:mx-0 font-light border-l-4 border-[#800000] pl-6 italic transition-colors duration-700 ${isDark ? 'text-gray-300' : 'text-[#1a0204]/70'}`}>
              "Learning without thought is labor lost; thought without learning is perilous."
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/Leonard_Geposon_CV.pdf" download className="px-8 py-4 bg-[#800000] text-white text-xs font-bold tracking-widest rounded-full hover:bg-[#a00000] transition-all shadow-xl shadow-[#800000]/20">
                DOWNLOAD CV
              </a>
              <a 
                href="https://github.com/geposonleonard" 
                target="_blank" 
                rel="noreferrer" 
                className={`px-8 py-4 border text-xs font-bold tracking-widest rounded-full transition-all duration-300 ${isDark ? 'border-white/20 text-white hover:bg-white/5' : 'border-[#1a0204]/20 text-[#1a0204] hover:bg-[#1a0204]/5'}`}
              >
                GITHUB PROFILE
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- MODULAR SECTIONS --- */}
      <AboutMe isDark={isDark} />
      <TechnicalPortfolio isDark={isDark} />
      <Skills isDark={isDark} />
      <Contact isDark={isDark} />

    </div>
  );
}

export default App;