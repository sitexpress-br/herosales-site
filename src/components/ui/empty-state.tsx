import * as React from "react";
import { cn } from "@/lib/utils";
import { Package, MagnifyingGlass, FolderOpen } from "@phosphor-icons/react";
import { Button } from "./button";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  variant?: "default" | "gold" | "glass";
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  variant = "default",
  className,
}: EmptyStateProps) {
  const variantClasses = {
    default: "text-muted-foreground",
    gold: "text-primary/70",
    glass: "text-white/70",
  };

  const iconClasses = {
    default: "text-muted-foreground/50",
    gold: "text-primary/30",
    glass: "text-white/30",
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-16 px-4 text-center",
        variantClasses[variant],
        className
      )}
    >
      <div className={cn("mb-4", iconClasses[variant])}>
        {icon || <Package size={64} weight="thin" />}
      </div>
      <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-sm max-w-md mb-6">{description}</p>
      )}
      {action && (
        <Button
          variant={variant === "glass" ? "glass" : variant === "gold" ? "gold" : "default"}
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      )}
    </div>
  );
}

// Preset empty states
export function EmptyStateNoData(props: Omit<EmptyStateProps, "icon" | "title">) {
  return (
    <EmptyState
      icon={<Package size={64} weight="thin" />}
      title="Nenhum dado encontrado"
      {...props}
    />
  );
}

export function EmptyStateNoResults(props: Omit<EmptyStateProps, "icon" | "title">) {
  return (
    <EmptyState
      icon={<MagnifyingGlass size={64} weight="thin" />}
      title="Nenhum resultado"
      description="Tente ajustar os filtros ou termos de busca."
      {...props}
    />
  );
}

export function EmptyStateNoFiles(props: Omit<EmptyStateProps, "icon" | "title">) {
  return (
    <EmptyState
      icon={<FolderOpen size={64} weight="thin" />}
      title="Pasta vazia"
      description="Nenhum arquivo nesta pasta ainda."
      {...props}
    />
  );
}
