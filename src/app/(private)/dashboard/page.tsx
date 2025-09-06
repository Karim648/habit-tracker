import DashboardNav from "@/components/dashboard/DashboardNav";
import StatsOverview from "@/components/dashboard/StatsOverview";
import TodaysHabits from "@/components/dashboard/TodaysHabits";

export default function Dashboard() {
  return (
    <div>
      <DashboardNav />
      <StatsOverview />
      <TodaysHabits />
    </div>
  );
}
