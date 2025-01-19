import React from 'react'
import GradientButton from './gradientbutton'
import { MessageSquareTextIcon,  } from 'lucide-react'

const Contact = () => {
  return (
        <section className="flex flex-col justify-end min-h-20 p-3" id='Contact'>
            <div className="text-center space-y-10">
                <h2 className="text-4xl font-bold">Ready to take <span className="text-purple">your</span>  digital <br />  presence to the next level?</h2>
                <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <GradientButton 
                text={`Let's get in touch` }
                icon={<MessageSquareTextIcon />} 
                link='https://drive.google.com/uc?export=download&id=1KrDSzPHY-kh1TgoxqSSuaBcVt--SL6SD' />
            </div>
        </section>
  )
}

export default Contact