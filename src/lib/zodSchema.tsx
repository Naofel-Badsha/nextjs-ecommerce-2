import * as z from "zod"
export const zodSchema = z.object({
 username: z.string().min(6),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Username must be at least 3 characters")
    // .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed")
    // .regex(/[0-9]/, "Must include at least one number")
    // .regex(/[^A-Za-z0-9]/, "Must include at least one special character"),
})