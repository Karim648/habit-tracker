import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const fiveStars = [1, 2, 3, 4, 5];

export default function Testimonials() {
  return (
    <section className="bg-red-50/45 py-20">
      <div className="mb-10 flex flex-col items-center gap-2 text-center">
        <h2 className="text-4xl font-bold text-gray-700">
          Loved by Thousands of Users
        </h2>
        <p className="text-lg text-gray-500">
          See how HabitFlow has transformed lives around the world
        </p>
      </div>

      <div className="mx-30 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-red-100/45 transition-shadow hover:shadow-lg">
          <CardHeader>
            <div className="flex gap-1">
              {fiveStars.map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4 fill-red-700 text-red-700"
                />
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              &quot;HabitFlow completely changed how I approach my daily
              routines. The streak tracking keeps me motivated every single
              day.&quot;
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-red-200 p-3 font-semibold text-red-700">
                AR
              </div>
              <div>
                <p className="font-medium text-gray-700">Asap Roffy</p>
                <p className="text-sm text-gray-600">Fitness Enthusiast</p>
              </div>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-red-100/45 transition-shadow hover:shadow-lg">
          <CardHeader>
            <div className="flex gap-1">
              {fiveStars.map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4 fill-red-700 text-red-700"
                />
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              &quot;The analytics feature helped me understand my patterns and
              optimize my habits for better results. Highly recommend!&quot;
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-red-200 p-3 font-semibold text-red-700">
                JJ
              </div>
              <div>
                <p className="font-medium text-gray-700">Jonieee</p>
                <p className="text-sm text-gray-600">Entrepreneur</p>
              </div>
            </div>
          </CardFooter>
        </Card>

        <Card className="bg-red-100/45 transition-shadow hover:shadow-lg">
          <CardHeader>
            <div className="flex gap-1">
              {fiveStars.map((star) => (
                <Star
                  key={star}
                  className="h-4 w-4 fill-red-700 text-red-700"
                />
              ))}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              &quot;Simple, beautiful, and effective. HabitFlow made building
              healthy habits feel effortless and enjoyable.&quot;
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-green-200 p-3 font-semibold text-green-700">
                AS
              </div>
              <div>
                <p className="font-medium text-gray-700">Salama</p>
                <p className="text-sm text-gray-600">Student</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
