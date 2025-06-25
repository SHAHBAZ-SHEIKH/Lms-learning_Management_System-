import { z } from "zod";
export const loginFormSchema = z.object({
    email: z.string({ required_error: "Email is required" }).email("Please enter a valid email address"),
})

export const RegisterSchema = z.object({
    name: z.string({ required_error: "Name is required" }).min(3, "Name must be at least 3 characters"),
    campus: z.string({ required_error: "Campus is required" }),
    email: z.string({ required_error: "Email is required" }).email("Please enter a valid email address"),
    password: z
        .string({ required_error: "Password is required" })
        .min(6, "Password must be at least 6 characters")
        .regex(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
            "Password must contain at least 1 uppercase letter, 1 number, and 1 special character",
        ),
})