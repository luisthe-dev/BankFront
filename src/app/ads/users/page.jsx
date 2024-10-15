"use client";

import React, { useEffect, useState } from "react";
import {
  makeFirstCharUpper,
  makeMonetaryNumber,
} from "@/handlers/helperHandler";
import MyTable from "@/components/MyTable";
import EditUser from "@/components/AdminDashboard/EditUser";
import * as axiosHandler from "@/handlers/axiosHandler";

const page = () => {
  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUserData = async () => {
    const allUsers = await axiosHandler.getRequest("/admin/user");

    if (allUsers.status === "success") {
      setUsers(allUsers?.data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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
                makeFirstCharUpper(user.full_name, " "),
                makeMonetaryNumber(user.total_wallet_balance),
                user.status,
                <span
                  className={`text-md font-medium flex flex-row flex-wrap items-center justify-center gap-2`}
                >
                  <button
                    className="bg-red-800 px-3 py-2 rounded-sm"
                    onClick={() => setSelectedUser(user)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-800 px-3 py-2 rounded-sm"
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
