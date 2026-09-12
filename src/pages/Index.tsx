import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/features/Hero";
import SourceMarkets from "@/components/features/SourceMarkets";
import Services from "@/components/features/Services";
import HowItWorks from "@/components/features/HowItWorks";
import ContactForm from "@/components/features/ContactForm";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/features/FloatingWhatsApp";

export default function Index() {
  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SourceMarkets />
        <Services />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
