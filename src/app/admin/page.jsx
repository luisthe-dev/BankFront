"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import {
  makeFirstCharUpper,
  makeMonetaryNumber,
} from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";
import * as axiosHandler from "@/handlers/axiosHandler";

const page = () => {
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

  return (
    <div className="flex flex-col items-start justify-start pt-20 self-stretch w-full">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        {stats.map((stat, statKey) => (
          <div
            className="w-full lg:w-2/12 p-3 flex flex-grow flex-col gap-2 mb-8 border-b border-dotted border-blue-800"
            key={statKey}
          >
            <span className="text-2xl font-extrabold"> {stat.title} </span>
            <span className="text-5xl font-extralight">{stat.count}</span>
          </div>
        ))}
      </div>
      <div className="my-8 flex w-full flex-col lg:flex-row gap-y-12 py-12 items-start justify-start">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <MyTable
            title={"Top Active Users"}
            data={
              users?.map((user) => {
                return [
                  makeFirstCharUpper(user.full_name, " "),
                  makeMonetaryNumber(user.total_wallet_balance),
                  user.status,
                ];
              }) ?? []
            }
            keys={["Account Name", "Wallet Balance", "Account Status"]}
            spacing={"w-1/3 lg:w-1/4"}
          />
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <MyTable
            title={"Recent Transactions"}
            data={
              transactions?.map((transaction) => {
                return [
                  makeFirstCharUpper(transaction.user.full_name, " "),
                  makeFirstCharUpper(transaction.type),
                  makeMonetaryNumber(transaction.total_amount),
                  makeFirstCharUpper(transaction.status),
                ];
              }) ?? []
            }
            keys={["Account Name", "Type", "Amount", "Transaction Status"]}
            spacing={"w-1/3 lg:w-1/5"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
