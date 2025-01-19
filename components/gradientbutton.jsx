import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const GradientButton = ({text,link,icon}) => {
  return (
    <Button variant='outlined' className=' h-12 mt-6 border-gradient p-[2px] rounded-xl animate-gradient-animation'>
        <Link href={link} className="h-full cursor-pointer w-full bg-background flex space-x-5 items-center rounded-xl px-5  animate-gradient-animation">
        {icon}
        <p className=""> {text} </p>
        </Link>
    </Button>
  )
}

export default GradientButton