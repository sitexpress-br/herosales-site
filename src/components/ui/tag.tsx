import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const tagVariants = cva(
  "inline-flex items-center gap-1 rounded-full text-xs font-medium transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
        gold: "bg-primary/10 text-primary border border-primary/20",
        navy: "bg-secondary text-secondary-foreground",
        outline: "border border-current bg-transparent",
        glass: "bg-white/10 text-white border border-white/20 backdrop-blur-sm",
        success: "bg-success/10 text-success border border-success/20",
        warning: "bg-warning/10 text-warning border border-warning/20",
        destructive: "bg-destructive/10 text-destructive border border-destructive/20",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        default: "px-2.5 py-1",
        lg: "px-3 py-1.5 text-sm",
      },
      interactive: {
        true: "cursor-pointer hover:opacity-80",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      interactive: false,
    },
  }
);

interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  onRemove?: () => void;
  icon?: React.ReactNode;
}

export function Tag({
  className,
  variant,
  size,
  interactive,
  onRemove,
  icon,
  children,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(tagVariants({ variant, size, interactive }), className)}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      )}
    </span>
  );
}

interface TagGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function TagGroup({ children, className }: TagGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>{children}</div>
  );
}
