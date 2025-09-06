import { Plus, Settings, User } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function DashboardNav() {
  return (
    <nav className="flex justify-between border-b bg-red-100/85 px-20 py-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">HabitFlow</h1>
        <p className="text-gray-600">Build better habits, one day at a time</p>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="cursor-pointer hover:bg-pink-500 hover:text-white"
          asChild
        >
          <Link href="/profile">
            <User /> Profile
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="cursor-pointer hover:bg-pink-500 hover:text-white"
        >
          <Settings /> Settings
        </Button>
        <Button className="cursor-pointer bg-red-700 hover:bg-red-800">
          <Plus /> Add Habit
        </Button>
        {/* TODO: remove this user button */}
        <UserButton />
      </div>
    </nav>
  );
}
