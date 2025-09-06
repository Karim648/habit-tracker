import { Zap } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="flex flex-col items-center gap-8 bg-red-100/45 py-20">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-4xl font-bold text-gray-700">
          Ready to Transform Your Life?
        </h2>
        <p className="max-w-xl text-gray-600">
          Join thousands of users who have already started their journey to
          better habits and a more fulfilling life.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Button className="cursor-pointer bg-red-700 hover:bg-red-800" asChild>
          <Link href="/onboarding">
            Start Building Habits Today <Zap />
          </Link>
        </Button>
        <span className="text-sm text-gray-600">
          Free to start • No credit card required
        </span>
      </div>
    </section>
  );
}
