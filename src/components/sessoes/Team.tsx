import { useRef, useState, useEffect, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import teamPhoto from "@/assets/team-photo.webp";
import teamGiovanna from "@/assets/team-giovanna.webp";
import teamGabi from "@/assets/team-gabi.webp";
import teamJoyce from "@/assets/team-joyce.webp";
import teamGiba from "@/assets/team-giba.webp";
import teamBruna from "@/assets/team-bruna.webp";
import teamMarcos from "@/assets/team-marcos.webp";
import { Badge } from "@/components/ui/badge";

const TransparentHoverImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        canvasRef.current = canvas;
        ctxRef.current = ctx;
      }
    };
  }, [src]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    const img = imgRef.current;
    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!img || !ctx || !canvas) return;

    const rect = img.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);

    if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
      setIsHovered(false);
      return;
    }

    const alpha = ctx.getImageData(x, y, 1, 1).data[3];
    setIsHovered(alpha > 10);
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full object-contain transition-all duration-500 ease-out origin-bottom ${
        isHovered
          ? "scale-105 [filter:drop-shadow(2px_0_0_#6e5bbb)_drop-shadow(-2px_0_0_#6e5bbb)_drop-shadow(0_2px_0_#6e5bbb)_drop-shadow(0_-2px_0_#6e5bbb)]"
          : ""
      } ${className ?? ""}`}
    />
  );
};

export const Team = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [glowX, setGlowX] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const members: { name: string; role: string; photo: string; width: string; mobileWidth: string; extraClass?: string }[] = [
    { name: "Darlei", role: "Product Manager", photo: teamPhoto, width: "w-[210px]", mobileWidth: "w-[120px]" },
    { name: "Giovanna", role: "Comercial", photo: teamGiovanna, width: "w-[180px]", mobileWidth: "w-[110px]" },
    { name: "Gabi", role: "Social Media", photo: teamGabi, width: "w-[185px]", mobileWidth: "w-[110px]" },
    { name: "Joyce", role: "Sucesso do Cliente", photo: teamJoyce, width: "w-[160px]", mobileWidth: "w-[100px]" },
    { name: "Giba", role: "Gestão de Negócios", photo: teamGiba, width: "w-[205px]", mobileWidth: "w-[120px]" },
    { name: "Bruna", role: "Head Comercial", photo: teamBruna, width: "w-[180px]", mobileWidth: "w-[110px]", extraClass: "-ml-16" },
    { name: "Marcos", role: "Gestão de Negócios", photo: teamMarcos, width: "w-[210px]", mobileWidth: "w-[120px]" },
  ];

  const handleMemberHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const sectionRect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2 - sectionRect.left;
    setGlowX(centerX);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background pb-0 overflow-hidden">
      <div className="text-center pt-16 pb-8 md:pb-12 px-4">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
          Nosso Time
        </p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-secondary mb-4">
          Conheça quem faz <em className="text-primary italic">acontecer</em>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Uma equipe dedicada a transformar a presença digital de clínicas em autoridade real.
        </p>
      </div>

      <div
        className="absolute bottom-[2px] left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: '80%',
          height: '300px',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(203,171,98,0.15) 0%, rgba(203,171,98,0.05) 40%, transparent 70%)',
        }}
      />

      {/* Mobile: horizontal scroll carousel */}
      {isMobile ? (
        <div className="relative z-[1]">
          <p className="text-center text-muted-foreground text-[10px] pb-1">← arraste para ver mais →</p>
          <div
            className="flex items-end overflow-x-auto snap-x snap-mandatory scrollbar-hide px-8 gap-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {members.map((member) => (
              <div
                key={member.name}
                className="snap-center shrink-0 flex flex-col items-center relative"
              >
                <div className={`relative ${member.mobileWidth}`}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full object-contain"
                  />
                  <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 z-10">
                    <Badge variant="gold">
                      <span className="flex flex-col items-center leading-tight">
                        <span className="font-semibold text-[11px]">{member.name}</span>
                        <span className="text-[9px] opacity-80 font-normal">{member.role}</span>
                      </span>
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Desktop: original overlapping layout */
        <div
          className="relative z-[1] flex justify-center items-end px-4"
          style={{ clipPath: 'inset(-100% -100% 0 -100%)' }}
          onMouseLeave={() => setGlowX(null)}
        >
          {members.map((member, index) => (
            <div
              key={member.name}
              className={`relative flex flex-col items-center ${member.extraClass ? member.extraClass : index > 0 ? '-ml-10' : ''}`}
              style={{ zIndex: activeIndex === index ? 10 : 0 }}
              onMouseEnter={(e) => { setActiveIndex(index); handleMemberHover(e); }}
            >
              <div className={`relative ${member.width}`} style={{ clipPath: 'inset(-100% -100% 0 -100%)' }}>
                <TransparentHoverImage
                  src={member.photo}
                  alt={member.name}
                />
              </div>
              <div className="absolute bottom-[10px] z-10">
                <Badge variant="gold">
                  <span className="flex flex-col items-center leading-tight">
                    <span className="font-semibold">{member.name}</span>
                    <span className="text-[10px] opacity-80 font-normal">{member.role}</span>
                  </span>
                </Badge>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="relative w-full h-[2px] bg-primary">
        <div
          className="absolute inset-0 transition-all duration-500 pointer-events-none"
          style={{
            background: glowX !== null
              ? `radial-gradient(ellipse 120px 20px at ${glowX}px 50%, rgba(203,171,98,0.9), rgba(203,171,98,0.4) 40%, transparent 100%)`
              : 'transparent',
            opacity: glowX !== null ? 1 : 0,
            boxShadow: glowX !== null
              ? `0 0 15px 5px rgba(203,171,98,0.3)`
              : 'none',
          }}
        />
      </div>
    </section>
  );
};
