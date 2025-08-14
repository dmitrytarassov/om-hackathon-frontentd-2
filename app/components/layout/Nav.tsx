"use client";

import clsx from "clsx";
import React from "react";

import AccountButton from "@/app/components/accountButton/AccountButton";

type NavProps = {
  //
};

const Nav: React.FC<NavProps> = () => {
  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full h-18 flex justify-between",
        "bg-background/90 p-4 text-foreground backdrop-blur-sm",
      )}
    >
      <div className="font-bold text-xl text-logo">
        Opinion Market<span className="text-success">.</span>
      </div>
      <div>
        <AccountButton />
      </div>
    </nav>
  );
};

export default Nav;
