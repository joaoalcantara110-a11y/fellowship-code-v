"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    quote: "Foi algo sobrenatural. Ambientes determinam destino 🙏",
    highlight: "Ambientes determinam destino",
    initial: "M",
    name: "Miguel Sensato",
    role: "Líder e Participante",
  },
  {
    quote: "Simplesmente incrível. Rumo a 1 milhão de líderes com propósito.",
    highlight: "1 milhão de líderes",
    initial: "C",
    name: "Carla Roberta",
    role: "Membro Fellowship",
  },
  {
    quote: "Uma palavra muito impactante, gratidão Dr. Venceslau 👏👏👏👏",
    highlight: "Muito impactante",
    initial: "Â",
    name: "Ângelo Da Cruz",
    role: "Participante Fellowship",
  },
  {
    quote: "Foi poderoso. Louvado seja o nome do Senhor. Que palavra. My God 🙏🙏👏👏",
    highlight: "Foi poderoso",
    initial: "M",
    name: "Miguel Sensato",
    role: "Participante Fellowship",
  },
  {
    quote: '"Fala uma palavra para mim Senhor." Minha oração antes de entrar no nosso encontro. Estou a ser profundamente ministrada.',
    highlight: "Profundamente ministrada",
    initial: "N",
    name: "Naomi",
    role: "Participante Fellowship",
  },
  {
    quote: "A diferença entre o homem que edificou a sua casa sobre a areia e o que edificou sobre a rocha não está no que construíram. Mas sim onde decidiram construir.",
    highlight: "Onde decidiram construir",
    initial: "A",
    name: "Participante",
    role: "Fellowship Code V",
  },
  {
    quote: "Meu Deus. Que palavra. Dinheiro nenhum no mundo paga receber uma palavra destas.",
    highlight: "Dinheiro nenhum paga",
    initial: "M",
    name: "Membro",
    role: "Comunidade Fellowship",
  },
  {
    quote: "Jesus, quando multiplicou os pães e os peixes, não pediu mais. Agradeceu. A gratidão gera multiplicação.",
    highlight: "A gratidão gera multiplicação",
    initial: "J",
    name: "Participante",
    role: "Fellowship Code V",
  },
  {
    quote: "Dinheiro deve estar nas mãos. Nunca no coração.",
    highlight: "Nunca no coração",
    initial: "D",
    name: "Membro",
    role: "Comunidade Fellowship",
  },
];

export default function Testemunhos() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const goTo = useCallback((i: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActive(i);
      setIsAnimating(false);
    }, 250);
  }, []);

  const next = useCallback(() => goTo((active + 1) % testimonials.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + testimonials.length) % testimonials.length), [active, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 5500);
    return () => clearInterval(interval);
  }, [next]);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <section
      id="testemunhos"
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 bg-[#060f22] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1e3a6e/20_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#F7931E]/10 border border-[#F7931E]/30 text-[#F7931E] text-xs sm:text-sm font-medium tracking-wide uppercase mb-4">
            Testemunhos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            O que dizem os <span className="text-gradient-gold">participantes.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Palavras reais de pessoas que vivem o Fellowship Code V.
          </p>
        </div>

        {/* Main testimonial — swipe enabled */}
        <div className="anim opacity-0 translate-y-8 transition-all duration-700 delay-100 max-w-4xl mx-auto mb-6 sm:mb-12">
          <div
            className={`glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-[#F7931E]/20 transition-all duration-300 select-none ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Quote mark */}
            <div className="text-[#F7931E]/20 text-6xl sm:text-8xl font-serif leading-none mb-2 sm:mb-4 select-none">"</div>

            <blockquote className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-light mb-6 sm:mb-8">
              {testimonials[active].quote}
            </blockquote>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#F7931E] to-[#e07010] flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                {testimonials[active].initial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm sm:text-base truncate">{testimonials[active].name}</p>
                <p className="text-white/50 text-xs sm:text-sm">{testimonials[active].role}</p>
              </div>
              <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-[#F7931E]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Prev/Next buttons */}
          <div className="flex items-center justify-between mt-4 sm:mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F7931E]/20 transition-colors"
              aria-label="Testemunho anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots navigation */}
            <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap max-w-xs">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Testemunho ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? "w-6 sm:w-8 h-2 sm:h-3 bg-[#F7931E]" : "w-2 sm:w-3 h-2 sm:h-3 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#F7931E]/20 transition-colors"
              aria-label="Próximo testemunho"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* All testimonials grid — hidden on mobile (carousel above is enough), 2 tablet, 3 desktop */}
        <div className="hidden sm:grid anim opacity-0 translate-y-8 transition-all duration-700 delay-300 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`text-left p-4 sm:p-6 rounded-2xl border transition-all duration-300 ${
                i === active
                  ? "bg-[#F7931E]/10 border-[#F7931E]/40 shadow-lg shadow-[#F7931E]/10"
                  : "bg-white/5 border-white/10 hover:border-[#F7931E]/20"
              }`}
            >
              <div className="text-[#F7931E] text-2xl sm:text-3xl font-serif leading-none mb-2 sm:mb-3 select-none">"</div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-3">{t.quote}</p>
              <div className="flex items-center gap-2 mt-3 sm:mt-4">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F7931E]/20 flex items-center justify-center text-[#F7931E] text-xs font-bold flex-shrink-0">
                  {t.initial}
                </div>
                <span className="text-white/50 text-xs truncate">{t.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
