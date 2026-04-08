import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const dividerVariants = cva("", {
  variants: {
    variant: {
      default: "bg-border",
      gold: "bg-gradient-to-r from-transparent via-primary to-transparent",
      navy: "bg-gradient-to-r from-transparent via-secondary to-transparent",
      muted: "bg-muted",
      dashed: "border-dashed border-border",
    },
    orientation: {
      horizontal: "w-full",
      vertical: "h-full",
    },
  },
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
  },
});

interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string;
  label?: string;
}

export function Divider({ variant, orientation, className, label }: DividerProps) {
  if (label) {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        <div
          className={cn(
            dividerVariants({ variant, orientation }),
            orientation === "horizontal" ? "h-0.5 flex-1" : "w-0.5 flex-1"
          )}
        />
        <span className="text-sm text-muted-foreground font-medium px-2">
          {label}
        </span>
        <div
          className={cn(
            dividerVariants({ variant, orientation }),
            orientation === "horizontal" ? "h-0.5 flex-1" : "w-0.5 flex-1"
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        dividerVariants({ variant, orientation }),
        orientation === "horizontal" ? "h-0.5" : "w-0.5",
        variant === "dashed" && "h-0 border-t-2",
        className
      )}
    />
  );
}
