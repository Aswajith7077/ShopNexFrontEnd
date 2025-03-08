import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeContext } from "@/context/home.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const client = new QueryClient();
const Home = () => {
  const [context, setContext] = useState<any>();

  return (
    <QueryClientProvider client={client}>
      <HomeContext.Provider
        value={{
          context: context,
          setContext: setContext
        }}
      >
        <SidebarProvider>
          <div className="flex flex-row w-screen h-screen">
            <AppSidebar />
            <div className="flex flex-col w-full h-screen">
              <Navbar />
              <Outlet context={context} />
            </div>
          </div>
        </SidebarProvider>
      </HomeContext.Provider>
    </QueryClientProvider>
  );
};

export default Home;
