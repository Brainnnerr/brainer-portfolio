import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChevronUp } from 'react-icons/hi';

const ScrollToTop = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="hidden md:flex fixed bottom-8 right-8 z-[100] p-4 rounded-2xl shadow-2xl backdrop-blur-md border transition-all active:scale-90 group items-center justify-center"
          style={{
            backgroundColor: isDark ? 'rgba(163, 22, 33, 0.4)' : 'rgba(255, 255, 255, 0.8)',
            borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(163, 22, 33, 0.2)',
          }}
        >
          <HiOutlineChevronUp 
            size={24} 
            className="transition-transform group-hover:-translate-y-1"
            style={{ color: '#a31621' }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;