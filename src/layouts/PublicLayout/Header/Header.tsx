import React from "react";
import { SHeader } from "./Header.style";

export function Header() {
  return (
    <SHeader className="bg-gray-900">
      <button>
        <img
          src="./IMages/amazon logo.png"
          alt="amazon Logo"
          className="w-28 h-50 p-1"
        />
      </button>
      <button className="Deliver">
        <h5>Deliver to</h5>
        <h3>
          <img src="./Images/map cursor.png" alt="cursor" className="Map w-4 h-4 mr-0.5" />
          Los Angeles
        </h3>
      </button>
    </SHeader>
  );
}
