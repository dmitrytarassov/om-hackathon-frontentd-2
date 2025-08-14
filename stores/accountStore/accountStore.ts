import { map } from "nanostores";

type AccountStore = {
  account: {
    address: string;
    twitterAddress: string;
  } | null;
  loading: boolean;
};

const defaultAccountStoreState: AccountStore = {
  account: null,
  loading: false,
};

export const accountStore = map<AccountStore>(defaultAccountStoreState);
