import React, { useState } from "react";
import { db } from "../../FirbaseAuth/FirbaseAuth.js";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";
function Contact() {
  const [UserContact, setUserContact] = useState({
    username: "",
    email: "",
    msg: "",
  });

  const HandleContact = (e) => {
    setUserContact({ ...UserContact, [e.target.name]: e.target.value });
  };

  const handleSubmitContact = async (e) => {
    e.preventDefault();
    if (!UserContact.username || !UserContact.email || !UserContact.msg) {
      return toast.error("All Fields are required");
    } else {
      try {
        await addDoc(collection(db, "contactUser"), {
          user: UserContact.username,
          email: UserContact.email,
          message: UserContact.msg,
        });
        toast.success(
          `Form submitted successfully! Thank you! ${UserContact.username}`
        );
        setUserContact({
          username: "",
          email: "",
          msg: "",
        });
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Us
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    name="username"
                    value={UserContact.username}
                    onChange={HandleContact}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
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
                    value={UserContact.email}
                    onChange={HandleContact}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="msg"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    autoComplete="off"
                    type="text"
                    id="text"
                    name="msg"
                    value={UserContact.msg}
                    onChange={HandleContact}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={handleSubmitContact}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
