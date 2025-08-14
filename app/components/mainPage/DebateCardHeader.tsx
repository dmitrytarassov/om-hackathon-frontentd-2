"use client";

import React from "react";

import type { Debate } from "@/types/Debate";

type DebateCardHeaderProps = {
  debate: Debate;
};

const DebateCardHeader: React.FC<DebateCardHeaderProps> = ({ debate }) => {
  return (
    <div className="py-4 px-6 w-full grid grid-cols-3 gap-2 text-sm items-end">
      <span className="text-green font-bold">{debate.yesPercent}% good</span>
      <div>{null}</div>
      <span className="text-red font-bold text-right">
        {debate.noPercent}% bad
      </span>
    </div>
  );
};

export default DebateCardHeader;
