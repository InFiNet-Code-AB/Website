"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/shadcn/NavigationMenu";

import React from "react";

export const NavigationMenuItems = () => {
  return (
    <NavigationMenu className="flex justify-center items-center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-2xl font-bold gradient-text">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-2xl font-bold gradient-text">
            Portfolio
          </NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-2xl font-bold gradient-text">
            Contact
          </NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
