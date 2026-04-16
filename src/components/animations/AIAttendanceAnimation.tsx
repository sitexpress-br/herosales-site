import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WhatsappLogo, Robot, CheckCircle, Clock } from "@phosphor-icons/react";

const CONVERSATION = [
  { sender: "patient", text: "Olá, quero agendar uma consulta" },
  { sender: "ai",      text: "Oi! 👋 Sou a assistente virtual da clínica. Qual especialidade?" },
  { sender: "patient", text: "Dermatologia" },
  { sender: "ai",      text: "Ótimo! Qual seu nome e melhor horário?" },
  { sender: "patient", text: "Ana Costa, tarde" },
];

const TIMINGS = [500, 1600, 3000, 3900, 5200];

type Sender = "patient" | "ai";

function Bubble({ sender, text }: { sender: Sender; text: string }) {
  const isAI = sender === "ai";
  return (
    <motion.div
      className={`flex ${isAI ? "items-end gap-1.5" : "justify-end"} mb-1.5`}
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {isAI && (
        <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
          <Robot weight="fill" className="w-3 h-3 text-primary" />
        </div>
      )}
      <div className={`max-w-[76%] px-2.5 py-1.5 text-[9.5px] leading-snug rounded-xl ${
        isAI
          ? "bg-muted/70 text-foreground rounded-bl-sm border border-border/40"
          : "bg-success/15 text-foreground rounded-br-sm border border-success/25"
      }`}>
        {text}
        <div className={`flex items-center gap-0.5 mt-0.5 ${isAI ? "" : "justify-end"}`}>
          <span className="text-[7.5px] text-muted-foreground">agora</span>
          {!isAI && <CheckCircle weight="fill" className="w-2 h-2 text-success/60" />}
        </div>
      </div>
    </motion.div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-end gap-1.5 mb-1.5">
      <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
        <Robot weight="fill" className="w-3 h-3 text-primary" />
      </div>
      <div className="bg-muted/70 border border-border/40 rounded-xl rounded-bl-sm px-3 py-2 flex gap-1">
        {[0, 1, 2].map(i => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AIAttendanceAnimation() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const s = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    const run = () => {
      setVisibleCount(0);
      setTyping(false);
      setShowBadge(false);

      TIMINGS.forEach((t, i) => {
        // Show typing indicator before each AI message
        if (CONVERSATION[i].sender === "ai") {
          s(() => setTyping(true), t - 600);
        }
        s(() => {
          setTyping(false);
          setVisibleCount(i + 1);
        }, t);
      });

      s(() => setShowBadge(true), TIMINGS[TIMINGS.length - 1] + 700);
      s(() => {
        setVisibleCount(0);
        setShowBadge(false);
      }, TIMINGS[TIMINGS.length - 1] + 3500);
    };

    run();
    const loop = setInterval(run, TIMINGS[TIMINGS.length - 1] + 4200);
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

      <div className="bg-background rounded-xl w-[80%] max-w-[240px] z-10 shadow-sm border border-border/50 overflow-hidden">
        {/* WhatsApp header */}
        <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
            <Robot weight="fill" className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold text-white leading-none">IA Clínica</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              <span className="text-[8px] text-white/80">disponível 24h</span>
            </div>
          </div>
          <Clock weight="bold" className="w-3.5 h-3.5 text-white/60" />
        </div>

        {/* Messages */}
        <div className="px-3 py-2 h-[120px] flex flex-col justify-end overflow-hidden relative">
          <AnimatePresence mode="sync">
            {CONVERSATION.slice(0, visibleCount).map((msg, i) => (
              <Bubble key={i} sender={msg.sender as Sender} text={msg.text} />
            ))}
            {typing && <TypingDots key="typing" />}
          </AnimatePresence>

          {/* Qualified badge — absolute so it doesn't push height */}
          <AnimatePresence>
            {showBadge && (
              <motion.div
                className="absolute inset-x-0 bottom-0 px-3 pb-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-primary/95 border border-primary/30 shadow-sm">
                  <CheckCircle weight="fill" className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[9px] font-semibold text-white">
                    Lead qualificado → secretária
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
