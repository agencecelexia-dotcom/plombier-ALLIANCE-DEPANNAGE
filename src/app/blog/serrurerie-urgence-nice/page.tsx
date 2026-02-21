import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Porte claquee a Argenteuil : reagir et eviter les arnaques | Alliance Depannage",
  description: "Bloque devant votre porte a Argenteuil ? Apprenez a choisir un serrurier de confiance, le cout reel d'une ouverture de porte et les arnaques a eviter absolument.",
  path: "/blog/serrurerie-urgence-nice",
});

export default function ArticlePage() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Serrurerie urgence Argenteuil" },
          ]}
        />
      </div>
      <SectionContainer>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <div className="mb-6 not-prose">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">Serrurerie</span>
            <span className="text-xs text-muted-foreground ml-3">25 janvier 2026 — 5 min de lecture</span>
          </div>
          <h1>Porte claquee a Argenteuil : comment reagir et eviter les arnaques</h1>
          <p className="lead">
            Vous rentrez chez vous et vous n'avez plus vos cles. Ou pire, votre cle est cassee dans la serrure. Dans ces moments de stress, le risque d'etre arnaque est reel. Voici ce qu'il faut savoir pour agir vite et bien a Argenteuil.
          </p>

          <h2>Que faire en premier ?</h2>
          <p>
            Avant tout, <strong>restez calme</strong>. Verifiez si une fenetre ou une autre entree est accessible en toute securite. Si vous etes locataire, appelez votre proprietaire ou votre gardien — ils peuvent avoir un double de cle. Si ce n'est pas possible, il faut appeler un serrurier.
          </p>

          <h2>Les arnaques au serrurier : comment les reconnaitre</h2>
          <p>
            Les arnaques au serrurier sont malheureusement frequentes, notamment dans les grandes villes cotieres comme Argenteuil. Voici les signaux d'alerte :
          </p>
          <ul>
            <li>Un devis telephonique tres bas (20-30 euros) qui explose apres intervention</li>
            <li>Absence de devis ecrit avant l'intervention</li>
            <li>Refus de vous montrer ses certifications ou son identite professionnelle</li>
            <li>Destruction systematique de la serrure meme quand ce n'est pas necessaire</li>
            <li>Paiement exige en especes uniquement</li>
          </ul>

          <h2>Ce que doit inclure une intervention serieuse</h2>
          <ul>
            <li>Un tarif clairement annonce avant toute intervention</li>
            <li>Une facture detaillee (main-d'oeuvre + pieces si remplacement)</li>
            <li>Le choix de reparer ou remplacer la serrure vous appartient</li>
            <li>Un technicien identifie, en tenue professionnelle</li>
          </ul>

          <h2>Combien coute une ouverture de porte a Argenteuil ?</h2>
          <p>
            En journee (heures ouvrables), une ouverture de porte simple se situe entre <strong>89 et 150 euros</strong> selon la difficulte. La nuit, le week-end ou les jours feries, un supplement est legitime mais doit etre annonce avant. Mefiez-vous des devis superieurs a 400-500 euros pour une ouverture simple.
          </p>

          <h2>Pourquoi faire confiance a Alliance Depannage ?</h2>
          <p>
            Alliance Depannage est un artisan local argenteuillais present depuis 2007. Sohaib et son equipe annoncent le tarif avant toute intervention, interviennent 24h/24 et remettent une facture detaillee. <strong>Aucune mauvaise surprise.</strong>
          </p>

          <div className="not-prose mt-8 p-6 bg-accent-500/10 rounded-xl">
            <p className="font-bold text-neutral-900 mb-2">Porte bloquee a Argenteuil ?</p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Appeler maintenant — {siteConfig.phone}
            </a>
          </div>

          <div className="not-prose mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
