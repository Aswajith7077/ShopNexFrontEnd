import Banner from "@/components/dashboard/Banner";
import FeaturedCategories from "@/components/dashboard/FeaturedCategories";
import AdCards from "@/components/dashboard/AdCards";
import { ScrollArea } from "@/components/ui/scroll-area";
import PopularItems from "@/components/dashboard/PopularItems";

const Dashboard = () => {
  return <ScrollArea className="flex-grow overflow-auto p-5">
      <Banner />
      <FeaturedCategories />
      <AdCards />
      <PopularItems />
    </ScrollArea>;
};

export default Dashboard;
