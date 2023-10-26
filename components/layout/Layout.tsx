import React, { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useSwipeable } from "react-swipeable"; // Import the useSwipeable hook
import { useRouter } from "next/router"; // Import the router from Next.js
import { PencilSquareIcon } from "@heroicons/react/24/outline"; // Import the PencilSquareIcon

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  // Define the swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setSidebarOpen(false), // Close sidebar on swipe left
    onSwipedRight: () => setSidebarOpen(true), // Open sidebar on swipe right
  });

  // Function to navigate to the new page
  const navigateToOtherPage = () => {
    router.push("/other-page"); // Replace with the actual path to the other page
  };

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

      {/* Floating Button with Heroicon */}
      <div className="floating-button">
      <button onClick={navigateToOtherPage}>
  <PencilSquareIcon className="w-6 h-6 inline-block mr-2" />
  <span className="font-anton font-bold">Post</span>
</button>

      </div>
    </div>
  );
};

export default Layout;
