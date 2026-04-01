import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrainingSection } from "@/components/sections/TrainingSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CredentialsSection />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <BookingSection />
      <TrainingSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
