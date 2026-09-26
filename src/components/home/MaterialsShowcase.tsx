import { finishes, materials } from "@/content/company";
import railing from "@/assets/railing-2.jpg";
import gate from "@/assets/gate-5.jpg";
import bench from "@/assets/bench-2.jpg";
import canopy from "@/assets/canopy-5.jpg";

const finishImages = [railing, gate, bench, canopy, railing, gate, bench, canopy];

export function MaterialsShowcase() {
  return (
    <section id="materials" className="scroll-mt-16 bg-secondary">
      <div className="shell container-padding section-padding">
        <div className="section-heading">
          <div>
            <p className="datum text-primary">Material library</p>
            <h2 className="mt-3 font-heading text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">Materials & finishes</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
            Base metals and decorative treatments selected to suit the architectural element and its setting.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((material) => (
            <div key={material} className="flex min-h-24 items-end bg-background p-5 font-heading text-lg font-bold">{material}</div>
          ))}
          <div className="hidden bg-primary lg:block" aria-hidden="true" />
        </div>

        <div className="mt-20 border-t-2 border-foreground pt-7">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="datum text-primary">Electroplating & PVD coating</p>
              <h3 className="mt-3 font-heading text-3xl font-bold">A finish-led presentation, translated from our profile.</h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                These finish names are the options listed in the company profile. The circular crops show how finished metalwork changes with light and surrounding materials.
              </p>
            </div>
            <div className="finish-grid lg:col-span-8">
              {finishes.plating.map((finish, index) => (
                <figure key={finish} className="finish-sample">
                  <div className={`finish-disc finish-disc-${index + 1}`}>
                    <img src={finishImages[index]} alt="" className="h-full w-full object-cover mix-blend-overlay" />
                  </div>
                  <figcaption className="mt-3 text-center font-heading text-sm font-bold uppercase">{finish}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t-2 border-foreground pt-7 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="datum text-primary">Powder coating</p>
            <h3 className="mt-3 font-heading text-3xl font-bold">Colour matched to the application.</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:col-span-8">
            {finishes.coating.map((finish, index) => (
              <div key={finish} className={`powder-panel powder-panel-${index + 1}`}>
                <span className="font-heading text-xl font-bold uppercase">{finish}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
