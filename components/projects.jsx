'use client';
import Project from './project'
import GradientButton from './gradientbutton'
import { ArrowDownCircleIcon, Link2 } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Modal from './modal';
import Image from 'next/image';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const boxVariants = {
  hidden: { opacity: 0, y: 100 ,x:20},
  visible: { opacity: 1, y: 0,x:0, transition: { duration: 0.5 } },
};

const Projects = () => {

    const projects= [
        {
            image:'/claycave.png',
            title:'Claycave',
            desc:'Fintech webapp and mobile app',
            link:'',
            tools:[
                {
                    name:'/',
                    image:'/react.png',
                },

                {
                    name:'/gsap.png',
                    image:'/gsap.png',
                },
            ]

        },
        {
            image:'/navigo.png',
            title:'Navigo',
            desc:'Landing Page for a Crypto Payment Solution designed to introduce and showcase a seamless crypto transaction platform.',
            link:'https://navigo-eight.vercel.app/',
            tools:[
                {
                    name:'/',
                    image:'/react.png',
                },

                {
                    name:'/gsap.png',
                    image:'/gsap.png',
                },
            ]

        },

        {
            image:'/trovemart.png',
            title:'Trovemart',
            desc:'A customer self-service shopping app for supermarkets, built with React and Firebase, featuring QR-based order verification and user management tools.',
            link:'https://trovemart.vercel.app',
            tools:[
                {
                    name:'React',
                    image:'/react.png',
                },
                {
                    name:'Redux',
                    image:'/redux.png',
                },
                {
                    name:'Firebase',
                    image:'/firebase.svg',
                },
                {
                    name:'Material',
                    image:'/material.svg',
                },
            ]

        },
       
        {
            image:'/claripdf.png',
            title:'Claripdf',
            desc:'Claripdf is a web-based application designed to convert image-based PDFs or images into editable and searchable documents. By leveraging Optical Character Recognition (OCR) and AI-powered text refinement, Claripdf provides users with a seamless workflow to upload, edit, and export their documents in multiple formats.',
            link:'https://claripdf.vercel.app/',
            tools:[
                {
                    name:'',
                    image:'/react.png',
                },
                {
                    name:'',
                    image:'/tailwind.png',
                },
                {
                    name:'',
                    image:'/shadcn.png',
                },
            ]

        },
        {
            image:'/gamaliel.png',
            title:'Gamaliel Consult',
            desc:'Gamaliel Consult is a professional consulting platform built with Vue.js and Tailwind CSS, featuring both a public-facing landing page and a secure, role-based dashboard for internal operations. The landing page introduces the firm’s services with a clean, responsive design, while the dashboard allows staff and admins to manage clients, appointments, and analytics efficiently. The app combines sleek UI with seamless navigation, enhancing both user experience and operational workflow.',
            link:'',
            tools:[
                {
                    name:'',
                    image:'/vue.png',
                },
                {
                    name:'',
                    image:'/tailwind.png',
                },
               
            ]

        }
    ]


 
    const [allProjects,setAllProjects]= useState(false)
    const controls = useAnimation();
    const ref = useRef(null); 
    const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' }); 
    
    useEffect(() => {
        console.log(isInView)
      if (isInView) {
        controls.start('visible');
      }
    }, [isInView, controls]);
  return (
    <section id={'projects'} className='section p-5 flex justify-center items-center overflow overflow-hidden'>
        <div className="flex items-center flex-col w-full gap-4">
            <motion.div
             ref={ref}
             variants={containerVariants}
            initial="hidden"
            animate={controls} 
            className="grid md:grid-cols-2 gap-5 w-full max-w-7xl" >
                {
                    projects.slice(0,2).map((project,index)=>{
                        return  <motion.div 
                        variants={boxVariants}
                        className=""  key={index}>
                            <Project project={project}/>
                        </motion.div> 
                    })
                }
                {
                    allProjects && projects.slice(2,projects.length).map((project,index)=>{
                        return  <div 
                        className=""  key={index}>
                            <Project project={project}/>
                        </div> 
                    })
                }
                
        </motion.div>
        <motion.div className=""
            variants={boxVariants}
        >

            <div className="" onClick={()=>setAllProjects(!allProjects)}>
                <GradientButton 
                 text={allProjects ? 'View less' : 'View all'}
                 icon={<ArrowDownCircleIcon/>}
                 />
            </div>
       
         </motion.div>
        </div>
      
    </section>
  )
}

export default Projects