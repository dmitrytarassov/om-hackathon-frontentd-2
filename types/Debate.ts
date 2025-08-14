import type { Opinion } from "@/types/Opinion";

export type Debate = {
  opinionId: number;
  title: string;
  description: string;
  image: string;
  trend: number[];
  yesPercent: number;
  noPercent: number;
  yesPrice: number;
  noPrice: number;
  totalLiquidity: number;
  participants: number;
  lastUpdated: string;
  opinionStream?: Opinion[];
  endsAtTimestamp: number;
};
