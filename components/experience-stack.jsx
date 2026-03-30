// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import Skill from "./skill";
// import SkillGrid from "./skill-grid";

// const experienceData = [
//   {
//     id: "01",
//     company: "JELLOSITE",
//     role: "Software Developer",
//     timeline: "2025 — Present",
//     details: "Shipping production-level features and optimizing complex architecture for the core platform. Working directly with leadership to execute high-impact technical solutions.",
//     stack: [
//       { name: "React", src: "/react.png" },
//       { name: "Supabase", src: "/supabase.png" },
//       { name: "Node.js", src: "/node.svg" } 
//     ]
//   },
//   {
//     id: "02",
//     company: "RUUMIES",
//     role: "Full-Stack Developer",
//     timeline: "2025 — Present",
//     details: "Driving front-end and back-end integration. Architecting scalable user flows and maintaining robust database structures to support active user bases.",
//     stack: [
//       { name: "React", src: "/react.png" },
//       { name: "Firebase", src: "/firebase.svg" },
//       { name: "WordPress", src: "/wordpress.png" }
//     ]
//   },
//   {
//     id: "03",
//     company: "THEFOURDEVS",
//     role: "Software Engineer",
//     timeline: "2024 — Present",
//     details: "Collaborating within a specialized engineering squad to architect and ship diverse, high-complexity platforms. Core contributor to major client products including LearnPool (Web3 protocol), Gamaliel Consult, and Veer.",
//     stack: [
//       { name: "Next.js", src: "/next.png" },
//       { name: "Vue", src: "/vue.png" },
//       { name: "Tailwind", src: "/tailwind.png" }
//     ]
//   },
//   {
//     id: "04",
//     company: "INDEPENDENT",
//     role: "Freelance Engineer & Designer",
//     timeline: "2023 — Present",
//     details: "Delivering end-to-end client solutions. Blending technical execution with high-converting copywriting and UI/UX design to launch standalone products and brands.",
//     stack: [
//       { name: "React", src: "/react.png" },
//       { name: "Tailwind", src: "/tailwind.png" },
//       { name: "Design", src: "/react.png" } 
//     ]
//   }
// ];

// export default function ExperienceStack() {
//   const [openId, setOpenId] = useState("01"); 

//   return (
//     <section className="w-full bg-[#050505] text-[#FAFAFA] border-t border-white/10 flex flex-col overflow-hidden">
      
//       <SkillGrid />

//       <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[60vh]">
        
//         <div className="lg:col-span-4 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col gap-6 lg:gap-0 lg:justify-between">
//            <h2 className="font-display uppercase text-5xl lg:text-7xl tracking-tighter leading-none lg:leading-[0.8]">
//              THE<br className="hidden lg:block" /> RECORD.
//            </h2>

//            <div className="font-sans text-white/70 text-base lg:text-lg leading-relaxed max-w-sm">
//              <p className="mb-4">
//                My foundation is in <strong className="text-white">Mechanical Engineering</strong>. I am trained to design complex systems where every moving part must execute with absolute precision.
//              </p>
//              <p>
//                I bring that exact same rigorous methodology to software—architecting scalable serverless backends, robust database structures, and high-performance interfaces.
//              </p>
//            </div>
//         </div>

//         <div className="lg:col-span-8 flex flex-col">
//           {experienceData.map((job) => (
//             <div 
//               key={job.id} 
//               className="border-b border-white/10 last:border-b-0 cursor-pointer group"
//               onClick={() => setOpenId(openId === job.id ? null : job.id)}
//             >
//               <div className="p-6 lg:p-10 flex items-center justify-between transition-colors duration-300 hover:bg-white/5">
//                 <div className="flex items-baseline gap-4 lg:gap-6">
//                   <span className="font-mono text-xs lg:text-sm text-white/40">{job.id}</span>
//                   <h3 className="font-display text-3xl lg:text-5xl uppercase tracking-tighter">
//                     {job.company}
//                   </h3>
//                 </div>
//                 <div className="font-mono text-xl text-white/50 group-hover:text-white transition-colors duration-300">
//                   {openId === job.id ? "—" : "+"}
//                 </div>
//               </div>

//               <AnimatePresence>
//                 {openId === job.id && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//                     className="overflow-hidden"
//                   >
//                     <div className="p-6 lg:p-10 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-sans">
//                       <div>
//                         <div className="text-white/40 uppercase tracking-widest text-xs mb-2">Role</div>
//                         <div className="text-lg lg:text-xl">{job.role}</div>
//                       </div>
//                       <div>
//                          <div className="text-white/40 uppercase tracking-widest text-xs mb-2">Timeline</div>
//                          <div className="text-lg lg:text-xl">{job.timeline}</div>
//                       </div>
//                       <div className="md:col-span-2 text-white/70 text-base lg:text-lg max-w-2xl leading-relaxed">
//                         {job.details}
//                       </div>
                      
//                       <div className="md:col-span-2 mt-2 pt-6 border-t border-white/10">
//                         <div className="text-white/40 uppercase tracking-widest text-xs mb-4">Technologies Shipped</div>
//                         <div className="flex flex-wrap gap-3 lg:gap-4">
//                           {job.stack.map((tech, i) => (
//                             <Skill key={i} src={tech.src} name={tech.name} />
//                           ))}
//                         </div>
//                       </div>

//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Skill from "./skill";
import SkillGrid from "./skill-grid";

const experienceData = [
  {
    id: "01",
    company: "JELLOSITE",
    role: "Software Developer",
    timeline: "2025 — Present",
    link: "https://jellosite.com",
    details: "Shipping production-level features and optimizing complex architecture for the core platform. Working directly with leadership to execute high-impact technical solutions.",
    stack: [
      { name: "React", src: "/react.png" },
      { name: "Supabase", src: "/supabase.png" },
      { name: "Node.js", src: "/node.svg" } 
    ]
  },
  {
    id: "02",
    company: "RUUMIES",
    role: "Full-Stack Developer",
    timeline: "2025 — Present",
    link: "https://ruumies.com",
    details: "Driving front-end and back-end integration. Architecting scalable user flows and maintaining robust database structures to support active user bases.",
    stack: [
      { name: "React", src: "/react.png" },
      { name: "Firebase", src: "/firebase.svg" },
      { name: "WordPress", src: "/wordpress.png" }
    ]
  },
  {
    id: "03",
    company: "THEFOURDEVS",
    role: "Software Engineer",
    timeline: "2024 — Present",
    details: "Collaborating within a specialized engineering squad to architect and ship diverse, high-complexity platforms. Core contributor to major client products including LearnPool (Web3 protocol), Gamaliel Consult, and Veer.",
    stack: [
      { name: "Next.js", src: "/next.png" },
      { name: "Vue", src: "/vue.png" },
      { name: "Tailwind", src: "/tailwind.png" }
    ]
  },
  {
    id: "04",
    company: "INDEPENDENT",
    role: "Freelance Engineer & Designer",
    timeline: "2023 — Present",
    details: "Delivering end-to-end client solutions. Blending technical execution with high-converting copywriting and UI/UX design to launch standalone products and brands.",
    stack: [
      { name: "React", src: "/react.png" },
      { name: "Tailwind", src: "/tailwind.png" },
      { name: "Design", src: "/react.png" } 
    ]
  }
];

export default function ExperienceStack() {
  const [openId, setOpenId] = useState("01"); 

  return (
    <section className="w-full bg-[#050505] text-[#FAFAFA] border-t border-white/10 flex flex-col overflow-hidden">
      
      <SkillGrid />

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[60vh]">
        
        <div className="lg:col-span-4 p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col gap-6 lg:gap-0 lg:justify-between">
           <h2 className="font-display uppercase text-5xl lg:text-7xl tracking-tighter leading-none lg:leading-[0.8]">
             THE<br className="hidden lg:block" /> RECORD.
           </h2>

           <div className="font-sans text-white/70 text-base lg:text-lg leading-relaxed max-w-sm">
             <p className="mb-4">
               My foundation is in <strong className="text-white">Mechanical Engineering</strong>. I am trained to design complex systems where every moving part must execute with absolute precision.
             </p>
             <p>
               I bring that exact same rigorous methodology to software—architecting scalable serverless backends, robust database structures, and high-performance interfaces.
             </p>
           </div>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          {experienceData.map((job) => (
            <div 
              key={job.id} 
              className="border-b border-white/10 last:border-b-0 cursor-pointer group"
              onClick={() => setOpenId(openId === job.id ? null : job.id)}
            >
              <div className="p-6 lg:p-10 flex items-center justify-between transition-colors duration-300 hover:bg-white/5">
                <div className="flex items-baseline gap-4 lg:gap-6">
                  <span className="font-mono text-xs lg:text-sm text-white/40">{job.id}</span>
                  <h3 className="font-display text-3xl lg:text-5xl uppercase tracking-tighter">
                    {job.company}
                  </h3>
                </div>
                <div className="font-mono text-xl text-white/50 group-hover:text-white transition-colors duration-300">
                  {openId === job.id ? "—" : "+"}
                </div>
              </div>

              <AnimatePresence>
                {openId === job.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 lg:p-10 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-sans">
                      <div>
                        <div className="text-white/40 uppercase tracking-widest text-xs mb-2">Role</div>
                        <div className="text-lg lg:text-xl">{job.role}</div>
                      </div>
                      <div>
                         <div className="text-white/40 uppercase tracking-widest text-xs mb-2">Timeline</div>
                         <div className="text-lg lg:text-xl">{job.timeline}</div>
                      </div>
                      <div className="md:col-span-2 text-white/70 text-base lg:text-lg max-w-2xl leading-relaxed">
                        {job.details}
                      </div>

                      {job.link && (
                        <div className="md:col-span-2 mt-2">
                          <a 
                            href={job.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 group/link"
                          >
                            <div className="flex items-center gap-2 px-3 py-1 border border-white/20 rounded-full group-hover/link:border-white transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 group-hover/link:text-white">
                                Live System
                              </span>
                            </div>
                            <span className="font-mono text-xs uppercase tracking-widest underline underline-offset-4 decoration-white/20 group-hover/link:decoration-white transition-all">
                              Visit Platform ↗
                            </span>
                          </a>
                        </div>
                      )}
                      
                      <div className="md:col-span-2 mt-2 pt-6 border-t border-white/10">
                        <div className="text-white/40 uppercase tracking-widest text-xs mb-4">Technologies Shipped</div>
                        <div className="flex flex-wrap gap-3 lg:gap-4">
                          {job.stack.map((tech, i) => (
                            <Skill key={i} src={tech.src} name={tech.name} />
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}