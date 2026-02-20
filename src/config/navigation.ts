import type { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Dépannage urgent 24h/24", href: "/depannage-plomberie" },
      { label: "Plomberie générale", href: "/plomberie" },
      { label: "Chauffage", href: "/chauffage" },
      { label: "Climatisation / Chauffe-eau", href: "/chauffe-eau" },
      { label: "Serrurerie", href: "/serrurerie-depannage" },
    ],
  },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis-clients" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

export const serviceNavItems: NavItem[] = [
  { label: "Dépannage urgent 24h/24", href: "/depannage-plomberie" },
  { label: "Plomberie générale", href: "/plomberie" },
  { label: "Chauffage", href: "/chauffage" },
  { label: "Climatisation / Chauffe-eau", href: "/chauffe-eau" },
  { label: "Serrurerie", href: "/serrurerie-depannage" },
];
