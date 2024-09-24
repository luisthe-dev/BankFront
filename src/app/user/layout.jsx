"use client";

import Header from "@/components/UserDashboard/Header";
import Sidebar from "@/components/UserDashboard/Sidebar";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(true);
  const [currentPage, setCurrentPage] = useState("");

  const pathName = usePathname();
  const navigator = useRouter();

  const trackPages = async () => {
    if (currentPage != pathName) {
      setCurrentPage(pathName);
      if (window.innerWidth < 1024) setOpenMenu(false);
    }
  };

  useEffect(() => {
    trackPages();
  }, [pathName]);

  useEffect(() => {
    if (window.innerWidth > 1024) setOpenMenu(true);
  }, []);

  return (
    <div className="max-h-screen h-screen">
      <Header menuHandler={setOpenMenu} menuState={openMenu} />
      <div className="flex flex-row h-full">
        <div
          className={`flex absolute z-30 lg:relative bg-black h-full border-e transition-all ease-in-out duration-700 items-center py-6 justify-center ${
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
