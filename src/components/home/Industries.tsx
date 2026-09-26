import { industries } from "@/content/company";

export function Industries() {
  return (
    <section className="section-padding" id="industries">
      <div className="shell container-padding grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-heading text-2xl md:text-3xl">Where our work is installed</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            The sectors we fabricate for, as set out in our company profile.
          </p>
        </div>
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8">
          {industries.map((industry, index) => (
            <li
              key={industry}
              className="flex items-baseline gap-4 border-b border-border py-4 text-base"
            >
              <span className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
