import React, { Fragment, useEffect } from "react";
import {
  Container,
  Carousel,
  Tabs,
  Tab,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { InfoConsumer } from "../../libs/contextLib";
import { ReactComponent as Github } from "../../images/svgs/github.svg";
import { ReactComponent as WebPage } from "../../images/svgs/webPage.svg";
import { imgProperties, technologiesType } from "../../libs/projectData";
import "../../styles/Tabs.css";

const Details: React.FC = (props) => {
  //Start at the top of the rendered component
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Use Location and History to determine the current project being loaded.
  const history = useHistory();
  const location = useLocation<number>();
  const currentProject = location.state;

  //Render images for carousel items:
  const renderCarouselItems = (imagesArray: imgProperties[]) => {
    return imagesArray.map((image: imgProperties) => {
      return (
        <Carousel.Item style={{ padding: "3vh" }}>
          <img
            className="d-block flex w-75"
            src={image.src}
            alt={image.title}
          />
          <p
            className="font-weight-lighter tabsContent"
            style={{ textAlign: "center" }}
          >
            {image.title}
          </p>
        </Carousel.Item>
      );
    });
  };

  //Render Inatllation instructions:
  const renderInstallInstructions = (installArray: string[]) => {
    return installArray.map((instruction: string, index) => {
      return <p key={index}>{instruction}</p>;
    });
  };

  // Render Project technologies
  const renderTechnologies = (info: technologiesType[]) => {
    return (
      <Row style={{ paddingTop: "5vh" }}>
        {info.map((technoloy: technologiesType, index) => {
          return (
            <Col key={index} sm={3} className="mx-auto mb-5">
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
        const {
          headerTitle,
          appDescription,
          description,
          images,
          liveLink,
          repoURL,
          technologies,
          install,
          devTime,
        } = currentProject
          ? value.projectInfo![currentProject]
          : value.projectInfo![0];
        return (
          <div className="details">
            <Fragment>
              {/* Project text details */}
              <Container className="homeDiv align-items-center">
                <Button
                  variant="outline-info"
                  onClick={() => {
                    history.push(`/projects`);
                  }}
                >
                  Back to Projects
                </Button>
                <h1
                  style={{ textAlign: "center", color: "var(--mutedBlue)" }}
                  className="font-weight-lighter detailsHeader"
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
                <p>
                  <a
                    style={{ padding: "1vh" }}
                    href={repoURL}
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
                  {/* Conditionally Render live link from site */}
                  {liveLink && (
                    <a
                      style={{ padding: "1vh" }}
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WebPage
                        className="socialIcons"
                        style={{
                          textShadow: "2px",
                          width: "5vmin",
                        }}
                      />
                    </a>
                  )}
                </p>
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
                    {images[1] ? (
                      <>
                        <Carousel interval={null}>
                          {renderCarouselItems(images)}
                        </Carousel>
                      </>
                    ) : (
                      <>
                        <img
                          className="soloImage"
                          src={images[0].src}
                          alt={headerTitle}
                        />
                        <p
                          style={{ textAlign: "center" }}
                          className="font-weight-lighter tabsContent"
                        >
                          {images[0].title}
                        </p>
                      </>
                    )}
                    {/* Carousel Images */}
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
                <p style={{ textAlign: "center", paddingTop: "3vh" }}>
                  {currentProject !== 0 && (
                    <Button
                      style={{ marginRight: "2vw" }}
                      onClick={() => {
                        history.push({
                          pathname: "/details",
                          state: currentProject - 1,
                        });
                        window.scrollTo(0, 0);
                      }}
                      variant="outline-info"
                    >
                      Prev
                    </Button>
                  )}
                  {currentProject + 1 !== value.projectInfo?.length && (
                    <Button
                      style={{ paddingLeft: "1vh" }}
                      onClick={() => {
                        history.push({
                          pathname: "/details",
                          state: currentProject + 1,
                        });
                        window.scrollTo(0, 0);
                      }}
                      variant="outline-info"
                    >
                      Next
                    </Button>
                  )}
                </p>
              </Container>
            </Fragment>
          </div>
        );
      }}
    </InfoConsumer>
  );
};

export default Details;
