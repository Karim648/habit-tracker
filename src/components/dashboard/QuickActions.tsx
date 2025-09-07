import { Plus, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

export default function QuickActions() {
  return (
    <div>
      <Card className="bg-red-100/45">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-700">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 text-gray-700">
          <Link
            href="/habits/new"
            className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1 hover:bg-pink-600 hover:text-white"
          >
            <Plus className="h-5 w-5" />
            <p>Add New Habit</p>
          </Link>
          <Link
            href="/analytics"
            className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1 hover:bg-pink-600 hover:text-white"
          >
            <TrendingUp className="h-5 w-5" />
            <p>View Analytics</p>
          </Link>
          <Link
            href="/onboarding"
            className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1 hover:bg-pink-600 hover:text-white"
          >
            <Target className="h-5 w-5" />
            <p>Take Tour</p>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
