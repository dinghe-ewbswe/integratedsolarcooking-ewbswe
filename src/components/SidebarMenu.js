import { ContainerCol } from "../GlobalStyles";
import { useNavigate } from "react-router-dom";
import "./SidebarMenu.css";

export default function SidebarMenu() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: "50px" }}>
      <ContainerCol
        className="LogoTitle"
        onClick={() => navigate("/Integratedsolarcooking")}
      >
        {/* <img src={ewblogo} alt="Logo" style={{ height: "2.5em" }} /> */}
        <p style={{ fontSize: "24px", color: "#38ba7d" }}>
          Integrated Solar Cooking
        </p>
      </ContainerCol>
      <ContainerCol
        onClick={() => navigate("/SolarCooker")}
        className="sidebartitle"
      >
        About Solar Cooker
        {/* <DropdownButton title={"AboutUs"}></DropdownButton> */}
      </ContainerCol>
      <ContainerCol
        onClick={() => navigate("/Products")}
        className="sidebartitle"
      >
        Products
        {/* <DropdownButtonProduct title={"Product"}></DropdownButtonProduct> */}
      </ContainerCol>
      <ContainerCol
        onClick={() => navigate("/Contact")}
        className="sidebartitle"
      >
        Contact
      </ContainerCol>
    </div>
  );
}
