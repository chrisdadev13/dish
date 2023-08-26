import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { SignUpForm } from "./components/sign-up-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up form built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className=" lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Empieza ahora!
              </h1>
              <p className="text-sm text-muted-foreground">
                Introduce el nombre de tu marca y tu email
              </p>
            </div>
            <SignUpForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Al continuar, estas aceptando nuestros{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terminos
              </Link>{" "}
              y{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Politicas de Privacidad
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
