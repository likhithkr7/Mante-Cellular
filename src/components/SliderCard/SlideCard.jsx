import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({ title, desc, cover, note }) => {
  return (
    <Container style={{ textAlign: "center" }}>
        <h5>{title}</h5>
        <p>{desc}</p>
        <p>{note}</p>
      {/* <Col md={6}>
          <img src={cover} alt="#" />
        </Col> */}
    </Container>
  );
};

export default SlideCard;
