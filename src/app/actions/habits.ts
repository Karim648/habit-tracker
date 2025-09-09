"use server";

import { newHabitFormSchema } from "@/form-schemas/new-habit";
import z from "zod";
import { auth } from "@clerk/nextjs/server";
import { HabitsTable } from "@/db/schema";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { createCalendarEventForHabit } from "./googleCalendar";

export async function createNewHabit(
  values: z.infer<typeof newHabitFormSchema>,
) {
  const { userId } = await auth();

  if (!userId) throw new Error("User not authenticated");

  try {
    const habit = await db
      .insert(HabitsTable)
      .values({ ...values, userId })
      .returning(); // .returning inserts the row and gets it back where we can store that value

    // Push to Google Calendar
    await createCalendarEventForHabit(userId, {
      name: habit[0].name,
      reminder: habit[0].reminder,
    });

    return habit;
  } catch (error) {
    throw new Error("Habit failed to add");
  }
}

export async function editHabit(
  habitId: string,
  values: z.infer<typeof newHabitFormSchema>,
) {
  try {
    await db.update(HabitsTable).set(values).where(eq(HabitsTable.id, habitId));
  } catch (error) {
    throw new Error("Failed to edit habit");
  }

  redirect("/dashboard");
}

export async function deleteHabit(habitId: string) {
  try {
    await db.delete(HabitsTable).where(eq(HabitsTable.id, habitId));
  } catch (error) {
    return new Error("Habit could not be deleted");
  }

  redirect("/dashboard");
}


