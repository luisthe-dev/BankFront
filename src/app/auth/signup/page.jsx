import Link from "next/link";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14 w-full">
      <span className="text-3xl font-semibold my-8"> Create Account </span>
      <form
        role="form"
        className="flex flex-col gap-8 w-5/12 items-center justify-center"
      >
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full border-b border-green-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full border-b border-green-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full border-b border-green-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <select
          type="email"
          placeholder="Select your country"
          className="w-full border-b border-green-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        >
          <option> UK </option>
          <option> USA </option>
          <option> Canada </option>
          <option> Europe </option>
        </select>
        <input
          type="password"
          placeholder="Enter Your Password"
          className="w-full border-b border-green-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Your Password"
          className="w-full border-b border-green-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />

        <button className="p-4 flex flex-row w-full items-center justify-between gap-2 font-semibold text-md px-10 bg-transparent hover:bg-green-700 border border-green-900 border-solid">
          Create Account
          <RxArrowTopRight size={20} />
        </button>
        <span className="font-light text-sm">
          Already Have An Account ?{" "}
          <Link href={"/auth/signup"} className="border-b border-solid pb-1">
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
};

export default page;
