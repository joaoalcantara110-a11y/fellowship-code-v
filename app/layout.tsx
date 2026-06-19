import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fellowship Code V | A Comunidade Internacional de Líderes",
  description:
    "Junte-se a centenas de líderes e empreendedores de Portugal, Angola, Brasil e Dubai. Uma transmissão privada semanal focada em crescimento, liderança e propósito com Dr. Venceslau Andrade.",
  keywords: [
    "Fellowship Code V",
    "Fellowship Global",
    "Dr. Venceslau Andrade",
    "Vaumara Andrade",
    "CODE V Leadership School",
    "crescimento espiritual",
    "liderança",
    "comunidade cristã",
    "mentoria",
    "desenvolvimento pessoal",
    "propósito",
    "transmissão privada",
    "comunidade internacional",
  ],
  metadataBase: new URL("https://fellowship-code-v.vercel.app"),
  authors: [{ name: "Fellowship Global" }],
  creator: "Fellowship Global",
  publisher: "Fellowship Global",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://fellowship-code-v.vercel.app",
    siteName: "Fellowship Code V",
    title: "Fellowship Code V | A Comunidade Internacional de Líderes",
    description:
      "Junte-se a centenas de líderes e empreendedores de Portugal, Angola, Brasil e Dubai. Uma transmissão privada semanal focada em crescimento e propósito.",
    images: [
      {
        url: "/images/mentor3.webp",
        width: 1200,
        height: 630,
        alt: "Fellowship Code V",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fellowship Code V | A Comunidade Internacional de Líderes",
    description:
      "Junte-se a centenas de líderes e empreendedores de Portugal, Angola, Brasil e Dubai. Uma transmissão privada semanal focada em crescimento e propósito.",
    images: ["/images/mentor3.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060f22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-[#060f22] text-white`}>
        {children}
      </body>
    </html>
  );
}
