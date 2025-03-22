"use client";

import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";

import { AddCauseTable } from "@/components/causes/add-cause-table";
import { runningCauseColumns } from "@/components/columns/running_cause_column";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cause } from "@/types/causes";

// Create dummy data
const causes: Cause[] = [
  {
    id: 124,
    name: "Clean water in Guatemala's most affected community",
    category: "Clean Water",
    organization: "Water For America",
    currentlyWinning: {
      amount: "$70,000.00",
      position: 1,
    },
    startedOn: "Feb 1, 2023",
    endsOn: "Feb 20, 2025",
    benefactors: 8475,
    points: {
      count: 58457,
      label: "Points",
    },
    type: "Infinite Impact",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 133,
    name: "Building 3 schools in the west side of Nicaragua",
    category: "Education",
    organization: "Schools For the Future",
    currentlyWinning: {
      amount: "$40,000.00",
      position: 2,
    },
    startedOn: "Feb 1, 2023",
    endsOn: "Feb 20, 2025",
    benefactors: 6345,
    points: {
      count: 30114,
      label: "Points",
    },
    type: "Cause",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 178,
    name: "Attacking the hunger in the east side of Haiti",
    category: "Nourishing & Hunger",
    organization: "Eradication Hunger Association",
    currentlyWinning: {
      amount: "$30,000.00",
      position: 3,
    },
    startedOn: "Feb 1, 2023",
    endsOn: "Feb 20, 2025",
    benefactors: 4124,
    points: {
      count: 27478,
      label: "Points",
    },
    type: "Infinite Impact",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 112,
    name: "Building houses for the homeless in Guadalajara, Mexico",
    category: "Shelter & Food",
    organization: "TheShelter.Log",
    currentlyWinning: {
      amount: "$10,000.00",
      position: 4,
    },
    startedOn: "Feb 1, 2023",
    endsOn: "Feb 20, 2025",
    benefactors: 2105,
    points: {
      count: 12877,
      label: "Points",
    },
    type: "Infinite Impact",
    image: "/placeholder.svg?height=80&width=80",
  },
];

// Create a column helper

// Define columns

// Fetch function for React Query
const fetchCauses = async (query = "") => {
  // In a real app, this would be an API call
  // For this example, we'll filter the dummy data
  return new Promise<Cause[]>((resolve) => {
    setTimeout(() => {
      const filteredCauses = causes.filter(
        (cause) =>
          cause.name.toLowerCase().includes(query.toLowerCase()) ||
          cause.organization.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredCauses);
    }, 500);
  });
};

export default function CausesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("February 2023");
  const [selectedRow, setSelectedRow] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // React Query for data fetching
  const { data = [], isLoading } = useQuery({
    queryKey: ["causes", searchQuery],
    queryFn: () => fetchCauses(searchQuery),
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Causes</h1>

      <div className="mb-6">
        <Tabs defaultValue="running">
          <div className="flex items-end gap-4">
            <TabsList className="!bg-custom-slate">
              <TabsTrigger value="running" className="relative">
                Running
              </TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="drafts">Drafts</TabsTrigger>
            </TabsList>
            <div className="flex flex-col sm:flex-row gap-4 ">
              <Select value={selectedDate} onValueChange={setSelectedDate}>
                <SelectTrigger className="w-full sm:w-[200px] bg-input focus-within:!ring-2 ring-offset-2 ring-primary outline-none h-12">
                  <SelectValue placeholder="Select date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="February 2023">February 2023</SelectItem>
                  <SelectItem value="March 2023">March 2023</SelectItem>
                  <SelectItem value="April 2023">April 2023</SelectItem>
                </SelectContent>
              </Select>

              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
          <TabsContent value="running" className="mt-4 ">
            <AddCauseTable
              data={data ?? []}
              columns={runningCauseColumns}
              fetching={isLoading}
            />
          </TabsContent>
          <TabsContent value="completed">
            <div className="flex justify-center items-center h-40">
              <p className="text-muted-foreground">No completed causes</p>
            </div>
          </TabsContent>
          <TabsContent value="drafts">
            <div className="flex justify-center items-center h-40">
              <p className="text-muted-foreground">No draft causes</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
