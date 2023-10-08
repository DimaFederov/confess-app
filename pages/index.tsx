import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-start min-h-screen">
        <div className="flex flex-col items-center gap-4 mt-[70px]"> {/* Increased margin-top to 16px */}
          <div className="border-2 border-purple-500 bg-purple-200 bg-opacity-50 rounded-lg p-3 shadow-lg w-[99%]">
            <h1 className="text-4xl my-4">Welcome to Tailwind Sidebar Tutorial</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
