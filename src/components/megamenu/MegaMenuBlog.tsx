import { motion } from "framer-motion";
import { ArrowRight, Clock } from "@phosphor-icons/react";
import { Skeleton } from "@/components/ui/skeleton";
import { useBlogPosts } from "@/hooks/useWordPress";
import { 
  megamenuContainer, 
  megamenuFeatured, 
  megamenuItem,
  megamenuCta 
} from "@/lib/animations";

interface MegaMenuBlogProps {
  onItemClick: (href: string) => void;
}

const MegaMenuBlogSkeleton = () => (
  <div className="p-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Featured Post Skeleton */}
      <div className="relative overflow-hidden rounded-xl">
        <Skeleton className="aspect-[16/10] w-full rounded-xl" />
      </div>

      {/* Recent Posts Skeleton */}
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-3">
              <Skeleton className="w-12 h-12 rounded-lg flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <Skeleton className="h-5 w-3/4" />
              </div>
            </div>
          ))}
        </div>
        <Skeleton className="h-5 w-40 ml-auto" />
      </div>
    </div>
  </div>
);

export const MegaMenuBlog = ({ onItemClick }: MegaMenuBlogProps) => {
  const { data: posts, isLoading } = useBlogPosts(6);

  if (isLoading || !posts || posts.length === 0) {
    return <MegaMenuBlogSkeleton />;
  }

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 6);

  return (
    <motion.div 
      className="p-6"
      variants={megamenuContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Featured Post */}
        <motion.button
          variants={megamenuFeatured}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onItemClick(`/blog/${featuredPost.slug}`)}
          className="group relative overflow-hidden rounded-xl text-left"
        >
          <div className="aspect-[16/10] overflow-hidden rounded-xl">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="inline-block px-2 py-1 text-sm font-medium bg-primary/20 text-primary rounded-md mb-2">
              {featuredPost.category}
            </span>
            <h4 className="text-white font-sans font-medium text-lg leading-tight">
              {featuredPost.title}
            </h4>
            <div className="flex items-center gap-1 mt-2 text-white/60 text-sm">
              <Clock size={14} />
              <span>{featuredPost.readTime} de leitura</span>
            </div>
          </div>
        </motion.button>

        {/* Recent Posts */}
        <motion.div 
          className="flex flex-col justify-between h-full"
          variants={megamenuContainer}
        >
          {/* Grupo de posts - juntos com gap compacto */}
          <div className="flex flex-col gap-1">
            {recentPosts.map((post) => (
              <motion.button
                key={post.id}
                variants={megamenuItem}
                whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.05)" }}
                onClick={() => onItemClick(`/blog/${post.slug}`)}
                className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left group"
              >
                {/* Thumbnail */}
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary font-medium">{post.category}</span>
                    <span className="text-white/60 text-sm">•</span>
                    <span className="text-white/60 text-sm">{post.readTime}</span>
                  </div>
                  <h5 className="text-white font-sans text-base font-medium group-hover:text-primary transition-colors line-clamp-1">
                    {post.title}
                  </h5>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.button
            variants={megamenuCta}
            whileHover={{ gap: "0.75rem" }}
            onClick={() => onItemClick("/blog")}
            className="flex items-center gap-2 ml-auto text-primary font-sans text-base font-medium transition-all duration-200"
          >
            Ver todos os artigos
            <ArrowRight size={18} weight="bold" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
