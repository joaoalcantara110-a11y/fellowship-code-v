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
      className="relative min-h-[88vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-12 sm:pb-16">
        <div className="max-w-3xl text-center sm:text-left">

          {/* Badge */}
          <div
            className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 sm:mb-4"
            style={{ background: 'rgba(201,162,39,0.14)', border: '1px solid rgba(201,162,39,0.35)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: '#e3c25b', boxShadow: '0 0 8px #e3c25b' }} />
            <span className="text-[11.5px] font-bold tracking-[0.08em] uppercase" style={{ color: '#e3c25b' }}>
              Encontros Semanais Online
            </span>
          </div>

          {/* Logo — visible on mobile (Designer shows it centered) */}
          <div className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-150 mb-5 sm:mb-6 flex justify-center sm:justify-start">
            <Image
              src="/images/logo1.png"
              alt="Fellowship Global"
              width={280}
              height={100}
              className="h-[54px] sm:h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Title */}
          <h1
            className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-200 font-bold text-white mb-2 sm:mb-3"
            style={{ fontSize: '44px', lineHeight: '1.02', letterSpacing: '0.01em' }}
          >
            FELLOWSHIP<br className="sm:hidden" />
            {" "}<span className="text-gradient-gold sm:hidden">CODE V</span>
            <span className="hidden sm:inline text-[2.25rem] sm:text-4xl md:text-5xl lg:text-6xl"> CODE V</span>
          </h1>

          {/* Subtitle */}
          <div className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-300 mb-[18px] sm:mb-6">
            <span className="text-[12.5px] sm:text-base md:text-lg font-bold tracking-[0.06em] uppercase" style={{ color: '#e3c25b' }}>
              Liderança · Propósito · Crescimento
            </span>
          </div>

          {/* Description */}
          <p
            className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-300 text-[15.5px] sm:text-base md:text-lg leading-[1.6] mb-[26px] sm:mb-8 max-w-sm sm:max-w-xl mx-auto sm:mx-0"
            style={{ color: '#c3cfe4' }}
          >
            <span className="text-white font-medium">Mais de 400 vidas impactadas.</span>{" "}
            Uma comunidade internacional de líderes onde o propósito é ativado.
          </p>

          {/* CTAs — both stacked on mobile, side by side on sm+ */}
          <div
            className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-[11px] sm:gap-4"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-[17px] sm:py-4 font-extrabold text-[15px] sm:text-base active:scale-95 transition-all duration-300 w-full sm:w-auto"
              style={{ borderRadius: '14px', color: '#060f22', background: 'linear-gradient(135deg,#e3c25b,#c9a227)', boxShadow: '0 10px 30px rgba(201,162,39,0.32)', letterSpacing: '0.02em' }}
            >
              GARANTIR O MEU LUGAR
            </a>

            <button
              onClick={scrollToNext}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-[16px] sm:py-4 font-bold text-[15px] sm:text-base hover:bg-white/10 active:scale-95 transition-all duration-300 w-full sm:w-auto"
              style={{ borderRadius: '14px', color: '#e8ecf4', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}
            >
              Quero saber mais
            </button>
          </div>

          {/* Stats — 2×2 card grid on mobile, row on desktop */}
          <div
            className="animate-on-enter opacity-0 translate-y-8 transition-all duration-700 delay-500 grid grid-cols-2 sm:flex sm:flex-wrap gap-[10px] sm:gap-8 mt-6 sm:mt-10"
          >
            {[
              { value: "18h", label: "PT", sub: "Todas as 5ª Feiras" },
              { value: "Online", label: "Transmissão", sub: "Privada" },
              { value: "400+", label: "Vidas", sub: "Impactadas" },
              { value: "Global", label: "Vários", sub: "Países" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="sm:flex sm:flex-col sm:gap-1 sm:items-start"
              >
                {/* Mobile: card style */}
                <div
                  className="sm:hidden p-[13px_12px] rounded-2xl text-left"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', fontWeight: 700, color: '#e3c25b', lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11.5px] font-semibold leading-tight" style={{ color: '#dbe3f2' }}>{stat.label}</div>
                  <div className="text-[11px] leading-tight" style={{ color: '#8da0bd' }}>{stat.sub}</div>
                </div>
                {/* Desktop: simple text */}
                <span className="hidden sm:block text-xl sm:text-2xl font-bold text-[#F7931E] leading-none">{stat.value}</span>
                <span className="hidden sm:block text-[11px] text-white/50 leading-snug tracking-wide">{stat.label}</span>
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
