import React from 'react'
import Project from './project'
import GradientButton from './gradientbutton'
import { ArrowDownCircleIcon } from 'lucide-react'

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

  return (
    <section className='p-5 flex justify-center items-center overflow overflow-hidden'>
        <div className="flex items-center flex-col w-full gap-4">
            <div className="grid md:grid-cols-2 gap-5 w-full max-w-7xl" >
                {
                    projects.map((project,index)=>{
                        return <Project project={project} key={index}/>
                    })
                }
                
        </div>
        <GradientButton 
         text='View all'
         link='/'
         icon={<ArrowDownCircleIcon/>}
        />
        </div>
    </section>
  )
}

export default Projects