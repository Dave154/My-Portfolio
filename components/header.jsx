import { BrainCircuit, Contact2Icon, Grid2X2, Home } from 'lucide-react'
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
            icon: <Grid2X2 /> ,
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
    <header className='fixed w-full  p-2'>
        <nav className="max-w-md relative rounded-full border py-3 px-8 mx-auto mt-5 backdrop-blur-xl flex justify-between items-center 
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