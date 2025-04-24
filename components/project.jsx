import { Link2 } from 'lucide-react'
import Image from 'next/image'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import Modal from './modal'
import { useState } from 'react'

const Project = ({project}) => {
    const {image,title,desc,link,tools}=project
    const [showModal, setShowModal] = useState(false)
  return (
    <article className='relative group'>
        <div className="absolute opacity-0 z-10 transition-opacity duration-1000 group-hover:opacity-100 top-1 left-1/2 -translate-x-1/2 flex flex-col items-center ">
       {
        link && (
            <div className="rounded-full  shadow-sm shadow-gray-100/30  py-1 px-2 text-xs bg-lightblue text_up relative top-20 z-20">{link}</div> 
       )
    }
    </div>
<div onClick={()=>setShowModal(true)} className=' backdrop-blur-2xl border  relative border-gray-600/80 rounded-xl p-5 grid gap-4 fallback cursor-pointer'>
        <div className="bg-background relative rounded-xl border border-gray-800/90 overflow-hidden">
    
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
                <p className="text-sm md:text-base text-roboto line-clamp-2">{desc}</p>
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
        
    </div>

    {
            showModal && (
                <Modal showModal={showModal} setShowModal={setShowModal}>
                   <Image src={project.image} alt={project.title} width={100} height={100} className='w-full h-64' />
                   <div className='flex flex-col gap-3'>
                   <h2>{project.title}</h2>
                   <p className='text-sm flex-1'>{project.desc}</p>
                   <div className='flex justify-between gap-3'>
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
                {
                    link && (   
                        <Link href={link} className="flex items-center gap-3" >
                    <p>Live Link</p>
                    <Link2 className='text-lightblue' size={15}/>
                    </Link>
                    )
                }
                   
                    </div>
                   </div>
        </Modal>
            )
        }
    </article>
  )
}

export default Project