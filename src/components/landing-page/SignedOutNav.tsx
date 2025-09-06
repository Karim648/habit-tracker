import { Flame } from "lucide-react";
import { Button } from "../ui/button";
import { SignInButton } from "@clerk/nextjs";

export default function SignedOutNav() {
  return (
    <header>
      <nav className="flex items-center justify-between border-b border-red-200 p-4">
        <div className="flex items-center gap-2">
          <Button className="bg-red-700 hover:bg-red-700">
            <Flame className="size-6" />
          </Button>
          <h1 className="text-lg font-bold lg:text-xl xl:text-2xl">
            HabitFlow
          </h1>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="cursor-pointer" asChild>
            <SignInButton />
          </Button>
          <Button className="cursor-pointer bg-red-700 hover:bg-red-700">
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  );
}
