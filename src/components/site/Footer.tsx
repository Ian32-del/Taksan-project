import { Link } from "@tanstack/react-router";
import { Flame, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 bg-brand-deep text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-energy text-black shadow">
              <Flame className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">TAKSAN ENERGY</span>
          </div>
          <p className="mt-4 text-sm text-white/70">{t("footer.tagline")}</p>
          <div className="mt-5 flex gap-3 text-white/70">
            <a href="#" aria-label="LinkedIn" className="hover:text-energy"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-energy"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-energy"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-energy">{t("footer.quick")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-energy">{t("nav.about")}</Link></li>
            <li><Link to="/why-taksan" className="hover:text-energy">{t("nav.why")}</Link></li>
            <li><Link to="/team" className="hover:text-energy">{t("nav.team")}</Link></li>
            <li><Link to="/contact" className="hover:text-energy">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-energy">{t("footer.products")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/products" className="hover:text-energy">Super Petrol (PMS)</Link></li>
            <li><Link to="/products" className="hover:text-energy">Diesel (AGO)</Link></li>
            <li><Link to="/products" className="hover:text-energy">LPG</Link></li>
            <li><Link to="/products" className="hover:text-energy">Paraffin (IK)</Link></li>
            <li><Link to="/services" className="hover:text-energy">{t("footer.services")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-energy">{t("footer.contact")}</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +254 700 000 000</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@taksanenergy.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Nairobi, Kenya · Kinshasa, DRC · Maputo, Mozambique</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-2 py-5 text-xs text-white/60">
          <p>© 2026 Taksan Energy Limited. {t("footer.rights")}</p>
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
