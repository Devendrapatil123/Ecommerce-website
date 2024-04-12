import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PopularProductShim from "../Shrim/PopularProductShim";

const PopularProducts = ({ AddToCart }) => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const PopularProductsFecth = async () => {
      try {
        const res = await axios("https://dummyjson.com/carts/1");
        setPopularProducts(res.data.products);
      } catch (error) {
        toast.error(error.message);
      }
    };
    PopularProductsFecth();
  }, []);


  return (
    <>
      <div className="mt-6  text-center">
        <h2 className="text-4xl font-semibold text-black">Popular Products</h2>
      </div>
      <div>
        {!popularProducts.length ? (
          <PopularProductShim />
        ) : (
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {popularProducts
                  .filter((item, index) => index !== 1)
                  .map((popularitem) => (
                    <div
                      className="lg:w-1/4 md:w-1/2 p-4 w-full"
                      key={popularitem.id}
                    >
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={popularitem.thumbnail}
                        />
                      </a>
                      <div className="mt-4">
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {popularitem.title}
                        </h2>
                        <p className="mt-1 text-2xl font-semibold">
                          Price: {popularitem.price}{" "}
                        </p>
                      </div>
                      <button
                        className="text-white bg-indigo-500 py-1 px-1 md:px-3 focus:outline-none hover:bg-indigo-600 rounded mt-2"
                        onClick={() => AddToCart(popularitem)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default PopularProducts;
