import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MagnifyingGlass, Trophy } from "@phosphor-icons/react";

const QUERY = "médico trabalhista";

const SEARCH_RESULTS = [
  { title: "Sua Clínica - Dermatologia", url: "suaclinica.com.br", highlight: true },
  { title: "Outro Clínica", url: "outro.com.br", highlight: false },
  { title: "Médico Genérico", url: "generico.adv.br", highlight: false },
];

export default function SEOAnimation() {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const s = (fn: () => void, ms: number) => { timers.push(setTimeout(fn, ms)); };

    const run = () => {
      setPhase(0);
      setTyped("");

      // Phase 1: start typing at 600ms
      s(() => {
        setPhase(1);
        let i = 0;
        intervalRef.current = setInterval(() => {
          i++;
          setTyped(QUERY.slice(0, i));
          if (i >= QUERY.length && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }, 80);
      }, 600);

      // Phase 2: results at 600 + typing duration + 400ms pause
      const typingDuration = QUERY.length * 80;
      s(() => setPhase(2), 600 + typingDuration + 400);

      // Phase 3: pause then reset
      s(() => setPhase(3), 600 + typingDuration + 3500);
    };

    run();
    const loop = setInterval(run, 600 + QUERY.length * 80 + 4500);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-full aspect-video bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <motion.div
        className="bg-background rounded-xl w-[88%] max-w-[300px] z-10 shadow-sm border border-border/50 overflow-hidden"
        layout
        transition={{ layout: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } }}
      >
        {/* Google-like header */}
        <div className="px-4 pt-3 pb-2 flex items-center gap-1">
          <span className="text-[13px] font-bold">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
        </div>

        {/* Search bar */}
        <div className="px-4 pb-2.5">
          <div className="flex items-center gap-1.5 px-2.5 py-2 rounded-full border border-border/60 bg-background shadow-sm">
            <MagnifyingGlass weight="bold" className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
            <div className="flex-1 min-h-[16px] flex items-center">
              <span className="text-[10px] text-foreground leading-none">{typed}</span>
              {phase <= 1 && (
                <motion.span
                  className="inline-block w-[1px] h-[12px] bg-foreground ml-px"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        <AnimatePresence>
          {phase >= 2 && (
             <motion.div
              className="px-4 pb-3 space-y-1.5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-[8px] text-muted-foreground mb-1">
                Cerca de 1.240.000 resultados
              </div>
              {SEARCH_RESULTS.map((r, i) => (
                <motion.div
                  key={r.url}
                   className={`px-2 py-1.5 rounded ${
                    r.highlight
                      ? "border border-primary/30 bg-primary/5"
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: r.highlight ? 1 : 0.45, y: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.25 }}
                >
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-success leading-none">{r.url}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-[10px] font-semibold text-[#1a0dab] leading-none">
                      {r.title}
                    </span>
                    {r.highlight && (
                      <motion.div
                        className="flex items-center gap-0.5 px-1 py-px rounded bg-primary/15"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.35, type: "spring", stiffness: 300 }}
                      >
                        <Trophy weight="fill" className="w-2.5 h-2.5 text-primary" />
                        <span className="text-[7px] font-bold text-primary">1º</span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
