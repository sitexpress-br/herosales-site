import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChartBar, Warning, CheckCircle } from "@phosphor-icons/react";

const FUNNEL = [
  { label: "Leads",     value: 120, pct: 100 },
  { label: "Contato",   value: 84,  pct: 70  },
  { label: "Agendado",  value: 31,  pct: 26, bottleneck: true },
  { label: "Atendido",  value: 27,  pct: 22  },
];

function useCountUp(target: number, active: boolean, duration = 900) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) { setValue(0); return; }
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, target, duration]);

  return value;
}

function FunnelRow({ label, value, pct, bottleneck = false, active, highlight }: {
  label: string; value: number; pct: number;
  bottleneck?: boolean; active: boolean; highlight: boolean;
}) {
  const count = useCountUp(value, active);

  return (
    <div className="flex items-center gap-2">
      <span className={`text-[9px] font-sans w-[52px] shrink-0 text-right leading-none transition-colors duration-300 ${
        highlight && bottleneck ? "text-warning font-bold" : "text-muted-foreground"
      }`}>
        {label}
      </span>

      <div className="flex-1 h-4 bg-muted/40 rounded-sm overflow-hidden relative">
        <motion.div
          className={`h-full rounded-sm transition-colors duration-500 ${
            highlight && bottleneck ? "bg-warning/70" : "bg-primary/60"
          }`}
          initial={{ width: 0 }}
          animate={{ width: active ? `${pct}%` : "0%" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        />
        {highlight && bottleneck && (
          <motion.div
            className="absolute inset-0 bg-warning/20"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        )}
      </div>

      <span className={`text-[9px] font-bold font-sans w-6 text-right transition-colors duration-300 ${
        highlight && bottleneck ? "text-warning" : "text-foreground"
      }`}>
        {count}
      </span>
    </div>
  );
}

export default function WeeklyAuditAnimation() {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  // 0=idle, 1=bars grow, 2=highlight bottleneck, 3=badge

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const s = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    const run = () => {
      setPhase(0);
      s(() => setPhase(1), 400);
      s(() => setPhase(2), 1600);
      s(() => setPhase(3), 2400);
      s(() => setPhase(0), 5500);
    };

    run();
    const loop = setInterval(run, 6000);
    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  return (
    <div className="w-full aspect-video bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 flex items-center justify-center overflow-hidden relative">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="bg-background rounded-xl w-[88%] max-w-[300px] z-10 shadow-sm border border-border/50 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-muted">
          <div className="flex items-center gap-1.5">
            <ChartBar weight="fill" className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-semibold text-foreground font-sans">Auditoria semanal</span>
          </div>
          <span className="text-[8px] text-muted-foreground font-sans">Funil de conversão</span>
        </div>

        {/* Funnel rows */}
        <div className="relative px-3 py-3 flex flex-col gap-2.5">
          {FUNNEL.map((row) => (
            <FunnelRow
              key={row.label}
              {...row}
              active={phase >= 1}
              highlight={phase >= 2}
            />
          ))}

          {/* Bottleneck label */}
          <AnimatePresence>
            {phase >= 2 && (
              <motion.div
                className="flex items-center gap-1.5 mt-0.5"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Warning weight="fill" className="w-3 h-3 text-warning shrink-0" />
                <span className="text-[8.5px] text-warning font-semibold font-sans">
                  Gargalo em Agendamento — 63% de perda
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Badge overlay */}
          <AnimatePresence>
            {phase === 3 && (
              <motion.div
                className="absolute inset-x-0 bottom-0 px-3 py-2 bg-background/95"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-success/95">
                  <CheckCircle weight="fill" className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[9px] font-semibold text-white">
                    Problema encontrado. Ação definida.
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
