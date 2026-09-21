import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "Darllix E-commerce Platform",
  description:
    "A multi-tenant e-commerce platform built for independent vendors to manage and grow their online businesses.",
  alternates: {
    canonical: `${siteUrl}/work/darllix`,
  },
  openGraph: {
    title: "Darllix E-commerce Platform | David Okpe",
    description:
      "A multi-tenant e-commerce platform built for independent vendors to manage and grow their online businesses.",
    url: `${siteUrl}/work/darllix`,
    type: "article",
    images: [{ url: "/darllixdashboard.png", alt: "Darllix vendor dashboard" }],
  },
};

const capabilities = [
  {
    title: "Vendor Management",
    description:
      "A centralized workspace for managing products, orders, customers, and the day-to-day work of running an online store.",
    image: "/darllixdashboard.png",
    alt: "Darllix vendor dashboard for managing products and orders",
  },
  {
    title: "Product Discovery",
    description:
      "A discovery experience that helps customers find products and vendors beyond the stores they already know.",
    image: "/iPhone-13-PRO-localhost.png",
    alt: "Darllix product discovery interface",
  },
  {
    title: "Independent Storefronts",
    description:
      "Each vendor gets their own storefront while the platform handles the underlying system and infrastructure.",
    image: "/iPhone-13-PRO-kovan.darllix.shop.png",
    alt: "Darllix independent vendor storefront",
  },
  {
    title: "Simple Checkout",
    description:
      "A checkout flow that lets customers browse, add products, and complete their purchase without unnecessary steps.",
    image: "/iPhone-13-PRO-kovan.darllix.shop (2).png",
    alt: "Darllix checkout experience",
  },
];

export default function DarllixPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FAFAFA]">
      <header className="border-b border-white/10 px-6 py-6 md:px-12">
        <Link href="/" className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white">
          David Okpe / Back to portfolio
        </Link>
      </header>

      <section className="border-b border-white/10 px-6 py-24 md:px-12 md:py-36">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-white/40">Selected work / 01</p>
        <h1 className="max-w-5xl font-display text-6xl uppercase leading-[0.85] tracking-tighter md:text-9xl">
          Darllix.
        </h1>
        <p className="mt-8 max-w-3xl font-sans text-xl leading-relaxed text-white/60 md:text-2xl">
          A multi-tenant e-commerce platform built for independent vendors to manage and grow their online businesses.
        </p>
        <div className="mt-10 flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest">
          <a href="https://darllix.shop" target="_blank" rel="noopener noreferrer" className="underline underline-offset-8 hover:text-white/60">
            Visit the live platform ↗
          </a>
          <Link href="/#projects" className="text-white/50 underline underline-offset-8 hover:text-white">
            More selected work
          </Link>
        </div>
      </section>

      <section className="grid border-b border-white/10 md:grid-cols-12">
        <div className="border-b border-white/10 p-6 md:col-span-4 md:border-b-0 md:border-r md:p-12">
          <h2 className="font-display text-4xl uppercase leading-none tracking-tighter md:text-6xl">The problem</h2>
        </div>
        <div className="p-6 md:col-span-8 md:p-12">
          <p className="max-w-3xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">
            Independent vendors need more than a product listing. They need a storefront, a way to manage products and orders, and a customer journey that makes it easy to discover and buy from them.
          </p>
          <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">
            Darllix brings those pieces together in one platform while allowing each vendor to operate through an independent storefront.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-16 md:px-12 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-5xl uppercase leading-none tracking-tighter md:text-7xl">What it does.</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-white/40">Platform capabilities</span>
        </div>

        <div className="grid gap-px border-l border-t border-white/10 bg-white/10 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article key={capability.title} className="bg-[#050505] p-6 md:p-10">
              <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-black/40">
                <Image src={capability.image} alt={capability.alt} fill unoptimized className="object-contain" />
              </div>
              <h3 className="mt-8 font-display text-3xl uppercase tracking-tighter">{capability.title}</h3>
              <p className="mt-4 max-w-xl font-sans leading-relaxed text-white/60">{capability.description}</p>
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
            The platform required a shared foundation for multiple businesses without making each vendor experience feel shared. That meant connecting storefronts, product management, discovery, orders, and checkout while keeping the workflows clear for customers and vendors.
          </p>
          <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/70 md:text-xl">
            The result is a commerce system that supports independent storefronts and the operational tools behind them.
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
