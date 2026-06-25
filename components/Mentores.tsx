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
      className="relative py-16 sm:py-20 md:py-32 bg-gradient-to-b from-[#060f22] to-[#0a1a38] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />
      <div className="hidden sm:block absolute top-1/2 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#F7931E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-8 sm:mb-16">
          <div className="sm:hidden text-[11.5px] font-bold tracking-[0.1em] uppercase mb-3" style={{ color: '#e3c25b' }}>Os Mentores</div>
          <span className="hidden sm:inline-block px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-sm font-medium tracking-wide uppercase mb-5">
            Os Mentores
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Conheça quem vai{" "}
            <span className="text-gradient-gold">guiar o seu crescimento.</span>
          </h2>
        </div>

        {/* Mobile: Designer-style mentor cards (1-col, 280px photo overlay) */}
        <div className="sm:hidden flex flex-col gap-5 mb-8">
          {[
            {
              img: '/images/mentor3.webp',
              name: 'Dr. Venceslau Andrade',
              role: 'Mentor Internacional',
              bio: 'Fundador da CODE V Leadership School. Combina princípios espirituais sólidos com estratégias práticas de desenvolvimento humano. A sua missão é formar líderes que sejam uma resposta para esta geração.',
              tags: ['Liderança', 'Propósito', 'Empreendedorismo'],
              objPos: 'center 18%',
            },
            {
              img: '/images/mentor-vaumara-mobile.jpg',
              name: 'Prof. Vaumara Andrade',
              role: 'Mentora & Educadora',
              bio: 'Educadora e Mentora dedicada ao desenvolvimento humano, fortalecimento da identidade e formação de pessoas com propósito. A sua presença no Fellowship traz profundidade e perspetiva única a cada participante.',
              tags: ['Desenvolvimento Humano', 'Identidade', 'Educação'],
              objPos: 'center 22%',
            },
          ].map((m, i) => (
            <div
              key={m.name}
              className="anim opacity-0 translate-y-8 transition-all duration-700 overflow-hidden"
              style={{
                borderRadius: '22px',
                border: '1px solid rgba(201,162,39,0.2)',
                background: 'linear-gradient(180deg,#0b1b39,#0a1730)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Photo with gradient overlay + name at bottom */}
              <div className="relative" style={{ height: '280px' }}>
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: m.objPos }}
                  sizes="100vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(180deg,transparent ${i === 1 ? '58%' : '45%'},rgba(10,23,48,0.95))` }}
                />
                <div className="absolute left-5 bottom-4 right-5">
                  <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', fontWeight: 700, color: '#fff' }}>
                    {m.name}
                  </div>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '0.04em', color: '#e3c25b' }}>
                    {m.role}
                  </div>
                </div>
              </div>
              {/* Bio + tags */}
              <div className="p-5">
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#b6c3da' }}>{m.bio}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {m.tags.map(tag => (
                    <span
                      key={tag}
                      style={{ padding: '7px 13px', borderRadius: '100px', fontSize: '12px', fontWeight: 600, color: '#e3c25b', background: 'rgba(201,162,39,0.12)', border: '1px solid rgba(201,162,39,0.28)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: original 2-col grid layout (sm+) */}
        {/* Dr. Venceslau */}
        <div className="hidden sm:block anim opacity-0 translate-y-8 transition-all duration-700 delay-100 mb-8 sm:mb-16">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative pb-8 sm:pb-6">
              <div className="hidden sm:grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image src="/images/mentor3.webp" alt="Dr. Venceslau Andrade" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 40vw, 30vw" />
                </div>
                <div className="space-y-3 pt-6">
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <Image src="/images/mentor1.webp" alt="Dr. Venceslau Andrade" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 20vw, 15vw" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <Image src="/images/mentor2.webp" alt="Dr. Venceslau Andrade e Prof. Vaumara" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 20vw, 15vw" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-4 glass rounded-xl px-5 py-3 border border-[#F7931E]/30">
                <p className="text-[#F7931E] font-bold text-sm">Dr. Venceslau Andrade</p>
                <p className="text-white/50 text-xs">Mentor Internacional</p>
              </div>
            </div>
            <div className="space-y-5 sm:space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Dr. Venceslau Andrade</h3>
                <p className="text-[#F7931E] font-medium text-sm sm:text-base leading-relaxed">Mentor Internacional · Líder · Empresário · Fundador da CODE V Leadership School</p>
              </div>
              <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
                <p>Ao longo dos anos tem desenvolvido líderes, empreendedores e organizações em diferentes países, ajudando pessoas a alinhar propósito, liderança, identidade e resultados.</p>
                <p>A sua abordagem única combina princípios espirituais sólidos com estratégias práticas de desenvolvimento humano, criando um ambiente de transformação genuína.</p>
                <p className="text-white font-medium">A sua missão é formar líderes que sejam uma resposta para esta geração.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Liderança", "Propósito", "Empreendedorismo", "Fé", "Desenvolvimento Humano"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/20 text-[#F7931E] text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold my-8 sm:my-16" />

        {/* Prof. Vaumara — desktop only */}
        <div className="hidden sm:block anim opacity-0 translate-y-8 transition-all duration-700 delay-200">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">Prof. Vaumara Andrade</h3>
                <p className="text-[#F7931E] font-medium text-sm sm:text-base leading-relaxed">Mentora · Educadora · Palestrante · Líder</p>
              </div>
              <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
                <p>Dedica-se ao desenvolvimento humano, fortalecimento da identidade, crescimento emocional e formação de pessoas com propósito.</p>
                <p>Através do ensino, mentoria e liderança, tem impactado vidas e ajudado pessoas a descobrirem o seu valor, potencial e propósito em diferentes contextos e culturas.</p>
                <p className="text-white font-medium">A sua presença no Fellowship traz profundidade, cuidado e perspetiva única ao processo de crescimento de cada participante.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Desenvolvimento Humano", "Identidade", "Educação", "Mentoria", "Liderança"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/20 text-[#F7931E] text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
            <div className="relative pb-10 sm:pb-8 order-1 lg:order-2">
              <div className="hidden sm:grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <Image src="/images/mentor4.webp" alt="Prof. Vaumara Andrade" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 20vw, 15vw" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square">
                    <Image src="/images/mentor5.webp" alt="Fellowship Code V" fill className="object-cover object-center hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 20vw, 15vw" />
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] pt-8">
                  <Image src="/images/mentor4.webp" alt="Prof. Vaumara Andrade" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 20vw, 15vw" />
                </div>
              </div>
              <div className="absolute bottom-0 right-4 glass rounded-xl px-5 py-3 border border-[#F7931E]/30">
                <p className="text-[#F7931E] font-bold text-sm">Prof. Vaumara Andrade</p>
                <p className="text-white/50 text-xs">Mentora & Educadora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
