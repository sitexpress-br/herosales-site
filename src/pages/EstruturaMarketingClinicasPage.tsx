import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  Rocket,
  Gear,
  Plugs,

} from "@phosphor-icons/react";

import TrailFrame from "@/components/trail/TrailFrame";

import { Button } from "@/components/ui/button";
import { LeadCaptureDialog } from "@/components/LeadCaptureDialog";
const logo = "https://msgsndr-private.storage.googleapis.com/companyPhotos/0599742e-e4db-4132-b44e-f3efdf215411.png";
import { SEOHead } from "@/components/seo/SEOHead";
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
const SectionCTA = ({ label = "Quero um diagnóstico gratuito", onClick }: { label?: string; onClick: () => void }) => (
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
    title: "Você até tem movimento... mas não tem tráfego estruturado (ainda!).",
    description: "Não consegue transformar isso em crescimento previsível. E no fim, você sente que está sempre recomeçando do zero.",
  },
  {
    icon: Funnel,
    tag: "Cenário B",
    title: "Você investe em tráfego... mas os leads não respondem, somem ou não agendam.",
    description: "E com isso, não dá para prever quantos pacientes vão entrar no mês que vem...",
  },
];

// ─── 3 Pilares do Hero Sales ─────────────────────────────────
const pillars = [
  {
    icon: Rocket,
    title: "Tráfego inteligente",
    description: "Atrai pacientes qualificados todos os dias.",
  },
  {
    icon: Gear,
    title: "Organização comercial",
    description: "Cada lead é atendido com estratégia.",
  },
  {
    icon: Plugs,
    title: "Automação e tecnologia",
    description: "Nada se perde. Tudo é acompanhado.",
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
  "Clínicas que querem crescer com previsibilidade",
  "Profissionais que já investem em marketing",
  "Quem quer parar de depender de indicação",
  "Quem quer estruturar o comercial de verdade",
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
    description: "Todo contato organizado por etapa, origem e responsável. WhatsApp, Instagram, Google e site, tudo em um só lugar.",
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
  const [isScrolled, setIsScrolled] = useState(false);
  const openForm = () => setFormOpen(true);
  const scrollToDiagnostico = () => {
    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-secondary min-h-screen text-secondary-foreground selection-gold">
      <SEOHead
        title={PAGE_SEO.services.ofertaAgendaLotada.title}
        description={PAGE_SEO.services.ofertaAgendaLotada.description}
        canonical="https://herosales.pro/oferta/estrutura-marketing-clinicas"
      />

      {/* ═══════ HEADER ═══════ */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "px-0" : "px-4 lg:px-6"}`}
      >
        <div
          className={`mx-auto transition-all duration-300 ${isScrolled ? "mt-0" : "mt-4"}`}
          style={{ maxWidth: "1400px" }}
        >
          <div
            className={`transition-all duration-300 ${
              isScrolled
                ? "rounded-[0px_0px_12px_12px] bg-secondary/80 backdrop-blur-2xl border-b border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
                : "rounded-[20px] bg-transparent border border-transparent"
            }`}
          >
            <div className="px-6">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div
                  className={`flex items-center gap-3 relative z-10 transition-all duration-300 ${
                    isScrolled
                      ? "bg-[#1a1535] rounded-[0px_0px_12px_12px] px-4 py-2 -mb-2"
                      : "-mb-6"
                  }`}
                >
                  <img
                    src={logo}
                    alt="Hero Sales"
                    className="w-56 h-auto lg:w-64 lg:h-14 origin-left object-contain drop-shadow-lg"
                  />
                </div>

                <button
                  onClick={scrollToDiagnostico}
                  className="hidden sm:flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-sm shadow-lg whitespace-nowrap transition-colors group"
                >
                  Quero um diagnóstico gratuito
                  <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ═══════ HERO (DOBRA 1) — alinhado à esquerda ═══════ */}
      <section className="relative flex items-center justify-center overflow-hidden pt-36 md:pt-40 pb-20 md:pb-28">
        {/* Background gradient sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,hsl(var(--primary)/0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,hsl(var(--primary)/0.10),transparent)]" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-start text-left gap-8">

          <div className="flex flex-col items-start text-left gap-8 max-w-4xl">
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-start gap-2"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30">
                <Users size={16} weight="fill" className="text-primary" />
                <span className="text-sm font-medium text-primary">+70 clínicas atendidas</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30">
                <Stethoscope size={16} weight="fill" className="text-primary" />
                <span className="text-sm font-medium text-primary">Exclusivo para clínicas</span>
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl md:text-5xl lg:text-6xl font-display leading-tight"
            >
              Gere pacientes todos os dias com{" "}
              <em className="text-primary italic">uma estrutura</em>{" "}
              que une:
            </motion.h1>

            {/* Subtítulo / equação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 max-w-4xl"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/15 border border-primary/40 text-primary font-display text-lg md:text-2xl font-bold tracking-tight shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                Tecnologia
              </span>
              <span className="text-primary text-2xl md:text-3xl font-bold">→</span>
              <span className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/15 border border-primary/40 text-primary font-display text-lg md:text-2xl font-bold tracking-tight shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                Geração de Demanda
              </span>
              <span className="text-primary text-2xl md:text-3xl font-bold">→</span>
              <span className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/15 border border-primary/40 text-primary font-display text-lg md:text-2xl font-bold tracking-tight shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                Conversão de Alto Impacto
              </span>
            </motion.div>

            {/* Texto apoio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
            >
              Pare de depender de indicação ou de uma recepção despreparada.
              Nós estruturamos todo o processo para transformar interesse em faturamento previsível.
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <button onClick={scrollToDiagnostico} className="group">
              <div className="rotating-border rounded-xl p-[3px]">
                <span className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 sm:px-24 sm:py-5 rounded-lg bg-[#6e5bbb] text-white font-bold text-lg border-2 border-white shadow-lg">
                  Quero um diagnóstico gratuito
                  <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </button>
          </motion.div>

          {/* Ícones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap justify-start gap-6 text-white/40 text-sm"
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
      </section>

      {/* ═══════ DOIS CENÁRIOS (DOBRA 2) ═══════ */}
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
              Se você tem uma clínica, provavelmente está em{" "}
              <em className="text-primary italic">um desses cenários:</em>
            </h2>
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
                className="bg-white rounded-xl p-8 border border-primary/15 hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon size={24} weight="duotone" className="text-primary" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-bold text-primary/80">{s.tag}</span>
                </div>
                <h3 className="font-sans text-xl font-bold mb-3 text-secondary">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center text-lg md:text-xl text-secondary/80 max-w-3xl mx-auto font-display italic"
          >
            "Nos dois casos, o que falta para o seu negócio não é mais lead. É <span className="text-primary not-italic font-bold">estrutura</span> para transformá-los em pacientes, em clientes que irão colocar dinheiro no seu bolso!"
          </motion.p>
        </div>
      </section>

      {/* ═══════ A VIRADA (DOBRA 3) ═══════ */}
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              O problema <em className="text-primary italic">não é o tráfego!</em>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 font-display italic">
              O problema é o que acontece depois dele...
            </p>
            <p className="text-white/60 text-base md:text-lg mb-8 leading-relaxed">
              A maioria das clínicas até consegue gerar interesse... mas perde dinheiro todos os dias porque não tem:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              {[
                { icon: Gear, text: "processo comercial estruturado" },
                { icon: Headset, text: "controle dos atendimentos" },
                { icon: ChartLineUp, text: "acompanhamento dos leads" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="glass-dark rounded-xl p-5 border border-red-500/20 flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <item.icon size={24} weight="duotone" className="text-red-400" />
                  </div>
                  <p className="text-white/80 text-sm font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl text-white font-display italic mb-10">
              Sem isso, o marketing vira <span className="text-red-400 not-italic font-bold">custo</span>, não <span className="text-primary not-italic font-bold">investimento!</span>
            </p>

            <button
              onClick={scrollToDiagnostico}
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-lg shadow-lg transition-colors"
            >
              Quero um diagnóstico gratuito
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════ É POR ISSO QUE CRIAMOS O HERO SALES (DOBRA 4) ═══════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(var(--primary)/0.10),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-bold mb-4">
              A solução
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-5">
              É por isso que criamos o{" "}
              <em className="text-primary italic">Hero Sales</em>
            </h2>
            <p className="text-white/65 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Um sistema completo para transformar sua clínica em uma máquina de aquisição e conversão.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="glass-dark rounded-2xl p-7 border border-primary/20 hover:border-primary/50 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/15 flex items-center justify-center">
                  <p.icon size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-sans text-xl font-bold mb-2 text-white">{p.title}</h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-display italic mb-10"
          >
            Não é só marketing. É uma estrutura que gera <span className="text-primary not-italic font-bold">previsibilidade.</span>
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="flex justify-center"
          >
            <button
              onClick={scrollToDiagnostico}
              className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-lg shadow-lg transition-colors"
            >
              Quero um diagnóstico gratuito
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ═══════ PARA QUEM É (DOBRA 5) ═══════ */}
      <section className="py-20 md:py-28 relative bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(var(--primary)/0.06),transparent)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-secondary">
              Trabalhamos com quem{" "}
              <em className="text-primary italic">leva isso a sério</em>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 max-w-4xl mx-auto mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 border border-primary/40 text-primary font-display text-base md:text-xl font-bold tracking-tight shadow-sm">
                Tecnologia
              </span>
              <span className="text-primary text-xl md:text-2xl font-bold">→</span>
              <span className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 border border-primary/40 text-primary font-display text-base md:text-xl font-bold tracking-tight shadow-sm">
                Geração de Demanda
              </span>
              <span className="text-primary text-xl md:text-2xl font-bold">→</span>
              <span className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 border border-primary/40 text-primary font-display text-base md:text-xl font-bold tracking-tight shadow-sm">
                Conversão de Alto Impacto
              </span>
            </div>
            <p className="text-secondary/70 max-w-2xl mx-auto text-base md:text-lg">
              Por isso acreditamos que faça sentido para quem:
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
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border hover:border-primary/30 shadow-sm transition-colors"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center mt-0.5">
                  <Check size={16} weight="bold" className="text-primary" />
                </div>
                <p className="text-secondary/80 text-base md:text-lg">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="max-w-3xl mx-auto p-6 rounded-xl border border-red-500/30 bg-red-50"
          >
            <div className="flex items-start gap-3 mb-4">
              <X size={22} weight="bold" className="text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-secondary text-base md:text-lg font-bold">
                Não é pra quem quer resultado sem processo
              </p>
            </div>
            <p className="text-secondary/85 text-sm md:text-base leading-relaxed mb-3">
              O Hero Sales é para todo mundo, porém, <span className="font-bold text-secondary">não a todo momento!</span>
            </p>
            <p className="text-secondary/70 text-sm md:text-base leading-relaxed">
              Se você quer apenas uma agência para rodar anúncio e entregar lead, então é melhor sair dessa página agora mesmo.
              Nosso modelo de trabalho exige comprometimento com o processo e entrega resultado proporcional a isso!
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ O QUE MUDA (DOBRA 6 — Comparativo) ═══════ */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-5 max-w-4xl mx-auto">
              O que muda quando você para de contratar só tráfego e contrata{" "}
              <em className="text-primary italic">Tecnologia, Geração de Demanda e Conversão de Alto Impacto</em>
            </h2>
            <p className="text-white/55 max-w-2xl mx-auto text-base md:text-lg italic">
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
      <SectionCTA onClick={scrollToDiagnostico} label="Quero um diagnóstico gratuito" />

      {/* ═══════ POR QUE A HERO SALES É DIFERENTE (DOBRA 8) ═══════ */}
      <section className="relative w-full overflow-hidden bg-secondary py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,hsl(var(--primary)/0.10),transparent)]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
              O diferencial
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-secondary-foreground mb-5 font-medium">
              Por que a <em className="text-primary italic">Hero Sales</em> é diferente
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A maioria das agências entrega tráfego. Algumas ajudam no marketing, mas quase nenhuma resolve o principal problema:
            </p>
          </motion.div>

          <TrailFrame targetLabel="Consultas agendadas" />
          <p className="text-muted-foreground text-sm mt-4 md:hidden text-center">
            ← Deslize para explorar →
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="max-w-3xl mx-auto mt-12 text-center"
          >
            <p className="text-xl md:text-2xl text-white font-display italic mb-4">
              Transformar lead em <span className="text-primary not-italic font-bold">paciente!</span>
            </p>
            <p className="text-white/65 text-base md:text-lg leading-relaxed">
              Nós conectamos tudo isso. E é isso que gera crescimento de verdade.
              Veja como captamos visitantes de múltiplos canais, processamos com inteligência e convertemos em pacientes reais para sua clínica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ TUDO QUE ESTÁ INCLUSO ═══════ */}
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
              Tudo que está <em className="text-primary italic">incluso</em>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A operação comercial completa da sua clínica em uma única estrutura, da campanha ao paciente atendido.
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
                className="group bg-white rounded-xl overflow-hidden border border-border hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <f.component />
                <div className="p-5">
                  <h3 className="font-sans text-lg font-semibold mb-2 text-secondary">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ MÉTODO HERO SALES — UM PROCESSO CLARO (DOBRA 10) ═══════ */}
      {/* TODO [DARLEI]: trocar telas de fundo (advogado → clínicas) */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-bold mb-4">
              Método Hero Sales
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Um processo claro, do{" "}
              <em className="text-primary italic">diagnóstico à escala</em>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg mb-3">
              Você sabe exatamente o que está sendo feito, e por quê.
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

      {/* ═══════ O QUE NOSSOS CLIENTES DIZEM (Testimonials) ═══════ */}
      <Testimonials />

      {/* ═══════ A VISÃO QUE MOVE A HERO SALES — Liderança ═══════ */}
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
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-bold mb-4">
              Liderança
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              A visão que move a <em className="text-primary italic">Hero Sales</em>
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

      {/* ═══════ QUEM ESTÁ POR TRÁS DA ESTRATÉGIA (DOBRA 11) ═══════ */}
      <Team
        eyebrow="Nosso Time"
        title={
          <>
            Quem está por trás da <em className="text-primary italic">estratégia</em>
          </>
        }
        subtitle="Um time que entende de tráfego, vendas e tecnologia e principalmente, de resultado."
      />

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
