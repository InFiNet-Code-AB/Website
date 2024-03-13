import { ContactFormDialog } from "@/components/ContactForm/ContactForm";
import { Button } from "@/components/shadcn/Button";
import {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/shadcn/Drawer";
import {
  ChatBubbleIcon,
  CodeIcon,
  Cross1Icon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { DarkMode } from "../ToggleDarkMode";

export const MobileNavigationItems = () => {
  return (
    <DrawerContent className="m-auto mt-2 p-1 w-3/4 rounded-md">
      <DrawerHeader>
        <DrawerTitle>Navigation</DrawerTitle>
        <DrawerDescription>What can we interest you with ?</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <div className="grid grid-rows-3 gap-4">
          <Button variant="outline" className="text-xs">
            <LightningBoltIcon className="mr-2 h-4 w-4" />
            Tell me about InFiNet Code
          </Button>
          <Button variant="outline" className="text-xs">
            <CodeIcon className="mr-2 h-4 w-4" />
            Show me their projects
          </Button>
          <ContactFormDialog />
          <DarkMode />
        </div>
        <DrawerClose asChild>
          <Button variant="ghost" className="p-4">
            <Cross1Icon className="mr-2 h-4 w-4" />
            Close
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
};
