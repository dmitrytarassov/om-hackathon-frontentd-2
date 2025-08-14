"use client";

import Link from "next/link";
import React from "react";

import DebateProcess from "@/app/components/common/DebateProcess";
import DebateCardHeader from "@/app/components/mainPage/DebateCardHeader";
import DebateCardInfo from "@/app/components/mainPage/DebateCardInfo";
import DebateCardText from "@/app/components/mainPage/DebateCardText";
import DebateCardTitle from "@/app/components/mainPage/DebateCardTitle";
import Block from "@/app/components/ui/Block";
import type { Debate } from "@/types/Debate";

type DebateCardProps = {
  debate: Debate;
};

const DebateCard: React.FC<DebateCardProps> = ({ debate }) => {
  return (
    <Link href={`/debate?id=${debate.opinionId}`}>
      <Block hullHeight className="justify-between hover:shadow-2xl">
        <div className="flex w-full flex-col">
          <DebateCardHeader debate={debate} />
          <DebateProcess value={debate.yesPercent} />
          <DebateCardTitle debate={debate} />
          <DebateCardText debate={debate} />
        </div>
        <DebateCardInfo debate={debate} />
      </Block>
    </Link>
  );
};

export default DebateCard;
