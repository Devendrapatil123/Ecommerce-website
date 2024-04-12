import React from "react";
import shoopingImg from "../../assets/shoopingImg.jpg";

function Herosection() {
  return (
    <>
      <div className="relative mt-[73px]">
        <div>
          <img
            src={shoopingImg}
            alt=""
            className=" w-full object-cover object-center"
          />
        </div>
        <div className="absolute top-[40%] w-full text-end right-5">
          <h1 className="text-1xl sm:text-1xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[red]">
            Discover Your Next Adventures!
          </h1>
          <p className="text-[10px] lg:text-2xl mt-2 lg:mt-5 font-semibold">
            Shop Our latest Arrival & Unleash Your Style
          </p>
        </div>
      </div>
    </>
  );
}

export default Herosection;
