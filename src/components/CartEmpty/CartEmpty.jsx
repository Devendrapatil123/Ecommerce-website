import React from "react";
import cart from "../../assets/cart.jpg";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <>
      <div className="w-full h-[80vh] mt-[80px] bg-[#f7f6f6] container mx-auto px-4 py-4 my-4 shadow-lg rounded-md flex justify-center items-center">
        <div className="flex items-center flex-col">
          <img className="w-[300px]" src={cart} />
          <h3 className=" text-center text-2xl font-semibold mt-4">
            Your Cart is Currently Empty
          </h3>
          <Link to="/">
            <button className="inline-flex  bg-blue-800  hover:bg-blue-800 focus:ring-4 focus:ring-blue-700 dark:focus:ring-blue-800 px-5 py-2.5 text-sm  font-medium rounded-md text-white ring-1 ring-inset ring-blue mt-3 items-center">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartEmpty;
