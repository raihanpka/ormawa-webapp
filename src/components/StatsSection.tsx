import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { TrendingUp, Users, Calendar, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Users,
    value: "12430",
    label: "Anggota Aktif",
    growth: "+18,5%",
    description: "Total anggota organisasi kemahasiswaan terdaftar di seluruh fakultas",
  },
  {
    icon: Calendar,
    value: "284",
    label: "Kegiatan Terlaksana",
    growth: "+24,2%",
    description: "Kegiatan, workshop, dan aktivitas sukses sepanjang tahun",
  },
  {
    icon: Award,
    value: "156",
    label: "Prestasi",
    growth: "+32,1%",
    description: "Penghargaan dan pengakuan di tingkat nasional dan internasional",
  },
  {
    icon: TrendingUp,
    value: "94.2%",
    label: "Tingkat Keberhasilan",
    growth: "+5,8%",
    description: "Tingkat penyelesaian program dan pencapaian target",
  },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        ".stats-title",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Animate stat cards with stagger
      gsap.fromTo(
        ".stat-card",
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
          },
        }
      );

      // Animate numbers counting up
      const numbers = document.querySelectorAll(".stat-value");
      numbers.forEach((num) => {
        const value = num.getAttribute("data-value") || "0";
        const isPercentage = value.includes("%");
        const numericValue = parseFloat(value.replace(/[^0-9.]/g, "").replace(",", "."));

        gsap.fromTo(
          num,
          { innerText: "0" },
          {
            innerText: numericValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: isPercentage ? 0.1 : 1 },
            scrollTrigger: {
              trigger: num,
              start: "top 80%",
            },
            onUpdate: function () {
              const current = parseFloat(num.innerHTML);
              if (isPercentage) {
                num.innerHTML = current.toFixed(1).replace(".", ",") + "%";
              } else if (numericValue >= 1000) {
                num.innerHTML = Math.floor(current).toLocaleString("id-ID");
              } else {
                num.innerHTML = Math.floor(current).toString();
              }
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 stats-title">
          <motion.span className="inline-block mb-4 text-accent font-medium text-sm uppercase tracking-widest">
            Metrik Utama
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tahun dalam Angka
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Merayakan pertumbuhan dan pencapaian luar biasa dari organisasi
            kemahasiswaan kami sepanjang tahun 2025.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="stat-card group"
                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="h-full p-6 rounded-2xl glass-card hover:border-accent/50 transition-all duration-300 hover:shadow-glow">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl glass-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Value */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      className="stat-value text-4xl font-bold text-foreground"
                      data-value={stat.value}
                    >
                      0
                    </span>
                    <span className="text-sm font-medium text-green-400">
                      {stat.growth}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
