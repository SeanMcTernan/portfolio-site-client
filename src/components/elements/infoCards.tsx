import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import { InfoConsumer } from "../../libs/contextLib";

interface Props {
  id: string;
  headerTitle: string;
  headerSubTitle: string;
  headerText: string;
  img: string;
}

const InfoCards: React.FC<Props> = ({
  id,
  headerTitle,
  headerSubTitle,
  headerText,
  img,
}) => {
  return (
    <InfoConsumer>
      {(data) => (
        <Col lg={4} className="col-10 mx-auto mb-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" alt={headerTitle} src={img} />
            <Card.Body>
              <Card.Title>{headerTitle}</Card.Title>
              <Card.Text>{headerSubTitle}</Card.Text>
              <Button variant="primary">More info</Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </InfoConsumer>
  );
};

export default InfoCards;
