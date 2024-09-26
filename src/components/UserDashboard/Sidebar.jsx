import Link from "next/link";
import React from "react";
import { LuLayoutDashboard, LuHistory } from "react-icons/lu";
import { RiSettings3Fill } from "react-icons/ri";
import { IoIosWallet } from "react-icons/io";
import { PiUsersFour } from "react-icons/pi";

const Sidebar = ({ menuState }) => {
  const menuItems = [
    {
      icon: <LuLayoutDashboard />,
      title: "Home",
      link: "/user",
    },
    {
      icon: <LuHistory />,
      title: "Transaction History",
      link: "/user/transactions",
    },
    {
      icon: <IoIosWallet />,
      title: "My Wallets & Plan",
      link: "/user/wallets",
    },
    {
      icon: <PiUsersFour />,
      title: "My Referrals",
      link: "/user/referrals",
    },
    {
      icon: <RiSettings3Fill />,
      title: "Settings",
      link: "/user/settings",
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
