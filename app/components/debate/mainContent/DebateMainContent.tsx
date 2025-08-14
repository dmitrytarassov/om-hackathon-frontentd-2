"use client";

import React from "react";

import DebateHeader from "@/app/components/debate/mainContent/DebateHeader";
import Block from "@/app/components/ui/Block";
import type { Debate } from "@/types/Debate";

type DebateMainContentProps = {
  debate: Debate;
};

const DebateMainContent: React.FC<DebateMainContentProps> = ({ debate }) => {
  return (
    <Block>
      <div className="flex flex-col divide-y divide-solid divide-border-foreground">
        <div className="p-4 flex w-full">
          <DebateHeader debate={debate} />
        </div>
        <div className="p-4 flex w-full"> main content</div>
      </div>
    </Block>
  );
};

export default DebateMainContent;
