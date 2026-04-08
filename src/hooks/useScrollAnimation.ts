import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  duration?: number;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  opacity?: number;
  ease?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
}

/**
 * Hook para animações baseadas em scroll usando GSAP ScrollTrigger
 * @param options - Opções de configuração da animação
 * @returns ref - Referência para o elemento a ser animado
 */
export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
) => {
  const ref = useRef<T>(null);
  
  const {
    duration = 0.8,
    delay = 0,
    y = 40,
    x = 0,
    scale = 1,
    opacity = 0,
    ease = "power2.out",
    start = "top 85%",
    end = "bottom 20%",
    scrub = false,
    markers = false
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    
    // Configuração inicial
    gsap.set(element, {
      opacity,
      y,
      x,
      scale: scale !== 1 ? 0.95 : 1
    });

    // Animação
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
        markers,
        toggleActions: "play none none none"
      }
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [duration, delay, y, x, scale, opacity, ease, start, end, scrub, markers]);

  return ref;
};

/**
 * Hook para stagger animation em listas usando GSAP
 * @param options - Opções de configuração
 * @returns ref - Referência para o container pai
 */
export const useStaggerAnimation = <T extends HTMLElement = HTMLDivElement>(
  childSelector: string = "> *",
  options: ScrollAnimationOptions & { stagger?: number } = {}
) => {
  const ref = useRef<T>(null);

  const {
    duration = 0.6,
    delay = 0,
    y = 30,
    stagger = 0.1,
    ease = "power2.out",
    start = "top 85%"
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;
    const children = container.querySelectorAll(childSelector);

    if (children.length === 0) return;

    // Configuração inicial dos filhos
    gsap.set(children, {
      opacity: 0,
      y
    });

    // Animação com stagger
    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none"
      }
    });

    return () => {
      animation.kill();
    };
  }, [childSelector, duration, delay, y, stagger, ease, start]);

  return ref;
};

/**
 * Hook para parallax effect usando GSAP
 * @param speed - Velocidade do parallax (negativo = mais lento, positivo = mais rápido)
 * @returns ref - Referência para o elemento
 */
export const useParallax = <T extends HTMLElement = HTMLDivElement>(
  speed: number = 0.5
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const animation = gsap.to(element, {
      y: () => window.innerHeight * speed * 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      animation.kill();
    };
  }, [speed]);

  return ref;
};

/**
 * Hook para progress bar animation baseada em scroll
 * @param targetPercentage - Porcentagem final
 * @returns ref - Referência para o elemento da barra
 */
export const useProgressAnimation = <T extends HTMLElement = HTMLDivElement>(
  targetPercentage: number = 100
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    gsap.set(element, { width: "0%" });

    const animation = gsap.to(element, {
      width: `${targetPercentage}%`,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });

    return () => {
      animation.kill();
    };
  }, [targetPercentage]);

  return ref;
};

export default useScrollAnimation;
