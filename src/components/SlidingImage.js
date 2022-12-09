import Carousel from "react-bootstrap/Carousel";
import testImg from "../images/b.jpg";
import img2 from "../images/solarslide2.jpg";
import img3 from "../images/solarslide3.jpg";

function SlidingImage() {
  return (
    <Carousel style={{ marginTop: "5em" }}>
      <Carousel.Item interval={3000} style={{ height: "25em" }}>
        <img className="d-block w-100" src={testImg} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: "25em" }}>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ height: "25em" }}>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlidingImage;
