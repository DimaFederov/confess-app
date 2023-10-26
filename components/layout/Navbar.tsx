import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";

type Props = {
  onMenuButtonClick(): void;
};

const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        "bg-[#05161A] text-zinc-500": true, // Updated color to #05161A
        "flex items-center": true, // layout
        "w-full fixed z-10 px-4 shadow-sm h-16": true, // positioning & styling
      })}
    >
      <div className="font-bold text-lg">Confessions</div>
      <div className="flex-grow"></div>
    </nav>
  );
};

export default Navbar;
