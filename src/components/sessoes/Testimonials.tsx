import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/lib/animations";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import client1 from "@/assets/clients/client-1.avif";
import client2 from "@/assets/clients/client-2.avif";
import client4 from "@/assets/clients/client-4.avif";
import client5 from "@/assets/clients/client-5.avif";
import client7 from "@/assets/clients/client-7.webp";
import client8 from "@/assets/clients/client-8.webp";
import client9 from "@/assets/clients/client-9.webp";
import client10 from "@/assets/clients/client-10.webp";
import client12 from "@/assets/clients/client-12.webp";
import client13 from "@/assets/clients/client-13.webp";
import client14 from "@/assets/clients/client-14.webp";

const testimonials = [
  {
    text: "Antes eu perdia pacientes por falta de follow-up. Com a Hero Sales, o sistema faz tudo automaticamente. Minha agenda nunca esteve tão cheia.",
    image: client4,
    name: "Dr. Carlos Mendes",
    role: "Cardiologista · São Paulo",
  },
  {
    text: "O CRM integrado ao WhatsApp mudou tudo. Consigo acompanhar cada lead desde o primeiro contato até a consulta. Zero paciente perdido.",
    image: client5,
    name: "Dra. Fernanda Costa",
    role: "Dermatologista · Rio de Janeiro",
  },
  {
    text: "Em 3 meses, saí de 3 consultas por semana para agenda lotada. O funil de vendas da Hero Sales é uma máquina.",
    image: client7,
    name: "Dra. Juliana Martins",
    role: "Ginecologista · Belo Horizonte",
  },
  {
    text: "O agendamento automático reduziu meus no-shows em 60%. Os lembretes por WhatsApp fazem toda a diferença.",
    image: client8,
    name: "Dra. Patrícia Oliveira",
    role: "Nutricionista · Curitiba",
  },
  {
    text: "A landing page integrada ao CRM triplicou meus agendamentos. Nunca imaginei que uma plataforma poderia gerar tanto resultado.",
    image: client9,
    name: "Dr. Ricardo Fonseca",
    role: "Ortopedista · Porto Alegre",
  },
  {
    text: "Finalmente tenho tudo em um lugar só. Antes usava 5 ferramentas diferentes. A Hero Sales simplificou minha vida.",
    image: client10,
    name: "Dra. Camila Rocha",
    role: "Pediatra · Florianópolis",
  },
  {
    text: "Minha clínica cresceu 40% depois que comecei a usar a Hero Sales. A automação fez toda a diferença na captação.",
    image: client12,
    name: "Dr. Marcos Freitas",
    role: "Oftalmologista · Salvador",
  },
  {
    text: "O dashboard de métricas me dá visibilidade total. Sei exatamente quanto cada canal de aquisição está gerando de retorno.",
    image: client13,
    name: "Dr. Eduardo Santana",
    role: "Urologista · Brasília",
  },
  {
    text: "A plataforma é intuitiva e o suporte é excepcional. É como ter um time de marketing digital dentro da minha clínica.",
    image: client14,
    name: "Dr. André Silva",
    role: "Cirurgião · São Paulo",
  },
  {
    text: "Depois que ativei a IA de atendimento, meus pacientes são atendidos 24h. A conversão de leads aumentou 3x.",
    image: client1,
    name: "Dr. Leonardo Gonçalves",
    role: "Cirurgião Plástico · Goiânia",
  },
  {
    text: "Atendo em duas cidades e a Hero Sales centraliza tudo. Funis, automação, agendamento — uma plataforma para tudo.",
    image: client2,
    name: "Dr. Roberto Sousa",
    role: "Endocrinologista · Goiânia",
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 11);

export const Testimonials = () => {
  return (
    <motion.section
      id="depoimentos"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="bg-background py-10 md:py-[90px]"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
            O que Nossos{" "}
            <em className="text-primary italic">Clientes</em> Dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Profissionais da saúde que transformaram suas vendas com a
            Hero Sales
          </p>
        </motion.div>

        {/* Testimonials Columns */}
        <div className="relative max-h-[600px] overflow-hidden">
          {/* Fade top */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          {/* Fade bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialsColumn testimonials={firstColumn} duration={18} />
            <TestimonialsColumn
              testimonials={secondColumn}
              duration={22}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              duration={16}
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
