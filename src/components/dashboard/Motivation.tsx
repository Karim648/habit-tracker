import { Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Suspense } from "react";

export default async function Motivation() {
  const res = await fetch("https://stoic.tekloon.net/stoic-quote");
  const quote = await res.json();

  // TODO wrap the quote card with a suspense

  return (
    <div className="flex flex-col gap-8">
      <Card className="bg-red-100/45">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-700">
            Daily Motivation
          </CardTitle>
        </CardHeader>
        <Suspense fallback={<p>Loading...</p>}>
          <CardContent className="flex flex-col gap-2 text-sm text-gray-500">
            <p>&quot;{quote.data.quote}&quot;</p>
            <p>
              - {quote.data.author ? quote.data.author : <span>Unkown</span>}
            </p>
          </CardContent>
        </Suspense>
      </Card>
      <Card className="bg-red-100/45">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-700">
            Achievement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <Flame className="h-6 w-6 text-red-700" />
            </div>
            <div>
              <p className="font-medium text-gray-700">Week Warrior</p>
              <p className="text-xs text-gray-700">
                Complete 5 habits for 7 days
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
