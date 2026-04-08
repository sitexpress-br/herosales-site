import { motion } from "framer-motion";
import { fadeInDown, defaultViewport } from "@/lib/animations";

// Import client logos
import logoKenner from "@/assets/clients/logos/logo-kenner-hogger.avif";
import logoSousa from "@/assets/clients/logos/logo-sousa.avif";
import logoSouzaMartins from "@/assets/clients/logos/logo-souza-martins.avif";
import logoFerreira from "@/assets/clients/logos/logo-ferreira.avif";
import logoIsaac from "@/assets/clients/logos/logo-isaac.avif";
import logoColorido from "@/assets/clients/logos/logo-colorido.avif";
import logoHito from "@/assets/clients/logos/logo-hitoadvocacia.avif";
import logoMaikReis from "@/assets/clients/logos/logo-maik-reis.avif";
import logoAthena from "@/assets/clients/logos/logo-athena.avif";

const clientLogos = [
  { name: "Kenner Hogger", logo: logoKenner },
  { name: "Clínica Sousa", logo: logoSousa },
  { name: "Clínica Souza Martins", logo: logoSouzaMartins },
  { name: "Clínica Ferreira", logo: logoFerreira },
  { name: "Clínica Isaac", logo: logoIsaac },
  { name: "Clínica Colorida", logo: logoColorido },
  { name: "Clínica Hito", logo: logoHito },
  { name: "Maik Reis", logo: logoMaikReis },
  { name: "Clínica Athena", logo: logoAthena },
];

export const ClientLogos = () => {
  // Duplicar logos para criar efeito infinito
  const duplicatedLogos = [...clientLogos, ...clientLogos];
  
  return (
    <motion.section
      id="clientes"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeInDown}
      className="bg-background overflow-hidden overflow-x-clip md:py-[20px] py-[20px]"
    >
      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Logos */}
        <div className="flex animate-scroll md:animate-scroll-desktop">
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 mx-8 group">
              <div className="w-32 h-16 rounded-lg border border-secondary/20 bg-white/5 flex items-center justify-center p-2 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/5 group-hover:shadow-gold">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
