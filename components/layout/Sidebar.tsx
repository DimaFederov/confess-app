import React, { useRef, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavItems";
import { useOnClickOutside } from "usehooks-ts";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};

const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number | null>(null);

  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX !== null) {
      const deltaX = e.touches[0].clientX - startX;
      if (deltaX < -50) {
        setOpen(false);
        setStartX(null);
      }
    }
  };

  return (
    <div
      className={classNames({
        "flex flex-col justify-between": true,
        "bg-[#072E33] text-zinc-50": true,
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true,
        "md:h-[calc(100vh-_64px)] h-full w-[300px]": true,
        "transition-transform 1s ease-in-out md:-translate-x-0": true, // 1-second transition duration
        "-translate-x-full": !open,
      })}
      ref={ref}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartX(null)}
    >
      <nav className="md:sticky top-0 md:top-16">
        <ul className="py-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li
                  className={classNames({
                    "text-indigo-100 hover:bg-indigo-900": true,
                    "flex gap-4 items-center ": true,
                    "transition-colors duration-300": true,
                    "rounded-md p-2 mx-2": true,
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-t-indigo-800 p-4">
        <div className="flex gap-4 items-center">
          <Image
            src={
              "https://images.unsplash.com/photo-1579118286738-600b51590ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGd0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            height={6}
            width={36}
            alt="profile image"
            className="rounded-full"
          />
          <div className="flex flex-col">
          <span className="text-indigo-50 my-0 font-bold">Vendetta</span>
            <Link href="/" className="text-indigo-200 text-sm">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
