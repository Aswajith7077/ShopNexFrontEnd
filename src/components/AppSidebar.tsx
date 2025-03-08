import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar'
import { Button } from "@/components/ui/button";
import { SidebarMain } from "@/components/sidebar/SidebarMain";
import { sidebar_data } from '@/data/sidebar.data'
import { SidebarUtilities } from "@/components/sidebar/SidebarUtilities";
import { SidebarProfile } from '@/components/sidebar/SidebarProfile';


const AppSidebar = () => {
  document.body.classList.add('dark')
  return <Sidebar className=" border-none">
      <SidebarHeader className="">
        <Button variant={"ghost"} className="py-8 text-left justify-start px-10 cursor-pointer text-xl">
          ShopNex
        </Button>
      </SidebarHeader>
      <SidebarContent className="py-5">
          <SidebarUtilities utilities={[sidebar_data.sidebar_dashboard]} title={'Dashboard'}/>
          <SidebarMain categories={sidebar_data.sidebar_category} />
          <SidebarUtilities utilities={sidebar_data.sidebar_utilities} title={'Utilities'}/>
      </SidebarContent>
      <SidebarFooter className='py-5'>
        <SidebarProfile profile={sidebar_data.sidebar_profile} />
      </SidebarFooter>
    </Sidebar>;
}

export default AppSidebar