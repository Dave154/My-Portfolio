"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const darllixFeatures = [
  {
    id: 1,
    title: "THE VENDOR DASHBOARD",
    description: "Centralized command center. Seamlessly manage inventory, track buyer details, and transition order states in real-time.",
    image: "/darllixdashboard.png",
  },
  {
    id: 2,
    title: "ALGORITHMIC DISCOVERY",
    description: "An opt-in, TikTok-style vertical video feed driving organic cross-pollination and vendor discovery across the platform.",
    image: "/iPhone-13-PRO-localhost.png",
  },
  {
    id: 3,
    title: "MULTI-TENANT STOREFRONTS",
    description: "Frictionless onboarding with dynamic routing. Vendors instantly provision secure, standalone storefront URLs.",
    image: "/iPhone-13-PRO-kovan.darllix.shop.png",
  },
  {
    id: 4,
    title: "SEAMLESS CHECKOUT",
    description: "A frictionless, multi-step payment pipeline with secure integration. Buyers can browse, add to cart, and process transactions without ever being forced to create an account.",
    image: "/iPhone-13-PRO-kovan.darllix.shop (2).png", 
  }
];

const StackCard = ({ feature, index, totalCards, progress }) => {
  // Calculate when THIS specific card reaches the top of the screen
  const startProgress = index / totalCards;

  // The card scales down slightly ONLY after it hits the top, creating the physical stack
  const scale = useTransform(progress, [startProgress, 1], [1, 0.92]);

  return (
    <div className="h-screen w-full flex items-center justify-center sticky top-0 p-4 md:p-8">
      <motion.div 
        style={{ scale }}
        className="w-full max-w-6xl h-full max-h-[85vh] md:max-h-[80vh] bg-[#050505] rounded-3xl border border-white/10 overflow-hidden relative grid grid-cols-1 md:grid-cols-2 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.8)]"
      >
        {/* TEXT SIDE */}
        <div className="p-8 md:p-12 flex flex-col justify-between z-10 relative">
          <div className="text-white/40 font-mono text-sm tracking-widest">
            0{index + 1} / 0{totalCards}
          </div>
          
          <div>
            <h3 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-6">
              {feature.title}
            </h3>
            <p className="font-sans text-lg md:text-xl text-white/70 max-w-md">
              {feature.description}
            </p>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative h-full w-full min-h-[40vh] md:min-h-full bg-black/50 flex items-center justify-center overflow-hidden">
          {/* Subtle glow behind the phone */}
          <div className="absolute w-[80%] h-[80%] bg-white/5 blur-[100px] rounded-full" />
          
          <div className="relative w-[90%] md:w-[90%] aspect-[1/2] rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              unoptimized
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ProjectDarllix() {
  const containerRef = useRef(null);
  
  // Track the overall scroll progress of the entire Darllix section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="bg-[#050505] text-[#FAFAFA] border-t border-white/10">
      
      {/* Intro Header */}
      <div className="w-full min-h-[40vh] flex flex-col items-center justify-center text-center p-6 border-b border-white/10">
        <h2 className="font-display uppercase text-7xl md:text-9xl tracking-tighter leading-[0.8]">
          DARLLIX.
        </h2>
        <p className="font-sans text-xl text-white/50 max-w-2xl mt-6">
          A multi-tenant e-commerce ecosystem blending standalone storefronts with an algorithmic discovery marketplace.
        </p>

        <div className="md:col-span-2 mt-8">
                          <a 
                            href={"https://darllix.shop"} 
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
      </div>

      {/* The Sticky Scroll Container */}
      <div ref={containerRef} className="relative w-full">
        {darllixFeatures.map((feature, index) => {
          // Math to calculate when each specific card should start shrinking
          const targetScale = 1 - ((darllixFeatures.length - index) * 0.05);
          
          return (
            <StackCard 
              key={feature.id} 
              feature={feature} 
              index={index} 
              totalCards={darllixFeatures.length}
              progress={scrollYProgress} // In a more complex setup, you'd map this specific card's bounds
            />
          );
        })}
      </div>

    </section>
  );
}