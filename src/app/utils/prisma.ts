import { PrismaClient } from "@prisma/client";

const prismaClient = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClient>;
}

export const prisma = globalThis.prisma ?? prismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
