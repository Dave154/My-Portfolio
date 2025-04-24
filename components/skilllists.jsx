'use client';

import Skill from "./skill";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
const Skilllists = () => {
    const sndc=[
        {
            src:'/js.png',
            name:'Javascript'
        },
        {
            src:'/react.png',
            name:'React'
        },
        {
            src:'/typescript.png',
            name:'Typescript'
        },
        {
            src:'/next.jpg',
            name:'Next.js'
        },
        {
            src:'/vue.png',
            name:'Vue'
        },
        {
            src:'/scss.svg',
            name:'Scss'
        },
        {
            src:'/git.png',
            name:'Git'
        },
        {
            src:'/github.png',
            name:'Github'
        },
        
        {
            src:'/shadcn.png',
            name:'Shadcn'
        },
        {
            src:'/tailwind.png',
            name:'Tailwind'
        },
        {
            src:'/redux.png',
            name:'Redux'
        },
        {
            src:'npm.svg',
            name:'NPM'
        },
        {
            src:'/figma.svg',
            name:'Figma'
        },
        {
            src:'Vite.svg',
            name:'Vite'
        },
        {
            src:'/vercel.svg',
            name:'Typescript'
        },
        {
            src:'/postman.svg',
            name:''
        },
       
        {
            src:'/material.svg',
            name:'Tailwind'
        },
        {
            src:'/jest.svg',
            name:'Redux'
        },
        {
            src:'/firebase.svg',
            name:'Firebase'
        },
    ]

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
        hidden: { opacity: 0, y:100 ,x:10},
        visible: { opacity: 1, y:0,x:0, transition: { duration: 0.5 } },
      };


      const controls = useAnimation();
const ref = useRef(null); 
const isInView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' }); 

useEffect(() => {
  if (isInView) {
    controls.start('visible');
  }
}, [isInView, controls]);

  return (
        <motion.ul 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls} 
        className="h-full flex flex-wrap max-w-5xl bg-black-100 mx-auto py-5 px-5 rounded-lg w-full items-center justify-center ">
        {
            sndc.map((skill,index)=>{
                const {name,src}=skill
                    console.log(skill)
                return <motion.div key={name+index}
                    variants={boxVariants}
                className="">
                    <Skill  src={src} name={name} />
                </motion.div>
               
            })
        }
    </motion.ul>
  )
}

export default Skilllists