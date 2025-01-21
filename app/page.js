import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Reviews from "@/components/reviews";
import Skills from "@/components/skills";
import Socials from "@/components/socials";
import Image from "next/image";

export default function Home() {
  return (
   
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-white">
         <Hero/> 
         <About/>
         <Projects/>
         <Skills/>
         <Socials/>
         <Reviews/>
         <Contact />
         <Footer />
       </main>
   
  );
}
