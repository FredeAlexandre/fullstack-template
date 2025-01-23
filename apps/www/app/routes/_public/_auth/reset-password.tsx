import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/_auth/reset-password")({
  component: RouteComponent,
});

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@acme/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@acme/ui/form";
import { PasswordInput } from "@acme/ui/password-input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { authClient } from "~/utils/auth-client";

const formSchema = z.object({
  password: z.string().min(8).max(255),
});

function RouteComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await authClient.resetPassword({
        newPassword: values.password,
      });

      if (error) {
        toast.error(error.message);
      } else {
        // !TODO Create the redirection after 2 seconds
        toast.success(
          "Your password has been reseted. Redirecting you to sign in page.",
        );
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="w-[30rem] border p-4 rounded-lg space-y-6">
        <div className="space-y-2">
          <h1 className="font-bold">Reset Passowrd</h1>
          <p className="text-muted-foreground">Put your new password here</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-2"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Placeholder" {...field} />
                  </FormControl>
                  <FormDescription>Enter a password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
