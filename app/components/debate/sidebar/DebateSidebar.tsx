"use client";

import React from "react";

import Block from "@/app/components/ui/Block";
import type { Debate } from "@/types/Debate";

type DebateSidebarProps = {
  debate: Debate;
};

const DebateSidebar: React.FC<DebateSidebarProps> = () => {
  return <Block>Sidebar</Block>;
};

export default DebateSidebar;
