import React, { Fragment } from "react";
import { Container, Carousel, Tabs, Tab } from "react-bootstrap";
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
          appDescription,
          description,
          img,
          repoURL,
          install,
          devTime,
        } = value.projectInfo![1];
        return (
          <div className="details">
            <Fragment>
              {/* Project text details */}
              <Container className="homeDiv align-items-center">
                <h1
                  style={{ textAlign: "center", color: "var(--mutedBlue)" }}
                  className="font-weight-lighter"
                >
                  {headerTitle}
                </h1>
                <p className="tabsContent">{appDescription}</p>
              </Container>
              {/* GitHub Links */}
              <Container
                style={{ paddingBottom: "3vh", textAlign: "center" }}
                className="mt 5 "
              >
                <a href={repoURL} target="_blank" rel="noopener noreferrer">
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
                    <h2 className="tabsContent">Motivation</h2>
                    <p className="tabsContent">{description}</p>

                    <p className="font-weight-bold tabsContent">
                      Development Time: {devTime}
                    </p>
                    {/* Carousel Images */}
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block flex w-50"
                          src={img[0].src}
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <p
                            className="font-weight-bold tabsContent"
                            style={{ textShadow: "3px 3px 2px black" }}
                          >
                            Third slide label
                          </p>
                          <p style={{ textShadow: "3px 3px 2px black" }}>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                    {/* Carousel Images */}
                  </Tab>
                  <Tab
                    eventKey="project-technologies"
                    title="Project Technologies"
                  >
                    <h2 className="tabsContent">Technologies Used</h2>
                    <p className="tabsContent">{description}</p>
                  </Tab>
                  <Tab eventKey="install" title="Install Instructions">
                    <h2 className="tabsContent">Install Instructions</h2>

                    <p className="font-weight-bold tabsContent">
                      1. Click on the GitHub link Above.<br></br>2.
                      Clone/Download the Repository.<br></br>
                      {install}
                    </p>
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
