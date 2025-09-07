export type Habit = {
  title: string;
  category: string;
  streakStr: string;
  streak: number;
  id: number;
};

export const habits: Habit[] = [
  {
    title: "Drink 8 glasses of water",
    category: "Health",
    streakStr: "7 day streak",
    streak: 7,
    id: 1,
  },
  {
    title: "Read for 30 minutes",
    category: "Learning",
    streakStr: "12 day streak",
    streak: 12,
    id: 2,
  },
  {
    title: "Exercise for 45 minutes",
    category: "Fitness",
    streakStr: "3 day streak",
    streak: 3,
    id: 3,
  },
  {
    title: "Meditate for 10 minutes",
    category: "Mindfulness",
    streakStr: "5 day streak",
    streak: 5,
    id: 4,
  },
  {
    title: "Write in Journal",
    category: "Personal",
    streakStr: "2 day streak",
    streak: 2,
    id: 5,
  },
] as const;

export const Categories = [
  "Health",
  "Fitness",
  "Personal",
  "Home",
  "Social",
] as const;

export const Frequencies = ["Daily", "Weekly", "Monthly"] as const;
