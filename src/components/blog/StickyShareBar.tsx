import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShareNetwork, LinkedinLogo, WhatsappLogo, XLogo, FacebookLogo, Link, Envelope } from "@phosphor-icons/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import type { BlogPost } from "@/data/blogPosts";

interface StickyShareBarProps {
  post: BlogPost;
}

const shareIconVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

export const StickyShareBar = ({ post }: StickyShareBarProps) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post.title;

  const shareLinks = [
    {
      name: "LinkedIn",
      tooltip: "Compartilhar no LinkedIn",
      icon: LinkedinLogo,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "WhatsApp",
      tooltip: "Compartilhar no WhatsApp",
      icon: WhatsappLogo,
      url: `https://wa.me/?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`,
    },
    {
      name: "X",
      tooltip: "Compartilhar no X",
      icon: XLogo,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "Facebook",
      tooltip: "Compartilhar no Facebook",
      icon: FacebookLogo,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success("Link copiado!");
    } catch {
      toast.error("Erro ao copiar link");
    }
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex flex-col items-center gap-6 sticky top-32 self-start"
    >
      {/* Autor */}
      <div className="flex flex-col items-center text-center">
        <Avatar className="w-12 h-12 border-2 border-primary/30">
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback className="bg-primary/20 text-primary text-sm">
            {post.author.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground mt-2 max-w-[80px] leading-tight">
          {post.author.name}
        </span>
      </div>

      <div className="w-8 h-px bg-border" />

      {/* Compartilhar */}
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={() => setIsShareOpen(!isShareOpen)}
          className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          aria-label="Compartilhar"
        >
          <ShareNetwork size={20} weight="bold" />
        </button>

        <AnimatePresence>
          {isShareOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-2 overflow-hidden"
            >
              <TooltipProvider delayDuration={200}>
                {shareLinks.map((link, i) => (
                  <Tooltip key={link.name}>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        custom={i}
                        variants={shareIconVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-200"
                        aria-label={link.tooltip}
                      >
                        <link.icon size={18} weight="bold" />
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="text-xs">
                      {link.tooltip}
                    </TooltipContent>
                  </Tooltip>
                ))}
                
                {/* Copiar Link */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      custom={shareLinks.length}
                      variants={shareIconVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      onClick={copyToClipboard}
                      className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-200"
                      aria-label="Copiar link"
                    >
                      <Link size={18} weight="bold" />
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="text-xs">
                    Copiar link
                  </TooltipContent>
                </Tooltip>
                
                {/* Enviar por Email */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`}
                      custom={shareLinks.length + 1}
                      variants={shareIconVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-200"
                      aria-label="Enviar por email"
                    >
                      <Envelope size={18} weight="bold" />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="text-xs">
                    Enviar por email
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
};
