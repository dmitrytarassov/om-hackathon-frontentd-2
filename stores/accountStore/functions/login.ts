import { accountStore } from "@/stores/accountStore/accountStore";

export async function login() {
  accountStore.setKey("loading", true);
  setTimeout(() => {
    accountStore.setKey("account", {
      address: "0x30e045e5932F5D668592BC334F2d6AD0B23cACDC",
      twitterAddress: "meowbl",
    });
    accountStore.setKey("loading", false);
  }, 1000);
}
