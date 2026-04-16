import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { TrendUp, CheckCircle } from "@phosphor-icons/react";

const PLATFORMS = ["Google Ads", "Meta Ads"] as const;

const METRICS = [
  { label: "Impressões", from: 0, to: 12480, suffix: "", color: "text-foreground" },
  { label: "Cliques", from: 0, to: 847, suffix: "", color: "text-primary" },
  { label: "Leads", from: 0, to: 67, suffix: "", color: "text-primary" },
  { label: "Custo/Lead", from: 120, to: 18, prefix: "R$", color: "text-success" },
];

function useCountUp(from: number, to: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(from);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) { setValue(from); return; }
    const start = performance.now();
    const diff = to - from;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + diff * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, from, to, duration]);

  return value;
}

function MetricCard({ label, from, to, prefix = "", suffix = "", color, active }: {
  label: string; from: number; to: number;
  prefix?: string; suffix?: string; color: string; active: boolean;
}) {
  const value = useCountUp(from, to, active);
  const improving = to < from; // lower is better (CPC)

  return (
    <div className="flex flex-col gap-0.5 p-2 rounded-lg bg-muted/30 border border-border/40">
      <span className="text-[8px] text-muted-foreground font-sans uppercase tracking-wide">{label}</span>
      <div className="flex items-center gap-1">
        <span className={`text-[14px] font-bold font-sans leading-none ${color}`}>
          {prefix}{value.toLocaleString("pt-BR")}{suffix}
        </span>
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          <TrendUp
            weight="bold"
            className={`w-3 h-3 ${improving ? "text-success rotate-180" : "text-primary"}`}
            style={improving ? { transform: "scaleY(-1)" } : undefined}
          />
        </motion.span>
      </div>
    </div>
  );
}

export default function PaidTrafficAnimation() {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  // 0 = idle, 1 = counting, 2 = badge, 3 = reset
  const [activePlatform, setActivePlatform] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const s = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    const run = () => {
      setPhase(0);
      setActivePlatform(0);
      s(() => setPhase(1), 500);
      s(() => setActivePlatform(1), 2200);
      s(() => setPhase(2), 3000);
      s(() => setPhase(0), 6000);
    };

    run();
    const loop = setInterval(run, 6500);
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
        {/* Header bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-muted">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
          <span className="ml-2 text-[10px] font-semibold text-muted-foreground font-sans">
            Gerenciador de Anúncios
          </span>
        </div>

        {/* Platform tabs */}
        <div className="flex border-b border-border">
          {PLATFORMS.map((p, i) => (
            <button
              key={p}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-[9px] font-semibold font-sans transition-colors ${
                activePlatform === i
                  ? "text-primary border-b-2 border-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {i === 0 ? (
                <span className="font-bold text-[9px]">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
              ) : (
                <span className="text-[#0668E1] font-bold">Meta</span>
              )}
              <span>{i === 0 ? "Ads" : "Ads"}</span>
            </button>
          ))}
        </div>

        {/* Campaign label */}
        <div className="px-3 pt-2 pb-1">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-muted-foreground font-sans">Campanha ativa</span>
            <span className="flex items-center gap-1 text-[8px] font-semibold text-success">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              ao vivo
            </span>
          </div>
          <span className="text-[10px] font-semibold text-foreground font-sans">
            Clínica — Captação Pacientes
          </span>
        </div>

        {/* Metrics grid + badge (relative wrapper keeps height fixed) */}
        <div className="relative px-3 pb-3">
          <div className="grid grid-cols-2 gap-1.5">
            {METRICS.map((m) => (
              <MetricCard
                key={m.label}
                {...m}
                active={phase >= 1}
              />
            ))}
          </div>

          {/* Conversion badge — absolute overlay, doesn't affect height */}
          <AnimatePresence>
            {phase === 2 && (
              <motion.div
                className="absolute inset-x-0 bottom-0 px-3 pb-1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-success/95 border border-success/30 shadow-sm">
                  <CheckCircle weight="fill" className="w-4 h-4 text-white shrink-0" />
                  <span className="text-[10px] font-semibold text-white">
                    43 consultas agendadas este mês
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
