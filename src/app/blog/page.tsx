import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/sections/HeroSection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { siteConfig } from "@/config/site";
import { heroImages } from "@/config/images";

export const metadata: Metadata = generatePageMetadata({
  title: `Blog depannage ${siteConfig.address.city} | Conseils plomberie, chauffage, serrurerie`,
  description: `Conseils plomberie, chauffage, serrurerie et depannage d'urgence. Le blog d'Alliance Depannage, votre artisan depanneur a ${siteConfig.address.city}.`,
  path: "/blog",
});

const articles = [
  {
    slug: "depannage-urgence-nice",
    title: "Depannage urgence a Argenteuil : que faire et qui appeler ?",
    excerpt: "Fuite d'eau, panne de chaudiere, porte bloquee... Decouvrez les bons reflexes en situation d'urgence et comment Alliance Depannage peut vous aider a Argenteuil.",
    date: "15 fevrier 2026",
    category: "Depannage",
    readTime: "4 min",
  },
  {
    slug: "que-faire-fuite-eau",
    title: "Fuite d'eau chez vous : les 5 gestes qui peuvent tout changer",
    excerpt: "Une fuite d'eau non traitee peut causer des milliers d'euros de degats. Voici les 5 gestes a faire immediatement en attendant le plombier.",
    date: "8 fevrier 2026",
    category: "Plomberie",
    readTime: "5 min",
  },
  {
    slug: "radiateur-ne-chauffe-plus",
    title: "Mon radiateur ne chauffe plus : causes et solutions",
    excerpt: "Radiateur froid ou tiede en plein hiver ? Voici les verifications simples et quand il faut appeler un chauffagiste.",
    date: "1 fevrier 2026",
    category: "Chauffage",
    readTime: "6 min",
  },
  {
    slug: "serrurerie-urgence-nice",
    title: "Porte claquee a Argenteuil : comment reagir et eviter les arnaques",
    excerpt: "Vous etes bloque devant votre porte ? Voici comment choisir un serrurier de confiance a Argenteuil, ce que coute une ouverture de porte et les arnaques a eviter.",
    date: "25 janvier 2026",
    category: "Serrurerie",
    readTime: "5 min",
  },
  {
    slug: "climatisation-nice",
    title: "Climatisation a Argenteuil : quel systeme choisir et comment l'entretenir ?",
    excerpt: "Dans les Val-d'Oise, la climatisation est indispensable. Decouvrez les systemes disponibles, les conseils d'installation et l'entretien annuel recommande.",
    date: "18 janvier 2026",
    category: "Climatisation",
    readTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        variant="page"
        title="Blog — Conseils depannage, plomberie, chauffage, serrurerie"
        subtitle="Nos experts partagent leurs conseils pour faire face aux urgences du quotidien."
        imagePlaceholder={{
          prompt: "Vue aerienne plongee d'un plombier en uniforme bleu travaillant sur tuyauterie cuivre neuve dans maison en construction, lumiere naturelle, tons chauds, photo realiste, ratio 21:9",
          aspectRatio: "21/9",
          src: heroImages["blog"] || undefined,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <Breadcrumbs
          items={[
            { label: "Accueil", href: "/" },
            { label: "Blog" },
          ]}
        />
      </div>

      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group border rounded-xl p-6 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                  <span className="text-xs text-muted-foreground">{article.readTime} de lecture</span>
                </div>
                <h2 className="text-xl font-heading font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
