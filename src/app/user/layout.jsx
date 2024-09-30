"use client";

import Header from "@/components/UserDashboard/Header";
import Sidebar from "@/components/UserDashboard/Sidebar";
import {
  createSessionItem,
  getSessionItem,
  trashSession,
} from "@/handlers/sessionHandler";
import { usePathname, useRouter } from "next/navigation";
import * as axiosHandler from "@/handlers/axiosHandler";
import React, { useEffect, useState } from "react";

const layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(true);
  const [currentPage, setCurrentPage] = useState("");

  const pathName = usePathname();
  const navigator = useRouter();

  const verifyUser = async () => {
    const userToken = getSessionItem("userAuth");

    if (!userToken) {
      navigator.push("/signin");
      return;
    }

    const userResponse = await axiosHandler.getRequest("/user", {
      headers: {
        Authorization: `Bearer ${getSessionItem("userAuth")}`,
      },
    });

    if (
      userResponse.status == "failed" &&
      userResponse.message == "Unauthenticated"
    ) {
      trashSession();
      navigator.push("/auth/signin");
      return;
    }

    createSessionItem("userData", JSON.stringify(userResponse.data));
  };

  const trackPages = async () => {
    if (currentPage != pathName) {
      setCurrentPage(pathName);
      if (window.innerWidth < 1024) setOpenMenu(false);
    }
  };

  useEffect(() => {
    trackPages();
    verifyUser();
  }, [pathName]);

  useEffect(() => {
    if (window.innerWidth > 1024) setOpenMenu(true);
  }, []);

  return (
    <div className="max-h-screen h-screen">
      <Header menuHandler={setOpenMenu} menuState={openMenu} />
      <div className="flex flex-row h-full">
        <div
          className={`flex absolute z-20 lg:static bg-black h-full border-e transition-all ease-in-out duration-700 items-center py-6 justify-center ${
            openMenu ? "w-60" : "w-20 -left-64 lg:left-0"
          }`}
        >
          <Sidebar menuState={openMenu} />
        </div>
        <div className="flex flex-grow w-1/2 p-5 z-10 overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
