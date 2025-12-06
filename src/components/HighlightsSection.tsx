import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    number: "01",
    title: "Juara Kompetisi Nasional",
    category: "Prestasi",
    description:
      "Tim debat kami meraih juara pertama di Kompetisi Debat Universitas Nasional, bersaing melawan 150+ universitas.",
    color: "bg-accent",
  },
  {
    number: "02",
    title: "Program Pengabdian Masyarakat",
    category: "Dampak Sosial",
    description:
      "Meluncurkan program komprehensif yang menjangkau 5.000+ anggota masyarakat di 25 desa di Jawa Barat.",
    color: "bg-deep-blue-lighter",
  },
  {
    number: "03",
    title: "Summit Inovasi Teknologi",
    category: "Kegiatan",
    description:
      "Menyelenggarakan konferensi teknologi terbesar yang dipimpin mahasiswa dengan 2.500 peserta dan 50+ pembicara industri.",
    color: "bg-accent",
  },
  {
    number: "04",
    title: "Inisiatif Lingkungan",
    category: "Keberlanjutan",
    description:
      "Menanam 10.000 pohon dan mengurangi sampah plastik kampus sebesar 40% melalui inisiatif mahasiswa.",
    color: "bg-deep-blue-lighter",
  },
];

const HighlightsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for highlight cards
      gsap.utils.toArray<HTMLElement>(".highlight-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: i % 2 === 0 ? -100 : 100, opacity: 0, scale: 0.95 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              scrub: false,
            },
          }
        );
      });

      // Animate the horizontal line
      gsap.fromTo(
        ".highlight-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".highlight-line",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="highlights"
      ref={sectionRef}
      className="py-24 md:py-32 bg-card relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4 text-accent font-medium text-sm uppercase tracking-widest"
            >
              Cerita Unggulan
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-5xl font-bold text-foreground"
            >
              Sorotan 2025
            </motion.h2>
          </div>
          <motion.a
            href="#reports"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-accent font-medium mt-4 md:mt-0 group"
          >
            Lihat Semua Laporan
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Decorative Line */}
        <div className="highlight-line h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-16 origin-left" />

        {/* Highlights Grid */}
        <div className="space-y-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.number}
              className="highlight-card group"
              whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 p-6 md:p-8 rounded-2xl glass-card hover:border-accent/30 transition-all duration-300">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-6xl md:text-8xl font-display font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                    {highlight.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        highlight.color === "bg-accent"
                          ? "glass-accent text-accent"
                          : "glass text-muted-foreground"
                      }`}
                    >
                      {highlight.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 flex items-center">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
