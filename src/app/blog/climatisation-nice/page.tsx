import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Climatisation a Argenteuil : quel systeme choisir et comment l'entretenir ?",
  description: "Guide complet sur la climatisation a Argenteuil et dans les Val-d'Oise. Systemes split, reversibles, entretien annuel, installation par Alliance Depannage.",
  path: "/blog/climatisation-nice",
});

export default function ArticlePage() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Climatisation Argenteuil" },
          ]}
        />
      </div>
      <SectionContainer>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <div className="mb-6 not-prose">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">Climatisation</span>
            <span className="text-xs text-muted-foreground ml-3">18 janvier 2026 — 7 min de lecture</span>
          </div>
          <h1>Climatisation a Argenteuil : quel systeme choisir et comment l'entretenir ?</h1>
          <p className="lead">
            Avec des etes de plus en plus chauds sur la Cote d'Azur, la climatisation n'est plus un luxe a Argenteuil — c'est souvent une necessite. Mais face a la multitude de systemes disponibles, comment faire le bon choix ? Et une fois installe, comment l'entretenir ?
          </p>

          <h2>Les differents types de climatisation</h2>

          <h3>Le split monosplit</h3>
          <p>
            C'est le systeme le plus repandu. Il comprend une <strong>unite interieure</strong> (dans la piece) et une <strong>unite exterieure</strong> (sur la facade ou la terrasse). Ideal pour climatiser une piece unique. Silencieux, efficace, il est reversible (chauffe en hiver aussi).
          </p>

          <h3>Le split multi-split</h3>
          <p>
            Une seule unite exterieure alimente <strong>plusieurs unites interieures</strong> dans differentes pieces. Parfait pour un appartement ou une villa a Argenteuil avec plusieurs pieces a climatiser. Plus economique a l'installation que plusieurs monosplits individuels.
          </p>

          <h3>La climatisation gainable</h3>
          <p>
            Le systeme est entierement dissimule dans les faux plafonds. Esthetiquement discret, il distribue l'air via des bouches d'aeration. Solution haut de gamme pour les belles demeures de la Cote d'Azur.
          </p>

          <h2>Comment choisir la puissance ?</h2>
          <p>
            En regle generale, il faut compter <strong>100 W de puissance par m²</strong> pour une region mediterraneenne comme Argenteuil. Un sejour de 25 m² necessiterait donc un appareil d'environ 2 500 W (2,5 kW). Mais l'exposition, l'isolation et la hauteur sous plafond influencent ce calcul.
          </p>

          <h2>L'entretien annuel : obligatoire et indispensable</h2>
          <p>
            Un entretien regulier de votre climatisation garantit son efficacite et prolonge sa duree de vie. Voici ce qu'il faut faire :
          </p>
          <ul>
            <li><strong>Tous les mois (ete)</strong> : nettoyez les filtres de l'unite interieure — ils se retirent facilement et se rincent a l'eau</li>
            <li><strong>Une fois par an</strong> : faites verifier la charge en frigorigene par un professionnel (obligatoire legalement pour les systemes contenant plus de 2 kg de fluide)</li>
            <li><strong>Tous les 2-3 ans</strong> : nettoyage professionnel complet de l'unite exterieure et du circuit</li>
          </ul>

          <h2>Pourquoi faire appel a Alliance Depannage pour votre clim ?</h2>
          <p>
            Alliance Depannage installe et entretient les climatisations a Argenteuil et dans les Val-d'Oise depuis 2007. Sohaib et son equipe proposent des <strong>devis gratuits sur mesure</strong>, une installation propre et soignee, et un service apres-vente rapide en cas de panne.
          </p>

          <div className="not-prose mt-8 p-6 bg-accent-500/10 rounded-xl">
            <p className="font-bold text-neutral-900 mb-2">Besoin d'installer ou de depanner votre clim a Argenteuil ?</p>
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
