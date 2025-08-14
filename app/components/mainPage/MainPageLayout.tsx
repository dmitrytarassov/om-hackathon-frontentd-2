"use client";

import React from "react";

type MainPageLayoutProps = {
  children: React.ReactNode;
};

const MainPageLayout: React.FC<MainPageLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-rows-2 md:grid-cols-3 lg:grid-rows-4 w-full gap-4">
      {children}
    </div>
  );
};

export default MainPageLayout;
