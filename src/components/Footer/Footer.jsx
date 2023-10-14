import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="logo">
          <ion-icon name="bag"></ion-icon>
          <h1>Important Note</h1>
        </div>
        <p>
          Currently online payment is not enabled due to technical issues. Will
          be updated shortly... To avail best offers please contact Ph: +91
          9148114488.
        </p>
        <h2>Contact Us</h2>
        <ul>
          <li>
            70 Washington Square South, New York, NY 10012, United States{" "}
          </li>
          <li>Email: jeevanmanjunath16@gmail.com</li>
          <li>Phone: +91 9148114488</li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
