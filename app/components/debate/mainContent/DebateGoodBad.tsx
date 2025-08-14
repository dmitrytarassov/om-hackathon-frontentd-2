"use client";

import React from "react";

import type { Debate } from "@/types/Debate";

type DebateGoodBadProps = {
  debate: Debate;
};

const DebateGoodBad: React.FC<DebateGoodBadProps> = ({ debate }) => {
  return (
    <div className="flex w-full justify-between font-bold">
      <span className="text-sm text-green">{debate.yesPercent}% good</span>
      <span className="text-sm text-red">{debate.noPercent}% bad</span>
    </div>
  );
};

export default DebateGoodBad;
