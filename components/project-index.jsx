"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const archiveProjects = [
  {
    id: "01",
    title: "LEARNPOOL",
    description: "A knowledge platform built around verified daily facts and on-chain rewards.",
    stack: "Next.js ✦ Tailwind",
    link: "https://pk.learnpool.fun/",
    status: "Live"
  },
  {
    id: "02",
    title: "CLARIPDF",
    description: "An OCR-powered document tool for editing and working with image-based PDFs.",
    stack: "React ✦ Tailwind ✦ Shadcn",
    link: "https://claripdf.vercel.app/",
    status: "Live"
  },
  {
    id: "03",
    title: "CLAYCAVE",
    description: "A subscription management product combining recurring services and virtual cards.",
    stack: "Next.js ✦ Tailwind",
    link: "https://claycave.vercel.app",
    status: "Live"
  },
  {
    id: "04",
    title: "TROVEMART",
    description: "A self-service shopping experience with QR-based order verification.",
    stack: "React ✦ Redux ✦ Firebase",
    link: "https://trovemart.vercel.app",
    status: "Live"
  },
  {
    id: "05",
    title: "GAMALIEL CONSULT",
    description: "A consulting platform with a secure dashboard for role-specific internal work.",
    stack: "Vue ✦ Tailwind",
    link: "https://www.gamalielconsult.com/",
    status: "Live"
  }
];

export default function ProjectIndex() {
  return (
    <section className="w-full bg-[#050505] text-[#FAFAFA] border-t border-white/10 pb-24">
      <div className="border-b border-white/10 px-6 py-16 md:px-12 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display uppercase text-5xl tracking-tighter md:text-7xl">SELECTED WORK.</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">Business workflow system</span>
        </div>

        <a
          href="/work/qaffy"
          className="group grid overflow-hidden border border-white/10 md:grid-cols-2 hover:bg-white/5 transition-colors duration-300"
        >
          <div className="relative aspect-[16/10] min-h-[260px] border-b border-white/10 bg-black/40 md:border-b-0 md:border-r">
            <Image
              src="/qaffyassets/Google-Pixel-6-PRO-qaffy-theta.vercel.app.png"
              alt="Qaffy customer laundry order interface"
              fill
              unoptimized
              className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-between p-6 md:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-white/40">02 / Selected work</p>
              <h3 className="mt-6 font-display text-5xl uppercase tracking-tighter md:text-7xl">QAFFY.</h3>
              <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-white/60">
                A laundry operations platform connecting customers, logistics, vendors, and administration in one system.
              </p>
            </div>
            <span className="mt-10 font-mono text-xs uppercase tracking-widest underline underline-offset-8 decoration-white/30 group-hover:decoration-white">
              View case study ↗
            </span>
          </div>
        </a>
      </div>
      
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