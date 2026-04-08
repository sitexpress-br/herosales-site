import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, TrendUp, Heart, Star } from "@phosphor-icons/react";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
const metrics = [{
  icon: Users,
  value: 150,
  suffix: "+",
  label: "Profissionais Ativos",
  percentage: 100
}, {
  icon: TrendUp,
  value: 340,
  suffix: "%",
  label: "Aumento Médio em Leads",
  percentage: 85
}, {
  icon: Heart,
  value: 98,
  suffix: "%",
  label: "Taxa de Satisfação",
  percentage: 98
}, {
  icon: Star,
  value: 4.9,
  suffix: "/5",
  label: "Avaliação Média",
  percentage: 98
}];
export const Results = () => {
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (!isInView) return;
    metrics.forEach((metric, index) => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      const increment = metric.value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          current = metric.value;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = current;
          return newCounts;
        });
      }, stepDuration);
    });
  }, [isInView]);
  return <motion.section id="resultados" ref={sectionRef} initial="hidden" whileInView="visible" viewport={defaultViewport} className="bg-background overflow-hidden py-10 md:py-[90px]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
            Números que <em className="text-primary italic">Falam</em> por Nós
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados reais dos nossos clientes
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {metrics.map((metric, index) => <motion.div key={index} variants={staggerItem} whileHover={{
          y: -4
        }} transition={{
          duration: 0.3
        }} className="relative rounded-2xl p-[1.5px] text-center group overflow-hidden h-full">
              {/* Container de opacidade - controla visibilidade */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden pointer-events-none">
                {/* Gradiente rotativo - sempre gira, visível só quando pai está visível */}
                <div className="absolute inset-[-100%] animate-spin" style={{
              background: "conic-gradient(from 0deg, transparent 0%, transparent 25%, hsl(var(--primary)) 35%, hsl(45 93% 60%) 50%, hsl(var(--primary)) 65%, transparent 75%, transparent 100%)",
              animationDuration: "2s"
            }} />
              </div>
              
              {/* Static border fallback (quando não está em hover) */}
              <div className="absolute inset-0 rounded-2xl border border-secondary/20 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
              
              {/* Inner background - cobre tudo exceto a borda de 2px */}
              <div className="relative rounded-[14px] bg-background p-4 sm:p-6 flex flex-row items-center gap-4 h-full">
                {/* Icon */}
                <motion.div className="mr-2 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors" whileHover={{
              scale: 1.1,
              rotate: 5
            }}>
                  <metric.icon size={28} weight="duotone" className="text-primary" />
                </motion.div>

                {/* Text content */}
                <div className="text-left">
                  {/* Value */}
                  <div className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-1">
                    {metric.value % 1 === 0 ? Math.round(counts[index]) : counts[index].toFixed(1)}
                    <span className="text-primary">{metric.suffix}</span>
                  </div>

                  {/* Label */}
                  <p className="text-muted-foreground text-sm sm:text-base">{metric.label}</p>
                </div>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </motion.section>;
};