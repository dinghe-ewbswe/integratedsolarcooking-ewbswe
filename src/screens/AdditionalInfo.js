import { ContainerCol } from "../GlobalStyles";
import GlobalStyle from "../GlobalStyles";
import SidebarMenu from "../components/SidebarMenu";
import { FaExternalLinkAlt } from "react-icons/fa";

function AdditionalInfo(props) {
  return (
    <>
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}

      <ContainerCol className="landingDiv">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <div
              style={{
                marginTop: "3em",
                marginBottom: "3em",
                paddingLeft: "100px",
                paddingRight: "100px",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Read More</h2>
              <div style={{ marginBottom: "1em", textAlign: "center" }}>
                There is a lot of information about solar cooking to be found on
                internet. Here are some examples:{" "}
              </div>
              <div>
                <ul>
                  <li>
                    <div style={{ marginBottom: "1em" }}>
                      <text>
                        One of the largest information sites. This website
                        presents how to construct solar cookers, how they work,
                        what others do and vendors in different countries.
                      </text>{" "}
                      <a href="https://solarcooking.fandom.com">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </li>

                  <li>
                    <div style={{ marginBottom: "1em" }}>
                      A US located organisation promoting solar cookers in three
                      ways, advocacy, building capacity and research.{" "}
                      <a href="https://www.solarcookers.org">
                        <FaExternalLinkAlt />
                      </a>{" "}
                    </div>
                  </li>
                  <li>
                    {" "}
                    <div style={{ marginBottom: "1em" }}>
                      Map showing location of solar cooking vendors. Click on
                      the symbol close to your place and you will get more
                      information.{" "}
                      <a href="https://umap.openstreetmap.fr/sv/map/vendors-of-integrated-solar-cooking-kenya_873172">
                        <FaExternalLinkAlt />
                      </a>{" "}
                      <div style={{ textAlign: "center" }}>
                        <object
                          type="text/html"
                          data="https://umap.openstreetmap.fr/sv/map/vendors-of-integrated-solar-cooking-kenya_873172"
                          width="1000px"
                          height="600px"
                        ></object>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContainerCol>
    </>
  );
}

export default AdditionalInfo;
