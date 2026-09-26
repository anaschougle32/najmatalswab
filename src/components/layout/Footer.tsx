import logo from "@/assets/logo.jpg";
import { company } from "@/content/company";

const navSections = [
  { name: "Capabilities & Gallery (48)", href: "#capabilities" },
  { name: "Finishes & Materials", href: "#finishes" },
  { name: "Flagship Chute Systems", href: "#chutes" },
  { name: "About & Facility", href: "#about" },
  { name: "Inquiry & Bank Details", href: "#contact" },
];

export function Footer() {
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <footer className="bg-graphite text-graphite-foreground border-t border-graphite-foreground/15">
      <div className="shell container-padding py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Najmat Alswab Technical Services logo"
                className="h-11 w-auto bg-white p-1 rounded-xs"
              />
              <div>
                <span className="font-heading text-base font-bold text-white block">
                  NAJMAT ALSWAB
                </span>
                <span className="text-[11px] font-mono text-graphite-foreground/60">
                  {company.arabicName}
                </span>
              </div>
            </a>
            <p className="mt-5 max-w-sm text-xs leading-relaxed text-graphite-foreground/70">
              Technical services and custom metal fabrication company based in Dubai, with a {company.facilitySize} production facility in Umm Al Quwain. Specialized in architectural metalwork, PVD/electroplating finishes, and high-rise garbage and linen chute installations across the UAE.
            </p>
          </div>

          {/* Quick Anchor Navigation */}
          <nav className="md:col-span-3" aria-label="Footer Navigation">
            <h2 className="datum text-graphite-foreground/50">One-Page Navigation</h2>
            <ul className="mt-4 space-y-2.5">
              {navSections.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="text-xs text-graphite-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Direct Procurement & Contact */}
          <div className="md:col-span-4">
            <h2 className="datum text-graphite-foreground/50">Contact & Location</h2>
            <dl className="mt-4 space-y-2 text-xs">
              <div>
                <dt className="text-graphite-foreground/50">Phone / WhatsApp</dt>
                <dd className="mt-0.5">
                  <a
                    href={company.phoneHref}
                    className="font-mono text-sm font-semibold text-white hover:text-accent transition-colors"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-graphite-foreground/50">Inquiries Email</dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${company.email}`}
                    className="font-mono text-graphite-foreground/90 hover:text-accent transition-colors break-all"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-graphite-foreground/50">Registered Head Office</dt>
                <dd className="mt-0.5 text-graphite-foreground/80">
                  {company.office} ({company.poBox})
                </dd>
              </div>
              <div>
                <dt className="text-graphite-foreground/50">Production Facility</dt>
                <dd className="mt-0.5 text-graphite-foreground/80">
                  {company.facilitySize} in {company.facility}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Corporate Legal & Registration Bar */}
        <div className="mt-12 border-t border-graphite-foreground/15 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-graphite-foreground/60">
          <p className="font-mono text-[11px]">
            Commercial Licence: <span className="text-white">{company.licence}</span> · Register: <span className="text-white">{company.register}</span> · Dubai Chamber: <span className="text-white">{company.chamber}</span>
          </p>
          <p>
            © {new Date().getFullYear()} Najmat Alswab Technical Services L.L.C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
