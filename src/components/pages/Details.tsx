import React, { Fragment } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { ReactComponent as Github } from "../../svgs/github.svg";
import { InfoConsumer } from "../../libs/contextLib";
import "../../styles/Details.css";

const Details: React.FC = (props) => {
  return (
    <InfoConsumer>
      {(value) => {
        const {
          id,
          headerTitle,
          headerText,
          title,
          description,
          img,
          maps,
        } = value.projectInfo![0];
        return (
          <div className="details">
            <Fragment>
              {/* Project text details */}
              <Container className="homeDiv align-items-center">
                <h1
                  style={{ textAlign: "center" }}
                  className="font-weight-bold"
                >
                  {headerTitle}
                </h1>
                <p className="tabsContent">{headerText}</p>
              </Container>
              {/* GitHub Links */}
              <Container
                style={{ paddingBottom: "3vh", textAlign: "center" }}
                className="mt 5 "
              >
                <a
                  href="https://github.com/SeanMcTernan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    className="socialIcons"
                    style={{
                      textShadow: "2px",
                      width: "5vmin",
                    }}
                  />
                </a>
              </Container>
              {/* Nav Links */}
              <Container style={{ paddingBottom: "20vh" }}>
                <Tabs defaultActiveKey="project-breakdown" id="details-tab">
                  <Tab eventKey="project-breakdown" title="Project Breakdown">
                    <h2 className="tabsContent">{title}</h2>
                    <p className="tabsContent">{description}</p>
                    <img className="tabsContent" src={img} alt={title} />
                  </Tab>
                  <Tab
                    eventKey="project-technologies"
                    title="Project Technologies"
                  >
                    <h2 className="tabsContent">{title}</h2>
                    <p className="tabsContent">{description}</p>
                    <img className="tabsContent" src={img} alt={title} />
                  </Tab>
                  <Tab eventKey="motivations" title="Project Technologies">
                    <h2 className="tabsContent">Install Instructions</h2>
                    <p className="tabsContent">{description}</p>
                  </Tab>
                </Tabs>
              </Container>
            </Fragment>
          </div>
        );
      }}
    </InfoConsumer>
  );
};

export default Details;
