import { z } from "zod";

// Product schema for our static e-commerce site
export const productSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  originalPrice: z.number().optional(),
  category: z.enum(['fire-pits', 'griddles', 'pizza-ovens', 'coolers', 'accessories']),
  badge: z.string().optional(), // "New", "Gift Included", etc.
  image: z.string(),
  features: z.array(z.string()),
  specifications: z.record(z.string(), z.string()),
  seatingCapacity: z.string().optional(),
  inStock: z.boolean().default(true),
});

export type Product = z.infer<typeof productSchema>;

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
});

export type Category = z.infer<typeof categorySchema>;
