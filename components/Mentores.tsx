"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Mentores() {
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
      id="mentores"
      ref={sectionRef}
      className="relative py-12 sm:py-20 md:py-32 bg-gradient-to-b from-[#060f22] to-[#0a1a38] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />
      <div className="hidden sm:block absolute top-1/2 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#F7931E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-6 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
            Os Mentores
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Conheça quem vai{" "}
            <span className="text-gradient-gold">guiar o seu crescimento.</span>
          </h2>
        </div>

        {/* Dr. Venceslau */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-100 mb-6 sm:mb-16">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Images — simplified for mobile */}
            <div className="relative pb-4 sm:pb-6">
              {/* Mobile: single featured image */}
              <div className="block sm:hidden relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/mentor3.webp"
                  alt="Dr. Venceslau Andrade"
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f22]/50 to-transparent" />
              </div>
              {/* Tablet/Desktop: grid layout */}
              <div className="hidden sm:grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/images/mentor3.webp"
                    alt="Dr. Venceslau Andrade"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 40vw, 30vw"
                  />
                </div>
                <div className="space-y-3 pt-6">
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <Image
                      src="/images/mentor1.webp"
                      alt="Dr. Venceslau Andrade"
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 20vw, 15vw"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <Image
                      src="/images/mentor2.webp"
                      alt="Dr. Venceslau Andrade e Prof. Vaumara"
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 20vw, 15vw"
                    />
                  </div>
                </div>
              </div>
              {/* Name badge */}
              <div className="absolute bottom-0 left-3 sm:left-4 glass rounded-xl px-4 sm:px-5 py-2 sm:py-3 border border-[#F7931E]/30">
                <p className="text-[#F7931E] font-bold text-xs sm:text-sm">Dr. Venceslau Andrade</p>
                <p className="text-white/50 text-xs">Mentor Internacional</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  Dr. Venceslau Andrade
                </h3>
                <p className="text-[#F7931E] font-medium text-sm sm:text-base">
                  Mentor Internacional · Líder · Empresário · Fundador da CODE V Leadership School
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
                <p>
                  Ao longo dos anos tem desenvolvido líderes, empreendedores e organizações em
                  diferentes países, ajudando pessoas a alinhar propósito, liderança, identidade e
                  resultados.
                </p>
                <p className="hidden sm:block">
                  A sua abordagem única combina princípios espirituais sólidos com estratégias
                  práticas de desenvolvimento humano, criando um ambiente de transformação genuína.
                </p>
                <p className="text-white font-medium">
                  A sua missão é formar líderes que sejam uma resposta para esta geração.
                </p>
              </div>
              {/* Tags — max 3 visible on mobile */}
              <div className="flex flex-wrap gap-2">
                {["Liderança", "Propósito", "Empreendedorismo", "Fé", "Desenvolvimento Humano"].map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-2.5 sm:px-3 py-1 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/20 text-[#F7931E] text-xs font-medium ${i >= 3 ? "hidden sm:inline-block" : ""}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold my-8 sm:my-16" />

        {/* Prof. Vaumara */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-200">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content — order-2 on mobile (image first) */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  Prof. Vaumara Andrade
                </h3>
                <p className="text-[#F7931E] font-medium text-sm sm:text-base">
                  Mentora · Educadora · Palestrante · Líder
                </p>
              </div>
              <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
                <p>
                  Dedica-se ao desenvolvimento humano, fortalecimento da identidade, crescimento
                  emocional e formação de pessoas com propósito.
                </p>
                <p className="hidden sm:block">
                  Através do ensino, mentoria e liderança, tem impactado vidas e ajudado pessoas a
                  descobrirem o seu valor, potencial e propósito em diferentes contextos e culturas.
                </p>
                <p className="text-white font-medium">
                  A sua presença no Fellowship traz profundidade, cuidado e perspetiva única ao
                  processo de crescimento de cada participante.
                </p>
              </div>
              {/* Tags — max 3 visible on mobile */}
              <div className="flex flex-wrap gap-2">
                {["Desenvolvimento Humano", "Identidade", "Educação", "Mentoria", "Liderança"].map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-2.5 sm:px-3 py-1 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/20 text-[#F7931E] text-xs font-medium ${i >= 3 ? "hidden sm:inline-block" : ""}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Images — order-1 on mobile */}
            <div className="relative pb-6 sm:pb-8 order-1 lg:order-2">
              {/* Mobile: single featured image */}
              <div className="block sm:hidden relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/mentor4.webp"
                  alt="Prof. Vaumara Andrade"
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060f22]/50 to-transparent" />
              </div>
              {/* Tablet/Desktop: grid layout */}
              <div className="hidden sm:grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <Image
                      src="/images/mentor4.webp"
                      alt="Prof. Vaumara Andrade"
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 20vw, 15vw"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <Image
                      src="/images/mentor5.webp"
                      alt="Fellowship Code V"
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 20vw, 15vw"
                    />
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] pt-8">
                  <Image
                    src="/images/mentor4.webp"
                    alt="Prof. Vaumara Andrade"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 20vw, 15vw"
                  />
                </div>
              </div>
              {/* Name badge */}
              <div className="absolute bottom-0 right-2 sm:right-4 glass rounded-xl px-4 sm:px-5 py-2 sm:py-3 border border-[#F7931E]/30">
                <p className="text-[#F7931E] font-bold text-xs sm:text-sm">Prof. Vaumara Andrade</p>
                <p className="text-white/50 text-xs">Mentora & Educadora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
