import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IconProps } from "@phosphor-icons/react";
import { Globe, Storefront, Palette, Browser, Article, ChartLineUp, Envelope, Robot } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport, floatingIconLeft, floatingIconRight, serviceCardHover } from "@/lib/animations";

// Imagens flutuantes genéricas
import floating1 from "@/assets/floating/floating-1.webp";
import floating2 from "@/assets/floating/floating-2.webp";

// Ícones flutuantes customizados
import iconInternet from "@/assets/floating/icon-internet.svg";
import iconDesignSite from "@/assets/floating/icon-design-site.svg";
import iconLandingPage from "@/assets/floating/icon-landing-page.svg";
import iconVelocidade from "@/assets/floating/icon-velocidade.svg";
import iconMarketingEmail from "@/assets/floating/icon-marketing-email.svg";
import iconEmailAt from "@/assets/floating/icon-email-at.svg";
import iconAnuncio from "@/assets/floating/icon-anuncio.svg";
import iconAdwords from "@/assets/floating/icon-adwords.svg";
import iconMapa from "@/assets/floating/icon-mapa.svg";
import iconGoogle from "@/assets/floating/icon-google.svg";
import iconBlog from "@/assets/floating/icon-blog.svg";
import iconSeo from "@/assets/floating/icon-seo.svg";
import iconEscala from "@/assets/floating/icon-escala.svg";
import iconPencil from "@/assets/floating/icon-pencil.svg";

type PhosphorIcon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;

interface Service {
  icon: PhosphorIcon;
  title: string;
  description: string;
  href: string;
  floatingLeft?: string;
  floatingRight?: string;
}

const services: Service[] = [{
  icon: Robot,
  title: "IA & Automação",
  description: "Atendimento 24/7 e follow-up inteligente",
  href: "/servicos/ia-para-clinicas",
  floatingLeft: iconEscala,
  floatingRight: iconPencil
}, {
  icon: Globe,
  title: "Sites & Landing Pages",
  description: "Sites e páginas de alta conversão",
  href: "/servicos/sites-de-autoridade",
  floatingLeft: iconInternet,
  floatingRight: iconLandingPage
}, {
  icon: Envelope,
  title: "Email Corporativo",
  description: "Emails profissionais com domínio próprio",
  href: "/servicos/email-corporativo",
  floatingLeft: iconMarketingEmail,
  floatingRight: iconEmailAt
}, {
  icon: ChartLineUp,
  title: "Gestão de Tráfego",
  description: "Anúncios que trazem clientes qualificados",
  href: "/servicos/gestao-de-trafego",
  floatingLeft: iconAnuncio,
  floatingRight: iconAdwords
}, {
  icon: Storefront,
  title: "Google Meu Negócio",
  description: "Aparecer no Google Maps da sua região",
  href: "/servicos/google-meu-negocio",
  floatingLeft: iconMapa,
  floatingRight: iconGoogle
}, {
  icon: Article,
  title: "Blog + SEO",
  description: "Conteúdo que posiciona como referência",
  href: "/servicos/blog-seo-medico",
  floatingLeft: iconBlog,
  floatingRight: iconSeo
}, {
  icon: Palette,
  title: "Identidade Visual",
  description: "Logo e materiais que transmitem profissionalismo",
  href: "/servicos/identidade-visual",
  floatingLeft: iconEscala,
  floatingRight: iconPencil
}];
export const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleServiceClick = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
  };

  return <motion.section id="servicos" initial="hidden" whileInView="visible" viewport={defaultViewport} className="bg-muted/30 pt-10 md:pt-[90px] overflow-hidden pb-0">

      {/* Header com container */}
      <div className="container mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Tudo em Uma Só Plataforma para{" "}
            <em className="text-primary italic">Vender Mais</em>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            CRM, automação, sites, tráfego e IA integrados para clínicas e profissionais da saúde
          </p>
        </motion.div>
      </div>

      {/* Grid com padding lateral e gap entre cards */}
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="container mx-auto grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-2.5 px-[23px] pb-10 sm:pb-0">
        {services.map((service, index) => <motion.div key={index} variants={staggerItem} className="h-full">
            {/* Wrapper com hover state para controlar imagens flutuantes */}
            <motion.div className="relative h-full" initial="rest" whileHover="hover" animate="rest" onHoverStart={() => setHoveredCard(index)} onHoverEnd={() => setHoveredCard(null)}>
              {/* Imagem flutuante esquerda - cima esquerda */}
              <motion.div className="hidden lg:flex absolute left-3 -top-6 z-0 pointer-events-none" variants={floatingIconLeft}>
                <img src={service.floatingLeft || floating1} alt="" className="w-14 h-14 object-contain drop-shadow-lg" />
              </motion.div>

              {/* Imagem flutuante direita - cima direita */}
              <motion.div className="hidden lg:flex absolute right-3 -top-6 z-0 pointer-events-none" variants={floatingIconRight}>
                <img src={service.floatingRight || floating2} alt="" className="w-14 h-14 object-contain drop-shadow-lg" />
              </motion.div>

              {/* Card principal */}
              <motion.div 
                variants={serviceCardHover} 
                className="h-full relative z-10 cursor-pointer"
                onClick={() => handleServiceClick(service.href)}
              >
                <Card variant="default" className={`group h-full flex flex-col rounded-xl sm:rounded-t-xl sm:rounded-b-none border sm:border-b-0 bg-card transition-all duration-300 ${hoveredCard === index ? "border-primary shadow-gold" : ""}`}>
                  <CardHeader className="p-4 flex-1 flex flex-row sm:flex-col items-center sm:items-stretch gap-4 sm:gap-0">
                    <motion.div className="mx-0 sm:mx-auto mb-0 sm:mb-3 flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-gold transition-all duration-300" whileHover={{
                  scale: 1.1,
                  rotate: 5
                }}>
                      <service.icon size={24} weight="duotone" className="text-primary group-hover:text-secondary transition-colors lg:w-7 lg:h-7" />
                    </motion.div>
                    <div className="text-left sm:text-center">
                      <CardTitle className="font-sans text-sm lg:text-base group-hover:text-primary transition-colors leading-tight">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed mt-1">
                        {service.description}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>)}
      </motion.div>

      {/* Borda do rodapé com transição de cor */}
      <div className={`hidden sm:block h-px mt-0 transition-colors duration-300 ${hoveredCard !== null ? "bg-primary" : "bg-border"}`} />
    </motion.section>;
};