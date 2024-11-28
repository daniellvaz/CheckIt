import { z } from "zod";

export const envSchema = z.object({
  API_BASE_URL: z.string().url(),
});

export const env = envSchema.parse(import.meta.env);
