export const siteConfig = {
  name: "Alliance Dépannage",
  legalName: "Alliance Dépannage",
  description:
    "Plombier dépanneur à Argenteuil. Dépannage urgent 24h/24 7j/7, plomberie, chauffage, climatisation, serrurerie. Devis gratuit.",
  url: "https://www.alliancedepannage.fr",
  phone: "06 98 59 14 98",
  phoneHref: "tel:+33698591498",
  email: "alliance.depannage.fr@gmail.com",
  address: {
    street: "7 rue Michel Carré",
    city: "Argenteuil",
    postalCode: "95100",
    region: "Île-de-France",
    country: "France",
  },
  openingHours: {
    weekdays: "7h - 20h",
    saturday: "8h - 18h",
    sunday: "Sur appel",
    emergency: "24h/24 - 7j/7",
  },
  social: {
    facebook: "https://facebook.com/alliancedepannage",
    instagram: "https://instagram.com/alliancedepannage",
    google: "https://g.page/alliance-depannage-argenteuil",
  },
  siret: "499 711 364 00020",
  rge: "Artisan qualifié — RCP professionnelle",
  assuranceDecennale: "Assurance RC professionnelle",
  yearsExperience: 18,
  interventionsCount: 2000,
  googleRating: 4.9,
  googleReviewCount: 87,
  foundedYear: 2007,
  founder: "Sohaib",
} as const;

export type SiteConfig = typeof siteConfig;
