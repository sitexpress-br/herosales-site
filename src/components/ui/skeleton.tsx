import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gold" | "glass";
}

function Skeleton({ className, variant = "default", ...props }: SkeletonProps) {
  const variantClasses = {
    default: "bg-muted/20",
    gold: "bg-primary/20",
    glass: "bg-white/20 backdrop-blur-sm",
  };

  return (
    <div
      className={cn(
        "animate-pulse rounded-md",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

interface SkeletonCardProps {
  variant?: "default" | "gold" | "glass";
}

function SkeletonCard({ variant = "default" }: SkeletonCardProps) {
  return (
    <div className="space-y-3">
      <Skeleton variant={variant} className="h-48 w-full" />
      <Skeleton variant={variant} className="h-4 w-3/4" />
      <Skeleton variant={variant} className="h-4 w-1/2" />
    </div>
  );
}

interface SkeletonAvatarProps {
  size?: "sm" | "default" | "lg";
  variant?: "default" | "gold" | "glass";
}

function SkeletonAvatar({ size = "default", variant = "default" }: SkeletonAvatarProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-14 w-14",
  };

  return (
    <Skeleton
      variant={variant}
      className={cn("rounded-full", sizeClasses[size])}
    />
  );
}

interface SkeletonTextProps {
  lines?: number;
  variant?: "default" | "gold" | "glass";
}

function SkeletonText({ lines = 3, variant = "default" }: SkeletonTextProps) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant={variant}
          className={cn("h-4", i === lines - 1 ? "w-2/3" : "w-full")}
        />
      ))}
    </div>
  );
}

export { Skeleton, SkeletonCard, SkeletonAvatar, SkeletonText };
