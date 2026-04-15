import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ArrowRight,
  Warning,
  X,
  Virus,
  Pill,
  Star,
  CheckCircle,
  CalendarCheck,
  Globe,
  Robot,
  WhatsappLogo,
  ChartLineUp,
  Target,
  Megaphone,
  PaintBrush,
  UserCirclePlus,
  ShieldCheck,
  Clock,
  Siren,
  Users,
} from "@phosphor-icons/react";
const logo = "https://msgsndr-private.storage.googleapis.com/companyPhotos/0599742e-e4db-4132-b44e-f3efdf215411.png";
import { SEOHead } from "@/components/seo/SEOHead";
import { PAGE_SEO } from "@/lib/seo-config";
import { Team } from "@/components/sessoes/Team";
import { Testimonials } from "@/components/sessoes/Testimonials";
import { openWhatsAppPopup } from "@/hooks/useWhatsAppPopup";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  defaultViewport,
} from "@/lib/animations";

/* ─── Reusable CTA Button ─────────────────────────────── */
const CtaButton = ({ label = "Testar Hero Sales Gratis", className = "" }: { label?: string; className?: string }) => (
  <motion.button
    onClick={openWhatsAppPopup}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className={`group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-lg shadow-gold transition-colors ${className}`}
  >
    <WhatsappLogo size={22} weight="fill" />
    {label}
    <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
  </motion.button>
);

/* ─── Animated Counter ────────────────────────────────── */
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
      if (start >= target) { setCount(target); clearInterval(timer); } else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{count.toLocaleString("pt-BR")}{suffix}</span>;
};

/* ─── Data ────────────────────────────────────────────── */
const symptoms = [
  "Horarios vazios ou imprevisiveis",
  "Pacientes que marcam e nao comparecem",
  "Ferramentas desconectadas (CRM, agenda, WhatsApp)",
  "Atendimento lento que perde oportunidades",
  "Nenhuma automacao fora do horario comercial",
];

const bacteria = [
  { icon: Virus, title: "Agenda Furada", description: "Pacientes marcam, somem e deixam buracos. Sem lembretes automaticos, o faturamento oscila sem previsibilidade." },
  { icon: Virus, title: "Agenda Desequilibrada", description: "Sem funis de captacao proprios, voce fica refem de convenios e indicacoes de baixo retorno." },
  { icon: Virus, title: "Agenda Vazia", description: "Sem uma plataforma de captacao, as semanas sao imprevisiveis e a dependencia de boca a boca e alta." },
  { icon: Virus, title: "Agenda Vulneravel", description: "Atendimento manual, sem chatbot, respostas lentas e perda de pacientes fora do horario comercial." },
];

const infections = [
  { icon: Megaphone, title: "Tentativa e Erro", description: "O dono tenta usar varias ferramentas desconectadas. Muito esforco, zero previsibilidade." },
  { icon: PaintBrush, title: "Ferramentas que Nao Convertem", description: "Site, redes sociais e anuncios existem -- mas sem funis e automacao, nao geram agendamentos." },
  { icon: UserCirclePlus, title: "Improviso com Ferramentas", description: "CRM em um lugar, agenda em outro, WhatsApp manual. O lead se perde no caminho." },
  { icon: Target, title: "Base Fragil", description: "Nao existe um fluxo automatizado para levar o paciente da internet ate a consulta." },
];

const protocolPhases = [
  {
    icon: ChartLineUp,
    phase: "Fase 1",
    title: "Captacao com Funis Inteligentes",
    description: "Crie landing pages e funis de captacao direto na Hero Sales. Atraia pacientes qualificados da sua regiao, eliminando curiosos e leads sem intencao.",
    bullets: ["Menos dependencia de convenios e indicacoes", "Funis prontos para clinicas, configurados em minutos"],
  },
  {
    icon: Globe,
    phase: "Fase 2",
    title: "Agendamento Online 24/7",
    description: "Agenda integrada ao seu site que funciona 24 horas. O paciente escolhe o horario, recebe confirmacao e lembretes automaticos.",
    bullets: ["+30% em agendamentos fora do horario comercial", "Lembretes que reduzem no-shows em 50-70%"],
  },
  {
    icon: Robot,
    phase: "Fase 3",
    title: "Chatbot com IA no WhatsApp",
    description: "IA que atende 24h, qualifica o paciente, tira duvidas e agenda consultas automaticamente -- tudo integrado ao CRM da plataforma.",
    bullets: ["Sua agenda funciona mesmo quando a clinica esta fechada", "Follow-up automatico ate a confirmacao"],
  },
];

const whyItWorks = [
  "Quer resposta rapida, mesmo fora do horario -- e o chatbot da Hero Sales entrega isso",
  "Quer sentir seguranca antes de marcar -- e seus funis e site passam essa confianca",
  "Quer agendar facil, sem ligar -- e a agenda online 24/7 resolve isso",
];

/* ─── Page Component ──────────────────────────────────── */
const OfertaAgendaPrevisivelPage = () => {
  return (
    <div className="bg-secondary min-h-screen text-secondary-foreground">
      <SEOHead
        title={PAGE_SEO.services.ofertaAgendaPrevisivel.title}
        description={PAGE_SEO.services.ofertaAgendaPrevisivel.description}
        canonical="https://herosales.pro/oferta/agenda-previsivel"
      />

      {/* ═══════ HEADER ═══════ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <div className="w-full max-w-[1400px] flex items-center justify-center sm:justify-between px-6 py-3 rounded-[20px] bg-secondary/80 backdrop-blur-2xl border border-white/15">
          <div className="bg-[#1a1535] rounded-[0px_0px_12px_12px] px-4 py-2 -mb-5">
            <img src={logo} alt="Hero Sales" className="w-56 h-auto lg:w-64 lg:h-14 origin-left object-contain drop-shadow-lg" />
          </div>
          <button
            onClick={openWhatsAppPopup}
            className="hidden sm:flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#6e5bbb] hover:bg-[#5d4ca3] text-white font-bold text-sm shadow-gold whitespace-nowrap transition-colors group"
          >
            Testar Hero Sales Gratis
            <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.15),transparent)]" />
        <div className="container mx-auto px-6 relative z-10 max-w-[1100px]">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.4rem] font-display leading-tight mb-6 uppercase"
            >
              Como Clinicas Estao Tornando Suas{" "}
              <em className="text-primary italic">Agendas Previsiveis</em> Com a Plataforma Hero Sales -- Mais Pacientes, Menos Faltas.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-8"
            >
              CRM, funis de captacao, chatbot com IA, agendamento online e automacoes -- tudo em uma unica plataforma que transforma sua agenda em um ativo previsivel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col gap-3 max-w-xl mx-auto mb-10 text-left"
            >
              {["Menos dependencia de convenios ou indicacoes.", "Controle total sobre captacao, agendamento e presenca.", "Chatbot com IA que funciona 24/7, mesmo fora do horario."].map((text) => (
                <div key={text} className="flex items-start gap-2 text-white/80">
                  <CheckCircle size={20} weight="fill" className="text-primary mt-0.5 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CtaButton />
              <p className="text-white/30 text-xs mt-3">*14 dias gratis. Sem compromisso. Cancele quando quiser.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ A VERDADE (DOR) ═══════ */}
      <section className="py-20 md:py-28 bg-red-950/20 border-y border-red-500/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Warning size={32} weight="fill" className="text-amber-400" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              A Verdade Que Ninguém Fala Para as <em className="text-red-400 italic">Clínicas</em>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Todos os dias vemos clinicas com excelente estrutura, bons profissionais e capacidade ociosa. O problema <strong className="text-white/80">nao e que a clinica seja ruim</strong>. E que falta uma <strong className="text-red-400">plataforma integrada</strong> para gerenciar captacao, agendamento e retencao.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer} className="space-y-3 max-w-lg mx-auto mb-10">
            {symptoms.map((s) => (
              <motion.div key={s} variants={staggerItem} className="flex items-center gap-3 text-white/70">
                <X size={18} weight="bold" className="text-red-400 shrink-0" />
                <span>{s}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp} className="text-center text-white/50 text-sm">
            👉 No fim do mês, o faturamento não reflete o potencial da clínica.
          </motion.p>
        </div>
      </section>

      {/* ═══════ BACTÉRIAS ANTI-FATURAMENTO ═══════ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              As Bactérias <em className="text-red-400 italic">Anti-Faturamento</em> Que Contaminam Sua Agenda
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bacteria.map((b) => (
              <motion.div key={b.title} variants={staggerItem} className="glass-dark rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <b.icon size={24} weight="duotone" className="text-red-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{b.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp} className="text-center mt-10">
            <p className="text-white/50 text-sm mb-6">👉 Se você reconheceu algum sintoma, fique tranquilo: <strong className="text-white/80">o problema não é sua clínica.</strong></p>
            <CtaButton />
          </motion.div>
        </div>
      </section>

      {/* ═══════ O INIMIGO: MARKETING NEGLIGENTE ═══════ */}
      <section className="py-20 md:py-28 bg-secondary border-y border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              O Verdadeiro Inimigo: <em className="text-red-400 italic">Marketing Negligente</em>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Agenda nao adoece por falta de esforco clinico. Ela adoece por <strong className="text-white/80">ferramentas desconectadas e processos manuais</strong>.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infections.map((inf) => (
              <motion.div key={inf.title} variants={staggerItem} className="glass-dark rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <inf.icon size={24} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Infecção por {inf.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{inf.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp} className="text-center mt-10">
            <p className="text-red-400/80 font-semibold">☢️ RESULTADO: Existe esforço, mas o resultado é ineficiente!</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ PROTOCOLO AGENDA PREVISÍVEL ═══════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/30 mb-6">
              <CalendarCheck size={18} weight="fill" className="text-primary" />
              <span className="text-sm font-medium text-primary">Plataforma Hero Sales</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Como a Hero Sales Torna Sua <em className="text-primary italic">Agenda Previsivel</em>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Clinicas inteligentes tratam a agenda como <strong className="text-white/80">ativo estrategico</strong>. A Hero Sales une 3 pilares em uma unica plataforma para transformar sua agenda.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Demanda qualificada", icon: Star },
              { label: "Valor percebido", icon: ChartLineUp },
              { label: "Recepção 24/7", icon: Robot },
              { label: "Menos faltas", icon: CalendarCheck },
            ].map((s) => (
              <motion.div key={s.label} variants={staggerItem} className="text-center p-4 rounded-xl glass-dark border border-primary/20">
                <s.icon size={24} weight="fill" className="text-primary mx-auto mb-2" />
                <p className="text-white/70 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* 3 Phases */}
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer} className="space-y-8">
            {protocolPhases.map((phase, i) => (
              <motion.div
                key={phase.title}
                variants={staggerItem}
                className="glass-dark rounded-2xl p-8 md:p-10 border border-primary/20 hover:border-primary/40 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Pill size={20} weight="fill" className="text-primary" />
                    </div>
                    <span className="text-primary font-bold text-sm uppercase tracking-wider">{phase.phase}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-3 text-white">{phase.title}</h3>
                  <p className="text-white/50 mb-4 max-w-2xl">{phase.description}</p>
                  <div className="space-y-2">
                    {phase.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-2 text-white/70">
                        <CheckCircle size={18} weight="fill" className="text-primary shrink-0" />
                        <span className="text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ POR QUE FUNCIONA ═══════ */}
      <section className="py-20 md:py-28 bg-secondary border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Por Que Isso <em className="text-primary italic">Funciona</em> em 2026
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mb-8">
              Porque o paciente mudou. Hoje ele:
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer} className="space-y-4 max-w-2xl mx-auto mb-12">
            {whyItWorks.map((w) => (
              <motion.div key={w} variants={staggerItem} className="flex items-start gap-3 glass-dark rounded-xl p-5 border border-primary/15">
                <CheckCircle size={22} weight="fill" className="text-primary mt-0.5 shrink-0" />
                <span className="text-white/80">{w}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp} className="text-center">
            <p className="text-white/50 text-sm mb-3">
              Clinicas que operam com ferramentas desconectadas e atendimento manual <strong className="text-red-400">perdem espaco</strong>. Clinicas com a <strong className="text-primary">Hero Sales</strong> ganham previsibilidade.
            </p>

            <div className="glass-dark rounded-xl p-6 border border-amber-500/20 max-w-xl mx-auto mt-8 mb-8">
              <div className="flex items-start gap-3">
                <Siren size={24} weight="fill" className="text-amber-400 shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm text-left">
                  <strong className="text-amber-400">Oferta especial!</strong> Comece seu trial gratuito de 14 dias agora. Sem cartao de credito. Sem compromisso. Clique no botao abaixo e acesse a plataforma.
                </p>
              </div>
            </div>

            <CtaButton />
            <p className="text-white/30 text-xs mt-3">*14 dias gratis. Sem compromisso. Cancele quando quiser.</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ DEPOIMENTOS ═══════ */}
      <Testimonials />

      {/* ═══════ SOBRE + TIME ═══════ */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Sobre a <em className="text-primary italic">Hero Sales</em>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mb-4">
              A Hero Sales e a plataforma all-in-one criada para resolver um unico problema: <strong className="text-white/80">clinicas que perdem pacientes por falta de tecnologia integrada</strong>.
            </p>
            <p className="text-white/50 max-w-2xl mx-auto">
              CRM, funis de captacao, chatbot com IA, agendamento online, automacoes, email marketing, SMS, site builder e gestao de reputacao -- tudo em um so lugar.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
            <motion.div variants={staggerItem} className="glass-dark rounded-xl p-6 border border-primary/20">
              <h3 className="text-primary font-bold mb-2">Missao</h3>
              <p className="text-white/50 text-sm">Empoderar clinicas e profissionais de saude com tecnologia integrada que gera previsibilidade de agenda e crescimento sustentavel.</p>
            </motion.div>
            <motion.div variants={staggerItem} className="glass-dark rounded-xl p-6 border border-primary/20">
              <h3 className="text-primary font-bold mb-2">Visao</h3>
              <p className="text-white/50 text-sm">Ser a plataforma #1 para clinicas medicas que querem lotar suas agendas com tecnologia.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ EQUIPE ═══════ */}
      <Team />

      {/* ═══════ CTA FINAL ═══════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,hsl(var(--primary)/0.1),transparent)]" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeInUp}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Melhorando <em className="text-primary italic">Vidas</em> Juntos
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-10">
              Agenda previsivel nao melhora so o faturamento. Ela abre espaco para que o paciente resolva um problema real, garante a estabilidade dos profissionais e estabelece um legado na comunidade.
            </p>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-3 gap-4 mb-12">
              {[
                { label: "Pacientes agendados", value: 5000, suffix: "+" },
                { label: "Clinicas na plataforma", value: 500, suffix: "+" },
                { label: "Taxa de satisfacao", value: 98, suffix: "%" },
              ].map((s) => (
                <motion.div key={s.label} variants={staggerItem} className="glass-dark rounded-xl p-4 border border-primary/20">
                  <p className="text-2xl md:text-3xl font-display text-primary mb-1">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-white/40 text-xs">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <CtaButton label="Comecar Meu Trial Gratuito" />
            <p className="text-white/30 text-xs mt-3">*14 dias gratis. Sem cartao de credito. Cancele quando quiser.</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <img src={logo} alt="Hero Sales" className="h-6 mx-auto mb-4 opacity-50" />
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Hero Sales. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OfertaAgendaPrevisivelPage;
