import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import DesignSystem from "./pages/DesignSystem";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ServicesAuthoridadeSitesPage from "./pages/ServicesAuthoridadeSitesPage";
import ServicesEmailCorporativoPage from "./pages/ServicesEmailCorporativoPage";
import ServicesGestaoTrafegoPage from "./pages/ServicesGestaoTrafegoPage";
import ServicesGoogleMeuNegocioPage from "./pages/ServicesGoogleMeuNegocioPage";
import ServicesBlogSeoPage from "./pages/ServicesBlogSeoPage";
import ServicesIdentidadeVisualPage from "./pages/ServicesIdentidadeVisualPage";
import ServicesIAClinicasPage from "./pages/ServicesIAClinicasPage";
import OfertaSiteEmailPage from "./pages/OfertaSiteEmailPage";
import OfertaAgendaLotadaPage from "./pages/OfertaAgendaLotadaPage";
import OfertaAgendaPrevisivelPage from "./pages/OfertaAgendaPrevisivelPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PromoRedirectPage from "./pages/PromoRedirectPage";
import NotFound from "./pages/NotFound";
import ConditionalWhatsAppWidget from "./components/ConditionalWhatsAppWidget";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/projetos/:slug" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/servicos/sites-de-autoridade" element={<ServicesAuthoridadeSitesPage />} />
          <Route path="/servicos/landing-pages" element={<Navigate to="/servicos/sites-de-autoridade" replace />} />
          <Route path="/servicos/email-corporativo" element={<ServicesEmailCorporativoPage />} />
          <Route path="/servicos/gestao-de-trafego" element={<ServicesGestaoTrafegoPage />} />
          <Route path="/servicos/google-meu-negocio" element={<ServicesGoogleMeuNegocioPage />} />
          <Route path="/servicos/blog-seo-medico" element={<ServicesBlogSeoPage />} />
          <Route path="/servicos/identidade-visual" element={<ServicesIdentidadeVisualPage />} />
          <Route path="/servicos/ia-para-clinicas" element={<ServicesIAClinicasPage />} />
          <Route path="/oferta/site-email" element={<OfertaSiteEmailPage />} />
          <Route path="/oferta/agenda-lotada" element={<OfertaAgendaLotadaPage />} />
          <Route path="/oferta/agenda-previsivel" element={<OfertaAgendaPrevisivelPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
          <Route path="/promo" element={<PromoRedirectPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ConditionalWhatsAppWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
