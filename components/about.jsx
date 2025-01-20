import Image from "next/image"
import GradientButton from "./gradientbutton"
import { Copy } from "lucide-react"


const About = () => {
  return (
    <section className="p-5">
        <div className="grid gap-6 lg:grid-cols-10 ">
            <div className="about_box flex justify-center flex-col items-center col-span-6 row-span-6">
              <Image
                src={''}
                alt=''
                width={150}
                height={150}
                className=""
              />
              1
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel veritatis excepturi repellendus laudantium aut dolore sint debitis rem quis.</p>
            </div>
            <div className="about_box flex justify-center flex-col items-center row-span-3 col-span-4 ">
              <Image
                src={''}
                alt=''
                width={150}
                height={150}
                className=""
              />
              2
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel veritatis excepturi repellendus laudantium aut dolore sint debitis rem quis.</p>
            </div>
            <div className="about_box flex justify-center flex-col items-center h-32 overflow-hidden col-span-4 row-span-3
            ">
              <Image
                src={''}
                alt=''
                width={150}
                height={150}
                className=""
              />
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel veritatis excepturi repellendus laudantium aut dolore sint debitis rem quis.</p>
            </div>
            <div className="about_box flex justify-center flex-col items-center col-span-4 row-span-3 h-32">
              <Image
                src={''}
                alt=''
                width={150}
                height={150}
                className=""
              />
              1
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel veritatis excepturi repellendus laudantium aut dolore sint debitis rem quis.</p>
            </div>
            <div className="about_box flex justify-center flex-col items-center row-span-6 col-span-6 ">
              <Image
                src={''}
                alt=''
                width={150}
                height={150}
                className=""
              />

              2
              <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vel veritatis excepturi repellendus laudantium aut dolore sint debitis rem quis.</p>
            </div>
            <div className="about_box flex justify-center flex-col items-center  col-span-4 row-span-3
            ">
              <Image
                src={''}
                alt=''
                width={150}
                height={150}
                className=""
              />
              <GradientButton  
               text={'Copy Email'}
               link={''}
               icon={<Copy/>}
              />
            </div>
        </div>
    </section>
  )
}

export default About