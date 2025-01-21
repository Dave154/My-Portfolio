'use client';
import Project from './project'
import GradientButton from './gradientbutton'
import { ArrowDownCircleIcon } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
            image:'/navigo.png',
            title:'Navigo',
            desc:'This is a test description for styling purposes, Remember to gget original text contents before finale deployment',
            link:'',
            tools:[
                {
                    name:'',
                    image:'',
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
                    image:'/redux.png',
                },
            ]

        },
        {
            image:'/walmart.png',
            title:'Walmart Clone',
            desc:'',
            link:'',
            tools:[
                {
                    name:'',
                    image:'',
                },
            ]

        },
        {
            image:'/bg1.jpg',
            title:'This is a test Title',
            desc:'This is a test description for styling purposes, Remember to gget original text contents before finale deployment',
            link:'',
            tools:[
                {
                    name:'',
                    image:'',
                },
                {
                    name:'',
                    image:'',
                },
                {
                    name:'',
                    image:'',
                },
                {
                    name:'',
                    image:'',
                },
            ]

        },
    ]

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
                    projects.map((project,index)=>{
                        return  <motion.div 
                        variants={boxVariants}
                        className=""  key={index}>
                            <Project project={project}/>
                        </motion.div> 
                    })
                }
                
        </motion.div>
        <motion.div className=""
            variants={boxVariants}
        >

        <GradientButton 
         text='View all'
         link='/'
         icon={<ArrowDownCircleIcon/>}
         />
         </motion.div>
        </div>
    </section>
  )
}

export default Projects