import Link from "next/link";
import React from "react";
import { LuLayoutDashboard, LuHistory, LuUser } from "react-icons/lu";
import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlinePause } from "react-icons/ai";
import { CiCircleList } from "react-icons/ci";

const Sidebar = ({ menuState }) => {
  const menuItems = [
    {
      icon: <LuLayoutDashboard />,
      title: "Home",
      link: "/admin",
    },
    {
      icon: <LuUser />,
      title: "Users",
      link: "/admin/users",
    },
    {
      icon: <LuHistory />,
      title: "User Transaction",
      link: "/admin/transactions",
    },
    {
      icon: <AiOutlinePause />,
      title: "Pending Transaction",
      link: "/admin/pending",
    },
    {
      icon: <CiCircleList />,
      title: "Investment Plans",
      link: "/admin/plans",
    },
    {
      icon: <RiSettings3Fill />,
      title: "Settings",
      link: "/admin/settings",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-5 items-start justify-start">
      {menuItems.map((menuItem, menuKey) => (
        <Link
          href={menuItem.link}
          key={menuKey}
          className={`flex flex-row items-center ${
            menuState ? "justify-start pl-5" : "justify-center pl-0"
          } gap-2 border-b my-1 pt-5 pb-6 w-full relative transition-all ease-in-out duration-900`}
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
