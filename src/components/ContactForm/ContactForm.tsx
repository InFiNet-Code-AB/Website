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

export const ContactFormDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-2xl font-bold gradient-text cursor-pointer">
          Contact
        </p>
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
