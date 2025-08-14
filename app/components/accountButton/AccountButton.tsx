"use client";

import { useStore } from "@nanostores/react";
import React from "react";

import AccountInfo from "@/app/components/accountButton/AccountInfo";
import Button from "@/app/components/ui/Button";
import { accountStore } from "@/stores/accountStore/accountStore";
import { login } from "@/stores/accountStore/functions/login";

const AccountButton: React.FC = () => {
  const $accountStore = useStore(accountStore);

  return (
    <button
      className="border-1 border-border px-4 h-10 rounded-xl cursor-pointer"
      onClick={login}
    >
      {$accountStore.loading ? (
        "Loading..."
      ) : $accountStore.account ? (
        <AccountInfo
          accountAddress={$accountStore.account.address}
          twitterAddress={$accountStore.account.twitterAddress}
        />
      ) : (
        "Login"
      )}
    </button>
  );
};

export default AccountButton;
