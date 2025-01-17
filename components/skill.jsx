import Image from 'next/image'
import React from 'react'

const Skill = ({src}) => {
  return (
    <div className='relative border-2 rounded-full  h-14 w-14 grid place-content-center'>
        <div className="oveflow-hidden">
        <Image
            src={'/typescript.png'}
            alt='typesct'
            width={30}
            height={30}
        />
        </div>
        
        <div className="absolute  -top-10 -left-1/2  rounded-xl p-2 bg-foreground ">
            Typescript
        </div>
    </div>
  )
}

export default Skill