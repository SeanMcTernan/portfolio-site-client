import React from "react";
import { Button, Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import browser from "../../svgs/browser.svg";

class Home extends React.Component {
  render() {
    return (
      <Container fluid className="homeDiv">
        <Row className="align-items-center">
          <Col lg={6} sm={6} className="d-flex sm-3">
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
          <Col className="heroColumn" lg={6} sm={6}>
            <p>
              <Image
                className="heroImage"
                src={browser}
                alt="hero"
                style={{
                  width: "70%",
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

{
  /* <Col className="d-flex offset-md-3">
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
            </Col>
            <Col className="heroColumn">
              <Image
                fluid
                src={browser}
                style={{
                  margin: "auto",
                  display: "block",
                  height: "60vmin",
                  padding: "2rem 1rem",
                }}
                alt="ero"
              />
            </Col> */
}
