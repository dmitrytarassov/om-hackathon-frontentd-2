"use client";

import React from "react";

import type { Debate } from "@/types/Debate";

type DebateCardTextProps = {
  debate: Debate;
};

const DebateCardText: React.FC<DebateCardTextProps> = ({ debate }) => {
  return (
    <div className="px-4 w-full flex text-xs text-muted">
      <p className="line-clamp-6">{debate.description}</p>
    </div>
  );
};

export default DebateCardText;
