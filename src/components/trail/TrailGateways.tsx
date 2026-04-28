import { Briefcase } from "lucide-react";

const greenStyle = {
  "--target-border": "rgba(34,197,94,0.5)",
  "--target-color": "rgba(236,253,245,0.95)",
  "--target-shadow": "0 15px 35px rgba(34,197,94,0.25)",
  "--target-icon-bg": "rgba(34,197,94,0.18)",
  "--target-icon-color": "#4ade80",
  "--target-label-opacity": "1",
} as React.CSSProperties;

interface TrailGatewaysProps {
  targetLabel?: string;
}

const TrailGateways = ({ targetLabel = "Contratos Fechados" }: TrailGatewaysProps) => (
  <div className="trail-frame__targets" aria-hidden="true">
    <div
      className="trail-target trail-target--pulse"
      style={{ top: "50%", left: "91%", ...greenStyle }}
    >
      <span className="trail-target__icon">
        <Briefcase size={14} />
      </span>
      <span className="trail-target__label">{targetLabel}</span>
    </div>
  </div>
);

export default TrailGateways;
