import React from 'react'
import Skill from './skill'
import Skilllists from './skilllists'

const Skills = () => {


  return (
    <section id='My skills' className='section '>
        <div className="flex flex-col items-center gap-6 px-3">
        <h2 className="text-3xl font-bold text-center">Proficient in a Wide Range of <br /> <span className=" text-lightblue ">Technologies and Tools</span> </h2>
          <Skilllists />
        </div>
    </section>
  )
}

export default Skills