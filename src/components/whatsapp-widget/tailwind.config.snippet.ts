/**
 * Adicione este trecho ao seu tailwind.config.ts
 * dentro de theme.extend
 */

// Em theme.extend.keyframes, adicione:
const keyframes = {
  "slide-up": {
    "0%": {
      opacity: "0",
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
};

// Em theme.extend.animation, adicione:
const animation = {
  "slide-up": "slide-up 0.3s ease-out",
};

export { keyframes, animation };
