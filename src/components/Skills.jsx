import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiAppwrite,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import SkillsTechLines from "./SkillsTechLines";

const Skills = ({ isDark }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const CustomFigmaIcon = () => (
    <div className="grid grid-cols-2 gap-[2px] w-[20px] lg:w-[28px]">
      <div className="h-[9px] lg:h-[13px] w-[9px] lg:w-[13px] bg-[#F24E1E] rounded-l-full" />
      <div className="h-[9px] lg:h-[13px] w-[9px] lg:w-[13px] bg-[#FF7262] rounded-full" />
      <div className="h-[9px] lg:h-[13px] w-[9px] lg:w-[13px] bg-[#A259FF] rounded-l-full" />
      <div className="h-[9px] lg:h-[13px] w-[9px] lg:w-[13px] bg-[#1ABCFE] rounded-full" />
      <div className="h-[9px] lg:h-[13px] w-[9px] lg:w-[13px] bg-[#0ACF83] rounded-full rounded-tr-none" />
    </div>
  );

  const allSkills = [
    {
      name: "React",
      icon: <SiReact />,
      color: "#61DAFB",
      desc:
        "A JavaScript library for building component-based user interfaces.",
    },
    {
      name: "React Native",
      icon: <TbBrandReactNative />,
      color: "#61DAFB",
      desc: "Framework for building native mobile apps using React.",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
      desc: "The versatile language powering interactivity across the web.",
    },
    {
      name: "HTML5",
      icon: <SiHtml5 />,
      color: "#E34F26",
      desc: "The standard markup language for creating web pages.",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
      desc: "A utility-first CSS framework for rapid UI styling.",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      color: "#339933",
      desc: "JavaScript runtime environment for building server-side apps.",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      color: isDark ? "#ffffff" : "#1a0204",
      desc: "Minimalist web framework for Node.js backend services.",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      color: "#FFCA28",
      desc: "Google's platform for mobile and web app development.",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      color: "#4169E1",
      desc: "Advanced open-source relational database system.",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "#4479A1",
      desc: "Widely-used relational database management system.",
    },
    {
      name: "Appwrite",
      icon: <SiAppwrite />,
      color: "#FD366E",
      desc: "Secure backend-as-a-service for web and mobile developers.",
    },
    {
      name: "Supabase",
      icon: <SiSupabase />,
      color: "#3ECF8E",
      desc: "The open-source alternative to Firebase for databases.",
    },
    {
      name: "Netlify",
      icon: <SiNetlify />,
      color: "#00C7B7",
      desc: "Cloud platform for instant hosting and serverless functions.",
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      color: isDark ? "#ffffff" : "#1a0204",
      desc: "Optimized platform for frontend frameworks and static sites.",
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
      color: isDark ? "#ffffff" : "#1a0204",
      desc: "Cloud-based hosting for version control and collaboration.",
    },
    {
      name: "GitLab",
      icon: <SiGitlab />,
      color: "#FC6D26",
      desc: "DevOps lifecycle tool providing a Git-repository manager.",
    },
    {
      name: "Figma",
      icon: <CustomFigmaIcon />,
      color: "#A259FF",
      desc: "Collaborative interface design tool for modern UI/UX.",
    },
  ];

  return (
    <section
      id="skills"
      className={`h-screen min-h-[700px] py-10 lg:py-0 lg:snap-start flex flex-col items-center justify-center overflow-hidden relative transition-colors duration-700 ${
        isDark ? "bg-[#240608]" : "bg-[#f4d9d0]"
      }`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <SkillsTechLines isDark={isDark} />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ backgroundColor: "#a31621" }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[450px] h-[300px] lg:h-[450px] rounded-full blur-[100px] lg:blur-[150px] ${
            isDark ? "opacity-10" : "opacity-[0.04]"
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        <div className="h-20 mb-4 flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            {hoveredSkill && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.9 }}
                className={`px-6 py-4 rounded-2xl border backdrop-blur-md shadow-2xl relative ${
                  isDark
                    ? "bg-white/5 border-white/10 text-white/90"
                    : "bg-white/90 border-[#a31621]/20 text-[#1a0204]/80"
                }`}
              >
                <p className="text-xs lg:text-sm font-semibold tracking-wide text-center max-w-sm lg:max-w-md">
                  {hoveredSkill.desc}
                </p>
                <div
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] ${
                    isDark ? "border-t-white/10" : "border-t-white/90"
                  }`}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="text-center mb-8 lg:mb-14">
          <h2
            className={`text-2xl lg:text-4xl font-black uppercase tracking-[0.3em] mb-4 transition-colors duration-500 ${
              isDark ? "text-white/20" : "text-[#a31621]/30"
            }`}
          >
            Skills & Tech
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className={`text-[10px] lg:text-xs uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed transition-colors duration-500 ${
              isDark
                ? "text-gray-500 font-light"
                : "text-[#1a0204]/80 font-bold"
            }`}
          >
            A collection of technologies I use to build production-ready
            software.
          </motion.p>
        </div>

        <div className="flex items-center justify-center w-full">
          <motion.div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-5xl">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{
                  y: -5,
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,1)",
                  borderColor: skill.color,
                }}
                className={`flex flex-col items-center justify-center gap-2 lg:gap-3 border w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-[2rem] backdrop-blur-md transition-all group/card shadow-lg cursor-crosshair ${
                  isDark
                    ? "bg-white/2 border-white/5 shadow-black/40"
                    : "bg-white/40 border-[#a31621]/10 shadow-[#a31621]/5"
                }`}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  style={{ color: skill.color }}
                  className="flex justify-center items-center h-8 lg:h-10 w-full"
                >
                  <div
                    className={`text-xl md:text-2xl lg:text-3xl filter transition-all duration-300 ${
                      isDark
                        ? "drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                        : "drop-shadow-[0_4px_6px_rgba(163,22,33,0.1)]"
                    } group-hover/card:drop-shadow-[0_0_12px_currentColor] group-hover/card:scale-110`}
                  >
                    {skill.icon}
                  </div>
                </motion.div>

                <span
                  className={`text-[8px] lg:text-[9px] font-black uppercase tracking-[0.1em] text-center px-1 transition-colors ${
                    isDark
                      ? "text-white/50 group-hover/card:text-white"
                      : "text-[#1a0204]/60 group-hover/card:text-[#a31621]"
                  }`}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
