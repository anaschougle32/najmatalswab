import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { company, solutionGroups } from "@/content/company";

const inquiryTypes = ["New project quotation", "Installation", "Maintenance", "General question"];

const Contact = () => {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", type: inquiryTypes[0], work: solutionGroups[0].title, location: "", message: "",
  });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`, `Company: ${form.company}`, `Email: ${form.email}`, `Phone: ${form.phone}`,
      `Inquiry type: ${form.type}`, `Work: ${form.work}`, `Location: ${form.location}`, "", form.message,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Project inquiry — ${form.work}`)}&body=${encodeURIComponent(body)}`;
  };

  const selectCls = "flex h-10 w-full rounded-sm border border-input bg-background px-3 text-sm";

  return (
    <Layout>
      <Seo
        title="Contact | Najmat Alswab Technical Services"
        description="Send a project inquiry to Najmat Alswab Technical Services. Call +971 50 564 6184 or email sales@najmatalswab.com."
        path="/contact"
      />
      <PageHeader title="Send a project inquiry" intro="Tell us the element, material and site location. Drawings can be attached to the email that opens." />

      <section>
        <div className="shell container-padding section-padding grid gap-12 lg:grid-cols-12">
          <form onSubmit={submit} className="lg:col-span-8 grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2"><Label htmlFor="name">Name *</Label><Input id="name" required maxLength={100} value={form.name} onChange={set("name")} /></div>
            <div className="grid gap-2"><Label htmlFor="company">Company</Label><Input id="company" maxLength={100} value={form.company} onChange={set("company")} /></div>
            <div className="grid gap-2"><Label htmlFor="email">Email *</Label><Input id="email" type="email" required maxLength={255} value={form.email} onChange={set("email")} /></div>
            <div className="grid gap-2"><Label htmlFor="phone">Phone *</Label><Input id="phone" type="tel" required maxLength={30} value={form.phone} onChange={set("phone")} /></div>
            <div className="grid gap-2">
              <Label htmlFor="type">Inquiry type</Label>
              <select id="type" className={selectCls} value={form.type} onChange={set("type")}>
                {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="work">Type of work</Label>
              <select id="work" className={selectCls} value={form.work} onChange={set("work")}>
                {solutionGroups.map((g) => <option key={g.id}>{g.title}</option>)}
              </select>
            </div>
            <div className="grid gap-2 sm:col-span-2"><Label htmlFor="location">Project location</Label><Input id="location" maxLength={150} value={form.location} onChange={set("location")} /></div>
            <div className="grid gap-2 sm:col-span-2"><Label htmlFor="message">Message *</Label><Textarea id="message" required rows={6} maxLength={3000} value={form.message} onChange={set("message")} /></div>
            <div className="sm:col-span-2"><Button type="submit" size="lg" className="w-full sm:w-auto">Send inquiry</Button></div>
          </form>

          <aside className="lg:col-span-4 space-y-6 text-sm">
            <div><p className="datum">Phone</p><a href={company.phoneHref} className="font-mono text-lg text-primary hover:text-accent">{company.phone}</a></div>
            <div><p className="datum">Email</p><a href={`mailto:${company.email}`} className="font-mono text-primary hover:text-accent">{company.email}</a></div>
            <div><p className="datum">Office</p><p>{company.office}</p></div>
            <div><p className="datum">Facility</p><p>{company.facility}</p></div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
