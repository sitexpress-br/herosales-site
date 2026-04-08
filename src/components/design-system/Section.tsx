import React from "react";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="py-16 scroll-mt-24">
      <div className="mb-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">
          {title.split("_").map((word, i) => (
            <React.Fragment key={i}>
              {i > 0 && " "}
              {word.startsWith("*") && word.endsWith("*") ? (
                <em className="text-primary italic">{word.slice(1, -1)}</em>
              ) : (
                word
              )}
            </React.Fragment>
          ))}
        </h2>
        {description && (
          <p className="mt-2 text-muted-foreground max-w-2xl">{description}</p>
        )}
      </div>
      <div className="divider-gold mb-8" />
      {children}
    </section>
  );
}

interface SubsectionProps {
  title: string;
  children: React.ReactNode;
}

export function Subsection({ title, children }: SubsectionProps) {
  return (
    <div className="mb-10">
      <h3 className="font-display text-xl font-semibold text-secondary mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

interface ComponentGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}

export function ComponentGrid({ children, columns = 3 }: ComponentGridProps) {
  const colClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-6`}>{children}</div>
  );
}

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}

export function ComponentCard({ title, children, dark }: ComponentCardProps) {
  return (
    <div
      className={`rounded-lg border p-6 ${
        dark
          ? "bg-secondary text-secondary-foreground"
          : "bg-card text-card-foreground"
      }`}
    >
      <h4 className="font-medium text-sm mb-4 opacity-70">{title}</h4>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </div>
  );
}
