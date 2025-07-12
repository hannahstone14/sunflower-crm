"use client"

<<<<<<< HEAD
import { MailIcon, PlusCircleIcon, type LucideIcon } from "lucide-react"

import { Button } from '@/components/ui/button'
=======
import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
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

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
<<<<<<< HEAD
    icon?: LucideIcon
=======
    icon?: Icon
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
<<<<<<< HEAD
              className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
            >
              <PlusCircleIcon />
=======
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
            >
              <IconCirclePlusFilled />
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
<<<<<<< HEAD
              className="h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <MailIcon />
=======
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <IconMail />
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
