"use client";

import { useEffect, useRef } from "react";

const features = [
  { icon: "📅", title: "Todas as Quintas-Feiras", desc: "Encontros semanais regulares para crescimento contínuo e consistente." },
  { icon: "💻", title: "Transmissão Privada", desc: "Acesso global online, sem barreiras geográficas (Zoom & YouTube)." },
  { icon: "⏱️", title: "90 Minutos", desc: "Sessões intensas e focadas, respeitando o seu tempo e agenda." },
  { icon: "🌍", title: "Comunidade Internacional", desc: "Conecte-se com centenas de líderes de Portugal, Angola, Brasil e Dubai." },
  { icon: "🤝", title: "Interação Direta", desc: "Acesso direto aos mentores em cada sessão ao vivo." },
  { icon: "📖", title: "Ensino com Princípios", desc: "Conteúdo sólido fundamentado em princípios bíblicos e de liderança." },
  { icon: "🚀", title: "Crescimento Contínuo", desc: "Um processo progressivo de desenvolvimento pessoal e espiritual." },
];

export default function ComoFunciona() {
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
      id="como-funciona"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-b from-[#0a1a38] to-[#060f22] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />
      <div className="hidden sm:block absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-[#F7931E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simples. <span className="text-gradient-gold">Consistente. Transformador.</span>
          </h2>
          <p className="hidden sm:block text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Tudo o que precisa de saber para começar a participar no Fellowship Code V.
          </p>
        </div>

        {/* Mobile stats: 3 células douradas (referência Designer) */}
        <div className="sm:hidden anim opacity-0 translate-y-8 transition-all duration-700 delay-100 grid grid-cols-3 gap-[9px] mt-6 mb-[14px]">
          {[
            { big: '18h', label: 'Portugal', sub: '5ª feiras' },
            { big: '90',  label: 'Minutos',  sub: 'Por sessão' },
            { big: '∞',   label: 'Crescimento', sub: 'Contínuo' },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center rounded-[14px]"
              style={{ padding: '16px 10px', background: 'rgba(201,162,39,0.08)', border: '1px solid rgba(201,162,39,0.2)' }}
            >
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', fontWeight: 700, color: '#e3c25b', lineHeight: 1 }}>{s.big}</div>
              <div className="mt-[5px] text-[12px] font-bold text-white">{s.label}</div>
              <div className="text-[11px]" style={{ color: '#8da0bd' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Desktop stats: big gradient card */}
        <div className="hidden sm:block anim opacity-0 translate-y-8 transition-all duration-700 delay-100 mb-12">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e3a6e]/50 to-[#122752]/50 border border-[#F7931E]/20 p-8 md:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F7931E]/10 rounded-full blur-3xl" />
            <div className="relative z-10 grid grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F7931E] mb-2">18h</div>
                <div className="text-white font-semibold text-base">Portugal</div>
                <div className="text-white/50 text-sm mt-1 leading-snug">Todas as 5ª feiras</div>
              </div>
              <div className="border-x border-white/10 flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F7931E] mb-2">90</div>
                <div className="text-white font-semibold text-base">Minutos</div>
                <div className="text-white/50 text-sm mt-1 leading-snug">Por sessão</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F7931E] mb-2">∞</div>
                <div className="text-white font-semibold text-base">Crescimento</div>
                <div className="text-white/50 text-sm mt-1 leading-snug">Contínuo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid — 1 col on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`anim opacity-0 translate-y-8 transition-all duration-700 ${i >= 6 ? 'hidden sm:block' : ''}`}
              style={{ transitionDelay: `${(i + 2) * 60}ms` }}
            >
              <div className="group p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F7931E]/40 hover:bg-[#F7931E]/5 transition-all duration-300 flex items-start gap-3 sm:flex-col sm:items-start sm:gap-0">
                {/* Mobile: 44×44 chip; sm+: plain emoji above */}
                <div className="flex-shrink-0 w-11 h-11 rounded-[11px] bg-[#F7931E]/10 border border-[#F7931E]/20 flex items-center justify-center text-lg leading-none sm:w-auto sm:h-auto sm:rounded-none sm:bg-transparent sm:border-0 sm:text-3xl sm:mb-4">
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm group-hover:text-[#F7931E] transition-colors leading-snug mb-1 sm:mb-0">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 sm:text-white/50 text-[13px] sm:text-xs leading-relaxed sm:mt-2">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
