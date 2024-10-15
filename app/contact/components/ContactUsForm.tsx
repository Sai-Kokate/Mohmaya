"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string(),
});

export default function ContactUsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitSuccess(null);
    const currentDate = new Date();

    const data = {
      ...values,
      date: currentDate.toLocaleDateString(),
      time: currentDate.toLocaleTimeString(),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw9SZLBwgcxxEVgoEiAOz3oTB_tgXtEjxPudgFkggfXb1F3l5WGve9HdqCPM3y_Hc-s/exec",
        {
          method: "POST",
          mode: "no-cors", // Required to bypass CORS issues, but prevents response validation
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setSubmitSuccess("Form submitted successfully!");
      form.reset(); // Reset form fields on successful submission
    } catch (error) {
      console.error("Error while submitting form:", error);
      setSubmitSuccess("Failed to submit form. Please try again.");
    }

    setIsSubmitting(false);
  }

  return (
    <div className="w-full flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full max-w-md"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    {...field}
                    className="text-white tracking-wide bg-white/50 border border-white rounded-lg w-full h-[50px] mb-0 px-5 py-4 font-sans text-xs placeholder:text-white"
                  />
                </FormControl>
                <FormMessage className="text-orange" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email address"
                    {...field}
                    className="text-white tracking-wide bg-white/50 border border-white rounded-lg w-full h-[50px] mb-0 px-5 py-4 font-sans text-xs placeholder:text-white"
                  />
                </FormControl>
                <FormMessage className="text-orange" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Go ahead, We are listening..."
                    {...field}
                    className="text-white tracking-wide bg-white/50 border border-white rounded-lg w-full min-h-[100px] mb-0 px-5 py-4 font-sans text-xs placeholder:text-white resize-none"
                  />
                </FormControl>
                <FormMessage className="text-orange" />
              </FormItem>
            )}
          />
          {submitSuccess && (
            <p
              className={`mt-4 ${
                submitSuccess.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {submitSuccess}
            </p>
          )}
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`text-black tracking-wider rounded-full px-8 py-3 text-xl leading-none transition-all duration-[100ms] hover:bg-orange hover:text-white hover:scale-90 ${
                isSubmitting ? "bg-orange text-white" : "bg-white"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
