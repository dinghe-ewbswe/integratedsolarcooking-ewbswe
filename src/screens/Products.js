import { ContainerCol } from "../GlobalStyles";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "../data/Products.json";
import Prod1 from "../images/prod1.png";
import Prod2 from "../images/prod2.jpeg";
import Prod3 from "../images/q2.png";
import SidebarMenu from "../components/SidebarMenu";
import GlobalStyle from "../GlobalStyles";

function ProductsScreen(props) {
  function PrintImage(props) {
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
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}
      <ContainerCol className="landingDiv">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <h2>Where to Buy your Cooker</h2>
          <br />
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
          </Row>{" "}
        </div>
      </ContainerCol>
    </>
  );
}

export default ProductsScreen;
