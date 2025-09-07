import DashboardNav from "@/components/dashboard/DashboardNav";
import Motivation from "@/components/dashboard/Motivation";
import QuickActions from "@/components/dashboard/QuickActions";
import StatsOverview from "@/components/dashboard/StatsOverview";
import TodaysHabits from "@/components/dashboard/TodaysHabits";

export default function Dashboard() {
  return (
    <div>
      <DashboardNav />
      <StatsOverview />
      <div className="mx-20 flex space-x-8 mb-20">
        <TodaysHabits />
        <div className="w-2/6 flex flex-col gap-8">
          <QuickActions />
          <Motivation />
        </div>
      </div>
    </div>
  );
}
