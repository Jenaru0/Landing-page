import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { RaffleSection } from "@/components/raffle-section";
import { TournamentsSection } from "@/components/tournaments-section";
import { HowToParticipate } from "@/components/how-to-participate";
import { Timeline } from "@/components/timeline";
import { FundingGoals } from "@/components/funding-goals";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ParticlesBackground } from "@/components/particles-background";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <ParticlesBackground />
      <Header />
      <HeroSection />
      <RaffleSection />
      <TournamentsSection />
      <HowToParticipate />
      <Timeline />
      <FundingGoals />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
