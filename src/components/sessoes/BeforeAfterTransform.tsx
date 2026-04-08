import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, X } from "@phosphor-icons/react";

const beforeItems = [
  "Agenda vazia e pacientes sumindo sem retorno",
  "Planilhas e papel para controlar tudo",
  "Leads perdidos entre WhatsApp e anotações",
  "Sem follow-up — paciente esquece de você",
  "Zero previsibilidade de faturamento",
];

const afterItems = [
  "Agenda lotada com agendamento automático 24h",
  "CRM completo com histórico de cada paciente",
  "Funil de vendas que captura e converte leads",
  "Follow-up automático por WhatsApp, email e SMS",
  "Dashboard com métricas de vendas em tempo real",
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 2,
  duration: Math.random() * 3 + 2,
}));

export const BeforeAfterTransform = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Before card transforms
  const beforeRotateY = useTransform(scrollYProgress, [0.2, 0.5], [0, -90]);
  const beforeScale = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.8]);
  const beforeOpacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0]);
  const beforeGlitch = useTransform(scrollYProgress, [0.3, 0.5], [0, 12]);

  // After card transforms
  const afterRotateY = useTransform(scrollYProgress, [0.35, 0.6], [90, 0]);
  const afterScale = useTransform(scrollYProgress, [0.35, 0.6], [0.8, 1]);
  const afterOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const afterGlow = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  // Progress bar
  const progressWidth = useTransform(scrollYProgress, [0.15, 0.65], ["0%", "100%"]);

  // Title transforms
  const titleOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.25, 0.45], [30, 0]);

  return (
    <section ref={containerRef} className="py-20 md:py-28 min-h-[120vh] relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <em className="text-primary italic">Antes</em> vs{" "}
            <em className="text-primary italic">Depois</em>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Veja a diferença que a Hero Sales faz na gestão e nas vendas
            da sua clínica.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mb-12 h-1 rounded-full bg-muted/20 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-destructive via-primary to-primary"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Cards container */}
        <div className="relative max-w-4xl mx-auto" style={{ perspective: "1200px" }}>
          {/* Gold particles */}
          <motion.div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{ opacity: afterGlow }}
          >
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute rounded-full bg-primary"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: p.size,
                  height: p.size,
                  animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
                  opacity: 0.6,
                }}
              />
            ))}
          </motion.div>

          {/* ── GRID for desktop, stack for mobile ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* BEFORE CARD */}
            <motion.div
              className="relative rounded-2xl border-2 border-destructive/40 bg-destructive/5 p-8 overflow-hidden"
              style={{
                rotateY: beforeRotateY,
                scale: beforeScale,
                opacity: beforeOpacity,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glitch overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--destructive) / 0.03) 2px, hsl(var(--destructive) / 0.03) 4px)",
                  y: beforeGlitch,
                }}
              />

              {/* Scan line */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-destructive/30 z-10 pointer-events-none"
                style={{
                  top: useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]),
                }}
              />

              <div className="flex items-center gap-2 mb-6 relative z-20">
                <div className="w-3 h-3 rounded-full bg-destructive/60 animate-pulse" />
                <span className="text-destructive font-semibold text-sm uppercase tracking-wider">
                  Sem presença digital
                </span>
              </div>
              <ul className="space-y-4 text-muted-foreground text-sm relative z-20">
                {beforeItems.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [0.35 + i * 0.02, 0.42 + i * 0.02],
                        [1, 0.3]
                      ),
                    }}
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full border border-destructive/40 flex-shrink-0 flex items-center justify-center">
                      <X size={10} weight="bold" className="text-destructive/60" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Red corner glow */}
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-destructive/10 blur-3xl pointer-events-none" />
            </motion.div>

            {/* AFTER CARD */}
            <motion.div
              className="relative rounded-2xl border-2 border-primary/40 bg-primary/5 p-8 overflow-hidden"
              style={{
                rotateY: afterRotateY,
                scale: afterScale,
                opacity: afterOpacity,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, hsl(var(--primary) / 0.08) 45%, hsl(var(--primary) / 0.15) 50%, hsl(var(--primary) / 0.08) 55%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  opacity: afterGlow,
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              />

              {/* Gold glow border */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none z-0"
                style={{
                  boxShadow: useTransform(
                    afterGlow,
                    [0, 1],
                    [
                      "0 0 0px hsl(var(--primary) / 0)",
                      "0 0 40px hsl(var(--primary) / 0.3), 0 0 80px hsl(var(--primary) / 0.1)",
                    ]
                  ),
                }}
              />

              <div className="flex items-center gap-2 mb-6 relative z-20">
                <div className="w-3 h-3 rounded-full bg-primary shadow-gold" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Com Hero Sales
                </span>
              </div>
              <ul className="space-y-4 text-foreground/80 text-sm relative z-20">
                {afterItems.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3"
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [0.45 + i * 0.03, 0.52 + i * 0.03],
                        [0, 1]
                      ),
                      x: useTransform(
                        scrollYProgress,
                        [0.45 + i * 0.03, 0.52 + i * 0.03],
                        [20, 0]
                      ),
                    }}
                  >
                    <Check
                      size={16}
                      weight="bold"
                      className="text-primary mt-0.5 flex-shrink-0"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Gold corner glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
            </motion.div>
          </div>

          {/* Center transformation text */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:block"
            style={{
              opacity: useTransform(scrollYProgress, [0.38, 0.45, 0.55, 0.6], [0, 1, 1, 0]),
              scale: useTransform(scrollYProgress, [0.38, 0.45], [0.8, 1]),
            }}
          >
            <div className="bg-background/90 backdrop-blur-md border border-primary/30 rounded-full px-6 py-3 shadow-gold-lg">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">
                Transformação
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
