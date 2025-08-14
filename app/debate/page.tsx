"use client";

import { useSearchParams } from "next/navigation";

import DebatePageLayout from "@/app/components/debate/DebatePageLayout";
import DebateMainContent from "@/app/components/debate/mainContent/DebateMainContent";
import DebateSidebar from "@/app/components/debate/sidebar/DebateSidebar";
import { debates } from "@/data/debates";

export default function Home() {
  const params = useSearchParams();
  const id = params.get("id");

  if (!id) return null;

  const debate = debates.find((e) => e.opinionId === +id);

  if (!debate) return null;

  return (
    <DebatePageLayout
      content={<DebateMainContent debate={debate} />}
      sidebar={<DebateSidebar debate={debate} />}
    />
  );
}
