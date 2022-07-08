import { MenuItem } from "../types";
import type { ReactElement } from "react";
import Link from "next/link";

function MenuItems({ items, className }: MenuItemProps): ReactElement {
  return (
    <ul className={`menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ${className}`}>
      {items &&
        items.map((item, index): JSX.Element => {
          if (item.href) {
            return (
              <li key={index} className="p-1">
                <Link href={item.href}>
                  <span className={item?.className || ""} onClick={item.onClick}>
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          }
          return (
            <li key={index} className={item?.className || ""} onClick={item.onClick}>
              <span className="text-black ">{item.label}</span>
            </li>
          );
        })}
    </ul>
  );
}

interface MenuItemProps {
  items: MenuItem[];
  className?: string;
}

export default MenuItems;
