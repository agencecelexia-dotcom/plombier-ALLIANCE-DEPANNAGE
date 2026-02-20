import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Fuite d'eau : les 5 gestes qui peuvent tout changer | Alliance Depannage Nice",
  description: "Fuite d'eau chez vous a Nice ? Voici les 5 gestes immediats a effectuer pour limiter les degats avant l'arrivee du plombier.",
  path: "/blog/que-faire-fuite-eau",
});

export default function ArticlePage() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Fuite eau" },
          ]}
        />
      </div>
      <SectionContainer>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <div className="mb-6 not-prose">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">Plomberie</span>
            <span className="text-xs text-muted-foreground ml-3">8 fevrier 2026 — 5 min de lecture</span>
          </div>
          <h1>Fuite d'eau chez vous : les 5 gestes qui peuvent tout changer</h1>
          <p className="lead">
            Une fuite d'eau, meme apparemment mineure, peut rapidement causer des milliers d'euros de degats si elle n'est pas traitee rapidement. A Nice comme partout, le bon reflexe c'est d'agir vite — et dans le bon ordre.
          </p>

          <h2>Geste n°1 : Couper l'eau immediatement</h2>
          <p>
            Le premier reflexe : <strong>fermer le robinet d'arret general</strong>. Il se trouve generalement sous l'evier de la cuisine, dans un placard technique ou a l'entree de l'appartement. En fermant cette vanne, vous stoppez l'alimentation en eau et limitez immediatement les degats.
          </p>

          <h2>Geste n°2 : Couper l'electricite dans la zone touchee</h2>
          <p>
            L'eau et l'electricite ne font pas bon menage. Si la fuite est proche d'un tableau electrique, d'une prise ou d'un appareil electrique, <strong>coupez le disjoncteur de la zone concernee</strong>. Ne touchez a rien avant d'etre sur que la zone est securisee.
          </p>

          <h2>Geste n°3 : Epoger et assecher</h2>
          <p>
            Utilisez des serviettes, des serpillieres ou un aspirateur eau/poussiere pour enlever l'eau stagnante. Plus vite vous asechez, moins les risques de moisissures et de deformation du parquet ou des plinthes sont importants.
          </p>

          <h2>Geste n°4 : Photographier les degats</h2>
          <p>
            Avant de nettoyer, <strong>prenez des photos et des videos</strong> des degats pour votre declaration d'assurance. Documentez la source de la fuite, les degats visibles, les meubles ou appareils touches.
          </p>

          <h2>Geste n°5 : Appeler un plombier urgentiste</h2>
          <p>
            Ne tardez pas. Meme si la fuite semble colmatee provisoirement, une intervention professionnelle est necessaire pour reparer durablement et eviter une recidive. Alliance Depannage intervient <strong>en moins de 2h a Nice, 24h/24 et 7j/7</strong>.
          </p>

          <h2>Quand suspecter une fuite cachee ?</h2>
          <p>
            Si votre facture d'eau augmente sans raison, si vous entendez de l'eau couler sans raison apparente, ou si des taches d'humidite apparaissent dans les murs ou le plafond — c'est probablement une fuite cachee. Nous utilisons des detecteurs acoustiques et thermiques pour la localiser sans casse.
          </p>

          <div className="not-prose mt-8 p-6 bg-accent-500/10 rounded-xl">
            <p className="font-bold text-neutral-900 mb-2">Fuite en cours a Nice ?</p>
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
