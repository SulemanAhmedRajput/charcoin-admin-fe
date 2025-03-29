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
// import { HeaderWrapper } from "@/components/custom/header-wrapper";

// const rewardsData = [
//   {
//     username: "SmartCircus",
//     wallet: "0f1H2Wk9F2B5YkJqhq9a8nT7coPzM2uFhXuAWhjKq",
//     hash: "qE2z1B5YkJqhq9a8T7coPzM2uFhXuAWhjKq9nSga",
//     status: "Awarded",
//     type: "Campaign Winner",
//     date: "Feb 26, 2025",
//     previewUrl: "#",
//     avatar: "https://example.com/avatar1.png",
//   },
//   {
//     username: "DeepWander87",
//     wallet: "VjKh9h3q8n7TcoPzM2uFhXuAWhjKq9H7fYWq4kE218",
//     hash: "8JYkJh3qA8Z1B5YkJqhq9n2H7dcPZ6T7coPpB5VjKhq9Sga",
//     status: "Awarded",
//     type: "Direct Transfer",
//     date: "Feb 25, 2025",
//     previewUrl: "#",
//     avatar: "https://example.com/avatar2.png",
//   },
// ];

// const RewardsNFT = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filter, setFilter] = useState("All");

//   const filteredData = rewardsData.filter((item) =>
//     item.username.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <HeaderWrapper
//       title="Rewards - NFTs"
//       actions={<Button className="bg-[#00E6FF] text-black">Add new →</Button>}
//     >
//       Hi
//     </HeaderWrapper>

//     //   {/* Filters & Search */}
//     //   <div className="flex gap-4 mb-4">
//     //     <Select value={filter} onValueChange={setFilter}>
//     //       <SelectTrigger className="w-[150px] bg-[#222] border-[#333] text-white">
//     //         <SelectValue placeholder="All types" />
//     //       </SelectTrigger>
//     //       <SelectContent>
//     //         <SelectItem value="All">All types</SelectItem>
//     //         <SelectItem value="Campaign Winner">Campaign Winner</SelectItem>
//     //         <SelectItem value="Direct Transfer">Direct Transfer</SelectItem>
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

//     //   {/* Table */}
//     //   <div className="rounded-lg border border-[#333] bg-[#1A1A1A]">
//     //     <Table>
//     //       <TableHeader className="bg-[#222]">
//     //         <TableRow>
//     //           <TableHead>Username / Wallet / NFT Transaction HASH</TableHead>
//     //           <TableHead>Status</TableHead>
//     //           <TableHead>Type of award</TableHead>
//     //           <TableHead>Date</TableHead>
//     //           <TableHead>Preview</TableHead>
//     //         </TableRow>
//     //       </TableHeader>
//     //       <TableBody>
//     //         {filteredData.map((reward, index) => (
//     //           <TableRow key={index} className="border-b border-[#333]">
//     //             <TableCell className="flex items-center gap-3">
//     //               <img
//     //                 src={reward.avatar}
//     //                 alt="avatar"
//     //                 className="w-10 h-10 rounded-full"
//     //               />
//     //               <div>
//     //                 <p className="font-semibold">{reward.username}</p>
//     //                 <p className="text-sm text-gray-400 truncate w-[200px]">
//     //                   {reward.wallet}
//     //                 </p>
//     //                 <p className="text-xs text-gray-500 truncate w-[200px]">
//     //                   {reward.hash}
//     //                 </p>
//     //               </div>
//     //             </TableCell>
//     //             <TableCell>
//     //               <Badge className="bg-green-500">{reward.status}</Badge>
//     //             </TableCell>
//     //             <TableCell>
//     //               <Badge
//     //                 className={
//     //                   reward.type === "Campaign Winner"
//     //                     ? "bg-purple-500"
//     //                     : "bg-pink-500"
//     //                 }
//     //               >
//     //                 {reward.type}
//     //               </Badge>
//     //             </TableCell>
//     //             <TableCell>{reward.date}</TableCell>
//     //             <TableCell>
//     //               <Button className="bg-[#00E6FF] text-black">
//     //                 Preview in Solana →
//     //               </Button>
//     //             </TableCell>
//     //           </TableRow>
//     //         ))}
//     //       </TableBody>
//     //     </Table>
//     //   </div>
//     // </div>
//   );
// };

// export default RewardsNFT;

"use client";

import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";

import { nftsColumns } from "@/components/columns/nfts_column";
import { HeaderWrapper } from "@/components/custom/header-wrapper";
import { CreateNfts } from "@/components/nfts/create-nfts";
import { CustomSheet } from "@/components/reuseable/add-causes-sheet";
import { NftsTable } from "@/components/rewards/nfts-table";
import { Button } from "@/components/ui/button";
import { DateTimePicker } from "@/components/ui/date-time-picker";
import { Input } from "@/components/ui/input";
import useDialogStore from "@/stores/dialog-store";
import { NFTSRecord } from "@/types/rewards";

const transactionRecords: NFTSRecord[] = [
  {
    username: "Waiting campaign completion",
    wallet: "",
    hash: "",
    status: "Waiting campaign completion",
    typeOfAward: "Campaign Winner",
    date: new Date("2025-03-25T00:00:00Z"),
    preview: "Preview in Solanart",
  },
  {
    username: "SmartCircus",
    wallet: "9H7XWqE2r1B5YvKjkhq3n8v7TcdPzMoJfHxuAWfhqXg",
    hash: "qE2r1B5YvKjkhq3n8v7H7XWqE2r1B7TCdPq6B5YvKjkhq3n",
    status: "Awarded",
    typeOfAward: "Campaign Winner",
    date: new Date("2025-02-25T00:00:00Z"),
    preview: "Preview in Solanart",
  },
  {
    username: "DeepWaters87",
    wallet: "VjKjkhq3n8v7TcdPzMoJfHxuAWfhqXg9H7XWqE2r1B5",
    hash: "5VjKjkhq3n8v7H7XWqE2r1B5YvKjkhq3n8HHoJf7TCdPq6B5YvKjkhq3n",
    status: "Awarded",
    typeOfAward: "Direct Transfer",
    date: new Date("2025-02-25T00:00:00Z"),
    preview: "Preview in Solanart",
  },
  {
    username: "GreatLakes_23",
    wallet: "VjKjkhq3n8v7TcdPzMoJfHxuAWfhqXg9H7XWqE2r1B5VhNqXg",
    hash: "qE2r1B7XWqE2eB5YvKjKjkhq3n8HHoJf7TCdPq6B5YvKjkhq3n",
    status: "Awarded",
    typeOfAward: "Campaign Winner",
    date: new Date("2025-01-25T00:00:00Z"),
    preview: "Preview in Solanart",
  },
  {
    username: "Marcus_lkl",
    wallet: "VjKjkhq3n8ku4H7XWqE2r1B5YvKjkhq3n8v7TcdPzMoJf",
    hash: "qE2r1H7XWqE2r1B5VjKjkhq3n8HHoJf7TCdPq6B5YvKjkhq3n",
    status: "Awarded",
    typeOfAward: "Campaign Winner",
    date: new Date("2024-12-25T00:00:00Z"),
    preview: "Preview in Solanart",
  },
  {
    username: "FroSand82",
    wallet: "VjKjkhq3n8v7H7XWqE2r1B5VhNqXg9H7XWqE2r1B5T5Tc",
    hash: "qE2r1B5VjKjkhq3n8HHoJf7TCdPq6B5YvKjkhq3n",
    status: "Awarded",
    typeOfAward: "Campaign Winner",
    date: new Date("2024-12-25T00:00:00Z"),
    preview: "Preview in Solanart",
  },
];

// ✅ Explicitly define the return type as `Promise<TransactionRecord[]>`
const fetchTransactions = async (
  query = "",
  month = new Date()
): Promise<NFTSRecord[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = transactionRecords.filter(
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
  const [date, setDate] = useState<Date>(new Date());
  const { openDialog, setNtfsAdd } = useDialogStore();

  const { data = [], isLoading } = useQuery<NFTSRecord[]>({
    queryKey: ["ntfs", searchQuery, date],
    queryFn: () => fetchTransactions(searchQuery, date),
  });

  return (
    <HeaderWrapper
      title="Rewards - NFTs"
      description="NFT collections and distribution control"
      actions={
        <Button size={"lg"} onClick={() => setNtfsAdd(true)}>
          Add new →
        </Button>
      }
    >
      <div className="mb-6 ">
        <div className="flex items-center gap-4 mb-4">
          <DateTimePicker date={date} setDate={setDate} />
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

        <NftsTable
          data={data} // ✅ Now `data` is always a TransactionRecord[]
          columns={nftsColumns}
          fetching={isLoading}
        />
        <CustomSheet
          isOpen={openDialog == "nfts_add"}
          setIsOpen={setNtfsAdd}
          title="Edit Cause form"
          className="pt-2 px-4"
        >
          <CreateNfts />
        </CustomSheet>
      </div>
    </HeaderWrapper>
  );
};

export default TopTiers;
