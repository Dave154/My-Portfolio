import Hero from "@/components/hero";
import ProjectDarllix from "@/components/project-darllix";
import ProjectIndex from "@/components/project-index";
import ExperienceStack from "@/components/experience-stack";
import ContactFooter from "@/components/contact-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <ProjectDarllix />
      <ProjectIndex />
      <ExperienceStack />
      <ContactFooter />
    </main>
  );
}