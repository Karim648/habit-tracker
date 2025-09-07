import { Calendar, Flame, Target, TrendingUp } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "../ui/card";
import { Progress } from "../ui/progress";

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 gap-8 px-20 py-10 md:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-red-100/85">
        <CardHeader>
          <CardTitle className="text-md font-medium text-gray-700">
            Today&apos;s Progress
          </CardTitle>
          <CardAction>
            <Target className="text-red-700" />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-gray-700">2/5</p>
          <Progress value={40} />
          <p className="text-sm text-gray-700">40% complete</p>
        </CardContent>
      </Card>

      <Card className="bg-red-100/85">
        <CardHeader>
          <CardTitle className="text-md font-medium text-gray-700">
            Current Streak
          </CardTitle>
          <CardAction>
            <Flame className="text-red-700" />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-gray-700">12</p>
          <p className="text-sm text-gray-700">days in a row</p>
        </CardContent>
      </Card>

      <Card className="bg-red-100/85">
        <CardHeader>
          <CardTitle className="text-md font-medium text-gray-700">
            Total Streaks
          </CardTitle>
          <CardAction>
            <TrendingUp className="text-green-500" />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-gray-700">29</p>
          <p className="text-sm text-gray-700">combined days</p>
        </CardContent>
      </Card>

      <Card className="bg-red-100/85">
        <CardHeader>
          <CardTitle className="text-md font-medium text-gray-700">
            This Week
          </CardTitle>
          <CardAction>
            <Calendar className="text-yellow-500" />
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p className="text-2xl font-bold text-gray-700">85%</p>
          <p className="text-sm text-gray-700">completion rate</p>
        </CardContent>
      </Card>
    </div>
  );
}
