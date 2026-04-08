import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border bg-background text-foreground ring-offset-background transition-all duration-200 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        gold: "border-primary/30 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary",
        glass: "bg-white/10 border-white/20 backdrop-blur-md text-white placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-white/50",
        filled: "border-0 bg-muted focus-visible:ring-2 focus-visible:ring-primary",
      },
      textareaSize: {
        default: "px-4 py-3 text-sm",
        sm: "px-3 py-2 text-xs min-h-[60px]",
        lg: "px-5 py-4 text-base min-h-[120px]",
      },
    },
    defaultVariants: {
      variant: "default",
      textareaSize: "default",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, textareaSize, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          textareaVariants({ variant, textareaSize }),
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
