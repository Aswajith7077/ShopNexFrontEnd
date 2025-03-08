import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return <SidebarProvider>
      <div className="flex flex-row w-screen h-screen">
        <AppSidebar />
        <div className="flex flex-col w-full h-screen">
          <Navbar />
          <ScrollArea className="flex-grow overflow-auto">
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </SidebarProvider>;
};

export default Home;
