import { motion } from "framer-motion";
import {
  Phone,
  Envelope,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(49) 9 8305-5561",
    href: "tel:+554998305561",
  },
  {
    icon: Envelope,
    label: "Email",
    value: "contato@herosales.pro",
    href: "mailto:contato@herosales.pro",
  },
];

const socialLinks = [
  {
    icon: InstagramLogo,
    label: "Instagram",
    href: "https://instagram.com/herosalespro",
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp",
    href: "https://wa.me/554998305561",
  },
];

interface MegaMenuContactProps {
  onItemClick: (href: string) => void;
}

export const MegaMenuContact = ({ onItemClick }: MegaMenuContactProps) => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        {/* Contact Info */}
        <div>
          <h4 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">
            Entre em contato
          </h4>
          <div className="flex flex-col gap-2">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 group"
              >
                <item.icon
                  size={20}
                  weight="duotone"
                  className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-200"
                />
                <div>
                  <span className="text-white/50 text-xs">{item.label}</span>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Social + CTA */}
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="text-white/60 text-xs font-medium uppercase tracking-wider mb-2">
              Redes sociais
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary text-white/70 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} weight="fill" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <Button
              onClick={() => onItemClick("#contato")}
              className="w-full"
              variant="gold"
            >
              Fale Conosco
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
