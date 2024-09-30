import Link from "next/link";
import React, { useState } from "react";
import { LuLayoutDashboard, LuHistory, LuUser } from "react-icons/lu";
import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlinePause } from "react-icons/ai";
import { CiCircleList } from "react-icons/ci";

const Sidebar = ({ menuState }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = [
    {
      icon: <LuLayoutDashboard />,
      title: "Home",
      link: "/ads",
    },
    {
      icon: <LuUser />,
      title: "Users",
      link: "/ads/users",
    },
    {
      icon: <LuHistory />,
      title: "User Transaction",
      link: "/ads/transactions",
    },
    {
      icon: <AiOutlinePause />,
      title: "Pending Transaction",
      link: "/ads/pending",
    },
    {
      icon: <CiCircleList />,
      title: "Investment Plans",
      link: "/ads/plans",
    },
    {
      icon: <RiSettings3Fill />,
      title: "Settings",
      link: "/ads/settings",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-5 items-start justify-start">
      {menuItems.map((menuItem, menuKey) => (
        <Link
          href={menuItem.link}
          key={menuKey}
          onClick={() => setActiveIndex(menuKey)} // Set active index on click
          className={`flex flex-row items-center ${
            menuState ? "justify-start pl-5" : "justify-center pl-0"
          } gap-2 my-1 pt-5 pb-6 w-full relative transition-all ease-in-out duration-900 ${
            activeIndex === menuKey ? "bg-blue-600" : "bg-transparent"
          } text-white`} // Set text color to white always
        >
          <span className="text-2xl">{menuItem.icon}</span>
          <span
            className={`text-sm text-nowrap transition-all ease-in-out duration-200 ${
              menuState
                ? "translate-x-0 relative opacity-100 visible"
                : "translate-x-full absolute opacity-0 invisible"
            }`}
          >
            {menuItem.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
