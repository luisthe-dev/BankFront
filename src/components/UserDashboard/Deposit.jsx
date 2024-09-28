import React, { useState } from "react";

const Deposit = ({ setDeposit, paymentMethods }) => {
  const [depositData, setDepositData] = useState({
    amount: "",
    payment_method: null,
  });

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen p-8 flex flex-col items-center justify-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-30  bg-[#92b8a676]"
        onClick={() => setDeposit(false)}
      ></div>
      <div className="flex w-full lg:w-5/12 flex-col items-start justify-start p-4 py-12 bg-black rounded-md z-40">
        <span className="text-3xl mt-3 pl-5 font-semibold"> Make Deposit </span>
        <hr className="bg-white text-white w-full my-3" />
        <form
          role="form"
          className="w-10/12 flex flex-col items-center self-center justify-center py-3"
        >
          <input
            type="number"
            placeholder="deposit amount"
            className="w-full border-b border-blue-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none"
          />
          <select
            className="w-full border-b border-blue-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none"
            onChange={(e) =>
              setDepositData({ ...depositData, payment_method: e.target.value })
            }
          >
            <option value={""} defaultValue={""} disabled>
              payment method
            </option>
            {paymentMethods.map((paymentMethod, paymentMethodKey) => (
              <option value={paymentMethod.title} key={paymentMethodKey}>
                {paymentMethod.title}
              </option>
            ))}
          </select>
          {depositData.payment_method != null && (
            <input
              type="text"
              placeholder="deposit amount"
              value={
                paymentMethods.filter(
                  (method) => method.title === depositData.payment_method
                )[0]?.value ?? ""
              }
              readOnly
              className="w-full border-b border-blue-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none"
            />
          )}
          <button className="bg-blue-800 py-4 rounded-md my-4 w-10/12">
            I have made the transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
