import React from 'react';
import { motion } from 'framer-motion';

const TechLines = ({ isDark }) => {
  
  const lineColor = isDark ? "rgba(163, 22, 33, 0.3)" : "rgba(163, 22, 33, 0.2)";

  return (
    
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <g>
          
          {[...Array(10)].map((_, i) => (
            <motion.path
              key={i}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                duration: 4, 
                delay: i * 0.1, 
                ease: "easeInOut" 
              }}
              d={`M-100 ${200 + i * 50}C300 ${100 + i * 30} 600 ${600 - i * 40} 720 400C840 200 1140 700 1540 ${400 - i * 50}`}
              stroke={lineColor}
              strokeWidth="1.2"
              fill="transparent"
            />
          ))}
          
          
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={`rev-${i}`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ 
                duration: 5, 
                delay: 0.5 + (i * 0.2), 
                ease: "easeInOut" 
              }}
              d={`M1540 ${100 + i * 60}C1140 700 840 100 720 400C600 700 300 100 -100 ${500 + i * 40}`}
              stroke={lineColor}
              strokeWidth="0.8"
              fill="transparent"
            />
          ))}
        </g>
      </svg>
      
      
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-b from-[#2c0409] via-transparent to-[#2c0409]' 
          : 'bg-gradient-to-b from-[#f4d9d0] via-transparent to-[#f4d9d0]'
      } opacity-90`} />
    </div>
  );
};

export default TechLines;