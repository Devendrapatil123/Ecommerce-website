import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import login from "../../assets/login.jpg";
import { Link } from "react-router-dom";
import AllProductsShim from "../Shrim/AllProductsShim";

function Allproducts({ AddToCart }) {
  const [getProducts, setProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [originalProduct, setOriginalProduct] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  //get all products
  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setProducts(res.data.products);
      setOriginalProduct(res.data.products);
    };
    getAllProducts();
  }, []);

  //get all categories
  useEffect(() => {
    const getAllProductsCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProductsCategory();
  }, []);

  const selectedItems = (selectitem) => {
    setSelectedProduct(selectitem);

    const data = selectitem
      ? originalProduct.filter(
          (filteritem) => filteritem.category === selectitem
        )
      : originalProduct;
    setProducts(data);
  };

  const handleSearchProduct = () => {
    const searchProduct = originalProduct.filter((SearchFilterItem) =>
      SearchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProducts(searchProduct);
  };

  const handleByPrice = () => {
    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice);
    const filterPrice = originalProduct.filter(
      (priceItem) =>
        (!min || priceItem.price >= min) && (!max || priceItem.price <= max)
    );
    setProducts(filterPrice);
  };

  return (
    <>
      <>
        <div className="relative mt-[73px]">
          <img
            src={login}
            className="object-cover w-full object-center h-[410px] mt-3"
          />
          <div className="w-full h-[410px] absolute bg-black top-0 left-0 opacity-[.4]"></div>
          <h2 className="absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
            All products
          </h2>
        </div>

        {/* category section */}
        <div className="bg-[#e2e0e0] container mx-auto rounded-md py-3 mt-3">
          <div className="text-center mt-4">
            <select
              onChange={(e) => selectedItems(e.target.value)}
              className="border py-2 px-4 rounded-md"
            >
              <option>Product categories</option>
              {allCategories.slice(0, 6).map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center mt-3 text-2xl flex items-center justify-center md:flex-row flex-col gap-3">
            <input
              className="block w-[80%] md:w-[50%] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Serach Products"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
            />
            <button
              className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-4 dark:border-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleSearchProduct}
            >
              Search Products
            </button>
          </div>

          {/* search by value */}
          <div className="text-center mt-4 mb-2 flex justify-center items-center md:flex-row flex-col gap-3">
            <input
              placeholder="min price"
              className="px-2 py-2 rounded-md"
              onChange={(e) => setMinPrice(e.target.value)}
              value={minPrice}
            />
            <input
              placeholder="max price"
              className="px-2 py-2 rounded-md"
              onChange={(e) => setMaxPrice(e.target.value)}
              value={maxPrice}
            />
            <button
              className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-4 dark:border-gray-100 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleByPrice}
            >
              Filter by price
            </button>
          </div>
        </div>
        {!getProducts.length ? (
          <AllProductsShim />
        ) : (
          <div className="flex gap-4 flex-wrap justify-around mt-3 mb-3 ">
            {getProducts.map((productItems) => (
              <div
                key={productItems.id}
                className="  lg:w-1/4 md:w-1/2 p-4 w-full h-full border-2 border-gray-100 border-opacity-60 rounded-lg overflow-hidden shadow-xl transition ease-in-out delay-150 bg-white "
              >
                <Link to={`/SingleProducts/${productItems.id}`}>
                  <img
                    className="block relative h-48 rounded overflow-hidden"
                    src={productItems.thumbnail}
                    alt="ecommerce"
                  />
                </Link>
                <div className="mt-1">
                  <h3 className="text-gray-900  font-semibold text-xl  tracking-tight dark:text-white mt-2">
                    {productItems.title}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold  px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    {productItems.rating}
                  </span>
                  <div className=" items-center">
                    <p className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                      Price: {productItems.price} Rs
                    </p>
                    <button
                      className="inline-flex items-center bg-blue-800  hover:bg-blue-800 focus:ring-4 focus:ring-blue-700 dark:focus:ring-blue-800 px-5 py-2.5 text-sm  font-medium rounded-md text-white ring-1 ring-inset ring-blue mt-3"
                      onClick={() => AddToCart(productItems)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    </>
  );
}

export default Allproducts;
