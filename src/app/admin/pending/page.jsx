"use client";

import React, { useEffect, useState } from "react";
import {
  makeFirstCharUpper,
  makeMonetaryNumber,
} from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";
import * as axiosHandler from "@/handlers/axiosHandler";

const page = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactionData = async () => {
    setIsLoading(true);
    const allTransactions = await axiosHandler.getRequest(
      "/admin/transaction/status/pending_confirmation"
    );

    if (allTransactions.status === "success") {
      setTransactionData(allTransactions?.data);
    }
    setIsLoading(false);
  };

  const updateTransactionStatus = async (newStatus, transactionId) => {
    if (isLoading) return;

    setIsLoading(true);
    const allTransactions = await axiosHandler.putRequest(
      `/admin/transaction/status/${transactionId}`,
      {
        status: newStatus,
      }
    );

    if (allTransactions.status === "success") {
      fetchTransactionData();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTransactionData();
  }, []);

  return (
    <>
      <div className="my-8 flex w-full flex-col items-center justify-start">
        <MyTable
          title={"Pending Transactions"}
          data={
            transactionData?.map((transaction) => {
              return [
                makeFirstCharUpper(transaction.user.full_name, " "),
                transaction.type,
                makeMonetaryNumber(transaction.total_amount),
                <span
                  className={`text-md font-medium flex flex-row flex-wrap items-center justify-center gap-2`}
                >
                  <button
                    className={`bg-blue-800 px-3 py-2 rounded-sm ${
                      isLoading ? "opacity-40" : "opacity-100"
                    }`}
                    disabled={isLoading}
                    onClick={() =>
                      updateTransactionStatus(
                        "payment_successful",
                        transaction.id
                      )
                    }
                  >
                    Approve
                  </button>
                  <button
                    className={`bg-blue-800 px-3 py-2 rounded-sm ${
                      isLoading ? "opacity-40" : "opacity-100"
                    }`}
                    disabled={isLoading}
                    onClick={() =>
                      updateTransactionStatus("payment_failed", transaction.id)
                    }
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
