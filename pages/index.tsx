import React from 'react';
import Link from 'next/link';
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Image from 'next/image'; // Import the Image component

const Home = () => {
  return (
    <div className="bg-image"> {/* Add a CSS class for the background image */}
      <div className="page-content">
        {/* Your content goes here */}
        <div className="floating-button">
          <ul>
            <li>
              <Link href="/editor"> {/* Replace "legacyBehavior" with "href" */}
                <div className="flex items-center">
                  <PencilSquareIcon className="h-6 w-6 mr-2" />
                  <span className="text-white" style={{ fontWeight: "bold", textAlign: "center" }}>Write</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
