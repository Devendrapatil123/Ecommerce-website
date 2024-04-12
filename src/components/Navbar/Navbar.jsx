import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { auth } from "../../FirbaseAuth/FirbaseAuth";
import toast from "react-hot-toast";

const Navbar = ({ cart, username }) => {
  const [isOpen, setOpen] = useState(false);

  const ToogleChange = () => {
    isOpen === false ? setOpen(true) : setOpen(false);
  };

  const handleLogout = () => {
    auth
      .signOut(auth)
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div>
        <header className="bg-white border-b border-gray-200 fixed top-0 z-10 w-full">
          <div className="container mx-auto flex justify-between p-5 items-center">
            <div>
              <h3 className="font-bold text-2xl">
                <Link to="/">
                  Easy<span className="font-bold text-[red]">Shop</span>
                </Link>
              </h3>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer border-b border-red-400 ">
                    Home
                  </li>
                </Link>

                <Link to="/Allproducts">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer border-b border-red-400 ">
                    All Products
                  </li>
                </Link>

                <Link to="/About">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer border-b border-red-400 ">
                    About
                  </li>
                </Link>

                <Link to="/Contact">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer border-b border-red-400 ">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            {isOpen ? (
              <div>
                <ul className="flex flex-col sm:gap-10 text-2xl absolute top-[73px] left-0 h-screen w-full z-10 bg-red-500 text-white items-center  justify-center font-semibold">
                  <Link to="/" onClick={ToogleChange}>
                    <li className="mt-5 hover:text-gray-900 cursor-pointer ">
                      Home
                    </li>
                  </Link>
                  <Link to="/Allproducts" onClick={ToogleChange}>
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">
                      All Products
                    </li>
                  </Link>
                  <Link to="/About" onClick={ToogleChange}>
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">
                      About
                    </li>
                  </Link>
                  <Link to="/Contact" onClick={ToogleChange}>
                    {" "}
                    <li className="mt-5 hover:text-gray-900 cursor-pointer ">
                      Contact
                    </li>
                  </Link>
                </ul>
                <button
                  className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer"
                  onClick={ToogleChange}
                >
                  <RxCross1 size={25} />
                </button>
              </div>
            ) : (
              ""
            )}

            <div className="flex justify-center items-center gap-3">
              {username ? (
                <>
                  <Link to="/Login">
                    <button
                      className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-slate-300 rounded text-base font-semibold"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </Link>
                  <span>{username}</span>
                </>
              ) : (
                <>
                  
                  <Link to="/SignUp">
                    <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-slate-300 rounded text-base font-semibold">
                      SignUp
                    </button>
                  </Link>
                  <Link to="/Login">
                    <button className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-slate-300 rounded text-base font-semibold">
                      Login
                    </button>
                  </Link>
                </>
              )}

              <Link to="/Cart">
                <button className="relative">
                  <span className="absolute top-[-9px] bg-[red] right-0 text-white px-1 rounded-full text-xs">
                    {cart.length}
                  </span>
                  <FaCartArrowDown size={25} />
                </button>
              </Link>
              {isOpen ? (
                ""
              ) : (
                <button className="md:hidden" onClick={ToogleChange}>
                  <GiHamburgerMenu size={25} />
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
