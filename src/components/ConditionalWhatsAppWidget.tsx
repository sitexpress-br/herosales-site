import { useLocation } from "react-router-dom";
import WhatsAppWidget from "@/components/whatsapp-widget/WhatsAppWidget";

const ConditionalWhatsAppWidget = () => {
  const location = useLocation();
  
  // Rotas onde o widget NÃO deve aparecer
  const isExcluded = 
    location.pathname === "/blog" ||
    location.pathname.startsWith("/blog/");
  
  // Verificar se é página 404 (rotas não definidas)
  const definedRoutes = [
    "/", "/design-system", "/projetos", "/contato",
    "/servicos/sites-de-autoridade", "/servicos/email-corporativo",
    "/servicos/gestao-de-trafego", "/servicos/google-meu-negocio",
    "/servicos/blog-seo-medico", "/servicos/identidade-visual",
    "/servicos/ia-para-clinicas",
    "/oferta/site-email", "/oferta/agenda-lotada", "/oferta/agenda-previsivel",
    "/politica-de-privacidade", "/termos-de-uso", "/promo"
  ];
  const isDynamicRoute = location.pathname.startsWith("/projetos/");
  const isDefinedRoute = definedRoutes.includes(location.pathname) || isDynamicRoute;
  
  if (isExcluded || !isDefinedRoute) {
    return null;
  }
  
  return <WhatsAppWidget />;
};

export default ConditionalWhatsAppWidget;
