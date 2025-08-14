"use client";

import Image from "next/image";
import React from "react";

import type { Debate } from "@/types/Debate";

type DebateCardTitleProps = {
  debate: Debate;
};

const DebateCardTitle: React.FC<DebateCardTitleProps> = ({ debate }) => {
  return (
    <div className="grid w-full grid-cols-[4rem_1fr] gap-4 p-4">
      <Image
        src={debate.image}
        alt={debate.title}
        width={64}
        height={64}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex items-center">
        <p className="line-clamp-2 font-bold leading-8 text-2xl">
          {debate.title}
        </p>
      </div>
    </div>
  );
};

export default DebateCardTitle;
