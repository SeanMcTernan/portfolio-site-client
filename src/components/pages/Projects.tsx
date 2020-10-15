import React from "react";
import { Container, Row } from "react-bootstrap";
import { InfoConsumer } from "../../libs/contextLib";
import { Button } from "react-bootstrap";
import InfoCards from "../elements/infoCards";

const Projects: React.FC = (props) => {
  return (
    <Container>
      <Row>
        <InfoConsumer>
          {(value) => {
            return (
              <Button
                onClick={() => {
                  console.log(value.technologies);
                }}
              >
                Click me
              </Button>
            );
          }}
        </InfoConsumer>
      </Row>
    </Container>
  );
};

export default Projects;
