import "./LandingScreen.css";
import React from "react";
import GlobalStyle from "../GlobalStyles";
import { useNavigate } from "react-router";
import SidebarMenu from "../components/SidebarMenu";
import { ContainerCol } from "../GlobalStyles";

function LandingScreen(props) {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}
      <ContainerCol className="landingDiv">
        <div
          style={{
            height: "25rem",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            className={"LandingBackgroundFireless"}
            style={{ width: "30%", height: "100%" }}
            onClick={() => navigate("/FirelessCooker")}
          >
            <h1 className="h1Font">Fireless Cooker</h1>
          </div>
          <div
            className={"LandingBackground"}
            style={{ width: "40%", height: "100%" }}
            onClick={() => navigate("/SolarCooker")}
          >
            <h1 className="h1Font">Solar Cooker</h1>
          </div>
          <div
            className={"LandingBackgroundFuel"}
            style={{ width: "30%", height: "100%" }}
            onClick={() => navigate("/FuelSavingStove")}
          >
            <h1 className="h1Font">Fuel Saving Stove</h1>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}></div>
        <div className="Introtext">
          <h1>Integrated Solar Cooking</h1>
          Integrated solar cooking (ISC) can improve both health and economy for
          families that use firewood, charcoal, kerosene or gas for cooking. A
          transition to ISC will reduce deforestation and also reduce carbon
          emission and thus reduce global warming.
          <br />
          <button
            className="ReadMoreButton"
            onClick={() => navigate("/AboutSolarCooking")}
          >
            {" "}
            <span>Read more</span>
          </button>{" "}
          <br />
          <br />
          <b style={{ fontSize: "20px" }}>
            If you sell equipment for integrated solar cooking and want your
            products to be seen on this web site send an e-mail to ….
          </b>
        </div>{" "}
      </ContainerCol>
    </>
  );
}

export default LandingScreen;
