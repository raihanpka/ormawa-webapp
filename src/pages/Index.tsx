import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HighlightsSection from "@/components/HighlightsSection";
import ChartSection from "@/components/ChartSection";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <section id="overview">
            <StatsSection />
          </section>
          <HighlightsSection />
          <ChartSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
