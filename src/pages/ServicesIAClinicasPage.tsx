import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Robot, Brain, CalendarCheck, WhatsappLogo, ArrowRight, Clock, Notepad, Lightbulb, Rocket, Lightning, ChatCircleDots, BellRinging, UserCircleCheck, ChartBar, ClockCountdown, UsersFour, ShieldCheck, Stethoscope, CalendarDots, Headset, ArrowsClockwise, Star, Microphone, FileDoc, ImageSquare, UserCircle } from "@phosphor-icons/react";
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

const iaAdvantages = [{
  icon: UserCircle,
  title: "99% Humanizada",
  description: "Pacientes acreditam estar falando com uma pessoa real"
}, {
  icon: Brain,
  title: "Multimodal",
  description: "Entende texto, áudios, imagens e PDFs enviados pelo paciente"
}, {
  icon: ArrowsClockwise,
  title: "Follow-up Inteligente",
  description: "Sequências naturais que reativam e nutrem pacientes"
}, {
  icon: CalendarCheck,
  title: "Agenda Otimizada",
  description: "Agendamento inteligente que maximiza a ocupação da agenda"
}];

const allFeatures = [{
  icon: ChatCircleDots,
  title: "Atendente Virtual WhatsApp",
  description: "Atendimento humanizado 24h que pacientes não distinguem de uma pessoa"
}, {
  icon: Microphone,
  title: "Compreensão de Áudios",
  description: "Transcreve e responde áudios naturalmente"
}, {
  icon: ImageSquare,
  title: "Leitura de Imagens",
  description: "Analisa exames, receitas e fotos enviadas"
}, {
  icon: FileDoc,
  title: "Análise de PDFs",
  description: "Interpreta documentos, laudos e receitas"
}, {
  icon: UserCircle,
  title: "Respostas Humanizadas",
  description: "Tom natural, empático e personalizado"
}, {
  icon: BellRinging,
  title: "Lembretes Inteligentes",
  description: "3 lembretes automáticos antes da consulta"
}, {
  icon: CalendarDots,
  title: "Calendário Online 24/7",
  description: "Agendamento integrado ao site e CRM"
}, {
  icon: Star,
  title: "Avaliações Google",
  description: "Solicitação automática de reviews"
}, {
  icon: ArrowsClockwise,
  title: "Reativação de Pacientes",
  description: "Sequências naturais para pacientes inativos"
}, {
  icon: ChartBar,
  title: "Dashboard de Métricas",
  description: "KPIs em tempo real no painel Hero Sales"
}, {
  icon: ShieldCheck,
  title: "LGPD Compliant",
  description: "Dados protegidos conforme legislação"
}, {
  icon: Brain,
  title: "Aprendizado Contínuo",
  description: "IA que melhora com cada conversa"
}];

const processSteps = [{
  icon: Notepad,
  title: "Diagnóstico",
  description: "Mapeamos os gargalos de atendimento da sua clínica"
}, {
  icon: Lightbulb,
  title: "Configuração",
  description: "Treinamos a IA com os dados e tom da sua clínica no Hero Sales"
}, {
  icon: Rocket,
  title: "Ativação",
  description: "IA no ar em 7 dias, integrada ao seu CRM"
}, {
  icon: Lightning,
  title: "Otimização",
  description: "A plataforma refina os fluxos automaticamente"
}];

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
  rest: { color: "rgba(255, 255, 255, 1)" },
  hover: { color: "rgba(23, 161, 146, 1)" }
};
const descriptionHoverVariant = {
  rest: { color: "rgba(255, 255, 255, 0.6)" },
  hover: { color: "rgba(255, 255, 255, 0.9)" }
};

const ServicesIAClinicasPage = () => {
  const { data: projects = [] } = useProjects(4);
  const featuredProjects = projects.slice(0, 4);
  const handleWhatsAppClick = () => {
    openWhatsAppPopup();
  };

  return <div className="min-h-screen bg-background">
      <SEOHead
        title={PAGE_SEO.services.iaClinicas.title}
        description={PAGE_SEO.services.iaClinicas.description}
        canonical={`${SEO_CONFIG.siteUrl}/servicos/ia-para-clinicas`}
        ogType="website"
      />
      <ServiceSchema
        name="IA para Clínicas — Atendimento e Agendamento Inteligente | Hero Sales"
        description={PAGE_SEO.services.iaClinicas.description}
        url={`${SEO_CONFIG.siteUrl}/servicos/ia-para-clinicas`}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SEO_CONFIG.siteUrl },
          { name: "Serviços", url: `${SEO_CONFIG.siteUrl}/servicos` },
          { name: "IA para Clínicas", url: `${SEO_CONFIG.siteUrl}/servicos/ia-para-clinicas` },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-screen bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-10 lg:pt-40 lg:pb-16 min-h-[60vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-20 text-left">
            <motion.div variants={badgeVariants} className="mb-6">
              <Badge variant="gold" className="text-sm px-4 py-2">
                <Robot size={16} weight="fill" className="mr-1" />
                IA Humanizada inclusa no Hero Sales
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6">
              Sua Clínica com uma{" "}
              <em className="text-primary italic">Atendente que Nunca Dorme</em>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              99% dos pacientes acreditam estar falando com uma pessoa real. A IA do Hero Sales entende texto, áudios, imagens e PDFs — agenda, qualifica e faz follow-up automaticamente, direto na plataforma.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="gold" size="lg" onClick={handleWhatsAppClick} className="group shadow-gold w-full sm:w-auto text-sm sm:text-base">
                  <WhatsappLogo size={18} weight="fill" className="flex-shrink-0" />
                  <span className="truncate">Testar a IA do Hero Sales</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Central brain icon */}
              <motion.div 
                className="w-40 h-40 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Brain size={80} weight="duotone" className="text-primary" />
              </motion.div>
              
              {/* Orbiting icons */}
              {[ChatCircleDots, CalendarCheck, BellRinging, Robot].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center"
                  style={{
                    top: `${50 + 45 * Math.sin((i * Math.PI) / 2)}%`,
                    left: `${50 + 45 * Math.cos((i * Math.PI) / 2)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <Icon size={28} weight="duotone" className="text-primary" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="bg-background overflow-hidden py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              Por que usar{" "}
              <em className="text-primary italic">IA na sua Clínica?</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Automatize o atendimento com a IA integrada ao Hero Sales
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {iaAdvantages.map((advantage, index) => (
              <motion.div key={index} variants={staggerItem} whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="relative rounded-2xl text-center group h-full">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary transition-all duration-300" />
                <div className="relative rounded-2xl bg-background p-4 sm:p-8 flex flex-row sm:flex-col items-center sm:items-stretch gap-4 sm:gap-0 border border-secondary/10 h-full">
                  <motion.div className="mx-0 sm:mx-auto mb-0 sm:mb-4 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors" whileHover={{ scale: 1.1, rotate: 5 }}>
                    <advantage.icon size={32} weight="duotone" className="text-primary" />
                  </motion.div>
                  <div className="text-left sm:text-center">
                    <h3 className="font-sans font-semibold text-lg text-secondary mb-1 sm:mb-2 sm:text-base">{advantage.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{advantage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projetos */}
      <section hidden className="bg-secondary py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport}>
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
                Clínicas que Usam{" "}
                <em className="text-primary italic">a IA do Hero Sales</em>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Profissionais de saúde que automatizaram o atendimento e multiplicaram agendamentos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div key={index} variants={staggerItem} className="h-full">
                  <Link to={`/projetos/${project.slug}`} className="block h-full">
                    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3, ease: "easeOut" }} className="h-full">
                      <Card variant="glass" className="group overflow-hidden h-full flex flex-col">
                        <div className="relative aspect-square bg-white/10 overflow-hidden">
                          <motion.img src={project.image} alt={project.name} className="w-full h-full object-cover object-top" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                          <motion.div className="absolute bottom-4 left-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <Badge variant="gold" className="flex items-center gap-1 px-3 py-1.5">
                              <span className="font-bold">{project.result}</span>
                              <span className="font-normal">{project.resultLabel}</span>
                            </Badge>
                          </motion.div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-sans text-xl font-semibold mb-1 text-white group-hover:text-primary transition-colors">{project.name}</h3>
                          <p className="text-white/60 text-sm">{project.url}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-background py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
              O que está <em className="text-primary italic">incluso</em>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Todas as ferramentas de IA que você precisa, em uma única plataforma
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allFeatures.map((feature, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card variant="default" className="h-full hover:shadow-gold hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-5 flex items-start gap-4">
                    <motion.div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors" whileHover={{ scale: 1.1 }}>
                      <feature.icon size={24} weight="duotone" className="text-primary" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-sans text-sm font-semibold text-secondary mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Processo */}
      <section className="bg-secondary overflow-hidden py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
              Como <em className="text-primary italic">Funciona</em>
            </h2>
          </motion.div>

          {/* Desktop */}
          <div className="hidden lg:block relative">
            <div className="absolute top-12 flex items-center" style={{ left: "calc(100% / 8)", right: "calc(100% / 8)" }}>
              <div className="w-full h-1 bg-primary/30 rounded-full relative overflow-hidden">
                <motion.div className="absolute inset-0 h-full" style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(23, 161, 146, 0.3) 10%, rgba(23, 161, 146, 1) 50%, rgba(23, 161, 146, 0.3) 90%, transparent 100%)",
                  width: "30%"
                }} initial={{ x: "-100%" }} animate={{ x: "450%" }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }} />
              </div>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="relative flex justify-between items-start">
              {processSteps.map((step, index) => {
                const isLast = index === processSteps.length - 1;
                return (
                  <motion.div key={index} variants={staggerItem} initial="rest" whileHover="hover" animate="rest" className="flex flex-col items-center text-center flex-1 cursor-pointer">
                    <motion.div className={`${isLast ? "w-24 h-24 border-4 border-white" : "w-20 h-20 md:w-24 md:h-24"} rounded-full bg-primary flex items-center justify-center mb-4 relative z-10 border-solid`} variants={circleHoverVariant} initial={{ scale: 0, opacity: 0, boxShadow: "0 0 20px rgba(23, 161, 146, 0.3)" }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}>
                      <step.icon size={isLast ? 36 : 32} weight="duotone" className="text-secondary" />
                    </motion.div>
                    <motion.h3 className="font-sans font-bold text-sm uppercase tracking-wide mb-1" variants={textHoverVariant} transition={{ duration: 0.2 }}>{step.title}</motion.h3>
                    <motion.p className="text-xs leading-relaxed max-w-[140px]" variants={descriptionHoverVariant} transition={{ duration: 0.2 }}>{step.description}</motion.p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="lg:hidden relative">
            <motion.div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} style={{ transformOrigin: "top" }} />
            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const isLast = index === processSteps.length - 1;
                return (
                  <motion.div key={index} variants={staggerItem} className="flex items-start gap-6">
                    <motion.div className={`relative z-10 flex-shrink-0 w-16 h-16 ${isLast ? "border-4 border-white" : ""} rounded-full bg-primary shadow-gold flex items-center justify-center`} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}>
                      <step.icon size={isLast ? 28 : 24} weight="duotone" className="text-secondary" />
                    </motion.div>
                    <div className="pt-2">
                      <h3 className="text-white font-sans font-bold text-sm uppercase tracking-wide mb-1">{step.title}</h3>
                      <p className="text-white/60 text-xs leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outros Serviços */}
      <Services />

      {/* Depoimentos */}
      <Testimonials />

      {/* CTA Final */}
      <section className="bg-background relative overflow-hidden py-10 md:py-[90px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24">
          <Divider variant="gold" className="h-1" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="max-w-3xl mx-auto text-center">
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-secondary mb-4">
              Pronto para automatizar{" "}
              <em className="text-primary italic">o atendimento</em>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-8">
              Pare de perder pacientes — a IA do Hero Sales atende 24h por você
            </motion.p>
            <motion.div variants={fadeInUp} className="space-y-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:inline-block">
                <Button size="lg" variant="gold" className="group shadow-gold relative overflow-hidden w-full sm:w-auto text-sm sm:text-base" onClick={handleWhatsAppClick}>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12" initial={{ x: "-100%" }} whileHover={{ x: "100%" }} transition={{ duration: 0.6 }} />
                  <WhatsappLogo weight="fill" className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">Agendar Demo do Hero Sales</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                <Clock size={16} weight="bold" />
                <span>IA ativa em 7 dias</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Team />
      <Footer />
    </div>;
};

export default ServicesIAClinicasPage;
