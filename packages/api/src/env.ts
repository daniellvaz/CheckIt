import { z } from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.string().transform((port) => Number(port)),
});

export const env = envSchema.parse(process.env);
