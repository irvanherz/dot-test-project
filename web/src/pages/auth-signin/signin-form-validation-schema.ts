import { z } from "zod";

export const signinFieldsSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type SigninFields = z.infer<typeof signinFieldsSchema>;
