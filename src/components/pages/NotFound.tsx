import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { ReactComponent as FourOhFour } from "../../svgs/fourohfour.svg";
import "../../styles/Animations.css";

class Home extends React.Component {
  render() {
    return (
      <Container fluid className="homeDiv">
        <Row className="align-items-center">
          <Col lg={5} sm={6} md={6} className="d-flex offset-lg-2">
            <p>
              <Jumbotron>
                <h1>Page not found</h1>
                <p>
                  We're sorry, the page you requested could not be found. Please
                  go back to the homepage a look for another page.
                </p>
                <p>
                  <LinkContainer to="home">
                    <Button
                      className="landingButton"
                      variant="outline-info"
                      size="lg"
                    >
                      Go Home
                    </Button>
                  </LinkContainer>
                </p>
              </Jumbotron>
            </p>
          </Col>
          <Col lg={3} sm={6} md={6}>
            <p>
              <FourOhFour
                style={{
                  marginRight: "20px",
                  width: "100%",
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
