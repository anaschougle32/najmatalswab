interface PageHeaderProps {
  title: string;
  intro: string;
}

export function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="shell container-padding py-12 md:py-20">
        <h1 className="font-heading text-3xl md:text-5xl text-primary max-w-3xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}
