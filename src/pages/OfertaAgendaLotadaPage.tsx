import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  Users,
  Lightning,
  Robot,
  ChatCircleDots,
  CalendarCheck,
  MegaphoneSimple,
  InstagramLogo,
  Chalkboard,
  Check,
  PhoneCall,
  ClipboardText,
  RocketLaunch,
  WhatsappLogo,
  Brain,
  BellRinging,
  TrendUp,
  UsersFour,
  Star,
  Timer,
  ChartLineUp,
  Target,
  Eye,
  Lock,
  Heartbeat,
  CalendarBlank,
  ChartBar,
  UserCirclePlus,
  Sparkle,
  WarningCircle,
  CurrencyDollar,
  XCircle,
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
const logo = "https://msgsndr-private.storage.googleapis.com/companyPhotos/0599742e-e4db-4132-b44e-f3efdf215411.png";
import { SEOHead } from "@/components/seo/SEOHead";
import { Results } from "@/components/sessoes/Results";
import { Testimonials } from "@/components/sessoes/Testimonials";
import { Team } from "@/components/sessoes/Team";

import { PAGE_SEO } from "@/lib/seo-config";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
  scaleIn,
} from "@/lib/animations";

// ─── Section CTA ─────────────────────────────────────────────
const SectionCTA = ({ label = "Quero Lotar Minha Agenda" }: { label?: string }) => (
  <div className="bg-secondary py-8 flex justify-center">
    <motion.button
      onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group inline-flex items-center justify-center gap-2 px-12 py-4 rounded-xl bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-lg shadow-lg transition-colors"
    >
      {label}
      <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
    </motion.button>
  </div>
);

// ─── Animated Counter ────────────────────────────────────────
const AnimatedCounter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
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
      {prefix}{count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
};

// ─── Feature Data (expanded to 10) ──────────────────────────
const features = [
  {
    icon: Robot,
    title: "Chatbot com IA 24h",
    description: "Atende seus leads instantaneamente via WhatsApp, mesmo de madrugada. Nenhum paciente fica sem resposta -- tudo dentro da plataforma.",
  },
  {
    icon: Brain,
    title: "Follow-up Automatizado",
    description: "Nenhum lead e esquecido. A automacao faz o acompanhamento inteligente ate o agendamento ser confirmado, sem esforco manual.",
  },
  {
    icon: BellRinging,
    title: "Lembretes de Consulta",
    description: "3 lembretes automaticos (24h, 2h e 15min antes) por WhatsApp, SMS e email. Reducao de 50-70% em no-shows, configurado em minutos.",
  },
  {
    icon: CalendarBlank,
    title: "Agenda Online 24/7",
    description: "Agendamento integrado ao seu site com horarios em tempo real. +30% em agendamentos fora do horario comercial.",
  },
  {
    icon: TrendUp,
    title: "Funis de Captacao de Pacientes",
    description: "Landing pages e funis otimizados para atrair pacientes qualificados da sua regiao, direto pela plataforma.",
  },
  {
    icon: UserCirclePlus,
    title: "Reativacao de Pacientes",
    description: "Sequencia de 5 toques automatizados que trazem 15-30% dos pacientes inativos de volta a clinica.",
  },
  {
    icon: Star,
    title: "Gestao de Reputacao",
    description: "Sistema automatico pos-consulta que solicita reviews no timing ideal. +50 avaliacoes 5 estrelas por mes.",
  },
  {
    icon: InstagramLogo,
    title: "CRM Completo",
    description: "Gerencie todos os seus pacientes, leads e oportunidades em um unico lugar. Pipeline visual de vendas incluso.",
  },
  {
    icon: ChartBar,
    title: "Dashboard de Metricas",
    description: "Relatorios automaticos de KPIs: leads, agendamentos, conversao, LTV e ROI. Visibilidade total do negocio.",
  },
  {
    icon: Chalkboard,
    title: "Email Marketing e SMS",
    description: "Campanhas de email e SMS integradas para nutrir leads, reativar pacientes e aumentar o faturamento.",
  },
];

// ─── Promises ────────────────────────────────────────────────
const promises = [
  {
    icon: CalendarCheck,
    number: "70%",
    title: "Reducao de No-Shows em 30 Dias",
    description: "Lembretes automaticos por WhatsApp, SMS e email integrados na plataforma reduzem drasticamente faltas e cancelamentos.",
    guarantee: "Reducao minima de 50% em 30 dias com a Hero Sales.",
  },
  {
    icon: RocketLaunch,
    number: "7 dias",
    title: "Agenda Cheia em 7 Dias",
    description: "Funis de captacao, chatbot com IA e agendamento online que mantem sua agenda cheia de pacientes qualificados.",
    guarantee: "Configure tudo em menos de 7 dias com nossos templates prontos.",
  },
  {
    icon: UserCirclePlus,
    number: "30%",
    title: "Reativacao de Pacientes Inativos",
    description: "Campanhas automaticas de email e SMS que trazem pacientes antigos de volta a clinica em ate 60 dias.",
    guarantee: "Minimo de 15% de reativacao em 60 dias.",
  },
  {
    icon: Star,
    number: "3x",
    title: "Triplique Avaliacoes 5 Estrelas",
    description: "Sistema automatico de solicitacao de reviews que aumenta sua reputacao online em 90 dias.",
    guarantee: "50 novas avaliacoes em 90 dias com o modulo de reputacao.",
  },
  {
    icon: ChartLineUp,
    number: "40%",
    title: "Aumento de Faturamento em 90 Dias",
    description: "Funis + automacao + reativacao + CRM integrados que aumentam receita de forma previsivel, tudo em uma unica plataforma.",
    guarantee: "14 dias gratis para testar sem compromisso.",
  },
];

// ─── Cases ───────────────────────────────────────────────────
const cases = [
  {
    specialty: "Clinica Odontologica",
    result: "+340%",
    metric: "em novos pacientes",
    period: "90 dias",
    services: "Funis + Chatbot IA + Reativacao",
  },
  {
    specialty: "Clinica Medica",
    result: "-62%",
    metric: "em no-shows",
    period: "30 dias",
    services: "Automacoes + Lembretes",
  },
  {
    specialty: "Estetica Avancada",
    result: "+189",
    metric: "avaliacoes no Google",
    period: "60 dias",
    services: "Modulo de reputacao automatico",
  },
];

// ─── Financial Impact ────────────────────────────────────────
const financialImpacts = [
  { icon: XCircle, value: "R$ 8.800", label: "perdidos/mês com apenas 1 paciente perdido por dia" },
  { icon: WarningCircle, value: "R$ 10.000+", label: "perdidos/mês com 30% de no-shows" },
  { icon: CurrencyDollar, value: "70%", label: "dos leads perdidos por demora no atendimento" },
];

// ─── Differentiators ────────────────────────────────────────
const differentiators = [
  { icon: Target, title: "Feito Para Clinicas", description: "Plataforma 100% pensada para saude" },
  { icon: Timer, title: "Pronto em 7 Dias", description: "Configure tudo na primeira semana" },
  { icon: ChartLineUp, title: "Tudo em Um So Lugar", description: "CRM, funis, IA, email, SMS, agenda" },
  { icon: ShieldCheck, title: "14 Dias Gratis", description: "Teste sem compromisso" },
  { icon: Eye, title: "Transparencia Total", description: "Acesso a todas as metricas 24/7" },
  { icon: Lock, title: "LGPD Compliant", description: "Dados 100% protegidos" },
];

// ─── Value Stack ─────────────────────────────────────────────
const valueStack = [
  { item: "Chatbot com IA 24h (WhatsApp integrado)", value: "R$ 3.500" },
  { item: "Follow-up e Automacoes Inteligentes", value: "R$ 1.800" },
  { item: "Lembretes Automaticos (reduz no-shows 70%)", value: "R$ 1.500" },
  { item: "Agenda Online 24/7 Integrada", value: "R$ 2.000" },
  { item: "Funis de Captacao e Landing Pages", value: "R$ 2.500" },
  { item: "Reativacao de Pacientes (Email + SMS)", value: "R$ 1.800" },
  { item: "Gestao de Reputacao e Reviews", value: "R$ 1.000" },
  { item: "CRM Completo com Pipeline Visual", value: "R$ 1.500" },
  { item: "Dashboard de Metricas e KPIs", value: "R$ 2.000" },
  { item: "Site Builder e Email Marketing", value: "R$ 1.500" },
];

const faqItems = [
  {
    question: "Como o chatbot com IA funciona?",
    answer: "O chatbot da Hero Sales responde seus leads 24 horas por dia via WhatsApp, com linguagem natural e humanizada. Ele qualifica o paciente, tira duvidas sobre procedimentos e agenda consultas automaticamente -- tudo configuravel pela plataforma.",
  },
  {
    question: "Preciso trocar meu sistema atual?",
    answer: "A Hero Sales substitui varias ferramentas (CRM, email marketing, agendamento, funis, chatbot) em uma so plataforma. Mas voce pode integrar com o que ja usa tambem.",
  },
  {
    question: "Em quanto tempo consigo configurar tudo?",
    answer: "Com nossos templates prontos para clinicas, voce configura tudo em 7 dias ou menos. E pode comecar a testar gratis por 14 dias.",
  },
  {
    question: "E se o paciente nao comparecer a consulta?",
    answer: "Os lembretes automaticos da plataforma reduzem faltas em ate 70%. Sao 3 confirmacoes por WhatsApp, SMS e email nos horarios certos (24h, 2h e 15min antes).",
  },
  {
    question: "A plataforma ajuda na captacao de pacientes?",
    answer: "Sim! Voce cria landing pages, funis de captacao e formularios otimizados direto na Hero Sales. Integra com Google Ads e Meta Ads para atrair pacientes qualificados.",
  },
  {
    question: "Funciona para minha especialidade?",
    answer: "A Hero Sales funciona para odontologia, medicina estetica, fisioterapia, nutricao, psicologia, dermatologia, oftalmologia e diversas outras especialidades da saude.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim. Nao existe fidelidade. Voce testa 14 dias gratis e pode cancelar quando quiser, sem multas ou burocracia.",
  },
  {
    question: "Minha equipe consegue usar a plataforma?",
    answer: "A Hero Sales foi pensada para ser simples. A interface e intuitiva e oferecemos suporte dedicado para ajudar sua equipe na configuracao inicial.",
  },
  {
    question: "Quanto custa a Hero Sales?",
    answer: "Temos planos a partir de R$ 497/mes com tudo incluso: CRM, IA, funis, automacoes, email, SMS, agenda e muito mais. Comece com 14 dias gratis.",
  },
];

const heroMarqueeImages = {
  column1: [marquee001, marquee002, marquee003, marquee004],
  column2: [marquee005, marquee006, marquee007, marquee008],
  column3: [marquee009, marquee010, marquee011, marquee012],
};

// ─── Pain Points ─────────────────────────────────────────────
const painPoints = [
  {
    icon: PhoneCall,
    title: "Leads que nunca sao respondidos",
    description: "Pacientes entram em contato fora do horario e vao para o concorrente. Sem um chatbot com IA, voce perde 70% das oportunidades.",
  },
  {
    icon: UsersFour,
    title: "Ferramentas desconectadas",
    description: "CRM em um lugar, agenda em outro, WhatsApp manual, planilhas... Sem integracao, sua equipe perde tempo e pacientes.",
  },
  {
    icon: CalendarCheck,
    title: "Faltas e cancelamentos constantes",
    description: "30% dos pacientes nao aparecem. Sem lembretes automaticos, isso custa R$ 10.000+ por mes em receita perdida.",
  },
  {
    icon: MegaphoneSimple,
    title: "Marketing sem retorno mensuravel",
    description: "Voce investe em anuncios mas nao tem funis de captacao nem automacao para converter leads em pacientes.",
  },
];

// ─── IA Section Data ─────────────────────────────────────────
const iaUseCases = [
  { category: "Atendimento", hours: "120-160h/mes", examples: "Chatbot IA no WhatsApp, agendamento 24/7, qualificacao automatica" },
  { category: "Captacao", hours: "80-130h/mes", examples: "Funis de vendas, landing pages, email marketing, SMS" },
  { category: "Gestao", hours: "75-110h/mes", examples: "CRM, pipeline visual, relatorios automaticos, dashboards" },
  { category: "Pos-atendimento", hours: "65-95h/mes", examples: "Reviews automaticos, reativacao, campanhas de fidelidade" },
];

// ─── Page Component ──────────────────────────────────────────
const OfertaAgendaLotadaPage = () => {
  const [formOpen, setFormOpen] = useState(false);
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-secondary min-h-screen text-secondary-foreground selection-gold">
      <SEOHead
        title={PAGE_SEO.services.ofertaAgendaLotada.title}
        description={PAGE_SEO.services.ofertaAgendaLotada.description}
        canonical="https://herosales.pro/oferta/agenda-lotada"
      />

      {/* ═══════ HEADER ═══════ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <div className="w-full max-w-[1400px] flex items-center justify-center sm:justify-between px-6 py-3 rounded-[20px] bg-secondary/80 backdrop-blur-2xl border border-white/15">
          <div className="bg-[#1a1535] rounded-[0px_0px_12px_12px] px-4 py-2 -mb-5">
            <img src={logo} alt="Hero Sales" className="w-56 h-auto lg:w-64 lg:h-14 origin-left object-contain drop-shadow-lg" />
          </div>
          <button
            onClick={scrollToPricing}
            className="hidden sm:flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-sm shadow-lg whitespace-nowrap transition-colors group"
          >
            Testar Hero Sales Gratis
            <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-24 md:pb-0">
        {/* Marquee background - desktop */}
        <div className="absolute inset-0 hidden lg:flex justify-center items-center overflow-hidden opacity-[0.25]">
          <div className="flex gap-4 rotate-[12deg] scale-125">
            <div className="flex flex-col gap-4 animate-[marquee-up_25s_linear_infinite]">
              {[...heroMarqueeImages.column1, ...heroMarqueeImages.column1].map((src, i) => (
                <img key={`c1-${i}`} src={src} alt="" className="w-[280px] rounded-xl object-cover" loading="lazy" />
              ))}
            </div>
            <div className="flex flex-col gap-4 animate-[marquee-down_30s_linear_infinite]">
              {[...heroMarqueeImages.column2, ...heroMarqueeImages.column2].map((src, i) => (
                <img key={`c2-${i}`} src={src} alt="" className="w-[280px] rounded-xl object-cover" loading="lazy" />
              ))}
            </div>
            <div className="flex flex-col gap-4 animate-[marquee-up_28s_linear_infinite]">
              {[...heroMarqueeImages.column3, ...heroMarqueeImages.column3].map((src, i) => (
                <img key={`c3-${i}`} src={src} alt="" className="w-[280px] rounded-xl object-cover" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-secondary/40" />

        <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30 mb-8"
            >
              <Users size={16} weight="fill" className="text-primary" />
              <span className="text-sm font-medium text-primary">
                +500 clinicas ja usam Hero Sales · +340% crescimento medio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-6"
            >
              De 35 a 80{" "}
              <em className="text-primary italic">Novos Pacientes</em>
              {" "}Por Mes Com a Plataforma{" "}
              <em className="text-primary italic">Hero Sales</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10"
            >
              CRM, chatbot com IA, funis de captacao, agendamento online,
              automacoes e email marketing -- tudo em uma unica plataforma.
              Voce foca na medicina, a Hero Sales lota sua agenda.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10"
            >
              <button onClick={scrollToPricing} className="group">
                <div className="rotating-border rounded-xl p-[3px]">
                  <span className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 sm:px-24 sm:py-5 rounded-lg bg-[#6e5bbb] text-white font-bold text-lg border-2 border-white shadow-lg">
                    Testar Hero Sales 14 Dias Gratis
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
              className="flex flex-wrap justify-center gap-6 text-white/40 text-sm"
            >
              <span className="flex items-center gap-1.5">
                <Robot size={16} weight="fill" className="text-primary/60" />
                IA + Automacao integrados
              </span>
              <span className="flex items-center gap-1.5">
                <Lightning size={16} weight="fill" className="text-primary/60" />
                Pronto em 7 dias
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} weight="fill" className="text-primary/60" />
                14 dias gratis
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ FINANCIAL IMPACT ═══════ */}
      <section className="py-16 md:py-20 bg-red-950/20 border-y border-red-500/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Quanto sua clinica <em className="text-red-400 italic">perde</em> sem automacao?
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Cada dia sem uma plataforma integrada e dinheiro indo para o concorrente.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {financialImpacts.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="text-center p-6 rounded-xl glass-dark border border-red-500/20"
              >
                <item.icon size={32} weight="duotone" className="text-red-400 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-display text-red-400 mb-2">{item.value}</p>
                <p className="text-white/50 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ PAIN POINTS ═══════ */}
      <section className="py-20 md:py-28 relative bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary">
              Isso está <em className="text-primary italic">acontecendo</em> na sua clínica?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Se você se identificou com algum desses problemas, sua clínica está perdendo dinheiro todos os dias.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {painPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={staggerItem}
                className="group bg-white rounded-xl p-6 border border-red-500/30 hover:border-red-500/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <point.icon size={24} weight="duotone" className="text-red-500" />
                </div>
                <h3 className="font-sans text-lg font-semibold mb-2 text-secondary">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionCTA />

      {/* ═══════ 5 PROMESSAS ═══════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Nossas <em className="text-primary italic">5 Promessas</em> Para Sua Clínica
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Resultados mensuraveis que a plataforma Hero Sales entrega para sua clinica.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="space-y-6 max-w-4xl mx-auto"
          >
            {promises.map((p, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="glass-dark rounded-xl p-6 md:p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <p.icon size={28} weight="duotone" className="text-primary" />
                    </div>
                    <span className="text-3xl md:text-4xl font-display text-primary">{p.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-xl font-bold mb-2 text-white">{p.title}</h3>
                    <p className="text-white/50 text-sm mb-3">{p.description}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#6e5bbb]/10 border border-[#6e5bbb]/30">
                      <ShieldCheck size={16} weight="fill" className="text-[#6e5bbb]" />
                      <span className="text-[#6e5bbb] text-xs font-semibold">{p.guarantee}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionCTA />

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
              4 passos para transformar sua clinica com a Hero Sales.
            </p>
          </motion.div>

          {/* Desktop */}
          <div className="hidden lg:block relative">
            <div
              className="absolute top-12 flex items-center"
              style={{ left: "calc(100% / 8)", right: "calc(100% / 8)" }}
            >
              <div className="w-full h-1 bg-primary/30 rounded-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 h-full"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(23, 161, 146, 0.3) 10%, rgba(23, 161, 146, 1) 50%, rgba(23, 161, 146, 0.3) 90%, transparent 100%)",
                    width: "30%",
                  }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "450%" }}
                  transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
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
                { icon: PhoneCall, title: "Crie Sua Conta Gratis", description: "Acesse app.herosales.pro e comece seu trial de 14 dias" },
                { icon: Robot, title: "Configure em 7 Dias", description: "Use nossos templates prontos para clinicas e configure tudo rapido" },
                { icon: MegaphoneSimple, title: "Ative Seus Funis", description: "Lance funis de captacao, chatbot IA e automacoes" },
                { icon: RocketLaunch, title: "Escale Seus Resultados", description: "Otimize e aumente agendamentos mes a mes" },
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
                      rest: { scale: 1, boxShadow: "0 0 20px rgba(23, 161, 146, 0.3)" },
                      hover: { scale: 1.2, boxShadow: "0 0 50px rgba(23, 161, 146, 0.6)" },
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <step.icon size={32} weight="duotone" className="text-secondary" />
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
                    className="text-xs leading-relaxed max-w-[180px]"
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

          {/* Mobile */}
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
                { icon: PhoneCall, title: "Crie Sua Conta Gratis", description: "Acesse app.herosales.pro e teste 14 dias" },
                { icon: Robot, title: "Configure em 7 Dias", description: "Templates prontos para clinicas" },
                { icon: MegaphoneSimple, title: "Ative Seus Funis", description: "Captacao, IA e automacoes" },
                { icon: RocketLaunch, title: "Escale Resultados", description: "Otimize e cresca mes a mes" },
              ].map((step, index) => (
                <motion.div key={index} variants={staggerItem} className="flex items-start gap-6">
                  <motion.div
                    className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary shadow-gold flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <step.icon size={24} weight="duotone" className="text-secondary" />
                  </motion.div>
                  <div className="pt-2">
                    <h3 className="text-white font-sans md:font-bold text-sm uppercase tracking-wide mb-1">{step.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{step.description}</p>
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

      {/* ═══════ CASES DE SUCESSO ═══════ */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Cases de <em className="text-primary italic">Sucesso</em>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Resultados reais de clínicas que transformaram sua operação.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {cases.map((c, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="glass-dark rounded-xl p-8 border border-primary/20 text-center hover:border-primary/40 transition-all duration-300"
              >
                <p className="text-xs uppercase tracking-wider text-primary/80 mb-4 font-semibold">{c.specialty}</p>
                <p className="text-5xl md:text-6xl font-display text-primary mb-1">{c.result}</p>
                <p className="text-white/70 text-sm mb-4">{c.metric}</p>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-white/40 text-xs">
                  <span className="text-white/60 font-medium">Em {c.period}</span> · {c.services}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionCTA />

      {/* ═══════ FEATURES (expanded) ═══════ */}
      <section className="py-20 md:py-28 relative bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,hsl(var(--primary)/0.06),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary">
              O que está <em className="text-primary italic">incluso</em>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tudo que voce precisa em uma unica plataforma para nunca mais perder um paciente.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={staggerItem}
                className="group bg-white rounded-xl overflow-hidden border border-border hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <f.icon size={48} weight="duotone" className="text-primary" />
                </div>
                <div className="p-5">
                  <h3 className="font-sans text-lg font-semibold mb-2 text-secondary">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionCTA />

      {/* ═══════ IA SECTION ═══════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,hsl(var(--primary)/0.06),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              IA que economiza <em className="text-primary italic">520-740 horas/mês</em>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Equivalente a R$ 10.500 — R$ 25.000/mês em valor. ROI estimado: 300% a 800%.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {iaUseCases.map((uc, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="glass-dark rounded-xl p-6 border border-primary/15 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-sans text-lg font-bold text-white">{uc.category}</h3>
                  <span className="text-primary font-display text-sm">{uc.hours}</span>
                </div>
                <p className="text-white/50 text-sm">{uc.examples}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionCTA />

      {/* ═══════ DIFFERENTIATORS ═══════ */}
      <section className="py-16 md:py-20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Por que a <em className="text-primary italic">Hero Sales</em>?
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
          >
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="text-center p-4 rounded-xl glass-dark border border-white/5"
              >
                <d.icon size={28} weight="duotone" className="text-primary mx-auto mb-2" />
                <h3 className="text-white text-sm font-bold mb-1">{d.title}</h3>
                <p className="text-white/40 text-xs">{d.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Testimonials />
      <SectionCTA />

      <Team />

      {/* ═══════ PRICING + VALUE STACK ═══════ */}
      <section id="pricing" className="relative py-20 md:py-28 overflow-hidden">
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
              Nao deixe seus concorrentes{" "}
              <em className="text-primary italic">levarem seus pacientes.</em>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Comece seu trial gratuito de 14 dias agora.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={scaleIn}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
              <div className="rotating-border rounded-2xl">
                <div className="relative rounded-2xl bg-secondary/80 backdrop-blur-md p-6 md:p-8 lg:p-10 shadow-gold-lg">
                  {/* Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-5 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-bold shadow-gold">
                    <Lightning size={16} weight="fill" />
                    Vagas Limitadas
                  </div>

                  <div className="text-center mb-8 pt-4">
                    <p className="text-white/50 text-sm mb-3">Plataforma Hero Sales Completa</p>
                  </div>

                  {/* Value Stack */}
                  <div className="space-y-2 mb-6">
                    {valueStack.map((vs, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                        <div className="flex items-center gap-2">
                          <Check size={16} weight="bold" className="text-primary flex-shrink-0" />
                          <span className="text-white/70 text-sm">{vs.item}</span>
                        </div>
                        <span className="text-white/30 text-sm line-through">{vs.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-primary/30 mb-6" />

                  {/* Total value vs actual */}
                  <div className="text-center mb-6">
                    <p className="text-white/40 text-sm">Valor total se contratado separadamente:</p>
                    <p className="text-2xl text-white/30 line-through font-display">R$ 19.100</p>
                    <div className="mt-4">
                      <p className="text-white/50 text-xs mb-1">Tudo isso por:</p>
                      <h3 className="text-4xl md:text-5xl font-display text-primary">
                        14 Dias Gratis
                      </h3>
                      <p className="text-white/40 text-sm mt-2 max-w-sm mx-auto">
                        Teste a plataforma completa sem compromisso. Veja exatamente como
                        a Hero Sales lota a agenda da sua clinica.
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="cta"
                    size="xl"
                    onClick={() => setFormOpen(true)}
                    className="w-full btn-shine animate-pulse-gold bg-[#6e5bbb] hover:bg-[#5d4ca3] border-[#6e5bbb] text-white whitespace-normal"
                  >
                    Comecar Meu Trial Gratuito
                    <ArrowRight size={20} weight="bold" />
                  </Button>

                  {/* Trust */}
                  <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                      <ShieldCheck size={14} weight="fill" className="text-primary" />
                      14 dias gratis
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                      Sem fidelidade
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                      <WhatsappLogo size={14} className="text-primary" />
                      Suporte dedicado
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

      <LeadCaptureDialog open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default OfertaAgendaLotadaPage;
