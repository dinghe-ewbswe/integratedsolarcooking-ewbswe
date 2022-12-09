import { Button, ContainerRow } from "../GlobalStyles";
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  DropdownButton,
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
          onClick={() => navigate("/")}
        >
          <img src={ewblogo} alt="Logo" style={{ height: "2.5em" }} />
        </div>
      </ContainerRow>
      <ContainerRow>
        <DropdownButton title={"AboutUs"}></DropdownButton>
      </ContainerRow>
      <ContainerRow>
        <DropdownButtonProduct title={"Product"}></DropdownButtonProduct>
      </ContainerRow>
      <ContainerRow>
        <Button
          className="NavButton"
          onClick={() => {
            navigate("/Contact");
          }}
        >
          Contact
        </Button>
      </ContainerRow>
      <ContainerRow>
        <DropdownButtonDonate title={"Donate"}></DropdownButtonDonate>
      </ContainerRow>
    </Navivationbar>
  );
}

export default NavigationBar;
