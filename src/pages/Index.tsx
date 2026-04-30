import { Header } from "@/components/sessoes/Header";
import { Hero } from "@/components/sessoes/Hero";
// import { Projects } from "@/components/sessoes/Projects"; // Hidden temporarily
import { Testimonials } from "@/components/sessoes/Testimonials";
import { Team } from "@/components/sessoes/Team";
import { Process } from "@/components/sessoes/Process";
import { Services } from "@/components/sessoes/Services";
import { Results } from "@/components/sessoes/Results";
// import { Blog } from "@/components/sessoes/Blog"; // Hidden temporarily
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
      {/* <Projects /> Hidden temporarily */}
      <Results />
      <Process />
      <Testimonials />
      <Team />

      {/* <Blog /> Hidden temporarily */}
      <Footer />
    </div>
  );
};

export default Index;
