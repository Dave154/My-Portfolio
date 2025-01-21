'use client'
import {motion} from 'framer-motion'
const Title = () => {
  return (
    <motion.h1 
    initial={{ opacity: 0,}}
    animate={{ opacity: 1,  }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="font-extrabold text-3xl md:text-5xl lg:text-6xl md:font-roboto">Your Ideas, My Code, <br /> Let's Create <span className="border-gradient text-transparent bg-clip-text ">Something Extraordinary</span> </motion.h1>
  )
}

export default Title