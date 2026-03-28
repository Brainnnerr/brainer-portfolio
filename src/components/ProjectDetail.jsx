import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
    FiArrowLeft,
    FiArrowRight,
    FiChevronLeft,
    FiChevronRight,
    FiExternalLink,
    FiGithub,
} from "react-icons/fi";
import TechLines from "./TechLines";
import { projects } from "./TechnicalPortfolio";

const ProjectDetail = ({ isDark }) => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const projectIndex = projects.findIndex((p) => p.slug === slug);
    const project = projects[projectIndex];
    const nextProject = projects[(projectIndex + 1) % projects.length];

    const [imgIndex, setImgIndex] = useState(0);
    const projectImages = project?.gallery || [project?.image];

    useEffect(() => {
        window.scrollTo(0, 0);
        setImgIndex(0);
    }, [slug]);

    const nextImg = () =>
        setImgIndex((prev) => (prev + 1) % projectImages.length);
    const prevImg = () =>
        setImgIndex((prev) =>
            (prev - 1 + projectImages.length) % projectImages.length
        );

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center font-black uppercase tracking-[0.5em]">
                Project not found
            </div>
        );
    }

    return (
        <div
            className={`min-h-screen w-full transition-colors duration-700 relative overflow-x-hidden flex flex-col items-center ${
                isDark
                    ? "bg-[#140203] text-white"
                    : "bg-[#f4d9d0] text-[#1a0204]"
            }`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
        >
            <TechLines isDark={isDark} />

            <nav className="w-full max-w-7xl px-6 py-8 relative z-20">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] opacity-60 hover:opacity-100 transition-all"
                >
                    <FiArrowLeft /> Back to home
                </button>
            </nav>

            <main className="max-w-5xl w-full px-6 relative z-10 py-12 flex flex-col items-center">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-2">
                        {project.tech.map((t) => (
                            <span
                                key={t}
                                className={`px-4 py-1 border rounded-full text-[9px] font-black tracking-widest uppercase ${
                                    isDark
                                        ? "border-white/10"
                                        : "border-[#a31621]/20 text-[#a31621]"
                                }`}
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* --- FLOATING IMAGE DISPLAY --- */}
                <div className="w-full relative group mb-12">
                    <div className="w-full aspect-video flex items-center justify-center relative">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={imgIndex}
                                src={projectImages[imgIndex]}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                            />
                        </AnimatePresence>
                    </div>

                    {projectImages.length > 1 && (
                        <>
                            <button
                                onClick={prevImg}
                                className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 p-2 md:p-4 bg-[#1a0204]/40 md:bg-[#1a0204]/20 backdrop-blur-md text-white rounded-full hover:bg-[#a31621] transition-all z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 shadow-xl active:scale-90"
                            >
                                <FiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </button>

                            <button
                                onClick={nextImg}
                                className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 p-2 md:p-4 bg-[#1a0204]/40 md:bg-[#1a0204]/20 backdrop-blur-md text-white rounded-full hover:bg-[#a31621] transition-all z-30 opacity-100 md:opacity-0 md:group-hover:opacity-100 shadow-xl active:scale-90"
                            >
                                <FiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>

                            <div className="mt-8 flex justify-center gap-2 md:gap-3">
                                {projectImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setImgIndex(i)}
                                        className={`h-1 transition-all duration-500 rounded-full ${
                                            imgIndex === i
                                                ? "w-8 md:w-12 bg-[#a31621]"
                                                : "w-2 md:w-4 bg-current opacity-20"
                                        }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-24 w-full mt-8">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-[#1a0204] text-white rounded-2xl font-black text-[10px] tracking-widest hover:scale-105 transition-all shadow-xl"
                    >
                        <FiGithub size={18} /> GITHUB REPOSITORY
                    </a>
                    <a
                        href={project.webLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-8 py-4 bg-[#a31621] text-white rounded-2xl font-black text-[10px] tracking-widest hover:scale-105 transition-all shadow-xl shadow-[#a31621]/20"
                    >
                        <FiExternalLink size={18} /> LIVE WEBLINK
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full mb-32">
                    <div>
                        <h2 className="text-2xl font-black uppercase opacity-30 mb-8 tracking-widest">
                            Core Features
                        </h2>
                        <ul className="space-y-6">
                            {project.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="flex items-center gap-4 text-xl font-bold tracking-tight"
                                >
                                    <div className="h-[2px] w-8 bg-[#a31621]" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-black uppercase opacity-30 mb-8 tracking-widest">
                            Background & Objective
                        </h2>
                        <p className="text-lg leading-relaxed opacity-80 font-normal">
                            {project.fullDescription}
                        </p>
                    </div>
                </div>

                {/* --- NEXT PROJECT NAV --- */}
                <div className="w-full border-t py-20 flex flex-col items-center gap-8 border-[#a31621]/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
                        View Next Project
                    </p>
                    <Link
                        to={`/project/${nextProject.slug}`}
                        className="group flex flex-col items-center"
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter transition-all group-hover:text-[#a31621] opacity-20">
                            {nextProject.title}
                        </h3>
                        <div className="mt-4 p-4 rounded-full border border-current opacity-20 group-hover:opacity-100 group-hover:bg-[#a31621] group-hover:text-white transition-all">
                            <FiArrowRight size={24} />
                        </div>
                    </Link>
                </div>

                {/* --- QUICK NAVIGATION BUTTONS --- */}
                <div className="w-full py-10 flex flex-col items-center gap-6">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30">Quick Navigation</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {projects.map((p) => (
                            <Link
                                key={p.slug}
                                to={`/project/${p.slug}`}
                                className={`px-5 py-2 border rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                                    slug === p.slug 
                                    ? "bg-[#a31621] border-[#a31621] text-white scale-105" 
                                    : isDark 
                                        ? "border-white/10 hover:border-white/40 text-white/50 hover:text-white" 
                                        : "border-[#a31621]/20 hover:border-[#a31621] text-[#a31621]/50 hover:text-[#a31621]"
                                }`}
                            >
                                {p.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <footer
                className={`w-full py-10 text-center uppercase tracking-[1em] text-[9px] transition-colors duration-700 ${
                    isDark
                        ? "text-[#f3eae8] opacity-60"
                        : "text-[#a31621] opacity-80"
                }`}
            >
                Leonard Geposon — Brainer © 2026
            </footer>
        </div>
    );
};

export default ProjectDetail;