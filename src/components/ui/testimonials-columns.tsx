import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 15,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`relative ${className || ""}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={`${setIndex}-${i}`}
                className="rounded-xl bg-secondary p-6 border border-primary/10 shadow-navy"
              >
                <p className="text-secondary-foreground/90 leading-relaxed text-sm">
                  "{text}"
                </p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-primary/10">
                  <img
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-secondary-foreground text-sm">
                      {name}
                    </p>
                    <p className="text-xs text-primary">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
