import React from 'react'
import GradientButton from './gradientbutton'
import { MessageSquareTextIcon,  } from 'lucide-react'

const Contact = () => {
  const recipient = "okpedavid0@gmail.com";
    const subject = " Message to David O";
    const body = `
      Hi,

      Here is the forwarded message:

      --- Forwarded Message ---
      Subject: Original Subject
      Date: Original Date
      From: Original Sender
      To: Original Recipient

      Message content here.
    `.trim();
  return (
        <section className=" section flex flex-col justify-end min-h-20 p-3" id='Contact'>
            <div className="text-center space-y-10">
                <h2 className="text-4xl font-bold">Ready to take <span className="text-purple">your</span>  digital <br />  presence to the next level?</h2>
                <p className=""> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <GradientButton 
                text={`Let's get in touch`}
                icon={<MessageSquareTextIcon />} 
                link={`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} />
            </div>
        </section>
  )
}

export default Contact