import React from "react";
import { Button, Col, Container, Image, Jumbotron, Row } from "react-bootstrap";
import browser from "../../svgs/browser.svg";
import logo from "../../svgs/logo.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="homeDiv fixed">
        <Container fluid>
          <Row className="align-items-center">
            <Col sm={6} md={6} className="d-flex offset-md-3">
              <p>
                <Image
                  src={logo}
                  alt="logo"
                  fluid
                  style={{
                    width: "100%",
                  }}
                />
              </p>
            </Col>
            <Col sm={6} md={6}>
              <p>
                <Image
                  src={logo}
                  alt="logo"
                  fluid
                  style={{
                    width: "100%",
                  }}
                />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
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
