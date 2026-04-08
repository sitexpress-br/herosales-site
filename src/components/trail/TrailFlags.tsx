import { Instagram, Linkedin, Facebook } from "lucide-react";
import { TiktokLogo } from "@phosphor-icons/react";
import googleIcon from "@/assets/floating/icon-google.svg";

const flags = [
  { icon: null, isGoogle: true, isTiktok: false, accent: "linear-gradient(90deg,#4285f4,#34a853)", color: "#4285f4", top: "29.4%" },
  { icon: Instagram, isGoogle: false, isTiktok: false, accent: "linear-gradient(90deg,#e1306c,#c13584)", color: "#e1306c", top: "39.7%" },
  { icon: Linkedin, isGoogle: false, isTiktok: false, accent: "linear-gradient(90deg,#0a66c2,#004182)", color: "#0a66c2", top: "50%" },
  { icon: Facebook, isGoogle: false, isTiktok: false, accent: "linear-gradient(90deg,#1877f2,#0d5bbf)", color: "#1877f2", top: "60.3%" },
  { icon: null, isGoogle: false, isTiktok: true, accent: "linear-gradient(90deg,#010101,#69c9d0)", color: "#69c9d0", top: "70.6%" },
];

const TrailFlags = () => (
  <div className="trail-frame__flags" aria-hidden="true">
    {flags.map((f, i) => {
      const Icon = f.icon;
      return (
        <div
          key={i}
          className="trail-flag"
          style={{
            "--flag-accent": f.accent,
            "--flag-accent-color": f.color,
            top: f.top,
            left: "3.5%",
          } as React.CSSProperties}
        >
          {f.isGoogle ? (
            <img src={googleIcon} alt="Google" width={24} height={24} />
          ) : f.isTiktok ? (
            <TiktokLogo size={24} weight="fill" style={{ color: f.color }} />
          ) : (
            <Icon size={24} style={{ color: f.color }} />
          )}
        </div>
      );
    })}
  </div>
);

export default TrailFlags;
