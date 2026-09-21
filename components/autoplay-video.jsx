"use client";

import { useEffect, useRef } from "react";

export default function AutoplayVideo({ src, poster, label }) {
  const videoRef = useRef(null);
  const hasPlayed = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed.current) return;

        hasPlayed.current = true;
        video.play().catch(() => {
          hasPlayed.current = false;
        });
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="aspect-video w-full object-contain"
      controls
      muted
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support this video.
    </video>
  );
}
