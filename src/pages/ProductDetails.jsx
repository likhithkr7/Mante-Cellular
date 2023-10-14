import { Fragment } from "react";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import SubSection from "../components/SubSection";

const ProductDetails = () => {
  var { id } = useParams();
  const newArrivalData = products.filter((item) => item.category === "mobile");
  return (
    <Fragment>
      <SubSection title={id} bgColor="white" productItems={newArrivalData} />
    </Fragment>
  );
};

export default ProductDetails;
