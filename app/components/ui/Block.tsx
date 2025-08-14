"use client";

import React from "react";

type BlockProps = {
  children: React.ReactNode;
};

const Block: React.FC<BlockProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full bg-foreground rounded-xl">
      {children}
    </div>
  );
};

export default Block;
