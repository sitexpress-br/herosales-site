import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fadeInUp, staggerContainer, staggerItem, defaultViewport } from "@/lib/animations";
import { useBlogPosts } from "@/hooks/useWordPress";
import type { BlogPost } from "@/data/blogPosts";
const FeaturedPostCard = ({
  post
}: {
  post: BlogPost;
}) => <motion.article variants={staggerItem} whileHover={{
  y: -4
}} className="group relative h-full min-h-[500px] rounded-2xl overflow-hidden cursor-pointer">
    <Link to={`/blog/${post.slug}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <Badge variant="gold" className="w-fit mb-4">
          {post.category}
        </Badge>

        <h3 className="font-sans text-2xl md:text-3xl text-white mb-3 leading-tight font-bold">
          {post.title}
        </h3>

        <p className="text-white/80 text-base mb-4 line-clamp-2">{post.excerpt}</p>

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
  </motion.article>;
const PostCard = ({
  post
}: {
  post: BlogPost;
}) => <motion.article variants={staggerItem} whileHover={{
  y: -4
}} className="group flex gap-4 rounded-xl overflow-hidden cursor-pointer bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gold p-3 flex-1">
    <Link to={`/blog/${post.slug}`} className="flex gap-4 w-full">
      {/* Image - Full height */}
      <div className="relative w-32 h-full flex-shrink-0 rounded-lg overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <Badge variant="glass" className="absolute top-2 left-2" size="sm">
          {post.category}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <h3 className="font-sans text-xl font-semibold text-secondary mb-1 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
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
  </motion.article>;
const FeaturedPostSkeleton = () => <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden bg-muted">
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <Skeleton className="h-6 w-24 mb-4" />
      <Skeleton className="h-10 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-4" />
      <div className="flex gap-4">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  </div>;
const PostCardSkeleton = () => <div className="flex gap-4 rounded-xl bg-card border border-border/50 p-3 flex-1">
    <Skeleton className="w-32 h-24 rounded-lg flex-shrink-0" />
    <div className="flex flex-col justify-center flex-1 space-y-2">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <div className="flex gap-3">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  </div>;
export const Blog = () => {
  const {
    data: posts,
    isLoading
  } = useBlogPosts(4);
  const featuredPost = posts?.find(post => post.featured) || posts?.[0];
  const regularPosts = posts?.filter(post => post.id !== featuredPost?.id).slice(0, 3) || [];
  return <motion.section id="blog" className="py-10 md:py-[90px] bg-background" initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Insights <em className="text-primary not-italic">Médicos</em>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conteúdo que posiciona você como referência no mercado da saúde
          </p>
        </motion.div>

        {/* Grid de Posts */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {/* Post Destaque (Grande) */}
          {isLoading ? <FeaturedPostSkeleton /> : featuredPost && <FeaturedPostCard post={featuredPost} />}

          {/* Posts Regulares (Coluna Vertical) */}
          <motion.div variants={staggerContainer} className="flex flex-col gap-4 h-full">
            {isLoading ? [...Array(3)].map((_, i) => <PostCardSkeleton key={i} />) : regularPosts.map(post => <PostCard key={post.id} post={post} />)}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="text-center">
          <Button variant="outline" size="lg" className="group" asChild>
            <Link to="/blog">
              Ver Todos os Artigos
              <ArrowRight size={20} weight="bold" className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>;
};