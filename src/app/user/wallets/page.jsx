"use client";
import React, { useEffect, useState } from "react";
import { IoIosWallet } from "react-icons/io";
import { makeMonetaryNumber } from "@/handlers/helperHandler";

const page = () => {
  const [transactionData, setTransactionData] = useState([]);

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
      onclick: () => {},
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
      <div className="flex flex-col lg:flex-row items-center justify-start gap-10 w-full p-3 lg:p-10">
        <div className="flex flex-row items-start justify-start gap-3 shadow-md border border-green-800 p-5 rounded-md w-full lg:w-3/12">
          <div className="flex items-center justify-center self-stretch">
            <IoIosWallet size={48} />
          </div>
          <div className="flex flex-col p-4 pe-1 gap-2">
            <span className="text-4xl font-medium">
              {makeMonetaryNumber(900000000)}
            </span>
            <span className="text-md font-light"> Total Balance </span>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-3 shadow-md border border-green-800 p-5 rounded-md w-full lg:w-3/12">
          <div className="flex items-center justify-center self-stretch">
            <IoIosWallet size={48} />
          </div>
          <div className="flex flex-col p-4 pe-1 gap-2">
            <span className="text-4xl font-medium">Basic</span>
            <span className="text-md font-light"> Active Plan </span>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-3 shadow-md border border-green-800 p-5 rounded-md w-full lg:w-3/12">
          <div className="flex items-center justify-center self-stretch">
            <IoIosWallet size={48} />
          </div>
          <div className="flex flex-col p-4 pe-1 gap-2">
            <span className="text-4xl font-medium">
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
      <div className="flex flex-col items-start justify-start p-1 lg:p-5 w-full">
        <span className="px-1 text-2xl font-semibold">Recent Transactions</span>
        <div className="w-full">
          <div className="flex flex-row items-start justify-start w-full p-8 border-b pb-2 pr-2">
            <span className="w-1/12 text-md font-bold"> S/N </span>
            <span className="w-3/12 text-md font-bold"> Transaction Type </span>
            <span className="w-3/12 text-md font-bold"> Amount </span>
            <span className="w-3/12 text-md font-bold"> Description </span>
            <span className="w-2/12 text-md font-bold">Status</span>
          </div>
          {transactionData?.map((transaction, transactionKey) => (
            <div
              className="flex flex-row items-start justify-start w-full border-b py-5 px-8 pr-2"
              key={transactionKey}
            >
              <span className="w-1/12 text-md font-medium">
                {transactionKey + 1}
              </span>
              <span className="w-3/12 text-md font-medium">
                {transaction.type}
              </span>
              <span className="w-3/12 text-md font-medium">
                {makeMonetaryNumber(transaction.amount)}
              </span>
              <span className="w-3/12 text-md font-medium">
                {transaction.desc}
              </span>
              <span className="w-2/12 text-md font-medium">
                {transaction.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
