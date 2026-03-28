import React from 'react';
import { motion } from 'framer-motion';

const SkillsTechLines = ({ isDark }) => {
  
  const lineColor = isDark 
    ? "rgba(255, 60, 80, 0.35)"   
    : "rgba(100, 10, 15, 0.35)";  

  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        
        <g opacity="0.8">
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={`wave-single-${i}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                duration: 2.5, 
                delay: i * 0.1, 
                ease: "easeOut" 
              }}
              
              d={`M-100 ${150 + i * 45} Q 400 ${450 + i * 30} 720 ${300 + i * 20} T 1540 ${450 + i * 40}`}
              stroke={lineColor}
              strokeWidth="1.8"
              fill="transparent"
            />
          ))}
        </g>
      </svg>
      
      
      <div className={`absolute inset-0 bg-gradient-to-r ${
        isDark 
          ? 'from-[#240608] via-transparent to-[#240608]' 
          : 'from-[#f4d9d0] via-transparent to-[#f4d9d0]'
      } opacity-60`} />
    </div>
  );
};

export default SkillsTechLines;