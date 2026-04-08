import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendUp, MapPin, ArrowRight } from "@phosphor-icons/react";
import { Header } from "@/components/sessoes/Header";
import { Footer } from "@/components/sessoes/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useProjects, useProjectAreas } from "@/hooks/useWordPress";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { SEOHead, BreadcrumbSchema } from "@/components/seo";
import { PAGE_SEO, SEO_CONFIG } from "@/lib/seo-config";
const ProjectCardSkeleton = () => <div className="rounded-xl overflow-hidden bg-card border border-border/50">
    <Skeleton className="aspect-square w-full" />
    <div className="p-6 space-y-3">
      <div className="flex justify-between">
        <div className="space-y-2 flex-1">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    </div>
  </div>;
const FiltersSkeleton = () => <div className="flex flex-wrap gap-2 justify-center">
    {[1, 2, 3, 4, 5].map(i => <Skeleton key={i} className="h-10 w-24 rounded-full" />)}
  </div>;
const ProjectsPage = () => {
  const [selectedArea, setSelectedArea] = useState("Todos");
  const {
    data: projects,
    isLoading,
    isError,
    error
  } = useProjects();
  const {
    areas,
    isLoading: areasLoading
  } = useProjectAreas();

  // Debug logging for error tracking
  useEffect(() => {
    if (isError && error) {
      console.error("[ProjectsPage] Error loading projects:", error);
    }
  }, [isError, error]);
  const filteredProjects = selectedArea === "Todos" ? projects : projects?.filter(project => project.area === selectedArea);
  return <div className="min-h-screen bg-background">
      <SEOHead title={PAGE_SEO.projects.title} description={PAGE_SEO.projects.description} canonical={`${SEO_CONFIG.siteUrl}/projetos`} ogType="website" />
      <BreadcrumbSchema items={[{
      name: "Home",
      url: SEO_CONFIG.siteUrl
    }, {
      name: "Projetos",
      url: `${SEO_CONFIG.siteUrl}/projetos`
    }]} />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp}>
              <Badge variant="gold" className="mb-6">
                Portfólio
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Projetos que <em className="text-primary italic">Impressionam</em> e
              Convertem
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              Cada site que criamos é uma peça única de autoridade digital,
              desenvolvida para gerar resultados reais
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      

      {/* Projects Grid */}
      <section className="py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          {isLoading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => <ProjectCardSkeleton key={i} />)}
            </div>}

          {isError && <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Erro ao carregar projetos. Por favor, tente novamente mais tarde.
              </p>
            </div>}

          {!isLoading && !isError && <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProjects?.map(project => <motion.div key={project.slug} variants={staggerItem}>
                  <Link to={`/projetos/${project.slug}`}>
                    <motion.div whileHover={{
                y: -8
              }} transition={{
                duration: 0.3,
                ease: "easeOut"
              }}>
                      <Card variant="interactive" className="group overflow-hidden h-full">
                        {/* Project Image */}
                        <div className="relative aspect-square bg-muted overflow-hidden">
                          <motion.img src={project.image} alt={project.name} className="w-full h-full object-cover object-top" whileHover={{
                      scale: 1.05
                    }} transition={{
                      duration: 0.5
                    }} />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />

                          {/* Result Badge */}
                          {project.result && <motion.div className="absolute bottom-4 left-4" initial={{
                      opacity: 0,
                      y: 10
                    }} whileInView={{
                      opacity: 1,
                      y: 0
                    }} transition={{
                      delay: 0.3
                    }}>
                              <Badge variant="gold" className="flex items-center gap-1 px-3 py-1.5">
                                <TrendUp size={16} weight="bold" />
                                <span className="font-bold">{project.result}</span>
                                <span className="font-normal">{project.resultLabel}</span>
                              </Badge>
                            </motion.div>}
                        </div>

                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                                {project.name}
                              </h3>
                              <p className="text-muted-foreground text-sm mb-2">
                                {project.url}
                              </p>
                              {project.location && <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                  <MapPin size={12} />
                                  {project.location}
                                </div>}
                            </div>
                            
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>)}
            </motion.div>}

          {!isLoading && !isError && filteredProjects?.length === 0 && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </motion.div>}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-10 md:py-[90px]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer} className="max-w-3xl mx-auto text-center">
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Quer resultados <em className="text-primary italic">assim</em>?
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-white/70 text-lg mb-8">
              Transforme sua clínica em uma máquina de captação de clientes com
              um site que realmente converte.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.div whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Button variant="cta" size="xl">
                  Solicitar Proposta
                  <ArrowRight size={20} weight="bold" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default ProjectsPage;