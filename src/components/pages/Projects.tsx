import React from "react";
import { Container, Row } from "react-bootstrap";
import { InfoConsumer } from "../../libs/contextLib";
import InfoCards from "../elements/infoCards";

const Projects: React.FC = (props) => {
  return (
    <Container>
      <Row>
        <InfoConsumer>
          {(values) => {
            return <h2>{values}</h2>;
          }}
        </InfoConsumer>
      </Row>
    </Container>
  );
};

export default Projects;
