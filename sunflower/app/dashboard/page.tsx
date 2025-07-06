"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

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
}
