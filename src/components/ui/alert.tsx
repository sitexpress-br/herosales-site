import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, Warning, Info } from "@phosphor-icons/react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive bg-destructive/10",
        success: "border-success/50 text-success dark:border-success [&>svg]:text-success bg-success/10",
        warning: "border-warning/50 text-warning dark:border-warning [&>svg]:text-warning-foreground bg-warning/10",
        info: "border-info/50 text-info dark:border-info [&>svg]:text-info bg-info/10",
        gold: "border-primary/50 text-primary dark:border-primary [&>svg]:text-primary bg-primary/10",
        glass: "glass border-white/20 text-white [&>svg]:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-display font-medium leading-none tracking-tight", className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  )
);
AlertDescription.displayName = "AlertDescription";

interface AlertWithIconProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive" | "success" | "warning" | "info" | "gold" | "glass";
  title?: string;
  description?: string;
}

const AlertWithIcon = React.forwardRef<HTMLDivElement, AlertWithIconProps>(
  ({ variant = "default", title, description, children, className, ...props }, ref) => {
    const icons = {
      default: <Info size={20} weight="fill" />,
      destructive: <XCircle size={20} weight="fill" />,
      success: <CheckCircle size={20} weight="fill" />,
      warning: <Warning size={20} weight="fill" />,
      info: <Info size={20} weight="fill" />,
      gold: <Info size={20} weight="fill" />,
      glass: <Info size={20} weight="fill" />,
    };

    return (
      <Alert ref={ref} variant={variant} className={className} {...props}>
        {icons[variant]}
        <div>
          {title && <AlertTitle>{title}</AlertTitle>}
          {description && <AlertDescription>{description}</AlertDescription>}
          {children}
        </div>
      </Alert>
    );
  }
);
AlertWithIcon.displayName = "AlertWithIcon";

export { Alert, AlertTitle, AlertDescription, AlertWithIcon };
