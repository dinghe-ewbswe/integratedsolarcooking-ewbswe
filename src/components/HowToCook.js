import Stack from "react-bootstrap/Stack";
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
import step4 from "../images/step4.png";

function HowToCook() {
  return (
    <div style={{ marginTop: "3em", marginBottom: "3em" }}>
      <h1 id="How the Solar Cookers Work">How the Solar Cookers Work</h1>
      <Stack gap={3}>
        <div>
          1. A black pot captures the sunshine and turns it into warmth. <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={step1} alt="logo" style={{ height: "15em" }} />{" "}
          </div>
        </div>
        <div>
          2. Aluminum foil reflects more sunshine to the pot. <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={step2} alt="logo" style={{ height: "15em" }} />{" "}
          </div>{" "}
        </div>

        <div>
          3. The wider the area is that captures the sun, the more power you
          get. You can use a lens or a parabolic mirror. <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={step3} alt="logo" style={{ height: "15em" }} />{" "}
          </div>{" "}
        </div>
        <div>
          4. To keep the heat, use a transparent layer above the pot. Heat loss
          can also be prevented with insulation on the sides. <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={step4} alt="logo" style={{ height: "15em" }} />{" "}
          </div>{" "}
        </div>
      </Stack>
    </div>
  );
}

export default HowToCook;
