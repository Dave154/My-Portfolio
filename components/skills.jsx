import React from 'react'
import Skill from './skill'

const Skills = () => {
  return (
    <section id='My skills' className=''>
        <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-center">Proficient in a Wide Range of <br /> <span className=" border-gradient ">Technologies and Tools</span> </h2>
        <ul className="grid grid-cols-4 md:grid-cols-6">
            <Skill />
        </ul>
        </div>
    </section>
  )
}

export default Skills