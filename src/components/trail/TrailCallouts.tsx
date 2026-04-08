interface Callout {
  label: string;
  description: string;
  accent: string;
  top: string;
  left: string;
  modifier?: string;
}

const callouts: Callout[] = [
  {
    label: "Captação multicanal",
    description: "Google, redes sociais e e-mail integrados na plataforma.",
    accent: "#6e5bbb",
    top: "76.6%",
    left: "8.5%",
    modifier: "trail-callout--topleft",
  },
  {
    label: "Triagem com IA",
    description: "IA que analisa, segmenta e filtra leads automaticamente.",
    accent: "#818cf8",
    top: "28%",
    left: "40%",
  },
  {
    label: "Qualificação",
    description: "Leads qualificados prontos para agendar consultas.",
    accent: "#22c55e",
    top: "28%",
    left: "72%",
  },
];

const TrailCallouts = () => (
  <div className="trail-callouts" aria-hidden="true">
    {callouts.map((c, i) => (
      <div
        key={i}
        className={`trail-callout ${c.modifier || ""}`}
        style={{
          top: c.top,
          left: c.left,
          "--callout-accent": c.accent,
        } as React.CSSProperties}
      >
        <span className="trail-callout__dot" />
        <div className="trail-callout__body">
          <p className="trail-callout__label">{c.label}</p>
          <p className="trail-callout__description">{c.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default TrailCallouts;
