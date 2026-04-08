import { motion } from "framer-motion";
import {
  Globe,
  Storefront,
  Palette,
  Browser,
  Article,
  ChartLineUp,
  Envelope,
  Robot,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { 
  megamenuContainer, 
  megamenuItem,
  megamenuCta 
} from "@/lib/animations";
import { openWhatsAppPopup } from "@/hooks/useWhatsAppPopup";

const services = [
  {
    icon: Robot,
    title: "IA para Clínicas",
    description: "Atendimento e agendamento com IA",
    href: "/servicos/ia-para-clinicas",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Sites e páginas de alta conversão",
    href: "/servicos/sites-de-autoridade",
  },
  {
    icon: Envelope,
    title: "Email Corporativo",
    description: "Emails profissionais",
    href: "/servicos/email-corporativo",
  },
  {
    icon: ChartLineUp,
    title: "Gestão de Tráfego",
    description: "Anúncios qualificados",
    href: "/servicos/gestao-de-trafego",
  },
  {
    icon: Storefront,
    title: "Google Meu Negócio",
    description: "Aparecer no Google Maps",
    href: "/servicos/google-meu-negocio",
  },
  {
    icon: Article,
    title: "Blog + SEO Médico",
    description: "Autoridade no Google",
    href: "/servicos/blog-seo-medico",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Logo e materiais profissionais",
    href: "/servicos/identidade-visual",
  },
];

interface MegaMenuServicesProps {
  onItemClick: (href: string) => void;
  onClose?: () => void;
}

export const MegaMenuServices = ({ onItemClick, onClose }: MegaMenuServicesProps) => {


  return (
    <motion.div 
      className="p-5"
      variants={megamenuContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-2 lg:grid-cols-8 gap-3">
        {services.map((service) => (
          <motion.button
            key={service.title}
            variants={megamenuItem}
            whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onItemClick(service.href)}
            className="flex flex-col items-start gap-2 p-3 rounded-xl transition-colors duration-200 text-left group"
          >
            <service.icon
              size={24}
              weight="duotone"
              className="text-primary group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <h4 className="text-white font-medium text-base font-sans">{service.title}</h4>
              <p className="text-white/70 text-[13px] mt-1 leading-tight">{service.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
