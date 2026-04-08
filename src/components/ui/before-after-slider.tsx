import * as React from "react";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowsHorizontal } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Antes",
  afterLabel = "Depois",
  className,
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-[4/3] overflow-hidden rounded-2xl cursor-ew-resize select-none",
        className
      )}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Background - full visible) */}
      <img
        src={afterImage}
        alt="Depois"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before Image (Foreground - clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Antes"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-primary shadow-lg flex items-center justify-center"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <motion.div
          className={cn(
            "w-12 h-12 rounded-full bg-primary shadow-gold flex items-center justify-center",
            "border-4 border-background",
            isDragging ? "scale-110" : ""
          )}
          animate={{
            scale: isDragging ? 1.1 : [1, 1.05, 1],
          }}
          transition={{
            scale: isDragging
              ? { duration: 0.1 }
              : { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <ArrowsHorizontal size={24} weight="bold" className="text-primary-foreground" />
        </motion.div>
      </div>

      {/* Labels */}
      <Badge
        variant="secondary"
        className="absolute top-4 left-4 pointer-events-none"
      >
        {beforeLabel}
      </Badge>
      <Badge
        variant="gold"
        className="absolute top-4 right-4 pointer-events-none"
      >
        {afterLabel}
      </Badge>

      {/* Instruction hint */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-muted-foreground pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      >
        Arraste para comparar
      </motion.div>
    </div>
  );
};
