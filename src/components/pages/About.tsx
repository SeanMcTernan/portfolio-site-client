import React, { Fragment, useEffect } from "react";
import { Container, Tabs, Tab, Row, Col } from "react-bootstrap";
import logo from "../../svgs/logo.svg";
import boonmapsLogo from "../../images/Company_Logos/boonmaps-logo-72.png";
import simpleTextingLogo from "../../images/Technologies_Icons/SimpleTexting.svg";
import { InfoConsumer } from "../../libs/contextLib";
import { technologiesType } from "../../libs/projectData";
import "../../styles/Tabs.css";

const About: React.FC = (props) => {
  //Start at the top of the rendered component
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Render Inatllation instructions:
  const renderInstallInstructions = (installArray: string[]) => {
    return installArray.map((instruction: string) => {
      return <p>{instruction}</p>;
    });
  };

  // Render Project technologies
  const renderTechnologies = (info: technologiesType[]) => {
    return (
      <Row style={{ paddingTop: "5vh" }}>
        {info.map((technoloy: technologiesType) => {
          return (
            <Col sm={3} className="mx-auto mb-5">
              <p style={{ textAlign: "center" }}>
                <a
                  className="technologies"
                  href={technoloy.technologiesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ width: "40%", marginBottom: "-1vh" }}
                    src={technoloy.imgSrc}
                    alt={`${technoloy.name}-Logo`}
                  />
                </a>
              </p>
              <a
                className="technologies"
                href={technoloy.technologiesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p
                  style={{ textAlign: "center", color: "var(--mainWhite)" }}
                  className="font-weight-lighter tabsContent"
                >
                  {technoloy.name}
                </p>
              </a>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <InfoConsumer>
      {(value) => {
        const { technologies, install } = value.projectInfo![0];
        return (
          <div className="details">
            <Fragment>
              {/* Project text details */}
              <Container className="homeDiv align-items-center">
                <p style={{ textAlign: "center" }}>
                  <img
                    src={logo}
                    style={{ width: "10%", margin: "1vh" }}
                    alt="Site Logo"
                  />
                </p>
                <h1
                  style={{ textAlign: "center", color: "var(--mutedBlue)" }}
                  className="font-weight-lighter"
                >
                  SEÁN MC TERNAN - FULL STACK DEVELOPER
                </h1>
                <p className="tabsContent">
                  What started out as a necessity to learn to code, quickly grew
                  into a passion of mine that I have dedicated years learning to
                  craft. Coding is now the furthest thing from 'just a job' for
                  me. It's an outlet to engage in challenging tasks, while
                  feeling rewarded by the elegant solutions that are created
                  along the way. Software development is 'The Never Ending
                  Story', as the industry grows and adapts, I too must adapt
                  with it. <br></br>
                  <br></br>Outside of my professional experience I engage in
                  projects that challenge me, yet serve a personal purpose, this
                  not only helps me professionaly, but also scratches the itch I
                  have for challenges and creative solutions. When you get to
                  know me, you will know I am not one to just sit around!
                </p>
              </Container>
              <Container
                style={{ paddingBottom: "3vh", textAlign: "center" }}
                className="mt 5 "
              ></Container>
              {/* Nav Links */}
              <Container style={{ paddingBottom: "20vh" }}>
                <Tabs defaultActiveKey="project-breakdown" id="details-tab">
                  <Tab
                    eventKey="project-breakdown"
                    title="Professional Experience"
                  >
                    {/* BoonMaps Information  */}
                    <a
                      href="https://boonmaps.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={boonmapsLogo}
                        style={{ width: "3vw", marginTop: "2vh" }}
                        alt="Boonamps Logo"
                      />
                    </a>
                    <p className="font-weight-bold tabsContent">
                      Full Stack Developer - Boonmaps
                    </p>
                    <p
                      className="font-weight-lighter"
                      style={{ color: "var(--mutedBlue)" }}
                    >
                      October 2020 - Present
                    </p>
                    <p>
                      Until October 2020
                      <a
                        href="https://boonmaps.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        Boonmaps{" "}
                      </a>
                      was strictly a mobile application for users to explore 3D
                      maps offline for outdoor regions. CEO and founder Frazer
                      Hogg contracted me to create a backend for administrators
                      of the app to upload map data onto the DynamoDB on AWS.
                      Once completed, the next phase will involve building a
                      front end with React for the administrators to login and
                      edit the map information.
                    </p>
                    {/* BoonMaps Information */}
                    {/* SimpleTexting Information  */}
                    <a
                      href="https://simpletexting.net"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={simpleTextingLogo}
                        style={{ width: "3vw", marginTop: "2vh" }}
                        alt="SimpleTexting Logo"
                      />
                    </a>
                    <p className="font-weight-bold tabsContent">
                      Lead Technical Support Engineer - SimpleTexting
                    </p>
                    <p
                      className="font-weight-lighter"
                      style={{ color: "var(--mutedBlue)" }}
                    >
                      FEBRUARY 2018 - Present
                    </p>
                    <p>
                      Daily tasks include querying our Mongo DB Database and
                      logs for unknown issues. Scripting reports and fixes
                      within the database using Node.js and MongoDB. As an after
                      hours project, wrote an entire application via NodeJS to
                      assist support team during emergency overloads. Used
                      Jmeter and open APIs to streamline registration process
                      for newly purchased phone lines. Created landing pages for
                      root domains for our in-house URL shortener. Taught
                      classes to our team on our API endpoints and web-hooks,
                      showing best practice methods for troubleshooting and
                      testing our endpoints.
                    </p>
                    {/* SimpleTexting Information */}
                  </Tab>
                  <Tab
                    eventKey="project-technologies"
                    title="Project Technologies"
                  >
                    <h2 className="tabsContent">Technologies Used</h2>
                    {renderTechnologies(technologies)}
                  </Tab>
                  <Tab eventKey="install" title="Install Instructions">
                    <h2 className="tabsContent">Install Instructions</h2>
                    {renderInstallInstructions(install)}
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

export default About;
