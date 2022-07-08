import type { ReactNode } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import type { MenuItem } from "../types";

interface DropdownProps {
  className?: string;
  children?: ReactNode;
  menuItems?: MenuItem[];
}

export default function Dropdown({ className, menuItems, children }: DropdownProps) {
  return (
    <li tabIndex={0} className={` menu  dropdown-left  ${className} `}>
      <a className="text-white">
        {children}
        <MdKeyboardArrowDown />
      </a>
      <ul className="p-2 bg-base-100  w-40 selection:after:hidden  ">
        {menuItems &&
          menuItems.map((item, index) => {
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
              <li
                key={index}
                className={item?.className || "text-black "}
                onClick={item.onClick}
              >
                <span className="text-black ">{item.label}</span>
              </li>
            );
          })}
      </ul>
    </li>
  );
}
