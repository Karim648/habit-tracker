import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Flame } from "lucide-react";
import Link from "next/link";
import { db } from "@/db";
import { HabitsTable } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

export default async function TodaysHabits() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
    return new Error("User not authenticated");
  }

  let habits = [];

  try {
    habits = await db
      .select()
      .from(HabitsTable)
      .where(eq(HabitsTable.userId, userId));
  } catch (error) {
    throw new Error("Failed to fetch habits");
  }

  return (
    <div className="mx-auto w-4/6 min-w-90">
      <Card className="bg-red-100/45">
        <CardHeader>
          <CardTitle className="text-xl text-gray-700">
            Today&apos;s Habits
          </CardTitle>
          <CardDescription className="text-md">
            Track your daily progress
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          {habits.length > 0 ? (
            habits.map((habit) => (
              <Label
                key={habit.id}
                className="flex items-center gap-4 rounded-lg border p-4 hover:bg-red-100/50"
              >
                <Checkbox className="size-6.5 rounded-full border-2 border-gray-500 data-[state=checked]:border-red-700" />
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="cursor-pointer font-semibold hover:text-red-700">
                      <Link href={`/habits/${habit.id}`}>{habit.name}</Link>
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="rounded bg-pink-600 px-2 py-0.5 text-xs text-white">
                        {habit.category}
                      </span>
                      {/* TODO: change to the streak */}
                      <p>{habit.reminder}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-red-700" />
                    <span>{habit.target}</span>
                  </div>
                </div>
              </Label>
            ))
          ) : (
            // TODO: go over ui test it out
            <div>
              Add a new
              <Link href="/habits/new">Habit</Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
