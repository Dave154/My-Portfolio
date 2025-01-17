import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
   
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-white">
         <Hero/> 
         <Skills/>
       </main>
   
  );
}
