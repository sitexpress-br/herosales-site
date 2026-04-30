import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Crown, MagnifyingGlass, UsersFour, TrendUp, Lightning, ChartLineUp, DeviceMobile, FileText, WhatsappLogo, ShieldCheck, Gear, Notepad, PencilSimple, Code, RocketLaunch, ArrowsClockwise, ArrowRight, ArrowDown, Check, Clock, CursorClick, Megaphone, Target } from "@phosphor-icons/react";
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
import heroImage from "@/assets/hero-bg.webp";
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

// Imagens estáticas para o marquee da Hero - 12 de 12 substituídas
const heroMarqueeImages = {
  column1: [marquee001, marquee002, marquee007, marquee008],
  column2: [marquee003, marquee004, marquee009, marquee010],
  column3: [marquee005, marquee006, marquee011, marquee012],
};

// Vantagens do Site Builder Hero Sales
const authorityAdvantages = [{
  icon: Crown,
  title: "Sua clínica como referência",
  description: "Crie sites profissionais que geram confiança instantânea"
}, {
  icon: CursorClick,
  title: "Funis que convertem",
  description: "Landing pages e funis integrados ao seu CRM"
}, {
  icon: MagnifyingGlass,
  title: "SEO integrado de fábrica",
  description: "Apareça no Google sem precisar de ferramentas externas"
}, {
  icon: Megaphone,
  title: "Tudo conectado",
  description: "Anúncios, CRM, agendamento e automações em um só lugar"
}, {
  icon: UsersFour,
  title: "Leads direto no seu CRM",
  description: "Cada visitante vira oportunidade rastreável"
}, {
  icon: TrendUp,
  title: "Escale sem depender de agência",
  description: "Você tem controle total para criar e editar suas páginas"
}];

// Recursos técnicos - todos os 12 em um único array
const allFeatures = [{
  icon: Lightning,
  title: "Velocidade de Carregamento",
  description: "Nota máxima no Google PageSpeed"
}, {
  icon: MagnifyingGlass,
  title: "SEO Otimizado",
  description: "Pronto para as primeiras posições"
}, {
  icon: DeviceMobile,
  title: "100% Responsivo",
  description: "Perfeito em qualquer dispositivo"
}, {
  icon: FileText,
  title: "Formulários de Captação",
  description: "Converta visitantes em leads"
}, {
  icon: WhatsappLogo,
  title: "Integração WhatsApp",
  description: "Contato direto com um clique"
}, {
  icon: ShieldCheck,
  title: "Certificado SSL",
  description: "Segurança e credibilidade"
}, {
  icon: Gear,
  title: "Editor Drag & Drop",
  description: "Crie e edite páginas sem código"
}, {
  icon: ChartLineUp,
  title: "Analytics Integrado",
  description: "Acompanhe métricas em tempo real"
}, {
  icon: Globe,
  title: "Domínio Personalizado",
  description: "Seu endereço profissional na web"
}, {
  icon: Clock,
  title: "Uptime 99.9%",
  description: "Seu site sempre no ar"
}, {
  icon: Code,
  title: "Templates Prontos",
  description: "Modelos otimizados para área da saúde"
}, {
  icon: Target,
  title: "A/B Testing",
  description: "Teste variações e otimize resultados"
}, {
  icon: Megaphone,
  title: "Pixels de Rastreamento",
  description: "Meta e Google Ads integrados"
}, {
  icon: RocketLaunch,
  title: "Publicação Instantânea",
  description: "Seu site no ar em minutos, não dias"
}];

// Como funciona na Hero Sales - 5 etapas
const processSteps = [{
  icon: Notepad,
  title: "Cadastro",
  description: "Crie sua conta na plataforma Hero Sales"
}, {
  icon: PencilSimple,
  title: "Escolha o Template",
  description: "Selecione entre modelos para clínicas"
}, {
  icon: Code,
  title: "Personalize",
  description: "Edite textos, cores e imagens no drag & drop"
}, {
  icon: RocketLaunch,
  title: "Publique",
  description: "Coloque no ar com domínio próprio"
}];
const supportStep = {
  icon: ArrowsClockwise,
  title: "Otimize",
  description: "Acompanhe métricas e melhore continuamente"
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

const ServicesAuthoridadeSitesPage = () => {
  const { data: projects = [] } = useProjects(4);
  const featuredProjects = projects.slice(0, 4);
  const handleWhatsAppClick = () => {
    openWhatsAppPopup();
  };
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div className="min-h-screen bg-background">
      <SEOHead
        title={PAGE_SEO.services.sitesAutoridade.title}
        description={PAGE_SEO.services.sitesAutoridade.description}
        canonical={`${SEO_CONFIG.siteUrl}/servicos/sites-de-autoridade`}
        ogType="website"
      />
      <ServiceSchema
        name="Site Builder & Landing Pages para Clínicas | Hero Sales"
        description={PAGE_SEO.services.sitesAutoridade.description}
        url={`${SEO_CONFIG.siteUrl}/servicos/sites-de-autoridade`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SEO_CONFIG.siteUrl },
          { name: "Serviços", url: `${SEO_CONFIG.siteUrl}/servicos` },
          { name: "Sites & Landing Pages", url: `${SEO_CONFIG.siteUrl}/servicos/sites-de-autoridade` },
        ]}
      />
      <Header />

      {/* Hero Premium Section with Vertical Marquee */}
      <section className="relative min-h-[60vh] lg:min-h-screen bg-secondary overflow-x-clip">
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />

        {/* ========== CAMADA 1: MARQUEE DE FUNDO ========== */}
        <div className="absolute top-0 bottom-0 left-[40%] right-0 hidden lg:flex justify-start overflow-hidden">
          {/* 3 Vertical Columns - Rotated, larger images without clipping */}
          <div className="flex gap-6 h-[160%] -mt-[25%] pl-8 transform rotate-[12deg]">
            {/* Column 1 - Top to Bottom (CSS animation) */}
            <div className="flex flex-col gap-6" style={{ animation: 'marquee-up 35s linear infinite' }}>
              {[...heroMarqueeImages.column1, ...heroMarqueeImages.column1].map((image, index) => (
                <div key={`col1-${index}`} className="flex-shrink-0 w-96 h-[500px] rounded-2xl overflow-hidden shadow-lg opacity-50">
                  <img src={image} alt={`Site exemplo ${index + 1}`} className="w-full h-full object-cover blur-[2px]" />
                </div>
              ))}
            </div>

            {/* Column 2 - Bottom to Top (CSS animation) */}
            <div className="flex flex-col gap-6 mt-[-100px]" style={{ animation: 'marquee-down 40s linear infinite' }}>
              {[...heroMarqueeImages.column2, ...heroMarqueeImages.column2].map((image, index) => (
                <div key={`col2-${index}`} className="flex-shrink-0 w-96 h-[500px] rounded-2xl overflow-hidden shadow-xl opacity-70">
                  <img src={image} alt={`Site exemplo ${index + 1}`} className="w-full h-full object-cover blur-[1px]" />
                </div>
              ))}
            </div>

            {/* Column 3 - Top to Bottom (CSS animation) */}
            <div className="flex flex-col gap-6" style={{ animation: 'marquee-up 30s linear infinite' }}>
              {[...heroMarqueeImages.column3, ...heroMarqueeImages.column3].map((image, index) => (
                <div key={`col3-${index}`} className="flex-shrink-0 w-96 h-[500px] rounded-2xl overflow-hidden shadow-2xl opacity-90">
                  <img src={image} alt={`Site exemplo ${index + 1}`} className="w-full h-full object-cover blur-[0.5px]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========== CAMADA 2: GRADIENTE DE FADE ========== */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none hidden lg:block" 
          style={{
            background: 'linear-gradient(to right, hsl(var(--secondary)) 0%, hsl(var(--secondary)) 40%, transparent 60%)'
          }} 
        />

        {/* ========== CAMADA 3: GRID DE CONTEÚDO ========== */}
        <div className="relative z-20 container mx-auto px-6 pt-32 pb-10 lg:pt-32 lg:pb-16 min-h-[60vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Coluna 1 - Text Content */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-left">
            {/* Badge */}
            <motion.div variants={badgeVariants} className="mb-6">
              <Badge variant="gold" className="text-sm px-4 py-2">
                Site Builder + Funis para Clínicas e Profissionais de Saúde
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6">
              Crie Sites e Funis que{" "}
              <em className="text-primary italic">Convertem Pacientes</em>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Com a Hero Sales, você monta sites profissionais e landing pages em minutos —
              tudo integrado ao CRM, agendamento e automações da sua clínica.
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
                  <span className="truncate">Testar a Hero Sales Grátis</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Coluna 2 - Vazia (marquee aparece por trás) */}
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Vantagens da Autoridade Digital - Estilo Results.tsx */}
      <section id="vantagens" className="bg-background overflow-hidden py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              O que muda quando você{" "}
              <em className="text-primary italic">tem a ferramenta certa?</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Benefícios reais de ter site, CRM e funis integrados
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {authorityAdvantages.map((advantage, index) => <motion.div key={index} variants={staggerItem} whileHover={{
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
      <section hidden id="projetos" className="bg-secondary py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
                Clínicas que{" "}
                <em className="text-primary italic">Já Usam</em> a Hero Sales
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Veja como profissionais de saúde estão crescendo com a plataforma
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

      {/* O Que Seu Site Terá - Grid Assimétrico */}
      <section className="bg-background py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              O que a plataforma <em className="text-primary italic">inclui</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tudo que você precisa para criar sites profissionais e gerar pacientes
            </p>
          </motion.div>

          {/* Grid 4x2 - Todos os 8 recursos uniformes */}
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
              Pronto para criar seu{" "}
              <em className="text-primary italic">site profissional</em>?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-8">
              Comece agora e tenha seu site no ar ainda hoje
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
export default ServicesAuthoridadeSitesPage;