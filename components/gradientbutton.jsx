import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const GradientButton = ({text,link,icon}) => {
  return (
    <Button variant='outlined' className='cursor-pointer h-12 mt-6 border-gradient p-[2px] rounded-xl '>
        {
          link? <Link href={link} className="h-full  w-full bg-background flex space-x-5 items-center rounded-xl px-5">
          {icon}
          <p className="cursor-pointer"> {text} </p>
          </Link>:
           <div  className="h-full  w-full bg-background flex space-x-5 items-center rounded-xl px-5">
           {icon}
           <p className="cursor-pointer"> {text} </p>
           </div>
        }
       
    </Button>
  )
}

export default GradientButton