'use client';

import Image from "next/image"
import Copymail from "./copymail"
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const boxVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};



export default function AnimatedGrid() {
const controls = useAnimation();
const ref = useRef(null); 
const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' }); 

useEffect(() => {
    console.log(isInView)
  if (isInView) {
    controls.start('visible');
  }
}, [isInView, controls]);
  return (
      <motion.div
       ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls} 
        className=" flex flex-col md:grid gap-6 lg:grid-cols-10 ">
            <motion.div
             variants={boxVariants}
            className="about_box flex flex-col md:flex-row justify-center gap-10 items-center col-span-6 row-span-6 relative">
              <div className="rounded-xl overflow-hidden w-1/2 h-64">
              <Image
                src={'/me.jpg'}
                alt='About me'
                width={256}
                height={256}
                className="object-contain shadow-xl shadow-slate-900"
              />
              
              </div>
              
              
              <p className="md:text-right text-center md:max-w-72 f
              ">
                Hi, I’m David Okpe, a passionate Full-Stack Developer from Nigeria. With a strong foundation in Next.js, Tailwind CSS, and React, I specialize in creating seamless, high-performance, and visually appealing web applications.</p>
            </motion.div>
            <motion.div
             variants={boxVariants}
            
            className="about_box gap-3 flex justify-center flex-col items-center row-span-3 col-span-4 ">
                <Image 
                  src={'/about2.svg'}
                  alt={''}
                  width={150}
                  height={150}
                  className='w-full h-32'
                      />
           
              <p className="text-center">
              Over the years, I’ve built dynamic applications that solve real-world problems, including TroveMart, a self-service shopping platform, and Claripdf, a PDF text-extraction tool powered by AI. My work reflects my dedication to intuitive design, clean code, and delivering impactful user experiences.
              </p>
            </motion.div>
            <motion.div 
                variants={boxVariants}
               
            className="about_box flex justify-center flex-col items-center h-32 overflow-hidden col-span-4 row-span-3
            ">
              <Image
                src={'/about1.svg'}
                alt=''
                width={150}
                height={150}
                className="absolute -z-10 right-2 opacity-45"
              />
              <p className="text-gray-200">
              Beyond coding, I enjoy exploring new technologies, mentoring aspiring developers, and collaborating with forward-thinking teams to bring innovative ideas to life.
               </p>
            </motion.div>
            <motion.div 
                variants={boxVariants}
               
            className="about_box flex justify-center gap-4 items-center col-span-4 row-span-3 h-32">
              <Image
                src={'/analytics.svg'}
                alt=''
                width={150}
                height={150}
                className="w-16"
              />
              <p className=""></p>Let’s connect and build something scalable together!
            </motion.div>
            <motion.div 
            variants={boxVariants}
           
            className="about_box flex justify-center flex-col items-center row-span-6 col-span-6 ">
              <Image 
                src={'/about3.svg'}
                alt="test"
                width={100}
                height={100}
                className=" w-44 -z-10 object-cover"
              />
              <p className="">
              I’m always on the lookout for opportunities to grow, challenge myself, and contribute meaningfully to the tech community. When I’m not building apps, I enjoy writing and creating content that inspires and informs. 
              </p>
            </motion.div>
            <div className="about_box flex justify-center flex-col items-center  col-span-4 row-span-3
            ">
              <p className="font-bold font-roboto text-center text-xl">Want to Create Something Amazing? <br />
                  <span className="">Send me mail</span>
              </p>
              <Copymail />
              
            </div>
        </motion.div> 
  );
}
