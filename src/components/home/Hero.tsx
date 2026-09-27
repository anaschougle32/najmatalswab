import { ArrowRight, Phone, MapPin, Building2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/content/company";
import factoryImage from "@/assets/Steel-Structure-Production-Factory.webp";
import logoImage from "@/assets/logo-clean.png";

// Custom vector icons matching the reference slide
function IBeamIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 16 L38 8 L52 13 L26 22 Z" />
      <path d="M12 16 L12 21 L26 27 L26 22 Z" />
      <path d="M26 22 L26 42 L32 40 L32 20 Z" />
      <path d="M38 8 L38 13 L52 18 L52 13 Z" />
      <path d="M12 43 L38 35 L52 40 L26 49 Z" />
      <path d="M12 43 L12 48 L26 54 L26 49 Z" />
      <path d="M38 35 L38 40 L52 45 L52 40 Z" />
    </svg>
  );
}

function InstallationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="15" strokeDasharray="3 3" />
      <path d="M32 9v5M32 50v5M9 32h5M50 32h5M15.5 15.5l3.8 3.8M44.7 44.7l3.8 3.8M15.5 48.5l3.8-3.8M44.7 19.3l3.8-3.8" />
      <path d="M24 33l6 6 12-12" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MaintenanceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="14" />
      <path d="M32 10v5M32 49v5M10 32h5M49 32h5M16.5 16.5l3.8 3.8M43.7 43.7l3.8 3.8M16.5 47.5l3.8-3.8M43.7 20.3l3.8-3.8" />
      <circle cx="32" cy="32" r="6" strokeWidth="2.5" />
    </svg>
  );
}

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
    <section className="relative overflow-hidden bg-white border-b border-border lg:h-[calc(100vh-72px)] lg:min-h-[640px] lg:max-h-[840px]">
      <div className="w-full h-full">
        <div className="grid lg:grid-cols-12 h-full w-full">
          {/* ================================================== */}
          {/* LEFT SIDE — LOCKED / CLIENT-APPROVED ORIGINAL DESIGN */}
          {/* ================================================== */}
          <div className="flex flex-col justify-between items-center text-center px-6 sm:px-10 lg:px-12 xl:px-16 py-6 lg:py-8 lg:col-span-7 xl:col-span-7 z-10 h-full">
            <div className="my-auto flex flex-col items-center text-center w-full max-w-2xl">
              {/* 1. Large Najmat Alswab logo centered toward the upper portion */}
              <div className="relative mb-2 flex justify-center">
                <img
                  src={logoImage}
                  alt="Najmat Alswab Emblem"
                  className="h-32 sm:h-40 md:h-48 lg:h-52 xl:h-56 w-auto object-contain transition-transform hover:scale-[1.02]"
                  loading="eager"
                />
              </div>

              {/* 2. Arabic company name: ONE SINGLE LINE, Middle formatted, Lateef font */}
              <h2
                className="w-full text-center font-lateef text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-bold text-[#28236d] tracking-normal leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis"
                dir="rtl"
              >
                نجمة الصواب للخدمات الفنية ذ.م.م
              </h2>

              {/* 3. English company name: ONE SINGLE LINE, Middle formatted, Poppins Bold font */}
              <h1 className="mt-1 w-full text-center font-poppins text-xs sm:text-base md:text-lg lg:text-[1.35rem] xl:text-[1.65rem] font-bold uppercase tracking-[0.03em] text-[#28236d] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                NAJMAT ALSWAB TECHNICAL SERVICES L.L.C
              </h1>

              {/* 4. Navy service banner: ONE SINGLE LINE, Middle formatted */}
              <div className="mt-3.5 inline-flex items-center justify-center rounded-xs sm:rounded-sm bg-[#28236d] px-6 sm:px-8 py-1.5 sm:py-2 text-white font-poppins text-xs sm:text-sm md:text-base font-semibold tracking-wide shadow-md whitespace-nowrap">
                Steel Products Installation &amp; Maintenance
              </div>

              {/* 5. Three service items: STEEL PRODUCTS | INSTALLATION | MAINTENANCE with icons & dividers */}
              <div className="mt-5 w-full max-w-lg grid grid-cols-3 divide-x divide-border/80 border-t border-border/80 pt-4">
                {/* Pillar 1: Steel Products */}
                <a
                  href="#capabilities"
                  onClick={scrollTo("capabilities")}
                  className="group flex flex-col items-center px-2 sm:px-3 text-center cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-cyan-50/90 text-[#0284c7] transition-colors group-hover:bg-[#0284c7] group-hover:text-white">
                    <IBeamIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <span className="mt-2 font-poppins text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#4d4d4d] group-hover:text-[#28236d] transition-colors whitespace-nowrap">
                    STEEL PRODUCTS
                  </span>
                </a>

                {/* Pillar 2: Installation */}
                <a
                  href="#capabilities"
                  onClick={scrollTo("capabilities")}
                  className="group flex flex-col items-center px-2 sm:px-3 text-center cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-cyan-50/90 text-[#0284c7] transition-colors group-hover:bg-[#0284c7] group-hover:text-white">
                    <InstallationIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <span className="mt-2 font-poppins text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#4d4d4d] group-hover:text-[#28236d] transition-colors whitespace-nowrap">
                    INSTALLATION
                  </span>
                </a>

                {/* Pillar 3: Maintenance */}
                <a
                  href="#about"
                  onClick={scrollTo("about")}
                  className="group flex flex-col items-center px-2 sm:px-3 text-center cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-cyan-50/90 text-[#0284c7] transition-colors group-hover:bg-[#0284c7] group-hover:text-white">
                    <MaintenanceIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <span className="mt-2 font-poppins text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#4d4d4d] group-hover:text-[#28236d] transition-colors whitespace-nowrap">
                    MAINTENANCE
                  </span>
                </a>
              </div>

              {/* 6. CTA row: Send Project Inquiry & View Capabilities (48) + 7. Phone number */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 w-full">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#28236d] hover:bg-[#1e1954] text-white shadow-md font-poppins font-semibold text-sm px-6"
                >
                  <a href="#contact" onClick={scrollTo("contact")}>
                    Send Project Inquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#28236d] text-[#28236d] hover:bg-[#28236d]/10 font-poppins font-semibold text-sm px-5"
                >
                  <a href="#capabilities" onClick={scrollTo("capabilities")}>
                    View Capabilities (48)
                  </a>
                </Button>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-1.5 font-mono text-xs font-semibold text-muted-foreground hover:text-[#28236d] px-3 py-2"
                >
                  <Phone className="h-3.5 w-3.5 text-[#0284c7]" />
                  <span>{company.phone}</span>
                </a>
              </div>
            </div>

            {/* 8. Bottom company information: Licence, DCCI, Facility */}
            <div className="mt-4 w-full border-t border-border/60 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4 text-[#0284c7]" />
                <span>Licence: <strong className="font-mono text-foreground">{company.licence}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#0284c7]" />
                <span>DCCI: <strong className="font-mono text-foreground">{company.chamber}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>Facility: <strong className="text-foreground">{company.facilitySize} in Umm Al Quwain</strong></span>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* RIGHT SIDE — FACTORY / PRODUCTION FACILITY IMAGE AREA */}
          {/* ================================================== */}
          <div className="relative w-full h-[420px] sm:h-[480px] lg:h-full lg:col-span-5 xl:col-span-5 flex flex-col justify-end">
            {/* Clean diagonal division between white left panel and factory image: polygon(8% 0, 100% 0, 100% 100%, 0 100%) */}
            <div className="relative h-full w-full overflow-hidden bg-slate-900 lg:[clip-path:polygon(8%_0,100%_0,100%_100%,0%_100%)]">
              {/* Actual factory image: object-fit cover, object-position center center */}
              <img
                src={factoryImage}
                alt="Najmat Alswab Steel Structure Production Facility"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                loading="eager"
              />

              {/* Architectural lighting vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

              {/* Top accent graphic matching corporate styling */}
              <div className="absolute top-0 right-0 z-20 flex items-center">
                <div className="h-3 sm:h-3.5 w-24 bg-[#0284c7] -skew-x-12" />
                <div className="h-3 sm:h-3.5 w-12 bg-[#28236d] -skew-x-12" />
              </div>

              {/* Facility Label: Dark information label with 24-32px spacing from top & diagonal edge */}
              <div className="absolute left-7 lg:left-12 top-7 z-20 rounded-xs bg-[#1e2547]/85 backdrop-blur-xs px-3 py-1.5 text-[11px] font-mono text-white/95 border border-white/10 shadow-sm">
                5,700 SQFT. Production Facility · Umm Al Quwain
              </div>

              {/* Location Badge: DUBAI · UAE at bottom-right with location pin */}
              <a
                href="#contact"
                onClick={scrollTo("contact")}
                className="absolute right-0 bottom-0 z-20 flex items-center gap-2.5 bg-[#28236d] px-6 py-3 text-white shadow-2xl transition-all hover:bg-[#1e1954] [clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)] pl-8 sm:px-8 sm:py-3.5"
                title="Located in Dubai & Umm Al Quwain, UAE"
              >
                <MapPin className="h-4 w-4 fill-white text-white shrink-0" />
                <span className="font-poppins text-xs sm:text-sm font-bold uppercase tracking-widest">
                  DUBAI &nbsp;·&nbsp; UAE
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
