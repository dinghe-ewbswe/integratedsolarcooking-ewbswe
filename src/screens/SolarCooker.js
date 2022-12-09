import "../App.css";
import styled from "styled-components";
import GlobalStyles, {
  Button,
  ContainerCol,
  ContainerRow,
} from "../GlobalStyles";
import React from "react";
import NavigationBar from "../components/NavigationBar";
import SlidingImage from "../components/SlidingImage";
import Timeline from "../components/SolarCookingTimeline";
import Stack from "react-bootstrap/Stack";
import HowToCook from "../components/HowToCook";
import Types from "../components/Types";
import TableOfContents from "../components/TableOfContents";

const SlidingContainer = styled.div`
  border-bottom: 1px solid black;
  height: 25em;
  justify-content: center;
  align-items: center;
  display: flex;
`;

function SolarCookerScreen() {
  return (
    <>
      <NavigationBar />
      <ContainerCol>
        <SlidingImage></SlidingImage>
        <div style={{ display: "flex" }}>
          <div style={{ width: "80%" }}>
            <div style={{ marginTop: "3em", marginBottom: "3em" }}>
              <h1 id="Introduction of Solar Cooker">
                Introduction of Solar Cooker
              </h1>
              <text style={{ fontSize: "22px" }}>
                Integrated solar cooking is to combine solar cooking with
                fireless cooking and fuel saving stoves. You should always be
                prepared to change the method of cooking according to changes in
                weather.
                <br />
              </text>
            </div>
            <Timeline></Timeline>
            <hr class="mt-2 mb-3" />
            <HowToCook />
            <hr class="mt-2 mb-3" />
            <Types />
          </div>
          <TableOfContents />
        </div>
      </ContainerCol>
    </>
  );
}

export default SolarCookerScreen;
