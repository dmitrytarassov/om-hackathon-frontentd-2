"use client";

import clsx from "clsx";
import React from "react";

type BlockProps = {
  children: React.ReactNode;
  hullHeight?: boolean;
  className?: string;
};

const Block: React.FC<BlockProps> = ({ children, hullHeight, className }) => {
  return (
    <div
      className={clsx(
        "flex flex-col w-full bg-foreground rounded-xl",
        {
          "h-full": hullHeight,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Block;
