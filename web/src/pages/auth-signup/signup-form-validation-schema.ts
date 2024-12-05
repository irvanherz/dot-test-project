import { z } from "zod";

export const signupFieldsSchema = z.object({
  username: z.string().min(1, "Username is required"),
  fullName: z.string().min(1, "Full name is required"),
  password: z.string().min(1, "Password is required"),
});

export type SignupFields = z.infer<typeof signupFieldsSchema>;
