import NewHabitForm from "@/components/forms/NewHabitForm";
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
    return new Error("User not authenticated");
  }

  const [habit] = await db
    .select()
    .from(HabitsTable)
    .where(and(eq(HabitsTable.id, habitId), eq(HabitsTable.userId, userId)));

  if (!habit) {
    return <div>Habit not found</div>;
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
      <NewHabitForm habit={habit} />
    </div>
  );
}
