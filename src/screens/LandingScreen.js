import "../App.css";
import { ContainerCol } from "../GlobalStyles";
import React from "react";
import NavigationBar from "../components/NavigationBar";

function LandingScreen() {
  return (
    <>
      <NavigationBar />

      <ContainerCol style={{ paddingBottom: "3em" }}>
        <div className={"LandingBackground"}>
          <h1 className={"LadningTitle"}>Integrated Solar Cooking</h1>
        </div>
        <div style={{ marginTop: "2em", fontSize: "24px" }}>
          EWB Sweden is assisting entrepreneurs to increase the diffusion of
          integrated solar cooking (ISC) since we know it can improve both
          health and economy for families that use firewood, charcoal, kerosene
          or gas for cooking. A transition to ISC will reduce deforestation and
          also reduce carbon emission and thus reduce global warming.
          <br />
          <br />
          To start with, the page will target self-help groups in Kenya. This
          page provides the following information:
          <ul>
            <li>
              How solar cookers can increase the state of health as well as save
              money, fuel and the environment.
            </li>
            <li>How the cookers work and how they are used.</li>
            <li>
              How to combine them with other measures when the sun does not
              shine (Integrated Solar cooking, ISC).
            </li>
            <li>
              Where you can buy the equipment. The self-help groups will also
              get information about how to build your own solar cooker and a
              fireless cooker from material easy to achieve in the
              neighbourhoods.
            </li>
            <li>
              There will also be advice for self-help groups that want to start
              their own business by producing and selling equipment.
            </li>
          </ul>
        </div>
      </ContainerCol>
    </>
  );
}

export default LandingScreen;
