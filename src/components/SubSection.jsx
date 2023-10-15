import { Container, Row } from "react-bootstrap";
import SubProduct from "./Product/SubProduct";

const SubSection = ({ title, bgColor, productItems, addToCart }) => {
  return (
    <section style={{ background: bgColor }}>
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <h6>To avail best offers please contact Ph: +91 9148114488</h6>
        </div>
        <Row className="justify-content-center">
          {productItems.map((productItem) => {
            return (
              <SubProduct
                key={productItem.id}
                title={title}
                productItem={productItem}
                addToCart={addToCart}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default SubSection;
