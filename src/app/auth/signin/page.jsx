"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const page = () => {
  const navigation = useRouter();

  return (
    <div className="flex flex-col items-center justify-center py-14 w-full">
      <span className="text-3xl font-semibold my-8"> Welcome Back </span>
      <form
        role="form"
        className="flex flex-col gap-8 w-10/12 lg:w-5/12 items-center justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          navigation.push("/user");
        }}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full border-b border-green-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <input
          placeholder="Password"
          className="w-full border-b border-green-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <div className="flex w-full items-center justify-between p-3 py-5">
          <span> Remember Me </span>
          <Link href={"/"}> Forgot Password </Link>
        </div>
        <button
          type="submit"
          className="p-4 flex flex-row w-full items-center justify-between gap-2 font-semibold text-md px-10 bg-transparent hover:bg-green-700 border border-green-900 border-solid"
        >
          Sign In
          <RxArrowTopRight size={20} />
        </button>
        <span className="font-light text-sm">
          Don't Have An Account ?{" "}
          <Link href={"/auth/signup"} className="border-b border-solid pb-1">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default page;
