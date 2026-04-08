import { motion } from "framer-motion";
import { MagnifyingGlass, Compass, PencilSimple, Code, RocketLaunch, ArrowsClockwise } from "@phosphor-icons/react";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
const mainSteps = [{
  icon: MagnifyingGlass,
  title: "Descoberta",
  description: "Entendemos seu negócio, público e objetivos"
}, {
  icon: Compass,
  title: "Estratégia",
  description: "Definimos posicionamento e diferenciais"
}, {
  icon: PencilSimple,
  title: "Design",
  description: "Configuramos sua plataforma personalizada"
}, {
  icon: Code,
  title: "Desenvolvimento",
  description: "Integramos CRM, automação e funis"
}, {
  icon: RocketLaunch,
  title: "Lançamento",
  description: "Ativamos e monitoramos seus resultados"
}];
const supportStep = {
  icon: ArrowsClockwise,
  title: "Suporte e Melhorias",
  description: "Acompanhamento contínuo"
};
const allSteps = [...mainSteps, supportStep];

// Hover variants
const stepHoverVariant = {
  rest: {
    scale: 1
  },
  hover: {
    scale: 1.02
  }
};
const circleHoverVariant = {
  rest: {
    scale: 1,
    boxShadow: "0 0 20px rgba(110, 91, 187, 0.3)",
    borderWidth: "0px",
    borderColor: "rgba(255, 255, 255, 0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0 0 50px rgba(110, 91, 187, 0.6)",
    borderWidth: "3px",
    borderColor: "rgba(255, 255, 255, 1)"
  }
};
const textHoverVariant = {
  rest: {
    color: "rgba(255, 255, 255, 1)"
  },
  hover: {
    color: "rgba(110, 91, 187, 1)"
  }
};
const descriptionHoverVariant = {
  rest: {
    color: "rgba(255, 255, 255, 0.6)"
  },
  hover: {
    color: "rgba(255, 255, 255, 0.9)"
  }
};
export const Process = () => {
  return <motion.section id="processo" initial="hidden" whileInView="visible" viewport={defaultViewport} className="bg-secondary overflow-hidden py-10 md:py-[90px]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
            Mapa de{" "}
            <em className="text-primary italic">implementação</em>
          </h2>
        </motion.div>

        {/* All Steps - Desktop */}
        <div className="hidden lg:block relative">
        {/* Horizontal Connector Line */}
        <div className="absolute top-12 flex items-center" style={{
          left: 'calc(100% / 12)',
          right: 'calc(100% / 12)'
        }}>
          {/* Linha base */}
          <div className="w-full h-1 bg-primary/30 rounded-full relative overflow-hidden">
            {/* Gradiente animado */}
            <motion.div className="absolute inset-0 h-full" style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(110, 91, 187, 0.3) 10%, rgba(110, 91, 187, 1) 50%, rgba(110, 91, 187, 0.3) 90%, transparent 100%)",
              width: "30%"
            }} initial={{
              x: "-100%"
            }} animate={{
              x: "450%"
            }} transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 2
            }} />
          </div>
        </div>

          {/* Steps Row - All 6 steps */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="relative flex justify-between items-start">
            {allSteps.map((step, index) => {
            const isSupport = index === allSteps.length - 1;
            return <motion.div key={index} variants={staggerItem} initial="rest" whileHover="hover" animate="rest" className="flex flex-col items-center text-center flex-1 cursor-pointer">
                  {/* Circle */}
                  <motion.div className={`${isSupport ? "w-24 h-24 border-4 border-white" : "w-20 h-20 md:w-24 md:h-24"} rounded-full bg-primary flex items-center justify-center mb-4 relative z-10 border-solid`} variants={circleHoverVariant} initial={{
                scale: 0,
                opacity: 0,
                boxShadow: "0 0 20px rgba(110, 91, 187, 0.3)"
              }} whileInView={{
                scale: 1,
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}>
                    {isSupport ? <motion.div animate={{
                  rotate: 360
                }} transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}>
                        <step.icon size={36} weight="duotone" className="text-secondary" />
                      </motion.div> : <step.icon size={32} weight="duotone" className="text-secondary" />}
                  </motion.div>

                  {/* Text */}
                  <motion.h3 className="font-sans font-bold text-sm uppercase tracking-wide mb-1" variants={textHoverVariant} transition={{
                duration: 0.2
              }}>
                    {step.title}
                  </motion.h3>
                  <motion.p className="text-xs leading-relaxed max-w-[140px]" variants={descriptionHoverVariant} transition={{
                duration: 0.2
              }}>
                    {step.description}
                  </motion.p>
                </motion.div>;
          })}
          </motion.div>
        </div>

        {/* Mobile Layout - Vertical */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="lg:hidden relative">
          {/* Vertical Line */}
          <motion.div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" initial={{
          scaleY: 0
        }} whileInView={{
          scaleY: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 1,
          ease: "easeOut"
        }} style={{
          transformOrigin: "top"
        }} />

          {/* Steps */}
          <div className="space-y-8">
            {[...mainSteps, supportStep].map((step, index) => <motion.div key={index} variants={staggerItem} className="flex items-start gap-6">
                {/* Circle */}
                <motion.div className={`relative z-10 flex-shrink-0 w-16 h-16 ${index === mainSteps.length ? "md:w-20 md:h-20 border-4 border-white" : ""} rounded-full bg-primary shadow-gold flex items-center justify-center`} initial={{
              scale: 0,
              opacity: 0
            }} whileInView={{
              scale: 1,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2 + index * 0.1,
              type: "spring",
              stiffness: 200
            }}>
                  {index === mainSteps.length ? <motion.div animate={{
                rotate: 360
              }} transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}>
                      <step.icon size={28} weight="duotone" className="text-secondary" />
                    </motion.div> : <step.icon size={24} weight="duotone" className="text-secondary" />}
                </motion.div>

                {/* Text */}
                <div className="pt-2">
                  <h3 className="text-white font-sans md:font-bold text-sm uppercase tracking-wide mb-1">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </motion.section>;
};