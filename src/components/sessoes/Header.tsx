import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, CaretDown, CaretRight, WhatsappLogo } from "@phosphor-icons/react";
import { useIsMobile } from "@/hooks/use-mobile";
import { openWhatsAppPopup } from "@/hooks/useWhatsAppPopup";
const logo = "https://msgsndr-private.storage.googleapis.com/companyPhotos/0599742e-e4db-4132-b44e-f3efdf215411.png";
import { MegaMenuServices, MegaMenuBlog } from "@/components/megamenu";
type MenuItemRefs = {
  [key: string]: HTMLButtonElement | null;
};
const menuItems = [{
  label: "Serviços",
  href: "/servicos/sites-de-autoridade",
  hasMegaMenu: true
}, {
  label: "Projetos",
  href: "/projetos",
  hasMegaMenu: false
}, {
  label: "Blog",
  href: "/blog",
  hasMegaMenu: true
}, {
  label: "Contato",
  href: "/contato",
  hasMegaMenu: false
}];
const mobileServices = [{
  title: "Sites de Autoridade",
  href: "/servicos/sites-de-autoridade"
}, {
  title: "Email Corporativo",
  href: "/servicos/email-corporativo"
}, {
  title: "Gestão de Tráfego",
  href: "/servicos/gestao-de-trafego"
}, {
  title: "Google Meu Negócio",
  href: "/servicos/google-meu-negocio"
}, {
  title: "Blog + SEO",
  href: "/servicos/blog-seo-medico"
}, {
  title: "Identidade Visual",
  href: "/servicos/identidade-visual"
}];
const springTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 25
};
const megaMenuAnimation = {
  initial: {
    opacity: 0,
    y: -8
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -4
  },
  transition: {
    duration: 0.18,
    ease: [0.4, 0, 0.2, 1] as const
  }
};
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [arrowPosition, setArrowPosition] = useState<number>(0);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuItemRefs = useRef<MenuItemRefs>({});
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setIsServicesExpanded(false);

    // Se começa com "/", é uma rota - usar navigate
    if (href.startsWith("/")) {
      navigate(href);
      window.scrollTo(0, 0);
      return;
    }

    // Se começa com "#", é um hash - fazer scroll
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
  const handleMenuEnter = (label: string, hasMegaMenu: boolean) => {
    if (!hasMegaMenu) return;
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    setActiveMenu(label);

    // Calculate arrow position relative to the megamenu container
    const menuItem = menuItemRefs.current[label];
    if (menuItem) {
      const rect = menuItem.getBoundingClientRect();
      const megaMenuMaxWidth = 1400; // 1400px
      const windowWidth = window.innerWidth;

      // O megamenu usa no máximo 76rem, mas pode ser menor se a tela for pequena
      const actualMegaMenuWidth = Math.min(megaMenuMaxWidth, windowWidth - 32); // -32 para px-4
      const megaMenuLeft = Math.max(0, (windowWidth - actualMegaMenuWidth) / 2);

      // Calcular posição ideal da seta
      let arrowPos = rect.left + rect.width / 2 - megaMenuLeft;

      // Aplicar limites para garantir que a seta fique dentro do megamenu
      // Margem de 24px das bordas para não ficar colada no canto
      const minArrowPos = 24;
      const maxArrowPos = actualMegaMenuWidth - 24;
      arrowPos = Math.max(minArrowPos, Math.min(maxArrowPos, arrowPos));
      setArrowPosition(arrowPos);
    }
  };
  const handleMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };
  const handleMegaMenuEnter = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
  };
  const renderMegaMenuContent = () => {
    switch (activeMenu) {
      case "Serviços":
        return <MegaMenuServices onItemClick={handleNavigation} onClose={() => setActiveMenu(null)} />;
      case "Blog":
        return <MegaMenuBlog onItemClick={handleNavigation} />;
      default:
        return null;
    }
  };
  return <motion.header initial={{
    y: -20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1]
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "px-0" : "px-4 lg:px-6"}`}>
      {/* Wrapper que controla a largura */}
      <motion.div ref={headerRef} className={`mx-auto transition-all duration-300 ${isScrolled ? "mt-0" : "mt-4"}`} style={{
      maxWidth: "1400px"
    }}>
        {/* Container com glassmorphism */}
          <div className={`transition-all duration-300 ${isScrolled ? "rounded-[0px_0px_12px_12px] bg-secondary/80 backdrop-blur-2xl border-b border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.25)]" : "rounded-[20px] bg-transparent border border-transparent"}`}>
          <div className="px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.a href="/" className={`flex items-center gap-3 relative z-10 transition-all duration-300 ${isScrolled ? "bg-[#1a1535] rounded-[0px_0px_12px_12px] px-4 py-2 -mb-2" : "-mb-6"}`} whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
              <img src={logo} alt="Hero Sales" className="w-56 h-auto lg:w-64 lg:h-14 origin-left object-contain drop-shadow-lg" />
              </motion.a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item, index) => <motion.button key={item.label} ref={el => {
                menuItemRefs.current[item.label] = el;
              }} initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.15 + index * 0.04,
                duration: 0.35
              }} onClick={() => handleNavigation(item.href)} onMouseEnter={() => handleMenuEnter(item.label, item.hasMegaMenu)} onMouseLeave={handleMenuLeave} className={`relative px-3 py-1.5 rounded-lg text-white/80 hover:bg-primary hover:text-secondary transition-all duration-200 font-medium ${activeMenu === item.label ? "bg-primary text-secondary" : ""}`}>
                    {item.label}
                  </motion.button>)}
                
                {/* WhatsApp CTA Desktop */}
                <motion.button onClick={openWhatsAppPopup} initial={{
                opacity: 0,
                y: -10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.31,
                duration: 0.35
              }} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#075e54] text-white font-medium hover:bg-[#064d47] transition-all duration-200 ml-2" whileHover={{
                scale: 1.03,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }} whileTap={{
                scale: 0.97
              }}>
                  <svg className="w-5 h-5" viewBox="0 0 448 512" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  <span className="hidden xl:inline">​Fale conosco agora! </span>
                </motion.button>
              </nav>

              {/* Mobile Menu Button */}
              <motion.button className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} whileTap={{
              scale: 0.95
            }}>
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? <motion.div key="close" initial={{
                  scale: 0.8,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} exit={{
                  scale: 0.8,
                  opacity: 0
                }} transition={{
                  duration: 0.15
                }}>
                      <X size={28} weight="bold" />
                    </motion.div> : <motion.div key="menu" initial={{
                  scale: 0.8,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} exit={{
                  scale: 0.8,
                  opacity: 0
                }} transition={{
                  duration: 0.15
                }}>
                      <List size={28} weight="bold" />
                    </motion.div>}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && <motion.div initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: "auto"
          }} exit={{
            opacity: 0,
            height: 0
          }} transition={{
            duration: 0.3,
            ease: "easeInOut"
          }} className="lg:hidden overflow-hidden">
                <nav className="py-6 px-6 border-t border-white/10">
                  <div className="flex flex-col gap-2">
                    {menuItems.map((item, index) => item.label === "Serviços" ? <div key={item.label}>
                          <motion.button initial={{
                    opacity: 0,
                    x: -15
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: index * 0.03,
                    duration: 0.25
                  }} onClick={() => setIsServicesExpanded(!isServicesExpanded)} className="w-full flex items-center justify-between text-white/80 hover:text-primary hover:bg-white/5 transition-all font-medium text-left py-3 px-4 rounded-lg">
                            {item.label}
                            <CaretDown size={18} weight="bold" className={`transition-transform duration-200 ${isServicesExpanded ? "rotate-180" : ""}`} />
                          </motion.button>
                          
                          <AnimatePresence>
                            {isServicesExpanded && <motion.div initial={{
                      opacity: 0,
                      height: 0
                    }} animate={{
                      opacity: 1,
                      height: "auto"
                    }} exit={{
                      opacity: 0,
                      height: 0
                    }} transition={{
                      duration: 0.25,
                      ease: [0.4, 0, 0.2, 1]
                    }} className="overflow-hidden">
                                <div className="pl-4 pt-1 flex flex-col gap-1">
                                  {mobileServices.map((service, serviceIndex) => <motion.button key={service.href} initial={{
                          opacity: 0,
                          x: -10
                        }} animate={{
                          opacity: 1,
                          x: 0
                        }} transition={{
                          delay: serviceIndex * 0.03,
                          duration: 0.2
                        }} onClick={() => handleNavigation(service.href)} className="group flex items-center justify-between text-white/60 hover:text-primary hover:bg-white/5 transition-all font-medium text-left py-2.5 px-4 rounded-lg text-sm">
                                      {service.title}
                                      <CaretRight size={14} weight="bold" className="text-white/40 group-hover:text-primary transition-colors" />
                                    </motion.button>)}
                                </div>
                              </motion.div>}
                          </AnimatePresence>
                        </div> : <motion.button key={item.label} initial={{
                  opacity: 0,
                  x: -15
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.03,
                  duration: 0.25
                }} onClick={() => handleNavigation(item.href)} className="text-white/80 hover:text-primary hover:bg-white/5 transition-all font-medium text-left py-3 px-4 rounded-lg">
                          {item.label}
                        </motion.button>)}
                    
                    {/* WhatsApp CTA Mobile */}
                    <motion.button onClick={() => {
                  setIsMobileMenuOpen(false);
                  openWhatsAppPopup();
                }} initial={{
                  opacity: 0,
                  x: -15
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: 0.15,
                  duration: 0.25
                }} className="flex items-center justify-center gap-3 mt-4 py-3 px-4 rounded-lg bg-[#075e54] text-white font-medium hover:bg-[#064d47] transition-all" whileTap={{
                  scale: 0.97
                }}>
                      <svg className="w-6 h-6" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                      Fale pelo WhatsApp
                    </motion.button>
                  </div>
                </nav>
              </motion.div>}
          </AnimatePresence>
        </div>

        {/* Mega Menu Dropdown - Desktop Only */}
        <AnimatePresence>
          {activeMenu && !isMobile && <motion.div {...megaMenuAnimation} onMouseEnter={handleMegaMenuEnter} onMouseLeave={handleMenuLeave} className="absolute left-0 right-0 mt-2 mx-auto" style={{
          maxWidth: "1400px"
        }}>
              {/* Setinha indicativa */}
              <div className="absolute -top-[7px] z-10 w-4 h-4 bg-secondary/95 backdrop-blur-xl border-l border-t border-white/30" style={{
            left: arrowPosition,
            transform: 'translateX(-50%) rotate(45deg)'
          }} />
              <div className="bg-secondary/95 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden">
                {renderMegaMenuContent()}
              </div>
            </motion.div>}
        </AnimatePresence>
      </motion.div>
    </motion.header>;
};