import { habits } from "@/MockData/data";
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

export default function TodaysHabits() {
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
          {habits.map((habit) => (
            <Label
              key={habit.id}
              className="flex items-center gap-4 rounded-lg border p-4 hover:bg-red-100/50"
            >
              <Checkbox className="rounded-full border-2 border-gray-500 size-6 data-[state=checked]:border-red-700" />
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold hover:text-red-700 cursor-pointer">
                    {habit.title}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded bg-pink-600 px-2 py-0.5 text-xs text-white">
                      {habit.category}
                    </span>
                    <p>{habit.streakStr}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-red-700" />
                  <span>{habit.streak}</span>
                </div>
              </div>
            </Label>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
