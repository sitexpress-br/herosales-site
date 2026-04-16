import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Lightning, CheckCircle, Clock, ArrowRight } from "@phosphor-icons/react";

const AUTOMATIONS = [
  { trigger: "Lead novo",        action: "Follow-up WhatsApp",   delay: 600  },
  { trigger: "Consulta agend.",  action: "Confirmação automática", delay: 1800 },
  { trigger: "No-show",          action: "Reativação 24h",        delay: 3000 },
  { trigger: "Pós-consulta",     action: "Pesquisa satisfação",   delay: 4200 },
];

type Status = "idle" | "running" | "done";

export default function FunnelAutomationAnimation() {
  const [statuses, setStatuses] = useState<Status[]>(AUTOMATIONS.map(() => "idle"));
  const [count, setCount] = useState(0);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const s = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    const run = () => {
      setStatuses(AUTOMATIONS.map(() => "idle"));
      setCount(0);
      setShowBadge(false);

      AUTOMATIONS.forEach((a, i) => {
        s(() => setStatuses(prev => prev.map((st, j) => j === i ? "running" : st)), a.delay);
        s(() => {
          setStatuses(prev => prev.map((st, j) => j === i ? "done" : st));
          setCount(c => c + 1);
        }, a.delay + 700);
      });

      const lastDone = AUTOMATIONS[AUTOMATIONS.length - 1].delay + 700;
      s(() => setShowBadge(true), lastDone + 400);
      s(() => {
        setStatuses(AUTOMATIONS.map(() => "idle"));
        setCount(0);
        setShowBadge(false);
      }, lastDone + 3000);
    };

    run();
    const total = AUTOMATIONS[AUTOMATIONS.length - 1].delay + 700 + 3700;
    const loop = setInterval(run, total);
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
            <Lightning weight="fill" className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-semibold text-foreground font-sans">Automações ativas</span>
          </div>
          <motion.span
            key={count}
            initial={{ scale: 1.4, color: "hsl(var(--primary))" }}
            animate={{ scale: 1, color: "hsl(var(--muted-foreground))" }}
            transition={{ duration: 0.4 }}
            className="text-[9px] font-bold font-sans"
          >
            {count} executada{count !== 1 ? "s" : ""}
          </motion.span>
        </div>

        {/* Automation rows */}
        <div className="divide-y divide-border/40 relative">
          {AUTOMATIONS.map((a, i) => {
            const status = statuses[i];
            return (
              <div key={i} className={`flex items-center gap-2 px-3 py-2 transition-colors duration-300 ${
                status === "running" ? "bg-primary/5" : ""
              }`}>
                {/* Status icon */}
                <div className="w-5 shrink-0 flex justify-center">
                  {status === "idle" && (
                    <Clock weight="regular" className="w-3.5 h-3.5 text-muted-foreground/40" />
                  )}
                  {status === "running" && (
                    <motion.div
                      className="w-3.5 h-3.5 rounded-full border-2 border-primary border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  {status === "done" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <CheckCircle weight="fill" className="w-3.5 h-3.5 text-success" />
                    </motion.div>
                  )}
                </div>

                {/* Trigger */}
                <span className={`text-[9px] font-sans w-[72px] shrink-0 leading-tight ${
                  status === "done" ? "text-foreground font-medium" : "text-muted-foreground"
                }`}>
                  {a.trigger}
                </span>

                {/* Arrow */}
                <ArrowRight weight="bold" className={`w-2.5 h-2.5 shrink-0 transition-colors duration-300 ${
                  status === "running" ? "text-primary" : "text-muted-foreground/30"
                }`} />

                {/* Action */}
                <span className={`text-[9px] font-sans flex-1 leading-tight transition-colors duration-300 ${
                  status === "done" ? "text-primary font-medium" : "text-muted-foreground/50"
                }`}>
                  {a.action}
                </span>
              </div>
            );
          })}

          {/* Badge overlay */}
          <AnimatePresence>
            {showBadge && (
              <motion.div
                className="absolute inset-x-0 bottom-0 px-3 py-2 bg-background/95"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-success/95">
                  <Lightning weight="fill" className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[9px] font-semibold text-white">
                    Rodando 24h. Sem intervenção manual.
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
