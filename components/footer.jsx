import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear()

    const socials = [
       {
         src:'/whatsapp.png',
         name:'Whatsapp',
         link:'https://wa.link/sbt7wu'
       },
       {
         src:'/x.png',
         name:'X',
         link:'https://x.com/dave_154______'
       },
       {
         src:'/github.png',
         name:'Github',
         link:'https://github.com/Dave154/',
       },
       {
        src: '/linkedin.png',
        name:'Linkedin',
        link:'https://www.linkedin.com/in/david-okpe-a3686b297/'

    },
    ]

  return (
    <footer className='p-3 w-full flex justify-center'>
        <div className="flex flex-col justify-center w-full max-w-6xl md:flex-row md:justify-between gap-4  items-center">
            <p className="text-sm">Made by {`Dave />`} {year} </p>

            <div className="flex gap-4">
                {socials.map((item,index)=>{
                    const {src,name,link }= item
                    return <Link href={link} key={src + index} className="border border-gray-400/40 h-10 w-10 rounded-xl grid place-content-center">
                        <Image
                            src={src}
                            alt={name}
                            width={30}
                            height={30}
                        />
                    </Link>
                })}
            </div>
        </div>
    </footer>
  )
}

export default Footer