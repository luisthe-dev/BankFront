"use client";
import React, { useEffect, useState } from "react";
import { CgShare } from "react-icons/cg";
import { PiBarcodeLight, PiUsersFour } from "react-icons/pi";

import * as axiosHandler from "@/handlers/axiosHandler";
import { createSessionItem, getSessionItem } from "@/handlers/sessionHandler";
import { IoIosWallet } from "react-icons/io";
import { makeMonetaryNumber } from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";

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
      <MyTable
        title={"My Referrals"}
        data={
          referralData?.map((referral) => {
            return [
              `${referral.first_name} ${referral.last_name}`,
              referral.status,
            ];
          }) ?? []
        }
        keys={["Account Name", "Account Status"]}
        spacing={"w-1/3"}
      />
    </div>
  );
};

export default page;
