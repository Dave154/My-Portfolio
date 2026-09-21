import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/lib/site";
import AutoplayVideo from "@/components/autoplay-video";

const assetPath = "/qaffyassets";

export const metadata = {
  title: "Qaffy Laundry Operations Platform",
  description:
    "A multi-role laundry operations platform connecting customers, logistics, vendors, and administration in one system.",
  alternates: {
    canonical: `${siteUrl}/work/qaffy`,
  },
  openGraph: {
    title: "Qaffy Laundry Operations Platform | David Okpe",
    description:
      "A multi-role laundry operations platform connecting customers, logistics, vendors, and administration in one system.",
    url: `${siteUrl}/work/qaffy`,
    type: "article",
    images: [{ url: `${assetPath}/Google-Pixel-6-PRO-qaffy-theta.vercel.app.png`, alt: "Qaffy laundry operations platform" }],
  },
};

const workflows = [
  {
    title: "Customer Dashboard",
    description: "A customer-facing workspace for checking balances, placing laundry orders, and tracking the journey from request to delivery.",
    image: `${assetPath}/Google-Pixel-6-PRO-qaffy-theta.vercel.app.png`,
    alt: "Qaffy customer dashboard for balances and laundry orders",
    secondaryImage: `${assetPath}/Grey Bold Collage Business Insights LinkedIn Post.png`,
    secondaryAlt: "Qaffy customer order details with payment status and pickup OTP",
  },
  {
    title: "Vendor Workspace",
    description: "A vendor order workspace for reviewing processing queues, tracking order status, and dispatching completed laundry work.",
    image: `${assetPath}/vendor.png`,
    alt: "Qaffy vendor workspace for processing and dispatching laundry orders",
  },
  {
    title: "Logistics Workspace",
    description: "A logistics workspace for switching between pickup and delivery, searching customer OTPs, and tracking orders through each handoff.",
    image: `${assetPath}/Screenshot 2026-09-17 141828.png`,
    alt: "Qaffy logistics workspace for pickup, delivery, and OTP search",
  },
  {
    title: "Admin Overview",
    description: "An administrative overview for monitoring workload, plans, recent updates, vendors, and customers from one place.",
    image: `${assetPath}/Screenshot 2026-09-17 142105.png`,
    alt: "Qaffy admin overview with workload, vendors, and customers",
  },
];

export default function QaffyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FAFAFA]">
      <header className="border-b border-white/10 px-6 py-6 md:px-12">
        <Link href="/" className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white">
          David Okpe / Back to portfolio
        </Link>
      </header>

      <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-36">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-white/40">Selected work / 02</p>
        <h1 className="max-w-5xl font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-9xl">
          Qaffy.
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-xl leading-relaxed text-white/60 md:text-2xl">
          A multi-role platform built around the workflow of a laundry business, connecting customers, logistics, vendors, and administration in one system.
        </p>
        <div className="mt-10 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest">
          <a href="https://qaffylaundry.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-8 hover:text-white/60">
            Visit Qaffy ↗
          </a>
          <Link href="/#projects" className="text-white/50 underline underline-offset-8 hover:text-white">
            More selected work
          </Link>
        </div>
      </section>

      <section className="grid border-b border-white/10 md:grid-cols-12">
        <div className="border-b border-white/10 p-6 md:col-span-4 md:border-b-0 md:border-r md:p-12">
          <h2 className="font-display text-4xl uppercase leading-none tracking-tighter md:text-6xl">The workflow</h2>
        </div>
        <div className="p-6 md:col-span-8 md:p-12">
          <p className="max-w-3xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">
            Laundry operations involve more than placing an order. Customers, pickup and delivery logistics, vendors, and administrators all need to work from the same process while handling different responsibilities.
          </p>
          <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">
            Qaffy was built around that operational flow, connecting order placement and pickup to vendor confirmation, billing, payment, and delivery.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16 md:px-12 md:py-24">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-5xl uppercase leading-none tracking-tighter md:text-7xl">See it in motion.</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">Qaffy product walkthrough</span>
        </div>
        <figure className="overflow-hidden border border-white/10 bg-black/40">
          <AutoplayVideo
            src={`${assetPath}/Grey Bold Collage Business Insights LinkedIn Post.mp4`}
            poster={`${assetPath}/Grey Bold Collage Business Insights LinkedIn Post.png`}
            label="Qaffy laundry operations platform product walkthrough"
          />
          <figcaption className="border-t border-white/10 px-5 py-4 font-mono text-xs uppercase tracking-widest text-white/40">
            A product walkthrough of the Qaffy laundry operations platform.
          </figcaption>
        </figure>
      </section>

      <section className="border-b border-white/10 px-6 py-16 md:px-12 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-5xl uppercase leading-none tracking-tighter md:text-7xl">Inside Qaffy.</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">Role-based operations</span>
        </div>

        <div className="grid gap-px border-l border-t border-white/10 bg-white/10 md:grid-cols-2">
          {workflows.map((workflow) => (
            <article key={workflow.title} className="bg-[#050505] p-6 md:p-10">
              <div className={`relative aspect-[16/10] overflow-hidden border border-white/10 ${workflow.secondaryImage ? "grid grid-cols-2 gap-0 bg-transparent" : "bg-[#f7f8fa]"}`}>
                <div className="relative h-full min-h-0 min-w-0">
                  <Image src={workflow.image} alt={workflow.alt} fill unoptimized className="object-contain" />
                </div>
                {workflow.secondaryImage && (
                  <div className="relative h-full min-h-0 min-w-0 overflow-hidden">
                    <Image src={workflow.secondaryImage} alt={workflow.secondaryAlt} fill unoptimized className="object-contain mix-blend-multiply" />
                  </div>
                )}
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
            The project involved building around real-world cases such as quantity mismatches, subscription allowances, post-paid billing, OTP-based handoffs, and role-specific workflows.
          </p>
          <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">
            It is an example of turning the way a business operates into software that gives each person the right tools for their part of the process.
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
