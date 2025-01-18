import React from 'react'
import Skill from './skill'

const Skills = () => {

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
            src:'/js.png',
            name:'Tailwind'
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
            src:'/js.png',
            name:'NPM'
        },
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
            src:'/js.png',
            name:'NPM'
        },
    ]
  return (
    <section id='My skills' className=''>
        <div className="flex flex-col items-center gap-6 px-3">
        <h2 className="text-3xl font-bold text-center">Proficient in a Wide Range of <br /> <span className=" text-lightblue ">Technologies and Tools</span> </h2>
        <ul className="h-full flex flex-wrap max-w-5xl bg-black-100 mx-auto py-5 px-5 rounded-lg w-full items-center justify-center ">
            {
                sndc.map((skill,index)=>{
                    const {name,src}=skill
                    return <Skill key={name+index} src={src} name={name} />
                })
            }
        </ul>
        </div>
    </section>
  )
}

export default Skills