import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WhatsappLogo, CheckCircle, Clock } from "@phosphor-icons/react";

const MESSAGES = [
  { sender: "client" as const, text: "Preciso alterar o telefone do site", delay: 0.6 },
  { sender: "support" as const, text: "Pronto! Já atualizei 😊", delay: 2.4 },
];

function TypingIndicator() {
  return (
    <div className="flex items-end gap-1.5 mb-2">
      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0">
        <WhatsappLogo weight="fill" className="w-3 h-3 text-success" />
      </div>
      <div className="bg-muted/60 border border-border/50 rounded-xl rounded-bl-sm px-3 py-2 flex gap-1">
        {[0, 1, 2].map((i) => (
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

function MessageBubble({ sender, text }: { sender: "client" | "support"; text: string }) {
  const isClient = sender === "client";
  return (
    <motion.div
      className={`flex ${isClient ? "justify-end" : "items-end gap-1.5"} mb-2`}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {!isClient && (
        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center shrink-0">
          <WhatsappLogo weight="fill" className="w-3 h-3 text-success" />
        </div>
      )}
      <div
        className={`max-w-[75%] px-2.5 py-1.5 text-[10px] leading-relaxed ${
          isClient
            ? "bg-success/15 text-foreground rounded-xl rounded-br-sm border border-success/20"
            : "bg-muted/60 text-foreground rounded-xl rounded-bl-sm border border-border/50"
        }`}
      >
        {text}
        <div className={`flex items-center gap-0.5 mt-0.5 ${isClient ? "justify-end" : ""}`}>
          <span className="text-[8px] text-muted-foreground">agora</span>
          {isClient && <CheckCircle weight="fill" className="w-2.5 h-2.5 text-success/60" />}
        </div>
      </div>
    </motion.div>
  );
}

export default function SupportAnimation() {
  const [step, setStep] = useState(0);
  // 0 = nothing, 1 = client msg, 2 = typing, 3 = support msg, 4 = badge, 5 = pause then reset

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    schedule(() => setStep(1), 600);
    schedule(() => setStep(2), 2200);
    schedule(() => setStep(3), 3800);
    schedule(() => setStep(4), 4800);
    schedule(() => setStep(0), 7500);

    const loop = setInterval(() => {
      setStep(0);
      schedule(() => setStep(1), 600);
      schedule(() => setStep(2), 2200);
      schedule(() => setStep(3), 3800);
      schedule(() => setStep(4), 4800);
      schedule(() => setStep(0), 7500);
    }, 8000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(loop);
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

      {/* Chat container */}
      <motion.div
        className="bg-background rounded-xl w-[75%] max-w-[220px] z-10 shadow-sm border border-border/50 overflow-hidden"
        layout
        transition={{ layout: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }}
      >
        {/* Header */}
        <div className="bg-success px-3 py-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <WhatsappLogo weight="fill" className="w-3.5 h-3.5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold text-white leading-none">Hero Sales</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
              <span className="text-[8px] text-white/80">online</span>
            </div>
          </div>
        </div>

        {/* Messages area */}
        <div className="px-3 py-3 min-h-[80px] flex flex-col justify-end">
          <AnimatePresence mode="sync">
            {step >= 1 && (
              <MessageBubble key="client" sender="client" text={MESSAGES[0].text} />
            )}
            {step === 2 && <TypingIndicator key="typing" />}
            {step >= 3 && (
              <MessageBubble key="support" sender="support" text={MESSAGES[1].text} />
            )}
          </AnimatePresence>

          {/* Response time badge */}
          <AnimatePresence>
            {step >= 4 && (
              <motion.div
                className="flex justify-center mt-2"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 border border-success/30">
                  <Clock weight="bold" className="w-2.5 h-2.5 text-success" />
                  <span className="text-[8px] font-semibold text-success">Respondido em 2min</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
