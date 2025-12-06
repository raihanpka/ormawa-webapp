import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const [yearDisplay] = useState(1963);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate year counter with smooth counting
      const yearElement = subtitleRef.current?.querySelector(".year-counter");
      if (yearElement) {
        gsap.fromTo(
          yearElement,
          { innerText: "1963" },
          {
            innerText: "2025",
            duration: 3,
            ease: "power2.out",
            snap: { innerText: 1 },
            onUpdate: function () {
              const current = parseFloat(yearElement.innerHTML);
              yearElement.innerHTML = Math.floor(current).toString();
            }
          }
        );
      }

      // Animate the glass year container
      gsap.fromTo(
        glassRef.current,
        { opacity: 0, scale: 0.8, rotateX: 15 },
        { 
          opacity: 1, 
          scale: 1, 
          rotateX: 0,
          duration: 1.5, 
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Split title text animation
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { y: 120, opacity: 0, rotateX: 100 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.05,
            ease: "back.out(1.2)",
            delay: 0.4,
          }
        );
      }

      // Subtitle animation - exclude year counter
      const subtitleWithoutYear = subtitleRef.current?.cloneNode(true) as HTMLElement;
      gsap.fromTo(
        subtitleRef.current?.querySelectorAll("p")[0],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1.5 }
      );

      // Floating decorative elements
      gsap.to(".hero-float-1", {
        y: -25,
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      gsap.to(".hero-float-2", {
        y: 20,
        x: 15,
        duration: 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });

      gsap.to(".hero-float-3", {
        rotate: 360,
        duration: 25,
        ease: "linear",
        repeat: -1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const titleText = "Laporan dan Evaluasi";
  const splitTitle = titleText.split("").map((char, i) => (
    <span key={i} className="char inline-block" style={{ perspective: "1000px" }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Glass Background Element */}
      {/* <div
        ref={glassRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-0"
        style={{ perspective: "1000px" }}
      >
        <div className="w-96 h-96 glass rounded-3xl" />
      </div> */}

      {/* Decorative Elements with Glass Effect */}
      <div className="hero-float-1 absolute top-20 left-10 w-20 h-20 rounded-full glass border-accent/30 animate-pulse-glow" />
      <div className="hero-float-2 absolute bottom-40 right-20 w-12 h-12 glass-accent rounded-full" />
      <div className="hero-float-3 absolute top-1/3 right-1/4 w-32 h-32 rounded-full border border-foreground/10" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-5 py-2.5 glass-accent rounded-full"
        >
          <span className="text-sm font-medium text-accent">
            Ormawa IPB University
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="font-display text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 overflow-hidden leading-tight"
        >
          {splitTitle}
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Tinjauan komprehensif tentang pencapaian, pertumbuhan, dan tonggak sejarah
          dari organisasi kemahasiswaan IPB University sepanjang tahun{" "}
          <span className="font-semibold text-accent year-counter">
            1963
          </span>
          .
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(51 99% 52% / 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg shadow-glow transition-all duration-300"
          >
            Jelajahi Laporan
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass border-foreground/20 text-foreground rounded-full font-semibold text-lg hover:border-accent hover:text-accent transition-all duration-300"
          >
            Lihat Statistik
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
