import { useEffect, useRef, useState } from "react";
import "./trail.css";
import TrailFlags from "./TrailFlags";
import TrailCore from "./TrailCore";
import TrailRouterNode from "./TrailRouterNode";
import TrailGateways from "./TrailGateways";
import TrailCallouts from "./TrailCallouts";
import TrailSpecials from "./TrailSpecials";
import TrailCanvas from "./TrailCanvas";

const TrailFrame = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<0 | 1>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase(1);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="trail-frame" data-phase={phase} ref={ref}>
      <div className="trail-frame__stage">
        <TrailCanvas />
        <TrailCore />
        <TrailRouterNode />
        <TrailFlags />
        <TrailGateways />
        <TrailCallouts />
        <TrailSpecials />
      </div>
    </div>
  );
};

export default TrailFrame;
