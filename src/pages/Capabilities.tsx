import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { InquiryCta } from "@/components/home/InquiryCta";
import { solutionGroups, processes } from "@/content/company";
import canopy from "@/assets/canopy-3.jpg";
import staircase from "@/assets/staircase-1.jpg";
import cladding from "@/assets/railing-8.jpg";
import chute from "@/assets/chute-3.jpg";
import technical from "@/assets/gate-4.jpg";

const images: Record<string, string> = {
  "architectural-metalwork": canopy,
  "steel-fabrication": staircase,
  "cladding-glazing": cladding,
  "chute-systems": chute,
  "technical-works": technical,
};

const Capabilities = () => (
  <Layout>
    <Seo
      title="Capabilities | Najmat Alswab Technical Services"
      description="Architectural metalwork, steel fabrication, cladding and glazing, garbage and linen chute systems, and licensed technical works in the UAE."
      path="/capabilities"
    />
    <PageHeader
      title="What we fabricate and install"
      intro="Five groups of work, carried out from our Umm Al Quwain facility and installed on site across the UAE."
    />

    {solutionGroups.map((group, i) => (
      <section key={group.id} id={group.id} className="border-b border-border scroll-mt-24">
        <div className="shell container-padding section-padding grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
            <img
              src={images[group.id]}
              alt={group.title}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover rounded-sm"
            />
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-heading text-2xl md:text-3xl text-primary">{group.title}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{group.summary}</p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {group.items.map((item) => (
                <li key={item} className="py-3 text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    ))}

    <section className="bg-graphite text-primary-foreground">
      <div className="shell container-padding section-padding">
        <h2 className="font-heading text-2xl md:text-3xl">Workshop processes</h2>
        <p className="mt-3 max-w-2xl text-sm text-primary-foreground/70">
          Machinery available in our {""}5,700 sq. ft. facility.
        </p>
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/10">
          {processes.map((p) => (
            <li key={p.name} className="bg-graphite p-5">
              <p className="font-heading text-lg">{p.name}</p>
              <p className="datum mt-1 text-primary-foreground/60">{p.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <InquiryCta />
  </Layout>
);

export default Capabilities;
