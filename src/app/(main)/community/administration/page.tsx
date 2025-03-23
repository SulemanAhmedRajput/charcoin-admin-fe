"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import { useState } from "react";

const adminsData = [
  {
    id: 12458,
    username: "BlazeFenix",
    name: "Confidential Name 1",
    email: "admin1@charcoin.org",
    phone: "+502-8906-9836",
    otp: "Google Authenticator",
    permissions: 12,
    lastLogin: "Feb 24, 2025 at 16:23",
    ip: "184.163.251.147",
  },
  {
    id: 12458,
    username: "DeepWhale",
    name: "Confidential Name 2",
    email: "admin2@charcoin.org",
    phone: "+502-5478-6532",
    otp: "Authy Authenticator",
    permissions: 10,
    lastLogin: "Feb 24, 2025 at 18:21",
    ip: "168.195.245.454",
  },
  {
    id: 12458,
    username: "AstroRocket",
    name: "Confidential Name 3",
    email: "admin3@charcoin.org",
    phone: "+502-2548-9856",
    otp: "Authy Authenticator",
    permissions: 8,
    lastLogin: "Feb 24, 2025 at 22:19",
    ip: "210.145.236.200",
  },
  {
    id: 12458,
    username: "WhiteFox",
    name: "Confidential Name 4",
    email: "admin4@charcoin.org",
    phone: "+41-5129-8457",
    otp: "Google Authenticator",
    permissions: 12,
    lastLogin: "Feb 24, 2025 at 14:10",
    ip: "187.195.245.475",
  },
  {
    id: 12458,
    username: "Neptune",
    name: "Confidential Name 5",
    email: "admin5@charcoin.org",
    phone: "+36-9245-9878",
    otp: "Google Authenticator",
    permissions: 10,
    lastLogin: "Feb 24, 2025 at 21:45",
    ip: "99.0125.310.0",
  },
];

const Administrators = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAdmins = adminsData.filter((admin) =>
    admin.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#121212] min-h-screen text-white">
      {/* Header & Search */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Administrators</h2>
        <Button className="bg-[#00FFC2] text-black font-semibold hover:bg-[#00E5A5]">
          Add New →
        </Button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search by Username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-[#222] border-[#333] text-white"
        />
      </div>

      {/* Table */}
      <div className="rounded-lg border border-[#333] bg-[#1A1A1A]">
        <Table>
          <TableHeader className="bg-[#222]">
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>OTP Auth Application</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead>Last Login</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAdmins.map((admin, index) => (
              <TableRow key={index} className="border-b border-[#333]">
                <TableCell>{admin.id}</TableCell>
                <TableCell>{admin.username}</TableCell>
                <TableCell>{admin.name}</TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.phone}</TableCell>
                <TableCell>
                  <Badge className="bg-blue-500">{admin.otp}</Badge>
                </TableCell>
                <TableCell>{admin.permissions}</TableCell>
                <TableCell>
                  <div>
                    <p>{admin.lastLogin}</p>
                    <p className="text-sm text-gray-400">IP: {admin.ip}</p>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Administrators;
