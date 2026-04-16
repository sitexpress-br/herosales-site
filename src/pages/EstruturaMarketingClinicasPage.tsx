import { motion } from "framer-motion";
import { useState } from "react";
import PaidTrafficAnimation from "@/components/animations/PaidTrafficAnimation";
import CRMAnimation from "@/components/animations/CRMAnimation";
import AIAttendanceAnimation from "@/components/animations/AIAttendanceAnimation";
import FunnelAutomationAnimation from "@/components/animations/FunnelAutomationAnimation";
import WeeklyAuditAnimation from "@/components/animations/WeeklyAuditAnimation";
import MonthlyReviewAnimation from "@/components/animations/MonthlyReviewAnimation";
import {
  ShieldCheck,
  ArrowRight,
  Users,
  Lightning,
  Robot,
  CalendarCheck,
  Check,
  WhatsappLogo,
  Brain,
  Target,
  MagnifyingGlass,
  Funnel,
  ChartLineUp,
  Stethoscope,
  Storefront,
  X,
  Headset,

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
import mockupMédico from "@/assets/mockup-médico-autoridade.avif";

import { Button } from "@/components/ui/button";
import { LeadCaptureDialog } from "@/components/LeadCaptureDialog";
const logo = "https://msgsndr-private.storage.googleapis.com/companyPhotos/0599742e-e4db-4132-b44e-f3efdf215411.png";
import { SEOHead } from "@/components/seo/SEOHead";
import { ClientLogos } from "@/components/sessoes/ClientLogos";
import { Results } from "@/components/sessoes/Results";
import { Testimonials } from "@/components/sessoes/Testimonials";
import { Team } from "@/components/sessoes/Team";
import { TrailSection } from "@/components/sessoes/TrailSection";
import { Process } from "@/components/sessoes/Process";
import PortfolioMarquee from "@/components/sessoes/PortfolioMarquee";

import { PAGE_SEO } from "@/lib/seo-config";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
  scaleIn,
} from "@/lib/animations";

// ─── Section CTA ─────────────────────────────────────────────
const SectionCTA = ({ label = "Agendar meu diagnóstico", onClick }: { label?: string; onClick: () => void }) => (
  <div className="bg-secondary py-8 flex justify-center">
    <motion.button
      onClick={onClick}
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

// ─── Dois cenários ───────────────────────────────────────────
const scenarios = [
  {
    icon: MagnifyingGlass,
    tag: "Cenário A",
    title: "Você ainda não tem tráfego estruturado.",
    description: "A agenda depende de indicação, o orgânico é instável e não dá para prever quantos pacientes vão entrar no mês que vem. Crescer assim é questão de sorte, não de estratégia.",
  },
  {
    icon: Funnel,
    tag: "Cenário B",
    title: "Você já investiu em tráfego e não funcionou.",
    description: "O lead chegou, mas não virou paciente. A agência entregou o clique e sumiu. Sua equipe não deu conta do que veio depois. O investimento não fechou as contas.",
  },
];

// ─── Método (5 passos) ───────────────────────────────────────
const methodSteps = [
  {
    number: "01",
    icon: Target,
    title: "Geração de demanda qualificada",
    description: "Google Ads para quem já busca consulta. Meta Ads para quem ainda não sabe que precisa. Cada lead entra rastreado: você sabe de onde veio e quanto custou.",
    tags: ["Google Ads", "Meta Ads", "Landing Pages", "Rastreamento"],
  },
  {
    number: "02",
    icon: Storefront,
    title: "Toda a demanda centralizada num lugar só",
    description: "WhatsApp, Instagram, Google, site, indicação. Todo contato entra no CRM, organizado por etapa e atribuído ao atendente certo. Nada se perde.",
    tags: ["CRM", "Pipeline", "Origem rastreada", "Tempo real"],
  },
  {
    number: "03",
    icon: Robot,
    title: "IA que não deixa nenhum contato esperando",
    description: "Assim que o contato chega, nossa IA inicia o atendimento. Ela entende o que o paciente precisa e classifica. Sua secretária recebe o lead pronto para agendar.",
    tags: ["IA 24h", "Triagem automática", "Qualificação"],
  },
  {
    number: "04",
    icon: Brain,
    title: "Automações que não deixam nenhum lead escapar",
    description: "Lead frio entra em sequência de follow-up automático. Consulta agendada recebe confirmação. Faltou entra em reativação. Pós-consulta dispara pesquisa de satisfação. Paciente recebe lembrete de retorno.",
    tags: ["Follow-up", "Confirmação", "No-show", "Reativação", "Pós-consulta"],
  },
  {
    number: "05",
    icon: ChartLineUp,
    title: "Acompanhamento que mostra onde melhorar",
    description: "Auditoria semanal do funil e reunião mensal com análise por etapa, canal e atendente. Você enxerga onde está perdendo e o que precisa mudar.",
    tags: ["Auditoria semanal", "Reunião mensal", "Relatórios"],
  },
];

// ─── Para quem é ─────────────────────────────────────────────
const idealProfile = [
  "Você quer uma fonte de demanda que não depende só de indicação",
  "Você já investiu em tráfego e não viu o retorno que esperava",
  "Você sabe que está perdendo leads mas não sabe exatamente onde",
  "Você quer que sua equipe foque em atender, não em correr atrás de contato",
  "Você quer saber, no fim do mês, quanto cada real investido retornou",
];

// ─── Comparativo ─────────────────────────────────────────────
const comparison = [
  { traditional: "Entrega lead. O resto é problema seu", herosales: "Opera do anúncio ao paciente atendido" },
  { traditional: "Para no clique, sem processo depois", herosales: "Cada etapa do funil estruturada e automatizada" },
  { traditional: "CRM? Você que configura e alimenta", herosales: "CRM implantado, configurado e acompanhado por nós" },
  { traditional: "Follow-up depende da secretária lembrar", herosales: "Follow-up automático, sem depender de ninguém" },
  { traditional: "Relatório só de tráfego, sem visão do funil", herosales: "Visibilidade de conversão por etapa, canal e atendente" },
  { traditional: "Conversão baixa? A culpa é sempre do atendimento", herosales: "Se o lead não vira paciente, encontramos onde e corrigimos" },
];

const heroMarqueeImages = {
  column1: [marquee001, marquee002, marquee003, marquee004],
  column2: [marquee005, marquee006, marquee007, marquee008],
  column3: [marquee009, marquee010, marquee011, marquee012],
};

// ─── Tudo que está incluso ────────────────────────────────────
const inclusos = [
  {
    component: PaidTrafficAnimation,
    title: "Tráfego pago estruturado",
    description: "Google Ads e Meta Ads rastreados ponta a ponta, com landing pages otimizadas para converter paciente.",
  },
  {
    component: CRMAnimation,
    title: "CRM centralizado",
    description: "Todo contato organizado por etapa, origem e responsável. WhatsApp, Instagram, Google e site — tudo em um só lugar.",
  },
  {
    component: AIAttendanceAnimation,
    title: "IA de atendimento 24h",
    description: "Triagem e qualificação automáticas por WhatsApp. A secretária recebe o lead já pronto para agendar.",
  },
  {
    component: FunnelAutomationAnimation,
    title: "Automações de funil",
    description: "Follow-up de lead frio, confirmação de consulta, reativação de no-show e pós-consulta rodando sozinho.",
  },
  {
    component: WeeklyAuditAnimation,
    title: "Auditoria semanal",
    description: "Análise do funil por etapa, canal e atendente. Você enxerga onde está perdendo e o que precisa mudar.",
  },
  {
    component: MonthlyReviewAnimation,
    title: "Reunião mensal estratégica",
    description: "Time especialista acompanhando sua operação comercial. Ajustes contínuos baseados em dados reais.",
  },
];


// ─── Page Component ──────────────────────────────────────────
const EstruturaMarketingClinicasPage = () => {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);
  const scrollToDiagnostico = () => {
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-secondary min-h-screen text-secondary-foreground selection-gold">
      <SEOHead
        title={PAGE_SEO.services.ofertaAgendaLotada.title}
        description={PAGE_SEO.services.ofertaAgendaLotada.description}
        canonical="https://herosales.pro/oferta/estrutura-marketing-clinicas"
      />

      {/* ═══════ HEADER ═══════ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <div className="w-full max-w-[1400px] flex items-center justify-center sm:justify-between px-6 py-3 rounded-[20px] bg-secondary/80 backdrop-blur-2xl border border-white/15">
          <div className="bg-[#1a1535] rounded-[0px_0px_12px_12px] px-4 py-2 -mb-5">
            <img src={logo} alt="Hero Sales" className="w-56 h-auto lg:w-64 lg:h-14 origin-left object-contain drop-shadow-lg" />
          </div>
          <button
            onClick={scrollToDiagnostico}
            className="hidden sm:flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-sm shadow-lg whitespace-nowrap transition-colors group"
          >
            Fazer diagnóstico gratuito
            <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-24 md:pb-0">
        {/* Marquee image background - desktop only */}
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
        {/* Dark overlay over marquee */}
        <div className="absolute inset-0 bg-secondary/40" />

        <div className="container mx-auto px-6 relative z-10 max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Column 1 — Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30">
                <Users size={16} weight="fill" className="text-primary" />
                <span className="text-sm font-medium text-primary">
                  +70 clínicas atendidas
                </span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30">
                <Stethoscope size={16} weight="fill" className="text-primary" />
                <span className="text-sm font-medium text-primary">
                  Exclusivo para clínicas
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-display leading-tight mb-6"
            >
              Tráfego pago com{" "}
              <em className="text-primary italic">estrutura comercial</em>
              {" "}para clínicas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mb-10"
            >
              Sua agenda não pode depender de indicação. Nem de tráfego que não vira paciente.
              A Hero Sales estrutura a operação comercial completa da sua clínica, da campanha ao atendimento, com cada etapa conectada e funcionando.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-10"
            >
              <button onClick={scrollToDiagnostico} className="group">
                <div className="rotating-border rounded-xl p-[3px]">
                  <span className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 sm:px-24 sm:py-5 rounded-lg bg-[#6e5bbb] text-white font-bold text-lg border-2 border-white shadow-lg">
                    Quero meu diagnóstico gratuito
                    <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-6 text-white/40 text-sm"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} weight="fill" className="text-primary/60" />
                Diagnóstico sem custo
              </span>
              <span className="flex items-center gap-1.5">
                <Lightning size={16} weight="fill" className="text-primary/60" />
                Operação ponta a ponta
              </span>
              <span className="flex items-center gap-1.5">
                <Headset size={16} weight="fill" className="text-primary/60" />
                Especialistas em clínicas
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
              alt="Estrutura comercial para clínicas"
              className="w-full max-w-2xl drop-shadow-2xl rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════ CLIENT LOGOS ═══════ */}
      <ClientLogos />

      {/* ═══════ DOIS CENÁRIOS, UM PROBLEMA ═══════ */}
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
              Dois cenários, <em className="text-primary italic">um problema</em>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Não importa onde você está agora. Clínicas que chegam até a Hero Sales geralmente vivem um desses dois momentos.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12"
          >
            {scenarios.map((s) => (
              <motion.div
                key={s.tag}
                variants={staggerItem}
                className="glass-dark rounded-xl p-8 border border-primary/15 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon size={24} weight="duotone" className="text-primary" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-bold text-primary/80">{s.tag}</span>
                </div>
                <h3 className="font-sans text-xl font-bold mb-3 text-white">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-display italic"
          >
            "Em ambos os casos, o que falta não é mais lead. É <span className="text-primary not-italic font-bold">estrutura</span> para transformá-lo em paciente."
          </motion.p>
        </div>
      </section>

      {/* ═══════ A VIRADA ═══════ */}
      <section className="py-20 md:py-28 relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,hsl(var(--primary)/0.12),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-bold mb-4">A virada</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Tráfego todo mundo faz. <em className="text-primary italic">O que vem depois</em> é onde a maioria falha.
            </h2>
            <p className="text-white/60 text-base md:text-lg mb-10 leading-relaxed">
              Qualquer agência coloca seu anúncio no ar. A Hero Sales cuida do que acontece depois do clique, estruturando o processo comercial completo para que nenhum lead se perca antes de virar paciente.
            </p>
            <button
              onClick={scrollToDiagnostico}
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-lg shadow-lg transition-colors"
            >
              Agendar meu diagnóstico
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════ NÚMEROS QUE FALAM POR NÓS (Results) ═══════ */}
      <Results />

      {/* ═══════ MÉTODO HERO SALES ═══════ */}
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
              Método <em className="text-primary italic">Hero Sales</em>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg mb-3">
              Da campanha ao paciente atendido. Cada etapa conectada à próxima.
            </p>
            <p className="text-white/50 max-w-2xl mx-auto">
              Enquanto agências param no clique, o Método Hero Sales opera o processo inteiro. Nenhuma etapa fica solta.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {methodSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="glass-dark rounded-2xl p-5 border border-primary/15 hover:border-primary/40 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {/* Icon as large background */}
                <div className="absolute -bottom-3 -right-3 pointer-events-none">
                  <step.icon size={96} weight="duotone" className="text-primary/10" />
                </div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-sans text-base font-bold text-white leading-tight">{step.title}</h3>
                  <span className="text-4xl font-display text-primary/20 leading-none flex-shrink-0">{step.number}</span>
                </div>
                <p className="text-white/55 text-xs leading-relaxed mb-4 flex-1">{step.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {step.tags.map((t) => (
                    <span key={t} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                      <Check size={10} weight="bold" />
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionCTA onClick={scrollToDiagnostico} />

      {/* ═══════ TUDO QUE ESTÁ INCLUSO ═══════ */}
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
              A operação comercial completa da sua clínica em uma única estrutura — da campanha ao paciente atendido.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {inclusos.map((f) => (
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
                  <p className="text-white/55 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ SUA ESTRATÉGIA DIGITAL EM AÇÃO (TrailSection) ═══════ */}
      <TrailSection />
      <SectionCTA onClick={scrollToDiagnostico} />

      {/* ═══════ POR QUE A HERO SALES (Comparativo) ═══════ */}
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
              Por que a <em className="text-primary italic">Hero Sales</em>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg mb-3">
              O que muda quando você para de contratar só tráfego.
            </p>
            <p className="text-white/50 max-w-xl mx-auto">
              A diferença não está no anúncio. Está no que existe depois dele.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={scaleIn}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              <div className="bg-secondary p-5 flex items-center gap-3">
                <X size={22} weight="bold" className="text-red-400" />
                <h3 className="font-sans font-bold text-white text-lg">Agência tradicional</h3>
              </div>
              <div className="bg-primary/15 p-5 flex items-center gap-3">
                <Check size={22} weight="bold" className="text-primary" />
                <h3 className="font-sans font-bold text-white text-lg">Hero Sales</h3>
              </div>

              {comparison.map((row, i) => (
                <div key={i} className="contents">
                  <div className="bg-secondary p-5 text-white/55 text-sm md:text-base">{row.traditional}</div>
                  <div className="bg-primary/[0.06] p-5 text-white/85 text-sm md:text-base font-medium">{row.herosales}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ PARA QUEM É ═══════ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(var(--primary)/0.06),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Para <em className="text-primary italic">quem é</em>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg mb-3">
              Para clínicas que querem crescer com previsibilidade, não com sorte.
            </p>
            <p className="text-white/50 max-w-xl mx-auto">
              Trabalhamos com quem leva o comercial a sério.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-3 mb-12"
          >
            {idealProfile.map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="flex items-start gap-4 p-4 rounded-xl glass-dark border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center mt-0.5">
                  <Check size={16} weight="bold" className="text-primary" />
                </div>
                <p className="text-white/80 text-base md:text-lg">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="max-w-3xl mx-auto p-6 rounded-xl border border-red-500/20 bg-red-950/20"
          >
            <div className="flex items-start gap-3">
              <X size={22} weight="bold" className="text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-white/70 text-sm md:text-base">
                A Hero Sales <span className="font-bold text-white">não é para todo mundo</span>. Se você quer apenas uma agência para
                rodar anúncio e entregar lead, a Hero Sales não é para você. Nosso modelo exige comprometimento com o processo e entrega resultado proporcional a isso.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <SectionCTA onClick={scrollToDiagnostico} />

      {/* ═══════ MAPA DE IMPLEMENTAÇÃO (Process) ═══════ */}
      <Process />
      <SectionCTA onClick={scrollToDiagnostico} />

      {/* ═══════ SITES QUE JÁ CRIAMOS PARA CLÍNICAS (PortfolioMarquee) ═══════ */}
      <PortfolioMarquee />

      {/* ═══════ O QUE NOSSOS CLIENTES DIZEM (Testimonials) ═══════ */}
      <Testimonials />
      <SectionCTA onClick={scrollToDiagnostico} />

      {/* ═══════ QUEM ESTÁ POR TRÁS DO MÉTODO ═══════ */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Quem está por trás do <em className="text-primary italic">método</em>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Especialistas em fazer o tráfego da sua clínica virar faturamento de verdade.
            </p>
          </motion.div>

          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <p className="text-lg md:text-xl text-white/80 font-display italic leading-relaxed">
              "A Hero Sales nasceu de uma constatação simples: clínicas que investem em marketing perdem pacientes não por falta de lead, mas por falta de estrutura para atendê-los. Não somos uma agência que entrega relatório de clique. Somos o processo comercial que a sua clínica ainda não tem."
            </p>
          </motion.blockquote>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <motion.div
              variants={staggerItem}
              className="glass-dark rounded-2xl p-8 border border-primary/15"
            >
              <h3 className="font-display text-2xl text-white mb-1">Caroline Dedes</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">CEO e Fundadora</p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Médica-veterinária, MBA em Anúncios Online, especialista em funis comerciais e sistemas de aquisição para clínicas.
              </p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="glass-dark rounded-2xl p-8 border border-primary/15"
            >
              <h3 className="font-display text-2xl text-white mb-1">Helena Andrade</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">COO</p>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">
                Formada em Administração, pós-graduada em Controladoria e Finanças, especialista em processos, atendimento e rotina comercial.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CONHEÇA QUEM FAZ ACONTECER (Team) ═══════ */}
      <Team />

      {/* ═══════ DIAGNÓSTICO / CTA FINAL ═══════ */}
      <section id="diagnostico" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.12)_0%,transparent_70%)]" />

        <div className="container relative mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-bold mb-4">Próximo passo</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Diagnóstico comercial <em className="text-primary italic">gratuito.</em>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
              Em 30 minutos analisamos o processo atual da sua clínica: tráfego, atendimento, CRM e automações.
              Você sai sabendo exatamente onde está perdendo pacientes e o que precisa mudar.
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
                <div className="relative rounded-2xl bg-secondary/80 backdrop-blur-md p-8 md:p-10 shadow-gold-lg text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-5 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-bold shadow-gold">
                    <Lightning size={16} weight="fill" />
                    Vagas limitadas por semana
                  </div>

                  <div className="pt-4 mb-8 space-y-3 text-left max-w-md mx-auto">
                    {[
                      "Análise do funil completo da sua clínica",
                      "Diagnóstico dos pontos de vazamento de leads",
                      "Plano objetivo de estruturação comercial",
                      "Sem cobrança e sem compromisso",
                    ].map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <Check size={18} weight="bold" className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm md:text-base">{b}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="cta"
                    size="xl"
                    onClick={openForm}
                    className="w-full btn-shine animate-pulse-gold bg-[#6e5bbb] hover:bg-[#5d4ca3] border-[#6e5bbb] text-white whitespace-normal"
                  >
                    Quero meu diagnóstico gratuito
                    <ArrowRight size={20} weight="bold" />
                  </Button>

                  <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                      <ShieldCheck size={14} weight="fill" className="text-primary" />
                      100% gratuito
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                      <CalendarCheck size={14} weight="fill" className="text-primary" />
                      30 minutos
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                      <WhatsappLogo size={14} weight="fill" className="text-primary" />
                      Online por vídeo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-white/10 py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Hero Sales Digital · Tráfego Pago com Estrutura Comercial para Clínicas
          </p>
        </div>
      </footer>

      <LeadCaptureDialog open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default EstruturaMarketingClinicasPage;
