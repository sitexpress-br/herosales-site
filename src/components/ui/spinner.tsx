import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "default" | "lg" | "xl";
  variant?: "default" | "gold" | "white";
  className?: string;
}

export function Spinner({ size = "default", variant = "default", className }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const variantClasses = {
    default: "text-primary",
    gold: "text-gold-400",
    white: "text-white",
  };

  return (
    <svg
      className={cn(
        "animate-spin",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

interface SpinnerDotsProps {
  size?: "sm" | "default" | "lg";
  variant?: "default" | "gold" | "white";
  className?: string;
}

export function SpinnerDots({ size = "default", variant = "default", className }: SpinnerDotsProps) {
  const sizeClasses = {
    sm: "h-1 w-1",
    default: "h-2 w-2",
    lg: "h-3 w-3",
  };

  const variantClasses = {
    default: "bg-primary",
    gold: "bg-gold-400",
    white: "bg-white",
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            "rounded-full animate-bounce",
            sizeClasses[size],
            variantClasses[variant]
          )}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
}

interface SpinnerRingProps {
  size?: "sm" | "default" | "lg" | "xl";
  variant?: "default" | "gold" | "white";
  className?: string;
}

export function SpinnerRing({ size = "default", variant = "default", className }: SpinnerRingProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    default: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
    xl: "h-16 w-16 border-4",
  };

  const variantClasses = {
    default: "border-primary/20 border-t-primary",
    gold: "border-gold-400/20 border-t-gold-400",
    white: "border-white/20 border-t-white",
  };

  return (
    <div
      className={cn(
        "rounded-full animate-spin",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    />
  );
}
