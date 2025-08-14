"use client";

import React from "react";

import Nav from "@/app/components/layout/Nav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      <Nav />
      <div className="w-full flex p-4 pt-22">{children}</div>
    </div>
  );
};

export default Layout;
