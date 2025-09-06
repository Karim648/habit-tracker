import { MoveRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-20 flex flex-col items-center gap-7 text-center">
      <div className="rounded-lg bg-red-700 p-1.5 text-xs font-medium text-white">
        Transform Your Life, One Habit at a Time
      </div>
      <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl xl:text-6xl">
        Transform Your Habits,
        <br />
        <span className="text-red-700">Transform Your Life</span>
      </h1>
      <p className="max-w-xl text-gray-500">
        Build lasting habits with our science-backed approach. Track progress,
        maintain streaks, and achieve your goals with personalized insights and
        motivation.
      </p>
      <div className="flex items-center gap-4">
        <Button className="cursor-pointer bg-red-700 hover:bg-red-800" asChild>
          <Link href="/onboarding">
            Start Your journey <MoveRight />
          </Link>
        </Button>
        <Button variant="outline" className="cursor-pointer hover:bg-pink-500 hover:text-white">
          <Play /> See Demo
        </Button>
      </div>
    </section>
  );
}
