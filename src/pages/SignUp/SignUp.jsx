import React, { useState } from "react";
import login from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast  from 'react-hot-toast';
import { auth } from "../../FirbaseAuth/FirbaseAuth.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const navigateLogin = useNavigate();

  const [UserSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    setUserSignUp({ ...UserSignUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!UserSignUp.username || !UserSignUp.email || !UserSignUp.password) {
      return toast.error("All fields are required")
    } else {
      createUserWithEmailAndPassword(
        auth,
        UserSignUp.email,
        UserSignUp.password
      )
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: UserSignUp.username,
          });
          navigateLogin("/login");
        })
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Image */}
      <div className="relative flex-1">
        <img
          src={login}
          alt="Login Background"
          className="object-cover w-full h-[410px] sm:h-[300px] md:h-[410px] mt-3"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="absolute top-1/2 left-5 text-white font-semibold text-3xl sm:text-5xl md:text-6xl transform -translate-y-1/2">
          Sign Up
        </h2>
      </div>

      {/* Sign Up Section */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="mx-auto bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col w-full max-w-md">
            <h2 className="text-white text-4xl text-center font-medium title-font mb-5">
              Sign Up
            </h2>

            {/* Username Input */}
            <div className="relative mb-4">
              <label
                htmlFor="username"
                className="leading-7 text-sm text-gray-400"
              >
                Name
              </label>
              <input
                autoComplete="off"
                type="text"
                id="username"
                name="username"
                value={UserSignUp.username}
                onChange={HandleChange}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                value={UserSignUp.email}
                onChange={HandleChange}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-400"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={UserSignUp.password}
                onChange={HandleChange}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter your password"
              />
            </div>

            {/* Sign Up Button */}
            <button
             
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleSubmit}
            >
              Sign Up
            </button>

            {/* Login Link */}
            <p className="text-md mt-3 text-center">
              Do you have an Account?{" "}
              <Link to="/login" className="cursor-pointer hover:text-blue-400">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
