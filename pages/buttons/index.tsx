// components/layout/FloatingButton.tsx
import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

const FloatingButton = () => {
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <Link href="/editor">
        <a>
          <button className="p-3 bg-blue-500 text-white rounded-full">
            <PencilSquareIcon className="h-6 w-6" />
          </button>
        </a>
      </Link>
    </div>
  );
};

export default FloatingButton;
