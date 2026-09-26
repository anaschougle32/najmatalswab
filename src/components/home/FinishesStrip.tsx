import { Link } from "react-router-dom";
import { finishes } from "@/content/company";
import railing from "@/assets/railing-2.jpg";
import gate from "@/assets/gate-5.jpg";
import bench from "@/assets/bench-2.jpg";

const images = [
  { src: railing, alt: "Stainless-steel railing with glass infill panels" },
  { src: gate, alt: "Decorative metal gate with coated finish" },
  { src: bench, alt: "Wall-mounted stainless-steel bench" },
];

export function FinishesStrip() {
  return (
    <section className="section-padding bg-secondary" id="finishes">
      <div className="shell container-padding grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-heading text-2xl md:text-3xl">Finishes</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Metal is finished to suit the interior or facade it belongs to. We work with
            electroplating and PVD coating, and powder coating in standard RAL or custom colours.
          </p>

          <div className="mt-8">
            <p className="datum">Electroplating & PVD</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {finishes.plating.map((finish) => (
                <li key={finish} className="border border-border bg-background px-3 py-1 text-sm">
                  {finish}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <p className="datum">Powder coating</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {finishes.coating.map((finish) => (
                <li key={finish} className="border border-border bg-background px-3 py-1 text-sm">
                  {finish}
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/materials-finishes"
            className="mt-8 inline-block text-sm text-accent hover:underline"
          >
            Materials and finishes in detail
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2 lg:col-span-7 lg:gap-3">
          {images.map((image) => (
            <img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-40 w-full object-cover sm:h-64 lg:h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
