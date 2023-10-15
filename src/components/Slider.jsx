import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import SlideCard from "./SliderCard/SlideCard";
import { SliderData } from "../utils/products";

const SliderHome = () => {
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className="homeSlide">
      <Container>
        <h1 style={{ "text-align": "center", marginTop: "0" }}>
          Mante Cellular
        </h1>
        <Slider {...settings}>
          {SliderData.map((value, index) => {
            return (
              <SlideCard
                key={index}
                title={value.title}
                cover={value.cover}
                desc={value.desc}
                note={value.note}
              />
            );
          })}
        </Slider>
      </Container>
    </section>
  );
};

export default SliderHome;
