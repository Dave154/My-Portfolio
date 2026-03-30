"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const email = "okpedavid0@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-[#050505] text-[#FAFAFA] border-t border-white/10 flex flex-col overflow-hidden pt-12 md:pt-24">
      
      {/* THE HOOK */}
      <div className="px-6 md:px-12 flex flex-col items-center justify-center text-center mb-16 md:mb-24 space-y-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm md:text-base uppercase tracking-widest text-white/50 mb-6"
        >
          System Capacity: <span className="text-white/70 underline underline-offset-8">Available for new builds</span>
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display uppercase text-[9vw] md:text-[8vw] leading-[0.85] tracking-tighter p-8"
        >
          LET'S ENGINEER
          <br className="hidden md:block" />
          <span className="text-white/30 italic pr-4">SOMETHING</span> REAL.
        </motion.h2>
      </div>

      {/* THE CONTACT STRIP */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-b border-white/10">
        
        {/* Click to Copy Email */}
        <div 
          onClick={handleCopy}
          className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 flex flex-col items-center justify-center cursor-pointer group hover:bg-white transition-colors duration-300"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-black/40 mb-4 transition-colors">
            {copied ? "Copied to clipboard!" : "Click to copy email"}
          </span>
          <span className="font-display text-3xl md:text-5xl tracking-tighter group-hover:text-black transition-colors">
            {email}
          </span>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full border-t md:border-t-0 border-white/10">
          {[
            { name: "GitHub", url: "https://github.com/Dave154" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/david-okpe-a3686b297" },
            { name: "Twitter/X", url: "https://x.com/dave_154______" },
            // { name: "Fiverr", url: "#" }
          ].map((link, i) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 flex items-center justify-center border-b sm:border-b-0 border-white/10 hover:bg-white/5 transition-colors duration-300
                ${i % 2 === 0 ? 'border-r sm:border-r' : 'sm:border-r'}
              `}
            >
              <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">
                {link.name}
              </span>
            </a>
          ))}
          
          <a 
            href="/David_Okpe_Software_Developer.pdf" 
            download 
            className="col-span-2 sm:col-span-1 p-6 flex items-center justify-center bg-white text-black hover:bg-white/80 transition-colors duration-300 group"
          >
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest font-bold flex items-center gap-2">
              ↓ Get CV
            </span>
          </a>
        </div>
      </div>

      {/* THE COPYRIGHT / SIGNATURE */}
      <div className="p-6 flex flex-col md:flex-row items-center justify-between font-mono text-xs uppercase tracking-widest text-white/30">
        <div>
          © {new Date().getFullYear()} DAVE. ALL RIGHTS RESERVED.
        </div>
        <div className="mt-4 md:mt-0">
          BUILT WITH NEXT.JS & MECHANICAL PRECISION.
        </div>
      </div>

    </footer>
  );
}