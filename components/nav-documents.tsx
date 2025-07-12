"use client"

import {
<<<<<<< HEAD
  FolderIcon,
  MoreHorizontalIcon,
  ShareIcon,
  type LucideIcon,
} from "lucide-react"
=======
  IconDots,
  IconFolder,
  IconShare3,
  IconTrash,
  type Icon,
} from "@tabler/icons-react"
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
<<<<<<< HEAD
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
=======
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
<<<<<<< HEAD
} from '@/components/ui/sidebar'
=======
} from "@/components/ui/sidebar"
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)

export function NavDocuments({
  items,
}: {
  items: {
    name: string
    url: string
<<<<<<< HEAD
    icon: LucideIcon
=======
    icon: Icon
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Documents</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction
                  showOnHover
<<<<<<< HEAD
                  className="rounded-sm data-[state=open]:bg-accent"
                >
                  <MoreHorizontalIcon />
=======
                  className="data-[state=open]:bg-accent rounded-sm"
                >
                  <IconDots />
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-24 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
<<<<<<< HEAD
                  <FolderIcon />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShareIcon />
                  <span>Share</span>
                </DropdownMenuItem>
=======
                  <IconFolder />
                  <span>Open</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconShare3 />
                  <span>Share</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <IconTrash />
                  <span>Delete</span>
                </DropdownMenuItem>
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
<<<<<<< HEAD
            <MoreHorizontalIcon className="text-sidebar-foreground/70" />
=======
            <IconDots className="text-sidebar-foreground/70" />
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
