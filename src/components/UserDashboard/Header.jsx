import React from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

const Header = ({ menuHandler, menuState }) => {
  return (
    <div className="w-full flex items-center justify-between p-6 pr-12 border-b">
      <div className="flex flex-row items-center justify-start gap-2">
        <RiMenu5Fill size={24} onClick={() => menuHandler(!menuState)} />
        <Image src={Logo} alt={"Log"} width={200} />
      </div>
      <FiUser size={24} />
    </div>
  );
};

export default Header;
