import React, { PropsWithChildren, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/router";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handlers = useSwipeable({
    onSwipedLeft: () => setSidebarOpen(false),
    onSwipedRight: () => setSidebarOpen(true),
  });

  return (
    <div className="grid min-h-screen grid-rows-header" {...handlers}>
      <style>
        {`
          body {
         }   background: linear-gradient(to bottom, #0C2075, #0F969C);
          
        `}
      </style>
      <div>
        <Navbar onMenuButtonClick={() => setSidebarOpen((prev) => !prev)} />
      </div>

      <div className="md:grid-cols-sidebar">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="md:ml-[300px]">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;