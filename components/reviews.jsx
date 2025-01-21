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
            name:'',
            image:'',
            text:'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amdet consectetur adipisicing elit. Ab doloremque vero illum exercitationem distinctio vel temporibus dignissimos iusto mollitia repudiandae!',
        },
        {
            name:'',
            image:'',
            text:'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amdet consectetur adipisicing elit. Ab doloremque vero illum exercitationem distinctio vel temporibus dignissimos iusto mollitia repudiandae!',
        },
        {
            name:'',
            image:'',
            text:'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amdet consectetur adipisicing elit. Ab doloremque vero illum exercitationem distinctio vel temporibus dignissimos iusto mollitia repudiandae!',
        },
        {
            name:'',
            image:'',
            text:'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amdet consectetur adipisicing elit. Ab doloremque vero illum exercitationem distinctio vel temporibus dignissimos iusto mollitia repudiandae!',
        },
        {
            name:'',
            image:'/figma.svg',
            text:'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amdet consectetur adipisicing elit. Ab doloremque vero illum exercitationem distinctio vel temporibus dignissimos iusto mollitia repudiandae!',
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
                3
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
                    <Avatar className="h-16 w-16 p-2 bg-blue-400/30">
                        <AvatarImage src={image} className='object-contain' />
                    </Avatar>
                    <p className="font-bold font-roboto text-right">Kelly.O</p>
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