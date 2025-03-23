"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Lock, Search, Unlock } from "lucide-react";
import { useState } from "react";

const usersData = [
  {
    id: 12458,
    username: "SmartCircus",
    wallet: "0x7HWh9ZzE1B9KyjXnG9n7bTQoF2MxuRJWuAYhhNqY",
    transactions: 241,
    balance: "$124,125.30",
    tokens: "190,845 Tokens",
    registration: "Sep 20, 2024",
    lastTransaction: "Mar 21, 2025",
    status: "Blocked",
  },
  {
    id: 124527,
    username: "Rover2971",
    wallet: "547HWh9ZzE1B9KyjT7QoF2MxuRJWuAYhhJ34n",
    transactions: 47,
    balance: "$4,468.00",
    tokens: "50,145 Tokens",
    registration: "Sep 21, 2024",
    lastTransaction: "Mar 20, 2025",
    status: "Active",
  },
  {
    id: 986582,
    username: "RangoTBT",
    wallet: "8HWh9ZzE1B9KyjXnG9n7TQoF2MxuRJWuAYhhJ343",
    transactions: 24,
    balance: "$7,011.11",
    tokens: "94,745 Tokens",
    registration: "Oct 17, 2024",
    lastTransaction: "Mar 18, 2025",
    status: "Active",
  },
];

const UsersWallets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredUsers = usersData.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.wallet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#121212] min-h-screen text-white">
      {/* Header & Filters */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Users & Wallets</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-full bg-[#222] border-[#333] text-white">
            <SelectValue placeholder="All status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All status</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Blocked">Blocked</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by Wallet / Username"
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
              <TableHead>Username / Wallet</TableHead>
              <TableHead>Transactions</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead>Registration</TableHead>
              <TableHead>Last Transaction</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user, index) => (
              <TableRow key={index} className="border-b border-[#333]">
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-semibold">{user.username}</p>
                    <p className="text-sm text-gray-400 truncate max-w-[200px]">
                      {user.wallet}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{user.transactions}</TableCell>
                <TableCell>
                  <div>
                    <p>{user.balance}</p>
                    <p className="text-sm text-gray-400">{user.tokens}</p>
                  </div>
                </TableCell>
                <TableCell>{user.registration}</TableCell>
                <TableCell>{user.lastTransaction}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Badge
                      className={
                        user.status === "Blocked"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }
                    >
                      {user.status}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      {user.status === "Blocked" ? (
                        <Lock className="text-red-500" />
                      ) : (
                        <Unlock className="text-green-500" />
                      )}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
    </div>
  );
};

export default UsersWallets;
