"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../shadcn/Form";
import { Input } from "../shadcn/Input";
import { Button } from "../shadcn/Button";
import { Checkbox } from "../shadcn/Checkbox";
import { Label } from "../shadcn/Label";
import { DialogClose, DialogFooter } from "../shadcn/Dialog";
import { isMobile } from "react-device-detect";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  telnr: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  projectType: z.array(z.string()),
});

export const ContactFormContent = () => {
  const formStyle = isMobile ? "" : "flex justify-between";
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      telnr: "",
      company: "",
      projectType: [""], // Adjusted to an empty array
    },
  });

  const { setValue } = form;

  const handleCheckboxChange = (typeOfHelp: string) => {
    let newProjectTypes = form.getValues().projectType;
    if (newProjectTypes.includes(typeOfHelp)) {
      newProjectTypes = newProjectTypes.filter((help) => help !== typeOfHelp);
    } else {
      newProjectTypes.push(typeOfHelp);
    }
    setValue("projectType", newProjectTypes);
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-white"
      >
        <div className={`${formStyle}`}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={`${formStyle}`}>
          <FormField
            control={form.control}
            name="telnr"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile number</FormLabel>
                <FormControl>
                  <Input placeholder="mobile number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <Label>What are you interested in ?</Label>
              <div className="grid grid-cols-2 gap-4">
                {/* First row */}
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="IT Consultants"
                      onClick={() => handleCheckboxChange("IT Consultants")}
                    />
                    <Label className="text-xs">IT Consultants</Label>
                  </div>
                  {/* Add more checkboxes as needed */}
                </FormControl>

                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="Software Development"
                      onClick={() =>
                        handleCheckboxChange("Software Development")
                      }
                    />
                    <Label className="text-xs">Software Development</Label>
                  </div>
                  {/* Add more checkboxes as needed */}
                </FormControl>

                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="Project Architecture"
                      onClick={() =>
                        handleCheckboxChange("Project Architecture")
                      }
                    />
                    <Label className="text-xs">Project Architecture</Label>
                  </div>
                </FormControl>

                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="UI / UX"
                      onClick={() => handleCheckboxChange("UI / UX")}
                    />
                    <Label className="text-xs">UI / UX</Label>
                  </div>
                </FormControl>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="Mentorship & Coaching"
                      onClick={() =>
                        handleCheckboxChange("Mentorship & Coaching")
                      }
                    />
                    <Label className="text-xs">Mentorship & Coaching</Label>
                  </div>
                </FormControl>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="Interships + LIA"
                      onClick={() => handleCheckboxChange("Interships + LIA")}
                    />
                    <Label className="text-xs">Interships + LIA</Label>
                  </div>
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
          <Button type="submit" variant="outline">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
