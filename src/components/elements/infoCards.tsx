import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import { InfoConsumer } from "../../libs/contextLib";

interface itemTypes {
  id: number;
  headerTitle: string;
  headerSubTitle: string;
  headerText: string;
  img: string;
}

interface Props {
  item: itemTypes;
}

const InfoCards: React.FC<Props> = ({ item }) => {
  const { id, headerTitle, headerSubTitle, headerText, img } = item;
  return (
    <InfoConsumer>
      {(data) => (
        <Col lg={4} className="col-10 mx-auto mb-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" alt={headerTitle} src={img} />
            <Card.Body>
              <Card.Title>{headerTitle}</Card.Title>
              <Card.Text>{headerText}</Card.Text>
              <Button variant="primary">More info</Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </InfoConsumer>
  );
};

export default InfoCards;
