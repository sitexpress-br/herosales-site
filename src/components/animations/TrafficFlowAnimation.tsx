import { motion } from "framer-motion";
import { 
  GoogleLogo, 
  MetaLogo, 
  LinkedinLogo, 
  Briefcase, 
  Scales, 
  User, 
  Gavel,
  Buildings
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

// Floating icons configuration (removed fixed x positions)
const floatingIcons = [
  { Icon: Briefcase, delay: 0 },
  { Icon: Scales, delay: 0.5 },
  { Icon: User, delay: 1 },
  { Icon: Gavel, delay: 1.5 },
];

// Platform cards configuration
const platforms = [
  { 
    name: "Google Ads", 
    Icon: GoogleLogo, 
    colors: "from-[#4285F4] via-[#EA4335] to-[#FBBC05]",
    bgColor: "bg-white"
  },
  { 
    name: "Meta Ads", 
    Icon: MetaLogo, 
    colors: "from-[#0668E1] to-[#0084FF]",
    bgColor: "bg-gradient-to-br from-[#0668E1] to-[#0084FF]"
  },
  { 
    name: "LinkedIn Ads", 
    Icon: LinkedinLogo, 
    colors: "from-[#0A66C2] to-[#0A66C2]",
    bgColor: "bg-[#0A66C2]"
  },
];

// Particle configuration with path indices
const particles = [
  { id: 1, pathIndex: 0, delay: 0 },
  { id: 2, pathIndex: 0, delay: 1.5 },
  { id: 3, pathIndex: 1, delay: 0.5 },
  { id: 4, pathIndex: 1, delay: 2 },
  { id: 5, pathIndex: 2, delay: 1 },
  { id: 6, pathIndex: 2, delay: 2.5 },
];

// Particle paths matching SVG coordinates (percentage-based)
const particlePaths = [
  { startX: 20, endX: 50 }, // Left path (Google)
  { startX: 50, endX: 50 }, // Center path (Meta)
  { startX: 80, endX: 50 }, // Right path (LinkedIn)
];

export const TrafficFlowAnimation = () => {
  return (
    <div className="hidden lg:flex relative items-center justify-center w-full h-full min-h-[500px]">
      {/* Main container with flex column layout */}
      <div className="relative w-full h-[700px] flex flex-col justify-between py-10">
        
        {/* Top: Floating Icons - Centered with flexbox */}
        <div className="flex justify-center items-center gap-4 z-30">
          {floatingIcons.map(({ Icon, delay }, index) => (
            <motion.div
              key={index}
              className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ 
                y: [0, -8, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }
              }}
            >
              <Icon size={32} weight="duotone" className="text-primary" />
            </motion.div>
          ))}
        </div>

        {/* Center: Dashboard Panel + SVG Flow + Particles */}
        <div className="flex-1 relative flex items-center justify-center">
          
          {/* Central Dashboard Panel */}
          <motion.div 
            className="relative z-20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="glass-gold rounded-2xl p-10 border border-primary/30 min-w-[380px]"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(23, 161, 146, 0.3)",
                  "0 0 50px rgba(23, 161, 146, 0.5)",
                  "0 0 30px rgba(23, 161, 146, 0.3)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Top label */}
              <div className="text-center mb-4">
                <span className="text-xs uppercase tracking-wider text-white/60 font-sans">
                  Sua Clínica
                </span>
              </div>

              {/* Central Icon */}
              <div className="flex justify-center mb-5">
                <motion.div 
                  className="w-28 h-28 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Buildings size={60} weight="duotone" className="text-primary" />
                </motion.div>
              </div>

              {/* Bottom Badge */}
              <div className="text-center">
                <Badge variant="gold" className="text-xs px-3 py-1">
                  Leads Qualificados
                </Badge>
              </div>

              {/* Animated counter */}
              <motion.div 
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.span
                  className="text-4xl font-bold text-primary font-sans"
                  animate={{ 
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  +340%
                </motion.span>
                <p className="text-xs text-white/60 mt-1">em consultas</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* SVG Flow Lines - Using percentage-based viewBox */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Gradient for flow lines */}
              <linearGradient id="flowGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="hsl(174 74% 36%)" stopOpacity="0.8" />
                <stop offset="50%" stopColor="hsl(174 74% 36%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(174 74% 36%)" stopOpacity="0.1" />
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Left path (Google → Center) */}
            <motion.path
              d="M 20 88 Q 20 70 50 55"
              fill="none"
              stroke="url(#flowGradient)"
              strokeWidth="1"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            
            {/* Center path (Meta → Center) */}
            <motion.path
              d="M 50 88 L 50 55"
              fill="none"
              stroke="url(#flowGradient)"
              strokeWidth="1"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            
            {/* Right path (LinkedIn → Center) */}
            <motion.path
              d="M 80 88 Q 80 70 50 55"
              fill="none"
              stroke="url(#flowGradient)"
              strokeWidth="1"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </svg>

          {/* Animated Particles - Synchronized with paths */}
          {particles.map((particle) => {
            const path = particlePaths[particle.pathIndex];
            return (
              <motion.div
                key={particle.id}
                className="absolute w-4 h-4 rounded-full bg-primary z-30"
                style={{
                  left: `${path.startX}%`,
                  bottom: "12%",
                  boxShadow: "0 0 8px rgba(23, 161, 146, 0.8)",
                }}
                animate={{
                  bottom: ["12%", "45%"],
                  left: [`${path.startX}%`, `${path.endX}%`],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Bottom: Platform Cards - Centered with flexbox */}
        <div className="flex justify-center items-center gap-4 z-20">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              className="relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
            >
              <motion.div
                className={`
                  w-28 h-28 rounded-xl flex flex-col items-center justify-center gap-2
                  backdrop-blur-sm border border-white/20 cursor-pointer
                  ${platform.name === "Google Ads" ? "bg-white" : platform.bgColor}
                `}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(23, 161, 146, 0.5)",
                }}
                transition={{ duration: 0.2 }}
              >
                <platform.Icon 
                  size={44}
                  weight="fill" 
                  className={platform.name === "Google Ads" ? "text-[#4285F4]" : "text-white"}
                />
                <span className={`text-xs font-sans font-medium ${platform.name === "Google Ads" ? "text-gray-700" : "text-white"}`}>
                  {platform.name.split(" ")[0]}
                </span>
              </motion.div>

              {/* Platform glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-xl opacity-0"
                style={{
                  background: `linear-gradient(135deg, ${platform.colors})`,
                  filter: "blur(8px)",
                  zIndex: -1,
                }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-8 w-4 h-4 rounded-full bg-primary/40 animate-pulse" />
        <div className="absolute top-1/3 right-12 w-3 h-3 rounded-full bg-primary/30 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-1/3 left-16 w-2 h-2 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </div>
  );
};
