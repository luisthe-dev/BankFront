"use client";

import Link from "next/link";
import React from "react";
import Logo from "@/assets/images/logo.png";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SiteHeader = () => {
  const router = useRouter();

  return (
    <>
      <nav className="flex justify-between flex-row items-center w-full p-12">
        <div className="flex justify-center items-start w-6/12 lg:w-1/12">
          <Image src={Logo} alt={"Logo"} onClick={() => router.push("/")} />
        </div>
        <div className="flex flex-row justify-end items-center gap-8 flex-grow">
          <Link
            href={"/"}
            className="font-light text-md hidden lg:flex hover:text-red-400"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="font-light text-md hidden lg:flex hover:text-red-400"
          >
            Pricing
          </Link>
          <Link
            href={"/"}
            className="font-light text-md hidden lg:flex hover:text-red-400"
          >
            Copy Trading
          </Link>
          <Link
            href={"/auth/signin"}
            className="font-light text-md hidden lg:flex hover:text-red-400"
          >
            Log in
          </Link>
          <Link
            href={"/auth/signup"}
            className="font-light text-md flex flex-row border-b pb-3 border-red-600 items-center justify-end gap-2"
          >
            Get Started <RxArrowTopRight size={20} />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default SiteHeader;
