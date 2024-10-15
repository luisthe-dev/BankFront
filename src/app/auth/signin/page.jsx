"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import * as axiosHandler from "@/handlers/axiosHandler";
import { createLocalItem, getLocalItem } from "@/handlers/localHandler";
import { createSessionItem } from "@/handlers/sessionHandler";

const page = () => {
  const navigation = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [messageBlock, setMessageBlock] = useState({
    type: "error",
    message: "",
    visible: false,
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const submitUser = async () => {
    setIsLoading(true);

    const response = await axiosHandler.postRequest("user/signin", {
      email_address: loginData.email,
      password: loginData.password,
      recognized: true,
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

    createLocalItem("recognizedEmail", loginData.email);
    createSessionItem("userAuth", response.data.access_token);
    createSessionItem("userData", JSON.stringify(response.data.user_details));

    setIsLoading(false);
    navigation.push("/user");

    setIsLoading(false);
  };

  useEffect(() => {
    const storedLogin = getLocalItem("recognizedEmail");
    storedLogin && setLoginData({ ...loginData, email: storedLogin });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-14 w-full">
      <span className="text-3xl font-semibold my-8"> Welcome Back </span>
      {messageBlock.visible && (
        <span
          className={`w-11/12 lg:w-5/12 self-center rounded-md ${
            messageBlock.type === "error" ? "bg-red-400" : "bg-red-400"
          } text-center font-semibold text-md text-white py-3 px-6 my-2`}
        >
          {messageBlock.message}
        </span>
      )}
      <form
        role="form"
        className="flex flex-col gap-8 w-10/12 lg:w-5/12 items-center justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your email address"
          value={loginData.email}
          onInput={(e) => setLoginData({ ...loginData, email: e.target.value })}
          className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <input
          placeholder="Password"
          type="password"
          value={loginData.password}
          onInput={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 font-extralight text-lg outline-none"
        />
        <div className="flex w-full items-center justify-between p-3 py-5">
          <span> Remember Me </span>
          <Link href={"/"}> Forgot Password </Link>
        </div>
        <button
          onClick={isLoading ? () => {} : submitUser}
          disabled={isLoading}
          className={`p-4 flex flex-row w-full ${
            isLoading ? "opacity-40" : "opacity-100"
          } items-center justify-between gap-2 font-semibold text-md px-10 bg-transparent hover:bg-red-700 border border-red-900 border-solid`}
          type="submit"
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
