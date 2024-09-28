"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  makeFirstCharUpper,
  makeMonetaryNumber,
} from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";
import * as axiosHandler from "@/handlers/axiosHandler";

const page = () => {
  const [transactionData, setTransactionData] = useState([]);

  const fetchTransactionData = async () => {
    const allTransactions = await axiosHandler.getRequest("/admin/transaction");

    if (allTransactions.status === "success") {
      setTransactionData(allTransactions?.data);
    }
  };

  useEffect(() => {
    fetchTransactionData();
  }, []);

  return (
    <>
      <div className="my-8 flex w-full flex-col items-center justify-start">
        <MyTable
          title={"Transactions"}
          data={
            transactionData?.map((transaction) => {
              return [
                makeFirstCharUpper(transaction.user.full_name, " "),
                transaction.type,
                makeMonetaryNumber(transaction.total_amount),
                makeFirstCharUpper(transaction.status),
              ];
            }) ?? []
          }
          keys={[
            "Account Name",
            "Transaction Type",
            "Amount",
            "Transaction Status",
          ]}
          spacing={"w-1/3 lg:w-1/5"}
        />
      </div>
    </>
  );
};

export default page;
