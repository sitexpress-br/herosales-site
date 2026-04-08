import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.webp";
import client1 from "@/assets/clients/client-1.avif";
import client2 from "@/assets/clients/client-2.avif";
import client4 from "@/assets/clients/client-4.avif";
import client5 from "@/assets/clients/client-5.avif";
import client7 from "@/assets/clients/client-7.webp";
import client8 from "@/assets/clients/client-8.webp";
import client9 from "@/assets/clients/client-9.webp";
import client10 from "@/assets/clients/client-10.webp";
import client12 from "@/assets/clients/client-12.webp";
import client13 from "@/assets/clients/client-13.webp";
import client14 from "@/assets/clients/client-14.webp";
import {
  fadeInUp,
  slideInLeft,
  staggerContainer,
  staggerItem,
  badgeVariants,
  defaultViewport,
} from "@/lib/animations";

const clientAvatars = [client1, client2, client4, client5, client7, client8, client9, client10, client12, client13, client14];

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={badgeVariants}>
            <Badge variant="gold" className="mb-6 text-sm px-4 py-2">
              Plataforma Completa para Clínicas e Profissionais da Saúde
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6"
          >
            Pare de Perder Pacientes.{" "}
            <em className="text-primary italic">
              Automatize Suas Vendas com a Hero Sales.
            </em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl leading-relaxed"
          >
            CRM, funis de vendas, agendamento, automação e IA — tudo
            em uma única plataforma feita para clínicas, médicos e profissionais
            liberais lotarem suas agendas.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="gold"
                size="xl"
                onClick={() => scrollToSection("#contato")}
                className="group shadow-gold w-full sm:w-auto"
              >
                Testar Grátis Agora
                <ArrowRight
                  size={20}
                  weight="bold"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="glass"
                size="xl"
                onClick={() => scrollToSection("#projetos")}
                className="w-full sm:w-auto"
              >
                Ver Demonstração
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 text-white/70"
          >
          <motion.div variants={staggerItem} className="flex -space-x-2.5">
              {clientAvatars.map((avatar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.07, type: "spring", stiffness: 200 }}
                  className="w-9 h-9 rounded-full border-2 border-secondary overflow-hidden"
                >
                  <img 
                    src={avatar} 
                    alt={`Cliente ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              variants={staggerItem}
              className="text-sm"
            >
              <span className="text-primary font-semibold">+150 profissionais</span>{" "}
              já usam a Hero Sales
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={() => scrollToSection("#clientes")}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex-col items-center gap-2"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Continue navegando</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={32} weight="bold" />
        </motion.div>
      </motion.button>
    </section>
  );
};
