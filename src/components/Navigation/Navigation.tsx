"use client";
import Image from "next/image";

import React from "react";
import { NavigationMenuItems } from "./NavigationItems";

export const NavigationMenu = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Image
          src="/logo-dark-long.png"
          alt="InFiNet Code AB logo"
          width={200}
          height={50}
          priority
        />
      </div>
      <NavigationMenuItems />
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Dark/Light Mode
        </button>
      </div>
    </div>
  );
};
