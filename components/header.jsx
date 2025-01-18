import { BrainCircuit, Code2, Contact2Icon, Grid2X2, Home } from 'lucide-react'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

const Header = () => {


    const nav = [
        {
            icon: <Home /> ,
            text: 'about'
        },
        {
            icon: <Code2 /> ,
            text: 'projects'
        },
        {
            icon: <BrainCircuit /> ,
            text: 'My skills'
        },
        {
            icon: <Contact2Icon />,
            text: 'Contact'
        }
    ]

  return (
    <header className='fixed w-full  p-2 top-0 z-50'>
        <Link href='/' className="absolute hidden md:flex flex-col w-12 h-32 p-2 items-center justify-between bg-blue-400/70 rotate-120 z-50  rounded-full">
            {['D','A',"v",'e'].map(item=>{
                return <span className='uppercase font-extrabold '>{item}</span>
            })}
        </Link>

        <nav className="max-w-md relative rounded-full border border-gray-300/50 py-3 px-8 mx-auto mt-5 backdrop-blur-xl flex justify-between items-center 
        after:content-[''] after:absolute after:-bottom-[1px] after:left-6 after:border-gradient after:w-36 after:h-[1px]">
            {
                nav.map((item,i)=>{
                   const {icon,text}=item
                    return <Link key={text + i} href={'#'+text} className='text-white capitalize text-xs'>
                            <p className="hidden sm:inline ">{text}</p>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger> <i className="sm:hidden inline">{icon}</i></TooltipTrigger>
                                    <TooltipContent className="rounded-full shadow-md" sideOffset={5}>
                                   <p className="capitalize">{text}</p> 
                                    </TooltipContent>
                                </Tooltip>
                                </TooltipProvider>



                           
                    </Link>
                })
            }
        </nav>
    </header>
  )
}

export default Header