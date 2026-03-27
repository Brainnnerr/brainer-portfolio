import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardSwap, { Card } from './CardSwap';

// --- LOCAL ASSET IMPORTS ---
import requestlyImg from '../assets/REQUESTLY.png';
import boardeaseImg from '../assets/BOARDEASE.png'; 
import memoraImg from '../assets/MEMORA.png'; 
import electionImg from '../assets/ELECTION.png';        

const projects = [
  {
    id: 1,
    title: "REQUESTLY",
    subtitle: "ESSU Registrar – Online Document Requisition",
    description: "Architected and developed a full-stack web solution for the ESSU Registrar's Office. Features include QR-based status verification, automated document tracking, and a seamless payment gateway integration using PayMongo to modernize campus administrative workflows.",
    tech: ["React.js", "Supabase", "Tailwind", "PayMongo API"],
    date: "March 2026",
    image: requestlyImg,
    link: "https://github.com/geposonleonard/requestly" 
  },
  {
    id: 2,
    title: "BOARDEASE",
    subtitle: "Boarding House Management System",
    description: "Designed a centralized platform for property owners and tenants to manage room availability, rent tracking, and secure login. Focused on creating a simplified dashboard for ESSU students to find and secure local housing with ease.",
    tech: ["React.js", "Appwrite", "Framer Motion", "JavaScript"],
    date: "February 2026",
    image: boardeaseImg,
    link: "https://github.com/geposonleonard/boardease" 
  },
  {
    id: 3,
    title: "MEMORA",
    subtitle: "AI-Powered Flashcard & Study Companion",
    description: "A sleek mobile application designed to simplify active recall. Memora allows users to create, categorize, and master custom flashcards through a gamified interface. Featuring spaced-repetition logic and a minimalist UI, it helps students turn complex study materials into bite-sized, retainable knowledge.",
    tech: ["React Native", "Expo Go", "Appwrite", "Framer Motion"],
    date: "January 2026",
    image: memoraImg,
    link: "https://github.com/geposonleonard/memora-app" 
  },
  {
    id: 4,
    title: "ICPEP.SE ELECTION",
    subtitle: "Secure Digital Voting System",
    description: "Developed a specialized election management system for the ICpEP Student Edition. Engineered secure voter authentication and real-time tallying logic to ensure transparent and efficient student organization elections.",
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    date: "December 2025",
    image: electionImg,
    link: "https://github.com/geposonleonard/icpep-election" 
  }
];

const TechnicalPortfolio = ({ isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swapDelay = 5000;
  const timerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1100); 
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    if (isMobile) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, swapDelay);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isMobile, projects.length]);

  const handleSwapSync = (index) => {
    if (!isMobile) setCurrentIndex(index);
  };

  const handleSeeMore = () => {
    const url = projects[currentIndex].link;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="projects" 
      className={`min-h-screen lg:h-screen w-full transition-colors duration-700 overflow-hidden lg:snap-start flex items-center justify-center py-20 lg:py-0 ${
        isDark ? 'bg-[#1a0204]' : 'bg-[#fdfcf0]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className={`header-font text-3xl font-black uppercase tracking-widest text-[#800000] mb-12 lg:mb-16 opacity-50 text-center`}>
          Technical Portfolio
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 relative z-10">
            <div className={`border transition-all duration-500 p-8 lg:p-10 rounded-[2rem] relative h-[480px] lg:h-[520px] flex flex-col overflow-hidden ${
              isDark 
                ? 'bg-[#2d0205] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                : 'bg-white border-[#800000]/20 shadow-[0_20px_40px_rgba(128,0,0,0.08)]'
            }`}>
              
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent ${
                isDark ? 'via-white/20' : 'via-[#800000]/30'
              }`} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full"
                >
                  <div className="min-h-[90px] mb-4">
                    <h3 className={`header-font text-3xl lg:text-4xl leading-none transition-colors duration-500 ${
                      isDark ? 'text-white' : 'text-[#1a0204]'
                    }`}>
                      {projects[currentIndex].title}
                    </h3>
                    <p className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] mt-3 border-l-4 border-[#800000] pl-4 transition-colors duration-500 ${
                      isDark ? 'text-[#f07c7c]' : 'text-[#800000]'
                    }`}>
                      {projects[currentIndex].subtitle}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 min-h-[40px] mb-6">
                    {projects[currentIndex].tech.map((t) => (
                      <span 
                        key={t} 
                        className={`px-4 py-1 flex items-center justify-center border rounded-full text-[9px] font-black tracking-widest uppercase transition-all duration-500 ${
                          isDark 
                            ? 'border-white/10 bg-white/5 text-white/70' 
                            : 'border-[#800000]/20 bg-[#800000]/5 text-[#800000]'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar transition-all duration-300">
                    <p className={`text-sm lg:text-[15px] leading-relaxed font-normal font-sans whitespace-pre-line transition-colors duration-500 ${
                      isDark ? 'text-gray-400' : 'text-gray-700'
                    }`}>
                      {projects[currentIndex].description}
                    </p>
                  </div>

                  <div className={`w-full h-[1px] my-6 flex-shrink-0 transition-colors duration-500 ${
                    isDark ? 'bg-white/10' : 'bg-[#800000]/10'
                  }`} />

                  <div className="flex justify-between items-center flex-shrink-0">
                    <span className={`font-black text-[10px] lg:text-xs tracking-widest uppercase italic font-sans transition-colors duration-500 ${
                      isDark ? 'text-white/30' : 'text-[#1a0204]/40'
                    }`}>
                      {currentIndex + 1} / {projects.length} • {projects[currentIndex].date}
                    </span>
                    
                    <button 
                      onClick={handleSeeMore}
                      className="flex items-center gap-3 group transition-all active:scale-95 cursor-pointer"
                    >
                      <span className={`text-[10px] font-black tracking-[0.3em] transition-colors duration-500 ${
                        isDark ? 'text-white/50 group-hover:text-white' : 'text-[#1a0204]/60 group-hover:text-[#800000]'
                      }`}>
                        SEE MORE
                      </span>
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-all shadow-xl ${
                        isDark ? 'bg-white group-hover:bg-[#800000]' : 'bg-[#1a0204] group-hover:bg-[#800000]'
                      }`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="3" className={`transition-colors ${isDark ? 'stroke-[#2d0205] group-hover:stroke-white' : 'stroke-white group-hover:stroke-white'}`}>
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* PREVIEW CARDS - WHITE BORDER IN DARK MODE */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative h-[350px] lg:h-[500px] flex justify-center items-center">
            {isMobile ? (
              <motion.div 
                key={`mobile-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`w-full h-full max-w-[480px] aspect-[4/3] rounded-[2rem] border-4 overflow-hidden shadow-2xl transition-all duration-700 ${
                  isDark ? 'border-white shadow-black/80' : 'border-[#800000] shadow-[#800000]/10'
                }`}
              >
                <img src={projects[currentIndex].image} className="w-full h-full object-cover" alt="Project Preview" />
              </motion.div>
            ) : (
              <CardSwap
                width={550}
                height={380}
                cardDistance={50}
                verticalDistance={60}
                delay={swapDelay}
                onSwap={handleSwapSync}
                isDark={isDark}
                skewAmount={5}
              >
                {projects.map((project) => (
                  <Card 
                    key={project.id}
                    /* Changed from border-white/20 to solid border-white for dark mode */
                    customClass={`rounded-[2rem] border-4 shadow-2xl overflow-hidden transition-all duration-700 ${
                        isDark ? 'border-white shadow-black/80' : 'border-[#800000] shadow-[#800000]/10'
                    }`}
                    style={{ background: isDark ? '#2d0205' : '#ffffff' }}
                  >
                    <div className="w-full h-full relative group">
                      <div className={`absolute inset-0 transition-colors duration-500 ${isDark ? 'bg-black/20' : 'bg-transparent'} group-hover:bg-transparent`} />
                      <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
                    </div>
                  </Card>
                ))}
              </CardSwap>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalPortfolio;