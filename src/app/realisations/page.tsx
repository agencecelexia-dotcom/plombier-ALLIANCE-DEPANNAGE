import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import RealisationsClient from "./RealisationsClient";

export const metadata: Metadata = generatePageMetadata({
  title: "Nos réalisations — Dépannage, plomberie, chauffage à Nice",
  description: "Découvrez nos réalisations : dépannage urgence, plomberie, chauffage, serrurerie, climatisation. Photos avant/après de nos interventions à Nice.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return <RealisationsClient />;
}
