"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Vue",
  "Node.js", "Supabase", "Firebase", "Tailwind", "SCSS",
  "Redux", "Zustand", "Figma", "Git", "Vercel"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function SkillGrid() {
  return (
    <div className="w-full border-b border-white/10 bg-[#050505]">
      <div className="p-6 lg:p-12 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="font-display uppercase text-5xl lg:text-6xl tracking-tighter leading-none">
          THE ARSENAL.
        </h2>
        <span className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
          System Specs & Languages
        </span>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-white/10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group border-r border-b border-white/10 p-5 md:p-8 flex items-center justify-center cursor-crosshair hover:bg-white transition-colors duration-200"
          >
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/60 group-hover:text-black transition-colors duration-200 text-center">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}