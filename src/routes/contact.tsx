import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { SiteLayout, PageHeader } from "@/components/site/Layout";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Taksan Energy Limited" },
      { name: "description", content: "Contact Taksan Energy Limited for petroleum supply and transportation across Kenya, DRC and Mozambique." },
      { property: "og:title", content: "Contact Taksan Energy" },
      { property: "og:description", content: "Get in touch about reliable petroleum supply and logistics." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  country: z.string().trim().max(80).optional(),
  subject: z.string().trim().min(1).max(150),
  message: z.string().trim().min(1).max(2000),
});

function ContactPage() {
  const { t } = useI18n();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error("Please check your inputs.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(t("form.sent"));
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <SiteLayout>
      <PageHeader eyebrow="Contact" title={t("contact.title")} sub={t("contact.sub")} />

      <section className="container-x py-16 grid gap-10 lg:grid-cols-5">
        <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label={t("form.name")} required />
            <Field name="company" label={t("form.company")} />
            <Field name="email" label={t("form.email")} type="email" required />
            <Field name="phone" label={t("form.phone")} type="tel" />
            <Field name="country" label={t("form.country")} />
            <Field name="subject" label={t("form.subject")} required />
          </div>
          <div>
            <label className="text-sm font-medium">{t("form.message")}<span className="text-energy"> *</span></label>
            <textarea name="message" required maxLength={2000} rows={5}
              className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
          </div>
          <button disabled={submitting} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60">
            <Send className="h-4 w-4" /> {t("form.send")}
          </button>
        </form>

        <aside className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl gradient-brand p-6 text-white">
            <h3 className="text-lg font-bold">{t("contact.info")}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5" /> +254 741 229 960</li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5" /> info@taksanenergy.com</li>
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5" /> Head Office: Nairobi, Kenya</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-brand">{t("contact.countries")}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>🇰🇪 Kenya</li>
              <li>🇨🇩 Democratic Republic of Congo</li>
              <li>🇲🇿 Mozambique</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="container-x pb-20">
        <div className="overflow-hidden rounded-2xl border border-border shadow">
          <iframe
            title="Regions we serve"
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16657846.03!2d24.85!3d-6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1700000000000"
            loading="lazy"
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}{required && <span className="text-energy"> *</span>}</label>
      <input name={name} type={type} required={required} maxLength={255}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
    </div>
  );
}
