import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(3, "Name must be at least 2 characters"),

    email: z.email("Invalid email format"),

    password: z.string().min(8, "Password must be at least 8 characters"),

    company_name: z.string().optional(),

    role: z.enum(["ADMIN", "CUSTOMER"]).optional(),
})

export const loginUserSchema = z.object({
    email: z.email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
})