import { IconNames, Icons } from "./icons";

export const Icon = ({ name, color }: { name: IconNames; color: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Icons[name](color)}
    </svg>
  );
};
