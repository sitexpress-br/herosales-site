import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WhatsappLogo, InstagramLogo, GoogleLogo, Globe, CheckCircle } from "@phosphor-icons/react";

const STAGES = ["Novo", "Atendendo", "Agendado", "Convertido"];

const SOURCE_COLORS: Record<string, string> = {
  WhatsApp: "text-success bg-success/10 border-success/30",
  Instagram: "text-pink-400 bg-pink-400/10 border-pink-400/30",
  Google: "text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/30",
  Site: "text-primary bg-primary/10 border-primary/30",
};

const SOURCE_ICONS: Record<string, React.ElementType> = {
  WhatsApp: WhatsappLogo,
  Instagram: InstagramLogo,
  Google: GoogleLogo,
  Site: Globe,
};

const CONTACTS = [
  { id: 1, name: "Ana Lima",    source: "WhatsApp",  stage: 0 },
  { id: 2, name: "Carlos M.",   source: "Instagram", stage: 0 },
  { id: 3, name: "Dr. Renata",  source: "Google",    stage: 0 },
];

type Contact = typeof CONTACTS[number] & { stage: number };

export default function CRMAnimation() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const s = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    const run = () => {
      setContacts([]);
      setPhase(0);

      // Phase 1: contacts appear one by one in Novo
      s(() => setContacts([{ ...CONTACTS[0] }]), 400);
      s(() => setContacts([{ ...CONTACTS[0] }, { ...CONTACTS[1] }]), 900);
      s(() => setContacts([{ ...CONTACTS[0] }, { ...CONTACTS[1] }, { ...CONTACTS[2] }]), 1400);

      // Phase 2: first contact moves to Atendendo
      s(() => setContacts(prev => prev.map(c => c.id === 1 ? { ...c, stage: 1 } : c)), 2200);

      // Phase 3: second contact moves to Agendado
      s(() => setContacts(prev => prev.map(c => c.id === 2 ? { ...c, stage: 2 } : c)), 3100);

      // Phase 4: first contact moves to Convertido
      s(() => {
        setContacts(prev => prev.map(c => c.id === 1 ? { ...c, stage: 3 } : c));
        setPhase(4);
      }, 4000);

      // Reset
      s(() => setPhase(0), 6500);
    };

    run();
    const loop = setInterval(run, 7000);
    return () => { timers.forEach(clearTimeout); clearInterval(loop); };
  }, []);

  const contactsByStage = (stageIdx: number) =>
    contacts.filter(c => c.stage === stageIdx);

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

      <div className="w-[92%] max-w-[320px] z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-2 px-0.5">
          <span className="text-[10px] font-semibold text-white/70 font-sans">Pipeline CRM</span>
          <span className="flex items-center gap-1 text-[8px] font-semibold text-success">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            {contacts.length} contato{contacts.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Kanban columns */}
        <div className="grid grid-cols-4 gap-1.5">
          {STAGES.map((stage, stageIdx) => {
            const isConverted = stageIdx === 3;
            return (
              <div key={stage} className="flex flex-col gap-1">
                {/* Column header */}
                <div className={`px-1.5 py-1 rounded-md text-center ${
                  isConverted ? "bg-success/15 border border-success/30" : "bg-white/5 border border-white/10"
                }`}>
                  <span className={`text-[8px] font-bold font-sans ${isConverted ? "text-success" : "text-white/50"}`}>
                    {stage}
                  </span>
                </div>

                {/* Cards */}
                <div className="min-h-[52px] flex flex-col gap-1">
                  <AnimatePresence>
                    {contactsByStage(stageIdx).map(contact => {
                      const Icon = SOURCE_ICONS[contact.source];
                      return (
                        <motion.div
                          key={contact.id}
                          layout
                          layoutId={`contact-${contact.id}`}
                          initial={{ opacity: 0, scale: 0.85, y: -6 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.85 }}
                          transition={{ type: "spring", stiffness: 300, damping: 24 }}
                          className={`rounded-md px-1.5 py-1.5 border ${
                            isConverted
                              ? "bg-success/10 border-success/30"
                              : "bg-background/80 border-border/50"
                          }`}
                        >
                          <p className={`text-[8px] font-semibold leading-tight truncate ${
                            isConverted ? "text-success" : "text-foreground"
                          }`}>
                            {contact.name}
                          </p>
                          <div className={`inline-flex items-center gap-0.5 mt-0.5 px-1 py-px rounded-full border text-[7px] font-medium ${SOURCE_COLORS[contact.source]}`}>
                            <Icon weight="fill" className="w-2 h-2" />
                            {contact.source}
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conversion badge */}
        <AnimatePresence>
          {phase === 4 && (
            <motion.div
              className="mt-2 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/95 border border-success/30"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle weight="fill" className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="text-[9px] font-semibold text-white">
                Tudo centralizado. Nenhum lead perdido.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
