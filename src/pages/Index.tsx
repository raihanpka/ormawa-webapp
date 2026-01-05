import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import { Chapter1Cover, Chapter2Cover, Chapter3Cover, Chapter4Cover, Chapter5Cover } from "@/components/cover";
import OrmawaFooter from "@/components/OrmawaFooter";
import SmoothScroll from "@/components/SmoothScroll";
import { useTranslation } from "@/hooks/useTranslation";
import { HeroSection, KeyTakeawaysSection } from "@/components/landing";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const { t, language, changeLanguage } = useTranslation();

  useEffect(() => {
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleLanguageChange = (lang: "id" | "en") => {
    changeLanguage(lang);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white">
        {/* Navbar - now handles its own fixed positioning and scroll behavior */}
        <Navbar
          language={language}
          onLanguageChange={handleLanguageChange}
        />

        <main>
          {/* New Landing Page Hero Section */}
          <section id="hero">
            <HeroSection />
          </section>

          {/* Key Takeaways Carousel Section */}
          <section id="key-takeaways-intro" className="bg-[#F5F5F5]">
            <KeyTakeawaysSection />
          </section>

          {/* Chapter 1 Cover */}
          <section id="chapter-1">
            <Chapter1Cover 
              chapterData={t('chapters.chapter1') as {
                number: string;
                title: string;
                question: string;
                sections: string[];
                buttonExplore: string;
                buttonTakeaways: string;
              }}
            />
          </section>

          {/* Chapter 2 Cover */}
          <section id="chapter-2">
            <Chapter2Cover 
              chapterData={t('chapters.chapter2') as {
                number: string;
                title: string;
                question: string;
                sections: string[];
                buttonExplore: string;
                buttonTakeaways: string;
              }}
            />
          </section>

          {/* Chapter 3 Cover */}
          <section id="chapter-3">
            <Chapter3Cover 
              chapterData={t('chapters.chapter3') as {
                number: string;
                title: string;
                question: string;
                sections: string[];
                buttonExplore: string;
                buttonTakeaways: string;
              }}
            />
          </section>

          {/* Chapter 4 Cover */}
          <section id="chapter-4">
            <Chapter4Cover 
              chapterData={t('chapters.chapter4') as {
                number: string;
                title: string;
                question: string;
                sections: string[];
                buttonExplore: string;
                buttonTakeaways: string;
              }}
            />
          </section>

          {/* Chapter 5 Cover */}
          <section id="chapter-5">
            <Chapter5Cover 
              chapterData={t('chapters.chapter5') as {
                number: string;
                title: string;
                question: string;
                sections: string[];
                buttonExplore: string;
                buttonTakeaways: string;
              }}
            />
          </section>
        </main>

        {/* Footer */}
        <OrmawaFooter language={language} />
      </div>
    </SmoothScroll>
  );
};

export default Index;
