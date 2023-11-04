import React from 'react';
import Link from 'next/link';
import { PencilSquareIcon } from "@heroicons/react/24/outline";


const Home = () => {
  const pageStyle = {
    background: 'linear-gradient(to bottom, #0b0a08, #470341)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={pageStyle}>
      {/* Your content goes here */}
      
      



<div className="floating-button">
  <ul>
    <li>
      <Link legacyBehavior href="/editor">
        <div className="flex items-center">
          <PencilSquareIcon className="h-6 w-6 mr-2" />
          <span className="text-white" style={{ fontWeight: "bold", textAlign: "center" }}>Write</span>
        </div>
      </Link>
    </li>
  </ul>
</div>




    </div>
  );
};

export default Home;
