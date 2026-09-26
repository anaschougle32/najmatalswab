import { ArrowRight, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/content/company";
import heroImage from "@/assets/canopy-1.jpg";

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
    <section className="border-b border-border bg-background pt-16 lg:pt-20">
      <div className="shell grid lg:grid-cols-12 min-h-[calc(88vh-5rem)]">
        <div className="container-padding py-12 md:py-16 lg:col-span-5 lg:py-20 flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <p className="datum text-accent">Dubai · Umm Al Quwain, UAE</p>
          </div>

          <div className="mt-4">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground block">
              نجمة الصواب للخدمات الفنية ذ.م.م
            </span>
            <h1 className="mt-2 font-heading text-3xl leading-[1.08] sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
              Architectural metalwork,
              <br />
              <span className="text-foreground">fabricated in the UAE.</span>
            </h1>
          </div>

          <p className="mt-5 max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">
            {company.legalName} delivers custom stainless and mild-steel fabrication, PVD/electroplating finishes, balustrades, facades, and high-rise chute systems from our {company.facilitySize} production workshop in Umm Al Quwain.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="shadow-xs">
              <a href="#contact" onClick={scrollTo("contact")}>
                Send project inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#capabilities" onClick={scrollTo("capabilities")}>
                Explore Capabilities (48)
              </a>
            </Button>
          </div>

          {/* Quick Metrics Bar from PDF */}
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 text-left">
            <div>
              <dt className="datum text-[10px]">Production Facility</dt>
              <dd className="mt-1 font-heading text-base sm:text-lg font-bold text-foreground">
                {company.facilitySize}
              </dd>
            </div>
            <div>
              <dt className="datum text-[10px]">Flagship Chutes</dt>
              <dd className="mt-1 font-heading text-base sm:text-lg font-bold text-accent">
                70% Towers
              </dd>
            </div>
            <div>
              <dt className="datum text-[10px]">Commercial Licence</dt>
              <dd className="mt-1 font-mono text-base sm:text-lg font-bold text-foreground">
                {company.licence}
              </dd>
            </div>
          </dl>
        </div>

        <figure className="relative lg:col-span-7 bg-muted min-h-[300px] lg:min-h-full">
          <img
            src={heroImage}
            alt="Steel and glass architectural canopy structure engineered and installed by Najmat Alswab"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
          <figcaption className="datum absolute bottom-3 left-3 bg-background/90 backdrop-blur-xs px-3 py-1.5 rounded-xs border border-border/50 text-[11px]">
            Metal-glass entrance canopy — UAE Architectural Reference
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
