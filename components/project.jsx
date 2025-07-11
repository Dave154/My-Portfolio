import { Link2 } from 'lucide-react'
import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

const Project = ({project}) => {
    const {image,title,desc,link,tools}=project
  return (
    <article className='relative group'>
        <div className="absolute opacity-0 z-10 transition-opacity duration-1000 group-hover:opacity-100 top-1 left-1/2 -translate-x-1/2 flex flex-col items-center ">
        <div className="rounded-full  shadow-sm shadow-gray-100/30  py-1 px-2 text-xs bg-lightblue text_up relative top-20 z-20">{link}</div> 
</div>
    <Link href={link} className='backdrop-blur-2xl border  relative border-gray-600/80 rounded-xl p-5 grid gap-4 fallback cursor-pointer'>
        <div className="bg-background relative rounded-xl border border-gray-800/90 overflow-hidden">
    
        <Image 
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className='w-full h-full'
        />
        </div>
        <div className="space-y-7">
            <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm md:text-base text-roboto line-clamp-1">{desc}</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                    {
                        tools?.map((item,index)=>{
                            const {image,name} = item
                            return <Avatar key={index} className="h-10 w-10 p-2 bg-background overflow-hidden">
                            <AvatarImage src={image} className='object-contain' />
                          </Avatar>
                          
                        })
                    }
                </div>
                <div  className="flex space-x-5 items-center">
                    <p className="text-sm">Live Link</p>
                    <Link2 className='text-lightblue' size={15}/>
                </div>
            </div>

        </div>
        
    </Link>
    
    </article>
  )
}

export default Project