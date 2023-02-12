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
      <ContainerCol className="sidebardiv">
        <div className="sidebartitle" onClick={() => navigate("/SolarCooker")}>
          {" "}
          About Solar Cooker
        </div>
        <div
          className="subsidebartitle"
          onClick={() => (window.location.href = "#HowtheSolarCookersWork")}
        >
          {" "}
          How the Solar Cookers Work
        </div>
        <div
          className="subsidebartitle"
          onClick={() => (window.location.href = "#HowtoUse")}
        >
          {" "}
          How To Use a Solar Cooker
        </div>
        <div
          className="subsidebartitle"
          onClick={() => (window.location.href = "#TypeofSolarCooker")}
        >
          {" "}
          Type of Solar Cooker
        </div>
      </ContainerCol>
      <ContainerCol className="sidebardiv">
        <div className="sidebartitle" onClick={() => navigate("/Products")}>
          {" "}
          Product
        </div>{" "}
        {/* <DropdownButtonProduct title={"Product"}></DropdownButtonProduct> */}
      </ContainerCol>
      <ContainerCol className="sidebardiv">
        <div
          className="sidebartitle"
          onClick={() => navigate("/FirelessCooker")}
        >
          {" "}
          Fireless Cooker
        </div>
      </ContainerCol>
      <ContainerCol className="sidebardiv">
        <div
          className="sidebartitle"
          onClick={() => navigate("/FuelSavingStove")}
        >
          {" "}
          Fuel Saving Stove{" "}
        </div>
      </ContainerCol>
      <ContainerCol className="sidebardiv">
        <div className="sidebartitle" onClick={() => navigate("/Contact")}>
          Contact
        </div>
      </ContainerCol>
    </div>
  );
}
