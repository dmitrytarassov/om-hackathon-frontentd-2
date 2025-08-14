"use client";

import React from "react";

type DebatePageLayoutProps = {
  content: React.ReactNode;
  sidebar: React.ReactNode;
};

const DebatePageLayout: React.FC<DebatePageLayoutProps> = ({
  content,
  sidebar,
}) => {
  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <div className="col-span-6 md:col-span-8 lg:col-span-9">{content}</div>
      <div className="col-span-6 md:col-span-4 lg:col-span-3">{sidebar}</div>
    </div>
  );
};

export default DebatePageLayout;
