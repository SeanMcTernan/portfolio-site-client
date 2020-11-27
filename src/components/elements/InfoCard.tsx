import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { InfoConsumer } from "../../libs/contextLib";
import { imgProperties } from "../../libs/projectData";

interface itemTypes {
  id: number;
  headerTitle: string;
  infoCardDescription: string;
  images: imgProperties[];
}

interface Props {
  item: itemTypes;
}

const InfoCards: React.FC<Props> = ({ item }) => {
  const history = useHistory();
  const { id, headerTitle, infoCardDescription, images } = item;
  return (
    <InfoConsumer>
      {(data) => (
        <Col lg={4} className="col-10 mx-auto mb-5">
          <Card
            className="cardsContent"
            style={{
              width: "18rem",
              backgroundColor: "#232325",
              color: "var(--mainWhite)",
              border: "2px solid rgba(46,47,50)",
            }}
          >
            <Card.Img
              variant="top"
              style={{ width: "100%", objectFit: "fill" }}
              alt={headerTitle}
              src={images[0].src}
            />
            <Card.Body className="collapse-content">
              <Card.Title>{headerTitle}</Card.Title>
              <Card.Text>{infoCardDescription}</Card.Text>
              <Button
                variant="outline-info"
                onClick={() => {
                  history.push({
                    pathname: "/details",
                    state: id,
                  });
                }}
              >
                More info
              </Button>
            </Card.Body>
          </Card>
        </Col>
      )}
    </InfoConsumer>
  );
};

export default InfoCards;
