import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiTailwindcss, SiJavascript, 
  SiNodedotjs, SiExpress, SiSupabase, SiAppwrite, 
  SiPostgresql, SiMysql, SiVite, 
  SiVercel, SiHtml5,  
  SiNetlify, SiGithub, SiGitlab, SiFigma 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb'; 

const Skills = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const CustomFigmaIcon = () => (
    <div className="grid grid-cols-2 gap-[2px] w-[24px] lg:w-[32px]">
      <div className="h-[11px] lg:h-[15px] w-[11px] lg:w-[15px] bg-[#F24E1E] rounded-l-full" />
      <div className="h-[11px] lg:h-[15px] w-[11px] lg:w-[15px] bg-[#FF7262] rounded-full" />
      <div className="h-[11px] lg:h-[15px] w-[11px] lg:w-[15px] bg-[#A259FF] rounded-l-full" />
      <div className="h-[11px] lg:h-[15px] w-[11px] lg:w-[15px] bg-[#1ABCFE] rounded-full" />
      <div className="h-[11px] lg:h-[15px] w-[11px] lg:w-[15px] bg-[#0ACF83] rounded-full rounded-tr-none" />
    </div>
  );

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      accent: "#61DAFB", 
      skills: [
        { name: 'React', icon: <SiReact />, color: "#61DAFB" },
        { name: 'React Native', icon: <TbBrandReactNative />, color: "#61DAFB" },
        { name: 'JavaScript', icon: <SiJavascript />, color: "#F7DF1E" },
        { name: 'HTML5', icon: <SiHtml5 />, color: "#E34F26" },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: "#06B6D4" },
      ]
    },
    {
      id: "backend",
      title: "Backend",
      accent: "#3ECF8E", 
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: "#339933" },
        { name: 'Express', icon: <SiExpress />, color: isDark ? "#ffffff" : "#1a0204" },
      ]
    },
    {
      id: "database",
      title: "Database",
      accent: "#336791", 
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: "#4169E1" },
        { name: 'MySQL', icon: <SiMysql />, color: "#4479A1" },
        { name: 'Appwrite', icon: <SiAppwrite />, color: "#FD366E" },
        { name: 'Supabase', icon: <SiSupabase />, color: "#3ECF8E" },
      ]
    },
    {
      id: "tools",
      title: "Tools & Deployment",
      accent: "#800000", 
      skills: [
        { name: 'Netlify', icon: <SiNetlify />, color: "#00C7B7" },
        { name: 'Vercel', icon: <SiVercel />, color: isDark ? "#ffffff" : "#1a0204" },
        { name: 'GitHub', icon: <SiGithub />, color: isDark ? "#ffffff" : "#1a0204" },
        { name: 'GitLab', icon: <SiGitlab />, color: "#FC6D26" },
        { name: 'Figma', icon: <CustomFigmaIcon />, color: "#A259FF" },
      ]
    }
  ];

  const currentCategory = skillCategories.find(c => c.id === activeCategory);

  return (
    <section 
      id="skills" 
      className={`min-h-screen py-20 lg:py-32 lg:snap-start flex flex-col items-center justify-center overflow-hidden relative transition-colors duration-700 ${
        isDark ? 'bg-[#140203]' : 'bg-[#fdfcf0]'
      }`}
    >
      
      {/* DYNAMIC BACKGROUND GLOW */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ backgroundColor: currentCategory.accent }}
          transition={{ duration: 1 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-full blur-[100px] lg:blur-[160px] ${
            isDark ? 'opacity-10' : 'opacity-[0.12]'
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className={`header-font text-2xl lg:text-3xl uppercase tracking-[0.3em] mb-6 transition-colors duration-500 ${
            isDark ? 'text-white/20' : 'text-[#800000]/30'
          }`}>
            Skills & Tech
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`font-sans text-[11px] lg:text-xs uppercase tracking-[0.3em] max-w-lg mx-auto leading-relaxed transition-colors duration-500 ${
              isDark ? 'text-gray-500 font-light' : 'text-[#1a0204]/80 font-bold'
            }`}
          >
            A collection of technologies and tools I use to bring digital ideas to life.
          </motion.p>
        </div>

        {/* CATEGORY SELECTOR */}
        <div className={`flex flex-wrap justify-center gap-x-6 gap-y-8 lg:gap-x-12 mb-16 lg:mb-20 border-b pb-6 lg:pb-8 transition-colors duration-500 ${
          isDark ? 'border-white/5' : 'border-[#800000]/20'
        }`}>
          {skillCategories.map((category) => (
            <button 
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className="group relative cursor-pointer pb-2"
            >
              <span className={`header-font text-xs lg:text-lg tracking-[0.2em] transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'text-[#800000] italic font-black' 
                  : isDark ? 'text-white/30 group-hover:text-white/60' : 'text-[#1a0204]/40 group-hover:text-[#1a0204]/80'
              }`}>
                {category.title}
              </span>
              {activeCategory === category.id && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-[#800000] shadow-[0_0_15px_rgba(128,0,0,0.5)] z-20"
                />
              )}
            </button>
          ))}
        </div>

        {/* SKILLS DISPLAY AREA */}
        <div className="min-h-[300px] lg:min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "anticipate" }}
              className="flex flex-wrap justify-center gap-3 lg:gap-6"
            >
              {currentCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  /* Maintain hover color for dark, use solid white for light */
                  whileHover={{ 
                    y: -10, 
                    backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,1)',
                    borderColor: skill.color 
                  }}
                  className={`flex flex-col items-center justify-center gap-3 lg:gap-4 border w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-[1.5rem] lg:rounded-[2rem] backdrop-blur-md transition-all group/card shadow-2xl ${
                    isDark 
                      ? 'bg-white/2 border-white/5 shadow-black/40' 
                      /* Apply Maroon Shade in Light Mode */
                      : 'bg-[#f8eaea] border-[#800000]/10 shadow-[#800000]/10'
                  }`}
                >
                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut", 
                      delay: index * 0.1 
                    }}
                    style={{ color: skill.color }}
                    className="flex justify-center items-center h-10 lg:h-12 w-full transition-all duration-300"
                  >
                    <div className={`text-2xl md:text-3xl lg:text-4xl filter ${
                      isDark ? 'drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]' : 'drop-shadow-[0_4px_6px_rgba(128,0,0,0.1)]'
                    } group-hover/card:drop-shadow-[0_0_12px_currentColor]`}>
                      {skill.icon}
                    </div>
                  </motion.div>

                  <span className={`text-[8px] lg:text-[10px] font-black uppercase tracking-[0.1em] transition-colors font-sans text-center px-1 lg:px-2 ${
                    isDark ? 'text-white/50 group-hover/card:text-white' : 'text-[#1a0204]/60 group-hover/card:text-[#800000]'
                  }`}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;