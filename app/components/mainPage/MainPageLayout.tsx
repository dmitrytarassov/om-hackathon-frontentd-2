"use client";

import React from "react";

type MainPageLayoutProps = {
  children: React.ReactNode;
};

const MainPageLayout: React.FC<MainPageLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2">
      {children}
    </div>
  );
};

export default MainPageLayout;
