import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
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
        } = value.detailInfo!;
        return (
          <Fragment>
            <Container fluid className="homeDiv align-items-center">
              <h1 className="display-1. font-weight-bold">{headerTitle}</h1>
              <h4 className="display-5">{headerSubTitle}</h4>
              <p>{headerText}</p>
            </Container>
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
          </Fragment>
        );
      }}
    </InfoConsumer>
  );
};

export default Details;
