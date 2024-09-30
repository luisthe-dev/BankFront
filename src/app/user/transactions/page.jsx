"use client";

import React, { useEffect, useState } from "react";
import {
  makeFirstCharUpper,
  makeMonetaryNumber,
} from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";
import * as axiosHandler from "@/handlers/axiosHandler";
import { getSessionItem } from "@/handlers/sessionHandler";

const page = () => {
  const [transactionData, setTransactionData] = useState([]);

  const fetchPlanData = async () => {
    const allPlans = await axiosHandler.getRequest("/user/history", {
      headers: {
        Authorization: `Bearer ${getSessionItem("userAuth")}`,
      },
    });

    if (allPlans.status === "success") {
      setTransactionData(allPlans.data);
    }
  };

  useEffect(() => {
    fetchPlanData();
  }, []);

  return (
    <>
      <div className="my-8 flex w-full flex-col items-center justify-start">
        <MyTable
          title={"Transactions"}
          data={
            transactionData?.map((transaction) => {
              console.log(transaction);
              return [
                makeFirstCharUpper(transaction.user.full_name, " "),
                makeFirstCharUpper(transaction.type),
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
