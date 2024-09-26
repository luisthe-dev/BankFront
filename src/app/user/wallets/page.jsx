"use client";
import React, { useEffect, useState } from "react";
import { IoIosWallet } from "react-icons/io";
import { makeMonetaryNumber } from "@/handlers/helperHandler";
import { useRouter } from "next/navigation";
import MyTable from "@/components/MyTable";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";

const page = () => {
  const [transactionData, setTransactionData] = useState([]);

  const plans = [
    {
      title: "Regular Plan",
      price: "$500 - $999",
      items: [
        "ROI - 5%",
        "Referral Bonus - 3%",
        "Withdrawal - Instant",
        "Customer Support - 24/7",
      ],
    },
    {
      title: "Standard Plan",
      price: "$1,000 - $4,999",
      items: [
        "ROI - 10%",
        "Referral Bonus - 3%",
        "Withdrawal - Instant",
        "Customer Support - 24/7",
      ],
    },
    {
      title: "Premium Plan",
      price: "$5,000 - $9,999",
      items: [
        "ROI - 15%",
        "Referral Bonus - 3%",
        "Withdrawal - Instant",
        "Customer Support - 24/7",
      ],
    },
    {
      title: "Silver Plan",
      price: "$10,000 - $49,999",
      items: [
        "ROI - 20%",
        "Referral Bonus - 3%",
        "Withdrawal - Instant",
        "Customer Support - 24/7",
      ],
    },
    {
      title: "Gold Plan",
      price: "$50,000 - Unlimited",
      items: [
        "ROI - 25%",
        "Referral Bonus - 3%",
        "Withdrawal - Instant",
        "Customer Support - 24/7",
      ],
    },
  ];

  const accountActions = [
    {
      action: "Deposit",
      onclick: () => {},
    },
    {
      action: "Withdraw",
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

      <div className="flex flex-col items-center justify-start w-full">
        <span className="text-4xl font-semibold my-3"> Available Plans </span>
        <div className="flex flex-row flex-wrap items-center justify-start p-4 w-full">
          {plans.map((plan, planKey) => (
            <div
              className="flex flex-col items-center justify-center p-4 w-full lg:w-1/4 self-stretch justify-self-stretch"
              key={planKey}
            >
              <div className="border flex flex-col items-start justify-center border-green-800 border-solid rounded-md p-12 px-6 justify-self-stretch self-stretch">
                <span className="text-4xl font-extralight">{plan.title}</span>
                <span className="text-lg font-semibold my-5">
                  {" "}
                  {plan.price}{" "}
                </span>
                {plan.items &&
                  plan?.items?.map((items, itemsKey) => (
                    <span
                      key={itemsKey}
                      className="flex flex-row items-center justify-start gap-1 text-sm font-extralight my-1 w-full"
                    >
                      <FaCheck /> {items}
                    </span>
                  ))}
                <button className="p-4 flex flex-row w-full items-center justify-between gap-2 font-semibold text-sm px-3 my-5 bg-transparent hover:bg-green-700 border border-green-900 border-solid rounded-md">
                  Choose Plan <FaArrowRightLong />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
