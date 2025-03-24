"use client";

import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";

import { NewsColumn } from "@/components/columns/news-column";
import { NewsTable } from "@/components/community/news-table";
import { HeaderWrapper } from "@/components/custom/header-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NewsArticle } from "@/types/news";
import { UserStatus, UserWallet } from "@/types/user-and-wallet";
import { UserWalletTable } from "@/components/community/user-wallet-table";
import { UserWalletColumns } from "@/components/columns/user-wallet-column";
const newsExample: UserWallet[] = [
  {
    id: 12458,
    username: "SmartCircus",
    wallet: "0x7HWh9ZzE1B9KyjXnG9n7bTQoF2MxuRJWuAYhhNqY",
    transactions: 241,
    balance: 124125.3,
    tokens: "190,845 Tokens",
    registration: new Date("2024-09-20"), // Converted to Date
    lastTransaction: new Date("2025-03-21"), // Converted to Date
    status: UserStatus.Blocked,
  },
  {
    id: 124527,
    username: "Rover2971",
    wallet: "547HWh9ZzE1B9KyjT7QoF2MxuRJWuAYhhJ34n",
    transactions: 47,
    balance: 4468.0,
    tokens: "50,145 Tokens",
    registration: new Date("2024-09-21"),
    lastTransaction: new Date("2025-03-20"),
    status: UserStatus.Active,
  },
  {
    id: 986582,
    username: "RangoTBT",
    wallet: "8HWh9ZzE1B9KyjXnG9n7TQoF2MxuRJWuAYhhJ343",
    transactions: 24,
    balance: 7011.11,
    tokens: "94,745 Tokens",
    registration: new Date("2024-10-17"),
    lastTransaction: new Date("2025-03-18"),
    status: UserStatus.Active,
  },
];

// ✅ Explicitly define the return type as `Promise<TransactionRecord[]>`
const fetchTransactions = async (
  query = "",
  month = "March 2025"
): Promise<UserWallet[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = newsExample.filter(
        (record) => record.username.toLowerCase().includes(query.toLowerCase())
        // record.username.toLowerCase().includes(query.toLowerCase()) ||
        // record.wallet.toLowerCase().includes(query.toLowerCase()) ||
        // record.hash.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 500);
  });
};

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("March 2025");

  const { data = [], isLoading } = useQuery<UserWallet[]>({
    queryKey: ["user-wallet", searchQuery, selectedMonth],
    queryFn: () => fetchTransactions(searchQuery, selectedMonth),
  });

  return (
    <HeaderWrapper
      title="News"
      description="Public news about the progress of each donation and the CharCoin impact"
      actions={<Button size={"lg"}>Add new →</Button>}
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

        <UserWalletTable
          data={data} // ✅ Now `data` is always a TransactionRecord[]
          columns={UserWalletColumns}
          fetching={isLoading}
        />
      </div>
    </HeaderWrapper>
  );
};

export default News;
