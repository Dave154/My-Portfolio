import Link from "next/link";

const navigation = [
  { label: "Work", href: "#projects" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050505]/90 text-[#FAFAFA] backdrop-blur-md">
      <nav aria-label="Primary navigation" className="grid grid-cols-4 md:grid-cols-6">
        <Link
          href="/"
          className="col-span-4 flex min-h-[52px] flex-col justify-center border-r border-white/10 px-5 py-2 md:col-span-2 md:min-h-[64px] md:px-8 md:py-3"
        >
          <span className="font-display text-lg uppercase leading-none tracking-tight md:text-xl">David Okpe</span>
          <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Full-Stack Developer</span>
        </Link>

        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex min-h-[44px] items-center justify-center border-r border-white/10 px-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/60 transition-colors hover:bg-white hover:text-black sm:px-2 sm:text-[10px] sm:tracking-widest md:min-h-[64px] md:px-3 md:text-xs"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
