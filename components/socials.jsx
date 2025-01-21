'use client';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Link2, Link2Off } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {motion} from 'framer-motion'
const Socials = () => {
    const socials= [
        {
            icon: '/linkedin.png',
            name:'Linkedin',
            link:'https://www.linkedin.com/in/david-okpe-a3686b297/'

        },
        {
            icon: '/twitter.png',
            name:'X formerly twitter',
            link:'https://x.com/dave_154______'

        },
        {
            icon: '/whatsapp.png',
            name:'whatsapp',
            link:''

        },
        {
            icon: '/github.svg' ,
            name:'Github',
            link:'https://github.com/Dave154/'

        },
        
    ]
  return (
    <motion.aside
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
    className='hidden md:inline fixed w-16 right-4 top-1/2 bg-blue-400/25 rounded-full z-50 py-4'>
        <ul className="flex flex-col h-full justify-between items-center py-3 gap-5">
            {
                socials.map((item,index)=>{
                    const {icon,name,link}=item
                    return  <TooltipProvider key={index} >
                    <Tooltip>
                        <TooltipTrigger className=" hover:text-blue-900 text-gray-100">
                            <Link href={link}>
                            <Image
                                src={icon}
                                alt={name}
                                width={30}
                                height={30}

                        />
                            </Link>
                        
                     </TooltipTrigger>
                        <TooltipContent className="rounded-full shadow-md" sideOffset={5}>
                        <p className="capitalize">{name}</p> 
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                })
            }
        </ul>
       

    </motion.aside>
  )
}

export default Socials