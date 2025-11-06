import { z } from "zod";

// Feature schema for the Athletic Club informational site
export const featureSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  category: z.enum(['tennis', 'pool', 'fitness', 'pickleball', 'social', 'wellness']),
  badge: z.string().optional(), // "New", "Popular", etc.
  image: z.string(),
  features: z.array(z.string()),
  details: z.record(z.string(), z.string()),
  capacity: z.string().optional(),
  available: z.boolean().default(true),
});

export type Feature = z.infer<typeof featureSchema>;

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
});

export type Category = z.infer<typeof categorySchema>;
