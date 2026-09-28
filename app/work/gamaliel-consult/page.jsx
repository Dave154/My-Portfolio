import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/lib/site";

const assetPath = "/gamalielassets";

export const metadata = {
  title: "Gamaliel Consult Legal Consultancy Website",
  description:
    "A public website and administration dashboard for a legal consultancy, covering consultation requests, articles, attorneys, practice areas, and homepage content.",
  alternates: {
    canonical: `${siteUrl}/work/gamaliel-consult`,
  },
  openGraph: {
    title: "Gamaliel Consult | David Okpe",
    description:
      "A legal consultancy website with an administration dashboard for managing public content and consultation requests.",
    url: `${siteUrl}/work/gamaliel-consult`,
    type: "article",
    images: [{ url: `${assetPath}/landing-desktop-1498x844.png`, alt: "Gamaliel Consult public website" }],
  },
};

const workflows = [
  {
    title: "Public website",
    description:
      "The public experience introduces the firm, its legal practice areas, and its attorneys, with clear paths to learn more or request a consultation.",
    image: `${assetPath}/landing-desktop-1498x844.png`,
    alt: "Gamaliel Consult public homepage with firm information and legal practice areas",
  },
  {
    title: "Administration overview",
    description:
      "A dashboard overview that brings recent consultations, blog posts, and attorney records into one place for the administrator.",
    image: `${assetPath}/dashboard-desktop-1498x844.png`,
    alt: "Gamaliel Consult dashboard overview with recent records and summary counts",
  },
  {
    title: "Homepage content",
    description:
      "A slider manager for updating the homepage hero content, including its images, titles, and messages.",
    image: `${assetPath}/slider-desktop-1498x844.png`,
    alt: "Gamaliel Consult dashboard for managing homepage slider content",
  },
  {
    title: "Consultation requests",
    description:
      "A consultation workspace for reviewing incoming requests and handling follow-up replies from the dashboard.",
    image: `${assetPath}/consultations-desktop-1498x844.png`,
    alt: "Gamaliel Consult dashboard for reviewing consultation requests",
  },
];

export default function GamalielConsultPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FAFAFA]">
      <header className="border-b border-white/10 px-6 py-6 md:px-12">
        <Link href="/" className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white">
          David Okpe / Back to portfolio
        </Link>
      </header>

      <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-36">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-white/40">Selected work / Legal consultancy</p>
        <h1 className="max-w-5xl font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-9xl">
          Gamaliel Consult.
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-xl leading-relaxed text-white/60 md:text-2xl">
          A public website and administration dashboard for a legal consultancy, bringing firm information, practice areas, attorney profiles, articles, and consultation requests together.
        </p>
        <div className="mt-10 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest">
          <a href="https://www.gamalielconsult.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-8 hover:text-white/60">
            Visit Gamaliel Consult ↗
          </a>
          <Link href="/#projects" className="text-white/50 underline underline-offset-8 hover:text-white">
            More selected work
          </Link>
        </div>
      </section>

      <section className="grid border-b border-white/10 md:grid-cols-12">
        <div className="border-b border-white/10 p-6 md:col-span-4 md:border-b-0 md:border-r md:p-12">
          <h2 className="font-display text-4xl uppercase leading-none tracking-tighter md:text-6xl">The system</h2>
        </div>
        <div className="p-6 md:col-span-8 md:p-12">
          <p className="max-w-3xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">
            The public site helps prospective clients understand the firm, explore its practice areas and attorneys, read its articles, and request a consultation. Contact details and clear inquiry paths make it easy to move from research to conversation.
          </p>
          <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">
            Behind it, an administration dashboard gives the firm control over incoming consultations and replies, blog publishing, attorney profiles, practice areas, and homepage content. The Vue frontend connects to a separate backend API, keeping the public experience and internal workflows connected to the same content system.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16 md:px-12 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-5xl uppercase leading-none tracking-tighter md:text-7xl">Inside the dashboard.</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">Content and consultation workflows</span>
        </div>

        <div className="grid gap-px border-l border-t border-white/10 bg-white/10 md:grid-cols-2">
          {workflows.map((workflow) => (
            <article key={workflow.title} className="bg-[#050505] p-6 md:p-10">
              <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-black/40">
                <Image src={workflow.image} alt={workflow.alt} fill unoptimized className="object-contain" />
              </div>
              <h3 className="mt-8 font-display text-3xl uppercase tracking-tighter">{workflow.title}</h3>
              <p className="mt-4 max-w-xl font-sans leading-relaxed text-white/60">{workflow.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid border-b border-white/10 md:grid-cols-12">
        <div className="border-b border-white/10 p-6 md:col-span-4 md:border-b-0 md:border-r md:p-12">
          <h2 className="font-display text-4xl uppercase leading-none tracking-tighter md:text-6xl">The build.</h2>
        </div>
        <div className="p-6 md:col-span-8 md:p-12">
          <p className="max-w-3xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">
            The frontend was built with Vue 3, TypeScript, Vue Router, Vite, and Tailwind CSS. Public pages and dashboard screens share a client application, while API-backed records support content management and consultation workflows.
          </p>
        </div>
      </section>

      <footer className="flex flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12">
        <Link href="/" className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white">
          ← Return to David Okpe
        </Link>
        <a href="mailto:okpedavid0@gmail.com" className="font-mono text-xs uppercase tracking-widest underline underline-offset-8 hover:text-white/60">
          Discuss a project
        </a>
      </footer>
    </main>
  );
}