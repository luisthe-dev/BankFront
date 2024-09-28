import React from "react";

const MyTable = ({ data, title, keys, spacing, actionButton }) => {
  return (
    <>
      <div className="flex flex-col items-start justify-starp-5 w-full">
        <span className="px-1 text-2xl font-semibold"> {title} </span>
        {actionButton}
        <div className="w-full">
          <div className="flex flex-row flex-wrap items-start justify-start w-full p-8 border-b pb-2 pr-2">
            <span className={`${spacing} my-2 text-md font-bold`}>S/N</span>
            {keys.map((singleKey, singleKeyKey) => (
              <span
                className={`${spacing} my-2 text-md font-bold`}
                key={singleKeyKey}
              >
                {singleKey}
              </span>
            ))}
          </div>
          {data && data.length > 0 ? (
            data?.map((tableItems, tableItemKey) => (
              <div
                className="flex flex-row flex-wrap items-start justify-start w-full border-b p-3 px-8 pr-2"
                key={tableItemKey}
              >
                <span
                  className={`${spacing} my-2 text-md font-medium self-stretch justify-self-stretch flex flex-row items-center justify-start`}
                >
                  {tableItemKey + 1}
                </span>
                {tableItems.map((item, itemKey) => (
                  <span
                    className={`${spacing} my-2 text-md font-medium self-stretch justify-self-stretch flex flex-row items-center justify-start`}
                    key={itemKey}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center w-full border-b p-3 text-lg font-light">
              No Results Found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyTable;
