import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { InquiryCta } from "@/components/home/InquiryCta";
import { company, values, industries } from "@/content/company";
import facility from "@/assets/chute-1.jpg";

const facts = [
  ["Office", company.office],
  ["Facility", `${company.facility} · ${company.facilitySize}`],
  ["Commercial licence", company.licence],
  ["Commercial register", company.register],
  ["Dubai Chamber", company.chamber],
];

const About = () => (
  <Layout>
    <Seo
      title="About | Najmat Alswab Technical Services"
      description="Najmat Alswab Technical Services L.L.C. — a Dubai-based metal fabrication and technical services company with a 5,700 sq. ft. facility in Umm Al Quwain."
      path="/about"
    />
    <PageHeader
      title="About Najmat Alswab"
      intro={`${company.legalName} is a Dubai-based company fabricating stainless and mild-steel architectural elements, cladding and chute systems, with installation and maintenance services.`}
    />

    <section className="border-b border-border">
      <div className="shell container-padding section-padding grid gap-10 lg:grid-cols-12 lg:items-start">
        <img src={facility} alt="Najmat Alswab fabrication work" loading="lazy" className="lg:col-span-6 aspect-[4/3] w-full object-cover rounded-sm" />
        <div className="lg:col-span-6">
          <h2 className="font-heading text-2xl md:text-3xl text-primary">Company details</h2>
          <dl className="mt-6 divide-y divide-border border-y border-border">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-5 gap-4 py-3 text-sm">
                <dt className="col-span-2 datum">{k}</dt>
                <dd className="col-span-3 font-mono">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>

    <section className="border-b border-border">
      <div className="shell container-padding section-padding grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl md:text-3xl text-primary">Our values</h2>
          <ul className="mt-6 grid grid-cols-2 gap-px bg-border border border-border">
            {values.map((v) => (
              <li key={v} className="bg-background p-4 text-sm">{v}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-2xl md:text-3xl text-primary">Sectors we serve</h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {industries.map((i) => (
              <li key={i} className="py-3 text-sm">{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <InquiryCta />
  </Layout>
);

export default About;
