import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Globe, LockSimple, Warning, ShieldCheck } from "@phosphor-icons/react";

const BAD_URL = "sites-gratis.com/seu-escritorio";
const GOOD_URL = "www.suaclinica.com.br";

export default function DomainAnimation() {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const s = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    const run = () => {
      setPhase(0);
      setTyped("");

      // Phase 0: show bad URL (immediate)
      // Phase 1: fade out bad URL at 2000ms
      s(() => setPhase(1), 2000);

      // Phase 2: start typing good URL at 2500ms
      s(() => {
        setPhase(2);
        let i = 0;
        intervalRef.current = setInterval(() => {
          i++;
          setTyped(GOOD_URL.slice(0, i));
          if (i >= GOOD_URL.length && intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }, 60);
      }, 2500);

      // Phase 3: show badge at typing end + 400ms
      const typingEnd = 2500 + GOOD_URL.length * 60;
      s(() => setPhase(3), typingEnd + 400);

      // Phase 4: reset
      s(() => setPhase(4), typingEnd + 3000);
    };

    run();
    const totalCycle = 2500 + GOOD_URL.length * 60 + 3500;
    const loop = setInterval(run, totalCycle);

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
        {/* Browser chrome */}
        <div className="px-3 pt-3 pb-2 flex items-center gap-2">
          {/* Traffic lights */}
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-destructive/60" />
            <span className="w-2 h-2 rounded-full bg-warning/60" />
            <span className="w-2 h-2 rounded-full bg-success/60" />
          </div>
        </div>

        {/* Address bar */}
        <div className="px-3 pb-3">
          <div className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-muted/50 border border-border/40">
            <AnimatePresence mode="wait">
              {phase < 1 ? (
                <motion.div
                  key="bad"
                  className="flex items-center gap-1.5 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <Warning weight="fill" className="w-3.5 h-3.5 text-destructive shrink-0" />
                  <span className="text-[10px] text-destructive/80 font-mono leading-none truncate">
                    {BAD_URL}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="good"
                  className="flex items-center gap-1.5 w-full"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <LockSimple weight="fill" className="w-3.5 h-3.5 text-success shrink-0" />
                  <div className="flex-1 min-h-[14px] flex items-center">
                    <span className="text-[10px] text-success font-mono font-bold leading-none">
                      {phase >= 2 ? typed : ""}
                    </span>
                    {phase === 2 && (
                      <motion.span
                        className="inline-block w-[1px] h-[12px] bg-success ml-px"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                      />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Badge */}
        <AnimatePresence>
          {phase >= 3 && phase < 4 && (
            <motion.div
              className="px-3 pb-3 flex justify-center"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 border border-success/30"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Globe weight="bold" className="w-3.5 h-3.5 text-success" />
                <span className="text-[10px] font-semibold text-success">
                  Domínio próprio
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
