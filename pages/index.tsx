import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <div
      className=""
      style={{
        background: "linear-gradient(to bottom, #DFB6B2, #854F6C, #522B5B ,#190019)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <div
        className="bg-opacity-20 rounded-lg p-5 text-center"
        style={{
          backdropFilter: 'blur(10px)',
          maxWidth: '97%',
          backgroundColor: 'rgba(12, 112, 117, 0.2)', // Transparent background color
          border: '2px solid #2B124C', // Border with color
          marginTop: '10px', // Adjust the margin-top as needed
          position: 'relative', // Add position relative
          zIndex: 1, // Set a higher z-index value
        }}
      >
        <h1 className="text-4xl text-white">
          Haspuch is a noob Gamer fr
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
