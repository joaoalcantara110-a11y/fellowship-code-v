"use client";

import { useEffect, useRef } from "react";

const frases = [
  "A diferença não está no que construímos, mas onde decidimos construir.",
  "A gratidão gera multiplicação.",
  "Dinheiro deve estar nas mãos, nunca no coração.",
  "Quem cresce sozinho vai mais rápido. Quem cresce em comunidade vai mais longe.",
  "Propósito sem alinhamento gera desgaste. Propósito alinhado gera impacto.",
  "Ambientes determinam destino.",
  "Liderança não é uma posição. É uma responsabilidade.",
];

export default function FrasesImpacto() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#060f22] to-[#0a1a38] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-10 sm:mb-16">
          <div className="sm:hidden text-[11.5px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: '#e3c25b' }}>Frases de Impacto</div>
          <span className="hidden sm:inline-block px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-sm font-medium tracking-wide uppercase mb-5">
            Frases de Impacto
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Palavras que <span className="text-gradient-gold">transformam.</span>
          </h2>
        </div>

        {/* Marquee — overflow hidden, no horizontal scroll */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-100 overflow-hidden mb-10 sm:mb-16 py-3 sm:py-4">
          <div
            className="flex gap-6 sm:gap-8 whitespace-nowrap"
            style={{
              animation: "marquee 40s linear infinite",
              display: "inline-flex",
            }}
          >
            {[...frases, ...frases].map((frase, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 sm:gap-4 text-white/30 text-sm sm:text-lg font-medium"
              >
                <span className="text-[#F7931E]">✦</span>
                {frase}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile: Designer-style gold quote cards */}
        <div className="sm:hidden anim opacity-0 translate-y-8 transition-all duration-700 delay-200 flex flex-col gap-3">
          {frases.slice(0, 5).map((frase, i) => (
            <div
              key={i}
              className="flex gap-[14px] items-start rounded-[18px] p-[22px_20px]"
              style={{ background: 'rgba(201,162,39,0.07)', border: '1px solid rgba(201,162,39,0.2)', transitionDelay: `${i * 60}ms` }}
            >
              <span style={{ color: '#e3c25b', fontSize: '18px', lineHeight: '1.2', flexShrink: 0 }}>✦</span>
              <p style={{ margin: 0, fontFamily: 'var(--font-cormorant)', fontSize: '20px', fontStyle: 'italic', lineHeight: 1.32, color: '#f0e8d4' }}>
                {frase}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: original grid (sm+) */}
        <div className="hidden sm:grid anim opacity-0 translate-y-8 transition-all duration-700 delay-200 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {frases.map((frase, i) => (
            <div
              key={i}
              className={`group p-7 sm:p-8 rounded-2xl border transition-all duration-300 ${
                i === 0
                  ? "bg-gradient-to-br from-[#F7931E]/15 to-[#F7931E]/5 border-[#F7931E]/30"
                  : "bg-white/5 border-white/10 hover:border-[#F7931E]/30 hover:bg-[#F7931E]/5"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-[#F7931E]/30 text-4xl sm:text-5xl font-serif leading-none mb-3 sm:mb-4 select-none">&ldquo;</div>
              <p className={`leading-relaxed font-medium text-sm sm:text-base ${i === 0 ? "text-white sm:text-lg" : "text-white/80"}`}>
                {frase}
              </p>
              <div className="mt-4 w-8 h-0.5 bg-[#F7931E]/40 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
