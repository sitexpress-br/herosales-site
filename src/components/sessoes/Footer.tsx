import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { InstagramLogo, WhatsappLogo, EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";
const logo = "https://msgsndr-private.storage.googleapis.com/companyPhotos/0599742e-e4db-4132-b44e-f3efdf215411.png";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";

const footerLinks = {
  servicos: [
    { label: "Sites de Autoridade", href: "/servicos/sites-de-autoridade" },
    { label: "Google Meu Negócio", href: "/servicos/google-meu-negocio" },
    { label: "Identidade Visual", href: "/servicos/identidade-visual" },
    
    { label: "Gestão de Tráfego", href: "/servicos/gestao-de-trafego" },
    { label: "Blog + SEO", href: "/servicos/blog-seo-medico" },
  ],
  empresa: [
    { label: "Projetos", href: "/projetos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ],
};

// TODO: Substituir pelos links reais das redes sociais
const socialLinks = [
  { icon: InstagramLogo, href: "https://instagram.com/herosalespro", label: "Instagram" },
  { icon: WhatsappLogo, href: "https://wa.me/554998305561", label: "WhatsApp" },
];
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <motion.footer id="contato" initial="hidden" whileInView="visible" viewport={defaultViewport} className="bg-secondary pt-16 pb-8 py-[40px]">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <motion.a href="/" className="inline-block" whileHover={{
            scale: 1.02
          }}>
              <img src={logo} alt="Hero Sales" className="h-16 mb-4 object-contain" />
            </motion.a>
            <p className="text-white/60 text-sm mb-6">
              A plataforma completa para clínicas e profissionais da saúde
              venderem mais e gerenciarem tudo em um só lugar.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => <motion.a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary hover:text-secondary flex items-center justify-center text-white/60 transition-all duration-300" whileHover={{
              scale: 1.1,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.2 + index * 0.1
            }}>
                  <social.icon size={20} weight="bold" />
                </motion.a>)}
            </div>
          </motion.div>

          {/* Serviços */}
          <motion.div variants={staggerItem}>
            <h4 className="font-display font-semibold text-white mb-4">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/60 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Empresa */}
          <motion.div variants={staggerItem}>
            <h4 className="font-display font-semibold text-white mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/60 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div variants={staggerItem}>
            <h4 className="font-display font-semibold text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" weight="bold" />
                <a href="tel:+554998305561" className="text-white/60 hover:text-primary transition-colors text-sm">
                  (49) 9 8305-5561
                </a>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={18} className="text-primary mt-0.5 flex-shrink-0" weight="bold" />
                <a href="mailto:contato@herosales.pro" className="text-white/60 hover:text-primary transition-colors text-sm">
                  contato@herosales.pro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" weight="bold" />
                <span className="text-white/60 text-sm">
                  Chapecó, SC - Brasil
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div initial={{
        scaleX: 0
      }} whileInView={{
        scaleX: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{
        once: true
      }} className="flex flex-col items-center gap-3 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} Hero Sales. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="text-white/40 text-sm hover:text-white/60 transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="text-white/40 text-sm hover:text-white/60 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>;
};