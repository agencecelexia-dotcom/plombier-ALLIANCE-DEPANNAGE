import type { Metadata } from "next";
import Link from "next/link";
import { Phone, AlertTriangle, Droplets, ShowerHead, Flame, KeyRound } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqDepannage } from "@/config/faq";
import { heroImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Plombier urgence ${siteConfig.address.city} | Dépannage 24h/24 7j/7 — Alliance Dépannage`,
  description: `Dépannage plomberie urgent à ${siteConfig.address.city}. Fuite d'eau, WC bouché, dégât des eaux, serrure bloquée. Intervention en moins de 2h, 24h/24 7j/7. Appelez le ${siteConfig.phone}.`,
  path: "/depannage-plomberie",
});

const urgences = [
  { icon: Droplets, title: "Fuite d'eau", desc: "Fuite sur canalisation, robinet, raccord ou chasse d'eau. Intervention rapide pour limiter les dégâts." },
  { icon: AlertTriangle, title: "Dégât des eaux", desc: "Coupure d'eau d'urgence, assèchement et réparation. Nous vous accompagnons pour le constat assurance." },
  { icon: ShowerHead, title: "Canalisation bouchée", desc: "Débouchage WC, évier, douche ou canalisation principale par furet électrique ou haute pression." },
  { icon: Flame, title: "Panne de chaudière", desc: "Diagnostic et réparation de votre chaudière gaz, même le week-end et la nuit." },
  { icon: KeyRound, title: "Serrure bloquée / Porte claquée", desc: "Ouverture de porte sans dommage, extraction de clé cassée, remplacement serrure en urgence." },
  { icon: Droplets, title: "Détection de fuite cachée", desc: "Fuite dans les murs ou sous le sol ? Nous localisons sans casse avec du matériel professionnel." },
];

const etapes = [
  { num: "1", title: "Vous appelez", desc: "Décrivez-nous votre problème. Nous évaluons l'urgence et vous donnons un tarif indicatif immédiatement." },
  { num: "2", title: "On intervient sous 2h", desc: "Un technicien qualifié se déplace chez vous à Argenteuil avec tout le matériel nécessaire." },
  { num: "3", title: "Problème résolu", desc: "Réparation immédiate dans la majorité des cas. Facture claire, pas de mauvaise surprise." },
];

export default function DepannagePage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Dépannage urgent à ${siteConfig.address.city} — Intervention en moins de 2h, 24h/24`,
        subtitle: "Fuite d'eau, WC bouché, panne de chaudière, porte bloquée ? Appelez maintenant.",
        imagePlaceholder: {
          prompt: "Plombier en intervention urgence la nuit, lampe frontale allumee, coupant l'arrivee d'eau principale dans une cave, expression concentree, eclairage dramatique, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["depannage-plomberie"] || undefined,
        },
        badges: ["Urgence 24h/24", "Intervention <2h", "7j/7"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Dépannage urgence" },
      ]}
      faqs={faqDepannage}
      ctaVariant="urgent"
    >
      {/* Urgences prises en charge */}
      <SectionContainer>
        <SectionHeading
          title="Les urgences que nous prenons en charge"
          subtitle="Plomberie, chauffage, serrurerie — un seul numéro pour tout gérer 24h/24."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {urgences.map((u) => (
            <Card key={u.title} className="border-accent-500/20">
              <CardContent className="p-6 flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-500/10 flex items-center justify-center shrink-0">
                  <u.icon className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{u.title}</h3>
                  <p className="text-sm text-muted-foreground">{u.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Comment ça marche */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Comment ça marche ?"
          subtitle="3 étapes simples pour un dépannage sans stress à Argenteuil."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {etapes.map((e) => (
            <div key={e.num} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">{e.num}</span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={siteConfig.phoneHref}
            className="px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 shadow-lg transition-all inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Appelez maintenant — {siteConfig.phone}
          </a>
        </div>
      </SectionContainer>

      {/* Tarifs indicatifs */}
      <SectionContainer variant="white">
        <SectionHeading
          title="Tarifs indicatifs"
          subtitle="Transparence totale sur nos prix. Le tarif exact vous est confirmé avant intervention."
        />
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border overflow-hidden">
            {[
              { service: "Débouchage WC / évier", prix: "À partir de 89 EUR" },
              { service: "Réparation fuite", prix: "À partir de 120 EUR" },
              { service: "Remplacement robinet", prix: "À partir de 95 EUR" },
              { service: "Ouverture de porte (serrurerie)", prix: "À partir de 89 EUR" },
              { service: "Déplacement + diagnostic", prix: "À partir de 49 EUR" },
            ].map((t, i) => (
              <div key={t.service} className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-muted/50" : ""}`}>
                <span className="text-sm font-medium">{t.service}</span>
                <span className="text-sm font-semibold text-accent-500">{t.prix}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            * Tarifs TTC indicatifs hors pièces. Supplément possible la nuit, week-end et jours fériés.
          </p>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="gray">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Plomberie</Link>
          <Link href="/chauffage" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Chauffage</Link>
          <Link href="/serrurerie-depannage" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Serrurerie</Link>
          <Link href="/chauffe-eau" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Chauffe-eau &amp; Clim</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
