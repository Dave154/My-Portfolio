import Image from 'next/image'
import React from 'react'

const Skill = ({src,name}) => {
  return (
    <div className='relative border-2 border-gray-300/50  rounded-full  h-16 w-16  grid place-content-center mr-10 my-5  group cursor-pointer hover:bg-gray-500/30'>
        <div className="oveflow-hidden">
        <Image
            src={src}
            alt={name}
            width={35}
            height={35}
        />
        </div>
        
        {/* <div className="absolute  -top-10 -left-1/2  rounded-xl p-2 bg-foreground">
           {name}
        </div> */}

    </div>
  )
}

export default Skill