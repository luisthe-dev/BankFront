import React, { useEffect, useState } from "react";

const EditSetting = ({ setting, setSetting, submitAction }) => {
  const [activeSetting, setActiveSetting] = useState(setting);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen p-8 flex flex-col items-center justify-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-30  bg-[#92b8a676]"
        onClick={() => setSetting(null)}
      ></div>
      <div className="flex w-full lg:w-5/12 flex-col items-start justify-start p-4 py-12 bg-black rounded-md z-40">
        <span className="text-3xl mt-3 pl-5 font-semibold">
          {setting.create ? "Create" : "Edit"} Setting
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
            value={activeSetting.name}
            onInput={(e) =>
              setActiveSetting({ ...activeSetting, name: e.target.value })
            }
            className="w-full border-b border-blue-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none"
          />
          <textarea
            type="text"
            placeholder="value"
            rows={4}
            value={activeSetting.value}
            onInput={(e) =>
              setActiveSetting({
                ...activeSetting,
                value: e.target.value,
              })
            }
            className="w-full border-b border-blue-700 border-solid bg-[transparent] p-5 my-5 font-extralight text-lg outline-none resize-none"
          ></textarea>
          <button
            className="bg-blue-800 py-4 rounded-md my-4 w-10/12"
            type="submit"
            onClick={() => submitAction(activeSetting)}
          >
            {setting.create ? "Create" : "Update"} Setting
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditSetting;
