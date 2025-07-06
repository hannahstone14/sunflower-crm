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

const chartData = [
  { month: "January", contacts: 12 },
  { month: "February", contacts: 18 },
  { month: "March", contacts: 15 },
  { month: "April", contacts: 8 },
  { month: "May", contacts: 20 },
  { month: "June", contacts: 14 },
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
              <Bar dataKey="contacts" fill="#6366f1" radius={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total contacts reached for the last 6 months
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

export default function Home() {
  return (
    <div className="flex min-h-screen bg-muted">
      {/* Sidebar */}
      <aside
        className="hidden md:flex flex-col w-64 border-r p-4 gap-4"
        style={{
          background: 'var(--sidebar)',
          color: 'var(--sidebar-foreground)',
          borderColor: 'var(--sidebar-border)',
        }}
      >
        <div className="font-bold text-lg mb-4" style={{ color: 'var(--sidebar-primary)' }}>Personal</div>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start" style={{ color: 'var(--sidebar-foreground)' }}>Dashboard</Button>
          <Button variant="ghost" className="justify-start" style={{ color: 'var(--sidebar-foreground)' }}>People</Button>
          <Button variant="ghost" className="justify-start" style={{ color: 'var(--sidebar-foreground)' }}>Deals</Button>
        </nav>
      </aside>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden fixed top-4 left-4 z-50">Menu</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-4">
            <Button variant="ghost">Dashboard</Button>
            <Button variant="ghost">People</Button>
            <Button variant="ghost">Deals</Button>
          </nav>
        </SheetContent>
      </Sheet>
      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8 p-8">
        {/* Dashboard Title */}
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <BadgeDemo />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <ChartBarContacts />
          <Card className="w-full flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle>Total Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-center">{contacts.length}</div>
              <div className="text-muted-foreground text-center">All time</div>
            </CardContent>
          </Card>
          <Card className="w-full flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle>Interactions This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-center">32</div>
              <div className="text-muted-foreground text-center">Up 12% from last month</div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Avatar</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Badges</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Avatar>
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback>{contact.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-2">
                        {badgeOptions.map((badge, i) => {
                          const found = contact.badges.find(b => b.label === badge.label);
                          const Icon = badge.icon;
                          return (
                            <Badge
                              key={i}
                              variant={badge.variant}
                              className={`flex items-center gap-1 cursor-pointer ${found ? '' : 'opacity-40'}`}
                            >
                              <Icon className="h-4 w-4" /> {badge.label}
                            </Badge>
                          );
                        })}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
