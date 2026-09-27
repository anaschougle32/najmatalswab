import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-clean.png";
import { company } from "@/content/company";

const navLinks = [
  { name: "Capabilities", href: "#capabilities", id: "capabilities" },
  { name: "Finishes & Materials", href: "#finishes", id: "finishes" },
  { name: "Chute Systems", href: "#chutes", id: "chutes" },
  { name: "About & Facility", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll spy to highlight active section and track navbar scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
      const scrollPos = window.scrollY + 120;
      const sectionIds = ["contact", "about", "chutes", "finishes", "capabilities"];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-xs"
          : "bg-white/90 lg:bg-transparent border-b border-transparent"
      }`}
    >
      <div className="shell container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
            aria-label="Najmat Alswab Technical Services, back to top"
          >
            <img
              src={logo}
              alt="Najmat Alswab Technical Services logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-poppins text-sm sm:text-base font-bold tracking-tight text-[#28236d]">
                NAJMAT ALSWAB
              </span>
              <span className="font-poppins text-[10px] text-muted-foreground font-medium">
                Technical Services L.L.C.
              </span>
            </span>
          </a>

          {/* Desktop Nav Links (Anchored) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs xl:text-sm font-poppins font-medium tracking-wide transition-colors py-1 border-b-2 ${
                    isActive
                      ? "text-[#0284c7] border-[#0284c7] font-semibold"
                      : isScrolled
                      ? "text-foreground/80 border-transparent hover:text-[#0284c7] hover:border-[#0284c7]/40"
                      : "text-[#28236d] border-transparent hover:text-[#0284c7] hover:border-[#0284c7]/40"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={company.phoneHref}
              className={`flex items-center gap-1.5 font-mono text-xs font-semibold transition-all px-3.5 py-1.5 rounded-full ${
                isScrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "bg-white/80 backdrop-blur-xs text-[#28236d] hover:bg-white shadow-xs border border-white/60"
              }`}
            >
              <Phone className="h-3.5 w-3.5 text-[#0284c7]" />
              <span>{company.phone}</span>
            </a>
            <Button
              asChild
              size="sm"
              className="bg-[#28236d] hover:bg-[#1e1954] text-white shadow-md font-poppins font-semibold"
            >
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Project Inquiry
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground rounded-xs hover:bg-secondary"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/98">
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-xs text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent font-semibold"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3 px-3">
                <Button asChild className="w-full">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                  >
                    Send Project Inquiry
                  </a>
                </Button>
                <a
                  href={company.phoneHref}
                  className="flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground py-2"
                >
                  <Phone className="h-3.5 w-3.5 text-accent" />
                  <span>{company.phone}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
