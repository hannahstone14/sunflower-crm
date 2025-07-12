"use client"

import * as React from "react"
import {
<<<<<<< HEAD
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react"

import { NavDocuments } from '@/components/nav-documents'
import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
=======
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
<<<<<<< HEAD
} from '@/components/ui/sidebar'
=======
} from "@/components/ui/sidebar"
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
<<<<<<< HEAD
      icon: LayoutDashboardIcon,
=======
      icon: IconDashboard,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
    {
      title: "Lifecycle",
      url: "#",
<<<<<<< HEAD
      icon: ListIcon,
=======
      icon: IconListDetails,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
    {
      title: "Analytics",
      url: "#",
<<<<<<< HEAD
      icon: BarChartIcon,
=======
      icon: IconChartBar,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
    {
      title: "Projects",
      url: "#",
<<<<<<< HEAD
      icon: FolderIcon,
=======
      icon: IconFolder,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
    {
      title: "Team",
      url: "#",
<<<<<<< HEAD
      icon: UsersIcon,
=======
      icon: IconUsers,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
  ],
  navClouds: [
    {
      title: "Capture",
<<<<<<< HEAD
      icon: CameraIcon,
=======
      icon: IconCamera,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
<<<<<<< HEAD
      icon: FileTextIcon,
=======
      icon: IconFileDescription,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
<<<<<<< HEAD
      icon: FileCodeIcon,
=======
      icon: IconFileAi,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
<<<<<<< HEAD
      icon: SettingsIcon,
=======
      icon: IconSettings,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
    {
      title: "Get Help",
      url: "#",
<<<<<<< HEAD
      icon: HelpCircleIcon,
=======
      icon: IconHelp,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
    {
      title: "Search",
      url: "#",
<<<<<<< HEAD
      icon: SearchIcon,
=======
      icon: IconSearch,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
<<<<<<< HEAD
      icon: DatabaseIcon,
=======
      icon: IconDatabase,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
    {
      name: "Reports",
      url: "#",
<<<<<<< HEAD
      icon: ClipboardListIcon,
=======
      icon: IconReport,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
    {
      name: "Word Assistant",
      url: "#",
<<<<<<< HEAD
      icon: FileIcon,
=======
      icon: IconFileWord,
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
<<<<<<< HEAD
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Sunflower CRM</span>
=======
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
