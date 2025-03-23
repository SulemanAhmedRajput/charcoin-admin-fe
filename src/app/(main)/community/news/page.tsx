"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const newsData = [
  {
    id: 124,
    video: "/images/video-thumbnail-1.jpg",
    title: "We are making a difference in water cleaning",
    description:
      "We are making a difference in water purification, bringing clean water to communities in need...",
    status: "Published",
    category: "Clean Water",
    postedOn: "Mar 21, 2025",
    views: "7,145",
  },
  {
    id: 110,
    video: "/images/video-thumbnail-2.jpg",
    title: "Clean Water for Thousands: New Wells Installed in Kenya",
    description:
      "Donations funded 10 new wells, providing clean water to over 5,000 people in rural Kenya...",
    status: "Published",
    category: "Clean Water",
    postedOn: "Feb 10, 2025",
    views: "14,214",
  },
  {
    id: 104,
    video: "/images/video-thumbnail-3.jpg",
    title: "100,000 Meals Delivered to Families in Crisis",
    description:
      "Thanks to generous donations, emergency food packages reached over 20,000 families...",
    status: "Unpublished",
    category: "Malnutrition & Hunger",
    postedOn: "Feb 10, 2025",
    views: "8,547",
  },
];

const NewsDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = newsData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#121212] min-h-screen text-white">
      {/* Header & Filters */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">News</h2>
        <Button className="bg-[#00E0FF] text-black hover:bg-[#00B3CC]">
          Add New →
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full bg-[#222] border-[#333] text-white">
            <SelectValue placeholder="All status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All status</SelectItem>
            <SelectItem value="Published">Published</SelectItem>
            <SelectItem value="Unpublished">Unpublished</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by title or description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-[#222] border-[#333] text-white"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-[#333] bg-[#1A1A1A]">
        <Table>
          <TableHeader className="bg-[#222]">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Video</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Short Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Posted On</TableHead>
              <TableHead>Views</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((news, index) => (
              <TableRow key={index} className="border-b border-[#333]">
                <TableCell>{news.id}</TableCell>
                <TableCell>
                  <div className="relative w-[50px] h-[50px]">
                    <Image
                      src={news.video}
                      alt="video thumbnail"
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                </TableCell>
                <TableCell>{news.title}</TableCell>
                <TableCell className="truncate w-[300px]">
                  {news.description}
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      news.status === "Published"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }
                  >
                    {news.status}
                  </Badge>
                </TableCell>
                <TableCell>{news.category}</TableCell>
                <TableCell>{news.postedOn}</TableCell>
                <TableCell>{news.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {/* <div className="mt-4 flex justify-end">
        <Pagination totalPages={3} />
      </div> */}
    </div>
  );
};

export default NewsDashboard;
