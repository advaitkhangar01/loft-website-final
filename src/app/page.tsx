import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import StoriesSection from "@/components/StoriesSection";
import EventsSection from "@/components/EventsSection";
import OriginSection from "@/components/OriginSection";
import EarlyAccessSection from "@/components/EarlyAccessSection";
import MembershipsSection from "@/components/MembershipsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LocationSection />
      <FeaturesSection />
      <TestimonialSection />
      <VideoShowcaseSection />
      <StoriesSection />
      <EventsSection />
      <OriginSection />
      <EarlyAccessSection />
      <MembershipsSection />
      <ContactSection />
    </main>
  );
}
