import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md border bg-background text-foreground ring-offset-background transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: 
          "border-input focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        gold:
          "border-primary/30 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary",
        glass:
          "bg-white/10 border-white/20 backdrop-blur-md text-white placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-white/50",
        "glass-dark":
          "bg-secondary/20 border-secondary/30 backdrop-blur-md focus-visible:ring-2 focus-visible:ring-primary",
        underline:
          "border-0 border-b-2 border-border rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary",
        filled:
          "border-0 bg-muted focus-visible:ring-2 focus-visible:ring-primary",
      },
      inputSize: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 px-3 py-1 text-xs",
        lg: "h-12 px-5 py-3 text-base",
        xl: "h-14 px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: boolean;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, inputSize, leftIcon, rightIcon, error, helperText, ...props }, ref) => {
    const inputElement = (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, inputSize }),
          leftIcon && "pl-10",
          rightIcon && "pr-10",
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        ref={ref}
        {...props}
      />
    );

    if (leftIcon || rightIcon || helperText) {
      return (
        <div className="relative w-full">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-foreground/70 pointer-events-none">
              {leftIcon}
            </div>
          )}
          {inputElement}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-foreground/70 pointer-events-none">
              {rightIcon}
            </div>
          )}
          {helperText && (
            <p className={cn("mt-1 text-xs", error ? "text-destructive" : "text-muted-foreground")}>
              {helperText}
            </p>
          )}
        </div>
      );
    }

    return inputElement;
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
