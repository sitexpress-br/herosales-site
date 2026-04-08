import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

import marquee001 from "@/assets/marquee/001.avif";
import marquee002 from "@/assets/marquee/002.avif";
import marquee003 from "@/assets/marquee/003.avif";
import marquee004 from "@/assets/marquee/004.avif";
import marquee005 from "@/assets/marquee/005.avif";
import marquee006 from "@/assets/marquee/006.avif";
import marquee007 from "@/assets/marquee/007.avif";
import marquee008 from "@/assets/marquee/008.avif";
import marquee009 from "@/assets/marquee/009.avif";
import marquee010 from "@/assets/marquee/010.avif";
import marquee011 from "@/assets/marquee/011.avif";
import marquee012 from "@/assets/marquee/012.avif";

const images = [
  marquee001, marquee002, marquee003, marquee004,
  marquee005, marquee006, marquee007, marquee008,
  marquee009, marquee010, marquee011, marquee012,
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PortfolioMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const updateScales = useCallback(() => {
    if (!trackRef.current) return;
    const items = trackRef.current.querySelectorAll<HTMLElement>("[data-marquee-item]");
    const centerX = window.innerWidth / 2;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const distance = Math.abs(itemCenterX - centerX);
      const maxDistance = window.innerWidth / 2;
      const ratio = Math.min(distance / maxDistance, 1);
      // scale: 1.0 at center → 0.65 at edges
      const scale = 1 - ratio * 0.35;
      item.style.transform = `scale(${scale})`;
    });
  }, []);

  useEffect(() => {
    let rafId: number;
    const loop = () => {
      updateScales();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [updateScales]);

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6 mb-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-center text-secondary"
        >
          Sites que já criamos para{" "}
          <em className="font-display text-primary italic">clínicas</em>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="font-sans text-base md:text-lg text-center text-secondary/70 mt-4 max-w-2xl mx-auto"
        >
          Cada projeto é pensado para transmitir autoridade, confiança e profissionalismo — exatamente o que seus futuros clientes procuram.
        </motion.p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div ref={trackRef} className="flex animate-scroll-fast md:animate-scroll-desktop">
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              data-marquee-item
              className="flex-shrink-0 mx-1 will-change-transform"
              style={{ transition: "transform 0.15s linear" }}
            >
              <img
                src={img}
                alt={`Portfolio ${(i % 12) + 1}`}
                className="h-[450px] md:h-[600px] w-auto rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioMarquee;
