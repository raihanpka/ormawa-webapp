import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const barData = [
  { label: "Fakultas Perikanan dan Kelautan", value: 85, year: "2025" },
  { label: "Fakultas Teknik", value: 72, year: "2025" },
  { label: "Fakultas Ekonomi", value: 68, year: "2025" },
  { label: "Sekolah Vokasi", value: 62, year: "2025" },
  { label: "Fakultas Kehutanan", value: 55, year: "2025" },
];

const timelineData = [
  { year: "2020", value: 45 },
  { year: "2021", value: 52 },
  { year: "2022", value: 61 },
  { year: "2023", value: 74 },
  { year: "2024", value: 85 },
  { year: "2025", value: 94 },
];

const ChartSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate bars with enhanced effect
      gsap.utils.toArray<HTMLElement>(".chart-bar").forEach((bar, i) => {
        const width = bar.getAttribute("data-width") || "0";
        gsap.fromTo(
          bar,
          { width: "0%", opacity: 0 },
          {
            width: `${width}%`,
            opacity: 1,
            duration: 1.2,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: barsRef.current,
              start: "top 75%",
            },
          }
        );
      });

      // Animate timeline points with enhanced spring
      gsap.fromTo(
        ".timeline-point",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(2.5)",
          scrollTrigger: {
            trigger: ".timeline-chart",
            start: "top 75%",
          },
        }
      );

      // Animate timeline line
      gsap.fromTo(
        ".timeline-path",
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-chart",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Calculate SVG path coordinates properly
  const chartWidth = 100;
  const chartHeight = 100;
  const padding = 5;
  const availableHeight = chartHeight - padding * 2;

  const pathPoints = timelineData.map((d, i) => {
    const x = padding + (i / (timelineData.length - 1)) * (chartWidth - padding * 2);
    const y = chartHeight - padding - (d.value / 100) * availableHeight;
    return { x, y, value: d.value };
  });

  const pathD = pathPoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <section
      id="reports"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 text-accent font-medium text-sm uppercase tracking-widest">
            Wawasan Data
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tinjauan Kinerja
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Analisis detail kinerja organisasi di seluruh fakultas dan tahun.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl glass-card"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Tingkat Partisipasi per Fakultas
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              Persentase mahasiswa yang aktif berpartisipasi dalam organisasi
            </p>

            <div ref={barsRef} className="space-y-6">
              {barData.map((item, index) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-accent">
                      {item.value}%
                    </span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="chart-bar h-full bg-gradient-to-r from-accent to-golden-light rounded-full"
                      data-width={item.value}
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl glass-card"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Trajektori Pertumbuhan
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              Skor keterlibatan organisasi selama beberapa tahun
            </p>

            <div className="timeline-chart relative h-64">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                {[100, 75, 50, 25, 0].map((val, idx) => (
                  <div key={val} className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-8 text-right">{val}</span>
                    <div className="flex-1 h-px bg-border/50" />
                  </div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="absolute inset-0 pl-10 pt-2 pb-8">
                <svg 
                  className="w-full h-full" 
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(51 99% 52%)" />
                      <stop offset="100%" stopColor="hsl(51 99% 65%)" />
                    </linearGradient>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(51 99% 52% / 0.3)" />
                      <stop offset="100%" stopColor="hsl(51 99% 52% / 0)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill */}
                  <path
                    d={`${pathD} L ${pathPoints[pathPoints.length - 1].x} ${chartHeight - padding} L ${pathPoints[0].x} ${chartHeight - padding} Z`}
                    fill="url(#areaGradient)"
                  />
                  
                  {/* Line */}
                  <path
                    className="timeline-path"
                    d={pathD}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="1000"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-10 right-0 flex justify-between">
                {timelineData.map((item) => (
                  <span key={item.year} className="text-xs text-muted-foreground">
                    {item.year}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
