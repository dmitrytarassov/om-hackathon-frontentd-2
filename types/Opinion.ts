export type Opinion = {
  text: string;
  author: string;
  stance: "yes" | "no";
  amount: number;
  timestamp: string;
};
