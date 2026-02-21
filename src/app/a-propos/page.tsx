import type { Metadata } from "next";
import { ShieldCheck, Award, Clock, Users, Wrench, Heart, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";
import { heroImages, pageImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `À propos — ${siteConfig.name}`,
  description: `Découvrez ${siteConfig.name}, votre artisan dépanneur à ${siteConfig.address.city} depuis ${siteConfig.yearsExperience} ans. Plomberie, chauffage, serrurerie, climatisation. Urgence 24h/24.`,
  path: "/a-propos",
});

const chiffres = [
  { value: `${siteConfig.yearsExperience}+`, label: "Années d'expérience", icon: Clock },
  { value: `${siteConfig.interventionsCount}+`, label: "Interventions réalisées", icon: Wrench },
  { value: `${siteConfig.googleReviewCount}`, label: "Avis Google", icon: Users },
  { value: `${siteConfig.googleRating}/5`, label: "Note moyenne", icon: Award },
];

const valeurs = [
  { icon: Clock, title: "Réactivité", desc: "Disponible 24h/24 et 7j/7, nous intervenons en moins de 2h pour toutes vos urgences à Argenteuil et dans le Val-d'Oise." },
  { icon: Heart, title: "Transparence", desc: "Devis détaillés, tarifs clairs, annoncés avant intervention. Vous savez exactement ce que vous payez, sans mauvaise surprise." },
  { icon: ShieldCheck, title: "Qualité", desc: "Travail soigné, matériaux de qualité, chantier propre. Alliance Dépannage garantit chaque intervention jusqu'à votre entière satisfaction." },
];

export default function AProposPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title={`${siteConfig.name} — Votre artisan dépanneur à ${siteConfig.address.city} depuis ${siteConfig.yearsExperience} ans`}
        subtitle="Réactivité, professionnalisme et transparence au service de votre confort."
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme travaillant sur tuyauterie cuivre neuve dans maison en construction, lumiere naturelle, tons chauds, photo realiste, ratio 21:9",
          aspectRatio: "21/9",
          src: heroImages["a-propos"] || undefined,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "À propos" },
          ]}
        />
      </div>

      {/* Notre histoire */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading title="Notre histoire" centered={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fondée en {siteConfig.foundedYear} par {siteConfig.founder}, {siteConfig.name} est née d&apos;une conviction simple : en situation d&apos;urgence, chaque minute compte. Les clients méritent un artisan fiable, disponible à toute heure et honnête sur ses tarifs.
              </p>
              <p>
                Après {siteConfig.yearsExperience} ans d&apos;expérience et plus de {siteConfig.interventionsCount} interventions dans le Val-d&apos;Oise, Sohaib et son équipe restent fidèles à cette philosophie. Plomberie, chauffage, climatisation, serrurerie : Alliance Dépannage couvre l&apos;ensemble des besoins en dépannage 24h/24 à Argenteuil et dans sa région.
              </p>
              <p>
                Notre engagement : intervenir rapidement, expliquer clairement le problème et proposer la meilleure solution au juste prix. Aucune mauvaise surprise, aucun devis caché.
              </p>
            </div>
          </div>
          <ImagePlaceholder
            prompt="Portrait professionnel artisan depanneur francais, polo bleu logo brode, bras croises, sourire confiant, atelier range arriere-plan flou, photo realiste, ratio 2:3"
            src={pageImages["a-propos-fondateur"] || undefined}
            aspectRatio="2/3"
            alt={`${siteConfig.founder}, fondateur de ${siteConfig.name}`}
            className="max-w-sm mx-auto"
          />
        </div>
      </SectionContainer>

      {/* Équipe */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Notre équipe"
          subtitle="Des techniciens qualifiés et disponibles à toute heure à Argenteuil et dans le Val-d'Oise."
        />
        <ImagePlaceholder
          prompt="Equipe de 2-3 techniciens en uniforme bleu propre devant camionnette utilitaire blanche avec logo, souriant, parking exterieur Argenteuil, lumiere naturelle, photo realiste, ratio 3:2"
          src={pageImages["a-propos-equipe"] || undefined}
          aspectRatio="3/2"
          alt={`L'équipe ${siteConfig.name}`}
          className="max-w-3xl mx-auto"
        />
      </SectionContainer>

      {/* Chiffres clés */}
      <SectionContainer variant="warm">
        <SectionHeading title="En quelques chiffres" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {chiffres.map((c) => (
            <div key={c.label} className="text-center">
              <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">
                {c.value}
              </div>
              <p className="text-sm text-muted-foreground">{c.label}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Valeurs */}
      <SectionContainer variant="white">
        <SectionHeading title="Nos valeurs" />
        <div className="grid md:grid-cols-3 gap-8">
          {valeurs.map((v) => (
            <Card key={v.title}>
              <CardContent className="p-6 text-center">
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Certifications */}
      <SectionContainer variant="gray">
        <SectionHeading
          title="Informations légales"
          subtitle="Artisan indépendant immatriculé, assuré et responsable."
        />
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { label: "Artisan qualifié", detail: siteConfig.rge },
            { label: "Assurance RC professionnelle", detail: siteConfig.assuranceDecennale },
            { label: "SIRET", detail: siteConfig.siret },
          ].map((cert) => (
            <div key={cert.label} className="flex items-center gap-3 p-4 rounded-lg bg-white">
              <CheckCircle className="w-5 h-5 text-accent-500 shrink-0" />
              <div>
                <span className="font-medium text-sm">{cert.label}</span>
                <span className="text-sm text-muted-foreground ml-2">{cert.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <CTASection />
    </>
  );
}
