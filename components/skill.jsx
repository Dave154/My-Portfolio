 "use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Skill = ({ src, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
    className="relative flex items-center justify-center h-16 w-16 rounded-full border border-white/10 bg-white/5 cursor-pointer group transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 w-[30px] h-[30px] opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Image
          src={src}
          alt={name}
          width={60}
          height={60}
          className="object-contain transition-all duration-300"
        />
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute -top-14 flex flex-col items-center pointer-events-none z-50"
          >
            <div className="bg-white text-black px-3 py-1.5 text-xs font-mono uppercase tracking-widest whitespace-nowrap shadow-xl">
              {name}
            </div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Skill;