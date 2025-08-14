"use client";

import Link from "next/link";
import React from "react";

import Block from "@/app/components/ui/Block";
import type { Debate } from "@/types/Debate";

type DebateCardProps = {
  debate: Debate;
};

const DebateCard: React.FC<DebateCardProps> = ({ debate }) => {
  return (
    <Link href={`/debate?id=${debate.opinionId}`}>
      <Block>asd</Block>
    </Link>
  );
};

export default DebateCard;
