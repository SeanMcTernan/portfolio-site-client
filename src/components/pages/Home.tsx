import React from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Container fluid="xl">
          <Row>
            <Col>
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col>
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
