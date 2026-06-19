"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const diferenciais = [
  {
    title: "Não é um curso",
    desc: "É uma comunidade viva com encontros semanais ao vivo, onde o crescimento acontece em tempo real.",
    icon: "🔴",
  },
  {
    title: "Não é apenas informação",
    desc: "É transformação prática. Cada sessão é desenhada para gerar mudança real na sua vida.",
    icon: "🔴",
  },
  {
    title: "Não é genérico",
    desc: "É personalizado. Você tem acesso direto aos mentores e à comunidade que o conhece pelo nome.",
    icon: "🔴",
  },
];

const diferenciais2 = [
  {
    title: "Crescimento com propósito",
    desc: "Cada sessão tem intenção clara: alinhar propósito, fortalecer identidade e desenvolver liderança.",
    icon: "✦",
  },
  {
    title: "Comunidade de visão",
    desc: "Você é influenciado pelo ambiente em que está. Aqui, o ambiente é de crescimento e excelência.",
    icon: "✦",
  },
  {
    title: "Princípios que duram",
    desc: "Não ensinamos tendências. Ensinamos princípios que resistem ao tempo e geram resultados duradouros.",
    icon: "✦",
  },
];

export default function PorqueDiferente() {
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
      id="diferente"
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 bg-[#0a1a38] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />
      <div className="hidden sm:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-[#F7931E]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
            Por Que É Diferente
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Não é apenas mais <span className="text-gradient-gold">um grupo.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Num mundo saturado de conteúdo, poucas pessoas têm acesso a uma comunidade que combina crescimento espiritual profundo, alinhamento prático e uma rede internacional de líderes com propósito.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left */}
          <div className="space-y-5 sm:space-y-6">
            <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <h3 className="text-white/40 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                O que não é
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {diferenciais.map((d, i) => (
                  <div
                    key={d.title}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-red-500/5 border border-red-500/10"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                    <div>
                      <p className="text-white/60 font-medium text-xs sm:text-sm">{d.title}</p>
                      <p className="text-white/40 text-xs mt-0.5 sm:mt-1">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <h3 className="text-[#F7931E]/70 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4">
                O que é
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {diferenciais2.map((d, i) => (
                  <div
                    key={d.title}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#F7931E]/5 border border-[#F7931E]/15"
                    style={{ transitionDelay: `${(i + 3) * 60}ms` }}
                  >
                    <span className="text-[#F7931E] mt-0.5 flex-shrink-0">✦</span>
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">{d.title}</p>
                      <p className="text-white/50 text-xs mt-0.5 sm:mt-1">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image — hidden on mobile to avoid overflow, shown from sm */}
          <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-200 hidden sm:block">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/mentor5.webp"
                alt="Fellowship Code V"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a38]/80 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#F7931E]/20">
                  <p className="text-white font-semibold text-sm sm:text-lg mb-1 sm:mb-2">
                    O Fellowship Code V foi criado para quem recusa a mediocridade e deseja crescer com propósito, princípios e comunidade.
                  </p>
                  <p className="text-white/60 text-xs sm:text-sm">
                    Mais de 400 vidas impactadas. Liderança, propósito e transformação real.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only quote card */}
          <div className="sm:hidden anim opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="glass rounded-xl p-5 border border-[#F7931E]/20">
              <p className="text-white font-semibold text-sm mb-2">
                O Fellowship Code V foi criado para quem recusa a mediocridade e deseja crescer com propósito, princípios e comunidade.
              </p>
              <p className="text-white/60 text-xs">
                Mais de 400 vidas impactadas. Liderança, propósito e transformação real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
