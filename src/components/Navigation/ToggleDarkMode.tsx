"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Toggle } from "../shadcn/Toggle";
import { useTheme } from "next-themes";

export const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Toggle
      aria-label="Toggle italic"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <SunIcon />
          <p className="pl-4">Light Mode</p>
        </>
      ) : (
        <>
          <MoonIcon />
          <p className="pl-4">Dark Mode</p>
        </>
      )}
    </Toggle>
  );
};
