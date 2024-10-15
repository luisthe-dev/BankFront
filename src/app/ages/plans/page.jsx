"use client";

import React, { useEffect, useState } from "react";
import { makeMonetaryNumber } from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";
import EditPlan from "@/components/AdminDashboard/EditPlan";
import * as axiosHandler from "@/handlers/axiosHandler";

const page = () => {
  const [planData, setPlanData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const fetchPlanData = async () => {
    setIsLoading(true);

    const allPlans = await axiosHandler.getRequest("/plans");

    if (allPlans.status === "success") {
      setPlanData(allPlans.data);
    }
    setIsLoading(false);
  };

  const submitForm = async (planData) => {
    if (isLoading) return;

    setIsLoading(true);

    const touchPlan = planData.create
      ? await axiosHandler.postRequest("/plans", planData)
      : await axiosHandler.putRequest(`/plans/${planData.id}`, planData);

    if (touchPlan.status === "success") {
      fetchPlanData();
      setSelectedPlan(null);
    }
    setIsLoading(false);
  };

  const deletePlan = async (planId) => {
    if (isLoading) return;

    setIsLoading(true);
    const deletePlan = await axiosHandler.deleteRequest(`/plans/${planId}`);

    if (deletePlan.status === "success") {
      fetchPlanData();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlanData();
  }, []);

  return (
    <>
      {selectedPlan && (
        <EditPlan
          plan={selectedPlan}
          setPlan={setSelectedPlan}
          submitAction={submitForm}
        />
      )}
      <div className="my-8 flex w-full flex-col items-center justify-start">
        <MyTable
          title={"Investment Plans"}
          actionButton={
            <button
              className={`bg-red-800 px-6 py-3 my-5 rounded-sm ${
                isLoading ? "opacity-40" : "opacity-100"
              }`}
              disabled={isLoading}
              onClick={() => {
                setSelectedPlan({
                  name: "",
                  minPrice: null,
                  maxPrice: null,
                  items: [],
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
                makeMonetaryNumber(plan.min_price),
                makeMonetaryNumber(plan.max_price),
                plan?.items?.map(
                  (item, itemKey) =>
                    `${item}${itemKey + 1 != plan?.items.length ? ", " : ""}`
                ),
                <span
                  className={`text-md font-medium flex flex-row flex-wrap items-center justify-center gap-2`}
                >
                  <button
                    className={`bg-red-800 px-3 py-2 rounded-sm ${
                      isLoading ? "opacity-40" : "opacity-100"
                    }`}
                    disabled={isLoading}
                    onClick={() => setSelectedPlan(plan)}
                  >
                    Update
                  </button>
                  <button
                    className={`bg-red-800 px-3 py-2 rounded-sm ${
                      isLoading ? "opacity-40" : "opacity-100"
                    }`}
                    disabled={isLoading}
                    onClick={() => deletePlan(plan.id)}
                  >
                    Delete
                  </button>
                </span>,
              ];
            }) ?? []
          }
          keys={["Plan Name", "Minimum Deposit", "Maximum Deposit", "Features"]}
          spacing={"w-1/3 lg:w-1/6"}
        />
      </div>
    </>
  );
};

export default page;
