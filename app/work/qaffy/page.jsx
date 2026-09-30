import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/lib/site";
import AutoplayVideo from "@/components/autoplay-video";

const assetPath = "/qaffyassets";

export const metadata = {
  title: "Qaffy Custom Laundry Operations System",
  description:
    "A custom operations system David Okpe built for a laundry business in Abuja, connecting customers, logistics, vendors, and administration in one workflow.",
  alternates: {
    canonical: `${siteUrl}/work/qaffy`,
  },
  openGraph: {
    title: "Qaffy Custom Laundry Operations System | David Okpe",
    description:
      "A custom operations system David Okpe built for a laundry business in Abuja, connecting customers, logistics, vendors, and administration in one workflow.",
    url: `${siteUrl}/work/qaffy`,
    type: "article",
    images: [{ url: `${assetPath}/Google-Pixel-6-PRO-qaffy-theta.vercel.app.png`, alt: "Qaffy laundry operations system" }],
  },
};

const orderSteps = [
  {
    number: "01",
    role: "CUSTOMER",
    title: "Place a laundry order",
    description: "A customer places a pickup request and follows the order from their account.",
    image: `${assetPath}/Google-Pixel-6-PRO-qaffy-theta.vercel.app.png`,
    alt: "Qaffy customer dashboard for balances and laundry orders",
  },
  {
    number: "02",
    role: "LOGISTICS",
    title: "Confirm the pickup",
    description: "The logistics team confirms collection with an OTP, giving the physical handoff a clear checkpoint.",
    image: `${assetPath}/Screenshot 2026-09-17 141828.png`,
    alt: "Qaffy logistics workspace for pickup, delivery, and OTP search",
  },
  {
    number: "03",
    role: "VENDOR",
    title: "Confirm received items",
    description: "The vendor reviews the order and records the received quantity, so the next steps use what was actually processed.",
    detail: "Example: if a customer requests 10 items and the vendor confirms 8, billing follows the confirmed 8.",
    image: `${assetPath}/vendor.png`,
    alt: "Qaffy vendor workspace for processing and dispatching laundry orders",
  },
  {
    number: "04",
    role: "BILLING & CUSTOMER",
    title: "Bill from the final count",
    description: "The confirmed quantity flows into billing, subscription allowance, extra charges, and payment status. Customer updates keep the order visible beyond the dashboard.",
    image: `${assetPath}/Grey Bold Collage Business Insights LinkedIn Post.png`,
    alt: "Qaffy customer order details with payment status and pickup OTP",
  },
];

export default function QaffyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FAFAFA] [scroll-snap-type:none]">
      <header className="flex justify-center border-b border-white/10 px-5 py-5 md:justify-start md:px-8 lg:px-12">
        <Link href="/" className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-white">
          David Okpe / Back to portfolio
        </Link>
      </header>

      <section className="border-b border-white/10 px-5 py-16 text-center md:px-8 md:py-24 md:text-left lg:px-12 xl:py-36">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-white/40 md:mb-6">Selected work / 02</p>
        <h1 className="mx-auto max-w-5xl font-display text-5xl uppercase leading-[0.9] sm:text-6xl md:mx-0 md:text-7xl md:leading-[0.85] xl:text-9xl">
          Qaffy.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl font-sans text-lg leading-relaxed text-white/60 md:mx-0 md:mt-8 md:text-xl xl:text-2xl">
          A custom operations system I built for a laundry business in Abuja, connecting customers, logistics, vendors, and administration in one workflow.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4 font-mono text-xs uppercase tracking-widest md:mt-10 md:justify-start">
          <a href="https://qaffylaundry.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-8 hover:text-white/60">
            Visit Qaffy ↗
          </a>
          <Link href="/#projects" className="text-white/50 underline underline-offset-8 hover:text-white">
            More selected work
          </Link>
        </div>
      </section>

      <section className="grid border-b border-white/10 xl:grid-cols-12">
        <div className="border-b border-white/10 p-5 md:p-8 xl:col-span-4 xl:border-b-0 xl:border-r xl:p-12">
          <h2 className="text-balance text-center font-display text-3xl uppercase leading-tight sm:text-4xl md:text-left md:text-4xl xl:text-4xl xl:leading-[1.2]">The problem</h2>
        </div>
        <div className="p-5 md:p-8 xl:col-span-8 xl:p-12">
          <p className="max-w-3xl font-sans text-base leading-7 text-white/70 md:text-lg md:leading-relaxed lg:text-xl">
            A laundry order moves between a customer, logistics, and a vendor. The quantity received can change the bill, subscription allowance, and whether the order is ready for delivery.
          </p>
          <p className="mt-4 max-w-3xl font-sans text-base leading-7 text-white/70 md:mt-6 md:text-lg md:leading-relaxed lg:text-xl">
            I built Qaffy to keep those steps connected around the same order.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-24">
        <div className="mb-6 flex flex-col items-center justify-between gap-3 md:mb-8 md:flex-row md:items-end">
          <h2 className="text-balance text-center font-display text-4xl uppercase leading-tight sm:text-5xl md:text-left md:text-5xl xl:text-7xl xl:leading-none">See it in motion.</h2>
          <span className="text-center font-mono text-xs uppercase tracking-widest text-white/40">Qaffy product walkthrough</span>
        </div>
        <figure className="overflow-hidden border border-white/10 bg-black/40">
          <AutoplayVideo
            src={`${assetPath}/Grey Bold Collage Business Insights LinkedIn Post.mp4`}
            poster={`${assetPath}/Grey Bold Collage Business Insights LinkedIn Post.png`}
            label="Qaffy laundry operations system product walkthrough"
          />
          <figcaption className="border-t border-white/10 px-4 py-3 font-mono text-xs uppercase leading-relaxed tracking-widest text-white/40 sm:px-5 sm:py-4">
            A walkthrough of the Qaffy laundry operations system.
          </figcaption>
        </figure>
      </section>


      <section className="border-b border-white/10 px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-24">
        <div className="mb-8 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-white/40">One order, step by step</p>
            <h2 className="text-balance font-display text-4xl uppercase leading-tight sm:text-5xl xl:text-7xl xl:leading-none">A shared workflow</h2>
          </div>
          <p className="max-w-xl font-sans text-base leading-7 text-white/60 md:text-lg">
            Each team works in its own view. The order and its changing details stay connected.
          </p>
        </div>

        <div className="border-t border-white/15">
          {orderSteps.map((step, index) => {
            const textOrder = index % 2 === 0 ? "md:order-1" : "md:order-2";
            const imageOrder = index % 2 === 0 ? "md:order-2" : "md:order-1";

            return (
              <article key={step.number} className="grid gap-6 border-b border-white/15 py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-12 lg:gap-12 lg:py-16">
                <div className={`md:col-span-4 ${textOrder}`}>
                  <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-white/40">
                    <span className="text-white/70">{step.number}</span>
                    <span>{step.role}</span>
                  </p>
                  <h3 className="max-w-sm text-balance font-display text-2xl uppercase leading-tight xl:text-3xl">{step.title}</h3>
                  <p className="mt-4 max-w-md font-sans text-base leading-7 text-white/60">{step.description}</p>
                  {step.detail && (
                    <p className="mt-5 border-l border-white/30 pl-4 font-sans text-sm leading-6 text-white/50">{step.detail}</p>
                  )}
                </div>
                <figure className={`md:col-span-8 ${imageOrder}`}>
                  <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#f7f8fa]">
                    <Image src={step.image} alt={step.alt} fill unoptimized sizes="(min-width: 768px) 66vw, 100vw" className="object-contain" />
                  </div>
                  <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest text-white/35">{step.role} VIEW / {step.number}</figcaption>
                </figure>
              </article>
            );
          })}
        </div>

        <aside className="grid gap-6 border-b border-white/15 py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-12 lg:gap-12 lg:py-16">
          <div className="md:col-span-4">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-white/40">OPERATIONS VIEW</p>
            <h3 className="text-balance font-display text-2xl uppercase leading-tight xl:text-3xl">Admin overview</h3>
            <p className="mt-4 max-w-md font-sans text-base leading-7 text-white/60">
              Workload, recent updates, vendors, and customers come together in the admin overview.
            </p>
          </div>
          <figure className="md:col-span-8">
            <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-[#f7f8fa]">
              <Image src={`${assetPath}/Screenshot 2026-09-17 142105.png`} alt="Qaffy admin overview with workload, vendors, and customers" fill unoptimized sizes="(min-width: 768px) 66vw, 100vw" className="object-contain" />
            </div>
          </figure>
        </aside>
      </section>

      <section className="flex flex-col gap-3 border-b border-white/10 px-5 py-6 md:flex-row md:items-center md:gap-8 md:px-8 lg:px-12">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">Built with</p>
        <p className="font-mono text-sm uppercase tracking-widest text-white/70">React · Supabase · PWA</p>
      </section>

      <section className="border-b border-white/10 px-5 py-12 text-center md:px-8 md:py-16 md:text-left lg:px-12 lg:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-white/40">Start a conversation</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance font-display text-3xl uppercase leading-tight sm:text-4xl md:mx-0 md:mt-5 md:text-4xl md:leading-none xl:text-5xl">
          Working through a similar problem?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-sans text-base leading-7 text-white/70 md:mx-0 md:mt-6 md:text-lg md:leading-relaxed lg:text-xl">
          I&apos;m interested in hearing how your current process works.
        </p>
        <a href="mailto:okpedavid0@gmail.com" className="mt-6 inline-block font-mono text-xs uppercase tracking-widest underline underline-offset-8 hover:text-white/60 md:mt-8">
          Get in touch ↗
        </a>
      </section>

      <footer className="flex flex-col items-center gap-5 px-5 py-8 text-center md:flex-row md:items-center md:justify-between md:px-8 md:py-10 md:text-left lg:px-12 lg:py-12">
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
