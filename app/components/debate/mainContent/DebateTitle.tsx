"use client";

import Image from "next/image";
import React from "react";

import { formatDate } from "@/helpers/formatDate";
import { formatDollar } from "@/helpers/formatDollar";
import type { Debate } from "@/types/Debate";

type DebateTitleProps = {
  debate: Debate;
};

const DebateTitle: React.FC<DebateTitleProps> = ({ debate }) => {
  return (
    <div className="grid w-full grid-cols-[4rem_1fr] gap-4">
      <Image
        src={debate.image}
        alt={debate.title}
        width={64}
        height={64}
        className="w-16 h-16 object-cover rounded-2xl"
      />
      <div className="flex flex-col justify-center w-full overflow-hidden">
        <h1 className="overflow-hidden text-ellipsis font-bold leading-8 text-2xl whitespace-pre w-full">
          {debate.title}
        </h1>
        <div className="flex w-full gap-4 text-muted">
          <span className="">{formatDollar(debate.totalLiquidity)} Vol.</span>
          <span>{formatDate(debate.endsAtTimestamp)}</span>
        </div>
      </div>
    </div>
  );
};

export default DebateTitle;
