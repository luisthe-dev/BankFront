"use client";

import React, { useEffect, useState } from "react";
import { makeMonetaryNumber } from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";
import EditPlan from "@/components/AdminDashboard/EditPlan";
import * as axiosHandler from "@/handlers/axiosHandler";
import EditSetting from "@/components/AdminDashboard/EditSetting";

const page = () => {
  const [settingsData, setSettingsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState(null);

  const fetchSettingData = async () => {
    setIsLoading(true);

    const allPlans = await axiosHandler.getRequest("/settings");

    if (allPlans.status === "success") {
      setSettingsData(allPlans.data);
    }
    setIsLoading(false);
  };

  const submitForm = async (settingData) => {
    if (isLoading) return;

    setIsLoading(true);

    const touchPlan = settingData.create
      ? await axiosHandler.postRequest("/settings", settingData)
      : await axiosHandler.putRequest(
          `/settings/${settingData.id}`,
          settingData
        );

    if (touchPlan.status === "success") {
      fetchSettingData();
      setSelectedSetting(null);
    }
    setIsLoading(false);
  };

  const deleteSetting = async (planId) => {
    if (isLoading) return;

    setIsLoading(true);
    const deleteSettingRes = await axiosHandler.deleteRequest(
      `/settings/${planId}`
    );

    if (deleteSettingRes.status === "success") {
      fetchSettingData();
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSettingData();
  }, []);

  return (
    <>
      {selectedSetting && (
        <EditSetting
          setting={selectedSetting}
          setSetting={setSelectedSetting}
          submitAction={submitForm}
        />
      )}
      <div className="my-8 flex w-full flex-col items-center justify-start">
        <MyTable
          title={"Deposit Settings"}
          actionButton={
            <button
              className={`bg-blue-800 px-6 py-3 my-5 rounded-sm ${
                isLoading ? "opacity-40" : "opacity-100"
              }`}
              disabled={isLoading}
              onClick={() => {
                setSelectedSetting({
                  name: "",
                  value: "",
                  create: true,
                });
              }}
            >
              Create Setting
            </button>
          }
          data={
            settingsData?.map((setting) => {
              return [
                setting.name,
                setting.value,
                <span
                  className={`text-md font-medium flex flex-row flex-wrap items-center justify-center gap-2`}
                >
                  <button
                    className={`bg-blue-800 px-3 py-2 rounded-sm ${
                      isLoading ? "opacity-40" : "opacity-100"
                    }`}
                    disabled={isLoading}
                    onClick={() => setSelectedSetting(setting)}
                  >
                    Update
                  </button>
                  <button
                    className={`bg-blue-800 px-3 py-2 rounded-sm ${
                      isLoading ? "opacity-40" : "opacity-100"
                    }`}
                    disabled={isLoading}
                    onClick={() => deleteSetting(setting.id)}
                  >
                    Delete
                  </button>
                </span>,
              ];
            }) ?? []
          }
          keys={["Deposit Name", "Deposit Value"]}
          spacing={"w-1/3 lg:w-1/4"}
        />
      </div>
    </>
  );
};

export default page;
