import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight, Envelope, User } from "@phosphor-icons/react";
import { Header } from "@/components/sessoes/Header";
import { Footer } from "@/components/sessoes/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { useBlogPost, useRelatedPosts } from "@/hooks/useWordPress";
import { StickyShareBar } from "@/components/blog/StickyShareBar";
import { SEOHead, ArticleSchema, BreadcrumbSchema } from "@/components/seo";
import { SEO_CONFIG } from "@/lib/seo-config";
import { getISODate } from "@/lib/wordpress-helpers";
import type { BlogPost } from "@/data/blogPosts";

const RelatedPostCard = ({ post }: { post: BlogPost }) => (
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

const BlogPostSkeleton = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-secondary" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Skeleton className="h-4 w-32 mb-6" />
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Skeleton className="h-8 w-24 mx-auto" />
          <Skeleton className="h-12 w-3/4 mx-auto" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
        <Skeleton className="mt-8 h-[400px] w-full rounded-2xl" />
      </div>
    </section>
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-6 w-4/5" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>
      </div>
    </section>
  </div>
);

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = useBlogPost(slug);
  const relatedPosts = useRelatedPosts(post || null, 3);

  if (isLoading) {
    return <BlogPostSkeleton />;
  }

  if (isError || !post) {
    return <Navigate to="/blog" replace />;
  }

  const canonicalUrl = `${SEO_CONFIG.siteUrl}/blog/${post.slug}`;
  const isoDate = getISODate(post.rawDate);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${post.title} | Blog | Hero Sales`}
        description={post.excerpt}
        canonical={canonicalUrl}
        ogType="article"
        ogImage={post.image}
        article={{
          publishedTime: isoDate,
          author: post.author.name,
          section: post.category,
        }}
      />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        image={post.image}
        datePublished={isoDate}
        author={post.author}
        url={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SEO_CONFIG.siteUrl },
          { name: "Blog", url: `${SEO_CONFIG.siteUrl}/blog` },
          { name: post.title, url: canonicalUrl },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />

        <motion.div
          className="container mx-auto px-4 md:px-6 relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Back Link */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm"
            >
              <ArrowLeft size={16} weight="bold" />
              Voltar para o Blog
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto text-center">
            <Badge variant="gold" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/70 text-sm mb-8">
              <span className="flex items-center gap-2">
                <User size={16} weight="bold" />
                {post.author.name}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} weight="bold" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} weight="bold" />
                {post.readTime} de leitura
              </span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="py-10 md:py-[90px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto lg:grid lg:grid-cols-[auto_1fr] lg:gap-12 lg:items-start">
            {/* Sticky Sidebar - Desktop Only */}
            <StickyShareBar post={post} />

            {/* Article Content */}
            <motion.article
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-3xl prose prose-lg prose-invert
                prose-headings:font-sans prose-headings:text-foreground prose-headings:font-semibold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-primary
                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
                prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3
                prose-p:font-sans prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:underline prose-a:underline-offset-4 
                prose-a:decoration-2 prose-a:decoration-primary/70
                hover:prose-a:decoration-primary hover:prose-a:text-primary/80
                prose-a:transition-all prose-a:duration-200
                focus:prose-a:outline-none focus:prose-a:ring-2 focus:prose-a:ring-primary focus:prose-a:ring-offset-2
                prose-ul:text-foreground prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:text-foreground prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:my-3 prose-li:leading-relaxed prose-li:marker:text-primary
                prose-strong:text-foreground prose-strong:font-semibold
                prose-em:font-sans prose-em:text-primary prose-em:not-italic
                prose-blockquote:border-l-4 prose-blockquote:border-primary 
                prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:italic 
                prose-blockquote:text-foreground/90 prose-blockquote:bg-muted/30 prose-blockquote:rounded-r-lg
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-code:text-primary prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono
                prose-pre:bg-secondary prose-pre:text-white prose-pre:rounded-xl prose-pre:p-6 prose-pre:overflow-x-auto
                prose-hr:border-border prose-hr:my-10
                prose-table:border-collapse prose-th:bg-muted prose-th:p-3 prose-td:p-3 prose-td:border-border"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Author Box */}
      <motion.section
        className="py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto bg-card border border-border/50 rounded-2xl p-6 md:p-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Avatar className="w-16 h-16 border-2 border-primary/30">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback className="bg-primary/20 text-primary text-lg">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h3 className="font-sans text-lg font-semibold text-foreground mb-1">
                  {post.author.name}
                </h3>
                <p className="text-muted-foreground text-sm">{post.author.bio}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <motion.section
          className="py-12 md:py-16 bg-muted/30"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl text-foreground">
                Artigos <em className="text-primary not-italic">Relacionados</em>
              </h2>
              <p className="text-muted-foreground mt-2">
                Continue lendo sobre {post.category}
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {relatedPosts.map((relatedPost) => (
                <RelatedPostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-10">
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <Link to="/blog">
                  Ver Todos os Artigos
                  <ArrowRight size={18} weight="bold" className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Newsletter Section */}
      <motion.section
        className="py-16 md:py-24 bg-secondary"
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

export default BlogPostPage;
