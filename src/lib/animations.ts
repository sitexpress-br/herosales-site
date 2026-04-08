import { Variants } from "framer-motion";

// ============================================
// Variantes de Animação - Framer Motion
// Sistema centralizado de animações reutilizáveis
// ============================================

// Fade In Up - Padrão para elementos gerais
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

// Fade In Down - Para elementos que vêm de cima
export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

// Container com Stagger - Para listas e grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Item do Stagger - Aplicar em cada filho
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

// Stagger mais rápido para cards
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// Slide In da Esquerda
export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

// Slide In da Direita
export const slideInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

// Scale In - Para cards e elementos de destaque
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

// Hover Card - Efeito de elevação
export const hoverCard = {
  rest: { 
    y: 0, 
    boxShadow: "0 4px 20px -4px rgba(23, 161, 146, 0.1)" 
  },
  hover: { 
    y: -8, 
    boxShadow: "0 20px 40px -15px rgba(23, 161, 146, 0.3)",
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    }
  }
};

// Hover Button - Para botões
export const hoverButton = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { 
      duration: 0.2, 
      ease: "easeOut" 
    }
  },
  tap: { 
    scale: 0.98 
  }
};

// Navbar Animation
export const navbarAnimation: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Menu Item Stagger
export const menuItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -10 
  },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

// Hero Text Animation
export const heroTextVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Badge Animation
export const badgeVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Icon Bounce
export const iconBounce: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

// Progress Bar Animation
export const progressBar: Variants = {
  hidden: { 
    width: "0%" 
  },
  visible: (percentage: number) => ({
    width: `${percentage}%`,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

// Section Reveal
export const sectionReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Viewport settings padrão
export const defaultViewport = {
  once: true,
  margin: "-100px"
};

// Viewport para elementos menores
export const smallViewport = {
  once: true,
  margin: "-50px"
};

// ============================================
// Floating Icons - Efeito de ícones flutuantes
// ============================================

// Imagem flutuante - cima esquerda
export const floatingIconLeft: Variants = {
  rest: {
    opacity: 0,
    x: 10,
    y: 20,
    rotate: 0,
    scale: 0.6
  },
  hover: {
    opacity: 0.85,
    x: -12,
    y: -25,
    rotate: -8,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      delay: 0.02
    }
  }
};

// Imagem flutuante - cima direita
export const floatingIconRight: Variants = {
  rest: {
    opacity: 0,
    x: -10,
    y: 20,
    rotate: 0,
    scale: 0.6
  },
  hover: {
    opacity: 0.85,
    x: 12,
    y: -25,
    rotate: 8,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
      delay: 0.06
    }
  }
};

// Card hover com ícones flutuantes
export const serviceCardHover: Variants = {
  rest: { 
    scale: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const }
  },
  hover: { 
    scale: 1.03, 
    y: -4,
    transition: { duration: 0.3, ease: "easeOut" as const }
  }
};

// ============================================
// Megamenu Animations - Variantes profissionais
// ============================================

// Megamenu Container - orquestra entrada dos filhos
export const megamenuContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Megamenu Featured Item - entrada com escala e fade
export const megamenuFeatured: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.96,
    y: 8
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

// Megamenu List Item - entrada vertical suave
export const megamenuItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 8
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.35, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  }
};

// Megamenu CTA - entrada com leve atraso
export const megamenuCta: Variants = {
  hidden: { 
    opacity: 0
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.3,
      delay: 0.25,
      ease: "easeOut"
    } 
  }
};
