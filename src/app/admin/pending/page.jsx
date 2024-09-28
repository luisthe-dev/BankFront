"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { makeMonetaryNumber, makeReadableDate } from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";
import EditUser from "@/components/AdminDashboard/EditUser";

const page = () => {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    setTransactionData([
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Deposit" : "Withdrawal",
        accountName: "Naced",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Deposit" : "Withdrawal",
        accountName: "Naced",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Deposit" : "Withdrawal",
        accountName: "Naced",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Deposit" : "Withdrawal",
        accountName: "Naced",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Deposit" : "Withdrawal",
        accountName: "Naced",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Deposit" : "Withdrawal",
        accountName: "Naced",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Deposit" : "Withdrawal",
        accountName: "Naced",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Deposit" : "Withdrawal",
        accountName: "Naced",
      },
    ]);
  }, []);

  return (
    <>
      <div className="my-8 flex w-full flex-col items-center justify-start">
        <MyTable
          title={"Pending Transactions"}
          data={
            transactionData?.map((transaction) => {
              return [
                transaction.accountName,
                transaction.type,
                makeMonetaryNumber(transaction.amount),
                <span
                  className={`text-md font-medium flex flex-row flex-wrap items-center justify-center gap-2`}
                >
                  <button
                    className="bg-blue-800 px-3 py-2 rounded-sm"
                    onClick={() => {}}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-blue-800 px-3 py-2 rounded-sm"
                    onClick={() => {}}
                  >
                    Decline
                  </button>
                </span>,
              ];
            }) ?? []
          }
          keys={["Account Name", "Transaction Type", "Amount", "Actions"]}
          spacing={"w-1/3 lg:w-1/6"}
        />
      </div>
    </>
  );
};

export default page;
