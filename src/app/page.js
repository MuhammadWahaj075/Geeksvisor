import { ServingIndustries } from "@/components/Home/ServingIndustries";
import { WhoAreYou } from "@/components/Home/WhoAreYou";

export default function Home() {
  return (
    <div className="flex-center-column">
      <WhoAreYou />
      <ServingIndustries />
    </div>
  );
}
