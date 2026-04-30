import { motion, useInView } from "framer-motion";
import mockupMédico from "@/assets/mockup-médico-autoridade.avif";
import PortfolioMarquee from "@/components/sessoes/PortfolioMarquee";
import { useRef, useEffect, useState } from "react";
import ResponsiveSiteAnimation from "@/components/animations/ResponsiveSiteAnimation";
import EmailAnimation from "@/components/animations/EmailAnimation";
import SSLAnimation from "@/components/animations/SSLAnimation";
import SupportAnimation from "@/components/animations/SupportAnimation";
import SEOAnimation from "@/components/animations/SEOAnimation";
import DomainAnimation from "@/components/animations/DomainAnimation";
import {
  ShieldCheck,
  Headset,
  Check,
  ArrowRight,
  Star,
  Users,
  Trophy,
  Lightning,
  CreditCard,
  ClipboardText,
  ChatCircleDots,
  RocketLaunch,
} from "@phosphor-icons/react";

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
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LeadCaptureDialog } from "@/components/LeadCaptureDialog";
import { Link } from "react-router-dom";
import { WhatsappLogo } from "@phosphor-icons/react";
const logo = "https://msgsndr-private.storage.googleapis.com/companyPhotos/0599742e-e4db-4132-b44e-f3efdf215411.png";
import { SEOHead } from "@/components/seo/SEOHead";
import { Results } from "@/components/sessoes/Results";
import { Testimonials } from "@/components/sessoes/Testimonials";

import { PAGE_SEO } from "@/lib/seo-config";
import { openWhatsAppPopup } from "@/hooks/useWhatsAppPopup";
import { TrailSection } from "@/components/sessoes/TrailSection";
import { Team } from "@/components/sessoes/Team";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
  scaleIn,
} from "@/lib/animations";

// ─── Section CTA ─────────────────────────────────────────────
const SectionCTA = () => (
  <div className="bg-secondary py-8 flex justify-center">
    <motion.button
      onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group inline-flex items-center justify-center gap-2 px-12 py-4 rounded-xl bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-lg shadow-lg transition-colors"
    >
      Criar Meu Site na Hero Sales
      <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
    </motion.button>
  </div>
);

// ─── Animated Counter ────────────────────────────────────────
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// ─── Data ────────────────────────────────────────────────────
const features = [
  {
    component: ResponsiveSiteAnimation,
    title: "Site Profissional Responsivo",
    description: "Crie seu site direto na Hero Sales com nosso site builder. Responsivo, moderno e otimizado para converter pacientes.",
  },
  {
    component: EmailAnimation,
    title: "Email @seudominio.com.br",
    description: "Email corporativo com seu dominio integrado a plataforma. Chega de usar Gmail ou Hotmail no cartao de visitas.",
  },
  {
    component: SSLAnimation,
    title: "SSL/HTTPS Incluso",
    description: "Certificado de seguranca automatico em todos os sites criados na Hero Sales. Confianca para seus pacientes.",
  },
  {
    component: SupportAnimation,
    title: "Suporte Dedicado",
    description: "Qualquer duvida, nosso time resolve via WhatsApp. Sem robos, sem filas. Resposta rapida quando precisar.",
  },
  {
    component: SEOAnimation,
    title: "SEO Configurado",
    description: "Titulos, descricoes e estrutura tecnica ja otimizados para o Google encontrar seu site desde o primeiro dia.",
  },
  {
    component: DomainAnimation,
    title: "Dominio Proprio",
    description: "Conecte seu dominio profissional ao site criado na Hero Sales. www.suaclinica.com.br -- sem subdominios genericos.",
  },
];

const faqItems = [
  {
    question: "Preciso ter conhecimento tecnico para criar o site?",
    answer: "Nao! O site builder da Hero Sales e drag-and-drop. Voce monta seu site arrastando blocos, sem precisar escrever uma linha de codigo. E temos templates prontos para clinicas.",
  },
  {
    question: "O email corporativo funciona no celular?",
    answer: "Sim! Voce pode acessar seu email @seudominio.com.br pelo celular (Gmail, Outlook ou qualquer app de email), computador ou navegador web.",
  },
  {
    question: "Existe fidelidade ou multa para cancelar?",
    answer: "Nao existe fidelidade. Voce pode cancelar a qualquer momento sem multas. Comece com 14 dias gratis e fique porque quer, nao porque e obrigado.",
  },
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer: "Com nossos templates prontos para clinicas, voce pode ter seu site no ar em poucas horas. Se preferir, nosso time configura tudo para voce em ate 7 dias.",
  },
  {
    question: "Posso personalizar o design do site?",
    answer: "Claro! O site builder da Hero Sales permite personalizar cores, fontes, imagens e layout. Crie um site unico para sua clinica.",
  },
  {
    question: "O site se integra com o restante da plataforma?",
    answer: "Sim! O site criado na Hero Sales ja vem integrado com funis de captacao, agendamento online, chatbot IA, CRM e automacoes. Tudo conectado.",
  },
];

const pricingBenefits = [
  "Site builder drag-and-drop",
  "Email corporativo @seudominio",
  "CRM e pipeline de vendas",
  "Chatbot com IA 24h",
  "Funis de captacao ilimitados",
  "Automacoes e lembretes",
  "Email marketing e SMS",

];

const heroMarqueeImages = {
  column1: [marquee001, marquee002, marquee003, marquee004],
  column2: [marquee005, marquee006, marquee007, marquee008],
  column3: [marquee009, marquee010, marquee011, marquee012],
};

// ─── Page Component ──────────────────────────────────────────
const OfertaSiteEmailPage = () => {
  const [formOpen, setFormOpen] = useState(false);
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const scriptId = "leadconnector-form-embed";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-secondary min-h-screen text-secondary-foreground selection-gold">
      <SEOHead
        title={PAGE_SEO.services.ofertaSiteEmail.title}
        description={PAGE_SEO.services.ofertaSiteEmail.description}
        canonical="https://herosales.pro/oferta/site-email"
      />
      {/* ═══════ SIMPLIFIED HEADER ═══════ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <div className="w-full max-w-[1400px] flex items-center justify-center sm:justify-between px-6 py-3 rounded-[20px] bg-secondary/80 backdrop-blur-2xl border border-white/15">
          <div className="bg-[#1a1535] rounded-[0px_0px_12px_12px] px-4 py-2 -mb-5">
            <img src={logo} alt="Hero Sales" className="w-56 h-auto lg:w-64 lg:h-14 origin-left object-contain drop-shadow-lg" />
          </div>
          <button
            onClick={scrollToPricing}
            className="hidden sm:flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-sm shadow-lg whitespace-nowrap transition-colors group"
          >
            Criar Meu Site Agora
            <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-24 md:pb-0">
        {/* Marquee image background - desktop only */}
        <div className="absolute inset-0 hidden lg:flex justify-center items-center overflow-hidden opacity-[0.25]">
          <div className="flex gap-4 rotate-[12deg] scale-125">
            {/* Column 1 - up */}
            <div className="flex flex-col gap-4 animate-[marquee-up_25s_linear_infinite]">
              {[...heroMarqueeImages.column1, ...heroMarqueeImages.column1].map((src, i) => (
                <img key={`c1-${i}`} src={src} alt="" className="w-[280px] rounded-xl object-cover" loading="lazy" />
              ))}
            </div>
            {/* Column 2 - down */}
            <div className="flex flex-col gap-4 animate-[marquee-down_30s_linear_infinite]">
              {[...heroMarqueeImages.column2, ...heroMarqueeImages.column2].map((src, i) => (
                <img key={`c2-${i}`} src={src} alt="" className="w-[280px] rounded-xl object-cover" loading="lazy" />
              ))}
            </div>
            {/* Column 3 - up */}
            <div className="flex flex-col gap-4 animate-[marquee-up_28s_linear_infinite]">
              {[...heroMarqueeImages.column3, ...heroMarqueeImages.column3].map((src, i) => (
                <img key={`c3-${i}`} src={src} alt="" className="w-[280px] rounded-xl object-cover" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
        {/* Dark overlay over marquee */}
        <div className="absolute inset-0 bg-secondary/40" />

        <div className="container mx-auto px-6 relative z-10 max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Column 1 — Content */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30 mb-8"
            >
              <Users size={16} weight="fill" className="text-primary" />
              <span className="text-sm font-medium text-primary">
                +500 clinicas ja usam Hero Sales
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-display leading-tight mb-6"
            >
              Crie Seu{" "}
              <em className="text-primary italic">Site Profissional</em> e{" "}
              <em className="text-primary italic">Email Corporativo</em>
              {" "}Direto na Plataforma Hero Sales.
              <br />
              <span className="text-primary font-semibold">
                Incluso no seu plano. Comece gratis.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mb-10"
            >
              Site builder drag-and-drop, templates prontos para clinicas,
              email corporativo, dominio e hospedagem -- tudo integrado ao CRM, funis e automacoes da Hero Sales.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10"
            >
              <button
                onClick={scrollToPricing}
                className="group"
              >
                <div className="rotating-border rounded-xl p-[3px]">
                  <span className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 sm:px-24 sm:py-5 rounded-lg bg-[#6e5bbb] text-white font-bold text-lg border-2 border-white shadow-lg">
                    Criar Meu Site Gratis
                    <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-6 text-white/40 text-sm"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} weight="fill" className="text-primary/60" />
                14 dias gratis
              </span>
              <span className="flex items-center gap-1.5">
                <Lightning size={16} weight="fill" className="text-primary/60" />
                Pronto em minutos
              </span>
              <span className="flex items-center gap-1.5">
                <Headset size={16} weight="fill" className="text-primary/60" />
                Suporte dedicado
              </span>
            </motion.div>
          </div>

          {/* Column 2 — Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full self-center relative flex justify-center"
          >
            <img
              src={mockupMédico}
              alt="Mockup site medico Hero Sales"
              className="w-full max-w-2xl drop-shadow-2xl rounded-2xl"
            />
          </motion.div>

          {/* Form Dialog */}
          <LeadCaptureDialog open={formOpen} onOpenChange={setFormOpen} />
        </div>
      </section>

      {/* ═══════ COMO FUNCIONA ═══════ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="bg-secondary overflow-hidden py-16 md:py-24"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white">
              Como <em className="text-primary italic">funciona</em>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mt-4">
              4 passos simples para ter seu site profissional no ar com a Hero Sales.
            </p>
          </motion.div>

          {/* Desktop - Horizontal */}
          <div className="hidden lg:block relative">
            {/* Connector line */}
            <div
              className="absolute top-12 flex items-center"
              style={{ left: "calc(100% / 8)", right: "calc(100% / 8)" }}
            >
              <div className="w-full h-1 bg-primary/30 rounded-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 h-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(23, 161, 146, 0.3) 10%, rgba(23, 161, 146, 1) 50%, rgba(23, 161, 146, 0.3) 90%, transparent 100%)",
                    width: "30%",
                  }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "450%" }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              </div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="relative flex justify-between items-start"
            >
              {[
                {
                  icon: CreditCard,
                  title: "Crie Sua Conta",
                  description:
                    "Acesse app.herosales.pro e comece seu trial gratuito de 14 dias",
                },
                {
                  icon: ClipboardText,
                  title: "Escolha um Template",
                  description:
                    "Selecione um template pronto para clinicas e personalize com sua marca",
                },
                {
                  icon: ChatCircleDots,
                  title: "Personalize Tudo",
                  description:
                    "Arraste e solte blocos para montar seu site, configure email e dominio",
                },
                {
                  icon: RocketLaunch,
                  title: "Publique e Integre",
                  description:
                    "Seu site ja conectado ao CRM, funis, chatbot e automacoes da Hero Sales",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="flex flex-col items-center text-center flex-1 cursor-pointer"
                >
                  <motion.div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center mb-4 relative z-10"
                    variants={{
                      rest: {
                        scale: 1,
                        boxShadow: "0 0 20px rgba(23, 161, 146, 0.3)",
                      },
                      hover: {
                        scale: 1.2,
                        boxShadow: "0 0 50px rgba(23, 161, 146, 0.6)",
                      },
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <step.icon
                      size={32}
                      weight="duotone"
                      className="text-secondary"
                    />
                  </motion.div>
                  <motion.h3
                    className="font-sans font-bold text-sm uppercase tracking-wide mb-1"
                    variants={{
                      rest: { color: "rgba(255, 255, 255, 1)" },
                      hover: { color: "rgba(23, 161, 146, 1)" },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-xs leading-relaxed max-w-[160px]"
                    variants={{
                      rest: { color: "rgba(255, 255, 255, 0.6)" },
                      hover: { color: "rgba(255, 255, 255, 0.9)" },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mobile - Vertical */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:hidden relative"
          >
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
            <div className="space-y-8">
              {[
                {
                  icon: CreditCard,
                  title: "Crie Sua Conta",
                  description:
                    "Acesse app.herosales.pro e teste 14 dias gratis",
                },
                {
                  icon: ClipboardText,
                  title: "Escolha um Template",
                  description:
                    "Templates prontos para clinicas, personalize com sua marca",
                },
                {
                  icon: ChatCircleDots,
                  title: "Personalize Tudo",
                  description:
                    "Drag-and-drop para montar site, email e dominio",
                },
                {
                  icon: RocketLaunch,
                  title: "Publique e Integre",
                  description:
                    "Site conectado ao CRM, funis e automacoes",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-6"
                >
                  <motion.div
                    className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary shadow-gold flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <step.icon
                      size={24}
                      weight="duotone"
                      className="text-secondary"
                    />
                  </motion.div>
                  <div className="pt-2">
                    <h3 className="text-white font-sans md:font-bold text-sm uppercase tracking-wide mb-1">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
      <SectionCTA />

      {/* ═══════ RESULTS ═══════ */}
      <Results />

      {/* ═══════ TRAIL ANIMATION ═══════ */}
      <TrailSection />
      <SectionCTA />

      {/* ═══════ PORTFOLIO MARQUEE ═══════ */}
      <PortfolioMarquee />
      <SectionCTA />

      {/* ═══════ FEATURES ═══════ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,hsl(219_42%_18%/0.8),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Tudo que está <em className="text-primary italic">incluso</em>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Tudo que voce precisa para sua clinica ter presenca digital
              profissional -- incluso na plataforma Hero Sales.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={staggerItem}
                className="group glass-dark rounded-xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <f.component />
                <div className="p-5">
                  <h3 className="font-sans text-lg font-semibold mb-2 text-white">
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionCTA />

      <Testimonials />
      <SectionCTA />

      <Team />

      {/* ═══════ PRICING ═══════ */}
      <section id="pricing" className="relative py-20 md:py-28 overflow-hidden">
        {/* Radial gold glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />

        <div className="container relative mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Um plano. <em className="text-primary italic">Tudo incluso.</em>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Site + email corporativo incluso no plano Hero Sales.
              Sem surpresas, sem taxas escondidas.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={scaleIn}
            className="max-w-lg mx-auto"
          >
            {/* Card with gold glow behind */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <div className="rotating-border rounded-2xl">
              <div className="relative rounded-2xl bg-secondary/80 backdrop-blur-md p-6 md:p-8 lg:p-10 shadow-gold-lg">
                {/* Popular badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-5 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-bold shadow-gold">
                  <Lightning size={16} weight="fill" />
                  Preço Promocional
                </div>

                <div className="text-center mb-8 pt-4">
                  <p className="text-white/50 text-sm mb-3">Plataforma Hero Sales Completa</p>
                  {/* Anchor price */}
                  <p className="text-white/40 text-sm line-through mb-1">De R$997/mes</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl md:text-3xl font-bold text-primary">R$</span>
                    <span className="text-7xl md:text-8xl font-bold text-primary drop-shadow-[0_0_20px_hsl(var(--primary)/0.4)] font-display">497</span>
                    <span className="text-white/40 text-lg">/mes</span>
                  </div>
                  <p className="text-white/40 text-xs mt-3">
                    14 dias gratis · Sem taxa de setup · Cancele quando quiser
                  </p>
                </div>

                {/* Benefits in 2 columns */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {pricingBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-white/70 text-sm">
                      <Check
                        size={20}
                        weight="bold"
                        className="text-primary flex-shrink-0"
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="cta"
                  size="xl"
                  onClick={() => setFormOpen(true)}
                  className="w-full btn-shine animate-pulse-gold bg-[#6e5bbb] hover:bg-[#5d4ca3] border-[#6e5bbb] text-white whitespace-normal"
                >
                  Comecar Meu Trial Gratuito
                  <ArrowRight size={20} weight="bold" />
                </Button>

                {/* Trust elements */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                    <ShieldCheck size={14} weight="fill" className="text-primary" />
                    14 dias gratis
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                    Sem fidelidade
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                    <CreditCard size={14} className="text-primary" />
                    Pagamento 100% seguro
                  </span>
              </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary">
              Perguntas <em className="text-primary italic">frequentes</em>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-secondary/10 bg-secondary/5 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-secondary hover:text-primary hover:no-underline py-5 text-base font-sans">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary/60 text-sm leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default OfertaSiteEmailPage;
