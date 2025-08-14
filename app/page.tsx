import DebateCard from "@/app/components/mainPage/DebateCard";
import MainPageLayout from "@/app/components/mainPage/MainPageLayout";
import { debates } from "@/data/debates";

export default function Home() {
  return (
    <MainPageLayout>
      {debates.map((e) => (
        <DebateCard debate={e} key={e.opinionId} />
      ))}
    </MainPageLayout>
  );
}
