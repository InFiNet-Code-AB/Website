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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  projectType: z.array(z.string()),
});

export const ContactFormContent = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      projectType: [""], // Adjusted to an empty array
    },
  });

  const { setValue } = form;

  const handleCheckboxChange = (value: string) => {
    const currentProjectTypes = form.getValues().projectType;
    const newProjectTypes = currentProjectTypes.includes(value)
      ? currentProjectTypes.filter((type) => type !== value)
      : [...currentProjectTypes, value];

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
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
              {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-3 gap-4">
                {/* First row */}
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="Project Type 1"
                      onChange={() => handleCheckboxChange("Project Type 1")}
                    />
                    <Label>Project 1</Label>
                  </div>
                  {/* Add more checkboxes as needed */}
                </FormControl>

                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="Project Type 2"
                      onChange={() => handleCheckboxChange("Project Type 2")}
                    />
                    <Label>Project 2</Label>
                  </div>
                  {/* Add more checkboxes as needed */}
                </FormControl>

                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="Project Type 3"
                      onChange={() => handleCheckboxChange("Project Type 3")}
                    />
                    <Label>Project 3</Label>
                  </div>
                </FormControl>

                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="Project Type 4"
                      onChange={() => handleCheckboxChange("Project Type 4")}
                    />
                    <Label>Project 4</Label>
                  </div>
                </FormControl>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="Project Type 5"
                      onChange={() => handleCheckboxChange("Project Type 5")}
                    />
                    <Label>Project 5</Label>
                  </div>
                </FormControl>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      {...field}
                      value="Project Type 6"
                      onChange={() => handleCheckboxChange("Project Type 6")}
                    />
                    <Label>Project 6</Label>
                  </div>
                </FormControl>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline">
          Submit
        </Button>
      </form>
    </Form>
  );
};
