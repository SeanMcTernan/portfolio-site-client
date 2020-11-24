import React, { Fragment } from "react";
import { Container, Carousel, Tabs, Tab, Row, Col } from "react-bootstrap";
import { ReactComponent as Github } from "../../svgs/github.svg";
import { InfoConsumer } from "../../libs/contextLib";
import { imgProperties, technologiesType } from "../../libs/projectData";
import "../../styles/Details.css";

const Details: React.FC = (props) => {
  //Render images for carousel items:
  const renderCarouselItems = (imagesArray: imgProperties[]) => {
    return imagesArray.map((image: imgProperties) => {
      return (
        <Carousel.Item style={{ padding: "3vh" }}>
          <img
            className="d-block flex w-50"
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
            <Col sm={2} className="col-10 mx-auto mb-5">
              <p style={{ textAlign: "center" }}>
                <img
                  style={{ width: "60%", marginBottom: "-1vh" }}
                  src={technoloy.imgSrc}
                  alt={`${technoloy.name}-Logo`}
                />
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
          repoURL,
          technologies,
          install,
          devTime,
        } = value.projectInfo![0];
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
              </Container>
            </Fragment>
          </div>
        );
      }}
    </InfoConsumer>
  );
};

export default Details;
