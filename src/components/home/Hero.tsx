import { ArrowRight, Phone, MapPin, Building2, ShieldCheck, Wrench, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/content/company";
import heroSlideExact from "@/assets/hero-slide-exact.webp";

export function Hero() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section className="relative bg-white pt-16 lg:pt-20 border-b border-border">
      {/* Hidden SEO & Screen Reader Accessibility */}
      <h1 className="sr-only">
        Najmat Alswab Technical Services L.L.C. | Steel Products Installation & Maintenance | Dubai, UAE
      </h1>

      {/* Main Exact Hero Slide Presentation */}
      <div className="shell container-padding py-4 md:py-6">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm border border-border/60 bg-white shadow-lg">
          {/* Exact Slide Image */}
          <img
            src={heroSlideExact}
            alt="Najmat Alswab Technical Services L.L.C - Steel Products Installation & Maintenance Dubai UAE"
            className="h-full w-full object-contain md:object-cover"
            loading="eager"
          />

          {/* Interactive Clickable Hotspots over the 3 Service Pillars */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left pillar: Steel Products */}
            <a
              href="#capabilities"
              onClick={scrollTo("capabilities")}
              className="pointer-events-auto absolute left-[5%] bottom-[5%] w-[12%] h-[16%] cursor-pointer rounded-xs transition-colors hover:bg-accent/10 focus:outline-hidden"
              title="Explore Steel Products & Capabilities"
              aria-label="Explore Steel Products"
            />

            {/* Middle pillar: Installation */}
            <a
              href="#capabilities"
              onClick={scrollTo("capabilities")}
              className="pointer-events-auto absolute left-[18%] bottom-[5%] w-[12%] h-[16%] cursor-pointer rounded-xs transition-colors hover:bg-accent/10 focus:outline-hidden"
              title="Explore Installation Services"
              aria-label="Explore Installation"
            />

            {/* Right pillar: Maintenance */}
            <a
              href="#about"
              onClick={scrollTo("about")}
              className="pointer-events-auto absolute left-[31%] bottom-[5%] w-[12%] h-[16%] cursor-pointer rounded-xs transition-colors hover:bg-accent/10 focus:outline-hidden"
              title="Explore Technical Maintenance Scope"
              aria-label="Explore Maintenance"
            />

            {/* Bottom-right corner: Dubai UAE */}
            <a
              href="#contact"
              onClick={scrollTo("contact")}
              className="pointer-events-auto absolute right-0 bottom-0 w-[25%] h-[14%] cursor-pointer transition-colors hover:bg-white/10 focus:outline-hidden"
              title="Contact our Dubai, UAE office"
              aria-label="Contact Dubai Office"
            />
          </div>
        </div>

        {/* Floating Quick Action & Procurement Strip */}
        <div className="mt-4 rounded-sm border border-border bg-background p-4 shadow-xs md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
              <div className="flex items-center gap-1.5 font-medium text-foreground">
                <Building2 className="h-4 w-4 text-accent" />
                <span>Production Facility: <strong className="font-bold">{company.facilitySize}</strong> in Umm Al Quwain</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Licence No: <strong className="font-mono text-foreground">{company.licence}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Head Office: <strong className="text-foreground">{company.office}</strong></span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={company.phoneHref}
                className="flex items-center gap-1.5 font-mono text-xs font-semibold text-primary hover:text-accent transition-colors px-3 py-2 rounded-xs border border-border bg-secondary/50"
              >
                <Phone className="h-3.5 w-3.5 text-accent" />
                <span>{company.phone}</span>
              </a>

              <Button asChild size="sm" className="shadow-xs">
                <a href="#contact" onClick={scrollTo("contact")}>
                  Send Project Inquiry
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>

              <Button asChild size="sm" variant="outline">
                <a href="#capabilities" onClick={scrollTo("capabilities")}>
                  View Capabilities (48)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
