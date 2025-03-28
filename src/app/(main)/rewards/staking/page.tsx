// "use client";

// import { useState } from "react";
// import { Search } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card } from "@/components/ui/card";

// const stakingData = [
//   {
//     username: "SmartCircus",
//     wallet: "0f1H2Wk9F2B5YkJqhq9a8nT7coPzM2uFhXuAWhjKq",
//     stakingId: "37298474983",
//     amount: "6,475 tokens",
//     usdValue: "$113.20",
//     startDate: "May 22, 2025",
//     expirationDate: "Feb 22, 2026",
//     duration: "30 days",
//     votingPower: "0.5 votes per staked token",
//     status: "Active",
//   },
//   {
//     username: "SmartCircus",
//     wallet: "0f1H2Wk9F2B5YkJqhq9a8nT7coPzM2uFhXuAWhjKq",
//     stakingId: "37298474983",
//     amount: "84,475 tokens",
//     usdValue: "$1,969.20",
//     startDate: "Mar 26, 2025",
//     expirationDate: "Apr 26, 2025",
//     duration: "30 days",
//     votingPower: "0.5 votes per staked token",
//     status: "Completed",
//   },
// ];

// const StakingDashboard = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filter, setFilter] = useState("All");

//   const filteredData = stakingData.filter((item) =>
//     item.username.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     // <div className="p-6 bg-[#121212] min-h-screen text-white">
//     //   {/* Header & Filters */}
//     //   <div className="flex justify-between items-center mb-6">
//     //     <h2 className="text-xl font-semibold">Staking</h2>
//     //   </div>

//     //   <div className="grid grid-cols-3 gap-4 mb-6">
//     //     <Select value="January 2025">
//     //       <SelectTrigger className="w-full bg-[#222] border-[#333] text-white">
//     //         <SelectValue placeholder="Display date: January 2025" />
//     //       </SelectTrigger>
//     //       <SelectContent>
//     //         <SelectItem value="January 2025">January 2025</SelectItem>
//     //         <SelectItem value="February 2025">February 2025</SelectItem>
//     //       </SelectContent>
//     //     </Select>

//     //     <Select value={filter} onValueChange={setFilter}>
//     //       <SelectTrigger className="w-full bg-[#222] border-[#333] text-white">
//     //         <SelectValue placeholder="All status" />
//     //       </SelectTrigger>
//     //       <SelectContent>
//     //         <SelectItem value="All">All status</SelectItem>
//     //         <SelectItem value="Active">Active</SelectItem>
//     //         <SelectItem value="Completed">Completed</SelectItem>
//     //         <SelectItem value="Stopped">Stopped</SelectItem>
//     //       </SelectContent>
//     //     </Select>

//     //     <div className="relative flex-1">
//     //       <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//     //       <Input
//     //         placeholder="Search by Wallet / Username"
//     //         value={searchQuery}
//     //         onChange={(e) => setSearchQuery(e.target.value)}
//     //         className="pl-10 bg-[#222] border-[#333] text-white"
//     //       />
//     //     </div>
//     //   </div>

//     //   {/* Staking Stats */}
//

//     //   {/* Table */}
//     //   <div className="rounded-lg border border-[#333] bg-[#1A1A1A]">
//     //     <Table>
//     //       <TableHeader className="bg-[#222]">
//     //         <TableRow>
//     //           <TableHead>Username / Wallet / Staking ID</TableHead>
//     //           <TableHead>Staked Amount</TableHead>
//     //           <TableHead>Start Date</TableHead>
//     //           <TableHead>Expiration Date</TableHead>
//     //           <TableHead>Staking Duration</TableHead>
//     //           <TableHead>Voting Power</TableHead>
//     //           <TableHead>Status</TableHead>
//     //         </TableRow>
//     //       </TableHeader>
//     //       <TableBody>
//     //         {filteredData.map((stake, index) => (
//     //           <TableRow key={index} className="border-b border-[#333]">
//     //             <TableCell>
//     //               <p className="font-semibold">{stake.username}</p>
//     //               <p className="text-sm text-gray-400 truncate w-[200px]">
//     //                 {stake.wallet}
//     //               </p>
//     //               <p className="text-xs text-gray-500 truncate w-[200px]">
//     //                 Staking ID: {stake.stakingId}
//     //               </p>
//     //             </TableCell>
//     //             <TableCell>
//     //               {stake.amount} <br />
//     //               <span className="text-gray-400 text-xs">
//     //                 {stake.usdValue}
//     //               </span>
//     //             </TableCell>
//     //             <TableCell>{stake.startDate}</TableCell>
//     //             <TableCell>{stake.expirationDate}</TableCell>
//     //             <TableCell>{stake.duration}</TableCell>
//     //             <TableCell>{stake.votingPower}</TableCell>
//     //             <TableCell>
//     //               <Badge
//     //                 className={
//     //                   stake.status === "Active"
//     //                     ? "bg-green-500"
//     //                     : stake.status === "Completed"
//     //                     ? "bg-blue-500"
//     //                     : "bg-red-500"
//     //                 }
//     //               >
//     //                 {stake.status}
//     //               </Badge>
//     //             </TableCell>
//     //           </TableRow>
//     //         ))}
//     //       </TableBody>
//     //     </Table>
//     //   </div>
//     // </div>
//   );
// };

// export default StakingDashboard;

"use client";

import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";

import { stakingColumns } from "@/components/columns/staking_column";
import { HeaderWrapper } from "@/components/custom/header-wrapper";
import { StakingTable } from "@/components/rewards/staking-table";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StakingData, StakingEntry } from "@/types/staking";

// Example Data
const stakingExample: StakingData = {
  staking_summary: {
    total_tokens_staked: 2245587,
    staking_profits: 336838.05,
    profit_percentage: 15,
  },
  display_data: "January 2025",
  total_records: 7457,
  staking_data: [
    {
      username: "SmartCircus",
      wallet: "0H7hXwqZtB3VjKhgSa8nY7tCdPGzMoJFlxkuAWNqKv",
      staking_id: "37298478983",
      staked_amount: 2450,
      start_date: new Date("Mar 17, 2025"),
      expiration_date: new Date("Apr 16, 2025"),
      staking_duration: 30,
      voting_power: 0.5,
      status: "Active",
    },
    {
      username: "SmartCircus",
      wallet: "0H7hXwqZtB3VjKhgSa8nY7tCdPGzMoJFlxkuAWNqKv",
      staking_id: "37298478983",
      staked_amount: 6475,
      start_date: new Date("May 22, 2025"),
      expiration_date: new Date("Feb 21, 2025"),
      staking_duration: 30,
      voting_power: 0.5,
      status: "Active",
    },
    {
      username: "SmartCircus",
      wallet: "0H7hXwqZtB3VjKhgSa8nY7tCdPGzMoJFlxkuAWNqKv",
      staking_id: "37298478983",
      staked_amount: 20000,
      start_date: new Date("May 10, 2025"),
      expiration_date: new Date("Jul 19, 2025"),
      staking_duration: 60,
      voting_power: 1,
      status: "Active",
    },
    {
      username: "SmartCircus",
      wallet: "0H7hXwqZtB3VjKhgSa8nY7tCdPGzMoJFlxkuAWNqKv",
      staking_id: "37298478983",
      staked_amount: 5110,
      start_date: new Date("Apr 15, 2025"),
      expiration_date: new Date("May 14, 2025"),
      staking_duration: 30,
      voting_power: 0.5,
      status: "Active",
    },
    {
      username: "SmartCircus",
      wallet: "0H7hXwqZtB3VjKhgSa8nY7tCdPGzMoJFlxkuAWNqKv",
      staking_id: "37298478983",
      staked_amount: 2447,
      start_date: new Date("Apr 7, 2025"),
      expiration_date: new Date("Sep 14, 2025"),
      staking_duration: 120,
      voting_power: 3,
      status: "Active",
    },
    {
      username: "SmartCircus",
      wallet: "0H7hXwqZtB3VjKhgSa8nY7tCdPGzMoJFlxkuAWNqKv",
      staking_id: "37298478983",
      staked_amount: 84475,
      start_date: new Date("Mar 30, 2025"),
      expiration_date: new Date("Apr 28, 2025"),
      staking_duration: 30,
      voting_power: 0.5,
      status: "Completed",
    },
    {
      username: "SmartCircus",
      wallet: "0H7hXwqZtB3VjKhgSa8nY7tCdPGzMoJFlxkuAWNqKv",
      staking_id: "37298478983",
      staked_amount: 7895,
      start_date: new Date("Mar 28, 2025"),
      expiration_date: new Date("Aug 22, 2025"),
      staking_duration: 180,
      voting_power: 5,
      status: "Stopped",
    },
  ],
};

// ✅ Explicitly define the return type as `Promise<TransactionRecord[]>`
const fetchTransactions = async (
  query = "",
  month = "March 2025"
): Promise<StakingEntry[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = stakingExample?.staking_data.filter(
        (record) => record.username.toLowerCase().includes(query.toLowerCase())
        // ||
        // record.wallet.toLowerCase().includes(query.toLowerCase()) ||
        // record.hash.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 500);
  });
};

const TopTiers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("March 2025");

  const { data = [], isLoading } = useQuery<StakingEntry[]>({
    queryKey: ["staking", searchQuery, selectedMonth],
    queryFn: () => fetchTransactions(searchQuery, selectedMonth),
  });

  return (
    <HeaderWrapper
      title="Staking"
      description="List of users staking the CharCoin Token"
      actions={
        <div className="grid grid-cols-[1fr,_2px,_1fr] gap-4 mb-6  p-4 rounded-xl text-sm bg-background">
          <Card className=" text-white bg-transparent border-none shadow-none">
            <p className="text-lg font-semibold">2,245,587</p>
            <p className="text-gray-400">Tokens in Staking</p>{" "}
          </Card>
          <div className="w-full bg-custom-slate  " />
          <Card className=" text-white bg-transparent border-none shadow-none">
            <p className="text-lg font-semibold">336,838.05</p>
            <p className="text-gray-400">Profit for Staking (15%)</p>{" "}
          </Card>
        </div>
      }
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

        <StakingTable
          data={data} // ✅ Now `data` is always a TransactionRecord[]
          columns={stakingColumns}
          fetching={isLoading}
        />
      </div>
    </HeaderWrapper>
  );
};

export default TopTiers;
