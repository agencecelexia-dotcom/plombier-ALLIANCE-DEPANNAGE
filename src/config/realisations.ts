import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "sdb-villeurbanne",
    title: "Réparation fuite urgente",
    category: "Plomberie",
    city: "Nice Centre",
    description:
      "Intervention d'urgence pour une fuite sur canalisation d'eau chaude dans un appartement du centre de Nice. Réparation complète en 1h30.",
    beforePrompt:
      "Fuite d'eau importante sur tuyau cuivre sous évier, gouttes d'eau, sol mouillé, urgence, photo réaliste brute, ratio 4:3",
    afterPrompt:
      "Tuyauterie cuivre neuve sous évier, raccords neufs chromés, sol sec, réparation propre et soignée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "cuisine-lyon3",
    title: "Remplacement chauffe-eau",
    category: "Chauffe-eau",
    city: "Antibes",
    description:
      "Remplacement d'un vieux chauffe-eau en panne par un ballon électrique neuf. Intervention réalisée en demi-journée à Antibes.",
    beforePrompt:
      "Vieux chauffe-eau rouillé encrassé dans placard technique, tuyaux oxydés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chauffe-eau électrique neuf blanc, tuyauterie cuivre neuve, installation propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chauffe-eau-caluire",
    title: "Déblocage serrure d'urgence",
    category: "Serrurerie",
    city: "Nice Libération",
    description:
      "Ouverture d'urgence suite à une porte claquée, puis remplacement de la serrure par un modèle sécurisé multipoints.",
    beforePrompt:
      "Porte d'entrée appartement fermée avec serrure ancienne défaillante, vue rapprochée cylindre abîmé, photo réaliste, ratio 4:3",
    afterPrompt:
      "Serrure multipoints neuve installée sur porte d'entrée, cylindre sécurisé chromé, porte entrouverte, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "pac-bron",
    title: "Installation climatisation split",
    category: "Climatisation",
    city: "Cagnes-sur-Mer",
    description:
      "Installation d'un climatiseur split inverter dans un appartement à Cagnes-sur-Mer. Pose propre, raccordements soignés.",
    beforePrompt:
      "Salon appartement méditerranéen sans climatisation, fenêtre ouverte chaleur, photo réaliste, ratio 4:3",
    afterPrompt:
      "Unité intérieure split climatisation blanche fixée au mur proprement, télécommande, pièce fraîche, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-pmr-lyon6",
    title: "Réparation chaudière urgente",
    category: "Chauffage",
    city: "Nice Est",
    description:
      "Dépannage d'urgence chaudière gaz — diagnostic et remplacement du circulateur défaillant. Chauffage rétabli en 2h.",
    beforePrompt:
      "Chaudière gaz murale en panne, affichage erreur, plombier avec outil diagnostic, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chaudière gaz murale réparée, affichage normal vert, tuyauterie cuivre propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chaudiere-tassin",
    title: "Détection et réparation de fuite cachée",
    category: "Plomberie",
    city: "Cannes",
    description:
      "Recherche et réparation d'une fuite dans une canalisation encastrée à Cannes. Utilisation de détecteur acoustique sans casse.",
    beforePrompt:
      "Mur de salle de bain avec trace humidité, carrelage décollé, fuite non visible, photo réaliste, ratio 4:3",
    afterPrompt:
      "Canalisation réparée, mur rebouché proprement, carrelage remis en place, salle de bain sèche, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "douche-lyon7",
    title: "Débouchage canalisation haute pression",
    category: "Plomberie",
    city: "Menton",
    description:
      "Débouchage d'une canalisation principale complètement obstruée dans une villa à Menton. Intervention par hydrocurage haute pression.",
    beforePrompt:
      "Evier de cuisine avec eau stagnante bouchée, canalisation obstruée, photo réaliste, ratio 4:3",
    afterPrompt:
      "Evier vidé eau s'écoule normalement après débouchage, canalisation propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "plancher-chauffant-ecully",
    title: "Remplacement robinetterie complète",
    category: "Plomberie",
    city: "Antibes Juan-les-Pins",
    description:
      "Remplacement de l'ensemble de la robinetterie d'une salle de bain ancienne à Antibes. Robinet mitigeur, douchette, WC.",
    beforePrompt:
      "Salle de bain ancienne, robinets chromés rouillés qui gouttent, joints usés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salle de bain avec nouvelle robinetterie moderne chromée, mitigeur thermostatique, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "depannage-lyon2",
    title: "Dégât des eaux — intervention express",
    category: "Plomberie",
    city: "Nice Promenade",
    description:
      "Intervention express pour dégât des eaux important dans un appartement. Coupure, réparation et assèchement en urgence.",
    beforePrompt:
      "Appartement avec dégât des eaux, sol trempé, eau qui coule d'un tuyau percé, urgence, photo réaliste, ratio 4:3",
    afterPrompt:
      "Appartement sec après intervention, tuyauterie réparée, sol asséché, travail propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-complete-oullins",
    title: "Installation chaudière gaz condensation",
    category: "Chauffage",
    city: "Nice Ouest",
    description:
      "Installation d'une chaudière gaz condensation en remplacement d'un modèle de 20 ans. Économies d'énergie immédiates.",
    beforePrompt:
      "Vieille chaudière gaz murale encrassée, tuyaux anciens, thermostat analogique, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chaudière gaz condensation murale blanche moderne, écran digital vert, tuyauterie cuivre propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
];
