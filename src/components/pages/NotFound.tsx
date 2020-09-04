import React from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { ReactComponent as Logo } from "../../svgs/logo.svg";
import "../../styles/Animations.css";

class Home extends React.Component {
  render() {
    return (
      <Container fluid className="homeDiv">
        <Row className="align-items-center">
          <Col lg={12} className="d-flex offset-lg-5">
            <p>
              <Logo
                className="heroImage"
                style={{
                  marginRight: "20px",
                  width: "80%",
                }}
              />
            </p>
          </Col>
          <Col lg={12} className="d-flex offset-lg-2">
            <p>
              <Jumbotron>
                <h1>Page not found</h1>
                <p>
                  We're sorry, the page you requested could not be found. Please
                  go back to the homepage a look for another page.
                </p>
                <p>
                  <Button
                    className="landingButton"
                    variant="outline-info"
                    size="lg"
                  >
                    Go Home
                  </Button>
                </p>
              </Jumbotron>
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
