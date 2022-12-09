import "../App.css";
import styled from "styled-components";
import GlobalStyles, {
  Button,
  ContainerCol,
  ContainerRow,
} from "../GlobalStyles";
import React from "react";
import NavigationBar from "../components/NavigationBar";

function AboutUsScreen() {
  return (
    <>
      <NavigationBar />
      <ContainerRow>
        <div className={"Filter"}>Filter</div>
        <div>articles</div>
      </ContainerRow>
    </>
  );
}

export default AboutUsScreen;
