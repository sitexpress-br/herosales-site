import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendUp } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useProjects } from "@/hooks/useWordPress";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
const ProjectCardSkeleton = () => <div className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
    <Skeleton className="aspect-square w-full bg-white/10" />
    <div className="p-6 space-y-3">
      <div className="flex justify-between">
        <div className="space-y-2 flex-1">
          <Skeleton className="h-6 w-3/4 bg-white/10" />
          <Skeleton className="h-4 w-1/2 bg-white/10" />
        </div>
        <Skeleton className="w-10 h-10 rounded-full bg-white/10" />
      </div>
    </div>
  </div>;
export const Projects = () => {
  const {
    data: projects,
    isLoading
  } = useProjects(4);
  return <motion.section id="projetos" initial="hidden" whileInView="visible" viewport={defaultViewport} className="bg-secondary py-10 md:py-[90px]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
            Projetos que <em className="text-primary italic">Impressionam</em> e
            Convertem
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Cada site que criamos é uma peça única de autoridade digital
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={defaultViewport} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? [...Array(4)].map((_, i) => <ProjectCardSkeleton key={i} />) : projects?.map((project, index) => <motion.div key={project.slug || index} variants={staggerItem}>
                  <Link to={`/projetos/${project.slug}`}>
                    <motion.div whileHover={{
              y: -8
            }} transition={{
              duration: 0.3,
              ease: "easeOut"
            }}>
                      <Card variant="glass" className="group overflow-hidden">
                        {/* Project Image */}
                        <div className="relative aspect-square bg-white/10 overflow-hidden">
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
                                <span className="font-normal">
                                  {project.resultLabel}
                                </span>
                              </Badge>
                            </motion.div>}
                        </div>

                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-sans font-semibold mb-1 text-white group-hover:text-primary transition-colors text-lg">
                                {project.name}
                              </h3>
                              <p className="text-white/60 text-sm">{project.url}</p>
                            </div>
                            
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>)}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={defaultViewport} className="text-center mt-12">
          <motion.div whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }}>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10 hover:text-white">
              <Link to="/projetos">
                Ver Todos os Projetos
                <ArrowRight size={18} weight="bold" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>;
};