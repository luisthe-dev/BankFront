"use client";
import React, { useEffect, useState } from "react";
import { IoIosWallet } from "react-icons/io";
import { makeMonetaryNumber } from "@/handlers/helperHandler";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import Deposit from "@/components/UserDashboard/Deposit";
import * as axiosHandler from "@/handlers/axiosHandler";
import { getSessionItem } from "@/handlers/sessionHandler";
import Withdraw from "@/components/UserDashboard/Withdraw";

const page = () => {
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [plans, setPlans] = useState([]);

  const fetchPlanData = async () => {
    const allPlans = await axiosHandler.getRequest("/plans");

    if (allPlans.status === "success") {
      setPlans(
        allPlans?.data?.map((plan) => {
          return {
            title: plan.name,
            price: `${makeMonetaryNumber(
              plan.min_price
            )} - ${makeMonetaryNumber(plan.max_price)}`,
            items: plan.items,
          };
        })
      );
    }
  };

  const accountActions = [
    {
      action: "Deposit",
      onclick: () => setDeposit(true),
    },
    {
      action: "Withdraw",
      onclick: () => setWithdraw(true),
    },
  ];

  const fetchSettingData = async () => {
    const allPlans = await axiosHandler.getRequest("/settings");

    if (allPlans.status === "success") {
      setPaymentMethods(allPlans.data);
    }
  };

  const submitAction = async (submitData) => {
    setIsLoading(true);
    const allPlans = await axiosHandler.postRequest(
      "/transaction",
      submitData,
      {
        headers: {
          Authorization: `Bearer ${getSessionItem("userAuth")}`,
        },
      }
    );

    if (allPlans.status === "success") {
      window.alert(
        "Transaction Successful. You will be notified once verification is completed"
      );
      window.location.reload();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlanData();
    fetchSettingData();
    setUserData(JSON.parse(getSessionItem("userData")));
  }, []);

  return (
    <>
      {deposit && (
        <Deposit
          setDeposit={setDeposit}
          isLoading={isLoading}
          paymentMethods={paymentMethods}
          submitAction={submitAction}
        />
      )}
      {withdraw && (
        <Withdraw
          setWithdraw={setWithdraw}
          isLoading={isLoading}
          paymentMethods={paymentMethods}
          submitAction={submitAction}
        />
      )}
      <div className="w-full flex flex-col gap-5 items-start justify-start lg:p-4">
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-start gap-10 w-full p-3 lg:p-10">
          <div className="flex flex-row flex-grow items-start justify-start gap-3 shadow-md border border-blue-800 p-5 rounded-md w-full lg:w-3/12">
            <div className="flex items-center justify-center self-stretch">
              <IoIosWallet size={48} />
            </div>
            <div className="flex flex-col p-4 pe-1 gap-2">
              <span className="text-2xl font-medium">
                {makeMonetaryNumber(userData.total_wallet_balance ?? 0)}
              </span>
              <span className="text-md font-light"> Total Balance </span>
            </div>
          </div>
          <div className="flex flex-row flex-grow items-start justify-start gap-3 shadow-md border border-blue-800 p-5 rounded-md w-full lg:w-3/12">
            <div className="flex items-center justify-center self-stretch">
              <IoIosWallet size={48} />
            </div>
            <div className="flex flex-col p-4 pe-1 gap-2">
              <span className="text-2xl font-medium">None</span>
              <span className="text-md font-light"> Active Plan </span>
            </div>
          </div>
          <div className="flex flex-row flex-grow items-start justify-start gap-3 shadow-md border border-blue-800 p-5 rounded-md w-full lg:w-3/12">
            <div className="flex items-center justify-center self-stretch">
              <IoIosWallet size={48} />
            </div>
            <div className="flex flex-col p-4 pe-1 gap-2">
              <span className="text-2xl font-medium">
                {makeMonetaryNumber(0)}
              </span>
              <span className="text-md font-light"> Invested Balance </span>
            </div>
          </div>
        </div>
        <span className="text-3xl font-light lg:pl-8"> Account Options </span>
        <div className="flex flex-row items-center justify-start lg:pl-8 gap-5">
          {accountActions.map((action, actionKey) => (
            <button
              key={actionKey}
              onClick={action.onclick}
              className="flex flex-row gap-1 items-center justify-center text-lg font-light bg-blue-800 text-white rounded-sm p-3 px-8 hover:bg-transparent border border-solid border-blue-700"
            >
              {action.action}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center justify-start w-full">
          <span className="text-4xl font-semibold my-3"> Available Plans </span>
          <div className="flex flex-row flex-wrap items-center justify-start p-1 lg:p-4 w-full">
            {plans.map((plan, planKey) => (
              <div
                className="flex flex-col items-center justify-center p-2 w-full lg:w-1/4 self-stretch justify-self-stretch"
                key={planKey}
              >
                <div className="border flex flex-col items-start justify-center border-blue-800 border-solid rounded-md p-12 px-6 justify-self-stretch self-stretch">
                  <span className="text-4xl font-extralight">{plan.title}</span>
                  <span className="text-lg font-semibold my-5">
                    {plan.price}
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
                  <button
                    onClick={() => setDeposit(true)}
                    className="p-4 flex flex-row w-full items-center justify-between gap-2 font-semibold text-sm px-3 my-5 bg-transparent hover:bg-blue-700 border border-blue-900 border-solid rounded-md"
                  >
                    Choose Plan <FaArrowRightLong />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
