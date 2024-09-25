import { makeMonetaryNumber } from "@/handlers/helperHandler";
import React from "react";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";

const page = () => {
  const plans = [
    {
      title: "Regular Plan",
      price: "$500 - $999",
      items: [
        "ROI - 5%",
        "Referral Bonus - 3%",
        "Withdrawal - Instant",
        "Customer Support - 24/7",
      ],
    },
    {
      title: "Standard Plan",
      price: "$1,000 - $4,999",
      items: [
        "ROI - 10%",
        "Referral Bonus - 3%",
        "Withdrawal - Instant",
        "Customer Support - 24/7",
      ],
    },
    {
      title: "Premium Plan",
      price: "$5,000 - $9,999",
      items: [
        "ROI - 15%",
        "Referral Bonus - 3%",
        "Withdrawal - Instant",
        "Customer Support - 24/7",
      ],
    },
    {
      title: "Silver Plan",
      price: "$10,000 - $49,999",
      items: [
        "ROI - 20%",
        "Referral Bonus - 3%",
        "Withdrawal - Instant",
        "Customer Support - 24/7",
      ],
    },
    {
      title: "Gold Plan",
      price: "$50,000 - Unlimited",
      items: [
        "ROI - 25%",
        "Referral Bonus - 3%",
        "Withdrawal - Instant",
        "Customer Support - 24/7",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <span className="text-4xl font-semibold my-3"> Available Plans </span>
      <div className="flex flex-row flex-wrap items-center justify-start p-4 w-full">
        {plans.map((plan, planKey) => (
          <div
            className="flex flex-col items-center justify-center p-4 w-full lg:w-1/4 self-stretch justify-self-stretch"
            key={planKey}
          >
            <div className="border flex flex-col items-start justify-center border-green-800 border-solid rounded-md p-12 px-6 justify-self-stretch self-stretch">
              <span className="text-4xl font-extralight">{plan.title}</span>
              <span className="text-lg font-semibold my-5"> {plan.price} </span>
              {plan.items &&
                plan?.items?.map((items, itemsKey) => (
                  <span
                    key={itemsKey}
                    className="flex flex-row items-center justify-start gap-1 text-sm font-extralight my-1 w-full"
                  >
                    <FaCheck /> {items}
                  </span>
                ))}
              <button className="p-4 flex flex-row w-full items-center justify-between gap-2 font-semibold text-sm px-3 my-5 bg-transparent hover:bg-green-700 border border-green-900 border-solid rounded-md">
                Choose Plan <FaArrowRightLong />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
