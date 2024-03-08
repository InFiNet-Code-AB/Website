"use client";

import Image from "next/image";

import React from "react";
import { NavigationMenuItems } from "./NavigationItems";
import { DarkMode } from "./ToggleDarkMode";

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
        <DarkMode />
      </div>
    </div>
  );
};
