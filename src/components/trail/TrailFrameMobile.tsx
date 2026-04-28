import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Instagram, Facebook } from "lucide-react";
import { CheckCircle, Warning, GearSix } from "@phosphor-icons/react";
import googleIcon from "@/assets/floating/icon-google.svg";

interface Props { phase: 0 | 1; targetLabel?: string }

const CALLOUTS = [
  {
    label: "Captação multicanal",
    desc: "Google, redes sociais e e-mail integrados.",
    accent: "#6e5bbb",
  },
  {
    label: "Triagem com IA",
    desc: "IA analisa e segmenta leads automaticamente.",
    accent: "#818cf8",
  },
  {
    label: "Qualificação",
    desc: "Leads prontos para agendar consultas.",
    accent: "#22c55e",
  },
];

const flagDefs = [
  {
    color: "#4285f4",
    render: () => <img src={googleIcon} alt="Google" width={13} height={13} />,
  },
  {
    color: "#e1306c",
    render: () => <Instagram size={13} color="#e1306c" />,
  },
  {
    color: "#1877f2",
    render: () => <Facebook size={13} color="#1877f2" />,
  },
];

function Connector({ color, phase }: { color: string; phase: 0 | 1 }) {
  return (
    <div className="flex-1 relative h-4 self-center overflow-hidden mx-2">
      {/* Track line */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-white/10" />
      {/* Flowing dots */}
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="m-dot-connector"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: color,
            animationDelay: `${i * 0.35}s`,
            animationPlayState: phase === 1 ? "running" : "paused",
          }}
        />
      ))}
    </div>
  );
}

export default function TrailFrameMobile({ phase, targetLabel = "Contratos Fechados" }: Props) {
  const [calloutIdx, setCalloutIdx] = useState(0);
  const [showBadge, setShowBadge] = useState(false);
  const badgeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (phase === 0) return;
    const interval = setInterval(
      () => setCalloutIdx((i) => (i + 1) % CALLOUTS.length),
      3000
    );
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase === 0) return;
    const loop = setInterval(() => {
      setShowBadge(true);
      badgeTimerRef.current = setTimeout(() => setShowBadge(false), 1400);
    }, 5000);
    return () => {
      clearInterval(loop);
      if (badgeTimerRef.current) clearTimeout(badgeTimerRef.current);
    };
  }, [phase]);

  const c = CALLOUTS[calloutIdx];

  return (
    <div className="trail-frame__mobile">
      {/* Sweep overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, transparent, rgba(110,91,187,0.35), transparent 65%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col gap-3 p-4">
        {/* ─── Callout cycling ─── */}
        <div className="h-14 relative overflow-hidden flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={calloutIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: phase === 1 ? 1 : 0, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="absolute inset-0 flex items-start gap-2 px-3 py-2 rounded-xl"
              style={{
                background: "rgba(2,6,23,0.88)",
                border: "1px solid rgba(148,163,184,0.22)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full mt-0.5 flex-shrink-0"
                style={{
                  backgroundColor: c.accent,
                  boxShadow: `0 0 6px ${c.accent}`,
                }}
              />
              <div>
                <p className="text-[11px] font-semibold text-white/95 leading-none mb-0.5 font-sans">
                  {c.label}
                </p>
                <p className="text-[9px] text-white/55 leading-tight font-sans">{c.desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Flow row ─── */}
        <div
          className="flex-1 flex items-center"
          style={{
            opacity: phase === 1 ? 1 : 0,
            transition: "opacity 0.4s ease 0.15s",
          }}
        >
          {/* Flags column */}
          <div className="flex flex-col gap-1.5 flex-shrink-0">
            {flagDefs.map((f, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle, ${f.color}30 0%, rgba(2,6,23,0.9) 65%)`,
                  border: `1px solid ${f.color}40`,
                  boxShadow: `0 0 6px ${f.color}20`,
                }}
              >
                {f.render()}
              </div>
            ))}
          </div>

          {/* Connector → Core */}
          <Connector color="#6e5bbb" phase={phase} />

          {/* Core (CRM) */}
          <div className="flex-shrink-0 flex flex-col items-center gap-1" style={{ width: 52 }}>
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background:
                  "radial-gradient(circle, rgba(110,91,187,0.28) 0%, rgba(2,6,23,0.9) 65%)",
                border: "1px solid rgba(110,91,187,0.42)",
                boxShadow: "0 0 14px rgba(110,91,187,0.18)",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <GearSix weight="thin" size={22} className="text-slate-400/50" />
              </motion.div>
            </div>
            <span className="text-[7px] font-bold text-white/35 uppercase tracking-wider font-sans">
              CRM
            </span>
          </div>

          {/* Connector → Gateway */}
          <Connector color="#22c55e" phase={phase} />

          {/* Gateway */}
          <div
            className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
            style={{
              background: "rgba(2,6,23,0.9)",
              border: "1px solid rgba(34,197,94,0.42)",
              boxShadow: "0 6px 18px rgba(34,197,94,0.12)",
            }}
          >
            <CheckCircle weight="fill" size={11} className="text-green-400" />
            <span className="text-[8.5px] font-semibold font-sans whitespace-nowrap"
              style={{ color: "rgba(236,253,245,0.9)" }}>
              {targetLabel}
            </span>
          </div>
        </div>

        {/* ─── Lead descartado badge ─── */}
        <div className="h-8 flex-shrink-0 relative">
          <AnimatePresence>
            {showBadge && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg"
                style={{
                  background: "rgba(15,23,42,0.95)",
                  border: "1px solid rgba(248,113,113,0.42)",
                  boxShadow: "0 4px 14px rgba(248,113,113,0.12)",
                }}
              >
                <Warning weight="fill" size={11} className="text-red-400" />
                <span className="text-[9px] font-semibold font-sans text-red-100/90">
                  Lead Descartado
                </span>
                <span className="text-[8px] font-sans text-red-200/45">— Fora do perfil</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
