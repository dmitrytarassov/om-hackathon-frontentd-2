"use client";

import { useSearchParams } from "next/navigation";

import DebateMainContent from "@/app/components/debate/mainContent/DebateMainContent";
import DebateSidebar from "@/app/components/debate/sidebar/DebateSidebar";
import PageLayout from "@/app/components/layout/PageLayout";
import { debates } from "@/data/debates";

export default function Home() {
  const params = useSearchParams();
  const id = params.get("id");

  if (!id) return null;

  const debate = debates.find((e) => e.opinionId === +id);

  if (!debate) return null;

  return (
    <PageLayout
      content={<DebateMainContent debate={debate} />}
      sidebar={<DebateSidebar debate={debate} />}
    />
  );
}
