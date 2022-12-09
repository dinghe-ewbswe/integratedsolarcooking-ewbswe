import { ContainerCol } from "../GlobalStyles";
import NavigationBar from "../components/NavigationBar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ContactScreen() {
  return (
    <>
      <NavigationBar />
      <ContainerCol>
        <div style={{ display: "flex" }}>Contact Person</div>
      </ContainerCol>
    </>
  );
}

export default ContactScreen;
