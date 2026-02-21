import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = generatePageMetadata({
  title: "Depannage urgence a Argenteuil : que faire et qui appeler ? | Alliance Depannage",
  description: "Fuite d'eau, panne de chaudiere, porte bloquee a Argenteuil... Decouvrez les bons reflexes et pourquoi appeler Alliance Depannage en urgence 24h/24.",
  path: "/blog/depannage-urgence-nice",
});

export default function ArticlePage() {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl pt-8">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Depannage urgence Argenteuil" },
          ]}
        />
      </div>
      <SectionContainer>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <div className="mb-6 not-prose">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">Depannage</span>
            <span className="text-xs text-muted-foreground ml-3">15 fevrier 2026 — 4 min de lecture</span>
          </div>
          <h1>Depannage urgence a Argenteuil : que faire et qui appeler ?</h1>
          <p className="lead">
            A Argenteuil et dans les Val-d'Oise, les situations d'urgence a domicile peuvent arriver n'importe quand : fuite d'eau en pleine nuit, panne de chaudiere un dimanche, serrure bloquee apres 20h. La cle, c'est de savoir reagir vite — et de connaitre les bons interlocuteurs.
          </p>

          <h2>1. Fuite d'eau : les premiers gestes</h2>
          <p>
            Face a une fuite d'eau, chaque minute compte. Avant d'appeler le plombier, <strong>coupez l'arrivee d'eau generale</strong> — le robinet d'arret se trouve generalement sous l'evier, dans un placard technique ou a l'entree du logement. Coupez egalement l'electricite dans la zone touchee pour eviter tout court-circuit.
          </p>
          <p>
            Ensuite, epongez l'eau stagnante pour limiter les degats et prevenir les moisissures. Prenez des photos pour votre assurance. Puis appelez un plombier urgentiste.
          </p>

          <h2>2. Panne de chaudiere : ne touchez pas a tout</h2>
          <p>
            Si votre chaudiere affiche un code erreur ou s'est eteinte, verifiez d'abord la pression du circuit (le manometre doit etre entre 1 et 2 bars). Un simple remplissage peut resoudre le probleme. Si ce n'est pas le cas, n'essayez pas de reparer vous-meme : appelez un chauffagiste qualifie. En hiver a Argenteuil, une panne de chauffage est une vraie urgence.
          </p>

          <h2>3. Porte claquee : ne paniquez pas</h2>
          <p>
            Vous avez claque votre porte sans vos cles ? Avant de casser une vitre (ce qui coute cher et abime la securite), appelez un serrurier agree. Alliance Depannage intervient pour l'ouverture de porte en moins de 2h a Argenteuil, sans abimer le cadre dans la grande majorite des cas.
          </p>

          <h2>4. Pourquoi choisir Alliance Depannage pour vos urgences ?</h2>
          <ul>
            <li><strong>Disponible 24h/24 et 7j/7</strong>, meme la nuit et les jours feries</li>
            <li><strong>Intervention en moins de 2h</strong> a Argenteuil et dans les Val-d'Oise</li>
            <li><strong>Tarif annonce avant deplacement</strong> : pas de surprise</li>
            <li><strong>Un seul numero</strong> pour la plomberie, le chauffage ET la serrurerie</li>
          </ul>

          <div className="not-prose mt-8 p-6 bg-accent-500/10 rounded-xl">
            <p className="font-bold text-neutral-900 mb-2">Urgence en cours ?</p>
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
