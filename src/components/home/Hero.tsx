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
    <section className="relative overflow-hidden bg-white border-b border-slate-200/80">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 lg:h-[calc(100vh-72px)] lg:min-h-[640px] lg:max-h-[820px] w-full">
          {/* LEFT SIDE: Approximately 50% of viewport, generous controlled whitespace */}
          <div className="flex flex-col justify-between h-full px-6 sm:px-10 lg:px-12 xl:px-16 py-8 lg:py-10 max-w-2xl mx-auto lg:mx-0 w-full z-10">
            {/* TOP: Eyebrow + Small Horizontal Company Identity Lockup */}
            <div className="space-y-3">
              {/* Small uppercase eyebrow */}
              <div className="flex items-center gap-2">
                <span className="font-poppins text-[11px] sm:text-xs font-semibold tracking-wider text-[#0284c7] uppercase">
                  STEEL PRODUCTS · INSTALLATION · MAINTENANCE
                </span>
              </div>

              {/* Existing Najmat Alswab identity in a SMALL horizontal lockup */}
              <div className="flex items-center gap-3 pt-0.5">
                <img
                  src={logoImage}
                  alt="Najmat Alswab Emblem"
                  className="h-9 sm:h-10 w-auto object-contain shrink-0"
                  loading="eager"
                />
                <div className="flex flex-col leading-tight border-l border-slate-200 pl-3">
                  <span className="font-poppins text-xs sm:text-sm font-bold tracking-tight text-[#1e2547]">
                    NAJMAT ALSWAB TECHNICAL SERVICES L.L.C.
                  </span>
                  <span
                    className="font-lateef text-base sm:text-lg leading-none font-semibold text-slate-500"
                    dir="rtl"
                  >
                    نجمة الصواب للخدمات الفنية ذ.م.م
                  </span>
                </div>
              </div>
            </div>

            {/* MIDDLE: Primary Visual Focus - Dominant Headline, Paragraph, CTAs & Service Row */}
            <div className="my-auto py-5 lg:py-6 space-y-5">
              {/* Main headline: Maximum 2 lines, large, strong modern sans-serif, dark navy */}
              <h1 className="font-poppins text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.15rem] font-bold text-[#1e2547] leading-[1.14] tracking-tight">
                Steel Products<br />
                Installation &amp; Maintenance
              </h1>

              {/* Concise supporting paragraph */}
              <p className="font-poppins text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                Reliable steel solutions for industrial, commercial and infrastructure projects across the UAE.
              </p>

              {/* Primary & Secondary CTAs with Phone */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1e2547] hover:bg-[#151a33] text-white font-poppins font-semibold text-sm px-6 h-11 rounded-xs shadow-xs"
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
                  className="border-slate-300 text-[#1e2547] hover:bg-slate-50 font-poppins font-semibold text-sm px-5 h-11 rounded-xs"
                >
                  <a href="#capabilities" onClick={scrollTo("capabilities")}>
                    View Capabilities (48)
                  </a>
                </Button>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0284c7] transition-colors py-2 px-2"
                >
                  <Phone className="h-4 w-4 text-[#0284c7]" />
                  <span>{company.phone}</span>
                </a>
              </div>

              {/* Clean horizontal 3-item service highlights row */}
              <div className="pt-2">
                <div className="grid grid-cols-3 divide-x divide-slate-200 border-y border-slate-200/90 py-3">
                  <div className="flex items-center gap-2.5 px-1.5 sm:px-3">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[#0284c7]">
                      <IBeamIcon className="h-4 w-4" />
                    </div>
                    <span className="font-poppins text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-800 whitespace-nowrap">
                      Steel Products
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 px-1.5 sm:px-3">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[#0284c7]">
                      <InstallationIcon className="h-4 w-4" />
                    </div>
                    <span className="font-poppins text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-800 whitespace-nowrap">
                      Installation
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 px-1.5 sm:px-3">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-[#0284c7]">
                      <MaintenanceIcon className="h-4 w-4" />
                    </div>
                    <span className="font-poppins text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-800 whitespace-nowrap">
                      Maintenance
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile-only factory image in exact responsive order (between Services and Company Info) */}
              <div className="lg:hidden w-full aspect-[16/10] sm:aspect-[16/9] rounded-xs overflow-hidden relative shadow-sm border border-slate-200 my-4">
                <img
                  src={factoryImage}
                  alt="Najmat Alswab Steel Production Facility"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute left-3 top-3 z-10 rounded-xs bg-slate-950/70 backdrop-blur-xs px-2.5 py-1 text-[10px] font-mono text-white/90 border border-white/10">
                  5,700 SQFT. Facility · Umm Al Quwain
                </div>
                <div className="absolute right-0 bottom-0 z-10 flex items-center gap-1.5 bg-[#1e2547] px-4 py-2 text-white shadow-md text-xs font-bold tracking-widest [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)] pl-6">
                  <MapPin className="h-3.5 w-3.5 text-[#0284c7]" />
                  <span>DUBAI · UAE</span>
                </div>
              </div>
            </div>

            {/* BOTTOM: Subtle Horizontal Company Information Bar */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-slate-500 font-poppins">
              <div className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5 text-slate-400" />
                <span>Licence: <strong className="font-mono text-slate-700 font-medium">{company.licence}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                <span>DCCI: <strong className="font-mono text-slate-700 font-medium">{company.chamber}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" />
                <span>Facility: <strong className="text-slate-700 font-medium">{company.facilitySize}</strong></span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Factory image occupying approximately 50% of the hero on desktop */}
          <div className="hidden lg:block relative w-full h-full min-h-full">
            {/* Extends from directly below navbar to bottom of hero with subtle clean diagonal cut */}
            <div className="relative h-full w-full overflow-hidden bg-slate-900 lg:[clip-path:polygon(5%_0,100%_0,100%_100%,0%_100%)]">
              <img
                src={factoryImage}
                alt="Najmat Alswab Steel Structure Production Facility"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                loading="eager"
              />

              {/* Subtle lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/20 pointer-events-none" />

              {/* Top subtle accent graphic */}
              <div className="absolute top-0 right-0 z-10 flex items-center">
                <div className="h-2.5 w-20 bg-[#0284c7] -skew-x-12" />
                <div className="h-2.5 w-10 bg-[#1e2547] -skew-x-12" />
              </div>

              {/* Facility Overlay Caption */}
              <div className="absolute left-8 lg:left-12 top-6 z-10 rounded-xs bg-slate-950/70 backdrop-blur-xs px-3 py-1.5 text-[11px] font-mono text-white/95 border border-white/10 shadow-xs">
                5,700 SQFT. Production Facility · Umm Al Quwain
              </div>

              {/* Bottom Right Location Badge: DUBAI · UAE */}
              <a
                href="#contact"
                onClick={scrollTo("contact")}
                className="absolute right-0 bottom-0 z-20 flex items-center gap-2 bg-[#1e2547] px-6 py-3 text-white shadow-md transition-colors hover:bg-[#151a33] [clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)] pl-8"
                title="Located in Dubai & Umm Al Quwain, UAE"
              >
                <MapPin className="h-3.5 w-3.5 text-[#0284c7] shrink-0" />
                <span className="font-poppins text-xs font-bold uppercase tracking-widest">
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
