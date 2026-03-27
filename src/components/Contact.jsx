import React, { useState, useRef } from 'react'; // Added useRef
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { SiGithub, SiFacebook, SiInstagram } from 'react-icons/si';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { IoSendSharp, IoCallOutline } from 'react-icons/io5';

const Contact = ({ isDark }) => {
  const form = useRef(); // Create ref for the form
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // --- PASTE YOUR EMAILJS CREDENTIALS HERE ---
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setStatus('success');
          setIsSending(false);
          form.current.reset(); // Clear form inputs
          setTimeout(() => setStatus(null), 5000); // Hide message after 5s
      }, (error) => {
          console.error(error.text);
          setStatus('error');
          setIsSending(false);
          setTimeout(() => setStatus(null), 5000);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const socials = [
    { icon: <SiGithub />, link: "https://github.com/geposonleonard", color: isDark ? "#ffffff" : "#333" },
    { icon: <SiFacebook />, link: "https://facebook.com", color: "#1877F2" },
    { icon: <SiInstagram />, link: "https://instagram.com", color: "#E4405F" },
  ];

  return (
    <section 
      id="contact" 
      className={`min-h-screen py-20 lg:py-0 transition-colors duration-700 lg:snap-start flex items-center justify-center relative overflow-hidden ${
        isDark ? 'bg-[#0a0102]' : 'bg-[#fdfcf0]'
      }`}
    >
      
      {/* 1. ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: isDark ? [0.05, 0.1, 0.05] : [0.02, 0.04, 0.02] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#800000] rounded-full blur-[140px]" 
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
            className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-[#800000]' : 'bg-[#800000]/40'}`}
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-6xl mx-auto px-6 w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: CONTACT INFO CARD */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6">
            <div className={`border p-8 rounded-[2.5rem] flex-grow shadow-2xl relative overflow-hidden group backdrop-blur-3xl transition-all duration-500 ${
              isDark ? 'bg-white/[0.01] border-white/5' : 'bg-white border-[#800000]/10'
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#800000]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#800000]/20 transition-all duration-700" />
              
              <h2 className={`header-font text-4xl mb-2 italic tracking-tighter transition-colors ${isDark ? 'text-white' : 'text-[#1a0204]'}`}>
                Get in <span className="text-[#800000]">Touch</span>
              </h2>
              <p className={`font-sans text-[10px] uppercase tracking-[0.3em] mb-12 ${isDark ? 'text-gray-500' : 'text-[#1a0204]/40'}`}>
                Available for new projects
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-5 group/item">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[#800000] group-hover/item:bg-[#800000] group-hover/item:text-white transition-all duration-300 ${isDark ? 'bg-[#800000]/10' : 'bg-[#800000]/5'}`}>
                    <HiOutlineMail size={22} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#800000] mb-1">Email Me</p>
                    <a href="mailto:geposonleonard@gmail.com" className={`text-sm font-sans transition-colors break-all ${isDark ? 'text-white/70 hover:text-white' : 'text-[#1a0204]/70 hover:text-[#800000]'}`}>
                      geposonleonard@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group/item">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[#800000] group-hover/item:bg-[#800000] group-hover/item:text-white transition-all duration-300 ${isDark ? 'bg-[#800000]/10' : 'bg-[#800000]/5'}`}>
                    <HiOutlineLocationMarker size={22} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#800000] mb-1">Location</p>
                    <p className={`text-sm font-sans ${isDark ? 'text-white/70' : 'text-[#1a0204]/70'}`}>Sulat, Eastern Samar</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group/item">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[#800000] group-hover/item:bg-[#800000] group-hover/item:text-white transition-all duration-300 ${isDark ? 'bg-[#800000]/10' : 'bg-[#800000]/5'}`}>
                    <IoCallOutline size={22} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#800000] mb-1">Phone</p>
                    <p className={`text-sm font-sans ${isDark ? 'text-white/70' : 'text-[#1a0204]/70'}`}>+63 915 402 1234</p>
                  </div>
                </div>
              </div>

              <div className={`mt-16 pt-8 border-t flex justify-between items-center ${isDark ? 'border-white/5' : 'border-[#800000]/10'}`}>
                <div className="flex gap-5">
                  {socials.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      whileHover={{ scale: 1.2, color: social.color }}
                      className={`text-xl transition-all ${isDark ? 'text-white/20' : 'text-[#1a0204]/20'}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <div className="w-2 h-2 rounded-full bg-[#800000] animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: MESSAGE FORM CARD */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div className={`border p-8 lg:p-12 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl h-full relative group transition-all duration-500 ${
              isDark ? 'bg-white/[0.02] border-white/5' : 'bg-white border-[#800000]/10'
            }`}>
              <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-3">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#800000] ml-2 font-sans">Full Name</label>
                  <input 
                    name="user_name"
                    type="text" 
                    required
                    placeholder="Juan Dela Cruz" 
                    className={`w-full border rounded-2xl px-6 py-4 transition-all font-sans text-sm focus:outline-none focus:border-[#800000] ${
                      isDark ? 'bg-white/5 border-white/10 text-white placeholder:text-white/10' : 'bg-[#fdfcf0] border-[#800000]/10 text-[#1a0204] placeholder:text-[#1a0204]/20'
                    }`}
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#800000] ml-2 font-sans">Email Address</label>
                  <input 
                    name="user_email"
                    type="email" 
                    required
                    placeholder="example@email.com" 
                    className={`w-full border rounded-2xl px-6 py-4 transition-all font-sans text-sm focus:outline-none focus:border-[#800000] ${
                      isDark ? 'bg-white/5 border-white/10 text-white placeholder:text-white/10' : 'bg-[#fdfcf0] border-[#800000]/10 text-[#1a0204] placeholder:text-[#1a0204]/20'
                    }`}
                  />
                </div>

                <div className="md:col-span-2 space-y-3">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#800000] ml-2 font-sans">Message</label>
                  <textarea 
                    name="message"
                    rows="6" 
                    required
                    placeholder="Tell me what you'd like to discuss..." 
                    className={`w-full border rounded-[2rem] px-6 py-5 transition-all font-sans text-sm resize-none focus:outline-none focus:border-[#800000] ${
                      isDark ? 'bg-white/5 border-white/10 text-white placeholder:text-white/10' : 'bg-[#fdfcf0] border-[#800000]/10 text-[#1a0204] placeholder:text-[#1a0204]/20'
                    }`}
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row items-center gap-6">
                  <motion.button 
                    disabled={isSending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full sm:w-auto px-12 py-5 bg-[#800000] text-white text-[11px] font-black tracking-[0.3em] uppercase rounded-full overflow-hidden transition-all shadow-xl shadow-[#800000]/20 disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 font-black">
                      {isSending ? 'Sending...' : 'Send Message'} 
                      {!isSending && <IoSendSharp className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </motion.button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-green-500 font-bold text-[10px] uppercase tracking-widest">
                        Message sent successfully!
                      </motion.p>
                    )}
                    {status === 'error' && (
                      <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-red-500 font-bold text-[10px] uppercase tracking-widest">
                        Failed to send. Try again.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.footer variants={itemVariants} className="mt-20 pt-10 border-t border-[#800000]/10 text-center">
          <p className={`text-[9px] uppercase tracking-[1em] font-sans hover:text-[#800000] transition-colors cursor-default ${isDark ? 'text-white/10' : 'text-[#1a0204]/20'}`}>
            Leonard Geposon — Brainer © 2026
          </p>
        </motion.footer>
      </motion.div>
    </section>
  );
};

export default Contact;