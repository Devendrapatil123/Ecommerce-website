import React from "react";

function AllProductsShim() {
  const arrayData = new Array(9).fill("");

  return (
    <>
      <div className="flex gap-4 flex-wrap justify-around mt-3 mb-3  ">
        {arrayData.map(() => (
          <div
            className="lg:w-1/4 md:w-1/2 p-4 w-full h-full border-2 border-gray-100 border-opacity-60 rounded-lg shadow-xl"
          >
            <div className="w-full h-[200px] bg-[#ccc] rounded-md"></div>
            <div className="mt-4">
              <h3 className="text-gray-900  font-semibold text-xl  tracking-tight  dark:text-white rounded-lg mt-2 mb-2 h-[25px] w-[120px] bg-[#ccc]"></h3>
              <span className="text-blue-800 text-xs font-semibold   px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 h-[25px] w-[80px] bg-[#ccc]"></span>
              <div className=" items-center">
                <p className="mt-1 mb-2  text-gray-900 rounded-lg dark:text-white h-[25px] w-[80px] bg-[#ccc]"></p>
                <button className="focus:ring-4 focus:ring-blue-300 font-m rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 h-[25px] w-[80px] bg-[#ccc]"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllProductsShim;
