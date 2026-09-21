"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const minimumDuration = 2000;
const loaderLetters = [
  { character: "D", x: 130 },
  { character: "A", x: 225 },
  { character: "V", x: 320 },
  { character: "I", x: 410 },
  { character: "D", x: 465 },
  { character: "O", x: 625 },
  { character: "K", x: 720 },
  { character: "P", x: 815 },
  { character: "E", x: 905 },
];

function waitForPageAssets() {
  const images = Array.from(document.images)
    .filter((image) => image.loading !== "lazy")
    .map((image) => {
    if (image.complete) return Promise.resolve();
    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
    });

  return Promise.all([
    document.fonts?.ready || Promise.resolve(),
    ...images,
  ]);
}

export default function PageLoader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const startedAt = performance.now();

    setIsVisible(true);

    const finish = async () => {
      await waitForPageAssets();
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, minimumDuration - elapsed);

      window.setTimeout(() => {
        if (!cancelled) setIsVisible(false);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", finish);
    };
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <motion.main
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[250] flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] text-[#FAFAFA]"
      aria-live="polite"
      aria-label="Loading David Okpe portfolio"
    >
      <div className="absolute inset-0 grid grid-cols-4 border-l border-white/10 opacity-60">
        <div className="border-r border-white/10" />
        <div className="border-r border-white/10" />
        <div className="border-r border-white/10" />
        <div />
      </div>

      <div className="relative flex w-full max-w-5xl flex-col gap-8 px-6 md:px-12">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">
          <span>David Okpe</span>
          <span>Loading portfolio</span>
        </div>

        <svg className="h-auto w-full overflow-visible" viewBox="0 0 1000 180" role="img" aria-label="David Okpe">
          {loaderLetters.map((letter, index) => (
            <motion.text
              key={`outline-${letter.character}-${index}`}
              x={letter.x}
              y="72%"
              textAnchor="middle"
              className="font-display uppercase"
              fontSize="142"
              fontWeight="700"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="2"
              pathLength="1"
              initial={{ strokeDasharray: 1, strokeDashoffset: 1 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ delay: index * 0.13, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {letter.character}
            </motion.text>
          ))}
        </svg>

        <div className="flex items-center gap-4 border-t border-white/10 pt-4">
          <motion.span
            className="h-px bg-white"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">Please wait</span>
        </div>
      </div>
    </motion.main>
  );
}
