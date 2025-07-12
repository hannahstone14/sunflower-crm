"use client"

import * as React from "react"
<<<<<<< HEAD
import { LucideIcon } from "lucide-react"
=======
import { type Icon } from "@tabler/icons-react"
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
<<<<<<< HEAD
} from '@/components/ui/sidebar'
=======
} from "@/components/ui/sidebar"
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
<<<<<<< HEAD
    icon: LucideIcon
=======
    icon: Icon
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
