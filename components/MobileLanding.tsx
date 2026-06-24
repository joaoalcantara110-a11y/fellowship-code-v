"use client";

import type { ReactNode } from "react";
import Image from "next/image";

const WA = "https://chat.whatsapp.com/GMEOqEQunosH0Cr5xnjiRS";
const GOLD = "#c9a227";
const GOLD_LT = "#e3c25b";

function GoldText({ children }: { children: ReactNode }) {
  return (
    <span style={{ background: `linear-gradient(135deg,${GOLD_LT},${GOLD})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
      {children}
    </span>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: GOLD_LT, background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.28)", marginBottom: 14 }}>
      {children}
    </div>
  );
}

function SectionHead({ chip, h2, sub }: { chip: string; h2: ReactNode; sub?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 28 }}>
      <Chip>{chip}</Chip>
      <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: 31, fontWeight: 600, lineHeight: 1.12, color: "#fff", margin: 0 }}>
        {h2}
      </h2>
      {sub && <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: "#8da0bd", marginBottom: 0 }}>{sub}</p>}
    </div>
  );
}

const PUBLICOS = [
  { icon: "👑", title: "Líderes", text: "Que procuram elevar a sua influência e liderar com princípios inegociáveis." },
  { icon: "🚀", title: "Empreendedores", text: "Que desejam construir negócios sólidos, rentáveis e alinhados com o Reino." },
  { icon: "⛪", title: "Pastores", text: "Que precisam de um ambiente seguro para recarregar, aprender e crescer." },
  { icon: "💼", title: "Profissionais", text: "Que recusam a mediocridade e procuram a excelência no mercado de trabalho." },
  { icon: "🌱", title: "Jovens em Crescimento", text: "Que desejam construir uma base sólida de identidade e propósito." },
  { icon: "🎯", title: "Clareza de Propósito", text: "Quem procura direção clara para a sua vida, família e missão." },
  { icon: "🏆", title: "Desenvolvimento", text: "Quem deseja desenvolver capacidades de liderança transformacional." },
  { icon: "🙏", title: "Crescimento Espiritual", text: "Quem deseja aprofundar a sua fé e relação com Deus." },
  { icon: "🌍", title: "Pessoas de Visão", text: "Quem acredita que foi chamado para impactar o mundo ao seu redor." },
  { icon: "⭐", title: "Chamados para Mais", text: "Quem sente que há mais para a sua vida e deseja descobrir o quê." },
];

const SESSOES = [
  { n: "01", title: "Ensino Directo", text: "Princípios de liderança, fé, propósito e desenvolvimento humano ministrados diretamente pelo Dr. Venceslau Andrade." },
  { n: "02", title: "Perguntas e Respostas", text: "Interação direta com os mentores. Um espaço de clareza, orientação e diálogo aberto com quem já percorreu o caminho." },
  { n: "03", title: "Partilha Comunitária", text: "Vitórias, desafios e crescimento conjunto. Um ambiente de responsabilidade mútua onde cada história inspira a próxima." },
  { n: "04", title: "Alinhamento Prático", text: "Aplicação dos princípios à vida real: família, liderança, negócios e propósito. Do ensino à ação concreta." },
];

const FEATURES = [
  { icon: "📅", title: "Todas as Quintas-Feiras", text: "Encontros semanais regulares para crescimento contínuo e consistente." },
  { icon: "💻", title: "Transmissão Privada", text: "Acesso global online, sem barreiras geográficas (Zoom & YouTube)." },
  { icon: "⏱️", title: "90 Minutos", text: "Sessões intensas e focadas, respeitando o seu tempo e agenda." },
  { icon: "🌍", title: "Comunidade Internacional", text: "Conecte-se com centenas de líderes de Portugal, Angola, Brasil e Dubai." },
  { icon: "🤝", title: "Interação Direta", text: "Acesso direto aos mentores em cada sessão ao vivo." },
  { icon: "📖", title: "Ensino com Princípios", text: "Conteúdo sólido fundamentado em princípios bíblicos e de liderança." },
  { icon: "🚀", title: "Crescimento Contínuo", text: "Um processo progressivo de desenvolvimento pessoal e espiritual." },
];

const BENEFICIOS = [
  { title: "Crescimento Espiritual Contínuo", text: "Construa raízes profundas na sua fé e uma relação inabalável com Deus." },
  { title: "Clareza de Propósito", text: "Transforme intenções em execução e alinhe o seu chamado com resultados reais." },
  { title: "Comunidade de Líderes", text: "Junte-se a centenas de líderes internacionais que elevam o seu nível." },
  { title: "Desenvolvimento Pessoal", text: "Ferramentas práticas para crescer em todas as áreas da vida." },
  { title: "Networking Estratégico", text: "Construa relações de valor com líderes e empreendedores." },
  { title: "Mentoria Prática", text: "Orientação direta de mentores com experiência comprovada." },
  { title: "Sessões Semanais ao Vivo", text: "Consistência que gera transformação real e duradoura." },
  { title: "Acompanhamento Contínuo", text: "Não está sozinho. A comunidade caminha consigo." },
  { title: "Ambiente de Responsabilidade", text: "Um espaço que o desafia a crescer e a cumprir o que se propõe." },
  { title: "Desenvolvimento da Liderança", text: "Assuma a sua posição de influência na família, nos negócios e na sociedade." },
];

const MENTORES = [
  {
    img: "/images/mentor3.webp",
    name: "Dr. Venceslau Andrade",
    role: "Mentor Internacional",
    bio: "Mentor Internacional, Líder, Empresário e Fundador da CODE V Leadership School. A sua abordagem única combina princípios espirituais sólidos com estratégias práticas de desenvolvimento humano, criando um ambiente de transformação genuína. A sua missão é formar líderes que sejam uma resposta para esta geração.",
    tags: ["Liderança", "Propósito", "Empreendedorismo"],
  },
  {
    img: "/images/mentor4.webp",
    name: "Prof. Vaumara Andrade",
    role: "Mentora & Educadora",
    bio: "Mentora, Educadora, Palestrante e Líder. Dedica-se ao desenvolvimento humano, fortalecimento da identidade, crescimento emocional e formação de pessoas com propósito. A sua presença no Fellowship traz profundidade, cuidado e perspetiva única ao processo de crescimento de cada participante.",
    tags: ["Desenvolvimento Humano", "Identidade", "Educação"],
  },
];

const GALERIA = [
  { src: "/images/mentor1.webp", caption: "Ensino ao vivo" },
  { src: "/images/mentor2.webp", caption: "Comunidade em crescimento" },
  { src: "/images/mentor3.webp", caption: "Liderança com propósito" },
  { src: "/images/mentor4.webp", caption: "Desenvolvimento humano" },
  { src: "/images/mentor5.webp", caption: "Mentoria transformadora" },
];

const TESTEMUNHOS = [
  { quote: "Foi algo sobrenatural. Ambientes determinam destino 🙏", initial: "M", name: "Miguel Sensato", role: "Líder e Participante" },
  { quote: "Simplesmente incrível. Rumo a 1 milhão de líderes com propósito.", initial: "C", name: "Carla Roberta", role: "Participante" },
  { quote: "\"Fala uma palavra para mim Senhor.\" Minha oração antes de entrar no nosso encontro. Estou a ser profundamente ministrada.", initial: "N", name: "Naomi", role: "Participante" },
  { quote: "Meu Deus. Que palavra. Dinheiro nenhum no mundo paga receber uma palavra destas.", initial: "M", name: "Membro", role: "Comunidade" },
];

const FRASES = [
  "A diferença não está no que construímos, mas onde decidimos construir.",
  "A gratidão gera multiplicação.",
  "Dinheiro deve estar nas mãos, nunca no coração.",
  "Quem cresce sozinho vai mais rápido. Quem cresce em comunidade vai mais longe.",
  "Ambientes determinam destino.",
];

const NAO_E = [
  { title: "Não é um curso", text: "É uma comunidade viva com encontros semanais ao vivo, onde o crescimento acontece em tempo real." },
  { title: "Não é apenas informação", text: "É transformação prática. Cada sessão é desenhada para gerar mudança real na sua vida." },
  { title: "Não é genérico", text: "É personalizado. Você tem acesso direto aos mentores e à comunidade que o conhece pelo nome." },
];

const O_QUE_E = [
  { title: "Crescimento com propósito", text: "Cada sessão tem intenção clara: alinhar propósito, fortalecer identidade e desenvolver liderança." },
  { title: "Comunidade de visão", text: "Você é influenciado pelo ambiente em que está. Aqui, o ambiente é de crescimento e excelência." },
  { title: "Princípios que duram", text: "Não ensinamos tendências. Ensinamos princípios que resistem ao tempo e geram resultados duradouros." },
];

const cardBase = { padding: "17px 16px", borderRadius: 18, background: "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.08)" } as const;
const featureCard = { display: "flex", alignItems: "flex-start" as const, gap: 14, padding: 16, borderRadius: 15, background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.07)" } as const;
const secStyle = { background: "#060f22", paddingTop: 56, paddingLeft: 20, paddingRight: 20, paddingBottom: 48 } as const;

const WASvg = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function MobileLanding() {
  return (
    <div style={{ background: "#060f22", fontFamily: "var(--font-manrope)" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 32 }}>
        <Image src="/images/mentor3.webp" alt="Fellowship Code V" fill priority className="object-cover" style={{ objectPosition: "center 20%" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,15,34,0.35) 0%, rgba(6,15,34,0.7) 40%, rgba(6,15,34,0.96) 78%, #060f22 100%)" }} />
        <div style={{ position: "relative", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 100, background: "rgba(201,162,39,0.14)", border: "1px solid rgba(201,162,39,0.35)", marginBottom: 16 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD_LT, boxShadow: `0 0 8px ${GOLD_LT}`, flexShrink: 0 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: GOLD_LT }}>Encontros Semanais Online</span>
          </div>
          <div style={{ marginBottom: 16 }}>
            <Image src="/images/logo1.png" alt="Fellowship Global" width={220} height={80} className="h-12 w-auto object-contain" />
          </div>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: 44, fontWeight: 700, lineHeight: 1.02, color: "#fff", letterSpacing: "0.01em", margin: "0 0 6px" }}>
            FELLOWSHIP<br /><GoldText>CODE V</GoldText>
          </h1>
          <div style={{ marginBottom: 14, fontSize: 12.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: GOLD_LT }}>
            Liderança · Propósito · Crescimento
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "#c3cfe4", margin: "0 0 24px" }}>
            <span style={{ color: "#fff", fontWeight: 600 }}>Mais de 400 vidas impactadas.</span>{" "}
            Uma comunidade internacional de líderes onde o propósito é ativado.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "17px 24px", borderRadius: 14, fontWeight: 800, fontSize: 15, letterSpacing: "0.02em", color: "#060f22", textDecoration: "none", background: `linear-gradient(135deg,${GOLD_LT},${GOLD})`, boxShadow: "0 10px 30px rgba(201,162,39,0.32)" }}>
              GARANTIR O MEU LUGAR
            </a>
            <button onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })} style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 24px", borderRadius: 14, fontWeight: 700, fontSize: 15, color: "#e8ecf4", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", cursor: "pointer" }}>
              Quero saber mais
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 22 }}>
            {[
              { value: "18h", label: "PT", sub: "Todas as 5ª Feiras" },
              { value: "Online", label: "Transmissão", sub: "Privada" },
              { value: "400+", label: "Vidas", sub: "Impactadas" },
              { value: "Global", label: "Vários", sub: "Países" },
            ].map(s => (
              <div key={s.label} style={{ padding: "13px 12px", borderRadius: 16, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontFamily: "var(--font-cormorant)", fontSize: 22, fontWeight: 700, color: GOLD_LT, lineHeight: 1 }}>{s.value}</div>
                <div style={{ marginTop: 4, fontSize: 11.5, fontWeight: 600, color: "#dbe3f2" }}>{s.label}</div>
                <div style={{ fontSize: 11, color: "#8da0bd" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMUNIDADE INTERNACIONAL ── */}
      <section id="sobre" style={secStyle}>
        <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(201,162,39,0.2)", background: "linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))" }}>
          <div style={{ position: "relative", height: 220 }}>
            <Image src="/images/mentor2.webp" alt="Comunidade Internacional" fill className="object-cover" style={{ objectPosition: "center 25%" }} sizes="(max-width:640px) 100vw" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 50%,rgba(10,23,48,0.9))" }} />
            <div style={{ position: "absolute", bottom: 16, left: 18 }}>
              <Chip>Comunidade Internacional</Chip>
            </div>
          </div>
          <div style={{ padding: "22px 20px 26px" }}>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: 24, fontWeight: 700, lineHeight: 1.2, color: "#fff", margin: "0 0 12px" }}>
              Uma comunidade de líderes que crescem juntos
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "#a3b2cc", margin: "0 0 16px" }}>
              Membros de Portugal, Angola, Brasil, Dubai e outros países reúnem-se semanalmente para crescer em liderança, propósito e fé.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Fé em Comunidade", "Identidade Fortalecida", "Propósito Realinhado", "Crescimento Contínuo"].map(pill => (
                <span key={pill} style={{ padding: "6px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, color: GOLD_LT, background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.25)" }}>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ── */}
      <section id="para-quem" style={secStyle}>
        <SectionHead chip="Para Quem É" h2={<>Esta comunidade é<br />para <GoldText>si.</GoldText></>} sub="O ambiente certo para quem recusa a estagnação e quer crescer." />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {PUBLICOS.map(item => (
            <div key={item.title} style={{ ...cardBase, display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 13, background: "rgba(201,162,39,0.14)", border: "1px solid rgba(201,162,39,0.28)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: "2px 0 0", fontSize: 16, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{item.title}</h4>
                <p style={{ margin: "5px 0 0", fontSize: 13.5, lineHeight: 1.5, color: "#a9b8d2" }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 26, padding: "26px 22px", borderRadius: 20, background: "linear-gradient(135deg,rgba(201,162,39,0.14),rgba(201,162,39,0.04))", border: "1px solid rgba(201,162,39,0.28)", textAlign: "center" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: 21, lineHeight: 1.3, color: "#fff" }}>
            "Quem cresce sozinho vai mais rápido. Quem cresce em comunidade vai mais longe."
          </p>
        </div>
      </section>

      {/* ── CADA SESSÃO ── */}
      <section id="sessoes" style={secStyle}>
        <SectionHead chip="Cada Sessão" h2={<>O que acontece em<br />cada <GoldText>encontro.</GoldText></>} />
        <div style={{ display: "flex", flexDirection: "column", gap: 0, paddingLeft: 8, position: "relative" }}>
          <div style={{ position: "absolute", left: 22, top: 23, bottom: 23, width: 1, background: "linear-gradient(180deg,rgba(201,162,39,0.5),rgba(201,162,39,0.1))" }} />
          {SESSOES.map((step, i) => (
            <div key={step.n} style={{ display: "flex", gap: 18, marginBottom: i < SESSOES.length - 1 ? 16 : 0 }}>
              <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-cormorant)", fontSize: 18, fontWeight: 700, color: "#060f22", background: `linear-gradient(135deg,${GOLD_LT},${GOLD})`, boxShadow: "0 4px 14px rgba(201,162,39,0.35)", zIndex: 1 }}>
                {step.n}
              </div>
              <div style={{ flex: 1, ...cardBase, padding: "16px 17px", borderRadius: 16 }}>
                <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{step.title}</h4>
                <p style={{ margin: "8px 0 0", fontSize: 13, lineHeight: 1.55, color: "#8da0bd" }}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section id="como-funciona" style={secStyle}>
        <SectionHead chip="Como Funciona" h2={<>Simples.<br /><GoldText>Consistente. Transformador.</GoldText></>} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 9, marginBottom: 18 }}>
          {[
            { big: "18h", label: "Portugal", sub: "5ª feiras" },
            { big: "90", label: "Minutos", sub: "Por sessão" },
            { big: "∞", label: "Crescimento", sub: "Contínuo" },
          ].map(s => (
            <div key={s.label} style={{ padding: "14px 8px", borderRadius: 14, background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.2)", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: 24, fontWeight: 700, color: GOLD_LT, lineHeight: 1 }}>{s.big}</div>
              <div style={{ marginTop: 5, fontSize: 12, fontWeight: 700, color: "#fff" }}>{s.label}</div>
              <div style={{ fontSize: 11, color: "#8da0bd" }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FEATURES.map(f => (
            <div key={f.title} style={featureCard}>
              <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 11, background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                {f.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, fontSize: 14.5, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{f.title}</h4>
                <p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.55, color: "#8da0bd" }}>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section id="beneficios" style={secStyle}>
        <SectionHead chip="Benefícios" h2={<>O que vai <GoldText>ganhar.</GoldText></>} sub="Cada sessão é um passo estratégico em direção à liderança, ao propósito e à sua melhor versão." />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {BENEFICIOS.map(b => (
            <div key={b.title} style={featureCard}>
              <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: "50%", background: `linear-gradient(135deg,${GOLD_LT},${GOLD})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#060f22", fontWeight: 900, marginTop: 1 }}>
                ✦
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{b.title}</h4>
                <p style={{ margin: "5px 0 0", fontSize: 13, lineHeight: 1.5, color: "#a3b2cc" }}>{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MENTORES ── */}
      <section id="mentores" style={secStyle}>
        <SectionHead chip="Os Mentores" h2={<>Conheça quem vai guiar<br />o seu <GoldText>crescimento.</GoldText></>} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {MENTORES.map(m => (
            <div key={m.name} style={{ borderRadius: 22, overflow: "hidden", border: "1px solid rgba(201,162,39,0.2)", background: "linear-gradient(180deg,#0b1b39,#0a1730)" }}>
              <div style={{ position: "relative", height: 280 }}>
                <Image src={m.img} alt={m.name} fill className="object-cover" style={{ objectPosition: "center 18%" }} sizes="(max-width:640px) 100vw" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 45%,rgba(10,23,48,0.95))" }} />
                <div style={{ position: "absolute", left: 20, bottom: 16, right: 20 }}>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: 24, fontWeight: 700, color: "#fff" }}>{m.name}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.04em", color: GOLD_LT }}>{m.role}</div>
                </div>
              </div>
              <div style={{ padding: "20px 20px 24px" }}>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#b6c3da", margin: "0 0 16px" }}>{m.bio}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {m.tags.map(tag => (
                    <span key={tag} style={{ padding: "7px 13px", borderRadius: 100, fontSize: 12, fontWeight: 600, color: GOLD_LT, background: "rgba(201,162,39,0.12)", border: "1px solid rgba(201,162,39,0.28)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section id="galeria" style={{ ...secStyle, paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          <SectionHead chip="Galeria" h2="Momentos que transformam." />
        </div>
        <div style={{ overflowX: "auto", display: "flex", gap: 10, paddingLeft: 20, paddingRight: 20, scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }} className="no-scrollbar">
          {GALERIA.map((g, i) => (
            <div key={i} style={{ flexShrink: 0, width: "78%", scrollSnapAlign: "start", borderRadius: 16, overflow: "hidden", position: "relative", height: 220 }}>
              <Image src={g.src} alt={g.caption} fill className="object-cover" sizes="(max-width:640px) 78vw" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 50%,rgba(6,15,34,0.85))" }} />
              <div style={{ position: "absolute", bottom: 14, left: 14, right: 14 }}>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#fff" }}>{g.caption}</p>
              </div>
            </div>
          ))}
          <div style={{ flexShrink: 0, width: 4 }} />
        </div>
      </section>

      {/* ── TESTEMUNHOS ── */}
      <section id="testemunhos" style={secStyle}>
        <SectionHead chip="Testemunhos" h2={<>O que dizem sobre<br />o <GoldText>Fellowship.</GoldText></>} />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {TESTEMUNHOS.map((t, i) => (
            <div key={i} style={{ padding: "18px 18px", borderRadius: 16, background: "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ margin: "0 0 14px", fontFamily: "var(--font-cormorant)", fontSize: 18, fontStyle: "italic", lineHeight: 1.4, color: "#fff" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg,${GOLD_LT},${GOLD})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#060f22" }}>
                  {t.initial}
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#fff" }}>{t.name}</p>
                  <p style={{ margin: 0, fontSize: 11.5, color: "#7a91b0" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FRASES DE IMPACTO ── */}
      <section id="frases" style={secStyle}>
        <SectionHead chip="Frases de Impacto" h2="Princípios que ficam." />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {FRASES.map((frase, i) => (
            <div key={i} style={{ padding: "20px", borderRadius: 16, background: "linear-gradient(135deg,rgba(201,162,39,0.1),rgba(201,162,39,0.04))", border: "1px solid rgba(201,162,39,0.22)", textAlign: "center" }}>
              <p style={{ margin: 0, fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: 20, lineHeight: 1.35, color: "#fff" }}>
                &ldquo;{frase}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── POR QUE É DIFERENTE ── */}
      <section id="diferente" style={secStyle}>
        <SectionHead chip="Por Que É Diferente" h2={<>Não é apenas mais<br />um <GoldText>grupo.</GoldText></>} sub="Uma comunidade que une crescimento espiritual, alinhamento prático e uma rede internacional de líderes com propósito." />
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>O que não é</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {NAO_E.map(d => (
              <div key={d.title} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px", borderRadius: 12, background: "rgba(255,80,80,0.05)", border: "1px solid rgba(255,80,80,0.1)" }}>
                <span style={{ color: "#f87171", flexShrink: 0, marginTop: 2 }}>✕</span>
                <div>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.7)", lineHeight: 1.3 }}>{d.title}</p>
                  <p style={{ margin: "5px 0 0", fontSize: 12.5, lineHeight: 1.5, color: "rgba(255,255,255,0.4)" }}>{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: `rgba(201,162,39,0.7)`, marginBottom: 10 }}>O que é</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {O_QUE_E.map(d => (
              <div key={d.title} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 16px", borderRadius: 12, background: "rgba(201,162,39,0.06)", border: "1px solid rgba(201,162,39,0.16)" }}>
                <span style={{ color: GOLD_LT, flexShrink: 0, marginTop: 2 }}>✦</span>
                <div>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>{d.title}</p>
                  <p style={{ margin: "5px 0 0", fontSize: 12.5, lineHeight: 1.5, color: "rgba(255,255,255,0.5)" }}>{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section id="entrar" style={{ ...secStyle, paddingBottom: 0 }}>
        <div style={{ borderRadius: 24, overflow: "hidden", border: "1px solid rgba(201,162,39,0.3)", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <Image src="/images/mentor2.webp" alt="Fellowship" fill className="object-cover object-center" sizes="(max-width:640px) calc(100vw - 40px)" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(6,15,34,0.78),rgba(6,15,34,0.94))" }} />
          </div>
          <div style={{ position: "relative", padding: "34px 24px 32px", textAlign: "center" }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: GOLD_LT }}>
              Próximo Encontro: Quinta-Feira
            </div>
            <h2 style={{ margin: "14px 0 0", fontFamily: "var(--font-cormorant)", fontSize: 29, fontWeight: 600, lineHeight: 1.18, color: "#fff" }}>
              Está na altura de caminhar com pessoas que o desafiam a crescer.
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "#c3cfe4" }}>
              O próximo encontro pode ser o ponto de viragem para a sua liderança e propósito.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "block", margin: "24px 0 0", padding: 18, borderRadius: 14, fontWeight: 800, fontSize: 15, color: "#060f22", textDecoration: "none", background: `linear-gradient(135deg,${GOLD_LT},${GOLD})`, boxShadow: "0 12px 32px rgba(201,162,39,0.34)" }}>
              RESERVAR O MEU LUGAR
            </a>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 20 }}>
              {[
                { icon: "🔒", label: "Grupo Oficial Verificado" },
                { icon: "✓", label: "Transmissão Privada" },
                { icon: "🌍", label: "Comunidade Internacional" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#cdd8ec" }}>
                  <span style={{ color: GOLD_LT }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#040c1e", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "32px 20px 130px" }}>
        <Image src="/images/logo1.png" alt="Fellowship Global" width={160} height={56} className="h-8 w-auto object-contain" style={{ marginBottom: 12 }} />
        <p style={{ fontSize: 12, lineHeight: 1.6, color: "rgba(255,255,255,0.5)", margin: "0 0 16px", maxWidth: 280 }}>
          Uma comunidade para quem acredita que crescimento, propósito e comunhão caminham juntos.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {["Comunhão", "Crescimento", "Alinhamento", "Propósito", "Liderança"].map(tag => (
            <span key={tag} style={{ padding: "5px 12px", borderRadius: 100, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)", fontSize: 11 }}>
              {tag}
            </span>
          ))}
        </div>
        <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 24px", borderRadius: 100, background: "#25a244", color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none", marginBottom: 24 }}>
          <WASvg />
          Reservar o meu lugar
        </a>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: 0 }}>
            © {new Date().getFullYear()} Fellowship Global · CODE V Leadership School
          </p>
        </div>
      </footer>
    </div>
  );
}
