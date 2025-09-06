import DashboardNav from "@/components/dashboard/DashboardNav";
import QuickActions from "@/components/dashboard/QuickActions";
import StatsOverview from "@/components/dashboard/StatsOverview";
import TodaysHabits from "@/components/dashboard/TodaysHabits";

export default function Dashboard() {
  return (
    <div>
      <DashboardNav />
      <StatsOverview />
      <div className="mx-20 flex space-x-8">
        <TodaysHabits />
        <QuickActions />
      </div>
    </div>
  );
}
