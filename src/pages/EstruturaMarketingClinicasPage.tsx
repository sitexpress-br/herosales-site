import { motion } from "framer-motion";
import { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  Users,
  Lightning,
  Robot,
  CalendarCheck,
  MegaphoneSimple,
  Check,
  WhatsappLogo,
  Brain,
  Target,
  MagnifyingGlass,
  Funnel,
  ChartLineUp,
  GearSix,
  Stethoscope,
  Storefront,
  X,
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
import { LeadCaptureDialog } from "@/components/LeadCaptureDialog";
const logo = "https://msgsndr-private.storage.googleapis.com/companyPhotos/0599742e-e4db-4132-b44e-f3efdf215411.png";
import { SEOHead } from "@/components/seo/SEOHead";
import { ClientLogos } from "@/components/sessoes/ClientLogos";
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
    title: "Você ainda não tem tráfego estruturado",
    description: "Sua agenda hoje depende de indicação, do orgânico ou da sorte. Crescer fica imprevisível e a clínica fica refém do mês anterior.",
  },
  {
    icon: Funnel,
    tag: "Cenário B",
    title: "Você já investiu em tráfego e não funcionou",
    description: "Já rodou anúncio, recebeu lead, mas pouco virou paciente. A campanha entregava clique — o resto da operação não estava pronta para converter.",
  },
];

// ─── Método (5 passos) ───────────────────────────────────────
const methodSteps = [
  {
    number: "01",
    icon: Target,
    title: "Geração de demanda qualificada",
    description: "Campanhas em Google e Meta, com landing pages e rastreamento ponta a ponta. Cada lead chega com origem identificada.",
    tags: ["Google Ads", "Meta Ads", "Landing Pages", "Rastreamento"],
  },
  {
    number: "02",
    icon: Storefront,
    title: "Toda a demanda em um lugar só",
    description: "CRM centralizado organizando contatos por etapa, origem e responsável. Nenhum lead vive em planilha ou caderno.",
    tags: ["CRM", "Pipeline", "Origem rastreada", "Tempo real"],
  },
  {
    number: "03",
    icon: Robot,
    title: "IA que não deixa contato esperando",
    description: "Atendimento inicial 24h por WhatsApp com triagem e qualificação automáticas. O lead recebe resposta no momento em que demonstra interesse.",
    tags: ["IA 24h", "Triagem automática", "Qualificação"],
  },
  {
    number: "04",
    icon: Brain,
    title: "Automações que não deixam lead escapar",
    description: "Sequências para lead frio, confirmação de consulta, reativação de no-show, pesquisa de satisfação e lembrete de retorno — tudo rodando sozinho.",
    tags: ["Follow-up", "Confirmação", "Reativação", "Pós-consulta"],
  },
  {
    number: "05",
    icon: ChartLineUp,
    title: "Acompanhamento que mostra onde melhorar",
    description: "Auditoria semanal do funil e reunião mensal de análise. Você enxerga performance por etapa, canal e atendente — e sabe exatamente onde otimizar.",
    tags: ["Auditoria semanal", "Reunião mensal", "KPIs por etapa"],
  },
];

// ─── Para quem é ─────────────────────────────────────────────
const idealProfile = [
  "Quer fontes de demanda além de indicação",
  "Já investiu em tráfego sem o resultado esperado",
  "Não sabe em qual etapa do processo perde lead",
  "Quer a equipe focada em atender, não em correr atrás",
  "Quer enxergar ROI claro por real investido",
];

// ─── Comparativo ─────────────────────────────────────────────
const comparison = [
  { traditional: "Entrega o lead — o resto é com a clínica", herosales: "Opera o processo todo, do anúncio ao paciente atendido" },
  { traditional: "Para no clique, sem estrutura pós-clique", herosales: "Todas as etapas do funil estruturadas e automatizadas" },
  { traditional: "Cliente administra o próprio CRM", herosales: "CRM implantado e gerido pela Hero Sales" },
  { traditional: "Follow-up dependente da memória da equipe", herosales: "Follow-up automático, independente da equipe" },
  { traditional: "Relatório só de tráfego, sem visão de funil", herosales: "Visibilidade total de conversão por etapa, canal e atendente" },
  { traditional: "Culpa o atendimento quando não converte", herosales: "Identifica e corrige cada vazamento de conversão" },
];

const heroMarqueeImages = {
  column1: [marquee001, marquee002, marquee003, marquee004],
  column2: [marquee005, marquee006, marquee007, marquee008],
  column3: [marquee009, marquee010, marquee011, marquee012],
};

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
            Quero meu diagnóstico
            <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-28 md:pb-20">
        {/* Background ambient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_30%,hsl(var(--primary)/0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_70%,hsl(var(--primary)/0.10),transparent)]" />
        <div className="absolute inset-0 bg-secondary/40" />

        <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ─── Coluna esquerda: texto ─── */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30 mb-8"
              >
                <Users size={16} weight="fill" className="text-primary" />
                <span className="text-sm font-medium text-primary">
                  +70 clínicas atendidas
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-6"
              >
                Tráfego pago com{" "}
                <em className="text-primary italic">estrutura comercial</em>
                {" "}para clínicas
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10"
              >
                Sua agenda não pode depender de indicação. Nem de tráfego que não vira paciente.
                Estruturamos a operação inteira — da campanha ao paciente atendido.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-10 flex justify-center lg:justify-start"
              >
                <button onClick={scrollToDiagnostico} className="group">
                  <div className="rotating-border rounded-xl p-[3px]">
                    <span className="relative z-10 flex items-center justify-center gap-2 px-8 py-4 sm:px-12 sm:py-5 rounded-lg bg-[#6e5bbb] text-white font-bold text-lg border-2 border-white shadow-lg">
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
                className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/40 text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <Stethoscope size={16} weight="fill" className="text-primary/60" />
                  Especialistas em clínicas
                </span>
                <span className="flex items-center gap-1.5">
                  <Lightning size={16} weight="fill" className="text-primary/60" />
                  Operação ponta a ponta
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={16} weight="fill" className="text-primary/60" />
                  Diagnóstico sem custo
                </span>
              </motion.div>
            </div>

            {/* ─── Coluna direita: marquee visual ─── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block h-[600px] overflow-hidden rounded-2xl"
            >
              {/* Gradient overlays on top/bottom */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-secondary to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-secondary to-transparent z-20 pointer-events-none" />

              <div className="flex gap-4 h-full justify-center">
                <div className="flex flex-col gap-4 animate-[marquee-up_25s_linear_infinite]">
                  {[...heroMarqueeImages.column1, ...heroMarqueeImages.column1].map((src, i) => (
                    <img key={`c1-${i}`} src={src} alt="" className="w-[200px] rounded-xl object-cover shadow-xl" loading="lazy" />
                  ))}
                </div>
                <div className="flex flex-col gap-4 animate-[marquee-down_30s_linear_infinite]">
                  {[...heroMarqueeImages.column2, ...heroMarqueeImages.column2].map((src, i) => (
                    <img key={`c2-${i}`} src={src} alt="" className="w-[200px] rounded-xl object-cover shadow-xl" loading="lazy" />
                  ))}
                </div>
                <div className="flex flex-col gap-4 animate-[marquee-up_28s_linear_infinite]">
                  {[...heroMarqueeImages.column3, ...heroMarqueeImages.column3].map((src, i) => (
                    <img key={`c3-${i}`} src={src} alt="" className="w-[200px] rounded-xl object-cover shadow-xl" loading="lazy" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
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
              A maioria das clínicas que conversamos está em um destes dois pontos.
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              A <em className="text-primary italic">virada</em>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed">
              Tráfego todo mundo faz. <span className="text-primary font-bold">O que vem depois</span> é onde a maioria falha.
            </p>
            <p className="text-white/50 text-base md:text-lg mb-10">
              Enquanto a maioria das agências entrega clique, a Hero Sales opera o processo inteiro do pós-clique
              e estrutura o fluxo comercial completo dentro da clínica.
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
            <p className="text-white/50 max-w-2xl mx-auto">
              Da campanha ao paciente atendido. Cada etapa conectada à próxima.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="space-y-6 max-w-5xl mx-auto"
          >
            {methodSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="glass-dark rounded-2xl p-6 md:p-8 border border-primary/15 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                    <span className="text-5xl md:text-6xl font-display text-primary/30 leading-none">{step.number}</span>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon size={28} weight="duotone" className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-xl md:text-2xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-white/55 text-sm md:text-base leading-relaxed mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((t) => (
                        <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                          <Check size={12} weight="bold" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <SectionCTA onClick={scrollToDiagnostico} />

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
            <p className="text-white/50 max-w-xl mx-auto">
              Para clínicas que querem crescer com previsibilidade — não com sorte.
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
                rodar anúncio e entregar lead, a Hero Sales não é para você.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
            <p className="text-white/50 max-w-xl mx-auto">
              O que muda quando você para de contratar só tráfego.
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
      <SectionCTA onClick={scrollToDiagnostico} />

      {/* ═══════ TESTIMONIALS ═══════ */}
      <Testimonials />

      {/* ═══════ TEAM ═══════ */}
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
              Diagnóstico comercial <em className="text-primary italic">gratuito</em>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
              30 minutos analisando o processo atual da sua clínica — tráfego, atendimento, CRM e automações.
              Identificamos exatamente onde os pacientes estão sendo perdidos.
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

      <LeadCaptureDialog open={formOpen} onOpenChange={setFormOpen} />
    </div>
  );
};

export default EstruturaMarketingClinicasPage;
