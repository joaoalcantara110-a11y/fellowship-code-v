"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const images = [
  { src: "/images/mentor1.webp", alt: "Dr. Venceslau Andrade no estúdio", caption: "Ensino ao vivo", objectPos: "top" },
  { src: "/images/mentor2.webp", alt: "Fellowship em ação", caption: "Comunidade em crescimento", objectPos: "center" },
  { src: "/images/mentor3.webp", alt: "Dr. Venceslau Andrade", caption: "Liderança com propósito", objectPos: "top" },
  { src: "/images/mentor4.webp", alt: "Prof. Vaumara Andrade", caption: "Desenvolvimento humano", objectPos: "top" },
  { src: "/images/mentor5.webp", alt: "Mentores Fellowship", caption: "Mentoria transformadora", objectPos: "top" },
];

export default function Galeria() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const next = useCallback(() => setActive((prev) => (prev + 1) % images.length), []);
  const prev = useCallback(() => setActive((prev) => (prev - 1 + images.length) % images.length), []);

  useEffect(() => {
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, [next]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.05 }
    );
    const elements = sectionRef.current?.querySelectorAll(".anim");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((prev) => ((prev ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft") setLightbox((prev) => ((prev ?? 0) - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="relative hidden sm:block sm:py-20 md:py-32 bg-[#0a1a38] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-8 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-xs sm:text-sm font-medium tracking-wide uppercase mb-3 sm:mb-4">
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            O Fellowship em <span className="text-gradient-gold">ação.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-lg max-w-xl mx-auto">
            Momentos reais de ensino, comunhão e transformação.
          </p>
        </div>

        {/* Main carousel — 4:3 on mobile, 16:9 on desktop */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-100 mb-5 sm:mb-6">
          <div
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-video cursor-pointer group select-none"
            onClick={() => setLightbox(active)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((img, i) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: img.objectPos }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f22]/70 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-14 sm:right-6">
                  <p className="text-white font-semibold text-sm sm:text-lg leading-snug">{img.caption}</p>
                </div>
              </div>
            ))}

            {/* Prev/Next — larger tap area on mobile */}
            <button
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Próximo"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide counter — mobile only */}
            <div className="absolute top-3 right-3 sm:hidden bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 text-white/80 text-xs font-medium">
              {active + 1}/{images.length}
            </div>

            {/* Expand icon — desktop hover */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-sm items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Thumbnails — desktop only */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-200 hidden sm:flex gap-3 justify-center flex-wrap">
          {images.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i)}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                i === active
                  ? "ring-2 ring-[#F7931E] scale-105 shadow-lg shadow-[#F7931E]/30"
                  : "opacity-60 hover:opacity-100"
              }`}
              style={{ width: 72, height: 54 }}
              aria-label={img.alt}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" style={{ objectPosition: img.objectPos }} sizes="72px" />
            </button>
          ))}
        </div>

        {/* Dots — mobile only (desktop has thumbnails) */}
        <div className="flex sm:hidden justify-center items-center gap-2.5 mt-5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-7 h-2.5 bg-[#F7931E]" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => ((prev ?? 0) - 1 + images.length) % images.length); }}
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((prev) => ((prev ?? 0) + 1) % images.length); }}
            aria-label="Próximo"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
