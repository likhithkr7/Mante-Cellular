import { Fragment } from "react";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import SubSection from "../components/SubSection";

const ProductDetails = () => {
  var { id } = useParams();
  const newArrivalData = products.filter((item) => item.category === id);
  const title = newArrivalData.at(0).productName;
  return (
    <Fragment>
      <SubSection title={title} bgColor="white" productItems={newArrivalData} />
    </Fragment>
  );
};

export default ProductDetails;
