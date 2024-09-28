"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { makeMonetaryNumber, makeReadableDate } from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";

const page = () => {
  const [stats, setStats] = useState([
    {
      title: "Total Users",
      count: 9000,
    },
    {
      title: "Total Transactions",
      count: 250,
    },
    {
      title: "Total Wallet Balance",
      count: makeMonetaryNumber(90000),
    },
  ]);

  const [users, setUsers] = useState([
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
  ]);

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
      <div className="my-8 flex w-full flex-col lg:flex-row gap-y-12 py-12 items-center justify-start">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <MyTable
            title={"Top Active Users"}
            data={
              users?.map((user) => {
                return [
                  user.name,
                  makeMonetaryNumber(user.balance),
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
              users?.map((user) => {
                return [
                  user.name,
                  makeMonetaryNumber(user.balance),
                  user.status,
                ];
              }) ?? []
            }
            keys={["Account Name", "Amount", "Transaction Status"]}
            spacing={"w-1/3 lg:w-1/4"}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
