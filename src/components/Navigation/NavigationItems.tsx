"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/shadcn/NavigationMenu";

import React from "react";
import { ContactFormDialog } from "../ContactForm/ContactForm";

export const NavigationMenuItems = () => {
  return (
    <NavigationMenu className="flex justify-center items-center">
      <NavigationMenuList>
        <NavigationMenuItem className="dark dark:text-white text-lg font-semibold cursor-pointer tracking-wider mx-4">
          About
        </NavigationMenuItem>
        <NavigationMenuItem className="dark dark:text-white text-lg font-semibold cursor-pointer tracking-wider mx-4">
          Portfolio
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ContactFormDialog />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
