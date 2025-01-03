import React, { useEffect, useState } from "react";

const EditPlan = ({ plan, setPlan, submitAction }) => {
  const [activePlan, setActivePlan] = useState(plan);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen p-8 flex flex-col items-center justify-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-30  bg-[#92b8a676]"
        onClick={() => setPlan(null)}
      ></div>
      <div className="flex w-full lg:w-5/12 flex-col items-start justify-start p-4 py-12 bg-black rounded-md z-40">
        <span className="text-3xl mt-3 pl-5 font-semibold">
          {plan.create ? "Create" : "Edit"} Plan
        </span>
        <hr className="bg-white text-white w-full my-3" />
        <form
          role="form"
          className="w-10/12 flex flex-col items-center self-center justify-center py-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="plan name"
            value={activePlan.name}
            onInput={(e) =>
              setActivePlan({ ...activePlan, name: e.target.value })
            }
            className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none"
          />
          <input
            type="number"
            placeholder="minimum deposit"
            value={activePlan.min_price}
            onInput={(e) =>
              setActivePlan({ ...activePlan, min_price: e.target.value })
            }
            className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none"
          />
          <input
            type="number"
            placeholder="maximum deposit"
            value={activePlan.max_price}
            onInput={(e) =>
              setActivePlan({ ...activePlan, max_price: e.target.value })
            }
            className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none"
          />
          <textarea
            type="text"
            placeholder="features (separated with a comma)"
            rows={4}
            value={activePlan.items.join(",")}
            onInput={(e) =>
              setActivePlan({
                ...activePlan,
                items: e.target.value.split(","),
              })
            }
            className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none resize-none"
          ></textarea>
          <button
            className="bg-red-800 py-4 rounded-md my-4 w-10/12"
            type="submit"
            onClick={() => submitAction(activePlan)}
          >
            {plan.create ? "Create" : "Update"} Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPlan;
