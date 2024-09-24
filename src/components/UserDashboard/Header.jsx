import React from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

const Header = ({ menuHandler, menuState }) => {
  return (
    <div className="w-full flex items-center justify-between p-6 pr-12 border-b">
      <RiMenu5Fill size={24} onClick={() => menuHandler(!menuState)} />
      <FiUser size={24} />
    </div>
  );
};

export default Header;
