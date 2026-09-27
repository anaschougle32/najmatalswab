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
      {/* 3D I-Beam girder matching reference slide */}
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
      {/* Gear with internal checkmark matching reference slide */}
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
      {/* Precision gear with central hub matching reference slide */}
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
    <section className="relative overflow-hidden bg-white pt-16 lg:pt-20 border-b border-border">
      {/* Top Accent Strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0284c7] via-[#2b227c] to-[#0284c7]" />

      <div className="shell container-padding py-8 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* LEFT COLUMN: Exactly matching the cover slide's typography, logo, and pillars */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-7">
            {/* Logo Emblem: Stars + Calligraphy */}
            <div className="relative mb-2">
              <img
                src={logoImage}
                alt="Najmat Alswab Emblem"
                className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-xs"
                loading="eager"
              />
            </div>

            {/* Arabic Typography */}
            <h2
              className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#2a2278] tracking-wide"
              dir="rtl"
            >
              نجمة الصواب للخدمات الفنية ذ.م.م
            </h2>

            {/* English Typography */}
            <h1 className="mt-2 font-heading text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-black uppercase tracking-wider text-[#2a2278] leading-tight">
              NAJMAT ALSWAB TECHNICAL SERVICES L.L.C
            </h1>

            {/* Purple Pill Subtitle */}
            <div className="mt-3.5 inline-block rounded-xs md:rounded-sm bg-[#2b227c] px-5 py-2 text-white font-heading text-sm sm:text-base md:text-lg font-bold tracking-wide shadow-md">
              Steel Products Installation &amp; Maintenance
            </div>

            {/* 3 Pillars matching Slide: STEEL PRODUCTS | INSTALLATION | MAINTENANCE */}
            <div className="mt-8 w-full max-w-xl grid grid-cols-3 divide-x divide-border/80 border-t border-border/80 pt-6">
              {/* Pillar 1: Steel Products */}
              <a
                href="#capabilities"
                onClick={scrollTo("capabilities")}
                className="group flex flex-col items-center px-2 sm:px-4 text-center cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-cyan-50/80 text-[#0284c7] transition-colors group-hover:bg-[#0284c7] group-hover:text-white">
                  <IBeamIcon className="h-8 w-8 sm:h-9 sm:w-9" />
                </div>
                <span className="mt-3 font-heading text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2a2278] group-hover:text-primary transition-colors">
                  STEEL PRODUCTS
                </span>
              </a>

              {/* Pillar 2: Installation */}
              <a
                href="#capabilities"
                onClick={scrollTo("capabilities")}
                className="group flex flex-col items-center px-2 sm:px-4 text-center cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-cyan-50/80 text-[#0284c7] transition-colors group-hover:bg-[#0284c7] group-hover:text-white">
                  <InstallationIcon className="h-8 w-8 sm:h-9 sm:w-9" />
                </div>
                <span className="mt-3 font-heading text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2a2278] group-hover:text-primary transition-colors">
                  INSTALLATION
                </span>
              </a>

              {/* Pillar 3: Maintenance */}
              <a
                href="#about"
                onClick={scrollTo("about")}
                className="group flex flex-col items-center px-2 sm:px-4 text-center cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-cyan-50/80 text-[#0284c7] transition-colors group-hover:bg-[#0284c7] group-hover:text-white">
                  <MaintenanceIcon className="h-8 w-8 sm:h-9 sm:w-9" />
                </div>
                <span className="mt-3 font-heading text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2a2278] group-hover:text-primary transition-colors">
                  MAINTENANCE
                </span>
              </a>
            </div>

            {/* Interactive Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <Button
                asChild
                size="lg"
                className="bg-[#2b227c] hover:bg-[#201964] text-white shadow-md font-heading font-semibold"
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
                className="border-[#2b227c] text-[#2b227c] hover:bg-[#2b227c]/10 font-heading font-semibold"
              >
                <a href="#capabilities" onClick={scrollTo("capabilities")}>
                  View Capabilities (48)
                </a>
              </Button>
              <a
                href={company.phoneHref}
                className="flex items-center gap-1.5 font-mono text-xs font-semibold text-muted-foreground hover:text-[#2b227c] px-3 py-2"
              >
                <Phone className="h-3.5 w-3.5 text-[#0284c7]" />
                <span>{company.phone}</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Using Steel-Structure-Production-Factory.webp with architectural cut & DUBAI • UAE badge */}
          <div className="relative lg:col-span-5">
            {/* Top decorative diagonal accent lines matching the slide */}
            <div className="absolute -top-4 right-4 z-10 hidden sm:flex items-center gap-1.5">
              <div className="h-2 w-16 bg-[#0284c7] -skew-x-12 rounded-xs" />
              <div className="h-2 w-8 bg-[#2b227c] -skew-x-12 rounded-xs" />
            </div>

            {/* Main Image Frame */}
            <div className="relative overflow-hidden rounded-sm border border-border/80 bg-slate-900 shadow-2xl">
              <img
                src={factoryImage}
                alt="Najmat Alswab Steel Structure Production Facility"
                className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] w-full object-cover"
                loading="eager"
              />

              {/* Gradient lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Bottom Right Banner: DUBAI • UAE (Exact match to Slide 1) */}
              <a
                href="#contact"
                onClick={scrollTo("contact")}
                className="absolute right-0 bottom-0 z-20 flex items-center gap-2.5 bg-[#2b227c] px-6 py-3 text-white shadow-2xl transition-all hover:bg-[#201964] [clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)] pl-8 sm:px-8 sm:py-3.5"
                title="Located in Dubai & Umm Al Quwain, UAE"
              >
                <MapPin className="h-4 w-4 fill-white text-white shrink-0" />
                <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-widest">
                  DUBAI &nbsp;•&nbsp; UAE
                </span>
              </a>

              {/* Facility Overlay Caption */}
              <div className="absolute left-3 top-3 z-10 rounded-xs bg-black/60 backdrop-blur-xs px-2.5 py-1 text-[11px] font-mono text-white/90 border border-white/10">
                5,700 SQFT. Production Facility · Umm Al Quwain
              </div>
            </div>
          </div>
        </div>

        {/* Quick Credentials Strip */}
        <div className="mt-8 border-t border-border/60 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-[#0284c7]" />
            <span>Commercial Licence: <strong className="font-mono text-foreground">{company.licence}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#0284c7]" />
            <span>Dubai Chamber (DCCI): <strong className="font-mono text-foreground">{company.chamber}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Production Facility: <strong className="text-foreground">{company.facilitySize} in Umm Al Quwain</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
