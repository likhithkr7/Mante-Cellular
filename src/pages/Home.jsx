import { Fragment, useContext, useEffect } from "react";
import Section from "../components/Section";
import { products } from "../utils/products";
import SliderHome from "../components/Slider";

const Home = () => {
  const newArrivalData = products.filter((item) => item.category === "mobile");
  return (
    <Fragment>
      <SliderHome />
      <Section
        title="Product Categories"
        bgColor="white"
        productItems={newArrivalData}
      />
    </Fragment>
  );
};

export default Home;
