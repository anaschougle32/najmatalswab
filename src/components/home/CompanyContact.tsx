import { useState } from "react";
import {
  Building,
  Phone,
  Mail,
  MapPin,
  Landmark,
  ShieldCheck,
  Send,
  UserCheck,
  FileCheck,
  Award,
  Sparkles,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  company,
  missionVision,
  coreValues,
  industries,
  solutionGroups,
  licenseActivities,
} from "@/content/company";

const inquiryTypes = [
  "New Project Quotation",
  "Tender / BOQ Estimation",
  "Chute System Installation",
  "Architectural Metalwork",
  "Maintenance Contract",
  "General Commercial Inquiry",
];

export function CompanyContact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: inquiryTypes[0],
    work: solutionGroups[0].title,
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const set =
    (key: keyof typeof form) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm({ ...form, [key]: event.target.value });

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const body = [
      `Full Name: ${form.name}`,
      `Company / Contractor: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Inquiry Type: ${form.type}`,
      `Scope of Work: ${form.work}`,
      `Project Location: ${form.location}`,
      "",
      "--- Message / Project Scope ---",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Project Inquiry: ${form.work} — ${form.company || form.name}`
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  const selectClass =
    "flex h-11 w-full rounded-xs border border-input bg-background px-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <>
      {/* About & Corporate Profile Section */}
      <section id="about" className="scroll-mt-20 border-t border-border bg-graphite text-graphite-foreground py-16 md:py-24">
        <div className="shell container-padding">
          {/* Header */}
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                <p className="datum text-accent">About Najmat Alswab</p>
              </div>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {company.legalName}
              </h2>
              <p className="mt-1 font-heading text-lg text-accent font-semibold" dir="rtl">
                {company.arabicName}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-graphite-foreground/80">
                Based in Dubai, UAE with a specialized <span className="font-bold text-white">{company.facilitySize}</span> production workshop in Umm Al Quwain. We provide end-to-end custom metal fabrication, architectural metalwork, high-rise chute systems, cladding, site installation, and comprehensive technical maintenance across the Emirates.
              </p>

              {/* Mission & Vision Quotes */}
              <div className="mt-8 space-y-6 border-t border-graphite-foreground/15 pt-6">
                <div>
                  <div className="flex items-center gap-2 text-accent">
                    <Compass className="h-4 w-4" />
                    <span className="font-heading text-xs font-bold uppercase tracking-wider">Our Mission</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-graphite-foreground/75">
                    {missionVision.mission[0]}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-accent">
                    <Sparkles className="h-4 w-4" />
                    <span className="font-heading text-xs font-bold uppercase tracking-wider">Our Vision</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-graphite-foreground/75">
                    {missionVision.vision[0]}
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Factsheet & Commercial Registration */}
            <div className="lg:col-span-7">
              <div className="rounded-sm border border-graphite-foreground/20 bg-black/20 p-6">
                <div className="flex items-center justify-between border-b border-graphite-foreground/15 pb-4">
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-4 w-4 text-accent" />
                    <h3 className="font-heading text-base font-bold uppercase tracking-wider text-white">
                      Official License & Credentials
                    </h3>
                  </div>
                  <span className="rounded-full bg-accent/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-accent">
                    Verified Active
                  </span>
                </div>

                <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xs border border-graphite-foreground/10 bg-graphite p-3.5">
                    <dt className="datum text-graphite-foreground/50">Commercial Licence No.</dt>
                    <dd className="mt-1 font-mono text-base font-bold text-white">{company.licence}</dd>
                  </div>
                  <div className="rounded-xs border border-graphite-foreground/10 bg-graphite p-3.5">
                    <dt className="datum text-graphite-foreground/50">Commercial Register No.</dt>
                    <dd className="mt-1 font-mono text-base font-bold text-white">{company.register}</dd>
                  </div>
                  <div className="rounded-xs border border-graphite-foreground/10 bg-graphite p-3.5">
                    <dt className="datum text-graphite-foreground/50">Dubai Chamber No. (DCCI)</dt>
                    <dd className="mt-1 font-mono text-base font-bold text-white">{company.chamber}</dd>
                  </div>
                  <div className="rounded-xs border border-graphite-foreground/10 bg-graphite p-3.5">
                    <dt className="datum text-graphite-foreground/50">Legal Entity Type</dt>
                    <dd className="mt-1 text-sm font-medium text-white">{company.legalType}</dd>
                  </div>
                  <div className="rounded-xs border border-graphite-foreground/10 bg-graphite p-3.5">
                    <dt className="datum text-graphite-foreground/50">Production Facility</dt>
                    <dd className="mt-1 text-sm font-medium text-white">{company.facilitySize} in Umm Al Quwain</dd>
                  </div>
                  <div className="rounded-xs border border-graphite-foreground/10 bg-graphite p-3.5">
                    <dt className="datum text-graphite-foreground/50">Registered Head Office</dt>
                    <dd className="mt-1 text-sm font-medium text-white">{company.office} ({company.poBox})</dd>
                  </div>
                </dl>
              </div>

              {/* Core Values Grid from Slide 4 */}
              <div className="mt-6">
                <p className="datum text-accent mb-3">Core Operating Values · Slide 04</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {coreValues.map((val) => (
                    <div
                      key={val.title}
                      className="rounded-xs border border-graphite-foreground/15 bg-graphite-foreground/5 p-3"
                    >
                      <h4 className="font-heading text-xs font-bold uppercase text-white">
                        {val.title}
                      </h4>
                      <p className="mt-1 text-[11px] leading-tight text-graphite-foreground/60">
                        {val.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 12 Licensed Activities (Slide 12-15) */}
          <div className="mt-14 border-t border-graphite-foreground/15 pt-10">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="datum text-accent">Government of Dubai · Department of Economy & Tourism</p>
                <h3 className="font-heading text-xl font-bold uppercase text-white">
                  12 Licensed Commercial & Engineering Activities
                </h3>
              </div>
              <span className="font-mono text-xs text-graphite-foreground/60">
                Licence Validity: 2025 – 2027
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
              {licenseActivities.map((act, i) => (
                <div
                  key={act}
                  className="flex items-start gap-2 rounded-xs border border-graphite-foreground/10 bg-graphite-foreground/5 p-2.5 text-xs text-graphite-foreground/80"
                >
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-accent mt-0.5" />
                  <span className="leading-snug">{act}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Industries We Serve (Slide 2) */}
          <div className="mt-12 border-t border-graphite-foreground/15 pt-8">
            <p className="datum text-accent mb-3">Target Sectors & Active Industries</p>
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-graphite-foreground/20 bg-graphite px-3 py-1 font-mono text-xs text-graphite-foreground/90"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Procurement Section */}
      <section id="contact" className="scroll-mt-20 border-t border-border bg-background py-16 md:py-24">
        <div className="shell container-padding">
          {/* Section Heading */}
          <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                <p className="datum text-primary">Inquiries & Quotations</p>
              </div>
              <h2 className="mt-2 font-heading text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Contact Us
              </h2>
              <p className="mt-2 text-base text-foreground/80 font-medium">
                Direct management contact, procurement bank details, and formal RFP submission.
              </p>
            </div>
            <div className="flex flex-col md:items-end">
              <a
                href={company.phoneHref}
                className="font-heading text-2xl font-bold text-primary hover:text-accent transition-colors"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="font-mono text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {company.email}
              </a>
            </div>
          </div>

          {/* Key Management Contact Cards (Slide 11) & Bank Account Verification */}
          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            {/* Executive Cards */}
            <div className="space-y-4 lg:col-span-4">
              <p className="datum text-primary">Direct Executive Contacts</p>

              {company.executives.map((exec) => (
                <div
                  key={exec.name}
                  className="rounded-sm border border-border bg-secondary/30 p-5 transition-all hover:border-accent hover:bg-secondary/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-base font-bold text-foreground">
                        {exec.name}
                      </h4>
                      <p className="font-mono text-xs text-accent font-semibold">
                        {exec.title}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 border-t border-border pt-3 text-xs">
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                      <a href={exec.phoneHref} className="font-mono hover:text-accent">
                        {exec.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                      <a href={`mailto:${exec.email}`} className="font-mono hover:text-accent truncate">
                        {exec.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span>{exec.address}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Corporate Bank Account Box (Slide 11) */}
              <div className="rounded-sm border border-border bg-background p-5 shadow-2xs">
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <Landmark className="h-4 w-4 text-accent" />
                  <h4 className="font-heading text-sm font-bold uppercase text-foreground">
                    Corporate Banking Details
                  </h4>
                </div>
                <div className="mt-3 space-y-2 text-xs">
                  <div>
                    <span className="datum text-muted-foreground">Bank Name</span>
                    <p className="font-medium text-foreground">{company.bankDetails.bankName}</p>
                  </div>
                  <div>
                    <span className="datum text-muted-foreground">Beneficiary</span>
                    <p className="font-medium text-foreground">{company.bankDetails.beneficiary}</p>
                  </div>
                  <div>
                    <span className="datum text-muted-foreground">Account Number</span>
                    <p className="font-mono font-bold text-primary">{company.bankDetails.accountNo}</p>
                  </div>
                  <div>
                    <span className="datum text-muted-foreground">IBAN</span>
                    <p className="font-mono font-bold text-primary break-all">{company.bankDetails.iban}</p>
                  </div>
                  <div>
                    <span className="datum text-muted-foreground">Branch</span>
                    <p className="text-foreground">{company.bankDetails.branch}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Project Inquiry Form */}
            <div className="rounded-sm border border-border bg-background p-6 lg:col-span-8 lg:p-8">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="datum text-primary">Direct Quotation Request</p>
                  <h3 className="font-heading text-2xl font-bold uppercase text-foreground">
                    Send Project Specification
                  </h3>
                </div>
                <span className="text-xs text-muted-foreground hidden sm:inline">
                  Quick Turnaround for UAE Tenders
                </span>
              </div>

              {submitted ? (
                <div className="my-10 rounded-sm border border-green-500/30 bg-green-500/10 p-6 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
                  <h4 className="mt-3 font-heading text-xl font-bold text-foreground">
                    Thank You for Your Project Inquiry
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                    Your inquiry email draft has been generated for {company.email}. Our estimation team will review your specifications promptly.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <Label htmlFor="name">Contact Name *</Label>
                    <Input
                      id="name"
                      required
                      placeholder="e.g. Eng. Ahmed Al Mansoori"
                      value={form.name}
                      onChange={set("name")}
                    />
                  </div>

                  <div className="grid gap-1.5">
                    <Label htmlFor="company">Company / Contractor Name</Label>
                    <Input
                      id="company"
                      placeholder="e.g. Al Habtoor / Emaar Project"
                      value={form.company}
                      onChange={set("company")}
                    />
                  </div>

                  <div className="grid gap-1.5">
                    <Label htmlFor="email">Corporate Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={set("email")}
                    />
                  </div>

                  <div className="grid gap-1.5">
                    <Label htmlFor="phone">Phone / WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={form.phone}
                      onChange={set("phone")}
                    />
                  </div>

                  <div className="grid gap-1.5">
                    <Label htmlFor="type">Inquiry Type</Label>
                    <select
                      id="type"
                      className={selectClass}
                      value={form.type}
                      onChange={set("type")}
                    >
                      {inquiryTypes.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-1.5">
                    <Label htmlFor="work">Primary Scope of Work</Label>
                    <select
                      id="work"
                      className={selectClass}
                      value={form.work}
                      onChange={set("work")}
                    >
                      {solutionGroups.map((group) => (
                        <option key={group.id}>{group.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-1.5 sm:col-span-2">
                    <Label htmlFor="location">Project Location / Emirate</Label>
                    <Input
                      id="location"
                      placeholder="e.g. Downtown Dubai / Dubai Marina / Sharjah"
                      value={form.location}
                      onChange={set("location")}
                    />
                  </div>

                  <div className="grid gap-1.5 sm:col-span-2">
                    <Label htmlFor="message">Project Description / Scope of Work *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Please include details such as drawings status, metal grade (e.g. SS 304, SS 316, mild steel), finish preference (PVD, powder coated), dimensions, or BOQ requirements..."
                      value={form.message}
                      onChange={set("message")}
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] text-muted-foreground">
                      Submissions are routed directly to Managing Director & Business Development.
                    </p>
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="mr-2 h-4 w-4" />
                      Send Project Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}