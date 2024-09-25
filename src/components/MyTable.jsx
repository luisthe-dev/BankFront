import React from "react";

const MyTable = ({ data, title, keys, spacing }) => {
  return (
    <>
      <div className="flex flex-col items-start justify-start p-1 lg:p-5 w-full">
        <span className="px-1 text-2xl font-semibold"> {title} </span>
        <div className="w-full">
          <div className="flex flex-row flex-wrap items-start justify-start w-full p-8 border-b pb-2 pr-2">
            <span className={`${spacing} text-md font-bold`}>S/N</span>
            {keys.map((singleKey, singleKeyKey) => (
              <span
                className={`${spacing} text-md font-bold`}
                key={singleKeyKey}
              >
                {singleKey}
              </span>
            ))}
          </div>
          {data &&
            data?.map((tableItems, tableItemKey) => (
              <div
                className="flex flex-row flex-wrap items-start justify-start w-full border-b p-3 px-8 pr-2"
                key={tableItemKey}
              >
                <span
                  className={`${spacing} text-md font-medium self-stretch justify-self-stretch flex flex-row items-center justify-start`}
                >
                  {tableItemKey + 1}
                </span>
                {tableItems.map((item, itemKey) => (
                  <span
                    className={`${spacing} text-md font-medium self-stretch justify-self-stretch flex flex-row items-center justify-start`}
                    key={itemKey}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MyTable;
