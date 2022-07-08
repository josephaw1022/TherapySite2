import type { MouseEventHandler } from "react";

export interface Size {
  width: number;
  height: number;
}

export type MenuItem = {
  label: string;
  onClick?: MouseEventHandler<HTMLLIElement>;
  href?: string;
  className?: string;
};
