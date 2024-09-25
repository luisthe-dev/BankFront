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
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        accountName: "Naced",
        status:
          Math.random() < 0.5
            ? "Pending"
            : Math.random() < 0.5
            ? "Failed"
            : "Success",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        accountName: "Naced",
        status:
          Math.random() < 0.5
            ? "Pending"
            : Math.random() < 0.5
            ? "Failed"
            : "Success",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        accountName: "Naced",
        status:
          Math.random() < 0.5
            ? "Pending"
            : Math.random() < 0.5
            ? "Failed"
            : "Success",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        accountName: "Naced",
        status:
          Math.random() < 0.5
            ? "Pending"
            : Math.random() < 0.5
            ? "Failed"
            : "Success",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        accountName: "Naced",
        status:
          Math.random() < 0.5
            ? "Pending"
            : Math.random() < 0.5
            ? "Failed"
            : "Success",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        accountName: "Naced",
        status:
          Math.random() < 0.5
            ? "Pending"
            : Math.random() < 0.5
            ? "Failed"
            : "Success",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        accountName: "Naced",
        status:
          Math.random() < 0.5
            ? "Pending"
            : Math.random() < 0.5
            ? "Failed"
            : "Success",
      },
      {
        amount: (Math.random() * 1000).toFixed(2),
        type: Math.random() < 0.5 ? "Credit" : "Debit",
        accountName: "Naced",
        status:
          Math.random() < 0.5
            ? "Pending"
            : Math.random() < 0.5
            ? "Failed"
            : "Success",
      },
    ]);
  }, []);

  return (
    <>
      <div className="my-8 flex w-full flex-col items-center justify-start">
        <MyTable
          title={"Transactions"}
          data={
            transactionData?.map((transaction) => {
              return [
                transaction.accountName,
                transaction.type,
                makeMonetaryNumber(transaction.amount),
                transaction.status,
              ];
            }) ?? []
          }
          keys={[
            "Account Name",
            "Transaction Type",
            "Amount",
            "Transaction Status",
          ]}
          spacing={"w-1/5"}
        />
      </div>
    </>
  );
};

export default page;
