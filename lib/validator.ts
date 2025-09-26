import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";
import path from "path";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "price must have exactly two decimal places"
  );

// schema for inserting products

export const productSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters"),
  slug: z.string().min(3, "slug must be atleast 3 characters"),
  category: z.string().min(3, "Category must be atleast 3 characters"),
  brand: z.string().min(3, "Brand must be atleast 3 characters"),
  description: z.string().min(3, "Desription must be atleast 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "product must be atleast 1 image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

//schema for signIn
export const signInFormSchema = z.object({
  email: z.string().email("invalid email"),
  password: z.string().min(6, "Password must be atleast 6 characters long"),
});

//schema for signUp
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "name must be atleast 3 characters long"),
    email: z.string().email("invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be atleast 6 characters long"),
  })
  .refine((data) => {
    data.password === data.confirmPassword,
      {
        message: "password doesn't match",
      };
  });
