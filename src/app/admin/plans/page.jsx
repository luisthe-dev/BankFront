"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { makeMonetaryNumber, makeReadableDate } from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";
import EditUser from "@/components/AdminDashboard/EditUser";
import EditPlan from "@/components/AdminDashboard/EditPlan";

const page = () => {
  const [planData, setPlanData] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    setPlanData([
      {
        name: "Gold",
        minPrice: 9000,
        maxPrice: 289000,
        listItems: [
          "ROI - 15%",
          "Referral Bonus - 3%",
          "Withdrawal - Instant",
          "Customer Support - 24/7",
        ],
        create: false,
      },
    ]);
  }, []);

  return (
    <>
      {selectedPlan && (
        <EditPlan plan={selectedPlan} setPlan={setSelectedPlan} />
      )}
      <div className="my-8 flex w-full flex-col items-center justify-start">
        <MyTable
          title={"Investment Plans"}
          actionButton={
            <button
              className="bg-green-800 px-6 py-3 my-5 rounded-sm"
              onClick={() => {
                setSelectedPlan({
                  name: "",
                  minPrice: null,
                  maxPrice: null,
                  listItems: [],
                  create: true,
                });
              }}
            >
              Create Plan
            </button>
          }
          data={
            planData?.map((plan) => {
              return [
                plan.name,
                makeMonetaryNumber(plan.minPrice),
                makeMonetaryNumber(plan.maxPrice),
                plan.listItems.map(
                  (item, itemKey) =>
                    `${item}${itemKey + 1 != plan.listItems.length ? ", " : ""}`
                ),
                <span
                  className={`text-md font-medium flex flex-row flex-wrap items-center justify-center gap-2`}
                >
                  <button
                    className="bg-green-800 px-3 py-2 rounded-sm"
                    onClick={() => setSelectedPlan(plan)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-green-800 px-3 py-2 rounded-sm"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
                </span>,
              ];
            }) ?? []
          }
          keys={["Plan Name", "Minimum Deposit", "Maximum Deposit", "Features"]}
          spacing={"w-1/6"}
        />
      </div>
    </>
  );
};

export default page;
