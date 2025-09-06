import { Flame, ChartColumn, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function Features() {
  return (
    <section className="mt-20 flex flex-col items-center bg-red-50/45 py-20">
      <div className="mb-10 flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-bold text-gray-700 lg:text-3xl xl:text-4xl">
          Everything You Need to Build Better Habits
        </h2>
        <p className="max-w-lg text-gray-500">
          Our comprehensive platform provides all the tools and insights you
          need to create lasting positive change.
        </p>
      </div>

      <div className="mx-30 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="cursor-pointer bg-red-100/45 transition-shadow hover:shadow-lg">
          <CardHeader>
            <div className="mb-2 w-min rounded-lg bg-red-200 p-2">
              <Flame className="text-red-700" />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-600">
              Streak Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Visualize your progress with powerful streak counters that
              motivate you to maintain consistency and build momentum.
            </p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer bg-red-100/45 transition-shadow hover:shadow-lg">
          <CardHeader>
            <div className="mb-2 w-min rounded-lg bg-red-200 p-2">
              <ChartColumn className="text-red-700" />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-600">
              Progress Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Get detailed insights into your habit patterns with comprehensive
              analytics, charts, and performance metrics.
            </p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer bg-red-100/45 transition-shadow hover:shadow-lg">
          <CardHeader>
            <div className="mb-2 w-min rounded-lg bg-green-200 p-2">
              <Target className="text-green-700" />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-600">
              Smart Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Set personalized goals with intelligent recommendations based on
              your lifestyle and track your journey to success.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
