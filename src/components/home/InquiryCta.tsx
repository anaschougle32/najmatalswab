import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { company } from "@/content/company";

export function InquiryCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="shell container-padding py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl">
              Send us the drawings, quantities or the site details.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75">
              Tell us the element, the material and the location. We will come back with the
              information we need to price and schedule the work.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link to="/contact">Send project inquiry</Link>
            </Button>
            <a
              href={company.phoneHref}
              className="font-mono text-sm text-primary-foreground/80 hover:text-gold transition-colors"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
