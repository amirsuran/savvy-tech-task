import { z } from "zod";

export const itemSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long."),
  subtitle: z.string().min(5, "Subtitle must be at least 5 characters long."),
});

export type ItemFormData = z.infer<typeof itemSchema>;


