<<<<<<< HEAD
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import data from "./dashboard/data.json"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
=======
"use client";

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp, BadgeCheckIcon, AlertCircleIcon, CheckIcon } from "lucide-react";
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import React from "react";

const badgeOptions = [
  { label: 'Verified', icon: BadgeCheckIcon, variant: 'secondary' },
  { label: 'Alert', icon: AlertCircleIcon, variant: 'destructive' },
  { label: 'Checked', icon: CheckIcon, variant: 'outline' },
];

const contacts = [
  {
    name: "Colin Nelson",
    email: "colin@example.com",
    avatar: "https://github.com/shadcn.png",
    badges: [
      { label: 'Verified', variant: 'secondary', icon: BadgeCheckIcon },
      { label: 'Checked', variant: 'outline', icon: CheckIcon },
    ],
  },
  {
    name: "Evelyn Rabbit",
    email: "evelyn@example.com",
    avatar: "https://github.com/evilrabbit.png",
    badges: [
      { label: 'Alert', variant: 'destructive', icon: AlertCircleIcon },
    ],
  },
  {
    name: "Lee Rob",
    email: "lee@example.com",
    avatar: "https://github.com/leerob.png",
    badges: [
      { label: 'Checked', variant: 'outline', icon: CheckIcon },
    ],
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    avatar: "",
    badges: [],
  },
];

const totalContacts = 42;
const interactionsThisMonth = 15;
const chartData = [
  { month: "Jan", interactions: 3 },
  { month: "Feb", interactions: 5 },
  { month: "Mar", interactions: 7 },
  { month: "Apr", interactions: 2 },
  { month: "May", interactions: 10 },
  { month: "Jun", interactions: 15 },
];

function ChartBarContacts() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Contacts Reached</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", height: 240 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
              <Tooltip />
              <Bar dataKey="interactions" fill="#6366f1" radius={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total interactions for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}

function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2 mb-6">
      <div className="flex w-full flex-wrap gap-2">
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
      <div className="flex w-full flex-wrap gap-2">
        <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">
          <BadgeCheckIcon />
          Verified
        </Badge>
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">99</Badge>
        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">20+</Badge>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <h1 className="text-3xl font-bold mb-2">Personal CRM Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Interactions per Month</CardTitle>
            <CardDescription>Track your contact activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ width: "100%", height: 240 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                  <Tooltip />
                  <Bar dataKey="interactions" fill="#6366f1" radius={8} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full flex flex-col items-center justify-center">
          <CardHeader>
            <CardTitle>Total Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center">{totalContacts}</div>
            <div className="text-muted-foreground text-center">All time</div>
          </CardContent>
        </Card>
        <Card className="w-full flex flex-col items-center justify-center">
          <CardHeader>
            <CardTitle>Interactions This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-center">{interactionsThisMonth}</div>
            <div className="text-muted-foreground text-center">Up 20% from last month</div>
          </CardContent>
        </Card>
      </div>
      {/* Add more CRM widgets here if needed */}
    </div>
  );
>>>>>>> 8fe1ddd (refactor: move Next.js app to repo root for deployment)
}
