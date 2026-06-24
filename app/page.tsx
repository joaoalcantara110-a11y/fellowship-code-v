import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import ParaQuem from "@/components/ParaQuem";
import Timeline from "@/components/Timeline";
import ComoFunciona from "@/components/ComoFunciona";
import Beneficios from "@/components/Beneficios";
import Mentores from "@/components/Mentores";
import Galeria from "@/components/Galeria";
import Testemunhos from "@/components/Testemunhos";
import FrasesImpacto from "@/components/FrasesImpacto";
import PorqueDiferente from "@/components/PorqueDiferente";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Sobre />
      <ParaQuem />
      <Timeline />
      <ComoFunciona />
      <Beneficios />
      <Mentores />
      <Galeria />
      <Testemunhos />
      <FrasesImpacto />
      <PorqueDiferente />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
