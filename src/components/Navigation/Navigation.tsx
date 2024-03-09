"use client";

import Image from "next/image";

import React, { useEffect } from "react";
import { NavigationMenuItems } from "./NavigationItems";
import { DarkMode } from "./ToggleDarkMode";

import { isMobile } from "react-device-detect";
import { Drawer, DrawerTrigger } from "../shadcn/Drawer";
import { Button } from "../shadcn/Button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { MobileNavigationItems } from "./MobileNavigation/MobileNavigationItems";
import { useTheme } from "next-themes";

export const NavigationMenu = () => {
  const { theme } = useTheme();

  useEffect(() => {
    console.log("here");
    renderLogoBasedOnTheme(theme);
  }, [theme]);

  const renderLogoBasedOnTheme = (theme: string | undefined) => {
    console.log(theme);
    if (theme === "dark")
      return (
        <Image
          src="/logo-dark-long.png"
          alt="InFiNet Code AB logo"
          width={150}
          height={50}
        />
      );
    return (
      <Image
        src="/logo-light-long.png"
        alt="InFiNet Code AB logo"
        width={150}
        height={50}
      />
    );
  };
  if (isMobile) {
    return (
      <div className="flex justify-between">
        <div className="h-14 w-3/4 justify-center align-top">
          {renderLogoBasedOnTheme(theme)}
        </div>
        <div className="justify-end h-14">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost">
                <HamburgerMenuIcon className="h-4 w-4" />
              </Button>
            </DrawerTrigger>
            <MobileNavigationItems />
          </Drawer>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center p-4 md:p-8">
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
      <DarkMode />
    </div>
  );
};
