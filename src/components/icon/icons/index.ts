import Wallet from "./Wallet";

export const Icons = {
  Wallet,
} as const;

export type IconNames = keyof typeof Icons;
