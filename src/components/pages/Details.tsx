import React, { Fragment } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { ReactComponent as Github } from "../../svgs/github.svg";
import { InfoConsumer } from "../../libs/contextLib";

const Details: React.FC = (props) => {
  return (
    <InfoConsumer>
      {(value) => {
        const {
          id,
          headerTitle,
          headerSubTitle,
          headerText,
          title,
          description,
          img,
          maps,
        } = value.projectInfo![0];
        return (
          <Fragment>
            {/* Project text details */}
            <Container className="homeDiv align-items-center">
              <h1
                style={{ textAlign: "center" }}
                className="display-1. font-weight-bold"
              >
                {headerTitle}
              </h1>
              <h4 className="display-5">{headerSubTitle}</h4>
              <p>{headerText}</p>
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
                    width: "5vmin",
                  }}
                />
              </a>
            </Container>
            {/* Nav Links */}
            <Container style={{ paddingBottom: "20vh" }}>
              <Tabs
                defaultActiveKey="project-breakdown"
                id="details-tab"
                className="mb 25"
              >
                <Tab eventKey="project-breakdown" title="Project Breakdown">
                  <h2 className="mb-3">{title}</h2>
                  <p>{description}</p>
                  <img
                    src={img}
                    alt={title}
                    className="img-thumbnail img-fluid"
                  />
                </Tab>
                <Tab
                  eventKey="project-technologies"
                  title="Project Technologies"
                >
                  <h2 className="mb-3">{title}</h2>
                  <p>{description}</p>
                  <img
                    src={img}
                    alt={title}
                    className="img-thumbnail img-fluid"
                  />
                </Tab>
                <Tab eventKey="motivations" title="Project Technologies">
                  <h2 className="mb-3">Install Instructions</h2>
                  <p>{description}</p>
                </Tab>
              </Tabs>
            </Container>
          </Fragment>
        );
      }}
    </InfoConsumer>
  );
};

export default Details;
