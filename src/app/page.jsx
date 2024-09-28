"use client";

import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.png";
import Campaign from "@/assets/images/campaign.jpg";
import People from "@/assets/images/people.jpg";
import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";
import { FcBrokenLink } from "react-icons/fc";
import { IoMdCheckmark } from "react-icons/io";
import { FaArrowDownLong } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { PiLightningLight } from "react-icons/pi";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import * as axiosHandler from "@/handlers/axiosHandler";

import BBC from "@/assets/images/bbc.svg";
import Binance from "@/assets/images/binance.png";
import BlockChain from "@/assets/images/blockchain.png";
import Dragonfly from "@/assets/images/dragonfly.png";
import Fenbushi from "@/assets/images/fenbushi.png";
import Rockx from "@/assets/images/rockx.png";
import Sequoia from "@/assets/images/sequoia.png";
import Tiger from "@/assets/images/tiger.png";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const logos = [
    BBC,
    Binance,
    BlockChain,
    Dragonfly,
    Fenbushi,
    Rockx,
    Sequoia,
    Tiger,
  ];

  const navigation = useRouter();

  const [pricing, setPricing] = useState([]);
  const [coinsData, setCoinsData] = useState([]);

  const fetchPlanData = async () => {
    const allPlans = await axiosHandler.getRequest("/plans");

    if (allPlans.status === "success") {
      setPricing(
        allPlans?.data?.map((plan) => {
          return {
            title: plan.name,
            price: `${plan.min_price} - ${plan.max_price}`,
            items: plan.items,
          };
        })
      );
    }
  };

  const getMarketData = async () => {
    const data = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          per_page: 10,
          vs_currency: "USD",
          x_cg_demo_api_key: "CG-sNijLgUSVuoaXP7BEit3KXTn",
        },
      }
    );

    if (data.status == 200) {
      setCoinsData(data.data);
    }
  };

  useEffect(() => {
    fetchPlanData();
    getMarketData();
  }, []);

  const howWorks = [
    {
      icon: <IoMdCheckmark size={24} />,
      title: "Sign Up",
      text: "Register your investment account in less than 45 seconds",
    },
    {
      icon: <FaArrowDownLong size={24} />,
      title: "Fund",
      text: "Fund your account and deposit using your preferred payment method",
    },
    {
      icon: <CiBank size={24} />,
      title: "Invest",
      text: "Invest in preferred and optimized plan for your capital",
    },
    {
      icon: <CiMoneyCheck1 size={24} />,
      title: "Earn",
      text: "Pick a plan and watch your Return on Investment.",
    },
  ];

  const whyUs = [
    {
      title: "Instant account",
      text: "Set up your account within seconds with Cloud Capital Asset, purchase a plan and start making your profits",
    },
    {
      title: "Instant withdrawal",
      text: "Withdrawals from MAN Investments Inc wallet are sent to your external wallet instantly from the time of your withdrawal.",
    },
    {
      title: "Real Estate",
      text: "Real estate investment involves the purchase, ownership, management, rental and/or sale of real estate for profit.",
    },
    {
      title: "Detailed statistics",
      text: "Get detailed statistics of your plans purchased with cloudglobalrevelout.org and the daily returns you are getting from them.",
    },
    {
      title: "Investment planning",
      text: "Your investment multiplies with MAN Investments Inc, withdraw your profits whenever you want or purchase more plans from them.",
    },
    {
      title: "Skilled management",
      text: "Cooperating with us, you receives the opportunities for improvement and development of the own mining and investments skills.",
    },
    {
      title: "Fast customer support",
      text: "Get detailed statistics of your plans purchased with cloudglobalrevelout.org and the daily returns you are getting from them",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center w-full justify-start">
        <SiteHeader />
        <div className="flex flex-col lg:flex-row w-full items-center py-12 px-5 lg:px-14 gap-5">
          <div className="flex items-start flex-col justify-center py-12 gap-4">
            <span className="text-6xl lg:text-7xl font-semibold">
              A New Era Of Investing: Make Your Money Grow
            </span>
            <span className="text-2xl font-light w-full lg:w-10/12 py-3 lg:py-12">
              We are a community founded to revolutionize the market of
              crypto-traders, inserted in the worldwide stock market, which
              grants access in mining crypto currencies. Mirror an expert and
              grow value and knowledge through copy trading, wide range of
              trading offers, Options trading, stocks, derivatives, currency
              pairs.
            </span>
            <button className="p-4 flex flex-row items-center justify-center gap-2 font-semibold text-md px-10 bg-blue-950">
              Get Started
              <RxArrowTopRight size={20} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center p-2 w-full lg:w-7/12">
            <Image src={Campaign} alt="Welcome" />
          </div>
        </div>
        <div className="bg-gray-700 w-full p-10 flex flex-row items-center justify-start overflow-x-scroll gap-6">
          {coinsData.map((coin, coinKey) => (
            <span
              className="flex flex-row items-center justify-center gap-3 pl-4 ml-4"
              key={coinKey}
            >
              <Image src={coin.image} width={40} height={40} />
              <span className="flex flex-col items-start justify-center">
                <span className="text-md font-bold"> {coin.name} </span>
                <span className="text-2xl font-extralight">
                  {coin.current_price}
                </span>
              </span>
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center py-16 px-12 w-full bg-white">
          <span className="py-10 text-3xl font-semibold text-black">
            Our Partners
          </span>
          <div className="flex flex-row flex-wrap items-center justify-center w-full lg:w-9/12">
            {logos.map((logo, logoKey) => (
              <Image
                src={logo}
                key={logoKey}
                className="w-6/12 lg:w-2/12 p-5"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-center w-full p-8 lg:p-12">
          <div className="flex flex-col items-center justify-center w-full lg:w-5/12">
            <Image src={People} alt="People" className="w-full" />
          </div>
          <div className="flex flex-col items-start justify-center px-2 lg:px-16 w-full lg:w-7/12">
            <span className="text-4xl lg:text-5xl flex flex-row items-center justify-start gap-2 font-bold py-9 lg:py-5">
              <FcBrokenLink size={32} /> About Us
            </span>
            <span className="text-lg font-semibold text-gray-400 w-full text-justify">
              At MAN Investments Inc, we stand firm in our belief in
              diversifying investments to offer you a glimpse of the potential
              for passive earnings. With a wealth of experience on board and
              state-of-the-art analytical technologies at our disposal, we are
              well-equipped to assist you in various domains, including binary
              options. Our team of dedicated professionals works tirelessly
              around the clock to ensure that you derive the maximum benefit
              from your investments. We consistently adhere to risk management
              principles, with the goal of achieving both earnings consistency
              and capital preservation. We firmly uphold the principle that all
              investors, regardless of their portfolio size, deserve access to
              high-quality investment guidance. Whether you are preparing for a
              major life event such as marriage, parenthood, retirement, or
              simply navigating life's complexities, we are here to extend our
              support. We are ready to address your inquiries and provide
              guidance on the path to realizing your future financial
              aspirations. Our primary mission is to deliver high profits with
              low risk and swift returns. To attain this, we continuously
              challenge the boundaries of foreign exchange and currency trading
              and employ novel trading strategies to unlock the potential for
              remarkable profits. At MAN Investments Inc, we are committed to
              creating value for our investors, and the assurance of profit is
              at the core of our commitment. Our aim is to reduce risks and
              ensure a stable and sustainable income for our investors. With the
              aid of rapidly advancing technologies and intricate computer
              algorithms, we explore every available option to transform your
              investments into a reality that may have seemed inconceivable a
              decade ago. In today's rapidly changing world, we acknowledge the
              necessity of keeping pace with these transformations, and Cloud
              Global Revelout is here to assist you in comprehending these
              changes and harnessing their financial potential. Allow us to back
              you financially on your journey.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center self-start w-full lg:w-7/12 p-8 lg:pl-20 py-18">
          <span className="text-2xl lg:text-2xl flex flex-row items-center justify-start gap-2 font-semibold py-9 lg:py-1">
            <FcBrokenLink size={32} />
            What we offer
          </span>
          <span className="font-light text-5xl mb-6">
            Be Part Of Something Bigger
          </span>
          <span className="text-lg font-semibold text-gray-400 w-full text-justify">
            The MAN Investments Inc visionary team is committed to delivering
            exceptional results, focused being one step ahead. We are building
            an FX trading platform for the long-term, setting up the standard to
            change the fortune of future generations to come! A completely
            unique approach to EA (Cryptocurrency software) and AI development.
            Outstanding results, closely monitored and measured by the Milestone
            trading team of dedicated professionals. No Whitelabel or 3rd party
            technology employed.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-8 py-20">
          <span className="font-bold text-4xl py-3"> How it works </span>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            {howWorks.map((howWork, howWorkKey) => (
              <div
                className="w-full self-stretch lg:w-4/12 p-6 px-1 lg:px-6 flex-grow flex flex-col items-center justify-center"
                key={howWorkKey}
              >
                <div className="flex self-stretch flex-grow flex-col items-start justify-center p-7 px-6 lg:px-9 border-white border-dotted border">
                  <span className="text-3xl font-bold pb-3 flex flex-row items-center justify-start gap-2">
                    {howWork.icon}
                    {howWork.title}
                  </span>
                  <span className="text-md font-semibold text-gray-300">
                    {howWork.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-8 py-20">
          <span className="font-bold text-4xl py-5 text-center">
            Facts About Cryptocurrency
          </span>
          <span className="font-light text-grey-300 text-lg w-full lg:w-10/12 text-justify">
            Cryptocurrency is the future, and everyone wants to get in on the
            action. That’s why new cryptocurrencies are popping up all the time.
            It’s estimated that there are currently well over 5000 different
            currencies around the world. Most of these coins aren’t worth much
            and probably never will be, although anyone who can spot a diamond
            in the rough before becomes the next big thing will be very rich
            indeed.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-8 py-20">
          <span className="font-bold text-4xl py-5 text-center">
            Copy Trading
          </span>
          <span className="font-light text-grey-300 text-lg w-full lg:w-10/12 text-justify">
            Copy trading is a way to automate your trading by copying the trades
            of other expert traders. It is often used by newbies that may not
            yet know how to trade, with the added benefit of helping to teach
            them on the way. For more experienced traders, it can enable them to
            step away from their screens if they need to, as trades are
            automated. The goal of copy trading, like regular trading is to open
            positions on various financial markets including FX, cfds on stocks,
            options,commodities indices and cryptocurrencies and then to close
            the position, hopefully once the value of the asset has moved
            higher.
          </span>
          <div className="w-full flex flex-col items-center lg:items-start justify-center lg:w-10/12 py-10">
            <button className="p-4 flex flex-row items-center justify-center gap-2 font-semibold text-md px-10 bg-blue-700">
              Become a copy trader
              <RxArrowTopRight size={20} />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-8 px-0 lg:px-8 py-20 bg-white text-black">
          <span className="font-bold text-4xl py-5 text-center">Pricing</span>
          <div className="flex flex-row flex-wrap items-center justify-start py-10 w-full px-1 lg:px-8">
            {pricing.map((pricing, pricingKey) => (
              <div
                className="flex flex-col w-full lg:w-4/12 items-center justify-center p-1 py-5"
                key={pricingKey}
              >
                <div className="flex flex-col w-11/12 items-start lg:items-center justify-center p-7 border border-black border-solid gap-3 py-16">
                  <PiLightningLight size={28} />
                  <span className="text-2xl font-semibold py-3">
                    {pricing.title}
                  </span>
                  <span className="text-4xl font-extralight pb-2 mb-5 border-b border-solid border-gray-300 text-gray-600 pr-5">
                    {pricing.price}
                  </span>
                  {pricing.items.map((item, itemKey) => (
                    <span
                      key={itemKey}
                      className="flex flex-row items-center justify-start gap-2 pl-5 py-1 font-medium text-lg"
                    >
                      <IoMdCheckmark color={"blue"} /> {item}
                    </span>
                  ))}
                  <button
                    onClick={() => navigation.push("/auth/signin")}
                    className="my-8 p-4 w-full lg:w-10/12 flex flex-row items-center justify-between gap-2 font-light text-md px-5 bg-blue-700 text-white"
                  >
                    Get Started
                    <RxArrowTopRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-8 py-15">
          <span className="font-bold text-4xl py-3 text-center">Why Us ?</span>
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-start w-full">
            {whyUs.map((whyU, whyUKey) => (
              <div
                className="w-full lg:w-4/12 self-stretch px-2 py-6 flex flex-col items-center justify-center"
                key={whyUKey}
              >
                <div className="flex flex-col self-stretch flex-grow items-start justify-center p-9 border-white border-dotted border">
                  <span className="text-xl font-bold pb-3 flex flex-row items-center justify-start gap-2">
                    {whyU.title}
                  </span>
                  <span className="text-md font-semibold text-gray-300">
                    {whyU.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SiteFooter />
      </div>
    </>
  );
};

export default page;
