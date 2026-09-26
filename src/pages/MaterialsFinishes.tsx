import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { InquiryCta } from "@/components/home/InquiryCta";
import { materials, finishes } from "@/content/company";
import img1 from "@/assets/railing-2.jpg";
import img2 from "@/assets/gate-5.jpg";
import img3 from "@/assets/bench-2.jpg";

const MaterialsFinishes = () => (
  <Layout>
    <Seo
      title="Materials & finishes | Najmat Alswab Technical Services"
      description="Stainless, mild, hot- and cold-rolled steel, aluminium, brass and copper, with electroplated/PVD finishes and RAL or custom powder coating."
      path="/materials-finishes"
    />
    <PageHeader
      title="Materials and finishes"
      intro="The metals we work with and the surface treatments available for architectural and decorative elements."
    />

    <section className="border-b border-border">
      <div className="shell container-padding section-padding grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-heading text-2xl md:text-3xl text-primary">Materials</h2>
        </div>
        <ul className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
          {materials.map((m) => (
            <li key={m} className="bg-background p-5 font-heading">{m}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="shell container-padding section-padding grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-heading text-2xl md:text-3xl text-primary">Electroplating / PVD</h2>
          <p className="mt-3 text-sm text-muted-foreground">Decorative plated finishes.</p>
        </div>
        <ul className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {finishes.plating.map((f) => (
            <li key={f} className="bg-background p-5 text-sm">{f}</li>
          ))}
        </ul>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="shell container-padding section-padding grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-heading text-2xl md:text-3xl text-primary">Powder coating</h2>
        </div>
        <ul className="lg:col-span-8 grid grid-cols-2 gap-px bg-border border border-border">
          {finishes.coating.map((f) => (
            <li key={f} className="bg-background p-5 text-sm">{f}</li>
          ))}
        </ul>
      </div>
    </section>

    <section>
      <div className="shell container-padding section-padding grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[img1, img2, img3].map((src, i) => (
          <img key={i} src={src} alt="Finished metalwork sample" loading="lazy" className="aspect-[4/5] w-full object-cover rounded-sm" />
        ))}
      </div>
    </section>
    <InquiryCta />
  </Layout>
);

export default MaterialsFinishes;
