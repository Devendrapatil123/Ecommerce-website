import React from "react";
import Herosection from "../../components/Herosection/Herosection";
import Service from "../../components/Service/Service";
import Gallery from "../../components/Gallery/Gallery";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Testimonial from "../../components/Testimonial/Testimonial";


function Home({AddToCart}) {
  return (
    <>
      <Herosection />
      <Service />
      <PopularProducts AddToCart={AddToCart}/>
      <Gallery />
      <Testimonial/>
    </>
  );
}

export default Home;
