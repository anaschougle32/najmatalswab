import { useState } from "react";
import { Sparkles, Layers, ShieldCheck, Check, Maximize2, X, SlidersHorizontal } from "lucide-react";
import {
  electroplatingFinishes,
  powderCoatingDetails,
  rawMaterials,
  materialBadges,
  processes,
  FinishSwatch,
} from "@/content/company";
import { Button } from "@/components/ui/button";

export function FinishesSection() {
  const [selectedFinish, setSelectedFinish] = useState<FinishSwatch | null>(null);
  const [selectedRal, setSelectedRal] = useState(powderCoatingDetails.popularRalCodes[0]);

  return (
    <section id="finishes" className="scroll-mt-20 border-t border-border bg-secondary/50 py-16 md:py-24">
      <div className="shell container-padding">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              <p className="datum text-accent">Surface Engineering & Treatments</p>
            </div>
            <h2 className="mt-2 font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              FINISHES
            </h2>
            <p className="mt-2 text-lg font-medium text-foreground/90">
              Electro Plating and PVD Coating
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Directly translated from our technical company profile. Our Umm Al Quwain workshop coordinates
            high-performance surface finishing to meet rigorous architectural specifications.
          </p>
        </div>

        {/* 8 Authentic Finishes Grid - Recreated from Slide 7 */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-primary">
                Electro Plating & PVD Finish Samples
              </span>
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline">
              Click any swatch for high-resolution inspection
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-6">
            {electroplatingFinishes.map((finish) => (
              <div
                key={finish.id}
                onClick={() => setSelectedFinish(finish)}
                className="group relative cursor-pointer overflow-hidden rounded-sm border border-border bg-background shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                {/* Swatch Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  <img
                    src={finish.image}
                    alt={`${finish.name} metal finish swatch`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15" />
                  <div className="absolute right-2 top-2 rounded-full bg-black/40 p-1.5 text-white opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Swatch Label */}
                <div className="p-3.5 sm:p-4">
                  <h3 className="font-heading text-sm font-bold tracking-wide text-foreground uppercase sm:text-base">
                    {finish.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                    {finish.sheen}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Powder Coating Section - Recreated from Slide 7 */}
        <div className="mt-16 rounded-sm border border-border bg-background p-6 lg:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-accent" />
                <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-primary">
                  Powder Coating
                </h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Electrostatic architectural coating with superior UV, corrosion, and scratch resistance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-semibold text-secondary-foreground">
                RAL COLORS
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-semibold text-secondary-foreground">
                CUSTOM COLORS
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-center">
            {/* Color chips preview */}
            <div className="lg:col-span-8">
              <p className="datum mb-3">Architectural Powder Swatches</p>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {powderCoatingDetails.popularRalCodes.map((ral) => {
                  const isSelected = selectedRal.code === ral.code;
                  return (
                    <button
                      key={ral.code}
                      type="button"
                      onClick={() => setSelectedRal(ral)}
                      className={`flex flex-col items-start rounded-xs border p-2.5 text-left transition-all ${
                        isSelected
                          ? "border-accent bg-accent/5 ring-1 ring-accent"
                          : "border-border bg-secondary/30 hover:border-foreground/30 hover:bg-secondary/60"
                      }`}
                    >
                      <div className="flex w-full items-center justify-between">
                        <div
                          className="h-6 w-6 rounded-xs border border-black/20 shadow-xs"
                          style={{ backgroundColor: ral.hex }}
                        />
                        {isSelected && <Check className="h-3.5 w-3.5 text-accent" />}
                      </div>
                      <span className="mt-2 font-mono text-xs font-bold text-foreground">
                        {ral.code}
                      </span>
                      <span className="text-[11px] text-muted-foreground truncate w-full">
                        {ral.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Spec Detail Box */}
            <div className="rounded-sm border border-border bg-secondary/40 p-5 lg:col-span-4">
              <p className="datum">Active Specification</p>
              <div className="mt-3 flex items-center gap-3">
                <div
                  className="h-10 w-10 shrink-0 rounded-xs border border-border shadow-xs"
                  style={{ backgroundColor: selectedRal.hex }}
                />
                <div>
                  <h4 className="font-heading text-base font-bold text-foreground">
                    {selectedRal.code} — {selectedRal.name}
                  </h4>
                  <p className="font-mono text-xs text-muted-foreground">
                    Finish: {selectedRal.finish}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Applied to aluminium, galvanized steel, and mild-steel frames. Tested to withstand the UAE's high temperatures and saline marine exposure.
              </p>
            </div>
          </div>
        </div>

        {/* Materials Section - Recreated from Slide 6 */}
        <div className="mt-16 border-t border-border pt-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="datum text-accent">Slide 06 / Raw Materials Specification</p>
              <h3 className="mt-2 font-heading text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
                MATERIALS
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We use premium quality raw materials that ensure strength, precision and long lasting performance.
              </p>
            </div>
            {/* 4 Pillars from Slide 6 */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {materialBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="rounded-xs border border-border bg-background px-3 py-2 text-center"
                >
                  <ShieldCheck className="mx-auto h-4 w-4 text-accent" />
                  <p className="mt-1 font-heading text-xs font-bold uppercase text-foreground">
                    {badge.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {rawMaterials.map((mat) => (
              <div
                key={mat.name}
                className="rounded-sm border border-border bg-background p-4 transition-colors hover:border-foreground/40"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-heading text-base font-bold text-foreground">
                    {mat.name}
                  </h4>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {mat.grades}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {mat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Machinery Section - Recreated from Slide 5 */}
        <div className="mt-14 rounded-sm border border-border bg-graphite p-6 text-graphite-foreground lg:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-accent" />
                <p className="datum text-accent">Slide 05 / Fabrication Machinery</p>
              </div>
              <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-tight text-graphite-foreground sm:text-3xl">
                Workshop Machinery & Processing
              </h3>
            </div>
            <p className="font-mono text-xs text-graphite-foreground/70">
              5,700 sq. ft. Facility · Umm Al Quwain, UAE
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {processes.map((proc, index) => (
              <div
                key={proc.name}
                className="rounded-xs border border-graphite-foreground/15 bg-graphite-foreground/5 p-3 text-center transition-colors hover:bg-graphite-foreground/10"
              >
                <span className="font-mono text-[10px] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 font-heading text-sm font-bold uppercase text-graphite-foreground">
                  {proc.name}
                </p>
                <p className="mt-1 text-[11px] text-graphite-foreground/60">
                  {proc.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Zoom Modal for Selected Finish */}
      {selectedFinish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
          onClick={() => setSelectedFinish(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-2xl w-full overflow-hidden rounded-sm border border-border bg-background p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setSelectedFinish(null)}
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-accent">
                {selectedFinish.category}
              </span>
            </div>

            <h3 className="mt-2 font-heading text-2xl font-bold uppercase sm:text-3xl text-primary">
              {selectedFinish.name}
            </h3>

            <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-sm border border-border shadow-inner">
              <img
                src={selectedFinish.image}
                alt={`${selectedFinish.name} full swatch texture`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p className="text-foreground">{selectedFinish.description}</p>
              <div className="grid grid-cols-2 gap-4 border-t border-border pt-3">
                <div>
                  <span className="datum">Sheen & Reflection</span>
                  <p className="mt-0.5 font-medium text-foreground">{selectedFinish.sheen}</p>
                </div>
                <div>
                  <span className="datum">Recommended Use</span>
                  <p className="mt-0.5 text-xs text-muted-foreground">{selectedFinish.recommendedUse}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button asChild size="sm">
                <a href="#contact" onClick={() => setSelectedFinish(null)}>
                  Inquire about this finish
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
