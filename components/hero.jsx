import { LucideFileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className='min-h-screen  bg-grid1 bg-cover bg-center '>
        <div className="text-center flex flex-col justify-center items-center gap-5 ">
            <Link href='https://github.com/Dave154/' className="flex space-x-4 items-center"> 
                <Image
                    src={'/github.png'}
                    alt='github'
                    width={20}
                    height={20}
                />    
                <span className="font-roboto ">My Github Profile</span>
             </Link>
             <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl md:font-roboto">Your Ideas, My Code, <br /> Let's Create <span className="text-lightblue">Something Extraordinary</span> </h1>
             <p className="text-lg text-semibold ">Hello, I’m David Okpe, a Front-End Developer passionate about transforming ideas into elegant, <br /> user-centric web experiences.</p>
             <Button variant='outlined' className=' border-gradient p-[2px] rounded-xl animate-gradient-animation'>
                <Link href={'https://drive.google.com/uc?export=download&id=1KrDSzPHY-kh1TgoxqSSuaBcVt--SL6SD'} className="h-full w-full bg-background flex space-x-5 items-center rounded-xl px-5 py-2 animate-gradient-animation">
                <LucideFileText />
                <p className=""> Resume </p>
                </Link>
             </Button>
        </div>
        
    </section>
  )

}

export default Hero