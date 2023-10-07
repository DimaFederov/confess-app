import React from "react";
import Link from "next/link"; // Import the Link component from Next.js

import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Terms",
    href: "./terms.tsx", // Update the href to "/terms.tsx"
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
];
