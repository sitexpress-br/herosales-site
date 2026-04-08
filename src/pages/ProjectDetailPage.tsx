import { motion } from "framer-motion";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  TrendUp,
  Globe,
  MagnifyingGlass,
  PaintBrush,
  Quotes,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "@phosphor-icons/react";
import { Header } from "@/components/sessoes/Header";
import { Footer } from "@/components/sessoes/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { useProject } from "@/hooks/useWordPress";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { openWhatsAppPopup } from "@/hooks/useWhatsAppPopup";
import { SEOHead, BreadcrumbSchema } from "@/components/seo";
import { SEO_CONFIG } from "@/lib/seo-config";
import type { Icon } from "@phosphor-icons/react";

// Icon mapping for services
const iconMap: Record<string, Icon> = {
  globe: Globe,
  search: MagnifyingGlass,
  paintbrush: PaintBrush,
};


const CasePageSkeleton = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="relative pt-32 bg-secondary pb-[40px]">
      <div className="container mx-auto px-6">
        <Skeleton className="h-4 w-32 mb-8" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-16 w-48" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-10 w-64" />
          </div>
          <Skeleton className="h-[400px] rounded-2xl" />
        </div>
      </div>
    </section>
  </div>
);

const CasePage = () => {
  const { slug } = useParams();
  const { data: projectData, isLoading, isError } = useProject(slug);

  if (isLoading) {
    return <CasePageSkeleton />;
  }

  // Redirect if error or no project data
  if (isError || !projectData) {
    return <Navigate to="/projetos" replace />;
  }

  const data = projectData;
  const canonicalUrl = `${SEO_CONFIG.siteUrl}/projetos/${data.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${data.name} | Case de Sucesso | Hero Sales`}
        description={`Veja como transformamos a presença digital do ${data.name}. ${data.area} • ${data.location}`}
        canonical={canonicalUrl}
        ogType="website"
        ogImage={data.images.after}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SEO_CONFIG.siteUrl },
          { name: "Projetos", url: `${SEO_CONFIG.siteUrl}/projetos` },
          { name: data.name, url: canonicalUrl },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 bg-gradient-to-b from-secondary to-secondary/95 overflow-hidden pb-[40px]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Voltar para projetos
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <Badge variant="gold" className="mb-4">
                  Estudo de Caso
                </Badge>
              </motion.div>

              <motion.div variants={fadeInUp} className="mb-6">
                <div className="inline-block bg-white p-4 rounded-lg shadow-lg border border-border/20">
                  <img
                    src={data.logo}
                    alt={`Logo ${data.name}`}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4"
              >
                {data.name}
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-white/60 text-lg mb-6">
                {data.area} • {data.location}
              </motion.p>

              {data.heroResult && (
                <motion.div variants={fadeInUp} className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2">
                    <TrendUp size={24} weight="bold" className="text-primary" />
                    <span className="text-primary font-bold text-2xl">
                      {data.heroResult}
                    </span>
                    <span className="text-white/80">{data.heroResultLabel}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Hero Image/Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={data.images.after}
                  alt={`Site ${data.name}`}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                
                {/* Visit Site Button */}
                {data.url && (
                  <a 
                    href={data.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 hover:bg-primary/30 transition-colors backdrop-blur-sm"
                  >
                    <Globe size={20} weight="bold" className="text-primary" />
                    <span className="text-primary font-bold">{data.url.replace(/^https?:\/\//, '')}</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        className="bg-background py-[40px]"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-4">
                Contexto
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                {data.challenge.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {data.challenge.description}
              </p>
            </motion.div>

            {data.challenge.problems.length > 0 && (
              <motion.div variants={fadeInUp}>
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  Problemas identificados:
                </h3>
                <ul className="space-y-3">
                  {data.challenge.problems.map((problem, index) => (
                    <motion.li
                      key={index}
                      variants={staggerItem}
                      className="flex items-start gap-3"
                    >
                      <XCircle
                        size={22}
                        weight="fill"
                        className="text-destructive shrink-0 mt-0.5"
                      />
                      <span className="text-muted-foreground">{problem}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Solution Section */}
      {data.solution.services.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="bg-muted/50 py-[40px]"
        >
          <div className="container mx-auto px-6">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge variant="gold" className="mb-4">
                Estratégia
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                {data.solution.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {data.solution.description}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {data.solution.services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Globe;
                return (
                  <motion.div key={index} variants={staggerItem}>
                    <Card variant="elevated" className="h-full text-center p-8">
                      <CardContent className="p-0">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                          <IconComponent
                            size={32}
                            weight="duotone"
                            className="text-primary"
                          />
                        </div>
                        <h3 className="font-display text-xl font-semibold mb-3">
                          {service.name}
                        </h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Results Section */}
      {data.results.length > 0 && 
       data.results.some(r => r.label || r.before || r.after || r.growth) && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="bg-secondary text-white py-[40px]"
        >
          <div className="container mx-auto px-6">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge variant="gold" className="mb-4">
                Resultados
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
                Números que <em className="text-primary italic">Impressionam</em>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Os resultados falam por si. Confira a transformação em números.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {data.results.map((result, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                    <p className="text-white/60 text-sm mb-4">{result.label}</p>

                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-white/40 line-through text-lg">
                        {result.before}
                      </span>
                      <ArrowRight size={16} className="text-primary" />
                      <span className="text-white font-bold text-2xl">
                        {result.after}
                      </span>
                    </div>

                    <Badge variant="gold">{result.growth}</Badge>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Before/After Section - Adaptive */}
      {(() => {
        const hasBeforeImage = data.images.before && 
          data.images.before !== "/placeholder.svg" && 
          data.images.before.trim() !== "";
        
        const sectionContent = hasBeforeImage 
          ? {
              badge: "Transformação Visual",
              badgeVariant: "secondary" as const,
              title: "Antes e Depois",
              description: "Arraste para comparar a transformação completa do site"
            }
          : {
              badge: "Resultado Final",
              badgeVariant: "gold" as const,
              title: "Site Profissional Implementado",
              description: "Um site profissional desenvolvido exclusivamente para elevar a autoridade digital da clínica"
            };

        return (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="bg-background py-[40px]"
          >
            <div className="container mx-auto px-6">
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <Badge variant={sectionContent.badgeVariant} className="mb-4">
                  {sectionContent.badge}
                </Badge>
                <h2 className="font-display text-3xl md:text-4xl mb-4">
                  {sectionContent.title}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {sectionContent.description}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
                {hasBeforeImage ? (
                  <BeforeAfterSlider
                    beforeImage={data.images.before}
                    afterImage={data.images.after}
                    beforeLabel="Site Antigo"
                    afterLabel="Novo Site"
                  />
                ) : (
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <img 
                      src={data.images.after}
                      alt={`Site ${data.name}`}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </motion.div>
            </div>
          </motion.section>
        );
      })()}

      {/* Testimonial Section */}
      {data.testimonial.quote && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="bg-muted/50 py-[40px]"
        >
          <div className="container mx-auto px-6">
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center">
              <Quotes size={64} weight="fill" className="text-primary/20 mx-auto mb-8" />

              <blockquote className="font-display text-2xl md:text-3xl text-foreground mb-8 leading-relaxed">
                "{data.testimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img
                  src={data.testimonial.avatar}
                  alt={data.testimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <p className="font-semibold text-foreground">
                    {data.testimonial.author}
                  </p>
                  <p className="text-muted-foreground">{data.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeInUp}
        className="bg-secondary py-[40px]"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Quer resultados <em className="text-primary italic">assim</em> para seu
            clínica?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Transforme sua presença digital e atraia clientes qualificados todos os
            dias.
          </p>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button size="xl" onClick={openWhatsAppPopup}>
              Quero uma Proposta
              <ArrowRight size={18} weight="bold" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default CasePage;
