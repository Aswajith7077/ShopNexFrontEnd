import Banner from "@/components/dashboard/Banner";
import FeaturedCategories from "@/components/dashboard/FeaturedCategories";
import AdCards from "./dashboard/AdCards";
import { ScrollArea } from "@/components/ui/scroll-area";
import PopularItems from "@/components/dashboard/PopularItems";

const Dashboard = () => {
  return (
    <ScrollArea className="p-5">
      <Banner />
      <FeaturedCategories />
      <AdCards />
      <PopularItems />
    </ScrollArea>
  );
};

export default Dashboard;
