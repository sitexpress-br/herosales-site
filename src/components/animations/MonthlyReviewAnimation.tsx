import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { CalendarCheck, TrendUp, Warning, CheckCircle, Target } from "@phosphor-icons/react";

const METRICS = [
  { label: "Leads",      value: 234, suffix: ""  },
  { label: "Conversão",  value: 18,  suffix: "%" },
  { label: "Agend.",     value: 42,  suffix: ""  },
];

const DIAGNOSIS = [
  { positive: true,  text: "WhatsApp: 32% de conversão" },
  { positive: false, text: "Instagram: só 8% — ajustar copy" },
];

const ACTIONS = [
  "Novo roteiro de abordagem",
  "Teste A/B no criativo",
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

function MetricTile({ label, value, suffix, active }: {
  label: string; value: number; suffix: string; active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="flex flex-col items-center bg-muted/30 rounded-lg px-2 py-1.5 border border-border/40">
      <span className="text-[13px] font-bold font-sans text-foreground leading-none">
        {count}{suffix}
      </span>
      <span className="text-[7.5px] text-muted-foreground font-sans mt-0.5">{label}</span>
    </div>
  );
}

export default function MonthlyReviewAnimation() {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4>(0);
  // 0=idle, 1=metrics, 2=diagnosis, 3=actions, 4=badge

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const s = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    const run = () => {
      setPhase(0);
      s(() => setPhase(1), 400);
      s(() => setPhase(2), 1800);
      s(() => setPhase(3), 3000);
      s(() => setPhase(4), 4200);
      s(() => setPhase(0), 7000);
    };

    run();
    const loop = setInterval(run, 7500);
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
            <CalendarCheck weight="fill" className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-semibold text-foreground font-sans">Revisão Mensal</span>
          </div>
          <span className="text-[8px] text-muted-foreground font-sans">Abr / 2026</span>
        </div>

        {/* Content */}
        <div className="relative px-3 py-2.5 flex flex-col gap-2.5">

          {/* Metric tiles */}
          <div className="grid grid-cols-3 gap-1.5">
            {METRICS.map((m) => (
              <MetricTile key={m.label} {...m} active={phase >= 1} />
            ))}
          </div>

          {/* Diagnosis */}
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-wide font-sans">
              Diagnóstico
            </span>
            <AnimatePresence>
              {phase >= 2 && DIAGNOSIS.map((d, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.2 }}
                >
                  {d.positive
                    ? <CheckCircle weight="fill" className="w-3 h-3 text-success shrink-0" />
                    : <Warning weight="fill" className="w-3 h-3 text-warning shrink-0" />
                  }
                  <span className={`text-[8.5px] font-sans leading-tight ${
                    d.positive ? "text-foreground" : "text-warning"
                  }`}>
                    {d.text}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Action plan */}
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-wide font-sans">
              Plano — próx. 30 dias
            </span>
            <AnimatePresence>
              {phase >= 3 && ACTIONS.map((a, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.25 }}
                >
                  <Target weight="fill" className="w-3 h-3 text-primary shrink-0" />
                  <span className="text-[8.5px] text-foreground font-sans leading-tight">{a}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Badge overlay */}
          <AnimatePresence>
            {phase === 4 && (
              <motion.div
                className="absolute inset-x-0 bottom-0 px-3 py-2 bg-background/95"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-primary/95">
                  <CheckCircle weight="fill" className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[9px] font-semibold text-white">
                    Estratégia definida. Time alinhado.
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
