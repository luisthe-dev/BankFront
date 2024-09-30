"use client";

import React, { useEffect, useState } from "react";
import MyTable from "@/components/MyTable";
import * as axiosHandler from "@/handlers/axiosHandler";
import {
  makeFirstCharUpper,
  makeMonetaryNumber,
} from "@/handlers/helperHandler";

const Page = () => {
  const [stats, setStats] = useState([]);
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const fetchStats = async () => {
    const allStats = await axiosHandler.getRequest("/admin/stats");

    if (allStats.status === "success") {
      setStats([
        {
          title: "Total Users",
          count: allStats.data.users,
        },
        {
          title: "Total Transactions",
          count: allStats.data.transactions,
        },
        {
          title: "Total Wallet Balance",
          count: makeMonetaryNumber(allStats.data.total_wallet),
        },
      ]);
    }
  };

  const fetchUserData = async () => {
    const allUsers = await axiosHandler.getRequest("/admin/user");

    if (allUsers.status === "success") {
      setUsers(allUsers?.data);
    }
  };

  const fetchTransactionData = async () => {
    const allTransactions = await axiosHandler.getRequest("/admin/transaction");

    if (allTransactions.status === "success") {
      setTransactions(allTransactions?.data);
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchStats();
    fetchTransactionData();
  }, []);

  const backgroundColors = [
    "bg-[#4A90E2]", // Color for Total Users
    "bg-[#EA6A47]", // Color for Total Transactions
    "bg-[#F5A623]", // Color for Total Wallet Balance
  ];

  const bordercolor = [
    "border-[#4A90E2]", // Color for Total Users
    "border-[#EA6A47]", // Color for Total Transactions
    "border-[#F5A623]", // Color for Total Wallet Balance
  ];
  return (
    <div className="flex flex-col items-start justify-start pt-20 self-stretch w-full">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
        {stats.map((stat, statKey) => (
          <div
            className={`w-full lg:w-2/12 p-3 flex flex-grow flex-col gap-2 mb-8 ${backgroundColors[statKey]} text-white shadow-lg rounded-lg border ${bordercolor[statKey]}`}
            key={statKey}
          >
            <span className="text-2xl font-extrabold">{stat.title}</span>
            <span className="text-5xl font-extralight">{stat.count}</span>
          </div>
        ))}
      </div>
      <div className="my-8 flex w-full flex-col lg:flex-row gap-y-12 py-12 items-start justify-start">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <MyTable
            title={"Top Active Users"}
            data={
              users?.map((user) => [
                makeFirstCharUpper(user.full_name, " "),
                makeMonetaryNumber(user.total_wallet_balance),
                user.status,
              ]) ?? []
            }
            keys={["Account Name", "Wallet Balance", "Account Status"]}
            spacing={"w-1/3 lg:w-1/4"}
          />
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <MyTable
            title={"Recent Transactions"}
            data={
              transactions?.map((transaction) => [
                makeFirstCharUpper(transaction.user.full_name, " "),
                makeFirstCharUpper(transaction.type),
                makeMonetaryNumber(transaction.total_amount),
                makeFirstCharUpper(transaction.status),
              ]) ?? []
            }
            keys={["Account Name", "Type", "Amount", "Transaction Status"]}
            spacing={"w-1/3 lg:w-1/5"}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
