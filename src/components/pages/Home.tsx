import React from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { ReactComponent as Laptop } from "../../svgs/laptop.svg";
import "../../styles/Animations.css";

class Home extends React.Component {
  render() {
    return (
      <Container fluid className="homeDiv">
        <Row>
          <Col lg={5} sm={6} md={6} className="d-flex offset-lg-2">
            <p>
              <Jumbotron>
                <h1>Welcome,</h1>
                <p>
                  Thank you for taking the time to visit my portfolio website.
                  If you have any questions, please contact me or ask them to
                  the chatbot provided.
                </p>
                <p>
                  <Button variant="outline-info" size="lg">
                    View Projects
                  </Button>
                </p>
              </Jumbotron>
            </p>
          </Col>
          <Col className="heroColumn" lg={5} sm={6} md={6}>
            <p>
              <Laptop
                className="heroImage"
                style={{
                  width: "90%",
                }}
              />
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
