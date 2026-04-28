import { useEffect, useRef, useState } from "react";
import "./trail.css";
import { useIsMobile } from "@/hooks/use-mobile";
import TrailFrameMobile from "./TrailFrameMobile";
import TrailFlags from "./TrailFlags";
import TrailCore from "./TrailCore";
import TrailRouterNode from "./TrailRouterNode";
import TrailGateways from "./TrailGateways";
import TrailCallouts from "./TrailCallouts";
import TrailSpecials from "./TrailSpecials";
import TrailCanvas from "./TrailCanvas";

interface TrailFrameProps {
  targetLabel?: string;
}

const TrailFrame = ({ targetLabel }: TrailFrameProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<0 | 1>(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPhase(1);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="trail-frame" data-phase={phase} ref={ref}>
      {isMobile ? (
        <TrailFrameMobile phase={phase} targetLabel={targetLabel} />
      ) : (
        <div className="trail-frame__stage">
          <TrailCanvas />
          <TrailCore />
          <TrailRouterNode />
          <TrailFlags />
          <TrailGateways targetLabel={targetLabel} />
          <TrailCallouts />
          <TrailSpecials />
        </div>
      )}
    </div>
  );
};

export default TrailFrame;
