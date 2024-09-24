"use client";
import React, { useEffect, useState } from "react";
import { CgShare } from "react-icons/cg";
import { PiBarcodeLight, PiUsersFour } from "react-icons/pi";

import * as axiosHandler from "@/handlers/axiosHandler";
import { createSessionItem, getSessionItem } from "@/handlers/sessionHandler";
import { IoIosWallet } from "react-icons/io";
import { makeMonetaryNumber } from "@/handlers/helperHandler";

const page = () => {
  const [referralData, setReferralData] = useState([
    {
      first_name: "Check",
      last_name: "Naced",
      status: "Pending",
    },
    {
      first_name: "Check",
      last_name: "Naced",
      status: "Pending",
    },
    {
      first_name: "Check",
      last_name: "Naced",
      status: "Pending",
    },
    {
      first_name: "Check",
      last_name: "Naced",
      status: "Pending",
    },
    {
      first_name: "Check",
      last_name: "Naced",
      status: "Pending",
    },
    {
      first_name: "Check",
      last_name: "Naced",
      status: "Pending",
    },
    {
      first_name: "Check",
      last_name: "Naced",
      status: "Pending",
    },
    {
      first_name: "Check",
      last_name: "Naced",
      status: "Pending",
    },
  ]);

  return (
    <div className="w-full flex flex-col gap-5 items-start justify-start p-4">
      <div className="flex flex-col lg:flex-row items-center justify-start gap-10 w-full p-3 lg:p-10">
        <div className="flex flex-row items-start justify-start gap-3 shadow-md border p-5 rounded-md w-full lg:w-3/12">
          <div className="flex items-center justify-center self-stretch">
            <PiUsersFour size={48} />
          </div>
          <div className="flex flex-col p-4 pe-1 gap-2">
            <span className="text-4xl font-medium">
              {referralData?.referred?.length ?? 0}
            </span>
            <span className="text-md font-light"> Referred Users </span>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-3 relative z-0 shadow-md border p-5 rounded-md w-full lg:w-3/12">
          <div className="absolute right-3 top-3 cursor-pointer">
            <CgShare size={22} />
          </div>
          <div className="flex items-center justify-center self-stretch">
            <PiBarcodeLight size={48} />
          </div>
          <div className="flex flex-col p-4 pe-1 gap-2">
            <span className="text-4xl font-medium">
              {referralData.referral_code}
            </span>
            <span className="text-md font-light"> Referral Code </span>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-3 shadow-md border p-5 rounded-md w-full lg:w-3/12">
          <div className="flex items-center justify-center self-stretch">
            <IoIosWallet size={48} />
          </div>
          <div className="flex flex-col p-4 pe-1 gap-2">
            <span className="text-4xl font-medium">
              {makeMonetaryNumber(referralData.ref_earnings)}
            </span>
            <span className="text-md font-light"> Referral Wallet </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start p-1 lg:p-5 w-full">
        <span className="px-1 text-2xl font-semibold"> My Referrals </span>
        <div className="w-full">
          <div className="flex flex-row items-start justify-start w-full p-8 border-b pb-2 pr-2">
            <span className="w-1/6 text-md font-bold"> S/N </span>
            <span className="w-3/6 text-md font-bold"> Account Name </span>
            <span className="w-2/6 text-md font-bold"> Account Status </span>
          </div>
          {referralData?.referred &&
            referralData?.referred?.map((referral, referralKey) => (
              <div
                className="flex flex-row items-start justify-start w-full border-b p-3 px-8 pr-2"
                key={referralKey}
              >
                <span className="w-1/6 text-md font-medium">
                  {referralKey + 1}
                </span>
                <span className="w-3/6 text-md font-medium">
                  {`${referral.first_name} ${referral.last_name}`}
                </span>
                <span className="w-2/6 text-md font-medium">
                  {referral.status}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default page;
