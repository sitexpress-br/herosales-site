import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "@phosphor-icons/react";

interface StepperProps {
  steps: { title: string; description?: string }[];
  currentStep: number;
  variant?: "default" | "gold" | "glass";
  orientation?: "horizontal" | "vertical";
}

export function Stepper({
  steps,
  currentStep,
  variant = "default",
  orientation = "horizontal",
}: StepperProps) {
  const variantClasses = {
    default: {
      active: "bg-primary text-primary-foreground border-primary",
      completed: "bg-primary text-primary-foreground border-primary",
      inactive: "bg-muted text-muted-foreground border-border",
      line: "bg-border",
      lineActive: "bg-primary",
    },
    gold: {
      active: "bg-gold-400 text-navy-900 border-gold-400 shadow-gold",
      completed: "bg-gold-400 text-navy-900 border-gold-400",
      inactive: "bg-muted text-muted-foreground border-border",
      line: "bg-border",
      lineActive: "bg-gold-400",
    },
    glass: {
      active: "bg-white/20 text-white border-white/40 backdrop-blur-md",
      completed: "bg-white/30 text-white border-white/50 backdrop-blur-md",
      inactive: "bg-white/5 text-white/50 border-white/10 backdrop-blur-md",
      line: "bg-white/10",
      lineActive: "bg-white/40",
    },
  };

  const classes = variantClasses[variant];

  if (orientation === "vertical") {
    return (
      <div className="flex flex-col gap-0">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-all duration-300",
                    isCompleted && classes.completed,
                    isActive && classes.active,
                    !isCompleted && !isActive && classes.inactive
                  )}
                >
                  {isCompleted ? (
                    <Check size={20} weight="bold" />
                  ) : (
                    index + 1
                  )}
                </div>
                {!isLast && (
                  <div
                    className={cn(
                      "w-0.5 flex-1 min-h-[40px] transition-all duration-300",
                      index < currentStep ? classes.lineActive : classes.line
                    )}
                  />
                )}
              </div>
              <div className="pb-8">
                <p
                  className={cn(
                    "font-display font-semibold",
                    isActive && "text-primary"
                  )}
                >
                  {step.title}
                </p>
                {step.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-all duration-300",
                  isCompleted && classes.completed,
                  isActive && classes.active,
                  !isCompleted && !isActive && classes.inactive
                )}
              >
                {isCompleted ? (
                  <Check size={20} weight="bold" />
                ) : (
                  index + 1
                )}
              </div>
              <div className="text-center">
                <p
                  className={cn(
                    "text-sm font-medium",
                    isActive && "text-primary"
                  )}
                >
                  {step.title}
                </p>
              </div>
            </div>
            {!isLast && (
              <div
                className={cn(
                  "h-0.5 flex-1 min-w-[40px] -mt-8 transition-all duration-300",
                  index < currentStep ? classes.lineActive : classes.line
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
