import HabitForm from "@/components/forms/HabitForm";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { HabitsTable } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HabitPage({
  params,
}: {
  params: Promise<{ habitId: string }>;
}) {
  const { habitId } = await params;
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  let habit;

  try {
    [habit] = await db
      .select()
      .from(HabitsTable)
      .where(and(eq(HabitsTable.id, habitId), eq(HabitsTable.userId, userId)));
  } catch (error) {
    // throw new Error("Database query failed");
  }

  if (!habit) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
        <h1 className="mb-4 text-4xl font-bold">404 - Habit Not Found</h1>
        <p className="mb-8 text-lg">
          The habit you are looking for does not exist or you do not have
          permission to view it.
        </p>
        <Link href="/dashboard" passHref>
          <div className="rounded-lg bg-red-700 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-red-800">
            Return to Dashboard
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-20">
      <header className="pb-10">
        <nav className="flex items-center gap-6 bg-red-100/85 px-10 py-4">
          <Button
            variant="ghost"
            className="cursor-pointer hover:bg-red-700 hover:text-white"
            asChild
          >
            <Link href="/dashboard">
              <ArrowLeft /> Back to Dashboard
            </Link>
          </Button>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Edit Habit</h1>
            <p>Update your habit details</p>
          </div>
        </nav>
      </header>
      <HabitForm habit={habit} />
    </div>
  );
}
