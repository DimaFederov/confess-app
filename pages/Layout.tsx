// Import necessary components and modules
import React, { PropsWithChildren, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/router";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

// Layout component
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
            background: linear-gradient(to bottom, #000000, #1E1234, #120C22);
          }
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

        
<div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
  <Link legacyBehavior href="/editor">
    <a className="bn29"> {/* Apply bn29 class to the anchor tag */}
      <button>
        <PencilSquareIcon className="h-6 w-6 text-white" />
      </button>
    </a>
  </Link>
</div>



      </div>
    </div>
  );
};

export default Layout;
