"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Skill from "./skill";

const kineticElements = [
  { id: 1, name: "REACT", offset: { x: -120, y: -100 }, src: "/react.png" },
  { id: 2, name: "NEXT.JS", offset: { x: -100, y: 120 }, src: "/next.png" },
  { id: 3, name: "SUPABASE", offset: { x: 140, y: 20 }, src: "/supabase.png" },
  { id: 4, name: "TAILWIND", offset: { x: 90, y: -130 }, src: "/tailwind.png" },
  { id: 5, name: "FIREBASE", offset: { x: 50, y: 150 }, src: "/firebase.svg" },
];

export default function ResponsiveHero() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  
  const { scrollY } = useScroll();
  
  // Rotates to vertical exactly as it leaves the header
  const rotation = useTransform(scrollY, [0, 100], [0, -90]);
  
  // Keeps it visible on the left side of the screen as you scroll
  const stickyY = useTransform(scrollY, [0, 500], ["3px", "50%"]);
  const stickyX = useTransform(scrollY, [0, 100], ["24px", "12px"]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        let rawX = (event.clientX - rect.left - centerX);
        let rawY = (event.clientY - rect.top - centerY);

        const maxTravelX = centerX * 0.4;
        const maxTravelY = centerY * 0.4;

        const clampedX = Math.max(-maxTravelX, Math.min(maxTravelX, rawX));
        const clampedY = Math.max(-maxTravelY, Math.min(maxTravelY, rawY));

        setCursorPos({
          x: clampedX / 4,
          y: clampedY / 4,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* STICKY WATERMARK: Positioned outside the main section to avoid overflow clipping */}
      <motion.div
        style={{ 
          rotate: rotation,
          top: stickyY,
          left: stickyX,
          transformOrigin: "left center"
        }}
        className="fixed z-[100] pointer-events-none mix-blend-difference font-sans uppercase text-xs md:text-sm tracking-widest text-white/80"
      >
        Dave — 2026
      </motion.div>

      <section
        ref={containerRef}
        className="relative w-full h-screen flex flex-col bg-[#050505] text-[#FAFAFA] overflow-hidden mix-blend-screen"
      >
        <div className="absolute inset-0 grid grid-cols-4 border-l border-white/10 pointer-events-none">
          <div className="border-r border-white/10"></div>
          <div className="border-r border-white/10"></div>
          <div className="border-r border-white/10"></div>
          <div></div>
        </div>

        {/* HEADER BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full border-b border-white/10 z-30 pointer-events-auto text-xs md:text-sm font-sans uppercase tracking-widest bg-[#050505]/80 backdrop-blur-sm relative h-[72px]">
          <div className="p-4 md:p-6 border-r border-white/10 flex items-center md:col-span-1">
            {/* Empty space for the sticky text to live when at top */}
          </div>
          
          <a 
            href="/David_Okpe_Software_Developer.pdf"
            download
            className="hidden md:flex p-4 md:p-6 border-r border-white/10 col-span-2 items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
          >
            <span className="flex items-center gap-2 font-bold">
              ↓ DOWNLOAD RÉSUMÉ .PDF
            </span>
          </a>
          
          <div className="p-4 md:p-6 flex justify-end items-center md:col-span-1">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Available for work
            </span>
          </div>
        </div>

        {/* KINETIC ELEMENTS */}
        {kineticElements.map((el) => {
          return (
            <motion.div
              key={el.id}
              className="absolute z-40 flex items-center justify-center pointer-events-auto"
              style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
              animate={{
                x: cursorPos.x * 1.5 + el.offset.x,
                y: cursorPos.y * 1.5 + el.offset.y,
                rotate: (cursorPos.x + cursorPos.y) * 0.05,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <Skill src={el.src} name={el.name} />
            </motion.div>
          );
        })}

        {/* PORTRAIT CONTAINER */}
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-10 pointer-events-none"
          style={{ left: "50%", top: "40%", transform: "translate(-50%, -50%)" }}
          animate={{
            x: cursorPos.x,
            y: cursorPos.y,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="relative w-full h-full rounded-full border border-white/20 overflow-hidden group bg-[#050505]">
            <Image
              src="/dave-portrait.png" 
              alt="Dave Portrait"
              fill
              unoptimized
              priority
              className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500 grayscale"
            />
            <div className="absolute inset-0 mix-blend-overlay bg-black/20 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* HERO TEXT */}
        <div className="flex-1 flex flex-col justify-center p-6 z-30 relative overflow-hidden pointer-events-none">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display uppercase text-[15vw] leading-[0.8] tracking-tighter mix-blend-difference"
            >
              NOT JUST
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display uppercase text-[15vw] leading-[0.8] tracking-tighter text-white/40 mix-blend-difference"
            >
              SIDE PROJECTS.
            </motion.h1>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[20vh] border-t border-white/10 z-30 pointer-events-auto bg-[#050505]">
          <div className="p-6 md:col-span-3 border-b md:border-b-0 md:border-r border-white/10 flex items-center">
            <p className="font-sans text-lg md:text-xl leading-relaxed max-w-2xl text-white/70">
              Building software that actually scales. Specializing in complex commerce, 
              multi-tenant architecture, and intuitive design. Currently battle-tested at JelloSite.
            </p>
          </div>

          <motion.div
            className="p-6 flex items-center justify-center group cursor-pointer hover:bg-white hover:text-black transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-display uppercase text-2xl tracking-wide">
              Available →
            </span>
          </motion.div>
        </div>
      </section>
    </>
  );
}