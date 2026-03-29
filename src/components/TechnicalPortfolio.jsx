import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CardSwap, { Card } from './CardSwap';
import TechLines from './TechLines';

import requestlyImg from '../assets/REQUESTLY.png';
import req1Img from '../assets/req1.png';
import req2Img from '../assets/req2.png';
import req3Img from '../assets/req3.png';

import printproImg from '../assets/PRINTPRO.png';

import boardeaseImg from '../assets/BOARDEASE.png'; 

import memoraImg from '../assets/MEMORA.png'; 
import memora1Img from '../assets/memora1.png';
import memora2Img from '../assets/memora2.png';

import electionImg from '../assets/ELECTION.png'; 

import swdsmsImg from '../assets/SWDSMS.png';

import valentineImg from '../assets/VALENTINES.png';

import eCompendiumImg from '../assets/E-COMPENDIUM.png';

import ePalengkeImg from '../assets/E-PALENGKE.png';

export const projects = [
  {
    id: 1,
    slug: "requestly",
    title: "REQUESTLY",
    subtitle: "ESSU Registrar – Online Document Requisition",
    description: "Architected and developed a full-stack web solution for the ESSU Registrar's Office. Features include QR-based status verification, automated document tracking, and a seamless payment gateway integration using PayMongo to modernize campus administrative workflows.",
    fullDescription: "I developed Requestly specifically to address the persistent issues of long daily queues and frequent client complaints regarding the service speed at the ESSU Registrar’s Office. As a requester, I saw firsthand the frustration of applicants waiting for hours and the administrative strain of handling repetitive inquiries. \n\nI created this full-stack solution to digitize the document requisition process and centralize common questions into a pre-made FAQ system. This not only eliminates the need for physical queuing but also significantly reduces the volume of calls the office handles daily. Most importantly, the platform ensures that service remains uninterrupted during typhoons or work-from-home periods; even without access to office landlines, we can continue to resolve inquiries and process requests through the web app, transforming a manual, high-pressure workflow into a streamlined digital experience.",
    features: ["User login", "QR-based Status Verification", "Automated Document Tracking", "FAQ Knowledge Base", "PayMongo Integration"],
    tech: ["React.js", "Supabase", "Tailwind", "PayMongo API"],
    image: requestlyImg, 
    gallery: [requestlyImg, req1Img, req2Img, req3Img], 
    github: "https://github.com/geposonleonard/requestly",
    webLink: "https://essu-registrar-hub.netlify.app/"
  },
  {
    id: 2,
    slug: "boardease",
    title: "BOARDEASE",
    subtitle: "Boarding House Management System",
    description: "Designed a centralized platform for property owners and tenants to manage room availability, rent tracking, and secure login. Focused on creating a simplified dashboard for ESSU students to find and secure local housing with ease.",
    fullDescription: "BoardEase was born out of the struggle students face finding quality housing near campus. It centralizes listings and provides a secure portal for communication between landlords and student tenants.",
    features: ["Property Management", "Tenant Dashboard", "Real-time Availability", "Secure Authentication", "Payment Tracking"],
    tech: ["React.js", "Appwrite", "Framer Motion", "JavaScript"],
    image: boardeaseImg,
    gallery: [boardeaseImg, electionImg], 
    github: "https://github.com/geposonleonard/boardease",
    webLink: "https://boardease.netlify.app"
  },
  {
    id: 3,
    slug: "memora",
    title: "MEMORA",
    subtitle: "AI-Powered Flashcard & Study Companion",
    description: "A sleek mobile application designed to simplify active recall. Memora allows users to create, categorize, and master custom flashcards through a gamified interface. Featuring spaced-repetition logic and a minimalist UI.",
    fullDescription: "Memora focuses on the science of learning. By using spaced-repetition, the app helps students master complex subjects by breaking them into bite-sized daily reviews.",
    features: ["Custom Flashcards", "Spaced-Repetition Algorithm", "Category Folders", "Gamified Progress", "Cloud Sync"],
    tech: ["React Native", "Expo Go", "Appwrite", "Framer Motion"],
    image: memoraImg,
    gallery: [memoraImg, memora1Img, memora2Img], 
    github: "https://github.com/geposonleonard/memora-app",
    webLink: "https://memora.netlify.app"
  },
  {
    id: 4,
    slug: "icpep-election",
    title: "ICPEP.SE ELECTION",
    subtitle: "Secure Digital Voting System",
    description: "Developed a specialized election management system for the ICpEP Student Edition. Engineered secure voter authentication and real-time tallying logic to ensure transparent and efficient student organization elections.",
    fullDescription: "This system was developed to modernize the student election process, ensuring a high level of security and providing real-time data visualization for results.",
    features: ["Secure Voter Authentication", "Real-time Tallying", "Admin Management Console", "Tamper-proof Results"],
    tech: ["React.js", "Firebase", "Tailwind CSS"],
    image: electionImg,
    gallery: [electionImg, boardeaseImg], 
    github: "https://github.com/geposonleonard/icpep-election",
    webLink: "https://icpep-election.netlify.app/"
  },
  {
    id: 5,
    slug: "printpro",
    title: "PrintPro",
    subtitle: "Online Printing System",
    description: "Developed a specialized online printing system for students to easily order and manage their print jobs. Focused on creating a user-friendly interface with real-time tracking and secure payment processing.",
    fullDescription: "PrintPro was designed to simplify the printing process for students, providing a seamless experience from order placement to delivery.",
    features: ["Easy Order Placement", "Real-time Tracking", "Secure Payment Processing", "Multiple Print Options"],
    tech: ["React.js", "Node.js", "MongoDB", "Stripe API"],
    image: printproImg,
    gallery: [printproImg, boardeaseImg], 
    github: "https://github.com/geposonleonard/icpep-election",
    webLink: "https://printproo.netlify.app/"
  },
  {
  id: 6, // Adjusted to follow PrintPro
  slug: "swdsms",
  title: "SWDSMS",
  subtitle: "Student Management System",
  description: "Developed a comprehensive management system for the Social Welfare and Development department to streamline student record-keeping. Integrated features for data organization, student profiling, and automated report generation.",
  fullDescription: "SWDSMS (Social Welfare and Development Student Management System) was engineered to replace manual filing systems, ensuring that student data is secure, easily searchable, and efficiently managed by department administrators.",
  features: ["Student Profiling", "Automated Report Generation", "Secure Data Storage", "Advanced Search & Filtering"],
  tech: ["React.js", "Supabase", "Tailwind CSS", "Netlify"],
  image: swdsmsImg, // Ensure you define/import this variable
  gallery: [swdsmsImg, requestlyImg], 
  github: "https://github.com/geposonleonard/swdsms",
  webLink: "https://swdsmss.netlify.app/"
},
{
  id: 7,
  slug: "valentine-gift",
  title: "Valentine Gift",
  subtitle: "Interactive Digital Experience",
  description: "Designed and deployed a viral interactive web experience allowing users to customize digital gifts with curated music and visuals. Successfully reached over 200 users within the first 48 hours of launch.",
  fullDescription: "A personalized gifting platform where users can select unique floral illustrations and background music to craft a digital moment. The project focused on high interactivity, aesthetic UI design, and rapid deployment.",
  features: ["Custom Flower Selection", "Music Integration (Spotify-style)", "Responsive Design", "Instant Social Sharing"],
  tech: ["React.js", "Framer Motion", "Tailwind CSS", "Netlify"],
  image: valentineImg,
  gallery: [valentineImg], 
  github: "https://github.com/geposonleonard/valentine-gift",
  webLink: "https://happy-valentinesssz.netlify.app/" // Update with your actual URL
},
{
  id: 8,
  slug: "e-compendium",
  title: "E-COMPENDIUM",
  subtitle: "Digital Thesis Submission System",
  description: "Developed as my debut project, this system digitizes the thesis submission process for ESSU. It features a dual-portal login for Admins and Students to upload and manage academic research papers efficiently.",
  fullDescription: "E-COMPENDIUM was the foundational project that sparked my interest in software development. It serves as a centralized digital repository where students can submit their thesis work and administrators can manage approvals and archival, replacing traditional paper-based submissions.",
  features: ["Dual-Role Authentication", "Digital Document Upload", "Thesis Archiving", "Searchable Database"],
  tech: ["HTML5", "CSS3", "JavaScript", "Firebase (Firestore & Auth)"],
  image: eCompendiumImg,
  gallery: [eCompendiumImg], 
  github: "https://github.com/geposonleonard/e-compendium",
  webLink: "https://e-compendiumm.netlify.app"
},
{
  id: 9,
  slug: "e-palengke",
  title: "E-PALENGKE",
  subtitle: "Dukwag Agrikultura Marketplace Design",
  description: "A specialized UI/UX design project for Borongan City's Dukwag Agrikultura program. Designed an intuitive digital marketplace to help local farmers sell their fresh produce directly to the community.",
  fullDescription: "E-PALENGKE is a Figma-based prototype designed to modernize agricultural commerce in Borongan. The project focuses on creating a seamless 'farm-to-table' digital experience, empowering local farmers with a platform to showcase and sell their products while providing citizens with easy access to local goods.",
  features: ["Local Farmer Portals", "Direct-to-Consumer Marketplace", "Localized UI/UX Design", "Fresh Produce Categorization"],
  tech: ["Figma", "UI/UX Design", "Product Prototyping", "User Flow Mapping"],
  image: ePalengkeImg,
  gallery: [ePalengkeImg], 
  github: null,
  webLink: "https://www.figma.com/design/A7u2nY3TLZfhw5MwTl32pL/ePalengke?node-id=0-1&t=cxXOPwuSuiAQ845O-1"
}
];

const TechnicalPortfolio = ({ isDark }) => {
  const navigate = useNavigate();
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
  }, [isMobile]);

  const handleSwapSync = (index) => {
    if (!isMobile) setCurrentIndex(index);
  };

  const handleSeeMore = () => {
    const slug = projects[currentIndex].slug;
    navigate(`/project/${slug}`);
    window.scrollTo(0, 0);
  };

  const handleViewAll = () => {
    window.open("https://github.com/Brainnnerr", '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="projects" 
      className={`min-h-screen lg:h-screen w-full transition-colors duration-700 overflow-hidden lg:snap-start flex flex-col items-center justify-center py-20 lg:py-0 relative ${
        isDark ? 'bg-[#2e0206]' : 'bg-[#f4d9d0]'
      }`}
    >
      <TechLines isDark={isDark} />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: isDark ? [0.03, 0.06, 0.03] : [0.02, 0.04, 0.02] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#800000] rounded-full blur-[160px]" 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <h2 className={`header-font text-3xl font-black uppercase tracking-widest text-[#ee7979] mb-12 lg:mb-16 opacity-40 text-center`}>
          Technical Portfolio
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1 relative z-20">
            <div className={`border transition-all duration-500 p-8 lg:p-10 rounded-[2.5rem] relative h-[480px] lg:h-[550px] flex flex-col overflow-hidden ${
              isDark 
                ? 'bg-[#2d0205]/80 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                : 'bg-white/60 border-[#a31621]/20 shadow-[0_20px_40px_rgba(163,22,33,0.08)] backdrop-blur-md'
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
                            : 'border-[#a31621]/20 bg-[#a31621]/5 text-[#a31621]'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar transition-all duration-300">
                    <p className={`text-sm lg:text-[15px] leading-relaxed font-normal font-sans transition-colors duration-500 ${
                      isDark ? 'text-gray-400' : 'text-[#1a0204]/80'
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
                      {currentIndex + 1} / {projects.length}
                    </span>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSeeMore}
                      className="px-6 py-3 bg-[#a31621] text-white text-[10px] font-black tracking-widest uppercase rounded-full shadow-lg shadow-[#800000]/30 flex items-center gap-2 group transition-all"
                    >
                      SEE PROJECT
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative h-[350px] lg:h-[500px] flex justify-center items-center z-10">
            {isMobile ? (
              <motion.div 
                key={`mobile-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`w-full h-full max-w-[480px] aspect-[4/3] rounded-[2rem] border-2 overflow-hidden shadow-2xl transition-all duration-700 ${
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
                    customClass={`rounded-[2rem] border-2 shadow-2xl overflow-hidden transition-all duration-700 ${
                        isDark ? 'border-white shadow-black/80' : 'border-[#a31621] shadow-[#a31621]/10'
                    }`}
                    style={{ background: isDark ? '#2d0205' : 'transparent' }}
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

        <div className="mt-12 lg:mt-20 flex justify-center relative z-30">
           <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewAll}
            className={`px-10 py-4 border-2 rounded-full text-[11px] font-black tracking-[0.3em] uppercase transition-all flex items-center gap-4 ${
              isDark 
                ? 'border-white/10 text-white hover:bg-white hover:text-[#1a0204]' 
                : 'border-[#a31621]/20 text-[#a31621] hover:bg-[#a31621] hover:text-white shadow-lg shadow-[#a31621]/5'
            }`}
          >
            GITHUB
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPortfolio;