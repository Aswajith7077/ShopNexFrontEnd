import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function SidebarMain({
  categories,
}: {
  categories: {
    title: string
    items?: {
      title: string
      url: string
    }[]
  }
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="">Category</SidebarGroupLabel>
      <SidebarMenu className="cursor-pointer">
          <Collapsible
            key={categories.title}
            asChild
            className="group/collapsible py-2"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild className="cursor-pointer">
                <SidebarMenuButton tooltip={categories.title}>
                  <span>{categories.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="">
                  {categories.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title} className="">
                      <SidebarMenuSubButton asChild>
                        <Button className="py-5 w-full justify-start cursor-pointer" variant='ghost'>
                          <span>{subItem.title}</span>
                        </Button>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        
      </SidebarMenu>
    </SidebarGroup>
  )
}
