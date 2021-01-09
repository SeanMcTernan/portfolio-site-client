import React from "react";
import { Container, Row } from "react-bootstrap";
import { InfoConsumer } from "../../libs/contextLib";

import InfoCards from "../elements/InfoCard";

const Projects: React.FC = (props) => {
  return (
    <Container className="homeDiv projectsDiv">
      <Row style={{ paddingBottom: "10vh" }}>
        <InfoConsumer>
          {(value) => {
            return value.projectInfo!.map((item) => {
              return <InfoCards key={item.id} item={item} />;
            });
          }}
        </InfoConsumer>
      </Row>
    </Container>
  );
};

export default Projects;
