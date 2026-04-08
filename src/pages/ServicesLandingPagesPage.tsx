import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Crown, CursorClick, Megaphone, TrendUp, Lightning, ChartLineUp, DeviceMobile, FileText, WhatsappLogo, Gauge, Gear, Notepad, PencilSimple, Code, RocketLaunch, ArrowsClockwise, ArrowRight, Clock } from "@phosphor-icons/react";
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

// Marquee images
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

// Vantagens de Landing Pages
const landingPageAdvantages = [{
  icon: CursorClick,
  title: "Foco em conversão",
  description: "Templates testados que transformam visitantes em pacientes agendados"
}, {
  icon: Lightning,
  title: "Carregamento ultra-rápido",
  description: "Otimizada para não perder nenhum visitante"
}, {
  icon: Megaphone,
  title: "Integração com campanhas",
  description: "Conecte Google Ads e Meta Ads direto ao CRM"
}, {
  icon: ChartLineUp,
  title: "Métricas claras",
  description: "Acompanhe cada conversão no dashboard Hero Sales"
}];

// Recursos técnicos para Landing Pages
const allFeatures = [{
  icon: Lightning,
  title: "Velocidade de Carregamento",
  description: "Nota máxima no Google PageSpeed"
}, {
  icon: Target,
  title: "SEO Otimizado para LP",
  description: "Otimizada para campanhas pagas e orgânico"
}, {
  icon: DeviceMobile,
  title: "100% Responsivo",
  description: "Perfeito em qualquer dispositivo"
}, {
  icon: FileText,
  title: "Formulários de Captação",
  description: "Leads caem direto no CRM Hero Sales"
}, {
  icon: WhatsappLogo,
  title: "Integração WhatsApp",
  description: "Contato direto com um clique, rastreado no CRM"
}, {
  icon: Megaphone,
  title: "Pixels de Rastreamento",
  description: "Meta e Google Ads integrados automaticamente"
}, {
  icon: Target,
  title: "A/B Testing",
  description: "Teste variações direto na plataforma"
}, {
  icon: ChartLineUp,
  title: "Analytics Integrado",
  description: "Métricas em tempo real no dashboard"
}, {
  icon: Crown,
  title: "Domínio Personalizado",
  description: "Seu endereço profissional na web"
}, {
  icon: Clock,
  title: "Uptime 99.9%",
  description: "Hospedagem inclusa no Hero Sales"
}, {
  icon: Gauge,
  title: "Pagespeed 95+",
  description: "Performance máxima garantida"
}, {
  icon: RocketLaunch,
  title: "Deploy Rápido",
  description: "Publique sua LP em minutos, sem código"
}];

// Processo de desenvolvimento - 5 etapas
const processSteps = [{
  icon: Notepad,
  title: "Escolha o Template",
  description: "Selecione entre dezenas de templates testados"
}, {
  icon: PencilSimple,
  title: "Personalize",
  description: "Adapte cores, textos e imagens da sua clínica"
}, {
  icon: Code,
  title: "Conecte ao CRM",
  description: "Formulários integrados automaticamente"
}, {
  icon: RocketLaunch,
  title: "Publique",
  description: "No ar em minutos com domínio próprio"
}];
const supportStep = {
  icon: ArrowsClockwise,
  title: "Otimize",
  description: "Testes A/B e métricas em tempo real"
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

// Hero marquee images
const heroMarqueeImages = {
  column1: [marquee001, marquee002, marquee007, marquee008],
  column2: [marquee003, marquee004, marquee009, marquee010],
  column3: [marquee005, marquee006, marquee011, marquee012],
};

const ServicesLandingPagesPage = () => {
  const { data: projects = [] } = useProjects(4);
  const featuredProjects = projects.slice(0, 4);
  const handleWhatsAppClick = () => {
    openWhatsAppPopup();
  };

  return <div className="min-h-screen bg-background">
      <SEOHead
        title={PAGE_SEO.services.landingPages.title}
        description={PAGE_SEO.services.landingPages.description}
        canonical={`${SEO_CONFIG.siteUrl}/servicos/landing-pages`}
        ogType="website"
      />
      <ServiceSchema
        name="Landing Pages para Clínicas — Hero Sales"
        description={PAGE_SEO.services.landingPages.description}
        url={`${SEO_CONFIG.siteUrl}/servicos/landing-pages`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SEO_CONFIG.siteUrl },
          { name: "Serviços", url: `${SEO_CONFIG.siteUrl}/servicos` },
          { name: "Landing Pages", url: `${SEO_CONFIG.siteUrl}/servicos/landing-pages` },
        ]}
      />
      <Header />

      {/* Hero Premium Section with Vertical Marquee */}
      <section className="relative min-h-[60vh] lg:min-h-screen bg-secondary overflow-x-clip">
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />

        {/* LAYER 1: Vertical Image Marquee - Background */}
        <div className="absolute top-0 bottom-0 left-[40%] right-0 hidden lg:flex justify-start overflow-hidden">
          <div className="flex gap-6 h-[160%] -mt-[25%] pl-8 transform rotate-[12deg]">
            {/* Column 1 - Top to Bottom */}
            <div className="flex flex-col gap-6" style={{ animation: 'marquee-up 35s linear infinite' }}>
              {[...heroMarqueeImages.column1, ...heroMarqueeImages.column1].map((image, index) => (
                <div key={`col1-${index}`} className="flex-shrink-0 w-96 h-[500px] rounded-2xl overflow-hidden shadow-lg opacity-50">
                  <img src={image} alt={`Landing page exemplo ${index + 1}`} className="w-full h-full object-cover blur-[2px]" />
                </div>
              ))}
            </div>

            {/* Column 2 - Bottom to Top */}
            <div className="flex flex-col gap-6 mt-[-100px]" style={{ animation: 'marquee-down 40s linear infinite' }}>
              {[...heroMarqueeImages.column2, ...heroMarqueeImages.column2].map((image, index) => (
                <div key={`col2-${index}`} className="flex-shrink-0 w-96 h-[500px] rounded-2xl overflow-hidden shadow-xl opacity-70">
                  <img src={image} alt={`Landing page exemplo ${index + 1}`} className="w-full h-full object-cover blur-[1px]" />
                </div>
              ))}
            </div>

            {/* Column 3 - Top to Bottom */}
            <div className="flex flex-col gap-6" style={{ animation: 'marquee-up 30s linear infinite' }}>
              {[...heroMarqueeImages.column3, ...heroMarqueeImages.column3].map((image, index) => (
                <div key={`col3-${index}`} className="flex-shrink-0 w-96 h-[500px] rounded-2xl overflow-hidden shadow-2xl opacity-90">
                  <img src={image} alt={`Landing page exemplo ${index + 1}`} className="w-full h-full object-cover blur-[0.5px]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LAYER 2: Fade overlay - left to right */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block" style={{
          background: 'linear-gradient(to right, hsl(var(--secondary)) 0%, hsl(var(--secondary)) 40%, transparent 60%)'
        }} />

        {/* LAYER 3: Grid Layout - Text Content */}
        <div className="relative z-20 container mx-auto px-6 pt-32 pb-10 lg:pt-32 lg:pb-16 min-h-[60vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-left">
            {/* Badge */}
            <motion.div variants={badgeVariants} className="mb-6">
              <Badge variant="gold" className="text-sm px-4 py-2">
                Construtor de Landing Pages do Hero Sales
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6">
              Converta Visitantes em{" "}
              <em className="text-primary italic">Clientes Qualificados</em>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Crie landing pages otimizadas para capturar leads e agendar consultas
              — direto no Hero Sales, sem precisar de desenvolvedor.
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
                  <span className="truncate">Criar Minha LP no Hero Sales</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Empty (marquee is in background layer) */}
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Vantagens de Landing Pages - Estilo Results.tsx */}
      <section id="vantagens" className="bg-background overflow-hidden py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              Por que ter uma{" "}
              <em className="text-primary italic">Landing Page?</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Maximize o retorno dos seus anúncios com LPs integradas ao CRM
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {landingPageAdvantages.map((advantage, index) => <motion.div key={index} variants={staggerItem} whileHover={{
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
                Landing Pages Criadas no{" "}
                <em className="text-primary italic">Hero Sales</em>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Resultados reais de clínicas que usam a plataforma para converter
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

      {/* O Que Sua Landing Page Terá - Grid Assimétrico */}
      <section className="bg-background py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              O que sua LP <em className="text-primary italic">terá</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tudo incluso na plataforma para converter visitantes em pacientes
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

      {/* Processo de Desenvolvimento - Inspirado em Process.tsx */}
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
              Pronto para ter sua{" "}
              <em className="text-primary italic">landing page de alta conversão</em>?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-8">
              Crie sua LP profissional em minutos com o Hero Sales
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
                  <span className="truncate">Agendar Demo do Hero Sales</span>
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

export default ServicesLandingPagesPage;
