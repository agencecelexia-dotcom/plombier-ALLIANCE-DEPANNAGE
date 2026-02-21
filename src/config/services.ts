import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "Dépannage urgent 24h/24",
    shortDescription: "Intervention rapide en moins de 2h pour toutes vos urgences, 7j/7 et la nuit.",
    description:
      "Fuite d'eau, canalisation bouchée, dégât des eaux, panne de chaudière, serrure bloquée... Alliance Dépannage intervient en urgence 24h/24 et 7j/7 à Argenteuil et dans le Val-d'Oise. Diagnostic sur place et réparation immédiate dans la majorité des cas.",
    icon: "Siren",
    slug: "/depannage-plomberie",
  },
  {
    title: "Plomberie générale",
    shortDescription: "Installation, remplacement et réparation de tous vos équipements sanitaires.",
    description:
      "Robinetterie, tuyauterie, raccordements, WC, éviers, détection de fuite, débouchage... Nous intervenons pour tous vos travaux de plomberie à Argenteuil, de la réparation urgente à l'installation complète de vos équipements sanitaires.",
    icon: "Wrench",
    slug: "/plomberie",
  },
  {
    title: "Chauffage",
    shortDescription: "Dépannage, installation et entretien de chaudière et systèmes de chauffage.",
    description:
      "Dépannage et remplacement de chaudière gaz, entretien annuel, radiateurs qui ne chauffent plus, panne de chauffe-eau... Notre équipe intervient rapidement pour rétablir le confort thermique dans votre logement à Argenteuil.",
    icon: "Flame",
    slug: "/chauffage",
  },
  {
    title: "Climatisation",
    shortDescription: "Installation, entretien et dépannage de systèmes de climatisation à Argenteuil.",
    description:
      "Installation de climatiseurs split et multi-split, entretien et nettoyage, dépannage en urgence. Profitez d'une installation propre et efficace par un artisan qualifié à Argenteuil et dans le Val-d'Oise.",
    icon: "Wind",
    slug: "/chauffe-eau",
  },
  {
    title: "Serrurerie",
    shortDescription: "Ouverture de porte, remplacement de serrure, dépannage urgence 24h/24.",
    description:
      "Porte claquée, serrure bloquée, clé cassée dans la serrure, effraction... Alliance Dépannage intervient en urgence pour toute serrurerie à Argenteuil. Remplacement et renforcement de serrures toutes marques.",
    icon: "KeyRound",
    slug: "/serrurerie-depannage",
  },
  {
    title: "Chauffe-eau",
    shortDescription: "Remplacement, installation ballon d'eau chaude, dépannage.",
    description:
      "Remplacement de chauffe-eau électrique ou gaz, installation de ballon thermodynamique, détartrage et entretien. Intervention rapide pour retrouver l'eau chaude sanitaire chez vous à Argenteuil.",
    icon: "Droplets",
    slug: "/chauffe-eau",
  },
];
