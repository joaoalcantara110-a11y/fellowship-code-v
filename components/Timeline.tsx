"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Ensino Directo",
    desc: "Princípios de liderança, fé, propósito e desenvolvimento humano ministrados diretamente pelo Dr. Venceslau Andrade.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Perguntas e Respostas",
    desc: "Interação direta com os mentores. Um espaço de clareza, orientação e diálogo aberto com quem já percorreu o caminho.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Partilha Comunitária",
    desc: "Vitórias, desafios e crescimento conjunto. Um ambiente de responsabilidade mútua onde cada história inspira a próxima.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Alinhamento Prático",
    desc: "Aplicação dos princípios à vida real: família, liderança, negócios e propósito. Do ensino à ação concreta.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Timeline() {
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
      id="sessoes"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 bg-[#0a1a38] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F7931E]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-8 sm:mb-16">
          <div className="sm:hidden text-[11.5px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: '#e3c25b' }}>Cada Sessão</div>
          <span className="hidden sm:inline-block px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-sm font-medium tracking-wide uppercase mb-5">
            Cada Sessão
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            O que acontece em{" "}
            <span className="text-gradient-gold">cada encontro.</span>
          </h2>
          <p className="text-white/60 text-[15px] sm:text-lg max-w-xl mx-auto" style={{ lineHeight: 1.65 }}>
            Cada sessão é estruturada para maximizar o crescimento e o impacto na sua vida.
          </p>
        </div>

        {/* ─── MOBILE TIMELINE ─────────────────────────────── */}
        <div className="lg:hidden">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="anim opacity-0 translate-y-8 transition-all duration-700 flex"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gold gradient number node + connecting line */}
              <div className="flex flex-col items-center flex-shrink-0 w-[46px] mr-4">
                <div
                  className="w-[46px] h-[46px] rounded-full flex items-center justify-center flex-shrink-0 z-10"
                  style={{
                    background: 'linear-gradient(135deg,#e3c25b,#c9a227)',
                    boxShadow: '0 6px 18px rgba(201,162,39,0.3)',
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '19px',
                    fontWeight: 700,
                    color: '#060f22',
                  }}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 mt-2"
                    style={{ background: 'linear-gradient(180deg,rgba(201,162,39,0.5),rgba(201,162,39,0.08))' }}
                  />
                )}
              </div>
              {/* Content card */}
              <div className={`flex-1 ${i < steps.length - 1 ? "mb-4" : ""}`}>
                <div
                  className="rounded-2xl border"
                  style={{ padding: '16px 17px', background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.09)' }}
                >
                  <h4 className="text-white font-bold text-[16px] mb-0">{step.title}</h4>
                  <p className="text-[13.5px] leading-[1.55] mt-[6px]" style={{ color: '#a9b8d2' }}>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── DESKTOP TIMELINE ────────────────────────────── */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#F7931E]/50 via-[#F7931E]/20 to-transparent" />
          <div>
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`anim opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-12 ${
                  i < steps.length - 1 ? "mb-16" : ""
                } ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`w-5/12 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="glass rounded-2xl p-8 border border-white/10 hover:border-[#F7931E]/30 transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      <div className="w-10 h-10 rounded-xl bg-[#F7931E]/20 flex items-center justify-center text-[#F7931E]">
                        {step.icon}
                      </div>
                      <span className="text-[#F7931E] font-bold text-sm tracking-widest">{step.number}</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/60 text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-[#F7931E] border-4 border-[#0a1a38] shadow-lg shadow-[#F7931E]/30 relative z-10" />
                </div>
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
