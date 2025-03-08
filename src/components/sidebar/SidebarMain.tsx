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
                        <a href={subItem.url} className="py-5">
                          <span>{subItem.title}</span>
                        </a>
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
