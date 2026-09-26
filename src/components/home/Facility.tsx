import { Building, MapPin, ShieldCheck, Factory } from "lucide-react";
import { company, industries } from "@/content/company";
import factoryImage from "@/assets/Steel-Structure-Production-Factory.webp";

export function Facility() {
  return (
    <section className="border-t border-border bg-secondary/40 py-16 md:py-24" id="facility">
      <div className="shell container-padding">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <figure className="lg:col-span-6 relative overflow-hidden rounded-sm border border-border bg-background shadow-xs">
            <img
              src={factoryImage}
              alt="Najmat Alswab 5,700 sq. ft. fabrication facility in Umm Al Quwain, UAE"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="datum absolute bottom-3 left-3 bg-black/80 text-white backdrop-blur-xs px-3 py-1.5 rounded-xs border border-white/10 text-[11px]">
              Production Facility Area — 5,700 SQFT · Umm Al Quwain
            </figcaption>
          </figure>

          <div className="lg:col-span-6">
            <div className="flex items-center gap-2">
              <Factory className="h-4 w-4 text-accent" />
              <p className="datum text-accent">Workshop Operations · Slide 02</p>
            </div>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
              Umm Al Quwain Production Facility
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Directly based in Dubai, UAE with our primary production workshop operating across <span className="font-semibold text-foreground">{company.facilitySize}</span> in Umm Al Quwain. By maintaining all fabrication in-house, architectural drawings, CNC forming, shearing, TIG/MIG welding, and final finishing remain under direct engineering control.
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xs border border-border bg-background p-3.5">
                <dt className="datum text-muted-foreground">Production Floor</dt>
                <dd className="mt-1 font-heading text-sm font-bold text-foreground">
                  {company.facilitySize}
                </dd>
              </div>
              <div className="rounded-xs border border-border bg-background p-3.5">
                <dt className="datum text-muted-foreground">Location</dt>
                <dd className="mt-1 font-heading text-sm font-bold text-foreground">
                  Umm Al Quwain, UAE
                </dd>
              </div>
              <div className="rounded-xs border border-border bg-background p-3.5">
                <dt className="datum text-muted-foreground">Commercial Licence</dt>
                <dd className="mt-1 font-mono text-sm font-bold text-foreground">
                  {company.licence}
                </dd>
              </div>
              <div className="rounded-xs border border-border bg-background p-3.5">
                <dt className="datum text-muted-foreground">Dubai Chamber</dt>
                <dd className="mt-1 font-mono text-sm font-bold text-foreground">
                  {company.chamber}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
