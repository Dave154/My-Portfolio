"use client";

import { motion } from "framer-motion";

const archiveProjects = [
  {
    id: "01",
    title: "LEARNPOOL",
    description: "Web3 knowledge protocol for verified daily facts and on-chain rewards",
    stack: "Next.js ✦ Tailwind",
    link: "https://pk.learnpool.fun/",
    status: "Live"
  },
  {
    id: "02",
    title: "CLARIPDF",
    description: "AI-powered OCR web app for editing image-based PDFs",
    stack: "React ✦ Tailwind ✦ Shadcn",
    link: "https://claripdf.vercel.app/",
    status: "Live"
  },
  {
    id: "03",
    title: "CLAYCAVE",
    description: "All-in-One Subscription Manager & Virtual Cards",
    stack: "Next.js ✦ Tailwind",
    link: "https://claycave.vercel.app",
    status: "Live"
  },
  {
    id: "04",
    title: "TROVEMART",
    description: "Customer self-service shopping app with QR order verification",
    stack: "React ✦ Redux ✦ Firebase",
    link: "https://trovemart.vercel.app",
    status: "Live"
  },
  {
    id: "05",
    title: "GAMALIEL CONSULT",
    description: "Consulting platform with secure, role-based internal dashboard",
    stack: "Vue ✦ Tailwind",
    link: "https://www.gamalielconsult.com/",
    status: "Live"
  }
];

export default function ProjectIndex() {
  return (
    <section className="w-full bg-[#050505] text-[#FAFAFA] border-t border-white/10 pb-24">
      
      <div className="p-6 md:p-12 border-b border-white/10">
        <h2 className="font-display uppercase text-4xl md:text-6xl tracking-tighter">
          THE ARCHIVE.
        </h2>
      </div>

      <div className="w-full flex flex-col">
        <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-white/10 text-white/40 font-mono text-xs uppercase tracking-widest">
          <div className="col-span-1">ID</div>
          <div className="col-span-3">Project</div>
          <div className="col-span-4">Description</div>
          <div className="col-span-3">Tech Stack</div>
          <div className="col-span-1 text-right">Link</div>
        </div>

        {archiveProjects.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-6 border-b border-white/10 hover:bg-white/5 transition-colors duration-300 items-center cursor-pointer"
          >
            <div className="hidden md:block col-span-1 font-mono text-sm text-white/40">
              {project.id}
            </div>
            
            <div className="md:col-span-3 font-display uppercase text-2xl md:text-3xl tracking-tight group-hover:text-white transition-colors">
              {project.title}
            </div>
            
            <div className="md:col-span-4 font-sans text-white/70 text-sm md:text-base">
              {project.description}
            </div>
            
            <div className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-white/50 mt-2 md:mt-0">
              {project.stack}
            </div>
            
            <div className="md:col-span-1 flex justify-between md:justify-end items-center mt-4 md:mt-0">
              <span className="md:hidden font-mono text-xs uppercase tracking-widest text-white/40">
                {project.status}
              </span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7"/>
                </svg>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}