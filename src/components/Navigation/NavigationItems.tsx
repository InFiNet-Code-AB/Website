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
import { ContactFormDialog } from "../ContactForm/ContactForm";

export const NavigationMenuItems = () => {
  return (
    <NavigationMenu className="flex justify-center items-center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark:text-white text-2xl font-bold">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="dark:text-white text-2xl font-bold">
            Portfolio
          </NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ContactFormDialog />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
