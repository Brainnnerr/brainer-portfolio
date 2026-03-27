import React from 'react';
import { motion } from 'framer-motion';
// --- LOCAL ASSET IMPORT ---
import myBackgroundPhoto from '../assets/removed-bg.png'; 

const AboutMe = ({ isDark }) => {
  const stats = [
    { value: '3rd', label: 'Year Student' },
    { value: 'ESSU', label: 'University' },
    { value: 'BSCpE', label: 'Program' },
    { value: '200+', label: 'Users Reached' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="about" 
      className={`min-h-screen lg:h-screen w-full flex items-center justify-center lg:snap-start relative py-20 lg:py-0 overflow-hidden transition-colors duration-700 ${
        isDark ? 'bg-[#140203]' : 'bg-[#fdfcf0]'
      }`}
    >
      <motion.div 
        className="max-w-6xl mx-auto px-6 w-full relative z-10"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* TEXT CONTENT */}
          <motion.div variants={itemVariants} className="space-y-8 text-center lg:text-left">
            <h2 className={`header-font text-4xl lg:text-5xl italic transition-colors duration-500 ${
              isDark ? 'text-[#800000]' : 'text-[#800000]'
            }`}>
              About Me
            </h2>
            
            <div className={`space-y-6 text-base lg:text-[15px] leading-relaxed font-sans transition-colors duration-500 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <p>
                I am a <span className={`font-semibold transition-colors duration-500 ${
                  isDark ? 'text-white' : 'text-[#1a0204]'
                }`}>BSCpE student</span> and aspiring full-stack developer who builds scalable, database-driven web applications. I focus on creating systems that solve real problems and enjoy tackling complex challenges.
              </p>
              <p>
                I also enjoy designing reliable, production-ready applications, understanding data flow, and turning complex workflows into intuitive user experiences. My goal is to create software that is both functional and user-friendly.
              </p>
            </div>
          </motion.div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-4 relative z-20">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className={`p-8 lg:p-10 border backdrop-blur-md rounded-3xl text-center group transition-all duration-500 shadow-2xl ${
                  isDark 
                    ? 'border-white/10 bg-[#1a0204]/40 hover:border-[#800000]' 
                    : 'border-[#800000]/10 bg-white/60 hover:border-[#800000]/40 shadow-[#800000]/5'
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <h4 className="header-font text-[#800000] text-3xl lg:text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </h4>
                <p className={`text-[9px] tracking-[0.2em] font-bold uppercase font-sans transition-colors duration-500 ${
                  isDark ? 'text-gray-500' : 'text-[#800000]/60'
                }`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- BACKGROUND PHOTO --- */}
      <div 
        className="absolute bottom-0 right-0 w-[80%] lg:w-[60%] h-[100%] z-0 pointer-events-none overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to top left, black 20%, rgba(0,0,0,0.4) 60%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to top left, black 20%, rgba(0,0,0,0.4) 60%, transparent 90%)'
        }}
      >
        <motion.img 
          src={myBackgroundPhoto} 
          alt="Watermark" 
          initial={{ opacity: 0, x: 50, scale: 1.1 }}
          whileInView={{ opacity: isDark ? 0.15 : 0.08, x: 0, scale: 1 }} 
          transition={{ duration: 2, ease: "easeOut" }}
          className={`w-full h-full object-contain object-right-bottom origin-bottom-right grayscale brightness-110 contrast-125 transition-opacity duration-700`}
        />
      </div>
    </section>
  );
};

export default AboutMe;