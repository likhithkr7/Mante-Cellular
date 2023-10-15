import { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { DataContainer } from "../../App";
import { toast } from "react-toastify";

const Product = ({ title, productItem, addToCart }) => {
  const { setSelectedProduct } = useContext(DataContainer);
  const router = useNavigate();
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const handelClick = () => {
    setSelectedProduct(productItem);
    localStorage.setItem(
      `selectedProduct-${productItem.id}`,
      JSON.stringify(productItem)
    );
    router(`/shop/${productItem.id}`);
  };
  const handelAdd = (productItem) => {
    addToCart(productItem);
    toast.success("Product has been added to cart!");
  };
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null}
      <img
        loading="lazy"
        onClick={() => handelClick()}
        src={productItem.imgUrl}
        alt=""
      />
      <div className="product-details" style={{ textAlign: "center" }}>
        <h3 onClick={() => handelClick()}>{productItem.productName}</h3>
        <button
          onClick={() => handelClick()}
          style={{
            backgroundColor: "#04AA6D",
            border: "none",
            color: "white",
            padding: "10px",
            textAlign: "center",
            display: "inline-block",
            fontSize: "16px",
            margin: "4px 2px",
            borderRadius: "8px",
          }}
        >
          Buy Now
        </button>
      </div>
    </Col>
  );
};

export default Product;
