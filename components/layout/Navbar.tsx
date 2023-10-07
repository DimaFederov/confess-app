import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";

type Props = {
  /**
   * Allows the parent component to modify the state when the
   * menu button is clicked.
   */
  onMenuButtonClick(): void;
};

const Navbar = (props: Props) => {
  return (
    <nav
      className={classNames({
        "bg-[#190019] text-zinc-500": true, // colors
        "flex items-center": true, // layout
        "w-screen md:w-full sticky top-0 px-4 shadow-sm h-[73px] z-10": true, // positioning & styling
      })}
    >
      <div className="flex justify-center font-bold text-lg">Confessions</div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6 mr-5" />
      </button>
    </nav>
  );
};

export default Navbar;
