"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const WHATSAPP_LINK = "https://chat.whatsapp.com/GMEOqEQunosH0Cr5xnjiRS";

export default function CTAFinal() {
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
      id="entrar"
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mentor2.webp"
          alt="Fellowship Code V"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#060f22]/97 via-[#0a1a38]/95 to-[#1e3a6e]/90" />
      </div>

      {/* Decorative */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F7931E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#F7931E] animate-pulse flex-shrink-0" />
          <span className="text-[#F7931E] text-xs sm:text-sm font-medium tracking-wide uppercase">
            Próximo Encontro: Quinta-Feira
          </span>
        </div>

        {/* Title */}
        <h2 className="anim opacity-0 translate-y-8 transition-all duration-700 delay-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight mb-4 sm:mb-5">
          Está na altura de caminhar com pessoas que o{" "}
          <span className="text-gradient-gold">desafiam a crescer.</span>
        </h2>

        {/* Text */}
        <p className="anim opacity-0 translate-y-8 transition-all duration-700 delay-200 text-white/60 sm:text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-sm sm:max-w-2xl mx-auto">
          O próximo encontro pode ser o ponto de viragem para a sua liderança e propósito.
          <span className="hidden sm:inline"> Junte-se a uma comunidade global de líderes e empreendedores.</span>
        </p>

        {/* CTA — full width on mobile */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#F7931E] text-white font-bold text-base sm:text-lg hover:bg-[#e07010] transition-all duration-300 shadow-2xl hover:shadow-[#F7931E]/40 hover:scale-105 glow-gold"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            RESERVAR O MEU LUGAR NA SESSÃO
          </a>
        </div>

        {/* Trust indicators */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-2.5 sm:gap-4 mt-6 sm:mt-8">
          {[
            { icon: "🔒", text: "Grupo Oficial Verificado" },
            { icon: "✓", text: "Transmissão Privada" },
            { icon: "🌍", text: "Comunidade Internacional" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5 sm:gap-2 text-white/50 text-xs sm:text-sm">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
