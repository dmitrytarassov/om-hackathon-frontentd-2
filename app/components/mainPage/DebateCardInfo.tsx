"use client";

import React from "react";

import { formatDate } from "@/helpers/formatDate";
import { formatDollar } from "@/helpers/formatDollar";
import type { Debate } from "@/types/Debate";

type DebateCardInfoProps = {
  debate: Debate;
};

const DebateCardInfo: React.FC<DebateCardInfoProps> = ({ debate }) => {
  return (
    <div className="flex w-full p-4 justify-between text-xs text-muted">
      <span className="">{formatDollar(debate.totalLiquidity)} Vol.</span>
      <span>{formatDate(debate.endsAtTimestamp)}</span>
    </div>
  );
};

export default DebateCardInfo;
