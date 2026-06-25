"use client";

import { useEffect, useRef } from "react";

const benefits = [
  { title: "Crescimento Espiritual Contínuo", desc: "Construa raízes profundas na sua fé e uma relação inabalável com Deus." },
  { title: "Clareza de Propósito", desc: "Transforme intenções em execução e alinhe o seu chamado com resultados reais." },
  { title: "Comunidade de Líderes", desc: "Junte-se a centenas de líderes internacionais que elevam o seu nível." },
  { title: "Desenvolvimento Pessoal", desc: "Ferramentas práticas para crescer em todas as áreas da vida." },
  { title: "Networking Estratégico", desc: "Construa relações de valor com líderes e empreendedores." },
  { title: "Mentoria Prática", desc: "Orientação direta de mentores com experiência comprovada." },
  { title: "Sessões Semanais ao Vivo", desc: "Consistência que gera transformação real e duradoura." },
  { title: "Acompanhamento Contínuo", desc: "Não está sozinho. A comunidade caminha consigo." },
  { title: "Ambiente de Responsabilidade", desc: "Um espaço que o desafia a crescer e a cumprir o que se propõe." },
  { title: "Desenvolvimento da Liderança", desc: "Assuma a sua posição de influência na família, nos negócios e na sociedade." },
];

export default function Beneficios() {
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
      id="beneficios"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-32 bg-[#060f22] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#1e3a6e]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-10 sm:mb-12">
          <div className="sm:hidden text-[11.5px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: '#e3c25b' }}>Benefícios</div>
          <span className="hidden sm:inline-block px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-sm font-medium tracking-wide uppercase mb-5">
            Benefícios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            O que vai <span className="text-gradient-gold">ganhar.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-lg sm:max-w-xl mx-auto leading-relaxed">
            Cada sessão é um passo estratégico em direção à liderança, ao propósito e à sua melhor versão.
          </p>
        </div>

        {/* Benefits grid — 1 col on mobile, 2 on sm, 3 on lg, 5 on xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[14px] sm:gap-4">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="anim opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div
                className="group h-full flex items-start gap-[13px] sm:p-5 sm:rounded-2xl sm:bg-white/5 sm:border sm:border-white/10 sm:hover:border-[#F7931E]/40 sm:hover:bg-gradient-to-br sm:hover:from-[#F7931E]/10 sm:hover:to-transparent transition-all duration-300"
                style={{ padding: '16px', borderRadius: '15px', background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Gold circle chip with ✦ */}
                <div
                  className="flex-shrink-0 flex items-center justify-center font-extrabold mt-[1px]"
                  style={{ width: '26px', height: '26px', borderRadius: '50%', fontSize: '13px', color: '#060f22', background: 'linear-gradient(135deg,#e3c25b,#c9a227)', flexShrink: 0 }}
                >
                  ✦
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-[15px] sm:text-sm group-hover:text-[#F7931E] transition-colors leading-snug mb-0" style={{ marginTop: '1px' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-[13px] leading-[1.5] mt-1" style={{ color: '#a3b2cc' }}>{benefit.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
