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
      className="relative py-12 sm:py-20 md:py-32 bg-gradient-to-b from-[#0a1a38] to-[#060f22] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />
      <div className="hidden sm:block absolute top-0 right-0 w-64 md:w-80 h-64 md:h-80 bg-[#F7931E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simples. <span className="text-gradient-gold">Consistente. Transformador.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Tudo o que precisa de saber para começar a participar no Fellowship Code V.
          </p>
        </div>

        {/* Main feature card */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-100 mb-8 sm:mb-12">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e3a6e]/50 to-[#122752]/50 border border-[#F7931E]/20 p-6 sm:p-8 md:p-10">
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#F7931E]/10 rounded-full blur-3xl" />
            <div className="relative z-10 grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#F7931E] mb-2 sm:mb-2">18h</div>
                <div className="text-white font-semibold text-xs sm:text-base">Portugal</div>
                <div className="text-white/50 text-[10px] sm:text-sm mt-1 sm:mt-1 leading-snug">Todas as 5ª feiras</div>
              </div>
              <div className="border-x border-white/10 flex flex-col items-center">
                <div className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#F7931E] mb-2 sm:mb-2">90</div>
                <div className="text-white font-semibold text-xs sm:text-base">Minutos</div>
                <div className="text-white/50 text-[10px] sm:text-sm mt-1 sm:mt-1 leading-snug">Por sessão</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl sm:text-3xl md:text-4xl font-bold text-[#F7931E] mb-2 sm:mb-2">∞</div>
                <div className="text-white font-semibold text-xs sm:text-base">Crescimento</div>
                <div className="text-white/50 text-[10px] sm:text-sm mt-1 sm:mt-1 leading-snug">Contínuo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid — 2 cols on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="anim opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${(i + 2) * 60}ms` }}
            >
              <div className="group h-full p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F7931E]/40 hover:bg-[#F7931E]/5 transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-2 group-hover:text-[#F7931E] transition-colors leading-snug">
                  {feature.title}
                </h3>
                <p className="text-white/50 text-[10px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-none">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
