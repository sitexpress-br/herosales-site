import { Header } from "@/components/sessoes/Header";
import { Hero } from "@/components/sessoes/Hero";
import { Projects } from "@/components/sessoes/Projects";
import { Testimonials } from "@/components/sessoes/Testimonials";
import { Team } from "@/components/sessoes/Team";
import { Process } from "@/components/sessoes/Process";
import { Services } from "@/components/sessoes/Services";
import { Results } from "@/components/sessoes/Results";
import { Blog } from "@/components/sessoes/Blog";
import { Footer } from "@/components/sessoes/Footer";

import { SEOHead, OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from "@/components/seo";
import { PAGE_SEO, SEO_CONFIG } from "@/lib/seo-config";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        canonical={SEO_CONFIG.siteUrl}
        ogType="website"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema />
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Results />
      <Process />
      <Testimonials />
      <Team />
      
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
