import type { Metadata } from "next";
import Link from "next/link";
import { Phone, KeyRound, ShieldCheck, DoorOpen, Lock, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqSerrurerie } from "@/config/faq";
import { heroImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Serrurier urgence ${siteConfig.address.city} | Ouverture porte 24h/24 — Alliance Dépannage`,
  description: `Serrurier dépanneur à ${siteConfig.address.city}. Porte claquée, serrure bloquée, clé cassée. Ouverture de porte en urgence 24h/24 7j/7. Remplacement serrure multipoints. Appelez le ${siteConfig.phone}.`,
  path: "/serrurerie-depannage",
});

const urgences = [
  { icon: DoorOpen, title: "Porte claquée", desc: "Vous avez claqué votre porte sans vos clés ? Nous intervenons en moins de 2h pour l'ouverture sans dommage dans la majorité des cas." },
  { icon: KeyRound, title: "Clé cassée dans la serrure", desc: "Extraction professionnelle de la clé cassée sans abîmer le cylindre. Intervention propre et rapide à Argenteuil." },
  { icon: Lock, title: "Serrure bloquée", desc: "Serrure grippée, cylindre défaillant, poignée cassée... Nous diagnostiquons et réparons ou remplaçons immédiatement." },
  { icon: ShieldCheck, title: "Remplacement après effraction", desc: "Suite à une tentative d'effraction, nous remplaçons votre serrure par un modèle certifié A2P pour une sécurité renforcée." },
];

const typeSerrures = [
  "Serrures multipoints (3 et 5 points)",
  "Cylindres européens haute sécurité",
  "Serrures connectées et à code",
  "Serrures certifiées A2P 1, 2 et 3 étoiles",
  "Toutes marques : Fichet, Vachette, Picard, Mul-T-Lock",
  "Portes blindées et portes palières",
];

const etapes = [
  { num: "1", title: "Vous appelez", desc: "Décrivez votre situation. Nous estimons le délai et le tarif indicatif par téléphone avant de nous déplacer." },
  { num: "2", title: "On intervient sous 2h", desc: "Un serrurier qualifié arrive chez vous à Argenteuil avec l'outillage adapté à votre type de serrure." },
  { num: "3", title: "Problème résolu", desc: "Ouverture ou remplacement effectué. Facture transparente, pas de surprise." },
];

export default function SerrureriePage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Serrurier urgence à ${siteConfig.address.city} — Ouverture de porte 24h/24`,
        subtitle: "Porte claquée, serrure bloquée, clé cassée ? Appelez Alliance Dépannage maintenant.",
        imagePlaceholder: {
          prompt: "Serrurier professionnel en intervention devant porte appartement, outil de crochetage professionnel, eclairage couloir, expression concentree, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["generique-plombier"] || undefined,
        },
        badges: ["Urgence 24h/24", "Intervention <2h", "7j/7"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Serrurerie dépannage" },
      ]}
      faqs={faqSerrurerie}
      ctaVariant="urgent"
    >
      {/* Urgences prises en charge */}
      <SectionContainer>
        <SectionHeading
          title="Les urgences serrurerie que nous gérons"
          subtitle="Disponible 24h/24 et 7j/7 à Argenteuil et dans le Val-d'Oise."
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

      {/* Types de serrures */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Serrures que nous posons"
          subtitle="Remplacement et installation de serrures haute sécurité toutes marques."
        />
        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3">
            {typeSerrures.map((item) => (
              <div key={item} className="flex items-start gap-2 p-3 bg-white rounded-lg">
                <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Comment ça marche */}
      <SectionContainer variant="white">
        <SectionHeading
          title="Comment ça marche ?"
          subtitle="3 étapes simples pour une ouverture de porte sans stress."
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
      <SectionContainer variant="gray">
        <SectionHeading
          title="Tarifs indicatifs serrurerie"
          subtitle="Tarif annoncé avant intervention. Aucune mauvaise surprise."
        />
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border overflow-hidden">
            {[
              { service: "Ouverture de porte claquée", prix: "À partir de 89 EUR" },
              { service: "Extraction de clé cassée", prix: "À partir de 95 EUR" },
              { service: "Remplacement cylindre", prix: "À partir de 79 EUR" },
              { service: "Remplacement serrure multipoints", prix: "À partir de 180 EUR" },
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
      <SectionContainer variant="white">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/depannage-plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Dépannage urgence</Link>
          <Link href="/plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Plomberie</Link>
          <Link href="/chauffage" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Chauffage</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
