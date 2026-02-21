import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Wind, Heater, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqChauffage } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Chauffagiste ${siteConfig.address.city} | Dépannage chaudière, radiateurs, entretien`,
  description: `Chauffagiste à ${siteConfig.address.city}. Dépannage chaudière gaz, radiateurs qui ne chauffent plus, entretien annuel. Intervention rapide 24h/24. Devis gratuit.`,
  path: "/chauffage",
});

const servicesChauffage = [
  { icon: Flame, title: "Dépannage chaudière gaz", desc: "Panne, fuite, erreur d'affichage... Alliance Dépannage intervient en urgence pour le diagnostic et la réparation de votre chaudière gaz à Argenteuil.", image: "Chaudiere gaz condensation murale blanche moderne dans buanderie rangee, ecran digital vert, tuyauterie cuivre propre, photo realiste, ratio 3:2", imageKey: "chauffage-chaudiere-gaz" },
  { icon: Heater, title: "Radiateurs et circuit de chauffage", desc: "Radiateurs froids, purge, remplacement de robinets thermostatiques, équilibrage du circuit... Nous rétablissons le confort thermique rapidement.", image: "Installation plancher chauffant en cours, tubes PER rouges en serpentin sur isolant argente, vue plongee, chantier propre, photo realiste, ratio 3:2", imageKey: "chauffage-plancher-chauffant" },
  { icon: Wind, title: "Pompe à chaleur et climatisation", desc: "Installation et dépannage de pompe à chaleur air-eau et climatisation réversible. Confort été comme hiver à Argenteuil et dans le Val-d'Oise.", image: "Unite exterieure pompe a chaleur air-eau blanche installee sur terrasse maison individuelle, jardin soigne, photo realiste, ratio 3:2", imageKey: "chauffage-pac" },
];

const entretienInclus = [
  "Vérification de la combustion et des émissions",
  "Nettoyage du corps de chauffe et du brûleur",
  "Contrôle de la pression et du circulateur",
  "Vérification des dispositifs de sécurité",
  "Mesure du taux de CO (monoxyde de carbone)",
  "Remise de l'attestation d'entretien",
];

export default function ChauffagePage() {
  return (
    <ServicePageLayout
      hero={{
        title: `Chauffagiste à ${siteConfig.address.city} — Dépannage, installation et entretien`,
        subtitle: "Chaudière en panne, radiateurs froids ? Intervention rapide 24h/24 à Argenteuil.",
        imagePlaceholder: {
          prompt: "Salon chaleureux maison francaise, radiateur design blanc sous fenetre, lumiere doree hivernale, sensation confort et chaleur, photo realiste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffage"] || undefined,
        },
        badges: ["Urgence 24h/24", "7j/7", "Devis gratuit"],
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Chauffage" },
      ]}
      faqs={faqChauffage}
    >
      {/* Services */}
      <SectionContainer>
        <SectionHeading
          title="Nos services chauffage"
          subtitle="Dépannage, installation et entretien de tous types de systèmes de chauffage à Argenteuil."
        />
        <div className="space-y-12">
          {servicesChauffage.map((s, i) => (
            <div key={s.title} className="grid lg:grid-cols-2 gap-8 items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-neutral-900">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ImagePlaceholder prompt={s.image} src={pageImages[s.imageKey] || undefined} aspectRatio="3/2" alt={s.title} />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Entretien */}
      <SectionContainer variant="gray" id="entretien">
        <SectionHeading
          title="Entretien annuel chaudière"
          subtitle="L'entretien de votre chaudière est obligatoire chaque année. Nous intervenons sur toutes les marques à Argenteuil."
        />
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-neutral-900">Ce qui est inclus</h3>
                <span className="px-3 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">À partir de 89 EUR TTC</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {entretienInclus.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title="Services liés" />
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/chauffe-eau" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Chauffe-eau & Climatisation</Link>
          <Link href="/depannage-plomberie" className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">Dépannage plomberie</Link>
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
