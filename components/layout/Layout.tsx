import React, { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSwipeable } from "react-swipeable"; // Import the useSwipeable hook

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Define the swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setSidebarOpen(false), // Close sidebar on swipe left
    onSwipedRight: () => setSidebarOpen(true), // Open sidebar on swipe right
  });

  return (
    <div className="grid min-h-screen grid-rows-header" {...handlers}>
      <style>
        {`
          body {
            background: linear-gradient(to bottom, #0C2075, #0F969C);
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
      </div>
    </div>
  );
};

export default Layout;

