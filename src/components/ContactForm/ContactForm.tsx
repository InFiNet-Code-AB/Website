import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { Button } from "../shadcn/Button";
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

export const ContactFormDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {isMobile ? (
          <Button variant="outline" className="text-xs">
            <ChatBubbleIcon className="mr-2 h-4 w-4" /> Get in Contact
          </Button>
        ) : (
          <p className="text-2xl font-bold gradient-text cursor-pointer">
            Contact
          </p>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-black">
        <DialogHeader>
          <DialogTitle>Feel free to contact us about anything</DialogTitle>
          <DialogDescription>We are here to help</DialogDescription>
        </DialogHeader>
        <ContactFormContent />
        <DialogFooter className="sm:justify-start">
          {/* <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
