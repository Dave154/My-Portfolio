import { Link2 } from 'lucide-react'
import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

const Project = ({project}) => {
    const {image,title,desc,link,tools}=project
  return (
    <div className=' backdrop-blur-2xl border group relative border-gray-600/80 rounded-xl p-5 grid gap-4 fallback cursor-pointer'>
            
        <div className="bg-background relative rounded-xl border border-gray-800/90 overflow-hidden">
        <div className="absolute opacity-0 transition-opacity duration-1000 group-hover:opacity-100 bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center ">

            <div className="rounded-full  shadow-sm shadow-gray-100/30  py-1 px-2 text-xs bg-lightblue text_up relative top-20 z-20">http://navigo-eight.vercel.app/</div>
            <div className="w-1 h-40 bg-lightblue shadow-2xl shadow-white filter blur-sm line_up relative top-7 z-10"></div>
            <div className="w-12 h-12 rounded-full bg-green-700/70 grid place-items-center circle_down filter blur-sm">
            <div className="w-8 h-8 rounded-full bg-green-500/70 grid place-items-center ">
            <div className="w-4 h-4 rounded-full bg-green-300 grid place-items-center"></div>

        </div>

</div>
</div>
        <Image 
            src={image}
            alt={title}
            width={150}
            height={150}
            className='w-full h-64'
        />
        </div>
        <div className="space-y-7">
            <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm md:text-base text-roboto ">{desc}...</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                    {
                        tools?.map((item,index)=>{
                            return <Avatar key={index} className="h-8 w-8 p-2 bg-background">
                            <AvatarImage src={'/redux.png'} className='object-contain' />
                          </Avatar>
                          
                        })
                    }
                </div>
                <Link href={link} className="flex space-x-5 items-center">
                    <p className="text-sm">Live Link</p>
                    <Link2 className='text-lightblue' size={15}/>
                </Link>
            </div>

        </div>
        
    </div>
  )
}

export default Project