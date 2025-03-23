"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";

import { HeaderWrapper } from "@/components/custom/header-wrapper";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TopTierTable } from "@/components/rewards/top-tier-table";
import { TopTierColumn } from "@/components/columns/top-tier-column";

// Define a type for transactions
type TransactionRecord = {
  position: number;
  username: string;
  wallet: string;
  hash: string;
  transactions: number;
  amount: number;
  registration: Date;
  lastTransaction: Date;
  awarded: number;
};

// Mock transaction data
const transactionRecords: TransactionRecord[] = [
  {
    position: 1,
    username: "SmartCircus",
    wallet: "9fH7XWqE2z1B5VjKshp3Qn8Y7TcdP6ZMoJFkxuAWhqKv",
    hash: "qE2z1B5VjKshp3Q9fH7XWqE2z18Y7TcdP6pB5VjKshp3Qn",
    transactions: 241,
    amount: 124125.2,
    registration: new Date(2024, 8, 20),
    lastTransaction: new Date(2025, 2, 21),
    awarded: 2245.25,
  },
  {
    position: 2,
    username: "BoosterCoast",
    wallet: "2aH8KWrTqE9B5VjKshp7Qn3Y7TcdP6ZMoJFkxuAWhqKv",
    hash: "rTqE9B5VjKshp3Q8H7XWqE2z1Y7TcdP6pB5VjKshp3Qn",
    transactions: 220,
    amount: 121178.98,
    registration: new Date(2024, 8, 17),
    lastTransaction: new Date(2025, 2, 21),
    awarded: 2008.1,
  },
];

// ✅ Explicitly define the return type as `Promise<TransactionRecord[]>`
const fetchTransactions = async (
  query = "",
  month = "March 2025"
): Promise<TransactionRecord[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = transactionRecords.filter(
        (record) =>
          record.username.toLowerCase().includes(query.toLowerCase()) ||
          record.wallet.toLowerCase().includes(query.toLowerCase()) ||
          record.hash.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 500);
  });
};

const TopTiers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("March 2025");

  const { data = [], isLoading } = useQuery<TransactionRecord[]>({
    queryKey: ["transactions", searchQuery, selectedMonth],
    queryFn: () => fetchTransactions(searchQuery, selectedMonth),
  });

  return (
    <HeaderWrapper
      title="Rewards - Top Tiers"
      description="Showing the top 10 users with the most volume in the selected period"
    >
      <div className="mb-6 ">
        <div className="flex items-center gap-4 mb-4">
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger
              variant={"newly_secondary"}
              className="w-[200px] !bg-[#3D3C44]"
            >
              <SelectValue placeholder="Select date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="January 2025">January 2025</SelectItem>
              <SelectItem value="February 2025">February 2025</SelectItem>
              <SelectItem value="March 2025">March 2025</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative  w-80 ">
            <Input
              className="!w-full !bg-[#3D3C44] "
              variant={"newly_secondary"}
              placeholder="Search by username, wallet, or hash"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <TopTierTable
          data={data} // ✅ Now `data` is always a TransactionRecord[]
          columns={TopTierColumn}
          fetching={isLoading}
        />
      </div>
    </HeaderWrapper>
  );
};

export default TopTiers;
