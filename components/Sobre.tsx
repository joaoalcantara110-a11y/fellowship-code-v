"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Sobre() {
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
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".anim");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="relative py-12 sm:py-20 md:py-32 bg-[#060f22] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/30 to-transparent" />
      <div className="hidden sm:block absolute top-1/2 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#1e3a6e]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left: Image — order-2 on mobile so text comes first */}
          <div className="anim opacity-0 translate-y-8 transition-all duration-700 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
              <Image
                src="/images/mentor1.webp"
                alt="Dr. Venceslau Andrade"
                fill
                className="object-cover object-top sm:object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060f22]/60 to-transparent" />
            </div>
            {/* Floating card — repositioned for mobile */}
            <div className="absolute -bottom-2 sm:-bottom-6 right-0 sm:-right-4 lg:-right-6 glass rounded-2xl p-3 sm:p-5 w-[calc(100%-1rem)] sm:max-w-xs shadow-2xl border border-[#F7931E]/20 mx-2 sm:mx-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F7931E]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7931E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Comunidade Internacional</p>
                  <p className="text-white/50 text-xs">Líderes e Empreendedores</p>
                </div>
              </div>
              <p className="text-white/70 text-xs leading-relaxed">
                Mais de 400 pessoas de Portugal, Angola, Brasil, Dubai e outras nações unidas pelo mesmo propósito.
              </p>
            </div>
          </div>

          {/* Right: Content — order-1 on mobile */}
          <div className="space-y-5 sm:space-y-6 order-1 lg:order-2 pb-8 sm:pb-0">
            <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
                O Fellowship
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Uma comunidade para quem{" "}
                <span className="text-gradient-gold">deseja crescer.</span>
              </h2>
            </div>

            <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-4">
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                O <span className="text-white font-semibold">Fellowship Code V</span> é um espaço
                contínuo de comunhão, crescimento espiritual e alinhamento prático.
              </p>
              <p className="hidden sm:block text-white/70 text-base sm:text-lg leading-relaxed">
                Uma transmissão privada semanal onde líderes, empreendedores e visionários
                comprometidos com o Reino se conectam em tempo real com{" "}
                <span className="text-[#F7931E] font-semibold">Dr. Venceslau Andrade</span>,{" "}
                <span className="text-[#F7931E] font-semibold">Prof. Vaumara Andrade</span> e uma
                comunidade de pessoas com visão.
              </p>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-medium">
                Aqui não procuramos apenas motivação.{" "}
                <span className="text-white">Construímos transformação, resultados e legado.</span>
              </p>
            </div>

            {/* Values */}
            <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-300 grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              {[
                { icon: "✦", label: "Fé em Comunidade" },
                { icon: "✦", label: "Identidade Fortalecida" },
                { icon: "✦", label: "Propósito Realinhado" },
                { icon: "✦", label: "Crescimento Contínuo" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <span className="text-[#F7931E] text-base sm:text-lg flex-shrink-0">{item.icon}</span>
                  <span className="text-white/80 text-xs sm:text-sm font-medium leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
