"use server";

import { newHabitFormSchema } from "@/form-schemas/new-habit";
import z from "zod";
import { auth } from "@clerk/nextjs/server";
import { HabitsTable } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";

export async function createNewHabit(
  values: z.infer<typeof newHabitFormSchema>,
) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  try {
    await db.insert(HabitsTable).values({ ...values, userId });
  } catch (error) {
    throw new Error("Habit failed to add");
  }
}

export async function deleteHabit(id: string) {
  try {
    await db.delete(HabitsTable).where(eq(HabitsTable.id, id));
  } catch (error) {
    return new Error("Habit could not be deleted");
  }
}
