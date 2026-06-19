# Fellowship Code V — Landing Page

Landing page premium para o **Fellowship Code V**, construída com Next.js 15, TypeScript e Tailwind CSS. Pronta para deploy na Vercel.

---

## Pré-requisitos

- Node.js 18.17 ou superior
- npm 9 ou superior

---

## Instalação e Execução Local

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no browser.

---

## Build para Produção

```bash
npm run build
npm start
```

---

## Deploy na Vercel

### Via GitHub (Recomendado)

1. Crie um repositório no GitHub e faça push:
   ```bash
   git init
   git add .
   git commit -m "feat: Fellowship Code V landing page"
   git remote add origin https://github.com/SEU_USUARIO/fellowship-code-v.git
   git push -u origin main
   ```
2. Acesse [vercel.com](https://vercel.com) e clique em **New Project**
3. Importe o repositório e clique em **Deploy**

### Via Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

---

## Estrutura do Projeto

```
fellowship-code-v/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Sobre.tsx
│   ├── ParaQuem.tsx
│   ├── Timeline.tsx
│   ├── ComoFunciona.tsx
│   ├── Beneficios.tsx
│   ├── Mentores.tsx
│   ├── Galeria.tsx
│   ├── Testemunhos.tsx
│   ├── FrasesImpacto.tsx
│   ├── PorqueDiferente.tsx
│   ├── CTAFinal.tsx
│   ├── Footer.tsx
│   └── WhatsAppFloat.tsx
├── public/
│   └── images/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Personalização

**Link WhatsApp** — altere a constante em cada componente:
```typescript
const WHATSAPP_LINK = "https://chat.whatsapp.com/GMEOqEQunosH0Cr5xnjiRS";
```

**Cores** — definidas em `tailwind.config.ts`:
- Azul escuro: `#060f22`
- Laranja: `#F7931E`

---

## Tecnologias

- Next.js 15 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

---

Fellowship Global © 2025
