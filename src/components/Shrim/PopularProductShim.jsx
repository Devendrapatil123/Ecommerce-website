import React from "react";

function PopularProductShim() {
  const arrayData = new Array(4).fill("");
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {arrayData.map(() => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <div className="block relative h-48 rounded overflow-hidden bg-[#ccc]"></div>
                <div className="mt-4">
                  <h2 className="text-gray-900 title-font text-lg rounded mb-2 font-medium h-[25px] w-[120px] bg-[#ccc]"></h2>
                  <p className="mt-1 text-2xl font-semibold rounded h-[25px] w-[80px] bg-[#ccc]"></p>
                  <button className="py-1 px-1 md:px-3 rounded mt-2 h-[25px] w-[80px] bg-[#ccc]"></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PopularProductShim;
