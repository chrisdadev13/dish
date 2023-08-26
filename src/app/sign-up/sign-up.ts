"use server";

import { prisma } from "~/server/db";
import {
  object,
  string,
  minLength,
  maxLength,
  email,
  toTrimmed,
  toLowerCase,
  ValiError,
} from "valibot";
import { createAction, publicProcedure } from "~/server/api/trpc";

export const schema = object({
  businessName: string("El nombre de tu negocio es requerido.", [
    minLength(3, "Debe tener entre 3 y 18 caracteres."),
    maxLength(18, "Debe tener entre 3 y 18 caracteres."),
    toLowerCase(),
    toTrimmed(),
    (input, info) => {
      const trimmedbusinessName = input.trim().toLowerCase();

      const validPattern = /^[a-z0-9-]+$/;

      if (validPattern.test(trimmedbusinessName)) {
        return trimmedbusinessName;
      } else {
        throw new ValiError([
          {
            validation: "custom",
            origin: "value",
            message: "businessName no permitido",
            input,
            ...info,
          },
        ]);
      }
    },
  ]),
  email: string("El Email es requerido", [
    minLength(1, "Por favor, introduce tu Email."),
    email("Por favor, introduce un Email valido."),
    toTrimmed(),
    toLowerCase(),
  ]),
});

export const signUp = createAction(
  publicProcedure.input(schema).mutation(async ({ input }) => {
    const alreadyExist = await prisma.membership.findFirst({
      where: {
        OR: [
          {
            user: {
              email: input.email,
            },
            business: {
              name: input.businessName,
            },
          },
        ],
      },
      include: {
        user: true,
      },
    });

    if (alreadyExist) {
      const message: string =
        alreadyExist.user.email === input.email
          ? "El email proporcionado ya fue registrado"
          : "El businessName proporcionado ya fue registrado";

      return { message: message, status: "Error" };
    }

    await prisma.membership.create({
      data: {
        user: {
          create: {
            email: input.email,
          },
        },
        business: {
          create: {
            name: input.businessName,
          },
        },
      },
    });

    return {
      message: "Usuario creado!!",
      status: "Success",
    };
  })
);
