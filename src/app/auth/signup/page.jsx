"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import * as axiosHandler from "@/handlers/axiosHandler";
import { createLocalItem } from "@/handlers/localHandler";
import { createSessionItem } from "@/handlers/sessionHandler";
import { useRouter } from "next/navigation";

const page = () => {
  const [userData, setUserData] = useState({
    full_name: "",
    phone_number: "",
    email_address: "",
    password: "",
  });
  const [messageBlock, setMessageBlock] = useState({
    type: "error",
    message: "",
    visible: false,
  });
  const navigator = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const submitUser = async () => {
    setIsLoading(true);

    const response = await axiosHandler.postRequest("user/signup", {
      full_name: userData.full_name,
      email_address: userData.email_address,
      phone_number: userData.phone_number,
      password: userData.password,
    });

    if (response.status == "failed") {
      setMessageBlock({
        type: "error",
        message: response.message,
        visible: true,
      });

      setIsLoading(false);
      return;
    }

    setMessageBlock({
      type: "success",
      message: response.message,
      visible: true,
    });

    createLocalItem("recognizedEmail", userData.email_address);
    createSessionItem("userAuth", response.data.access_token);
    createSessionItem("userData", JSON.stringify(response.data.user_details));

    setIsLoading(false);
    navigator.push("/user");

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center py-14 w-full">
      <span className="text-3xl font-semibold my-8"> Create Account </span>
      <form
        role="form"
        className="flex flex-col gap-8 w-10/12 lg:w-5/12 items-center justify-center"
      >
        {messageBlock.visible && (
          <span
            className={`w-11/12 lg:w-8/12 self-center rounded-md ${
              messageBlock.type === "error" ? "bg-red-400" : "bg-blue-400"
            } text-center font-semibold text-md text-white py-3 px-6 my-2`}
          >
            {messageBlock.message}
          </span>
        )}
        <input
          type="text"
          placeholder="Enter your full name"
          value={userData.full_name}
          onInput={(e) =>
            setUserData({ ...userData, full_name: e.target.value })
          }
          className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={userData.phone_number}
          onInput={(e) =>
            setUserData({ ...userData, phone_number: e.target.value })
          }
          className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          value={userData.email_address}
          onInput={(e) =>
            setUserData({ ...userData, email_address: e.target.value })
          }
          className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={userData.password}
          onInput={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />

        <button
          onClick={isLoading ? () => {} : submitUser}
          disabled={isLoading}
          className={`p-4 flex flex-row w-full ${
            isLoading ? "opacity-40" : "opacity-100"
          } items-center justify-between gap-2 font-semibold text-md px-10 bg-transparent hover:bg-red-700 border border-red-900 border-solid`}
        >
          Create Account
          <RxArrowTopRight size={20} />
        </button>
        <span className="font-light text-sm">
          Already Have An Account ?{" "}
          <Link href={"/auth/signin"} className="border-b border-solid pb-1">
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
};

export default page;
