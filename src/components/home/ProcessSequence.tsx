import { processes, materials } from "@/content/company";
import machineImage from "@/assets/staircase-3.webp";

export function ProcessSequence() {
  return (
    <section className="bg-graphite text-graphite-foreground">
      <div className="shell grid lg:grid-cols-12">
        <figure className="lg:col-span-5">
          <img
            src={machineImage}
            alt="Fabricated steel staircase structure with welded stringers"
            className="h-64 w-full object-cover sm:h-80 lg:h-full"
            loading="lazy"
          />
        </figure>

        <div className="container-padding py-14 md:py-20 lg:col-span-7">
          <p className="datum text-graphite-foreground/60">Material to installed detail</p>
          <h2 className="mt-4 font-heading text-2xl md:text-3xl">
            The processes available in our facility
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-graphite-foreground/70">
            Sheet and section are cut, formed, joined and finished in-house, then installed on site
            by our own teams.
          </p>

          <ul className="mt-10 divide-y divide-graphite-foreground/15 border-y border-graphite-foreground/15">
            {processes.map((process) => (
              <li key={process.name} className="flex items-baseline justify-between gap-4 py-3">
                <span className="font-heading text-base md:text-lg">{process.name}</span>
                <span className="datum text-graphite-foreground/60">{process.note}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="datum text-graphite-foreground/60">Materials worked</p>
            <p className="mt-3 text-sm text-graphite-foreground/80">{materials.join(" · ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
