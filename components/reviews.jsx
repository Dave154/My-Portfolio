'use client';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Quote } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
const Reviews = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
      setIsClient(true);
    }, []);
    const reviews =[
        
        {
            name:'Daniel, Claripdf',
            image:'',
            text:`David is an exceptional developer who combines technical expertise with creative problem-solving. His ability to deliver functional and visually stunning applications like TroveMart and Claripdf is truly impressive. Working with him was a seamless experience, and his commitment to quality is unmatched!`,
        },
        {
            name:'Olawale.V',
            image:'',
            text:`David's portfolio reflects his versatility and expertise in modern web development technologies like Next.js and Tailwind CSS. The projects he highlights are not just impressive but also impactful. It’s clear that he prioritizes performance, user experience, and functionality in everything he builds.`,
        },
        {
            name:'Samuel Akintola',
            image:'',
            text:`This portfolio is a masterclass in design and functionality. David has done a fantastic job showcasing his skills, projects, and experience. The dark mode toggle and animations add a modern flair, while the content speaks volumes about his dedication to excellence in web development. A great inspiration for anyone in the tech field!`,
        },
        {
            name:'',
            image:'',
            text:`David's portfolio is as impressive as the work he creates. The sleek, minimalist design and smooth animations provide a glimpse into his professionalism and creativity. His projects demonstrate a deep understanding of both frontend and backend development, making him a well-rounded developer anyone would be lucky to work with.`,
        },
    ]

    if (!isClient) return null;
  return (
    <section className='section min-h-96 pb-32'>  
        <div className="w-full">
            <h2 className="font-bold text-4xl text-center p-5 mb-8">Testimonials from <br /> <span className="text-purple"> Happy Clients</span></h2>
            
            <div className="w-full">
            <Swiper 
            className=''
             modules={[Autoplay]}
            slidesPerView={
                window.innerWidth > 1024 ? 3: 1.2
            } 
            spaceBetween={50}
            speed={7000}
            loop={true} 
            autoplay={{
                delay: 0, 
                disableOnInteraction: true, 
            }}
            
      >
          {
            reviews.map((review,index)=>{
                const {name,text,image}= review
                return <SwiperSlide key={index} className='border backdrop-blur-xl rounded-xl border-blue-700/30 p-3'>
                    <p className="text-xs leading-6">
                      <Quote />  {text}
                    </p>
                    <div className="flex justify-between items-end mt-6">
                    <Avatar className="h-16 w-16 p-2 ">
                        <AvatarImage src={image} className='object-contain' />
                    </Avatar>
                    <p className="font-bold font-roboto text-right">{name}</p>
                     </div>
                </SwiperSlide>
             
            })
          }
            
            </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Reviews