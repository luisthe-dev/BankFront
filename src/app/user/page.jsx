"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { makeMonetaryNumber } from "@/handlers/helperHandler";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const page = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coinData, setCoinData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "candlestick",
    },
    series: [],
  });

  const selectSingleCoin = async (id) => {
    const data = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/ohlc`,
      {
        params: {
          vs_currency: "USD",
          days: "30",
          x_cg_demo_api_key: "CG-sNijLgUSVuoaXP7BEit3KXTn",
        },
      }
    );

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (data.status == 200) {
      setSelectedCoin(id);
      setCoinData(data.data);
      renderChart(data.data);
    }
  };

  const renderChart = async (data) => {
    const options = {
      chart: {
        id: `candlestick`,
        toolbar: false,
        zoom: 9,
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return `$${value}`;
          },
          color: "red",
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        lines: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      series: [
        {
          data: data,
        },
      ],
    };

    console.log("efef", options);

    setChartOptions(options);
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
        <div className="w-full lg:w-2/12 p-3 flex flex-grow flex-col gap-2 mb-8 border-b border-dotted border-blue-800">
          <span className="text-2xl font-extrabold"> Total Balance </span>
          <span className="text-5xl font-extralight">
            {makeMonetaryNumber(900000000)}
          </span>
        </div>
        <div className="w-full lg:w-2/12 p-3 flex flex-grow flex-col gap-2 mb-8 border-b border-dotted border-blue-800">
          <span className="text-2xl font-extrabold"> Active Plan </span>
          <span className="text-5xl font-extralight">Basic</span>
        </div>
        <div className="w-full lg:w-2/12 p-3 flex flex-grow flex-col gap-2 mb-8 border-b border-dotted border-blue-800">
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
          {chartOptions?.series[0]?.data && (
            <ApexCharts
              type="candlestick"
              options={chartOptions}
              series={chartOptions?.series}
              className={"w-full"}
            />
          )}
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
