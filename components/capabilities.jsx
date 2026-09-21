const capabilities = [
  {
    title: "Web Applications",
    description: "Customer-facing products, SaaS platforms, dashboards, and internal tools.",
  },
  {
    title: "Business Systems",
    description: "Software for managing workflows, operations, customers, orders, payments, and processes.",
  },
  {
    title: "E-commerce",
    description: "Storefronts, vendor platforms, product management, checkout, payments, and commerce workflows.",
  },
  {
    title: "MVPs",
    description: "Taking an idea from workflow and requirements to a working product.",
  },
  {
    title: "Existing Systems",
    description: "Fixing, improving, or completing an existing application and codebase.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="w-full border-y border-white/10 bg-[#050505] text-[#FAFAFA]">
      <div className="p-6 lg:p-12 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="font-display uppercase text-5xl lg:text-7xl tracking-tighter leading-none">
          WHAT I BUILD.
        </h2>
        <p className="font-mono text-xs uppercase tracking-widest text-white/40 md:mb-2">
          From problem to product
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-l border-white/10">
        {capabilities.map((capability, index) => (
          <article key={capability.title} className="border-r border-b border-white/10 p-6 lg:p-8 min-h-[220px] flex flex-col justify-between">
            <span className="font-mono text-xs tracking-widest text-white/40">0{index + 1}</span>
            <div>
              <h3 className="font-display uppercase text-2xl tracking-tight mb-3">{capability.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-white/60">{capability.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
