"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/icons";

import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { cn } from "~/lib/utils";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { type Output as Interface } from "valibot";
import { signUp, schema } from "../sign-up";

type SignUpData = Interface<typeof schema>;

interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SignUpForm = ({ className, ...props }: SignUpFormProps) => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<SignUpData>({
    resolver: valibotResolver(schema),
    defaultValues: {
      businessName: "",
      email: "",
    },
  });

  const onSubmit = (data: SignUpData) => {
    startTransition(() => {
      console.log("Hello");
      console.log(data);
      //signUp(data);
    });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-extrabold">Crea tu cuenta!</h1>
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Restaurante/Negocio/Tienda:</FormLabel>
                <FormControl>
                  <div className="flex items-center justify-center">
                    <span
                      className="  
          border-r-none flex h-9 items-center justify-center rounded-l-md border border-r-0 border-input bg-transparent py-5 pl-3 text-sm shadow-sm"
                    >
                      dishes.io/@me/
                    </span>
                    <Input
                      placeholder="dishes"
                      {...field}
                      className="rounded-l-none border-l-0 py-5 pl-1 lowercase focus:outline-none focus:ring-0 focus-visible:ring-0"
                    />
                  </div>
                </FormControl>
                <FormDescription>
                  Este sera el nombre de tu marca.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Email: </FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@direction.com"
                    {...field}
                    className="py-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} className="mt-5">
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Registrate con tu Email
          </Button>
        </form>
      </Form>
    </div>
  );
};
