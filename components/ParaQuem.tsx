"use client";

import { useEffect, useRef } from "react";

const audience = [
  {
    icon: "👑",
    svgIcon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Líderes",
    desc: "Que procuram elevar a sua influência e liderar com princípios inegociáveis.",
  },
  {
    icon: "🚀",
    svgIcon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: "Empreendedores",
    desc: "Que desejam construir negócios sólidos, rentáveis e alinhados com o Reino.",
  },
  {
    icon: "⛪",
    svgIcon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Pastores",
    desc: "Que precisam de um ambiente seguro para recarregar, aprender e crescer.",
  },
  {
    icon: "💼",
    svgIcon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: "Profissionais",
    desc: "Que recusam a mediocridade e procuram a excelência no mercado de trabalho.",
  },
  {
    icon: "🌱",
    svgIcon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/>
      </svg>
    ),
    title: "Jovens em Crescimento",
    desc: "Que desejam construir uma base sólida de identidade e propósito.",
  },
  {
    icon: "🎯",
    svgIcon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: "Clareza de Propósito",
    desc: "Quem procura direção clara para a sua vida, família e missão.",
  },
  {
    icon: "🏆",
    svgIcon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: "Desenvolvimento",
    desc: "Quem deseja desenvolver capacidades de liderança transformacional.",
  },
  {
    icon: "🙏",
    svgIcon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: "Crescimento Espiritual",
    desc: "Quem deseja aprofundar a sua fé e relação com Deus.",
  },
  {
    icon: "🌍",
    svgIcon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: "Pessoas de Visão",
    desc: "Quem acredita que foi chamado para impactar o mundo ao seu redor.",
  },
  {
    icon: "⭐",
    svgIcon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Chamados para Mais",
    desc: "Quem sente que há mais para a sua vida e deseja descobrir o quê.",
  },
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

        {/* Cards Grid — 1 col mobile, 2 sm, 3 md, 5 xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-[14px] sm:gap-4">
          {audience.map((item, i) => (
            <div
              key={item.title}
              className="anim opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {/* Mobile card */}
              <div
                className="sm:hidden flex items-start gap-[14px]"
                style={{ padding: '17px 16px', borderRadius: '18px', background: 'linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div
                  className="flex items-center justify-center text-[#c9a227]"
                  style={{ flexShrink: 0, width: '46px', height: '46px', borderRadius: '13px', background: 'rgba(201,162,39,0.14)', border: '1px solid rgba(201,162,39,0.28)' }}
                >
                  {item.svgIcon}
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

        {/* Bottom quote */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-500 mt-10 sm:mt-12">
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
