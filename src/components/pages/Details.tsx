import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import { InfoConsumer } from "../../libs/contextLib";

const Details: React.FC = (props) => {
  return (
    <InfoConsumer>
      {(value) => {
        const {
          id,
          headerTitle,
          headerSubTitle,
          headerText,
          title,
          description,
          img,
          maps,
        } = value.detailInfo!;
        return <Fragment></Fragment>;
      }}
    </InfoConsumer>
  );
};

export default Details;
