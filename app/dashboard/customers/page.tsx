import DashboardSkeleton from "@/app/ui/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default function Page() {
  return <DashboardSkeleton />;
}
