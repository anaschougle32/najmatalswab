import { useState } from "react";
import { Building2, Shield, Volume2, Cpu, CheckCircle2, ChevronRight, X } from "lucide-react";
import { flagshipChuteDetails, company } from "@/content/company";
import { Button } from "@/components/ui/button";

import chute1 from "@/assets/chute-1.jpg";
import chute2 from "@/assets/chute-2.avif";
import chute3 from "@/assets/chute-3.jpg";
import chute4 from "@/assets/chute-4.webp";
import serviceChute from "@/assets/service-chute.jpg";

const chutePhotos = [
  { src: chute1, title: "Chute Tube Riser System", desc: "Telescopic stainless steel cylindrical riser section with clamp joints" },
  { src: chute2, title: "Intake Door Interface", desc: "Bottom-hinged intake door with integrated indicator lamp and electrical interlock" },
  { src: chute3, title: "Installed Chute Assembly", desc: "Heavy-duty multistory vertical waste disposal installation" },
  { src: chute4, title: "Offset Discharge Terminal", desc: "Impact-reducing offset bend feeding directly into compactor units" },
  { src: serviceChute, title: "Hotel Linen Chute Installation", desc: "Smooth internal weld finish preventing damage to soiled laundry linens" },
];

export function ChuteSystemsSection() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  return (
    <section id="chutes" className="scroll-mt-20 border-t border-border bg-background py-16 md:py-24">
      <div className="shell container-padding">
        {/* Flagship Banner */}
        <div className="rounded-sm border-2 border-primary bg-primary/5 p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                <Building2 className="h-3.5 w-3.5" />
                <span>Flagship Product · Slide 08</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl lg:text-5xl">
                {flagshipChuteDetails.headline}
              </h2>
              <p className="mt-3 text-base font-medium text-foreground sm:text-lg">
                Equipping around <span className="font-bold text-accent">{flagshipChuteDetails.stat}</span> of the UAE's prestigious buildings, including the landmark <span className="font-bold text-primary">{flagshipChuteDetails.keyProject}</span>.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our garbage and linen chutes are engineered and assembled with rigorous quality control at every stage — from individual component sourcing to on-site vertical erection. Approved by UAE Municipalities, Civil Defence, and leading international engineering consultants.
              </p>
            </div>

            {/* Quick Specs Callout */}
            <div className="rounded-sm border border-border bg-background p-6 shadow-xs lg:col-span-4">
              <p className="datum text-accent">Key Engineering Standard</p>
              <h3 className="mt-1 font-heading text-xl font-bold text-foreground">
                AISI 304 / 316 Grade
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Heavy-duty austenitic stainless steel ensuring lifetime corrosion resistance, hygienic sanitation, and complete fire containment.
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <Button asChild className="w-full">
                  <a href="#contact">Request Chute System Quotation</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {flagshipChuteDetails.features.map((feature, i) => (
            <div
              key={feature.title}
              className="rounded-sm border border-border bg-secondary/30 p-6 transition-all hover:border-foreground/40 hover:bg-secondary/60"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-xs bg-primary font-mono text-xs font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-base font-bold text-foreground">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Chute Photography Gallery */}
        <div className="mt-16">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="datum text-primary">Technical Documentation</p>
              <h3 className="mt-1 font-heading text-2xl font-bold text-foreground">
                Chute System Components & Site References
              </h3>
            </div>
            <span className="text-xs text-muted-foreground">5 Technical Photos</span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {chutePhotos.map((photo, index) => (
              <div
                key={photo.title}
                onClick={() => setActivePhoto(index)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-border bg-muted"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end text-white">
                  <p className="font-heading text-xs font-bold leading-tight">{photo.title}</p>
                  <p className="mt-1 text-[10px] text-white/80 line-clamp-2">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {activePhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl w-full overflow-hidden rounded-sm bg-background p-6 border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setActivePhoto(null)}
            >
              <X className="h-5 w-5" />
            </Button>
            <h3 className="font-heading text-xl font-bold text-primary">
              {chutePhotos[activePhoto].title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              {chutePhotos[activePhoto].desc}
            </p>
            <div className="mt-4 max-h-[70vh] overflow-hidden rounded-xs border border-border">
              <img
                src={chutePhotos[activePhoto].src}
                alt={chutePhotos[activePhoto].title}
                className="h-full w-full object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
