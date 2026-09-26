import { Link } from "react-router-dom";
import { solutionGroups } from "@/content/company";

export function SolutionGroups() {
  return (
    <section className="section-padding" id="solutions">
      <div className="shell container-padding">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-heading text-2xl md:text-3xl">What we fabricate and install</h2>
          <Link to="/capabilities" className="text-sm text-accent hover:underline">
            Full capability detail
          </Link>
        </div>

        <dl className="mt-10 divide-y divide-border border-y border-border">
          {solutionGroups.map((group) => (
            <div key={group.id} className="grid gap-4 py-7 md:grid-cols-12">
              <dt className="font-heading text-lg md:col-span-4 md:text-xl">{group.title}</dt>
              <dd className="md:col-span-8">
                <p className="text-sm leading-relaxed text-muted-foreground">{group.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
