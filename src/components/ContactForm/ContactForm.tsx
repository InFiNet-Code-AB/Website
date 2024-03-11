import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Button } from "../shadcn/Button";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/Dialog";
import { ContactFormContent } from "./ContactFormContent";
import { isMobile } from "react-device-detect";
import React, { useState } from "react";

export const ContactFormDialog = () => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => setOpen(false);

  const bgClass = isMobile ? "bg-gray-800 overflow-auto" : "bg-transparent";
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isMobile ? (
          <Button variant="outline" className="text-xs">
            <ChatBubbleIcon className="mr-2 h-4 w-4" /> Get in Contact
          </Button>
        ) : (
          <p className="dark:text-white text-lg font-semibold cursor-pointer tracking-wider mx-4">
            Contact
          </p>
        )}
      </DialogTrigger>
      <DialogContent className={`sm:max-w-lg h-fit text-white ${bgClass}`}>
        <DialogHeader>
          <Image
            src="/logo-dark-long.png"
            alt="InFiNet Code AB logo"
            width={150}
            height={50}
          />
          <DialogTitle className="pt-4">
            Feel free to contact us about anything
          </DialogTitle>
          <DialogDescription>We are here to help</DialogDescription>
        </DialogHeader>
        <ContactFormContent setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
