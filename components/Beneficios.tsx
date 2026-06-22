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
      className="relative py-12 sm:py-20 md:py-32 bg-[#060f22] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#1e3a6e]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
            Benefícios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            O que vai <span className="text-gradient-gold">ganhar.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Cada sessão é um passo estratégico em direção à liderança, ao propósito e à sua melhor versão.
          </p>
        </div>

        {/* Benefits grid — 2 col on mobile, 2 on tablet, 3 on desktop, 5 on xl */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-4">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="anim opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="group h-full p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F7931E]/40 hover:bg-gradient-to-br hover:from-[#F7931E]/10 hover:to-transparent transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#F7931E] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 group-hover:text-[#F7931E] transition-colors leading-tight line-clamp-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/40 text-xs leading-tight line-clamp-1 sm:line-clamp-2">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
