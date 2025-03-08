"use client"

import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { IconType } from "react-icons/lib"
import { Button } from "../ui/button"
import { useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"

export function SidebarUtilities({
  utilities,
  title
}: {
  utilities: {
    title: string
    url: string
    icon: IconType
  }[],
  title:string
}) {
  const { isMobile } = useSidebar();
  const navigate = useNavigate();
  const handleNavigate = useCallback((path:string) => navigate(path),[navigate]);

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu className="pt-5">
        {utilities.map((item) => (
          <SidebarMenuItem key={item.title} className="flex justify-center">
            <SidebarMenuButton asChild>
              <Button variant={'ghost'} className="justify-start cursor-pointer py-5" onClick={() => handleNavigate(item.url)}>
                <item.icon />
                <span>{item.title}</span>
              </Button>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        
      </SidebarMenu>
    </SidebarGroup>
  )
}
