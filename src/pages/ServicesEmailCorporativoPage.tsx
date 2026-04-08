import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Envelope, Shield, Lock, Cloud, DeviceMobile, CalendarCheck, UserCircle, Lifebuoy, ArrowsClockwise, TrendUp, Crown, WhatsappLogo, ArrowRight, Clock, Notepad, Gear, ChalkboardTeacher, Headset, At } from "@phosphor-icons/react";
import lawyerLaptopImage from "@/assets/lawyer-laptop.avif";
import { Header } from "@/components/sessoes/Header";
import { Footer } from "@/components/sessoes/Footer";
import { Team } from "@/components/sessoes/Team";
import { Testimonials } from "@/components/sessoes/Testimonials";
import { Services } from "@/components/sessoes/Services";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport, badgeVariants } from "@/lib/animations";
import { useProjects } from "@/hooks/useWordPress";
import { openWhatsAppPopup } from "@/hooks/useWhatsAppPopup";
import { SEOHead, ServiceSchema, BreadcrumbSchema } from "@/components/seo";
import { PAGE_SEO, SEO_CONFIG } from "@/lib/seo-config";

// Vantagens de Email + Comunicação na Hero Sales
const emailAdvantages = [{
  icon: Crown,
  title: "Email Marketing Profissional",
  description: "Envie campanhas com domínio próprio direto da plataforma"
}, {
  icon: Shield,
  title: "Comunicação Centralizada",
  description: "Email, SMS, WhatsApp e chat em uma única caixa de entrada"
}, {
  icon: DeviceMobile,
  title: "Acesso de Qualquer Lugar",
  description: "Gerencie comunicações pelo app no celular ou computador"
}, {
  icon: Cloud,
  title: "Automações Inteligentes",
  description: "Sequências de follow-up que nutrem leads automaticamente"
}];

// Recursos de comunicação incluídos na Hero Sales
const allFeatures = [{
  icon: Envelope,
  title: "Email Marketing Ilimitado",
  description: "Envie campanhas sem limite de disparos"
}, {
  icon: Lock,
  title: "Domínio Próprio",
  description: "Envie com @suaclinica.com.br"
}, {
  icon: Shield,
  title: "Templates Prontos",
  description: "Modelos de email para área da saúde"
}, {
  icon: Shield,
  title: "Automações de Email",
  description: "Sequências de nutrição automáticas"
}, {
  icon: CalendarCheck,
  title: "Confirmação de Consulta",
  description: "Lembretes automáticos por email e SMS"
}, {
  icon: UserCircle,
  title: "Segmentação de Contatos",
  description: "Listas inteligentes por perfil e comportamento"
}, {
  icon: DeviceMobile,
  title: "SMS + WhatsApp",
  description: "Comunicação multicanal integrada"
}, {
  icon: Envelope,
  title: "Caixa de Entrada Unificada",
  description: "Todos os canais em um só lugar"
}, {
  icon: Lifebuoy,
  title: "Suporte em Português",
  description: "Equipe dedicada para ajudar"
}, {
  icon: ArrowsClockwise,
  title: "Métricas em Tempo Real",
  description: "Taxas de abertura, cliques e conversões"
}, {
  icon: Cloud,
  title: "Reputação de Email",
  description: "Entregabilidade otimizada"
}, {
  icon: ArrowsClockwise,
  title: "Importação de Contatos",
  description: "Migre sua base de forma simples"
}];

// Como funciona na Hero Sales - 5 etapas
const processSteps = [{
  icon: Notepad,
  title: "Cadastro",
  description: "Crie sua conta na Hero Sales"
}, {
  icon: Gear,
  title: "Configuração",
  description: "Conecte domínio e importe contatos"
}, {
  icon: ArrowsClockwise,
  title: "Automações",
  description: "Configure sequências de email e SMS"
}, {
  icon: ChalkboardTeacher,
  title: "Disparo",
  description: "Lance suas campanhas multicanal"
}];
const supportStep = {
  icon: Headset,
  title: "Otimize",
  description: "Acompanhe métricas e melhore resultados"
};
const allSteps = [...processSteps, supportStep];

// Hover variants para processo
const circleHoverVariant = {
  rest: {
    scale: 1,
    boxShadow: "0 0 20px rgba(23, 161, 146, 0.3)",
    borderWidth: "0px",
    borderColor: "rgba(255, 255, 255, 0)"
  },
  hover: {
    scale: 1.2,
    boxShadow: "0 0 50px rgba(23, 161, 146, 0.6)",
    borderWidth: "3px",
    borderColor: "rgba(255, 255, 255, 1)"
  }
};
const textHoverVariant = {
  rest: {
    color: "rgba(255, 255, 255, 1)"
  },
  hover: {
    color: "rgba(23, 161, 146, 1)"
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

const ServicesEmailCorporativoPage = () => {
  const { data: projects = [] } = useProjects(4);
  const featuredProjects = projects.slice(0, 4);
  const handleWhatsAppClick = () => {
    openWhatsAppPopup();
  };

  return <div className="min-h-screen bg-background">
      <SEOHead
        title={PAGE_SEO.services.emailCorporativo.title}
        description={PAGE_SEO.services.emailCorporativo.description}
        canonical={`${SEO_CONFIG.siteUrl}/servicos/email-corporativo`}
        ogType="website"
      />
      <ServiceSchema
        name="Email Marketing + Comunicação para Clínicas | Hero Sales"
        description={PAGE_SEO.services.emailCorporativo.description}
        url={`${SEO_CONFIG.siteUrl}/servicos/email-corporativo`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SEO_CONFIG.siteUrl },
          { name: "Serviços", url: `${SEO_CONFIG.siteUrl}/servicos` },
          { name: "Email Corporativo", url: `${SEO_CONFIG.siteUrl}/servicos/email-corporativo` },
        ]}
      />
      <Header />

      {/* Hero Premium Section with Vertical Marquee */}
      <section className="relative min-h-[60vh] lg:min-h-screen bg-secondary overflow-hidden">
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />

        {/* Grid Layout - Text Left, Images Right */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-10 lg:pt-32 lg:pb-0 min-h-[60vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-20 text-left">
            {/* Badge */}
            <motion.div variants={badgeVariants} className="mb-6">
              <Badge variant="gold" className="text-sm px-4 py-2">
                Email Marketing + Comunicação Multicanal para Clínicas
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6">
              Email, SMS e WhatsApp{" "}
              <em className="text-primary italic">em Uma Só Plataforma</em>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Envie campanhas, lembretes de consulta e sequências de nutrição por email, SMS e WhatsApp
              — tudo integrado ao CRM da Hero Sales.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Button variant="gold" size="lg" onClick={handleWhatsAppClick} className="group shadow-gold w-full sm:w-auto text-sm sm:text-base">
                  <WhatsappLogo size={18} weight="fill" className="flex-shrink-0" />
                  <span className="truncate">Testar Comunicação na Hero Sales</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Floating Email Composition */}
          <div className="hidden lg:block relative h-full min-h-[400px]">
            {/* Floating Email Cards - Positioned to overlay lawyer image */}
            <motion.div
              className="absolute top-1/2 left-0 -translate-y-1/2 z-10 glass rounded-xl px-4 py-3 flex items-center gap-3"
              animate={{ y: [0, -12, 0], rotate: [-2, -1, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Envelope size={20} weight="duotone" className="text-primary" />
              </div>
              <span className="text-white/90 text-sm font-medium">contato@suaclinica.med.br</span>
            </motion.div>

            <motion.div
              className="absolute top-1/3 left-[45%] z-10 glass rounded-xl px-4 py-3 flex items-center gap-3"
              animate={{ y: [0, 15, 0], rotate: [3, 2, 3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Envelope size={20} weight="duotone" className="text-primary" />
              </div>
              <span className="text-white/90 text-sm font-medium">dr.silva@escritoriosilva.adv.br</span>
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 left-[10%] z-10 glass rounded-xl px-4 py-3 flex items-center gap-3"
              animate={{ y: [0, -10, 0], rotate: [1, 0, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Envelope size={20} weight="duotone" className="text-primary" />
              </div>
              <span className="text-white/90 text-sm font-medium">atendimento@medicina.com.br</span>
            </motion.div>

            {/* Floating Decorative Icons - Around lawyer image */}
            <motion.div
              className="absolute top-1/4 left-[5%] z-10"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <At size={80} weight="bold" className="text-primary/30" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-[20%] z-10"
              animate={{ y: [0, 12, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <Shield size={48} weight="duotone" className="text-primary/40" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/3 left-[50%] z-10"
              animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            >
              <Lock size={40} weight="duotone" className="text-primary/35" />
            </motion.div>

            <motion.div
              className="absolute top-[15%] right-[10%] z-10"
              animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <Envelope size={36} weight="duotone" className="text-white/20" />
            </motion.div>

            {/* Lawyer Image - Static at bottom */}
            <img 
              src={lawyerLaptopImage}
              alt="Médico usando laptop"
              className="absolute bottom-0 left-1/4 -translate-x-1/2 w-auto h-full object-contain object-bottom origin-bottom scale-110 pointer-events-none"
            />
          </div>

        </div>
      </section>

      {/* Vantagens de Email Corporativo - Estilo Results.tsx */}
      <section id="vantagens" className="bg-background overflow-hidden py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              Por que centralizar sua{" "}
              <em className="text-primary italic">comunicação?</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nunca mais perca um lead por falta de follow-up
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {emailAdvantages.map((advantage, index) => <motion.div key={index} variants={staggerItem} whileHover={{
            y: -4
          }} transition={{
            duration: 0.3
          }} className="relative rounded-2xl text-center group h-full">
                {/* Borda com glow no hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(42_50%_59%/0.4)]" />

                {/* Inner background */}
                <div className="relative rounded-2xl bg-background p-4 sm:p-8 flex flex-row sm:flex-col items-center sm:items-stretch gap-4 sm:gap-0 border border-secondary/10 h-full">
                  {/* Icon */}
                  <motion.div className="mx-0 sm:mx-auto mb-0 sm:mb-4 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors" whileHover={{
                scale: 1.1,
                rotate: 5
              }}>
                    <advantage.icon size={32} weight="duotone" className="text-primary" />
                  </motion.div>

                  {/* Text content */}
                  <div className="text-left sm:text-center">
                    <h3 className="font-sans font-semibold text-lg text-secondary mb-1 sm:mb-2 sm:text-base">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Projetos Desenvolvidos - Alinhado com Projects.tsx */}
      <section id="projetos" className="bg-secondary py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
                Clínicas que{" "}
                <em className="text-primary italic">Usam Hero Sales</em>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Profissionais que centralizaram toda comunicação na plataforma
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((project, index) => <motion.div key={index} variants={staggerItem} className="h-full">
                  <Link to={`/projetos/${project.slug}`} className="block h-full">
                    <motion.div whileHover={{
                  y: -8
                }} transition={{
                  duration: 0.3,
                  ease: "easeOut"
                }} className="h-full">
                      <Card variant="glass" className="group overflow-hidden h-full flex flex-col">
                        <div className="relative aspect-square bg-white/10 overflow-hidden">
                          <motion.img src={project.image} alt={project.name} className="w-full h-full object-cover object-top" whileHover={{
                        scale: 1.05
                      }} transition={{
                        duration: 0.5
                      }} />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />

                          <motion.div className="absolute bottom-4 left-4" initial={{
                        opacity: 0,
                        y: 10
                      }} whileInView={{
                        opacity: 1,
                        y: 0
                      }} transition={{
                        delay: 0.3
                      }}>
                            <Badge variant="gold" className="flex items-center gap-1 px-3 py-1.5">
                              <TrendUp size={16} weight="bold" />
                              <span className="font-bold">{project.result}</span>
                              <span className="font-normal">
                                {project.resultLabel}
                              </span>
                            </Badge>
                          </motion.div>
                        </div>

                        <CardContent className="p-6">
                          <h3 className="font-sans text-xl font-semibold mb-1 text-white group-hover:text-primary transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-white/60 text-sm">
                            {project.url}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>)}
            </div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mt-12">
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10 hover:text-white">
                  <Link to="/projetos">
                    Ver Todos os Projetos
                    <ArrowRight size={18} weight="bold" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* O Que Seu Email Corporativo Terá - Grid Assimétrico */}
      <section className="bg-background py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              O que a plataforma <em className="text-primary italic">inclui</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ferramentas completas de comunicação para sua clínica
            </p>
          </motion.div>

          {/* Grid 4x3 - Todos os 12 recursos uniformes */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allFeatures.map((feature, index) => <motion.div key={index} variants={staggerItem}>
                <Card variant="default" className="h-full hover:shadow-gold hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-5 flex items-start gap-4">
                    <motion.div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors" whileHover={{
                  scale: 1.1
                }}>
                      <feature.icon size={24} weight="duotone" className="text-primary" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-sans text-sm font-semibold text-secondary mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Processo de Implementação - Inspirado em Process.tsx */}
      <section className="bg-secondary overflow-hidden py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
              Como <em className="text-primary italic">Funciona</em>
            </h2>
          </motion.div>

          {/* Desktop Layout */}
          <div className="hidden lg:block relative">
            {/* Horizontal Connector Line */}
            <div className="absolute top-12 flex items-center" style={{
            left: "calc(100% / 10)",
            right: "calc(100% / 10)"
          }}>
              <div className="w-full h-1 bg-primary/30 rounded-full relative overflow-hidden">
                <motion.div className="absolute inset-0 h-full" style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(23, 161, 146, 0.3) 10%, rgba(23, 161, 146, 1) 50%, rgba(23, 161, 146, 0.3) 90%, transparent 100%)",
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

            {/* Steps Row */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="relative flex justify-between items-start">
              {allSteps.map((step, index) => {
              const isSupport = index === allSteps.length - 1;
              return <motion.div key={index} variants={staggerItem} initial="rest" whileHover="hover" animate="rest" className="flex flex-col items-center text-center flex-1 cursor-pointer">
                    {/* Circle */}
                    <motion.div className={`${isSupport ? "w-24 h-24 border-4 border-white" : "w-20 h-20 md:w-24 md:h-24"} rounded-full bg-primary flex items-center justify-center mb-4 relative z-10 border-solid`} variants={circleHoverVariant} initial={{
                  scale: 0,
                  opacity: 0,
                  boxShadow: "0 0 20px rgba(23, 161, 146, 0.3)"
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

          {/* Mobile Layout */}
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

            <div className="space-y-8">
              {allSteps.map((step, index) => {
              const isSupport = index === allSteps.length - 1;
              return <motion.div key={index} variants={staggerItem} className="flex items-start gap-6">
                    <motion.div className={`relative z-10 flex-shrink-0 w-16 h-16 ${isSupport ? "border-4 border-white" : ""} rounded-full bg-primary shadow-gold flex items-center justify-center`} initial={{
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
                      {isSupport ? <motion.div animate={{
                    rotate: 360
                  }} transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}>
                          <step.icon size={28} weight="duotone" className="text-secondary" />
                        </motion.div> : <step.icon size={24} weight="duotone" className="text-secondary" />}
                    </motion.div>

                    <div className="pt-2">
                      <h3 className="text-white font-sans font-bold text-sm uppercase tracking-wide mb-1">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>;
            })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outros Serviços */}
      <Services />

      {/* Depoimentos */}
      <Testimonials />

      {/* CTA Final Premium */}
      <section className="bg-background relative overflow-hidden py-10 md:py-[90px]">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

        {/* Gold divider line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24">
          <Divider variant="gold" className="h-1" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="max-w-3xl mx-auto text-center">
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-secondary mb-4">
              Pronto para centralizar sua{" "}
              <em className="text-primary italic">comunicação</em>?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-8">
              Email, SMS e WhatsApp integrados ao seu CRM em minutos
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="w-full sm:inline-block">
                <Button size="lg" variant="gold" className="group shadow-gold relative overflow-hidden w-full sm:w-auto text-sm sm:text-base" onClick={handleWhatsAppClick}>
                  {/* Shine effect */}
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12" initial={{
                  x: "-100%"
                }} whileHover={{
                  x: "100%"
                }} transition={{
                  duration: 0.6
                }} />
                  <WhatsappLogo weight="fill" className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">Começar Meu Teste Grátis</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                <Clock size={16} weight="bold" />
                <span>Resposta em até 24h</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Team />
      <Footer />
    </div>;
};

export default ServicesEmailCorporativoPage;
