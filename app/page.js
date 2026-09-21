import Hero from "@/components/hero";
import Header from "@/components/header";
import ProjectDarllix from "@/components/project-darllix";
import ProjectIndex from "@/components/project-index";
import Capabilities from "@/components/capabilities";
import ExperienceStack from "@/components/experience-stack";
import ContactFooter from "@/components/contact-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Header />
      <Hero />
      <ProjectDarllix />
      <ProjectIndex />
      <Capabilities />
      <ExperienceStack />
      <ContactFooter />
    </main>
  );
}