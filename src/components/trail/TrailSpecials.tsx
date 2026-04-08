import { ShieldAlert } from "lucide-react";

const TrailSpecials = () => (
  <div
    className="trail-risk"
    aria-hidden="true"
    style={{ top: "82%", left: "74.7%" }}
  >
    <span className="trail-risk__icon">
      <ShieldAlert size={16} />
    </span>
    <div className="trail-risk__copy">
      <p style={{ margin: 0 }}>Lead Descartado</p>
      <small>Fora do perfil ideal</small>
    </div>
  </div>
);

export default TrailSpecials;
