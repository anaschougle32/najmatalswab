import { useState, useMemo, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Eye, Grid3X3, Layers } from "lucide-react";
import { galleryGroups, GalleryGroup } from "@/content/gallery";
import { Button } from "@/components/ui/button";

interface FlatImage {
  src: string;
  alt: string;
  category: string;
  categoryId: string;
  index: number;
}

export function WorkShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Flatten all 48 images with their respective group metadata
  const allImages: FlatImage[] = useMemo(() => {
    const list: FlatImage[] = [];
    let idx = 0;
    galleryGroups.forEach((group) => {
      group.images.forEach((img) => {
        list.push({
          src: img.src,
          alt: img.alt,
          category: group.title,
          categoryId: group.id,
          index: idx++,
        });
      });
    });
    return list;
  }, []);

  // Filtered list based on active category tab
  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return allImages;
    return allImages.filter((img) => img.categoryId === selectedCategory);
  }, [allImages, selectedCategory]);

  // Total count
  const totalCount = allImages.length; // 48 images

  // Lightbox navigation
  const openLightbox = (image: FlatImage) => {
    const currentIdx = filteredImages.findIndex((item) => item.src === image.src);
    setLightboxIndex(currentIdx !== -1 ? currentIdx : 0);
  };

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % filteredImages.length));
    }
  }, [lightboxIndex, filteredImages.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! - 1 + filteredImages.length) % filteredImages.length));
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="capabilities" className="scroll-mt-20 border-t border-border bg-background py-16 md:py-24">
      <div className="shell container-padding">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              <p className="datum text-primary">Fabrication Scope & Portfolio</p>
            </div>
            <h2 className="mt-2 font-heading text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Capabilities
            </h2>
            <p className="mt-2 text-base text-foreground/80 font-medium">
              Complete visual directory featuring all {totalCount} project & capability references.
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:text-right">
            Every architectural and structural component fabricated from our 5,700 sq. ft. Umm Al Quwain workshop and installed on sites across Dubai and the UAE.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-border pb-6">
          <Button
            type="button"
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
            className="rounded-full text-xs font-medium"
          >
            All Works ({totalCount})
          </Button>

          {galleryGroups.map((group) => {
            const isSelected = selectedCategory === group.id;
            return (
              <Button
                key={group.id}
                type="button"
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(group.id)}
                className="rounded-full text-xs font-medium"
              >
                {group.title.split("&")[0].trim()} ({group.images.length})
              </Button>
            );
          })}
        </div>

        {/* Selected Category Info Banner (when a single category is active) */}
        {selectedCategory !== "all" && (
          <div className="mt-6 rounded-sm border border-border bg-secondary/30 p-5">
            {(() => {
              const currentGroup = galleryGroups.find((g) => g.id === selectedCategory);
              if (!currentGroup) return null;
              return (
                <div className="grid gap-4 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-4">
                    <span className="datum text-primary">Active Scope Category</span>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {currentGroup.title}
                    </h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {currentGroup.summary}
                    </p>
                  </div>
                  <div className="md:col-span-3 flex flex-wrap gap-1.5">
                    {currentGroup.scope.map((tag) => (
                      <span key={tag} className="rounded-xs bg-background border border-border px-2 py-0.5 text-[11px] text-foreground font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Gallery Grid displaying every single image */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {filteredImages.map((image) => (
            <div
              key={`${image.categoryId}-${image.src}`}
              onClick={() => openLightbox(image)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm border border-border bg-secondary shadow-2xs transition-all duration-300 hover:border-accent hover:shadow-md"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/85 via-black/25 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex justify-end">
                  <span className="rounded-full bg-white/20 p-1.5 text-white backdrop-blur-xs">
                    <Eye className="h-3.5 w-3.5" />
                  </span>
                </div>
                <div>
                  <span className="rounded-xs bg-accent/90 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white uppercase tracking-wider">
                    {image.category.split("&")[0].trim()}
                  </span>
                  <p className="mt-1 font-heading text-xs font-semibold text-white line-clamp-1">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Scope Breakdown (Structured below the gallery) */}
        <div className="mt-16 border-t border-border pt-12">
          <p className="datum text-primary">Technical Classification</p>
          <h3 className="mt-1 font-heading text-2xl font-bold uppercase text-foreground">
            Complete Scope of Works Breakdown
          </h3>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryGroups.map((group, idx) => (
              <div
                key={group.id}
                className="rounded-sm border border-border bg-background p-5 transition-colors hover:border-foreground/30"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground font-semibold">
                    {group.images.length} photos
                  </span>
                </div>
                <h4 className="mt-3 font-heading text-base font-bold text-foreground">
                  {group.title}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
                  {group.summary}
                </p>
                <ul className="mt-3 border-t border-border pt-2 text-[11px] text-muted-foreground space-y-1">
                  {group.scope.map((item) => (
                    <li key={item} className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xs"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white hover:bg-white/20"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Prev Button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          {/* Next Button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Image & Caption Container */}
          <div
            className="relative flex max-h-[90vh] max-w-5xl flex-col items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-h-[75vh] w-auto max-w-full rounded-xs object-contain shadow-2xl"
            />

            <div className="mt-4 text-center text-white">
              <span className="rounded-full bg-accent/80 px-3 py-1 font-mono text-xs font-semibold uppercase">
                {filteredImages[lightboxIndex].category}
              </span>
              <p className="mt-2 font-heading text-sm sm:text-base font-medium">
                {filteredImages[lightboxIndex].alt}
              </p>
              <p className="mt-1 font-mono text-xs text-white/60">
                Image {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
