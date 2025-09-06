import { randomUUID } from "crypto";

export type Habit = {
  title: string;
  category: string;
  streakStr: string;
  streak: number;
  id: string;
};

export const habits: Habit[] = [
  {
    title: "Drink 8 glasses of water",
    category: "Health",
    streakStr: "7 day streak",
    streak: 7,
    id: randomUUID(),
  },
  {
    title: "Read for 30 minutes",
    category: "Learning",
    streakStr: "12 day streak",
    streak: 12,
    id: randomUUID(),
  },
  {
    title: "Exercise for 45 minutes",
    category: "Fitness",
    streakStr: "3 day streak",
    streak: 3,
    id: randomUUID(),
  },
  {
    title: "Meditate for 10 minutes",
    category: "Mindfulness",
    streakStr: "5 day streak",
    streak: 5,
    id: randomUUID(),
  },
  {
    title: "Write in Journal",
    category: "Personal",
    streakStr: "2 day streak",
    streak: 2,
    id: randomUUID(),
  },
] as const;
