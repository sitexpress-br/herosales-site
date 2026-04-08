import { motion } from "framer-motion";
import { LockSimple, Desktop, Cloud, ShieldCheck } from "@phosphor-icons/react";

const DATA_PARTICLES = [
  { label: "Nome", encrypted: "x9#k", delay: 0, direction: 1 },
  { label: "CPF", encrypted: "•••", delay: 1.2, direction: -1 },
  { label: "Email", encrypted: "ƒ7!m", delay: 2.4, direction: 1 },
  { label: "Dados", encrypted: "∆2§", delay: 3.6, direction: -1 },
];

function DataParticle({ label, encrypted, delay, direction }: typeof DATA_PARTICLES[number]) {
  const fromX = direction === 1 ? -90 : 90;
  const toX = direction === 1 ? 90 : -90;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-y-1/2"
      initial={{ x: fromX, opacity: 0 }}
      animate={{
        x: [fromX, fromX * 0.3, 0, toX * 0.3, toX],
        opacity: [0, 1, 1, 1, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: 1.8,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold whitespace-nowrap border"
        animate={{
          backgroundColor: [
            "hsl(var(--warning) / 0.15)",
            "hsl(var(--warning) / 0.15)",
            "hsl(var(--success) / 0.15)",
            "hsl(var(--success) / 0.15)",
            "hsl(var(--success) / 0.15)",
          ],
          borderColor: [
            "hsl(var(--warning) / 0.3)",
            "hsl(var(--warning) / 0.3)",
            "hsl(var(--success) / 0.3)",
            "hsl(var(--success) / 0.3)",
            "hsl(var(--success) / 0.3)",
          ],
          color: [
            "hsl(var(--warning))",
            "hsl(var(--warning))",
            "hsl(var(--success))",
            "hsl(var(--success))",
            "hsl(var(--success))",
          ],
        }}
        transition={{
          duration: 3,
          delay,
          repeat: Infinity,
          repeatDelay: 1.8,
          ease: "easeInOut",
        }}
      >
        <motion.span
          animate={{
            opacity: [1, 1, 0, 0, 0],
          }}
          transition={{ duration: 3, delay, repeat: Infinity, repeatDelay: 1.8 }}
          className="absolute"
        >
          {label}
        </motion.span>
        <motion.span
          animate={{
            opacity: [0, 0, 1, 1, 1],
          }}
          transition={{ duration: 3, delay, repeat: Infinity, repeatDelay: 1.8 }}
        >
          {encrypted}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function SSLAnimation() {
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

      {/* White container around elements */}
      <div className="bg-background rounded-xl p-5 flex flex-col items-center z-10 shadow-sm border border-border/50">
        {/* Badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 border border-success/30 mb-4">
          <ShieldCheck weight="bold" className="w-3.5 h-3.5 text-success" />
          <span className="text-[10px] font-sans font-semibold text-success tracking-wide">
            Conexão segura
          </span>
        </div>

        {/* Main content */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 w-full relative">
          {/* Client */}
          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center">
              <Desktop weight="duotone" className="w-5 h-5 text-foreground/70" />
            </div>
            <span className="text-[9px] font-sans text-muted-foreground font-medium">Seu site</span>
          </div>

          {/* Connection area with particles */}
          <div className="flex-1 relative h-16 flex items-center justify-center min-w-[120px]">
            {/* Dashed lines */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-success/30" />

            {/* Particles */}
            {DATA_PARTICLES.map((p) => (
              <DataParticle key={p.label} {...p} />
            ))}

            {/* Center lock */}
            <motion.div
              className="relative z-10 w-9 h-9 rounded-full bg-success/15 border border-success/30 flex items-center justify-center"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <LockSimple weight="fill" className="w-4 h-4 text-success" />
            </motion.div>
          </div>

          {/* Server */}
          <div className="flex flex-col items-center gap-1.5 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center">
              <Cloud weight="duotone" className="w-5 h-5 text-foreground/70" />
            </div>
            <span className="text-[9px] font-sans text-muted-foreground font-medium">Servidor</span>
          </div>
        </div>
      </div>
    </div>
  );
}
