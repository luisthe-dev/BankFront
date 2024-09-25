"use client";
import React, { useEffect, useState } from "react";
import { IoIosWallet } from "react-icons/io";
import { makeMonetaryNumber } from "@/handlers/helperHandler";
import { useRouter } from "next/navigation";
import MyTable from "@/components/MyTable";

const page = () => {
  const [transactionData, setTransactionData] = useState([]);

  const navigation = useRouter();

  const accountActions = [
    {
      action: "Deposit",
      onclick: () => {},
    },
    {
      action: "Withdraw",
      onclick: () => {},
    },
    {
      action: "Upgrade Plan",
      onclick: () => navigation.push("/user/plans"),
    },
  ];

  useEffect(() => {
    setTransactionData([
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        desc: "Naced",
        status: "Pending",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        desc: "Naced",
        status: "Pending",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        desc: "Naced",
        status: "Pending",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        desc: "Naced",
        status: "Pending",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        desc: "Naced",
        status: "Pending",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        desc: "Naced",
        status: "Pending",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        desc: "Naced",
        status: "Pending",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        desc: "Naced",
        status: "Pending",
      },
    ]);
  }, []);

  return (
    <div className="w-full flex flex-col gap-5 items-start justify-start p-4">
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-start gap-10 w-full p-3 lg:p-10">
        <div className="flex flex-row flex-grow items-start justify-start gap-3 shadow-md border border-green-800 p-5 rounded-md w-full lg:w-3/12">
          <div className="flex items-center justify-center self-stretch">
            <IoIosWallet size={48} />
          </div>
          <div className="flex flex-col p-4 pe-1 gap-2">
            <span className="text-2xl font-medium">
              {makeMonetaryNumber(900000000)}
            </span>
            <span className="text-md font-light"> Total Balance </span>
          </div>
        </div>
        <div className="flex flex-row flex-grow items-start justify-start gap-3 shadow-md border border-green-800 p-5 rounded-md w-full lg:w-3/12">
          <div className="flex items-center justify-center self-stretch">
            <IoIosWallet size={48} />
          </div>
          <div className="flex flex-col p-4 pe-1 gap-2">
            <span className="text-2xl font-medium">Basic</span>
            <span className="text-md font-light"> Active Plan </span>
          </div>
        </div>
        <div className="flex flex-row flex-grow items-start justify-start gap-3 shadow-md border border-green-800 p-5 rounded-md w-full lg:w-3/12">
          <div className="flex items-center justify-center self-stretch">
            <IoIosWallet size={48} />
          </div>
          <div className="flex flex-col p-4 pe-1 gap-2">
            <span className="text-2xl font-medium">
              {makeMonetaryNumber(1800000)}
            </span>
            <span className="text-md font-light"> Invested Balance </span>
          </div>
        </div>
      </div>
      <span className="text-3xl font-light pl-8"> Account Options </span>
      <div className="flex flex-row items-center justify-start pl-8 gap-5">
        {accountActions.map((action, actionKey) => (
          <button
            key={actionKey}
            onClick={action.onclick}
            className="flex flex-row gap-1 items-center justify-center text-lg font-light bg-green-800 text-white rounded-sm p-3 px-8 hover:bg-transparent border border-solid border-green-700"
          >
            {action.action}
          </button>
        ))}
      </div>

      <MyTable
        title={"Recent Transactions"}
        data={
          transactionData?.map((transaction) => {
            return [
              transaction.type,
              makeMonetaryNumber(transaction.amount),
              transaction.desc,
              transaction.status,
            ];
          }) ?? []
        }
        keys={["Transaction Type", "Amount", "Description", "Status"]}
        spacing={"w-1/6"}
      />
    </div>
  );
};

export default page;
