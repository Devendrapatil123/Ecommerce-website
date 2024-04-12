import React from "react";
import login from "../../assets/login.jpg";
import about from "../../assets/about.jpg";
import tech from "../../assets/tech.png";
import ethics from "../../assets/ethics.jpg"

function About() {
  return (
    <div>
      <div className="relative mt-[73px]">
        <img
          src={login}
          className="object-cover w-full object-center h-[410px] mt-3"
        />
        <div className="w-full h-[410px] absolute bg-black top-0 left-0 opacity-[.4]"></div>
        <h2 className="absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          About Us
        </h2>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={ethics}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
            Building trust with Integrity. At EasyShop, every decision made is based on ethical and moral principles - no success is meaningful if it’s not achieved the right way.
            </p>
           
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={about}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Who We Are?
            </h1>
            <p className="mb-8 leading-relaxed">
              The EasyShop Group is one of India’s leading digital commerce
              entities and includes group companies EasyShop, Myntra, EasyShop
              Wholesale, EasyShop Health+, and Cleartrip. Started in 2007,
              EasyShop has enabled millions of sellers, merchants, and small
              businesses to participate in India's digital commerce revolution.
              With a registered customer base of more than 500 million,
              EasyShop's marketplace offers over 150 million products across 80+
              categories.
            </p>
          </div>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              TECHNOLOGY AT EASY SHOP INNOVATION
            </h1>
            <p className="mb-8 leading-relaxed">
              EasyShop technology drives path-breaking, customer-focused
              innovation that makes high quality products accessible to Indian
              shoppers, besides making the online shopping experience
              convenient, intuitive and seamless
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={tech}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
