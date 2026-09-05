import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-8 text-[#FAFAFA] flex flex-col justify-between">
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-white/50">Dave Okpe / 404</p>
      <div>
        <p className="font-mono text-sm text-white/40">ERROR 404</p>
        <h1 className="font-display text-[clamp(4rem,15vw,12rem)] uppercase leading-[0.8] tracking-tighter">
          Page not found.
        </h1>
        <Link href="/" className="mt-10 inline-block border border-white/30 px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
          Return home
        </Link>
      </div>
      <p className="font-sans text-sm text-white/40">The page you requested does not exist.</p>
    </main>
  );
}