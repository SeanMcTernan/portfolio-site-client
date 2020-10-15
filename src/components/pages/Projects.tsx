import React from "react";
import { InfoConsumer } from "../../libs/contextLib";

const Projects: React.FC = () => {
  return (
    <div>
      <InfoConsumer>
        {data => {
          return <h2>{data}</h2>
        }}
      </InfoConsumer>
    </div>
  );
}

export default Projects;