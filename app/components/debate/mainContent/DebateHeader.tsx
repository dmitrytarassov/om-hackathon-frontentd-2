"use client";

import React from "react";

import DebateProcess from "@/app/components/common/DebateProcess";
import DebateGoodBad from "@/app/components/debate/mainContent/DebateGoodBad";
import DebateTitle from "@/app/components/debate/mainContent/DebateTitle";
import type { Debate } from "@/types/Debate";

type DebateHeaderProps = {
  debate: Debate;
};

const DebateHeader: React.FC<DebateHeaderProps> = ({ debate }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <DebateTitle debate={debate} />
      <DebateGoodBad debate={debate} />
      <DebateProcess value={debate.yesPercent} />
    </div>
  );
};

export default DebateHeader;
