import Image from 'next/image'
import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear()

    const socials = [
       {
         src:'/whatsapp.png',
         name:'Whatsapp'
       },
       {
         src:'/whatsapp.png',
         name:'Whatsapp'
       },
       {
         src:'/whatsapp.png',
         name:'Whatsapp'
       },
    ]

  return (
    <footer className='p-3 w-full flex justify-center'>
        <div className="flex flex-col justify-center w-full max-w-3xl md:flex-row md:justify-between gap-4  items-center">
            <p className="">Made by {`Dave/>`} {year} </p>

            <div className="flex gap-4">
                {socials.map((item,index)=>{
                    const {src,name }= item
                    return <div key={src + index} className="border border-gray-400/40 h-10 w-10 rounded-xl grid place-content-center">
                        <Image
                            src={src}
                            alt={name}
                            width={30}
                            height={30}
                        />
                    </div>
                })}
            </div>
        </div>
    </footer>
  )
}

export default Footer