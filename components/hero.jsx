import { LucideFileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import GradientButton from './gradientbutton'

const Hero = () => {
  return (
    <section className='min-h-screen bg-grid1 bg-cover bg-center relative bottom_top'>
        <div className="text-center flex flex-col justify-center items-center gap-5 backdrop-blur-sm h-full w-full px-3 ">
            <Link href='https://github.com/Dave154/' className="flex space-x-4 items-center mb-6"> 
                <Image
                    src={'/github.png'}
                    alt='github'
                    width={20}
                    height={20}
                />    
                <span className="font-roboto">My Github Profile</span>
             </Link>
             <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl md:font-roboto">Your Ideas, My Code, <br /> Let's Create <span className="text-lightblue">Something Extraordinary</span> </h1>
             <p className="text-xs md:text-lg text-semibold ">Hello, I’m David Okpe, a Front-End Developer passionate about transforming ideas into elegant, <br /> user-centric web experiences.</p>      
                <GradientButton 
                text='Resume' 
                icon={<LucideFileText />} 
                link='https://drive.google.com/uc?export=download&id=1KrDSzPHY-kh1TgoxqSSuaBcVt--SL6SD' />
        </div>
        
    </section>
  )

}

export default Hero