"use client";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { makeMonetaryNumber, makeReadableDate } from "@/handlers/helperHandler";

const page = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coinData, setCoinData] = useState(null);
  const checkRef = useRef(false);

  const selectSingleCoin = async (id) => {
    checkRef.current = true;
    const data = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
      {
        params: {
          vs_currency: "USD",
          days: 10,
          precision: 5,
          x_cg_demo_api_key: "CG-sNijLgUSVuoaXP7BEit3KXTn",
        },
      }
    );

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (data.status == 200) {
      setSelectedCoin(id);
      setCoinData(data.data);
      renderChart(data.data);
      checkRef.current = false;
    }
  };

  const renderChart = async (data) => {
    if (!checkRef.current) return;

    document.getElementById("charContainer").innerHTML =
      '<canvas id="coinData" className="w-full"></canvas>';

    new Chart(document.getElementById("coinData"), {
      type: "line",
      options: {
        borderColor: "#acefda",
        pointStyle: false,
        scales: {
          x: {
            ticks: {
              display: false,
            },
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
          label: {
            display: false,
          },
        },
      },
      data: {
        labels: data.prices?.map((row) => makeReadableDate(row[0])),
        datasets: [
          {
            data: data.prices?.map((row) => Number(row[1])),
          },
        ],
      },
    });
  };

  const getMarketData = async () => {
    const data = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        params: {
          per_page: 20,
          vs_currency: "USD",
          x_cg_demo_api_key: "CG-sNijLgUSVuoaXP7BEit3KXTn",
        },
      }
    );

    if (data.status == 200) {
      setCoinsData(data.data);
      selectSingleCoin(data.data[0].id);
    }
  };

  useEffect(() => {
    getMarketData();
  }, []);

  return (
    <div className="flex flex-col items-start justify-start pt-20 self-stretch w-full">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-2/12 p-3 flex flex-grow flex-col gap-2 mb-8 border-b border-dotted border-green-800">
          <span className="text-2xl font-extrabold"> Total Balance </span>
          <span className="text-5xl font-extralight">
            {makeMonetaryNumber(900000000)}
          </span>
        </div>
        <div className="w-full lg:w-2/12 p-3 flex flex-grow flex-col gap-2 mb-8 border-b border-dotted border-green-800">
          <span className="text-2xl font-extrabold"> Active Plan </span>
          <span className="text-5xl font-extralight">Basic</span>
        </div>
        <div className="w-full lg:w-2/12 p-3 flex flex-grow flex-col gap-2 mb-8 border-b border-dotted border-green-800">
          <span className="text-2xl font-extrabold"> Invested Balance </span>
          <span className="text-5xl font-extralight">
            {makeMonetaryNumber(1800000)}
          </span>
        </div>
      </div>
      <div className="w-full items-start justify-start flex flex-col lg:flex-row gap-10">
        <div
          className="w-full lg:w-9/12 px-5 my-3 flex flex-col items-center justify-center"
          id="charContainer"
        >
          <canvas id="coinData" className="relative"></canvas>
        </div>
        <div className="w-full lg:w-3/12 p-3 flex flex-col items-center justify-center">
          <div className="border border-solid border-gray-400 p-4 py-9 w-full overflow-x-scroll">
            <span> Select A Chart To View </span>
            <div className="overflow-scroll flex flex-col w-full max-h-96">
              {coinsData.map((coin, coinKey) => (
                <div
                  key={coinKey}
                  onClick={() => selectSingleCoin(coin.id)}
                  className={`flex flex-row items-center justify-between p-4 border-b border-dotted border-gray-600 cursor-pointer transition-all duration-1000 ${
                    coin.id === selectedCoin
                      ? "bg-gray-100 text-gray-800"
                      : "bg-black text-white"
                  }`}
                >
                  <span className="text-xl font-semibold"> {coin.name} </span>
                  <span className="text-md font-extralight">
                    {makeMonetaryNumber(coin.current_price)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
