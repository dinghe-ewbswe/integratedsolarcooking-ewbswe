import { Button, ContainerRow } from "../GlobalStyles";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  DropdownButton,
  DropdownAbout,
  DropdownButtonProduct,
  DropdownButtonDonate,
} from "../components/DropdownButton";
import ewblogo from "../images/ewb_logo_RGB.svg";

const Navivationbar = styled.div`
  border-bottom: 1px solid black;
  height: 5em;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

function NavigationBar() {
  const navigate = useNavigate();
  return (
    <Navivationbar>
      <ContainerRow>
        <div
          style={{
            display: "flex",
            direction: "row",
          }}
          onClick={() => navigate("/integratedsolarcooking")}
        >
          {/* <img src={ewblogo} alt="Logo" style={{ height: "2.5em" }} /> */}
          <p style={{ fontSize: "24px", color: "#38ba7d" }}>
            Integrated Solar Cooking
          </p>
        </div>
      </ContainerRow>
      <ContainerRow
        onClick={() => navigate("/SolarCooker")}
        style={{ fontSize: "20px" }}
      >
        About Solar Cooker
        {/* <DropdownButton title={"AboutUs"}></DropdownButton> */}
      </ContainerRow>
      <ContainerRow
        onClick={() => navigate("/Products")}
        style={{ fontSize: "20px" }}
      >
        Products
        {/* <DropdownButtonProduct title={"Product"}></DropdownButtonProduct> */}
      </ContainerRow>
      <ContainerRow
        onClick={() => navigate("/Contact")}
        style={{ fontSize: "20px" }}
      >
        Contact
      </ContainerRow>
      {/* <ContainerRow
        onClick={() => navigate("/Donate")}
        style={{ fontSize: "20px" }}
      >
        Donate{" "}
        <DropdownButtonDonate title={"Donate"}></DropdownButtonDonate>
      </ContainerRow> */}
    </Navivationbar>
  );
}

export default NavigationBar;
