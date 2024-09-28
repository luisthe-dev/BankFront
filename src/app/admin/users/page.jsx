"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { makeMonetaryNumber, makeReadableDate } from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";
import EditUser from "@/components/AdminDashboard/EditUser";

const page = () => {
  const [users, setUsers] = useState([
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
    {
      name: "Check Nado",
      balance: 90000,
      status: "Blocked",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      {selectedUser && (
        <EditUser user={selectedUser} setUser={setSelectedUser} />
      )}
      <div className="my-8 flex w-full flex-col items-center justify-start">
        <MyTable
          title={"All Users"}
          data={
            users?.map((user) => {
              return [
                user.name,
                makeMonetaryNumber(user.balance),
                user.status,
                <span
                  className={`text-md font-medium flex flex-row flex-wrap items-center justify-center gap-2`}
                >
                  <button
                    className="bg-blue-800 px-3 py-2 rounded-sm"
                    onClick={() => setSelectedUser(user)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-blue-800 px-3 py-2 rounded-sm"
                    onClick={() => {}}
                  >
                    Block
                  </button>
                </span>,
              ];
            }) ?? []
          }
          keys={["Account Name", "Wallet Balance", "Account Status", "Actions"]}
          spacing={"w-1/3 lg:w-1/5"}
        />
      </div>
    </>
  );
};

export default page;
