import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Mon radiateur ne chauffe plus : causes et solutions | Alliance Depannage Nice",
  description: "Radiateur froid ou tiede en hiver a Nice ? Decouvrez les causes les plus frequentes et les solutions — celles que vous pouvez faire vous-meme et quand appeler un chauffagiste.",
  path: "/blog/radiateur-ne-chauffe-plus",
});

export default function ArticlePage() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Radiateur ne chauffe plus" },
          ]}
        />
      </div>
      <SectionContainer>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <div className="mb-6 not-prose">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">Chauffage</span>
            <span className="text-xs text-muted-foreground ml-3">1 fevrier 2026 — 6 min de lecture</span>
          </div>
          <h1>Mon radiateur ne chauffe plus : causes et solutions</h1>
          <p className="lead">
            Un ou plusieurs radiateurs froids en plein hiver, c'est une situation stressante mais souvent resolvable. Voici un guide pratique pour identifier la cause — et savoir quand il faut vraiment appeler un chauffagiste a Nice.
          </p>

          <h2>Cause 1 : Le radiateur a besoin d'etre purge</h2>
          <p>
            Si votre radiateur est chaud en bas mais froid en haut, il contient probablement de l'air. La solution : <strong>purger le radiateur</strong>. Utilisez une cle de purge sur la vis en haut du radiateur, ouvrez legerement jusqu'a ce que l'eau sorte (quelques gouttes), puis refermez. Operez quand le chauffage est eteint.
          </p>

          <h2>Cause 2 : La pression de la chaudiere est trop basse</h2>
          <p>
            Si plusieurs radiateurs sont froids, verifiez le manometre de votre chaudiere. La pression doit etre entre <strong>1 et 2 bars</strong>. Si elle est inferieure, vous pouvez remettre de l'eau via le robinet de remplissage du circuit (generalement sous la chaudiere). Consultez votre notice.
          </p>

          <h2>Cause 3 : Le robinet thermostatique est bloque</h2>
          <p>
            Le robinet thermostatique (en bas du radiateur) peut se bloquer en position fermee apres l'ete. Retirez le bouton et verifiez si la tige est coincer. Vous pouvez parfois la debloquer avec une pince plate (doucement). Si le robinet est defaillant, un remplacement s'impose.
          </p>

          <h2>Cause 4 : Le circulateur est en panne</h2>
          <p>
            Le circulateur assure la circulation de l'eau dans le circuit de chauffage. S'il tombe en panne, aucun radiateur ne chauffe correctement. C'est une reparation a confier a un chauffagiste professionnel — Alliance Depannage peut intervenir le jour meme a Nice.
          </p>

          <h2>Cause 5 : La chaudiere est en panne ou mal reglere</h2>
          <p>
            Une chaudiere qui affiche un code erreur, qui s'allume et s'eteint rapidement (effet de court-cycle) ou dont la temperature de depart est mal reglee peut laisser les radiateurs froids. Ne touchez pas aux parametres si vous n'etes pas qualifie — appelez un chauffagiste.
          </p>

          <h2>Ce que vous pouvez faire seul vs ce qui necessite un pro</h2>
          <ul>
            <li><strong>A faire seul</strong> : purger un radiateur, verifier et ajuster la pression, debloquer un robinet thermostatique</li>
            <li><strong>A confier a un pro</strong> : remplacement de circulateur, reparation chaudiere, degazage du circuit, equilibrage du reseau</li>
          </ul>

          <div className="not-prose mt-8 p-6 bg-accent-500/10 rounded-xl">
            <p className="font-bold text-neutral-900 mb-2">Chauffage en panne a Nice ?</p>
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
