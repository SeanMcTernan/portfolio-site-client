import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { ReactComponent as Laptop } from "../../svgs/laptop.svg";
import "../../styles/Animations.css";

const Home: React.FC = () => {
  return (
    <Container fluid className="homeDiv">
      <Row>
        <Col lg={5} sm={6} md={6} className="d-flex offset-lg-2">
          <p>
            <Jumbotron>
              <h1>Welcome Seán Mc Ternan's Portfolio</h1>

              <p>
                Thank you for taking the time to visit my portfolio website. If
                you have any questions, please contact me or ask them to the
                chatbot provided. To view hidden code repositories, download my
                resume and more, please login.
              </p>
              <p>
                <LinkContainer to="projects">
                  <Button variant="outline-info" size="lg">
                    View Projects
                  </Button>
                </LinkContainer>
              </p>
            </Jumbotron>
          </p>
        </Col>
        <Col className="heroColumn" lg={5} sm={6} md={6}>
          <p>
            <Laptop
              className="heroImage"
              style={{
                width: "80%",
              }}
            />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
