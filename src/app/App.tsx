import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ServiceAreasSection } from "./components/ServiceAreasSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ServiceAreasSection />
      <ContactSection />
      <Footer />
    </div>
  );
}