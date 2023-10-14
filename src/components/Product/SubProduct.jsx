import { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { DataContainer } from "../../App";
import { toast } from "react-toastify";

const Product = ({ title, productItem, addToCart }) => {
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <img loading="lazy" src={productItem.imgUrl} alt="" />
      <div className="product-details" style={{ textAlign: "center" }}>
        <h3>{productItem.productName}</h3>
        <div className="price">
          <h4>₹{productItem.price}</h4>
        </div>
      </div>
    </Col>
  );
};

export default Product;
