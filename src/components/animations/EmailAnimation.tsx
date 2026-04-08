import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvelopeSimple, PaperPlaneRight, ArrowLeft, CheckCircle } from "@phosphor-icons/react";

const emails = [
  { from: "Cliente Silva", subject: "Consulta sobre processo...", time: "10:30", unread: true },
  { from: "João Souza", subject: "Documentação enviada...", time: "09:15", unread: false },
  { from: "Maria Santos", subject: "Agendamento confirmado", time: "ontem", unread: false },
];

const REPLY_TEXT = "Prezado, segue a documentação.";

type Step = "inbox" | "clicking" | "reading" | "movingToReply" | "typing" | "movingToSend" | "sent" | "reset";

const FALLBACK_POSITIONS: Record<string, { x: number; y: number }> = {
  start: { x: 80, y: 90 },
  firstEmail: { x: 50, y: 32 },
  replyField: { x: 50, y: 76 },
  sendButton: { x: 82, y: 88 },
};

const TIMINGS: Record<Step, number> = {
  inbox: 1800,
  clicking: 500,
  reading: 1200,
  movingToReply: 800,
  typing: REPLY_TEXT.length * 45 + 400,
  movingToSend: 800,
  sent: 1500,
  reset: 800,
};

function CursorSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 3L19 12L12 13L9 20L5 3Z"
        fill="hsl(var(--foreground))"
        stroke="hsl(var(--background))"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getRelativeCenter(
  el: HTMLElement | null,
  container: HTMLElement | null
): { x: number; y: number } | null {
  if (!el || !container) return null;
  const elRect = el.getBoundingClientRect();
  const cRect = container.getBoundingClientRect();
  if (cRect.width === 0 || cRect.height === 0) return null;
  return {
    x: ((elRect.left + elRect.width / 2 - cRect.left) / cRect.width) * 100,
    y: ((elRect.top + elRect.height / 2 - cRect.top) / cRect.height) * 100,
  };
}

export default function EmailAnimation() {
  const [step, setStep] = useState<Step>("inbox");
  const [typedChars, setTypedChars] = useState(0);
  const [cursorTarget, setCursorTarget] = useState(FALLBACK_POSITIONS.start);

  const frameRef = useRef<HTMLDivElement>(null);
  const firstEmailRef = useRef<HTMLDivElement>(null);
  const replyFieldRef = useRef<HTMLDivElement>(null);
  const sendButtonRef = useRef<HTMLDivElement>(null);

  const resetAnimation = useCallback(() => {
    setStep("inbox");
    setTypedChars(0);
  }, []);

  // Step machine
  useEffect(() => {
    const timeout = setTimeout(() => {
      switch (step) {
        case "inbox": setStep("clicking"); break;
        case "clicking": setStep("reading"); break;
        case "reading": setStep("movingToReply"); break;
        case "movingToReply": setStep("typing"); break;
        case "typing": setStep("movingToSend"); break;
        case "movingToSend": setStep("sent"); break;
        case "sent": setStep("reset"); break;
        case "reset": resetAnimation(); break;
      }
    }, TIMINGS[step]);
    return () => clearTimeout(timeout);
  }, [step, resetAnimation]);

  // Typing effect
  useEffect(() => {
    if (step !== "typing") return;
    setTypedChars(0);
    const interval = setInterval(() => {
      setTypedChars((prev) => {
        if (prev >= REPLY_TEXT.length) { clearInterval(interval); return prev; }
        return prev + 1;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [step]);

  // Dynamic cursor positioning
  useEffect(() => {
    // Small delay to let AnimatePresence swap content and refs attach
    const raf = requestAnimationFrame(() => {
      const container = frameRef.current;
      let targetKey: string;
      let targetRef: React.RefObject<HTMLElement | null>;

      switch (step) {
        case "inbox":
          setCursorTarget(FALLBACK_POSITIONS.start);
          return;
        case "clicking":
        case "reading":
          targetKey = "firstEmail";
          targetRef = firstEmailRef;
          break;
        case "movingToReply":
        case "typing":
          targetKey = "replyField";
          targetRef = replyFieldRef;
          break;
        case "movingToSend":
        case "sent":
          targetKey = "sendButton";
          targetRef = sendButtonRef;
          break;
        default:
          setCursorTarget(FALLBACK_POSITIONS.start);
          return;
      }

      const pos = getRelativeCenter(targetRef.current, container);
      setCursorTarget(pos ?? FALLBACK_POSITIONS[targetKey]);
    });
    return () => cancelAnimationFrame(raf);
  }, [step]);

  const showInbox = step === "inbox" || step === "clicking";
  const showEmail = !showInbox && step !== "reset";
  const isSent = step === "sent";

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

      {/* Email client frame */}
      <div
        ref={frameRef}
        className="w-[85%] h-[82%] rounded-lg border border-border bg-background shadow-lg overflow-hidden flex flex-col relative"
      >
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-border bg-muted shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
          <div className="ml-2 flex-1 h-3 rounded-full bg-border max-w-[60%]" />
        </div>

        {/* Email header */}
        <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border bg-muted/50 shrink-0">
          <EnvelopeSimple weight="fill" className="w-4 h-4 text-primary" />
          <span className="text-[11px] font-sans font-semibold text-foreground tracking-wide">
            seunome@suaclinica.com.br
          </span>
        </div>

        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden relative min-h-0">
          <AnimatePresence mode="wait">
            {showInbox && (
              <motion.div
                key="inbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col"
              >
                {emails.map((email, i) => (
                  <motion.div
                    key={email.from}
                    ref={i === 0 ? firstEmailRef : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.3, duration: 0.35 }}
                    className={`flex items-start gap-2 px-3 py-2 border-b border-border last:border-0 transition-colors ${
                      i === 0 && step === "clicking" ? "bg-primary/10" : ""
                    }`}
                  >
                    <div className="mt-1 shrink-0">
                      {email.unread ? (
                        <motion.span
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="block w-2 h-2 rounded-full bg-primary"
                        />
                      ) : (
                        <span className="block w-2 h-2 rounded-full bg-border" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-sans truncate ${email.unread ? "font-bold text-foreground" : "font-medium text-muted-foreground"}`}>
                          {email.from}
                        </span>
                        <span className="text-[9px] font-sans text-muted-foreground shrink-0 ml-1">{email.time}</span>
                      </div>
                      <span className="text-[9px] font-sans text-muted-foreground/70 truncate block">{email.subject}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {showEmail && (
              <motion.div
                key="email-view"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex flex-col p-2 overflow-hidden"
              >
                {/* Top section: back + header + body skeleton */}
                <div className="shrink-0">
                  <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span className="text-[9px] font-sans">Voltar</span>
                  </div>
                  <div className="border-b border-border pb-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-sans font-bold text-foreground">Cliente Silva</span>
                      <span className="text-[9px] font-sans text-muted-foreground">10:30</span>
                    </div>
                    <span className="text-[9px] font-sans text-muted-foreground">Consulta sobre processo trabalhista</span>
                  </div>
                  <div className="flex flex-col gap-1 py-1">
                    <div className="h-1.5 bg-muted rounded-full w-[90%]" />
                    <div className="h-1.5 bg-muted rounded-full w-[75%]" />
                  </div>
                </div>

                {/* Reply area – pinned to bottom */}
                <div className="mt-auto mb-4 border border-border rounded bg-muted/30 p-1.5 flex flex-col gap-1 shrink-0">
                  <div
                    ref={replyFieldRef}
                    className="min-h-[14px] text-[9px] font-sans text-foreground leading-tight"
                  >
                    {(step === "typing" || step === "movingToSend" || isSent) && (
                      <span>{REPLY_TEXT.slice(0, step === "typing" ? typedChars : REPLY_TEXT.length)}</span>
                    )}
                    {step === "typing" && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6 }}
                        className="inline-block w-[4px] h-[10px] bg-primary ml-[1px] align-middle"
                      />
                    )}
                  </div>
                  <div className="flex justify-end">
                    <motion.div
                      ref={sendButtonRef}
                      animate={isSent ? { scale: [1, 1.15, 1] } : {}}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-[9px] font-sans font-semibold ${
                        isSent
                          ? "bg-success text-success-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {isSent ? (
                        <>
                          <CheckCircle weight="fill" className="w-3 h-3" />
                          <span>Enviado</span>
                        </>
                      ) : (
                        <>
                          <PaperPlaneRight weight="fill" className="w-3 h-3" />
                          <span>Enviar</span>
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Animated cursor */}
        {step !== "reset" && (
          <motion.div
            className="absolute z-10 pointer-events-none"
            animate={{
              left: `${cursorTarget.x}%`,
              top: `${cursorTarget.y}%`,
              scale: step === "clicking" || step === "sent" ? [1, 0.75, 1] : 1,
            }}
            transition={{
              left: { duration: 0.7, ease: "easeInOut" },
              top: { duration: 0.7, ease: "easeInOut" },
              scale: { duration: 0.25 },
            }}
            style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
          >
            <CursorSVG />
          </motion.div>
        )}
      </div>
    </div>
  );
}
