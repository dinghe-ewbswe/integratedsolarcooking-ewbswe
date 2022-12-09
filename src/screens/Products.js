import { ContainerCol } from "../GlobalStyles";
import NavigationBar from "../components/NavigationBar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "../data/Products.json";
import Prod1 from "../images/prod1.png";
import Prod2 from "../images/prod2.jpeg";
import Prod3 from "../images/prod3.png";

function ProductsScreen() {
  function PrintImage(props) {
    console.log(props.name);
    if (props.name == 0) {
      return <Card.Img variant="top" src={Prod1} />;
    } else if (props.name == 1) {
      return <Card.Img variant="top" src={Prod2} />;
    } else if (props.name == 2) {
      return <Card.Img variant="top" src={Prod3} />;
    }
  }
  return (
    <>
      <NavigationBar />
      <ContainerCol>
        <Row xs={1} md={3} className="g-4">
          {data.map((item, idx) => (
            <Col>
              <Card style={{ width: "20em" }}>
                <PrintImage name={idx} />
                <Card.Body>
                  <h2>{item.Name}</h2>
                  <Card.Text>
                    {" "}
                    <span style={{ fontWeight: "bold" }}>
                      Entrepreneur:
                    </span>{" "}
                    <div>
                      {item.Entrepreneur.split(", ").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}{" "}
                    </div>
                    <span style={{ fontWeight: "bold" }}>Price:</span>{" "}
                    {item.Price} <br />
                    <span style={{ fontWeight: "bold" }}>Info:</span>{" "}
                    {item.Info} <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </ContainerCol>
    </>
  );
}

export default ProductsScreen;
