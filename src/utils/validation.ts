// import { z } from "zod";

// const variantSchema = z.object({
//   type: z.string().nonempty("Type is required"),
//   value: z.string().nonempty("Value is required"),
// });

// const inventorySchema = z.object({
//   quantity: z.number().nonnegative("Quantity cannot be negative").default(0),
//   inStock: z.boolean().default(false),
// });

// export const productValidationSchema = z.object({
//   name: z.string().nonempty("Name is required"),
//   description: z.string().nonempty("Description is required"),
//   price: z.number().nonnegative("Price cannot be negative").default(0),
//   category: z.string().nonempty("Category is required"),
//   tags: z
//     .array(z.string().nonempty("Tag cannot be empty"))
//     .nonempty("At least one tag is required"),
//   variants: z.array(variantSchema).nonempty("At least one variant is required"),
//   inventory: inventorySchema,
// });
