import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MagnifyingGlass, Calendar, Clock, ArrowRight, Envelope } from "@phosphor-icons/react";
import { Header } from "@/components/sessoes/Header";
import { Footer } from "@/components/sessoes/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { useBlogPosts, useBlogCategories } from "@/hooks/useWordPress";
import { SEOHead, BreadcrumbSchema } from "@/components/seo";
import { PAGE_SEO, SEO_CONFIG } from "@/lib/seo-config";
import type { BlogPost } from "@/data/blogPosts";

const FeaturedPostCard = ({ post }: { post: BlogPost }) => (
  <motion.article
    variants={staggerItem}
    whileHover={{ y: -4 }}
    className="group relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
  >
    <Link to={`/blog/${post.slug}`}>
      <div className="absolute inset-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
      </div>

      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <Badge variant="gold" className="w-fit mb-4">
          {post.category}
        </Badge>

        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-3 leading-tight">
          {post.title}
        </h2>

        <p className="text-white/80 text-base md:text-lg mb-4 line-clamp-2 max-w-2xl">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-white/60 text-sm">
          <span className="flex items-center gap-1.5">
            <Calendar size={16} weight="bold" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={16} weight="bold" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

const PostCard = ({ post }: { post: BlogPost }) => (
  <motion.article
    variants={staggerItem}
    whileHover={{ y: -4 }}
    className="group flex flex-col rounded-xl overflow-hidden cursor-pointer bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gold"
  >
    <Link to={`/blog/${post.slug}`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge variant="glass" className="absolute top-3 left-3">
          {post.category}
        </Badge>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-sans text-lg font-semibold text-foreground mb-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3 text-muted-foreground text-xs">
          <span className="flex items-center gap-1">
            <Calendar size={14} weight="bold" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} weight="bold" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

const PostCardSkeleton = () => (
  <div className="flex flex-col rounded-xl overflow-hidden bg-card border border-border/50">
    <Skeleton className="aspect-[16/10] w-full" />
    <div className="p-5 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex gap-3">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  </div>
);

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: posts, isLoading, isError } = useBlogPosts();
  const { categories, isLoading: categoriesLoading } = useBlogCategories();

  const featuredPost = posts?.find((post) => post.featured);
  const filteredPosts =
    posts?.filter((post) => {
      const matchesCategory =
        activeCategory === "Todos" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch && !post.featured;
    }) || [];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={PAGE_SEO.blog.title}
        description={PAGE_SEO.blog.description}
        canonical={`${SEO_CONFIG.siteUrl}/blog`}
        ogType="website"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SEO_CONFIG.siteUrl },
          { name: "Blog", url: `${SEO_CONFIG.siteUrl}/blog` },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />

        <motion.div
          className="container mx-auto px-4 md:px-6 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <Badge variant="gold" className="mb-4">
              Blog Médico
            </Badge>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Insights para <em className="text-primary not-italic">Clínicas</em>
            </h1>

            <p className="text-white/70 text-lg md:text-xl mb-8">
              Conteúdo estratégico para posicionar sua clínica como referência
              no mercado da saúde
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <MagnifyingGlass
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 z-10"
              />
              <Input
                type="text"
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Category Filters */}
      <section className="py-10 border-b border-border/50 md:py-[20px]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categoriesLoading ? (
              [...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-full" />
              ))
            ) : (
              categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="py-10 md:py-[90px]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <PostCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Error State */}
      {isError && (
        <section className="py-10 md:py-[90px]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p className="text-muted-foreground text-lg">
              Erro ao carregar artigos. Por favor, tente novamente mais tarde.
            </p>
          </div>
        </section>
      )}

      {/* Featured Post */}
      {!isLoading &&
        !isError &&
        featuredPost &&
        activeCategory === "Todos" &&
        !searchQuery && (
          <motion.section
            className="py-10 md:py-[90px] pt-[20px]"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <div className="container mx-auto px-4 md:px-6">
              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">
                  Artigo em <em className="text-primary not-italic">Destaque</em>
                </h2>
              </motion.div>
              <FeaturedPostCard post={featuredPost} />
            </div>
          </motion.section>
        )}

      {/* Posts Grid */}
      {!isLoading && !isError && (
        <motion.section
          className="py-10 md:py-[90px] pt-0"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4 md:px-6">
            {!featuredPost || activeCategory !== "Todos" || searchQuery ? null : (
              <motion.div variants={fadeInUp} className="mb-8">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">
                  Mais <em className="text-primary not-italic">Artigos</em>
                </h2>
              </motion.div>
            )}

            {filteredPosts.length > 0 ? (
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </motion.div>
            ) : (
              <motion.div variants={fadeInUp} className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Nenhum artigo encontrado para esta busca.
                </p>
              </motion.div>
            )}
          </div>
        </motion.section>
      )}

      {/* Newsletter Section */}
      <motion.section
        className="py-10 bg-secondary pb-0 md:py-[40px]"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Envelope size={32} className="text-primary" weight="duotone" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Receba Insights <em className="text-primary not-italic">Exclusivos</em>
            </h2>

            <p className="text-white/70 text-lg mb-8">
              Cadastre-se para receber estratégias de marketing médico
              diretamente no seu email
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl"
              />
              <Button variant="gold" size="lg" className="rounded-xl">
                Inscrever-se
                <ArrowRight size={18} weight="bold" className="ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default BlogPage;
