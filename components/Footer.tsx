"use client";

import Image from "next/image";

const WHATSAPP_LINK = "https://chat.whatsapp.com/GMEOqEQunosH0Cr5xnjiRS";

export default function Footer() {
  return (
    <footer className="relative bg-[#040c1e] border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7931E]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-start">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo1.png"
              alt="Fellowship Global"
              width={200}
              height={70}
              className="h-10 sm:h-12 w-auto object-contain mb-4 sm:mb-6"
            />
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-md mb-4 sm:mb-6">
              Uma comunidade para quem acredita que crescimento, propósito e comunhão caminham
              juntos.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Comunhão", "Crescimento", "Alinhamento", "Propósito", "Liderança"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <p className="text-white/70 font-medium text-sm sm:text-base">Faça parte da comunidade</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full bg-[#F7931E] text-white font-semibold hover:bg-[#e07010] transition-all duration-300 shadow-lg hover:shadow-[#F7931E]/30 hover:scale-105 text-sm"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Reservar o meu lugar
            </a>
            <div className="flex gap-4 sm:gap-6 mt-1 sm:mt-2">
              {[
                { label: "Quintas-Feiras", sub: "Semanalmente" },
                { label: "Acesso Global", sub: "Transmissão Privada" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-[#F7931E] font-bold text-xs sm:text-sm">{item.label}</p>
                  <p className="text-white/40 text-xs">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-white/30 text-xs sm:text-sm">
            © {new Date().getFullYear()} Fellowship Global · CODE V Leadership School
          </p>
          <p className="text-white/20 text-xs">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
