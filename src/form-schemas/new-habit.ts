import { Categories, Frequencies } from "@/data/data";
import z from "zod";

const timeRegex = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

export const newHabitFormSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().optional(),
  category: z.enum(Categories),
  frequency: z.enum(Frequencies),
  target: z.number().int().min(1, "Must be at least 1"),
  reminder: z.string().regex(timeRegex, "Must be in HH:MM format"),
});
