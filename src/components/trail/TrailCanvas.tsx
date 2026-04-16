import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function makeCurve(
  from: [number, number],
  to: [number, number],
  bend: number = 0.3
): THREE.CubicBezierCurve3 {
  const mid = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2] as const;
  return new THREE.CubicBezierCurve3(
    new THREE.Vector3(from[0], from[1], 0),
    new THREE.Vector3(lerp(from[0], mid[0], 0.5), from[1] + bend, 0),
    new THREE.Vector3(lerp(to[0], mid[0], 0.5), to[1] - bend, 0),
    new THREE.Vector3(to[0], to[1], 0)
  );
}

const W = 6;
const H = 1.8;
const pct = (xPct: number, yPct: number): [number, number] => [
  (xPct / 100) * 2 * W - W,
  -((yPct / 100) * 2 * H - H),
];

const FLAGS = [
  pct(6.1, 29.4),
  pct(6.1, 39.7),
  pct(6.1, 50),
  pct(6.1, 60.3),
  pct(6.1, 70.6),
];
const CORE = pct(40, 48.06);
const ROUTER = pct(71.51, 48.06);
const GATEWAY = pct(93.8, 50);
const FRAUD_SINK = pct(74.7, 82);

// Brand colors: gold tones
const FLAG_COLORS = ["#6e5bbb", "#e1306c", "#0a66c2", "#1877f2", "#6e5bbb"];
const GW_COLOR = "#22c55e";
const FRAUD_COLOR = "#f87171";

interface DotData {
  curve: THREE.CubicBezierCurve3;
  color: string;
  speed: number;
  offset: number;
}

function FlowingDots({ dots }: { dots: DotData[] }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tmpColor = useMemo(() => new THREE.Color(), []);

  useMemo(() => {
    if (!meshRef.current) return;
    dots.forEach((d, i) => {
      tmpColor.set(d.color);
      meshRef.current.setColorAt(i, tmpColor);
    });
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  }, [dots]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    dots.forEach((d, i) => {
      const progress = ((t * d.speed + d.offset) % 1 + 1) % 1;
      const pos = d.curve.getPoint(progress);
      dummy.position.copy(pos);
      dummy.scale.setScalar(0.06 + 0.02 * Math.sin(progress * Math.PI));
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (!meshRef.current.instanceColor) {
      dots.forEach((d, i) => {
        tmpColor.set(d.color);
        meshRef.current.setColorAt(i, tmpColor);
      });
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, dots.length]}>
      <circleGeometry args={[1, 16]} />
      {/* @ts-ignore - r3f material props */}
      <meshBasicMaterial transparent={true} opacity={0.85} toneMapped={false} />
    </instancedMesh>
  );
}

function Line({ curve, color }: { curve: THREE.CubicBezierCurve3; color: string }) {
  const geo = useMemo(() => {
    const pts = curve.getPoints(48);
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [curve]);

  const mat = useMemo(
    () => new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.18, toneMapped: false }),
    [color]
  );

  return <primitive object={new THREE.Line(geo, mat)} />;
}

function TrailLines({ curves, colors }: { curves: THREE.CubicBezierCurve3[]; colors: string[] }) {
  return (
    <group>
      {curves.map((curve, i) => (
        <Line key={i} curve={curve} color={colors[i]} />
      ))}
    </group>
  );
}

function Scene() {
  const { curves, lineColors, dots } = useMemo(() => {
    const allCurves: THREE.CubicBezierCurve3[] = [];
    const allLineColors: string[] = [];
    const allDots: DotData[] = [];

    FLAGS.forEach((f, i) => {
      const c = makeCurve(f, CORE, 0.15 * (i % 2 === 0 ? 1 : -1));
      allCurves.push(c);
      allLineColors.push(FLAG_COLORS[i]);
      for (let d = 0; d < 3; d++) {
        allDots.push({ curve: c, color: FLAG_COLORS[i], speed: 0.25 + Math.random() * 0.15, offset: d / 3 });
      }
    });

    const coreRouter = makeCurve(CORE, ROUTER, 0);
    allCurves.push(coreRouter);
    allLineColors.push("#6e5bbb");
    for (let d = 0; d < 4; d++) {
      allDots.push({ curve: coreRouter, color: "#d4b96e", speed: 0.3, offset: d / 4 });
    }

    const gwCurve = makeCurve(ROUTER, GATEWAY, 0);
    allCurves.push(gwCurve);
    allLineColors.push(GW_COLOR);
    for (let d = 0; d < 4; d++) {
      allDots.push({ curve: gwCurve, color: GW_COLOR, speed: 0.25 + Math.random() * 0.1, offset: d / 4 });
    }

    const fraudCurve = makeCurve(ROUTER, FRAUD_SINK, -0.4);
    allCurves.push(fraudCurve);
    allLineColors.push(FRAUD_COLOR);
    for (let d = 0; d < 2; d++) {
      allDots.push({ curve: fraudCurve, color: FRAUD_COLOR, speed: 0.15, offset: d / 2 });
    }

    return { curves: allCurves, lineColors: allLineColors, dots: allDots };
  }, []);

  return (
    <>
      <TrailLines curves={curves} colors={lineColors} />
      <FlowingDots dots={dots} />
    </>
  );
}

const TrailCanvas = () => (
  <div className="trail-frame__canvas">
    <Canvas
      orthographic
      camera={{ zoom: 1, position: [0, 0, 10], near: 0.1, far: 100 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
      resize={{ debounce: 100 }}
      onCreated={({ gl, camera }) => {
        gl.setClearColor(0x000000, 0);
        const cam = camera as THREE.OrthographicCamera;
        cam.left = -W;
        cam.right = W;
        cam.top = H;
        cam.bottom = -H;
        cam.updateProjectionMatrix();
      }}
    >
      <Scene />
    </Canvas>
  </div>
);

export { W, H };
export default TrailCanvas;
