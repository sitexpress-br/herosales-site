import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Article, MagnifyingGlass, ChartLineUp, PencilLine, CalendarBlank, FileText, Link as LinkIcon, Image, Code, Rocket, ChartBar, Notebook, Target, Trophy, ArrowRight, Lightbulb, CheckCircle, Clock, WhatsappLogo } from "@phosphor-icons/react";
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

// Vantagens de Blog + SEO na Hero Sales
const blogSeoAdvantages = [{
  icon: Trophy,
  title: "Primeira página do Google",
  description: "Publique conteúdo otimizado direto da plataforma"
}, {
  icon: ChartLineUp,
  title: "Pacientes sem pagar anúncio",
  description: "Tráfego orgânico que reduz seu custo por lead"
}, {
  icon: CheckCircle,
  title: "Conteúdo que trabalha por você",
  description: "Artigos que geram agendamentos por meses e anos"
}, {
  icon: Target,
  title: "Autoridade na sua especialidade",
  description: "Pacientes chegam já confiando no seu trabalho"
}];

// Recursos técnicos para Blog + SEO
const allFeatures = [{
  icon: MagnifyingGlass,
  title: "Pesquisa de Palavras-chave",
  description: "Identificamos termos que seu público busca"
}, {
  icon: CalendarBlank,
  title: "Calendário Editorial",
  description: "Planejamento estratégico de conteúdo"
}, {
  icon: PencilLine,
  title: "Redação SEO",
  description: "Textos otimizados para rankeamento"
}, {
  icon: Article,
  title: "Otimização On-Page",
  description: "Estrutura técnica dos artigos"
}, {
  icon: Target,
  title: "Títulos Estratégicos",
  description: "Headlines que atraem cliques"
}, {
  icon: FileText,
  title: "Meta Descriptions",
  description: "Descrições que aumentam CTR"
}, {
  icon: LinkIcon,
  title: "Links Internos",
  description: "Conexão entre seus conteúdos"
}, {
  icon: Image,
  title: "Imagens Otimizadas",
  description: "Alt texts e compressão ideal"
}, {
  icon: Code,
  title: "Schema Markup",
  description: "Dados estruturados para Google"
}, {
  icon: Rocket,
  title: "Velocidade de Página",
  description: "Performance otimizada"
}, {
  icon: ChartBar,
  title: "Monitoramento de Rankings",
  description: "Acompanhamento de posições"
}, {
  icon: Notebook,
  title: "Relatórios Mensais",
  description: "Resultados documentados"
}];

// Processo de implementação - 5 etapas
const processSteps = [{
  icon: MagnifyingGlass,
  title: "Pesquisa",
  description: "Identificamos palavras-chave da sua área"
}, {
  icon: CalendarBlank,
  title: "Planejamento",
  description: "Criamos calendário editorial estratégico"
}, {
  icon: PencilLine,
  title: "Redação",
  description: "Produzimos artigos otimizados para SEO"
}, {
  icon: Rocket,
  title: "Publicação",
  description: "Colocamos no ar com todas as otimizações"
}];
const supportStep = {
  icon: ChartBar,
  title: "Monitoramento",
  description: "Acompanhamos rankings e ajustamos"
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

const ServicesBlogSeoPage = () => {
  const { data: projects = [] } = useProjects(4);
  const featuredProjects = projects.slice(0, 4);
  const handleWhatsAppClick = () => {
    openWhatsAppPopup();
  };

  return <div className="min-h-screen bg-background">
      <SEOHead
        title={PAGE_SEO.services.blogSeo.title}
        description={PAGE_SEO.services.blogSeo.description}
        canonical={`${SEO_CONFIG.siteUrl}/servicos/blog-seo-medico`}
        ogType="website"
      />
      <ServiceSchema
        name="Blog + SEO para Clínicas | Hero Sales"
        description={PAGE_SEO.services.blogSeo.description}
        url={`${SEO_CONFIG.siteUrl}/servicos/blog-seo-medico`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SEO_CONFIG.siteUrl },
          { name: "Serviços", url: `${SEO_CONFIG.siteUrl}/servicos` },
          { name: "Blog + SEO Médico", url: `${SEO_CONFIG.siteUrl}/servicos/blog-seo-medico` },
        ]}
      />
      <Header />

      {/* Hero Premium Section with Vertical Marquee */}
      <section className="relative min-h-[60vh] lg:min-h-[80vh] bg-secondary overflow-hidden">
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-10 lg:pt-32 lg:pb-16 min-h-[60vh] lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content - Left aligned */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-20 text-left">
            {/* Badge */}
            <motion.div variants={badgeVariants} className="mb-6">
              <Badge variant="gold" className="text-sm px-4 py-2">
                Blog + SEO Integrado para Profissionais de Saúde
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6">
              Atraia Pacientes pelo{" "}
              <em className="text-primary italic">Google com SEO Integrado</em>
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Publique artigos otimizados direto da Hero Sales e transforme buscas do Google em agendamentos — sem depender de anúncios pagos.
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
                  <span className="truncate">Testar Blog + SEO na Hero Sales</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Google Search Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            {/* Decoração: seta apontando para o #1 */}
            {/* Decoração: seta apontando para o #1 */}
            <div className="absolute -left-36 top-20 hidden xl:flex items-center gap-3">
              <span className="text-primary font-semibold text-sm whitespace-nowrap">Sua clínica aqui</span>
              <ArrowRight className="text-primary" size={20} weight="bold" />
            </div>

            {/* Container estilo navegador/card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-lg">
              
              {/* Barra de pesquisa do Google */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center gap-3 bg-gray-50 rounded-full px-5 py-3">
                  <MagnifyingGlass className="text-gray-400" size={22} weight="regular" />
                  <span className="text-gray-700 text-base">
                    médico trabalhista são paulo
                  </span>
                </div>
              </div>
              
              {/* Resultados */}
              <div className="p-5 space-y-5">
                
                {/* Resultado #1 - Destaque */}
                <div className="relative p-5 rounded-xl border-2 border-primary bg-primary/5">
                  <Badge variant="gold" size="sm" className="absolute -top-2 -right-2 shadow-gold">
                    Top 1
                  </Badge>
                  <p className="text-sm text-green-700">suaclinica.com.br › artigos</p>
                  <h4 className="text-blue-700 font-medium text-lg mb-1">
                    Clínica Dermatologia SP | Sua Clínica Dermatologia
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    Especialistas em dermatologia com mais de 15 anos de experiência. Consulta gratuita...
                  </p>
                </div>
                
                {/* Resultado #2 */}
                <div className="p-4 opacity-50">
                  <p className="text-xs text-green-700">outrosite.com.br</p>
                  <h4 className="text-blue-700 text-sm">Outro Clínica de Medicina</h4>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur...</p>
                </div>
                
                {/* Resultado #3 */}
                <div className="p-4 opacity-30">
                  <p className="text-xs text-green-700">maisumsite.com.br</p>
                  <h4 className="text-blue-700 text-sm">Mais um Resultado</h4>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet...</p>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vantagens de Blog + SEO - Estilo Results.tsx */}
      <section id="vantagens" className="bg-background overflow-hidden py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              Por que usar{" "}
              <em className="text-primary italic">Blog + SEO integrado?</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Gere tráfego orgânico e converta leitores em pacientes
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {blogSeoAdvantages.map((advantage, index) => <motion.div key={index} variants={staggerItem} whileHover={{
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
                Profissionais que{" "}
                <em className="text-primary italic">Dominam o Google</em> com Hero Sales
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Clínicas que atraem pacientes com conteúdo publicado na plataforma
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
                              <ChartLineUp size={16} weight="bold" />
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

      {/* O Que Seu Blog + SEO Terá - Grid Assimétrico */}
      <section className="bg-background py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              Ferramentas de SEO <em className="text-primary italic">incluídas</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tudo integrado na plataforma para você dominar as buscas orgânicas
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
              Nosso <em className="text-primary italic">Processo</em>
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
                      {isSupport ? <step.icon size={36} weight="duotone" className="text-secondary" /> : <step.icon size={32} weight="duotone" className="text-secondary" />}
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
                      {isSupport ? <step.icon size={28} weight="duotone" className="text-secondary" /> : <step.icon size={24} weight="duotone" className="text-secondary" />}
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
              Pronto para atrair pacientes pelo{" "}
              <em className="text-primary italic">Google</em>?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-8">
              Comece a publicar conteúdo otimizado direto da Hero Sales
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
                  <span className="truncate">Testar Blog + SEO Grátis</span>
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

export default ServicesBlogSeoPage;
