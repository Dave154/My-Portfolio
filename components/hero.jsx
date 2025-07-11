import { LucideFileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import GradientButton from './gradientbutton'
import Title from './title'

const Hero = () => {
  return (
    <section className='section h-screen bg-grid1 bg-cover bg-center relative bottom_top_gradient overflow-visible blurred blurred_blue' >

        <div className="text-center flex flex-col justify-center items-center gap-5 backdrop-blur-sm h-full w-full px-3 relative">
            <Link href='https://github.com/Dave154/' className="flex space-x-4 items-center mb-6"> 
                <Image
                    src={'/github.png'}
                    alt='github'
                    width={20}
                    height={20}
                />    
                <span className="font-roboto">My Github Profile</span>
             </Link>
              <Title />
             <p className="text-xs md:text-lg text-semibold ">Hello, I’m David Okpe, a Front-End Developer passionate about transforming ideas into elegant, <br /> user-centric web experiences.</p>      
                <GradientButton 
                text='Resume' 
                icon={<LucideFileText />} 
                link='https://drive.google.com/uc?export=download&id=13fiqHR7M3mTQ20Wi14OU21IuVXx4zj-9' />
        </div>
        
    </section>
  )

}

export default Hero