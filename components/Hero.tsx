"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const WHATSAPP_LINK = "https://chat.whatsapp.com/GMEOqEQunosH0Cr5xnjiRS";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-enter");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mentor3.webp"
          alt="Dr. Venceslau Andrade"
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Gradient overlays — hero-bg-overlay reduces opacity on mobile via CSS */}
        <div className="hero-bg-overlay absolute inset-0 bg-gradient-to-r from-[#060f22]/95 via-[#060f22]/85 to-[#060f22]/60" />
        <div className="hero-bg-overlay absolute inset-0 bg-gradient-to-t from-[#060f22] via-transparent to-[#060f22]/50" />
      </div>

      {/* Decorative elements — hidden on mobile */}
      <div className="hidden sm:block absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#F7931E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden sm:block absolute bottom-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-[#1e3a6e]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-12 sm:pb-16">
        <div className="max-w-3xl">

          {/* Badge */}
          <div
            className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-100 inline-flex items-center gap-2 px-4 sm:px-4 py-2 sm:py-2 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 mb-3 sm:mb-4"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#F7931E] animate-pulse flex-shrink-0" />
            <span className="text-[#F7931E] text-xs font-medium tracking-wide uppercase">
              Encontros Semanais Online
            </span>
          </div>

          {/* Logo — hidden on mobile (Navbar already shows it) */}
          <div className="hidden sm:block animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-150 mb-5 sm:mb-6">
            <Image
              src="/images/logo1.png"
              alt="Fellowship Global"
              width={280}
              height={100}
              className="h-12 sm:h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Title — highest priority element */}
          <h1
            className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2 sm:mb-3"
          >
            FELLOWSHIP{" "}
            <span className="text-gradient-gold">CODE V</span>
          </h1>

          {/* Subtitle — hidden on mobile to reduce visual noise */}
          <p className="hidden sm:block animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-300 text-[#F7931E] text-sm sm:text-base md:text-lg font-medium tracking-widest uppercase mb-5 sm:mb-6 leading-relaxed">
            Liderança · Propósito · Crescimento · Acesso Global
          </p>

          {/* Description — deprioritized on mobile */}
          <p
            className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-300 text-white/60 sm:text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xs sm:max-w-xl"
          >
            <span className="text-white/90 sm:text-white font-medium">Mais de 400 vidas impactadas.</span>{" "}
            Uma comunidade internacional de líderes onde o propósito é ativado.
          </p>

          {/* CTAs — only primary on mobile */}
          <div
            className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-4 rounded-full bg-[#F7931E] text-white font-bold text-sm sm:text-base hover:bg-[#e07010] transition-all duration-300 shadow-2xl hover:shadow-[#F7931E]/40 active:scale-95 glow-gold w-full sm:w-auto"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              GARANTIR O MEU LUGAR
            </a>

            {/* Secondary CTA — hidden on mobile to reduce clutter */}
            <button
              onClick={scrollToNext}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base hover:border-[#F7931E]/50 hover:bg-white/5 active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              QUERO SABER MAIS
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Stats — 2×2 grid on mobile, row on desktop */}
          <div
            className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-500 grid grid-cols-2 sm:flex sm:flex-wrap gap-x-8 gap-y-5 sm:gap-8 mt-6 sm:mt-10"
          >
            {[
              { value: "18h (PT)", label: "Todas as 5ª Feiras" },
              { value: "Online", label: "Transmissão Privada" },
              { value: "400+", label: "Vidas Impactadas" },
              { value: "Global", label: "Vários Países" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 items-start sm:items-start">
                <span className="text-xl sm:text-2xl font-bold text-[#F7931E] leading-none">{stat.value}</span>
                <span className="text-[11px] text-white/50 leading-snug tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase hidden sm:block">Scroll</span>
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
