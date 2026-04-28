import TrailFrame from "@/components/trail/TrailFrame";

interface TrailSectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  targetLabel?: string;
}

export const TrailSection = ({
  eyebrow = "Como Funciona",
  title = (
    <>
      Sua estratégia digital{" "}
      <em className="text-primary italic">em ação</em>
    </>
  ),
  subtitle = "Veja como captamos visitantes de múltiplos canais, processamos com inteligência e convertemos em clientes reais para sua clínica.",
  targetLabel,
}: TrailSectionProps = {}) => {
  return (
    <section className="relative w-full overflow-hidden bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center mb-12">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-secondary-foreground mb-4 font-medium">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <TrailFrame targetLabel={targetLabel} />
        <p className="text-muted-foreground text-sm mt-4 md:hidden text-center">
          ← Deslize para explorar →
        </p>
      </div>
    </section>);

};

export default TrailSection;