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
            <Container fluid className="homeDiv align-items-center">
              <h1 className="display-1. font-weight-bold">{headerTitle}</h1>
              <h4 className="display-5">{headerSubTitle}</h4>
              <p>{headerText}</p>
            </Container>
            {/* GitHub Links */}
            <Container className="mt 5">
              <Row className="justify-content-center">
                <Col>
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
                </Col>
              </Row>
            </Container>
            <Container>
              <Tabs defaultActiveKey="aboutPlace" id="details-tab">
                <Tab eventKey="aboutPlace" title="AboutPlace">
                  <h2 className="mb-3">{title}</h2>
                  <p>{description}</p>
                  <img
                    src={img}
                    alt={title}
                    className="img-thumbnail img-fluid"
                  />
                </Tab>
                <Tab eventKey="profile" title="Profile"></Tab>
                <Tab eventKey="contact" title="Contact"></Tab>
              </Tabs>
            </Container>
          </Fragment>
        );
      }}
    </InfoConsumer>
  );
};

export default Details;
