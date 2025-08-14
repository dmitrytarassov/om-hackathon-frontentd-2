"use client";

import React from "react";

import Block from "@/app/components/ui/Block";
import { Debate } from "@/types/Debate";

type DebateMainContentProps = {
  debate: Debate;
};

const DebateMainContent: React.FC<DebateMainContentProps> = () => {
  return <Block>main content</Block>;
};

export default DebateMainContent;
