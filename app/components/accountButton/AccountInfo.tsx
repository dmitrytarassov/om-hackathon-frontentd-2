"use client";

import { abbreviateAddress } from "common-crypto-tools";
import React from "react";

type AccountInfoProps = {
  accountAddress: string;
  twitterAddress: string;
};

const AccountInfo: React.FC<AccountInfoProps> = ({
  accountAddress,
  twitterAddress,
}) => {
  return (
    <div className="flex gap-2">
      <span>
        @
        {twitterAddress.length <= 6
          ? twitterAddress
          : abbreviateAddress(twitterAddress)}
      </span>
      <span>{abbreviateAddress(accountAddress)}</span>
    </div>
  );
};

export default AccountInfo;
