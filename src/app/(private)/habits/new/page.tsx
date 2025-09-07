import NewHabitForm from "@/components/forms/NewHabitForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewHabitPage() {
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
            <h1 className="text-2xl font-bold">Create Habit</h1>
            <p>Small steps, big changes</p>
          </div>
        </nav>
      </header>
      <NewHabitForm />
    </div>
  );
}
