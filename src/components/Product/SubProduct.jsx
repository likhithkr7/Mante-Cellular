import { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { DataContainer } from "../../App";
import { toast } from "react-toastify";

const Product = ({ title, productItem, addToCart }) => {
    const router = useNavigate();
    const handelClick = () => {
        window.location.href = `https://forms.gle/cZzz1LzdpQaxuERL8`
      };
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <img loading="lazy" src={productItem.imgUrl} alt="" />
      <div className="product-details" style={{ textAlign: "center" }}>
        <h3>{productItem.productName}</h3>
        <div className="price">
          <h6>Starts @ {productItem.price} INR</h6>
        </div>
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
                            Enquire Now
                          </button>
      </div>
    </Col>
  );
};

export default Product;
