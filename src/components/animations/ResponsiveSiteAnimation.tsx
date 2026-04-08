import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lawyerImg from "@/assets/lawyer-laptop.avif";

type Breakpoint = "desktop" | "tablet" | "mobile";

const CYCLE: Breakpoint[] = ["desktop", "tablet", "mobile"];
const INTERVAL = 2500;

const frameSize: Record<Breakpoint, { w: string; h: string }> = {
  desktop: { w: "88%", h: "82%" },
  tablet: { w: "58%", h: "82%" },
  mobile: { w: "34%", h: "82%" },
};

export default function ResponsiveSiteAnimation() {
  const [idx, setIdx] = useState(0);
  const bp = CYCLE[idx];

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % CYCLE.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  const isDesktop = bp === "desktop";
  const isMobile = bp === "mobile";

  return (
    <div className="w-full aspect-video bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 flex items-center justify-center overflow-hidden relative">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Device label */}
      <AnimatePresence mode="wait">
        <motion.span
          key={bp}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="absolute bottom-2 text-[11px] font-sans font-medium tracking-widest uppercase text-muted-foreground"
        >
          {bp}
        </motion.span>
      </AnimatePresence>

      {/* Browser frame */}
      <motion.div
        animate={{ width: frameSize[bp].w, height: frameSize[bp].h }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="rounded-lg border border-border bg-background shadow-lg overflow-hidden flex flex-col"
      >
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-muted shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
          <div className="ml-2 flex-1 h-3 rounded-full bg-border max-w-[60%]" />
        </div>

        {/* Page content */}
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden bg-background">
          {/* Navbar */}
          <div className="flex items-center justify-between shrink-0">
            <div className="w-8 h-2 rounded-full bg-primary" />
            {isMobile ? (
              <div className="flex flex-col gap-[2px]">
                <span className="w-4 h-[2px] bg-muted-foreground/50 rounded" />
                <span className="w-4 h-[2px] bg-muted-foreground/50 rounded" />
                <span className="w-4 h-[2px] bg-muted-foreground/50 rounded" />
              </div>
            ) : (
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="w-5 h-1.5 rounded-full bg-muted-foreground/30" />
                ))}
              </div>
            )}
          </div>

          {/* Hero */}
          <motion.div
            layout
            className={`flex gap-2 ${isDesktop ? "flex-row" : "flex-col"} flex-1 min-h-0`}
          >
            {/* Image block - real lawyer image */}
            <motion.div
              layout
              className={`rounded overflow-hidden border border-border ${
                isDesktop ? "w-1/2" : "w-full"
              } ${isDesktop ? "h-full" : "h-[40%]"} shrink-0`}
            >
              <img
                src={lawyerImg}
                alt=""
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
            {/* Text block */}
            <div className={`flex flex-col gap-1.5 justify-center ${isDesktop ? "w-1/2" : "w-full"}`}>
              <div className="h-2 w-[80%] rounded-full bg-foreground/20" />
              <div className="h-2 w-[60%] rounded-full bg-foreground/12" />
              <div className="h-1.5 w-[40%] rounded-full bg-primary/60 mt-0.5" />
            </div>
          </motion.div>

          {/* Cards row */}
          <motion.div
            layout
            className={`flex gap-1.5 shrink-0 ${isMobile ? "flex-col" : "flex-row"}`}
          >
            {[1, 2, 3].map((n) => (
              <motion.div
                layout
                key={n}
                className={`rounded bg-muted border border-border p-1.5 ${
                  isMobile ? "w-full h-4" : "flex-1 h-6"
                }`}
              >
                <div className="w-4 h-1.5 rounded-full bg-primary/40" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
