"use client";

import { useEffect, useRef } from "react";

const audience = [
  { icon: "👑", title: "Líderes", desc: "Que procuram elevar a sua influência e liderar com princípios inegociáveis." },
  { icon: "🚀", title: "Empreendedores", desc: "Que desejam construir negócios sólidos, rentáveis e alinhados com o Reino." },
  { icon: "⛪", title: "Pastores", desc: "Que precisam de um ambiente seguro para recarregar, aprender e crescer." },
  { icon: "💼", title: "Profissionais", desc: "Que recusam a mediocridade e procuram a excelência no mercado de trabalho." },
  { icon: "🌱", title: "Jovens em Crescimento", desc: "Que desejam construir uma base sólida de identidade e propósito." },
  { icon: "🎯", title: "Clareza de Propósito", desc: "Quem procura direção clara para a sua vida, família e missão." },
  { icon: "🏆", title: "Desenvolvimento", desc: "Quem deseja desenvolver capacidades de liderança transformacional." },
  { icon: "🙏", title: "Crescimento Espiritual", desc: "Quem deseja aprofundar a sua fé e relação com Deus." },
  { icon: "🌍", title: "Pessoas de Visão", desc: "Quem acredita que foi chamado para impactar o mundo ao seu redor." },
  { icon: "⭐", title: "Chamados para Mais", desc: "Quem sente que há mais para a sua vida e deseja descobrir o quê." },
];

export default function ParaQuem() {
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
      id="para-quem"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-b from-[#060f22] to-[#0a1a38] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#F7931E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-10 sm:mb-12">
          <div className="sm:hidden text-[11.5px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: '#e3c25b' }}>Para Quem É</div>
          <span className="hidden sm:inline-block px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-sm font-medium tracking-wide uppercase mb-5">
            Para Quem É
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Esta comunidade é para <span className="text-gradient-gold">si.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-lg sm:max-w-2xl mx-auto leading-relaxed">
            <span className="sm:hidden">O ambiente desenhado para quem recusa a estagnação. Se acredita que o seu crescimento exige a comunidade certa, este é o seu lugar.</span>
            <span className="hidden sm:inline">O Fellowship Code V é o ambiente desenhado para quem recusa a estagnação. Se acredita que o seu crescimento exige a comunidade certa, este é o seu lugar.</span>
          </p>
        </div>

        {/* Cards Grid — mobile: 3 items, sm+: full grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
          {audience.map((item, i) => (
            <div
              key={item.title}
              className="anim opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Mobile card — Designer style (gold chip, gradient bg) */}
              <div
                className="sm:hidden flex items-start gap-[14px]"
                style={{ padding: '17px 16px', borderRadius: '18px', background: 'linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="flex items-center justify-center text-[22px] leading-none"
                  style={{ flexShrink: 0, width: '46px', height: '46px', borderRadius: '13px', background: 'rgba(201,162,39,0.14)', border: '1px solid rgba(201,162,39,0.28)' }}
                >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-bold leading-snug" style={{ margin: '2px 0 0', fontSize: '16px' }}>{item.title}</h4>
                  <p className="leading-[1.5]" style={{ margin: '5px 0 0', fontSize: '13.5px', color: '#a9b8d2' }}>{item.desc}</p>
                </div>
              </div>
              {/* Desktop card */}
              <div className="hidden sm:flex sm:flex-col sm:items-start group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F7931E]/40 hover:bg-[#F7931E]/5 transition-all duration-300 cursor-default h-full">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-sm group-hover:text-[#F7931E] transition-colors leading-snug mb-0">{item.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote — Mobile: Cormorant gold card | Desktop: glass card */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-8 sm:mt-12">
          {/* Mobile */}
          <div
            className="sm:hidden text-center"
            style={{ padding: '26px 22px', borderRadius: '20px', background: 'linear-gradient(135deg,rgba(201,162,39,0.14),rgba(201,162,39,0.04))', border: '1px solid rgba(201,162,39,0.28)' }}
          >
            <p style={{ margin: 0, fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontSize: '21px', lineHeight: 1.3, color: '#fff' }}>
              "Quem cresce sozinho vai mais rápido. Quem cresce em comunidade vai mais longe."
            </p>
          </div>
          {/* Desktop */}
          <div className="hidden sm:block text-center">
            <div className="inline-block glass rounded-2xl px-8 py-6 border border-[#F7931E]/20 max-w-2xl">
              <p className="text-white/80 text-lg italic leading-relaxed">
                "Quem cresce sozinho vai mais rápido.{" "}
                <span className="text-[#F7931E] font-semibold not-italic">
                  Quem cresce em comunidade vai mais longe.
                </span>"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
