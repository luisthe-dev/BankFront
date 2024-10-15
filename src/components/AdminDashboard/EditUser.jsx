import React from "react";

const EditUser = ({ user, setUser }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen p-8 flex flex-col items-center justify-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-30  bg-[#92b8a676]"
        onClick={() => setUser(null)}
      ></div>
      <div className="flex w-full lg:w-5/12 flex-col items-start justify-start p-4 py-12 bg-black rounded-md z-40">
        <span className="text-3xl mt-3 pl-5 font-semibold"> Edit User </span>
        <hr className="bg-white text-white w-full my-3" />
        <form
          role="form"
          className="w-10/12 flex flex-col items-center self-center justify-center py-3"
        >
          <input
            type="text"
            placeholder="full name"
            className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none"
          />
          <input
            type="email"
            placeholder="email address"
            className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none"
          />
          <input
            type="number"
            placeholder="wallet balance"
            className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none"
          />
          <select className="w-full border-b border-red-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none">
            <option selected disabled>
              status
            </option>
            <option value={"active"}> active </option>
            <option value={"blocked"}> blocked </option>
          </select>
          <button className="bg-red-800 py-4 rounded-md my-4 w-10/12">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
